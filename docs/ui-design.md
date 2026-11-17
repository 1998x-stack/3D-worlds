# UI/UX Design Brief — 3D Worlds Gallery

## Product and interaction goals

Audience: game developers, technical artists, 3D beginners and agent builders.
Primary jobs: discover → inspect geometry → understand license/specs →
copy native source OR download portable GLB → integrate into own scene.
Avoid ecommerce language that implies a payment system.

## Visual system

- Direction: **editorial industrial gallery**, warm paper surfaces, deep
  blue-charcoal hero, clay/copper accent, restrained geometry.
- Fonts: Space Grotesk for headings, DM Sans for body, system fallback.
- Colors: `#101c22` hero, `#f9f8f5` paper, `#d69b74` action,
  `#27373c` active nav, `#687171` secondary.
- Radius: 3–4px. Thin dividers and ample breathing room. No speculative
  ratings, fake download counts or invented sale prices.
- Grid: 3-column desktop, 2-column tablet, two slim columns on narrow mobile.
- Cards: identity + bilingual name + type + visible 3D thumbnail; no extraneous buttons.
- Inspector: dedicated 3D surface with OrbitControls plus explicit affordances
  for copy source, download GLB, copy loader snippet, and copy share link.

## Information architecture

Header → Hero → Category sidebar/search/sort → Cards → Inspector →
technology statement → Footer.

Categories: All, Furniture, Bathroom, Characters. Every asset has an immutable
identifier, localized title, summary, tags, SPDX license, dimensions and type.

## Quality and accessibility

- Semantically correct buttons, focus rings, labeled search and dialog.
- Dialog closes with Escape, backdrop, or close button; focus returned to
  originating card; simple Tab focus trap.
- Keyboard `/` focuses search outside the dialog.
- Clipboard action reports success/error in a live region.
- Model inspection supports pointer/touch; canvas is annotated with controls.
- 3D failure should not block metadata and copy-source actions.
- Under reduced-motion, eliminate decorative animations (future improvement).
- For the first five models, 3D thumbnails are generated only when intersecting
  the viewport. At scale, swap to pre-rendered WebP cards.
- Run real-device QA on Safari, Chrome, Firefox, mobile, WebGL-disabled mode;
  performance numbers must be measured, not assumed.

## UI acceptance checks

1. All five model cards show consistent distinct geometry.
2. Search finds Chinese and English names; category counts remain correct.
3. Clicking a card opens an enlarged, drag-rotatable model with zoom and reset.
4. Copy button contains all helper definitions and a valid Three.js import.
5. GLB export downloads the selected geometry.
6. Direct `?model=furniture.table.oak-study-001` link opens the inspector.
7. Browser back returns to the grid.
8. Focus can navigate and escape the inspector.
