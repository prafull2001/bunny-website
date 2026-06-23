import { Head } from 'vite-react-ssg';
import { SITE, abs, pageUrl } from './siteConfig';

/**
 * Renders all per-page <head> tags: title, description, canonical,
 * Open Graph, Twitter card, robots, and any JSON-LD schema blocks.
 *
 * Props:
 *  - title:        full <title> string (page is responsible for branding)
 *  - description:  meta description (~150-160 chars)
 *  - path:         route path, e.g. '/about' — used for canonical + og:url
 *  - image:        OG image path (defaults to site default)
 *  - type:         og:type ('website' | 'article')
 *  - noindex:      true to keep the page out of search indexes
 *  - schema:       a JSON-LD object or array of objects
 */
export default function Seo({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  type = 'website',
  noindex = false,
  schema,
}) {
  const canonical = pageUrl(path);
  const ogImage = abs(image);
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={SITE.twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content={SITE.themeColor} />
      <meta name="apple-itunes-app" content={`app-id=${SITE.appStoreId}`} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Head>
  );
}
