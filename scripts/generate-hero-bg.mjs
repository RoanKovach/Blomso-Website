/**
 * Generate WebP and AVIF variants of the hero background image.
 *
 * Runs as a prebuild step. Only regenerates when the source JPG is
 * newer than the outputs (or outputs are missing).
 *
 * Usage: node scripts/generate-hero-bg.mjs
 */

import { existsSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const src = resolve(root, "public/hero/hero-bg.jpg");
const outputs = [
  { path: resolve(root, "public/hero/hero-bg.webp"), format: "webp", opts: { quality: 80 } },
  { path: resolve(root, "public/hero/hero-bg.avif"), format: "avif", opts: { quality: 55 } },
];

function isStale(target) {
  if (!existsSync(target)) return true;
  return statSync(src).mtimeMs > statSync(target).mtimeMs;
}

const stale = outputs.filter((o) => isStale(o.path));

if (stale.length === 0) {
  console.log("[hero-bg] All variants up to date.");
  process.exit(0);
}

// Only import sharp when we actually need it
const sharp = (await import("sharp")).default;

for (const { path: dest, format, opts } of stale) {
  await sharp(src)[format](opts).toFile(dest);
  console.log(`[hero-bg] Generated ${dest.replace(root + "/", "")}`);
}
