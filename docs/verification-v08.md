# V0.8 Acceptance / 285 3D Assets

## Manifest & backwards compatibility
- 235 historical unique IDs + 50 entirely new independent `src/models/*.js` modules.
- 13 categories; 50 unique v0.8 IDs and slugs; 1160 new individually named geometrical parts.
- `tests/test_collection_v04.py`, `test_collection_v05.py`, `test_collection_v06.py`, `test_collection_v07.py` remain active, and new `test_collection_v08.py` asserts all 50 metadata and real recipes.

## Visual, GLB & browser
- `node scripts/validate_models.mjs`: 285 verified Three.js groups with correct physical bounds, no duplicate mesh names, nondegenerate geometry and 100k triangle limit.
- `npm run generate:assets && npm run verify:assets`: 285 WebP + 285 AVIF thumbnails; **855 decodable, optimized GLB LOD variants**.
- `python scripts/smoke_p2.py`: 855 local SHA-256 objects and 285 unique IDs via cursor pagination, not one `limit=100` page.
- `npm run build && npm run test:gallery && npm run test:remote`: true thumbnail rendering, clickable V0.8 orbital-navigation-beacon inspector, Chinese search, WebGL and full remote pagination.
- Python MCP SDK v2 integration: source and SQLite read-only lookup.

## Publication gate
- Do not merge V0.8 PR until green end-to-end verification. Then ensure **main** workflow deploy-pages job succeeds before declaring GitHub Pages live.
- External hosted object storage and dynamic API remain separate deployable infrastructure.
