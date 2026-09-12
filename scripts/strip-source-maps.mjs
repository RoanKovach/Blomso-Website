/**
 * Remove any .map files from the static export.
 *
 * `productionBrowserSourceMaps: false` in next.config.ts covers our own code,
 * but Turbopack still emits a map alongside Next's vendored
 * polyfill-nomodule.js. This keeps the published artifact free of .map files.
 */
import { readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";

async function collectMaps(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await collectMaps(full)));
    } else if (entry.name.endsWith(".map")) {
      found.push(full);
    }
  }
  return found;
}

if (!existsSync(OUT_DIR)) {
  console.log(`[strip-source-maps] ${OUT_DIR}/ not found, nothing to do`);
} else {
  const maps = await collectMaps(OUT_DIR);
  for (const file of maps) {
    await rm(file);
    console.log(`[strip-source-maps] removed ${file}`);
  }
  console.log(`[strip-source-maps] ${maps.length} map file(s) removed`);
}
