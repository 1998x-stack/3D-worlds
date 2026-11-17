# V1.2 QA & Delivery Checklist

## Original assets and historical compatibility
- 485 catalog records: previous 435 preserved and 50 independently authored V1.2 models.
- 13 categories, distribution 11 × 4 + 2 × 3 = 50.
- 1,414 named Mesh primitives in the 50 new generators, min 18 per model.
- No duplicate ID/slug/source paths; MIT original geometry; bilingual IDs, dimensions in meters, Y-up.
- Dedicated V1.2 tests and compatibility adjustments to V0.4–V1.1 test suites.

## Required CI gates
1. Python catalog validate and SQLite build, unit tests.
2. All 485 Three.js factories/geometry checked for finite bounds.
3. 485 WebP + 485 AVIF and 1,455 Meshopt GLB variants generated and hash verified.
4. Local P2 content-addressed files, 13-category paginated API, 3 LOD download tests.
5. V1.2 browser inspector WebGL, remote search, Chinese query smoke, MCP SDK check.
6. Merge only after successful PR CI, separately validate main Pages deploy.

No promise of production S3/MinIO credentials, 3D-print-ready watertight geometry, PBR, animations or rigged characters.
