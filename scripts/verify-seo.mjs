// Runs after prerendering and sitemap generation in npm run build.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../vite.config.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
const fixture = '<link rel="preload" as="image" href="/personal.jpg"><link as="image" href="/hero.webp" rel="preload"><link rel="preload" as="image" href="/hero.webp" crossorigin=""><link rel="preload" href="/font.woff2" as="font"><link rel="stylesheet" href="/style.css"><img src="/hero.webp" alt="Hero">';
const filtered = config.ssgOptions.onPageRendered('/', fixture);
assert(!filtered.includes('personal.jpg'));
assert(filtered.includes('<link as="image" href="/hero.webp" rel="preload">'));
assert.equal([...filtered.matchAll(/href="\/hero.webp"/g)].length, 1);
assert(filtered.includes('<link rel="preload" href="/font.woff2" as="font">'));
assert(filtered.includes('<link rel="stylesheet" href="/style.css">'));
assert(!config.ssgOptions.onPageRendered('/', '<link rel="preload" as="image" href="/hero.webp" crossorigin=""><img src="/hero.webp">').includes('crossorigin'));

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith('.html') ? [path] : [];
  });
}

const pages = htmlFiles(dist);
assert(pages.length > 0, 'Build the site before checking generated HTML');
let campaignLinks = 0;
for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  const sources = new Set([...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map((match) => match[1]));
  const preloads = new Set();
  for (const [link] of html.matchAll(/<link\b[^>]*>/g)) {
    if (!/\brel="preload"/.test(link) || !/\bas="image"/.test(link)) continue;
    const href = link.match(/\bhref="([^"]+)"/)?.[1];
    assert(sources.has(href), `Unrelated image preload in ${path}: ${link}`);
    assert(!preloads.has(href), `Duplicate image preload in ${path}: ${link}`);
    assert(!/\bcrossorigin=""/.test(link), `Image preload request mode mismatch in ${path}: ${link}`);
    preloads.add(href);
  }
  assert(!/150\+ questions|no other mainstream app|Most rivals do only one/i.test(html), `Outdated claim in ${path}`);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="(https:\/\/apps\.apple\.com\/[^\"]+)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'));
    assert(url.pathname.endsWith('/id6756160637'), `Bunny App Store destination in ${path}`);
    for (const [key, value] of Object.entries({ pt: '128026361', ct: 'bunny_website', mt: '8' })) {
      assert.equal(url.searchParams.get(key), value, `Apple campaign ${key} in ${path}`);
    }
    campaignLinks++;
  }
}
assert(campaignLinks >= 16, 'Expected homepage, about, article, comparison, and feature CTAs');

const questions = readFileSync(resolve(dist, 'blog/questions-to-ask-long-distance-partner/index.html'), 'utf8');
let count = 0;
for (const heading of ['Deep questions', 'Fun questions', 'Future questions', 'Daily check-in questions']) {
  const list = questions.match(new RegExp(`<h2>${heading}</h2>\\s*<ul>([\\s\\S]*?)</ul>`));
  assert(list, `Missing question category: ${heading}`);
  count += [...list[1].matchAll(/<li>/g)].length;
}
assert.equal(count, 23);
assert.match(questions, /<h1>23 Questions to Ask Your Long-Distance Partner \(2026\)<\/h1>/);

const vercel = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf8'));
assert.equal(vercel.cleanUrls, true);
assert(!vercel.rewrites?.some((rewrite) => rewrite.destination === '/index.html'), 'Do not rewrite missing URLs to the homepage');
const sitemap = readFileSync(resolve(dist, 'sitemap.xml'), 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const location of locations) {
  const path = resolve(dist, `.${new URL(location).pathname}`, 'index.html');
  assert(/<div\b[^>]*\bid="root"[^>]*>\s*</.test(readFileSync(path, 'utf8')), `Missing prerendered content: ${location}`);
}

const features = ['shared-pet-for-couples', 'drawing-widgets-for-couples', 'love-notes-for-couples'];
const titles = new Set();
const descriptions = new Set();
const home = readFileSync(resolve(dist, 'index.html'), 'utf8');
for (const slug of features) {
  const url = `https://www.bunnycouples.com/${slug}/`;
  assert.equal(locations.filter((location) => location === url).length, 1, `Sitemap entry: ${slug}`);
  const html = readFileSync(resolve(dist, slug, 'index.html'), 'utf8');
  const title = html.match(/<title[^>]*>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)?.[1];
  assert(title && !titles.has(title), `Unique title: ${slug}`);
  assert(description && !descriptions.has(description), `Unique description: ${slug}`);
  titles.add(title);
  descriptions.add(description);
  assert(html.includes(`rel="canonical" href="${url}"`), `Canonical: ${slug}`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `Single H1: ${slug}`);
  assert(home.includes(`href="/${slug}"`), `Homepage link: ${slug}`);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const faq = schemas.find((schema) => schema['@type'] === 'FAQPage');
  assert(faq?.mainEntity?.length > 0, `FAQ schema: ${slug}`);
  for (const item of faq.mainEntity) {
    assert(html.includes(`<h3>${item.name}</h3>`), `Visible FAQ question: ${slug}`);
    assert(html.includes(`<p>${item.acceptedAnswer.text}</p>`), `Visible FAQ answer: ${slug}`);
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) {
    assert(readFileSync(resolve(dist, `.${href}`, 'index.html'), 'utf8').length > 0, `Internal link ${href} from ${slug}`);
  }
}
console.log(`SEO checks passed: ${pages.length} HTML pages, 23 questions, 3 feature pages with metadata/FAQ/links, ${campaignLinks} Apple campaign CTAs, route-specific image preloads and static route/config checks.`);
