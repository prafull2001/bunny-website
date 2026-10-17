import assert from 'node:assert/strict';
import { publicPage, initialAttribution, appStorePlacement, sanitizeEvent, startMarketingAnalytics } from '../src/analytics.js';

const origin = 'https://www.bunnycouples.com';
const landing = `${origin}/?utm_source=chatgpt&utm_campaign=launch&email=private%40example.com&token=secret#access_token=secret`;
const attribution = initialAttribution(landing, 'https://chatgpt.com/c/private-conversation?token=secret');
assert.deepEqual(attribution, { initial_landing_page: `${origin}/`, initial_referrer_domain: 'chatgpt.com', utm_source: 'chatgpt', utm_campaign: 'launch' });
assert.deepEqual(initialAttribution(`${origin}/?utm_source=private-token&utm_term=private-search&utm_content=person%40email.com`, ''), { initial_landing_page: `${origin}/`, initial_referrer_domain: '' });
assert.equal(initialAttribution(`${origin}/?utm_source=codex_verification&utm_campaign=codex_verification_20261016`, '').utm_source, 'codex_verification');
for (const source of ['chatgpt.com', 'perplexity.ai', 'claude.ai', 'gemini.google.com']) {
  assert.equal(initialAttribution(`${origin}/?utm_source=${source}`, '').utm_source, source, 'recognized AI source survives an empty referrer');
}
for (const path of ['/confirm', '/confirm/', '/avishi', '/anniversaries', '/not-a-page', '/blog/unknown', '/about/extra']) {
  assert.equal(publicPage(`${origin}${path}?token=secret`), null, path);
}
for (const host of ['localhost', 'bunny-website.vercel.app', 'bunnycouples.com.evil.test']) assert.equal(publicPage(`https://${host}/`), null);
assert.equal(publicPage('http://bunnycouples.com/'), null);
assert.equal(publicPage('https://bunnycouples.com:444/'), null);
assert.equal(publicPage(`${origin}/drawing-widgets-for-couples/?code=secret#token`).url, `${origin}/drawing-widgets-for-couples/`);

const cta = 'https://apps.apple.com/app/apple-store/id6756160637?pt=128026361&ct=bunny_website&mt=8&utm_source=homepage&utm_campaign=hero';
assert.equal(appStorePlacement(cta), 'homepage:hero');
assert.equal(appStorePlacement(cta.replace('apps.apple.com', 'apps.apple.com.evil.test')), null);
assert.equal(appStorePlacement(cta.replace('6756160637', '1234')), null);
assert.equal(appStorePlacement(cta.replace('hero', 'email@example.com')), null);

function fixture(href = landing, privacy = {}) {
  let subscriber;
  const listeners = new Map(), data = new Map(), events = [];
  const browser = {
    location: new URL(href), navigator: privacy,
    sessionStorage: { getItem: (key) => data.get(key), setItem: (key, value) => data.set(key, value), removeItem: (key) => data.delete(key) },
    document: { referrer: 'https://chatgpt.com/c/private?token=secret', addEventListener: (type, fn) => listeners.set(type, fn), removeEventListener: (type) => listeners.delete(type) },
  };
  const sdk = {
    init(token, config) { this.token = token; this.config = config; },
    capture(event, properties, options) {
      const cleaned = this.config.before_send({ event, properties: { token: this.token, distinct_id: 'anonymous-id', $session_id: 'session-id', $window_id: 'window-id', $lib: 'web', email: 'private@example.com', $initial_referrer: browser.document.referrer, $set: { email: 'private@example.com' }, ...properties } });
      if (cleaned) events.push({ ...cleaned, options });
    },
  };
  let loads = 0;
  const router = { subscribe(fn) { subscriber = fn; return () => { subscriber = undefined; }; } };
  const stop = startMarketingAnalytics(router, { browser, loadSdk: async () => { loads++; return { default: sdk }; } });
  const navigate = (path, state = 'idle') => { browser.location = new URL(path, origin); subscriber?.({ navigation: { state } }); };
  const click = () => listeners.get('click')?.({ target: { closest: () => ({ href: cta }) }, defaultPrevented: false });
  return { browser, sdk, events, data, stop, navigate, click, loads: () => loads };
}
const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
const f = fixture();
await settle();
assert.equal(f.events.length, 1, 'exactly one initial pageview');
assert.equal(f.sdk.config.persistence, 'sessionStorage');
assert.equal(f.sdk.config.person_profiles, 'never');
assert.equal(f.sdk.config.autocapture, false);
assert.equal(f.sdk.config.disable_session_recording, true);
assert.equal(f.sdk.config.advanced_disable_flags, true);
f.navigate('/?token=changed#fragment');
assert.equal(f.events.length, 1, 'query/hash changes do not duplicate the pageview');
f.navigate('/shared-pet-for-couples/', 'loading');
assert.equal(f.events.length, 1, 'wait for navigation to finish');
f.navigate('/shared-pet-for-couples/');
f.click();
assert.deepEqual(f.events.map((e) => e.event), ['$pageview', '$pageview', 'app_store_clicked']);
assert.equal(f.events[2].properties.placement, 'homepage:hero');
assert.equal(f.events[2].properties.initial_landing_page, `${origin}/`);
assert.equal(f.events[2].properties.initial_referrer_domain, 'chatgpt.com');
assert.equal(f.events[2].options.transport, 'sendBeacon');
assert.ok(f.events.every((e) => e.properties.token.startsWith('phc_') && e.properties.distinct_id === 'anonymous-id' && e.properties.$session_id === 'session-id'));
assert.ok(f.events.every((e) => e.properties.$process_person_profile === false && e.properties.$geoip_disable === true));
assert.ok(!JSON.stringify(f.events).includes('secret'));
assert.ok(!JSON.stringify(f.events).includes('private'));
assert.ok(!JSON.stringify([...f.data.values()]).includes('secret'));
f.navigate('/confirm?access_token=secret');
f.click();
assert.equal(f.events.length, 3, 'private routes never produce events');
f.navigate('/');
assert.equal(f.events.length, 4, 'return to public page produces a new pageview');
f.browser.navigator.globalPrivacyControl = true;
f.click();
f.navigate('/about');
assert.equal(f.events.length, 4, 'new privacy signal suppresses further capture');
f.stop();

for (const privacy of [{ globalPrivacyControl: true }, { doNotTrack: '1' }, { doNotTrack: 'yes' }, { msDoNotTrack: '1' }]) {
  const blocked = fixture(landing, privacy);
  await settle();
  assert.equal(blocked.loads(), 0, 'privacy signal prevents SDK loading');
  assert.equal(blocked.data.size, 0, 'privacy signal prevents storage writes');
}
for (const href of [`${origin}/confirm?token=secret`, `${origin}/avishi`, `${origin}/anniversaries`, 'http://localhost:5173/', 'https://preview.vercel.app/']) {
  const blocked = fixture(href);
  await settle();
  assert.equal(blocked.loads(), 0, 'excluded pages and hosts never load SDK');
  blocked.stop();
}
const privateEntry = fixture(`${origin}/confirm?token=secret`);
privateEntry.navigate('/love-notes-for-couples/');
await settle();
assert.equal(privateEntry.events[0].properties.initial_landing_page, `${origin}/love-notes-for-couples/`);
privateEntry.stop();

const noStorage = fixture();
Object.defineProperty(noStorage.browser, 'sessionStorage', { get() { throw new Error('storage unavailable'); } });
await settle();
assert.equal(noStorage.sdk.config.persistence, 'memory', 'unavailable storage explicitly falls back to memory');
assert.equal(noStorage.events.length, 1);
assert.equal(sanitizeEvent({ event: '$autocapture', properties: {} }, noStorage.browser, attribution), null);
noStorage.stop();
console.log('Analytics checks passed: public routes, privacy signals, URL redaction, initial attribution, SPA pageviews, CTA placement, SDK token and storage fallback.');
