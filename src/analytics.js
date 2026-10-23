// Only public marketing pages are measured; adding a route requires an explicit review.
const PUBLIC_PATHS = new Set([
  '/', '/about', '/pricing', '/contact', '/privacy', '/terms', '/compare', '/blog',
  '/shared-pet-for-couples', '/drawing-widgets-for-couples', '/love-notes-for-couples',
  '/compare/bunny-vs-paired', '/compare/bunny-vs-lovelee',
  '/compare/bunny-vs-widgetable', '/compare/apps-like-locket-for-couples',
  '/blog/best-apps-for-long-distance-couples-2026',
  '/blog/long-distance-relationship-games', '/blog/questions-to-ask-long-distance-partner',
  '/blog/tamagotchi-for-couples',
]);
const HOSTS = new Set(['bunnycouples.com', 'www.bunnycouples.com']);
const ORIGIN = 'https://www.bunnycouples.com';
const PROJECT_TOKEN = 'phc_zJhrE7SQDj67aoYScSztAgWsFvhPscyUEHzdMpZnqif2';
const ATTRIBUTION_KEY = 'bunny_marketing_attribution';
const CAMPAIGNS = {
  utm_source: ['google', 'bing', 'chatgpt', 'chatgpt.com', 'chat.openai.com', 'openai', 'perplexity', 'perplexity.ai', 'claude', 'claude.ai', 'gemini', 'gemini.google.com', 'instagram', 'tiktok', 'facebook', 'youtube', 'reddit', 'pinterest', 'threads', 'x', 'twitter', 'newsletter', 'bunny', 'codex_verification'],
  utm_medium: ['organic', 'social', 'referral', 'email', 'cpc', 'paid_social'],
  utm_campaign: ['launch', 'organic', 'bunny_website', 'codex_verification_20261016'],
  utm_content: ['bio', 'link-in-bio', 'story', 'reel', 'post', 'profile', 'qr', 'video'],
};
const PLACEMENTS = {
  homepage: ['nav', 'hero'], about: ['about-page'],
  'shared-pet': ['hero', 'footer'], 'drawing-widgets': ['hero', 'footer'],
  'love-notes': ['hero', 'footer'],
  pricing: ['hero', 'footer'],
  blog: ['best-apps-roundup', 'ldr-games', 'ldr-questions', 'tamagotchi-for-couples'],
  compare: ['bunny-vs-paired', 'bunny-vs-lovelee', 'bunny-vs-widgetable', 'apps-like-locket-for-couples'],
};

export function publicPage(href) {
  try {
    const url = new URL(href);
    const path = url.pathname.replace(/\/$/, '') || '/';
    if (url.protocol !== 'https:' || url.port || !HOSTS.has(url.hostname) || !PUBLIC_PATHS.has(path)) return null;
    return { url: `${ORIGIN}${path === '/' ? '/' : `${path}/`}`, path };
  } catch { return null; }
}

export function privacyRequested(browser) {
  return browser.navigator.globalPrivacyControl === true ||
    [browser.navigator.doNotTrack, browser.doNotTrack, browser.navigator.msDoNotTrack]
      .some((value) => value === '1' || value === 'yes');
}

function campaignValues(values) {
  return Object.fromEntries(Object.entries(CAMPAIGNS)
    .filter(([key, allowed]) => allowed.includes(values[key]))
    .map(([key]) => [key, values[key]]));
}

function referrerDomain(referrer) {
  try {
    const url = new URL(referrer);
    return ['http:', 'https:'].includes(url.protocol) && !HOSTS.has(url.hostname) ? url.hostname : '';
  } catch { return ''; }
}

export function initialAttribution(href, referrer) {
  return {
    initial_landing_page: publicPage(href)?.url,
    initial_referrer_domain: referrerDomain(referrer),
    ...campaignValues(Object.fromEntries(new URL(href).searchParams)),
  };
}

export function appStorePlacement(href) {
  try {
    const url = new URL(href);
    const source = url.searchParams.get('utm_source');
    const campaign = url.searchParams.get('utm_campaign');
    if (url.protocol !== 'https:' || url.hostname !== 'apps.apple.com' ||
        !/\/id6756160637\/?$/.test(url.pathname) || !PLACEMENTS[source]?.includes(campaign)) return null;
    return `${source}:${campaign}`;
  } catch { return null; }
}

// The SDK adds URL/device/person fields of its own. Rebuild properties at the final send boundary.
export function sanitizeEvent(event, browser, attribution) {
  if (!event || !['$pageview', 'app_store_clicked'].includes(event.event) ||
      privacyRequested(browser) || !publicPage(browser.location.href)) return null;
  const page = publicPage(event.properties?.$current_url);
  if (!page) return null;
  const properties = {};
  for (const key of ['distinct_id', '$session_id', '$window_id', '$pageview_id', '$lib', '$lib_version']) {
    if (typeof event.properties[key] === 'string') properties[key] = event.properties[key];
  }
  const placement = event.properties.placement;
  if (event.event === 'app_store_clicked' &&
      !Object.entries(PLACEMENTS).some(([source, labels]) => labels.some((label) => `${source}:${label}` === placement))) return null;
  return {
    ...event,
    properties: {
      ...properties, token: PROJECT_TOKEN, $process_person_profile: false,
      $is_identified: false, $geoip_disable: true,
      $current_url: page.url, $pathname: page.path, $host: 'www.bunnycouples.com',
      $referring_domain: attribution.initial_referrer_domain || '$direct',
      $referrer: attribution.initial_referrer_domain ? `https://${attribution.initial_referrer_domain}/` : '$direct',
      ...attribution,
      ...(event.event === 'app_store_clicked' ? { placement } : {}),
    },
  };
}

function sessionStorageIfAvailable(browser) {
  try {
    const storage = browser.sessionStorage;
    storage.setItem('bunny_analytics_probe', '1');
    storage.removeItem('bunny_analytics_probe');
    return storage;
  } catch { return null; }
}

function readAttribution(storage, href, referrer) {
  try {
    const saved = JSON.parse(storage?.getItem(ATTRIBUTION_KEY) || 'null');
    if (publicPage(saved?.initial_landing_page)) {
      return {
        initial_landing_page: publicPage(saved.initial_landing_page).url,
        initial_referrer_domain: referrerDomain(`https://${saved.initial_referrer_domain || ''}`),
        ...campaignValues(saved),
      };
    }
  } catch { /* Storage can be unavailable or cleared while a tab is open. */ }
  const attribution = initialAttribution(href, referrer);
  try { storage?.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution)); } catch { /* Keep this page's attribution in memory. */ }
  return attribution;
}

export function startMarketingAnalytics(router, {
  browser = window,
  loadSdk = () => import('posthog-js/no-external'),
} = {}) {
  if (!HOSTS.has(browser.location.hostname) || privacyRequested(browser)) return () => {};
  let sdk, loading, attribution, storage, lastPath;
  // shortcut: a full unload before SDK load can lose events; revisit loading policy if measured loss warrants it.
  const pending = [];
  let stopped = false;
  const canTrack = () => !stopped && !privacyRequested(browser) && publicPage(browser.location.href);
  const ensureSdk = () => {
    if (sdk || loading) return;
    if (!attribution) {
      storage = sessionStorageIfAvailable(browser);
      attribution = readAttribution(storage, browser.location.href, browser.document.referrer);
    }
    loading = Promise.resolve().then(loadSdk).then(({ default: posthog }) => {
      if (!canTrack()) {
        if (privacyRequested(browser)) pending.length = 0;
        return;
      }
      posthog.init(PROJECT_TOKEN, {
        api_host: 'https://us.i.posthog.com', ui_host: 'https://us.posthog.com',
        persistence: storage ? 'sessionStorage' : 'memory', person_profiles: 'never',
        autocapture: false, capture_pageview: false, capture_pageleave: false,
        capture_heatmaps: false, capture_dead_clicks: false, rageclick: false,
        capture_exceptions: false, capture_performance: false,
        disable_session_recording: true, disable_surveys: true,
        disable_external_dependency_loading: true, advanced_disable_flags: true,
        save_referrer: false, save_campaign_params: false, disable_capture_url_hashes: true,
        respect_dnt: true,
        before_send: (event) => sanitizeEvent(event, browser, attribution),
      });
      sdk = posthog;
      for (const queued of pending.splice(0)) {
        if (canTrack()) sdk.capture(queued.event, queued.properties, queued.options);
      }
    }).catch(() => {
      // Analytics must never prevent navigation or hydration.
      pending.length = 0;
      lastPath = undefined;
    }).finally(() => { loading = undefined; });
  };
  const capture = (event, properties) => {
    if (!canTrack()) return;
    const options = {
      timestamp: new Date(),
      ...(event === 'app_store_clicked' ? { transport: 'sendBeacon', send_instantly: true } : {}),
    };
    if (sdk) sdk.capture(event, properties, options);
    else {
      // Retain the landing event and the latest 19 events during a slow SDK load.
      if (pending.length === 20) pending.splice(1, 1);
      pending.push({ event, properties, options });
      ensureSdk();
    }
  };
  const trackPage = () => {
    const page = canTrack();
    if (!page) {
      lastPath = undefined;
      if (privacyRequested(browser)) pending.length = 0;
      return;
    }
    if (page.path !== lastPath) {
      lastPath = page.path;
      capture('$pageview', { $current_url: page.url });
    }
  };
  const onClick = (event) => {
    const page = canTrack();
    const href = event.target?.closest?.('a[href]')?.href;
    const placement = href && appStorePlacement(href);
    if (page && placement && !event.defaultPrevented) {
      capture('app_store_clicked', { $current_url: page.url, placement });
    }
  };
  const unsubscribe = router.subscribe((state) => {
    if (state.navigation.state === 'idle') trackPage();
  });
  browser.document.addEventListener('click', onClick);
  trackPage();
  return () => {
    stopped = true;
    pending.length = 0;
    unsubscribe();
    browser.document.removeEventListener('click', onClick);
  };
}
