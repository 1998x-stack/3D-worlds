# V0.5 Release Verification Matrix

This release adds 50 source-backed models across all 13 category IDs without
rewriting the preceding 85 model IDs. It is a procedural game-scene collection,
not scanned photogrammetry, professional art certification or manufacturing CAD.

## Must-pass checks

1. **Catalog:** `python scripts/catalog.py validate && python scripts/catalog.py build`
2. **Collection integrity:** `python -m unittest discover -s tests -v`
   verifies 50 individual modules, source metadata, 135 unique IDs, legacy
   collections and 13 distinct categories.
3. **Geometry:** `node scripts/validate_models.mjs` validates a Three.js
   group per model, finite dimensions, grounded Y bounds, nonempty geometry,
   mesh name uniqueness and triangle limits.
4. **P0/P1:** `npm run generate:assets && npm run verify:assets` produces
   true Chromium-rendered previews and optimized Meshopt GLB LOD0/1/2 files
   from procedural geometry. Expected output: 135 WebP, 135 AVIF, 405 GLB.
5. **P2:** `python scripts/smoke_p2.py` mirrors all 405 optimized variants
   into local SHA-256 object storage and traverses every page of the
   135-item SQLite search API. The API caps individual pages at 100.
6. **Gallery:** `npm run build && npm run test:gallery && npm run test:remote`
   validates image rendering, model inspector, new v0.5 model detail, Chinese
   filtering, remote loading and cursor pagination from real Chromium.
7. **MCP:** `python scripts/smoke_mcp.py` after installing
   `requirements-mcp.txt` checks read-only searchable model metadata.

The CI result is authoritative; a check listed here is not claimed passed
until the GitHub Actions workflow completes successfully.

## Delivery boundaries

- The repository publishes **static** GitHub Pages; a publicly hosted
  S3/MinIO + SQLite API still needs separately deployed infrastructure.
- WebP/AVIF and optimized GLB files are generated in CI from source and
  deployed as Pages artifacts, rather than checked into the source repository.
- All 50 newly authored assets use MIT-licensed procedural source, named
  primitive assemblies and declared dimensions in meters.
- Geometry can contain intersections and lacks rigging/animations or UV texture
  authoring; those would be follow-up quality layers.
