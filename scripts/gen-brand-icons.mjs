/**
 * Regenerates src/icons/brands.ts from simple-icons.
 *
 *   npm i --no-save simple-icons
 *   node scripts/gen-brand-icons.mjs
 *   npm uninstall simple-icons
 *
 * The paths are vendored rather than imported so that a ~20 MB icon package
 * is not a permanent build dependency for twelve logos. Add or remove entries
 * in MAP below when the stack changes, then re-run.
 *
 * simple-icons is CC0-1.0; the marks themselves remain the property of their
 * respective owners and are used here nominatively.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const si = (await import('simple-icons')).default ?? (await import('simple-icons'));

/** content.ts `icon` key -> simple-icons export name */
const MAP = {
  react: 'siReact',
  angular: 'siAngular',
  tauri: 'siTauri',
  typescript: 'siTypescript',
  rust: 'siRust',
  express: 'siExpress',
  node: 'siNodedotjs',
  postgresql: 'siPostgresql',
  mysql: 'siMysql',
  mongodb: 'siMongodb',
  docker: 'siDocker',
  git: 'siGit',
};

const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const parse = (hex) => [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
const lum = ([r, g, b]) => 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
const hex = (rgb) =>
  rgb.map((c) => Math.round(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, '0')).join('');

/** Scale a colour toward black/white until it hits a target luminance, so the
 *  brand keeps its hue instead of collapsing to a grey. */
function retarget(rgb, target, towardWhite) {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 24; i++) {
    const t = (lo + hi) / 2;
    const trial = rgb.map((c) => (towardWhite ? c + (1 - c) * t : c * (1 - t)));
    if (lum(trial) > target) (towardWhite ? (hi = t) : (lo = t));
    else (towardWhite ? (lo = t) : (hi = t));
  }
  const t = (lo + hi) / 2;
  return rgb.map((c) => (towardWhite ? c + (1 - c) * t : c * (1 - t)));
}

// Above this on the cream background the mark washes out; below this on the
// navy background it disappears.
const LIGHT_MAX = 0.5;
const LIGHT_TARGET = 0.36;
const DARK_MIN = 0.12;

const entries = [];
for (const [key, exp] of Object.entries(MAP)) {
  const icon = si[exp];
  if (!icon) throw new Error(`simple-icons has no export "${exp}"`);

  const rgb = parse(icon.hex);
  const L = lum(rgb);

  const light = L > LIGHT_MAX ? hex(retarget(rgb, LIGHT_TARGET, false)) : icon.hex.toLowerCase();
  // Near-black brands (Rust, Angular, Express) have no hue worth preserving,
  // so they take the theme's ink colour rather than a muddy grey.
  const dark = L < DARK_MIN ? 'e9edf5' : icon.hex.toLowerCase();

  entries.push(
    `  ${key}: {\n` +
      `    title: ${JSON.stringify(icon.title)},\n` +
      `    light: '#${light}',\n` +
      `    dark: '#${dark}',\n` +
      `    path: ${JSON.stringify(icon.path)},\n` +
      `  },`
  );
  console.log(`${key.padEnd(12)} #${icon.hex}  L=${L.toFixed(3)}  ->  light #${light}  dark #${dark}`);
}

const out = `/**
 * Brand marks for the skills grid — GENERATED, do not edit by hand.
 * Run \`node scripts/gen-brand-icons.mjs\` to refresh (see that file for setup).
 *
 * Paths and colours come from simple-icons (CC0-1.0). \`light\` and \`dark\`
 * differ only where a brand's official colour would be illegible against that
 * theme's background: over-light marks are darkened toward their own hue,
 * near-black marks fall back to the theme ink colour.
 */
export type BrandIcon = { title: string; light: string; dark: string; path: string };

export const brandIcons: Record<string, BrandIcon> = {
${entries.join('\n')}
};
`;

fs.mkdirSync(path.join(ROOT, 'src/icons'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'src/icons/brands.ts'), out, 'utf8');
console.log(`\nwrote src/icons/brands.ts (${entries.length} icons)`);
