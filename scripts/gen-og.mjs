// Generates branded 1200x630 Open Graph cards into public/og/.
// Run locally with `node scripts/gen-og.mjs` and commit the output (it is NOT
// part of the CI build, so it has no effect on deploy reliability).
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const outDir = resolve(root, 'public/og');
mkdirSync(outDir, { recursive: true });

// Bunny logo as a base64 data URI so it embeds cleanly in the SVG.
const logoPath = resolve(root, 'public/bunny-logo.png');
const logoData = readFileSync(logoPath).toString('base64');
const logoUri = `data:image/png;base64,${logoData}`;

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function card({ heading, sub }) {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F7FBF5"/>
      <stop offset="1" stop-color="#E3EEDA"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="40" y="40" width="1120" height="550" rx="36" fill="#FFFFFF" fill-opacity="0.55" stroke="#B0C291" stroke-opacity="0.4"/>
  <image href="${logoUri}" x="90" y="86" width="96" height="96"/>
  <text x="205" y="152" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="700" fill="#3A4735">Bunny</text>
  <text x="92" y="330" font-family="Helvetica, Arial, sans-serif" font-size="74" font-weight="800" fill="#3A4735">${esc(heading)}</text>
  <text x="94" y="408" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="400" fill="#5C6E52">${esc(sub)}</text>
  <text x="94" y="540" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="600" fill="#75866D">bunnycouples.com</text>
</svg>`;
}

const cards = [
  { file: 'og-default.jpg', heading: 'The app for couples', sub: 'A shared pet, doodles, love notes & games — your home for two.' },
  { file: 'og-home.jpg', heading: 'Together, miles apart', sub: 'The all-in-one app for couples, especially long distance.' },
  { file: 'og-about.jpg', heading: 'About Bunny', sub: 'One shared home for two — instead of five separate apps.' },
  { file: 'og-compare.jpg', heading: 'Compare couples apps', sub: 'Bunny vs Paired, lovelee, Widgetable & Locket — honestly.' },
  { file: 'og-blog.jpg', heading: 'Long-distance guides', sub: 'Ideas, games & questions to feel close from afar.' },
];

for (const c of cards) {
  await sharp(Buffer.from(card({ heading: c.heading, sub: c.sub })))
    .jpeg({ quality: 82 })
    .toFile(resolve(outDir, c.file));
  console.log('wrote', c.file);
}
