// Runs after `vite-react-ssg build`. Walks the generated dist/ directory,
// derives the public URL for every pre-rendered page, and writes sitemap.xml.
// Because it reads the actual build output, the sitemap can never drift from
// the real pages. noindex routes are excluded.
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../dist');
const ORIGIN = 'https://www.bunnycouples.com';

// Routes kept out of the index (match their <Seo noindex>).
const EXCLUDE = new Set(['/confirm', '/avishi', '/anniversaries']);

// Collect every dist/**/index.html and turn it into a route path.
function collectRoutes(dir, base = '') {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry);
    if (statSync(full).isDirectory()) {
      // skip Vite internals like assets/ and .vite/
      if (entry.startsWith('.') || entry === 'assets' || entry === 'og') continue;
      routes.push(...collectRoutes(full, `${base}/${entry}`));
    } else if (entry === 'index.html') {
      routes.push(base === '' ? '/' : base);
    }
  }
  return routes;
}

function priorityFor(route) {
  if (route === '/') return '1.0';
  if (route === '/compare' || route === '/blog') return '0.9';
  if (route.startsWith('/compare/') || route.startsWith('/blog/')) return '0.8';
  if (route === '/about') return '0.7';
  if (route === '/privacy' || route === '/terms' || route === '/contact') return '0.4';
  return '0.6';
}

const today = new Date().toISOString().slice(0, 10);
const routes = collectRoutes(dist)
  .filter((r) => !EXCLUDE.has(r))
  .sort();

// GitHub Pages serves /about from /about/index.html and redirects /about ->
// /about/, so the sitemap (like the canonicals) uses the trailing-slash form.
const loc = (r) => `${ORIGIN}${r === '/' ? '/' : `${r}/`}`;
const urls = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${loc(r)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r === '/' || r === '/blog' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${priorityFor(r)}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(dist, 'sitemap.xml'), xml);
console.log(`[postbuild] wrote sitemap.xml with ${routes.length} URLs`);
