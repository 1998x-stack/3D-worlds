# P0 thumbnails + P1 GLB LOD pipeline

## Exact project scripts

`package.json` defines:
- `npm run generate:previews` → render WebP/AVIF only, **not** raw GLBs.
- `npm run generate:assets` → `scripts/render_assets.mjs` then `scripts/optimize_assets.mjs`.
- `npm run verify:assets` → `scripts/verify_generated.mjs`; checks 640×640 formats, hashes and LOD trends.
- `npm run test:gallery` → headless Gallery browser smoke.
- `node scripts/render_assets.mjs --limit 3` / `node scripts/optimize_assets.mjs --limit 3` are *partial experiments*, not a complete release gate. The full verifier expects all registered procedural assets.

## P0 render

One Vite server, a Playwright Chromium browser, transient WebGL render per procedural asset; capture at 640×640; Sharp compresses to `public/thumbs/<slug>.webp` and `.avif`, with capture summary JSON. GLTFExporter generates raw source under `.cache/raw/<slug>.glb` when not in `--only-images` mode. These are **real renderings** of project geometry, not AI-generated or stock thumbnails. A failure to start headless graphics is a failed step, not permission to fabricate screenshots.

## P1 optimize

`scripts/optimize_assets.mjs` reads raw GLBs, runs glTF Transform dedup/prune, optional weld+simplify, and `EXT_meshopt_compression` for three LOD files:

| Variant | Nominal target ratio | Error limit |
| --- | --- | --- |
| LOD0 | 1.00 | 0 |
| LOD1 | 0.62 | 0.015 |
| LOD2 | 0.32 | 0.05 |

The targets **do not guarantee exact triangle savings or runtime FPS**. Compression reduces transfer payload; it does not guarantee fewer draw calls. `public/generated/index.json` holds the actual SHA-256, file sizes and per-variant triangle counts. Confirm decoder compatibility: Meshopt-enabled files need `MeshoptDecoder` in target `GLTFLoader`.

## Commands

```bash
npm install --no-audit --no-fund
npx playwright install --with-deps chromium
node scripts/validate_models.mjs
npm run generate:assets
npm run verify:assets
npm run build
npm run test:gallery
```

Automated verifier samples Meshopt binary decode rather than loading *every* LOD variant independently. For a production release, add independent viewer loads and visual side-by-side silhouette inspection for each important class, plus mobile GPU FPS and visual regression evidence.

## Imported GLB caveat

The current P0/P1 generation loops over `kind === 'procedural'`. An imported `glb` catalog record is not automatically re-exported or optimized through those scripts. Keep imported source QA distinct, and only claim a downstream variant if independently generated and registered.

## Artifact status

`public/thumbs`, `public/generated` and `.cache/raw` are generated outputs ignored by Git; CI uploads artifacts and deploys relevant public files. A user cloning main without running the pipeline may see only source and manifest. Do not add huge binary collections to Git history or assert local object storage is public CDN.

## Reading upstream documentation

See [external sources](EXTERNAL-SOURCES.md) for official Three.js GLTFExporter, Khronos glTF, glTF Transform, Meshoptimizer, Playwright and Sharp docs. Use versions pinned in `package.json` rather than assuming the latest syntax.

