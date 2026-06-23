// Single source of truth for all SEO/GEO metadata.
// Change the domain or app facts here and they propagate to every page,
// the sitemap, robots.txt, structured data, and the llms.txt files.

export const SITE = {
  name: 'Bunny',
  // Full marketing name used in titles / schema
  appName: 'Bunny — Love Notes for Couples',
  // Canonical origin (no trailing slash). The site is served from www.
  url: 'https://www.bunnycouples.com',
  locale: 'en_US',
  themeColor: '#95A16D',

  // One-liner reused across meta descriptions, schema, and llms.txt
  tagline: 'Your digital home for two.',
  description:
    'Bunny is the all-in-one app for couples — especially long distance. Raise a shared virtual pet, draw together on a live canvas, send love notes, play mini-games, and check in daily. Free on iPhone.',

  appStoreUrl:
    'https://apps.apple.com/us/app/bunny-love-notes-for-couples/id6756160637',
  appStoreId: '6756160637',

  contactEmail: 'prafull2001@gmail.com',

  founder: {
    name: 'Prafull Sharma',
    url: 'https://prafullsharma.me',
    sameAs: [
      'https://prafullsharma.me',
      'https://github.com/prafull2001',
      'https://www.linkedin.com/in/prafull-sharma-363187168/',
    ],
  },

  pricing: {
    proWeekly: '1.99',
    lifetime: '19.99',
    currency: 'USD',
  },

  // Default social card. Per-page OG images override this.
  ogImage: '/og/og-default.jpg',
  twitterCard: 'summary_large_image',
};

// Build an absolute URL from an asset/file path (no trailing-slash normalization).
// abs('/og/og-home.jpg') -> https://www.bunnycouples.com/og/og-home.jpg
export function abs(path = '/') {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.url}${path.startsWith('/') ? '' : '/'}${path}`;
}

// Build an absolute URL for a PAGE, with a trailing slash on sub-pages.
// GitHub Pages serves /about from /about/index.html and 301-redirects /about ->
// /about/, so the canonical/og:url/sitemap must use the trailing-slash form.
// pageUrl('/') -> https://www.bunnycouples.com/
// pageUrl('/about') -> https://www.bunnycouples.com/about/
export function pageUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path;
  let p = path.startsWith('/') ? path : `/${path}`;
  if (p !== '/' && !p.endsWith('/')) p += '/';
  return `${SITE.url}${p}`;
}

// Append UTM params to the App Store link so we can attribute installs by surface.
export function appStoreLink(source = 'website', campaign = 'cta') {
  const u = new URL(SITE.appStoreUrl);
  u.searchParams.set('utm_source', source);
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', campaign);
  return u.toString();
}
