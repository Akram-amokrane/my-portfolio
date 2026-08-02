# Akram Amokrane — Portfolio

Bilingual (FR/EN) portfolio built with **Astro 5**, **Tailwind CSS 4** and **Three.js**.
Static output, no backend, deployable anywhere.

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:4321>.

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with HMR on port 4321 |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |

---

## Add your photo (background removal)

The hero shows a stylised monogram until `public/portrait.png` exists. To use your
own photo with the background cut out:

```bash
pip install rembg onnxruntime pillow
```

```bash
python scripts/remove-bg.py "C:/Users/gaming/Downloads/your-photo.jpg"
```

That writes a transparent, auto-cropped `public/portrait.png` and the hero picks it
up on the next refresh. The first run downloads the matting model (~180 MB) once.

Flags: `--out <path>` to write elsewhere, `--keep-canvas` to skip the auto-crop.

If you would rather cut it out by hand, just drop any transparent PNG at
`public/portrait.png` — a portrait aspect ratio around 4:5 fits the frame best.

---

## Editing the content

**All text lives in one file: [`src/i18n/content.ts`](src/i18n/content.ts).**

It exports a `fr` and an `en` dictionary with the same shape, so the two languages
can never drift apart structurally — TypeScript fails the build if one is missing a
field. Contact details, the tech-tag list and links live in the `profile` and
`techTags` exports at the top of that file.

> The spaces before `:` `?` `%` in the French strings are non-breaking (U+00A0), per
> French typography. Keep them if you edit those lines.

Routing:

- `/` → French (default, un-prefixed)
- `/en/` → English

Both are generated from `src/components/Page.astro`, so a section added there shows
up in both languages automatically.

---

## Design system

Colours are CSS custom properties in [`src/styles/global.css`](src/styles/global.css),
defined once for `:root` (light) and once for `.dark`, then mapped into Tailwind with
`@theme inline` so utilities re-resolve live when the theme flips.

| Token | Meaning |
| --- | --- |
| `--ember` | Rust orange — primary accent |
| `--cyan` | Machine-learning cyan — secondary |
| `--violet` | Research accent, used sparingly |
| `--bg` / `--surface` | Deep navy (dark) / warm paper (light) |

Fonts are self-hosted via `@fontsource` — no external requests: **Space Grotesk**
(display), **Inter** (body), **JetBrains Mono** (labels).

### Skills: evidence, not percentages

The skills section deliberately has **no proficiency bars**. A self-assigned
"React 92%" is unverifiable and reads as padding. Each category instead carries
a one-line `note` saying where the stack was actually used, and the
technologies appear as chips with their real brand marks.

Brand paths and colours are vendored in
[`src/icons/brands.ts`](src/icons/brands.ts) — generated, not hand-edited. To
change the stack, edit `MAP` in
[`scripts/gen-brand-icons.mjs`](scripts/gen-brand-icons.mjs) and run:

```bash
npm i --no-save simple-icons && node scripts/gen-brand-icons.mjs && npm uninstall simple-icons
```

The generator emits a `light` and a `dark` colour per mark, adjusting only the
ones that would be illegible: over-light brands (React) are darkened along
their own hue for the cream background, and near-black brands (Rust, Angular,
Express) take the theme ink colour on the navy one. Technologies with no brand
mark — REST API, WebSockets, the ML entries — use outline glyphs defined in
`Skills.astro`.

---

## 3D & motion

| Piece | File |
| --- | --- |
| Hero "neural core" — 14k GPU particles displaced by simplex noise | `src/scripts/hero-scene.ts` |
| Draggable 3D skill tag sphere (real DOM text, perspective-projected) | `src/scripts/tag-sphere.ts` |
| Theme, smooth scroll, reveals, tilt, counters, cursor | `src/scripts/main.ts` |

Both 3D pieces are dynamically imported, so Three.js never blocks first paint. They
also pause when off-screen or when the tab is hidden.

**Everything degrades.** No WebGL → the hero falls back to a gradient. No JS → the
page is fully readable and the tag sphere stays a plain tag cloud.
`prefers-reduced-motion` disables smooth scrolling, parallax, the typewriter and the
particle animation.

---

## Deploying

The build is plain static files, so any host works.

```bash
npm run build
```

Upload `dist/`, or connect the repo to Vercel/Netlify (they auto-detect Astro; build
`npm run build`, output `dist`).

One thing to change on your own domain: `site` in
[`astro.config.mjs`](astro.config.mjs). It is currently
`https://akram-amokrane.vercel.app` and feeds the canonical URL, `hreflang` tags and
Open Graph URLs.

To regenerate the social card after changing anything, edit `public/og.png`
(1200×630).
