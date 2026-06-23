// JSON-LD structured-data builders. Kept as plain objects so any page
// can compose them and hand them to <Seo schema={...} />.
//
// NOTE: We intentionally do NOT emit aggregateRating. The app currently has
// too few ratings to assert a credible count, and inventing one is a quality
// risk (and against Google's structured-data guidelines).

import { SITE, abs, pageUrl } from './siteConfig';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    alternateName: 'Bunny App',
    url: SITE.url,
    logo: abs('/bunny-logo.png'),
    description: SITE.description,
    email: SITE.contactEmail,
    founder: {
      '@type': 'Person',
      name: SITE.founder.name,
      url: SITE.founder.url,
      sameAs: SITE.founder.sameAs,
    },
    sameAs: [SITE.appStoreUrl, ...SITE.founder.sameAs],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.appName,
    operatingSystem: 'iOS',
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: 'Relationship & Couples App',
    description: SITE.description,
    url: SITE.url,
    downloadUrl: SITE.appStoreUrl,
    installUrl: SITE.appStoreUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: SITE.pricing.currency,
      description: `Free to download. Bunny Pro from $${SITE.pricing.proWeekly}/week or $${SITE.pricing.lifetime} lifetime.`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function breadcrumbSchema(items) {
  // items: [{ name, path }]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqSchema(qa) {
  // qa: [{ q, a }]  (a = plain text)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function articleSchema({ title, description, path, datePublished, dateModified, author, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? abs(image) : abs(SITE.ogImage),
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Person', name: author || SITE.founder.name, url: SITE.founder.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: abs('/bunny-logo.png') },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl(path) },
  };
}

export function itemListSchema(items) {
  // items: [{ name, path }] — used for the comparison hub & listicles
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: pageUrl(item.path),
    })),
  };
}
