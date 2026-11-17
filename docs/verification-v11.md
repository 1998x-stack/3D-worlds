# V1.1 Delivery and QA — 435 3D Models

## Invariants
- Keep all 385 previous IDs, slugs, metadata and source paths untouched.
- Add exactly 50 new original source modules with immutable IDs and MIT authorship.
- Cover exactly 13 categories: 11 × 4 + 2 × 3 assets.
- Match `catalog/models.json`, `catalog/public_models.json`, and `catalog/collections/v11.json`.
- Confirm 1,465 named Mesh parts across the new collection. Minimum 12 per generator.
- Every procedural generator returns finite-bounds Three.js Group aligned to Y=0 with nondegenerate geometry.

## Gates
1. `python scripts/catalog.py validate && python scripts/catalog.py build && python -m unittest discover -s tests -v`
2. `npm ci && node scripts/validate_models.mjs` — 435 generators, geometric budget.
3. `npm run generate:assets && npm run verify:assets` — 435 WebP, 435 AVIF, 1,305 LOD0/1/2 Meshopt GLB, validation and SHA-256.
4. `python scripts/smoke_p2.py` — local immutable object store + cursor-paginated SQLite API.
5. `npm run build && npm run test:gallery && npm run test:remote` — V1.1 live WebGL inspector, true thumbnail loading and remote search.
6. MCP SDK v2 integration smoke.
7. Merge after successful PR CI; confirm the **main** commit and Pages deployment independently.

Not verified without separate work: commercial PBR quality, rigging, UV unwrapping, 3D-print water-tightness, production S3/MinIO credentials.
