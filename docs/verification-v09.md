# V0.9 Release Gate / 335 Source-backed Assets

## Immutable history

- Verify existing **285 IDs, slugs and source paths** have not changed.
- Validate **50** new V0.9 unique IDs, **13** categories, and **1,068** individually named mesh parts.
- Each new file has its own `assetMeta`, `createXxx()` and JSON-compatible `buildRecipe({title, dimensions, parts})` definition, physically valid positive bounds.
- Model parameters are in meters, floor aligned to Y=0, geometry is original and licensed MIT.

## CI acceptance

1. `python3 scripts/catalog.py validate` and `python3 -m unittest discover -s tests -v` pass, including V0.4–V0.9 and 335-record static export.
2. `node scripts/validate_models.mjs` instantiates **335** procedural Three.js Group models without duplicate mesh names, invalid bounds, or triangle budgets.
3. `npm run generate:assets && npm run verify:assets` produces **335 WebP, 335 AVIF and 1,005 Meshopt LOD0/1/2 GLBs**, validating decodability and hashes.
4. `python scripts/smoke_p2.py` checks content-addressed local objects and paginated SQLite API results.
5. `npm run build && npm run test:gallery && npm run test:remote` checks WebGL/browser, gallery cards and remote search; MCP SDK v2 smoke remains active.
6. Only merge after all checks are green. Then verify Pages deploy from main before claiming a live release.

**Not claimed:** remote S3/MinIO hosting in absence of credentials, commercial-grade PBR art, rigged humanoid animation, or 3D-print-ready watertight CAD meshes.
