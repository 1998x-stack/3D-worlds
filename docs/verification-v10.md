# V1.0 acceptance gate — 385 original 3D assets

## Catalog and provenance

- 335 immutable historical model IDs + 50 independent V1.0 models, no IDs/slugs/source paths overwritten.
- Exactly 13 categories; count distribution 11 categories × 4 + 2 categories × 3 = 50.
- 1,232 individually named meshes in source-backed procedural `buildRecipe` definitions.
- Each asset exposes `assetMeta` and a `createXxx()` factory, valid metric dimensions, floor alignment, MIT original source.
- `tests/test_collection_v10.py` checks the 50 new modules and all historical counts, with previous suites preserved.

## Full CI before merge

1. `python3 scripts/catalog.py validate && python3 scripts/catalog.py build && python3 -m unittest discover -s tests -v`.
2. `npm ci && node scripts/validate_models.mjs` validates all 385 3D Groups and finite bounding boxes.
3. `npm run generate:assets && npm run verify:assets` emits 385 WebP, 385 AVIF, **1,155 Meshopt GLB LOD0/1/2** with validated decodability and hashes.
4. `python scripts/smoke_p2.py` checks SQLite cursor pagination and 1,155 content-addressed local files.
5. `npm run build && npm run test:gallery && npm run test:remote` validates cards, WebGL inspectors and dynamic search; MCP SDK integration remains active.
6. Merge PR only on successful full verification, then check main deployment and Pages result.

No claim of remote S3/MinIO credentials, external cloud deployment, watertight 3D-print meshes or rigged characters.
