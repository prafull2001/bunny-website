// One-off: convert oversized homepage PNGs to right-sized WebP for fast LCP.
// Run locally with `node scripts/optimize-images.mjs`; commit the .webp output.
// The homepage imports the .webp versions; originals are kept for reference.
import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = resolve(__dirname, '../src/assets');

// [source, maxWidth] — phone screenshots display ~300px CSS, so 720px covers 2x.
const jobs = [
  ['screenshot-home', 720],
  ['screenshot-whiteboard', 720],
  ['screenshot-pet', 720],
  ['screenshot-games', 720],
  ['bunny-pet', 480],
  ['bunny-logo', 240],
];

for (const [name, width] of jobs) {
  const src = resolve(assets, `${name}.png`);
  const out = resolve(assets, `${name}.webp`);
  const info = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(`${name}.webp  ${(info.size / 1024).toFixed(0)} KB`);
}
