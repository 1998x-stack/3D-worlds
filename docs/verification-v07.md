# V0.7 Release Gate — 235 assets

## Catalog
- Exactly 235 unique `id` and `slug` pairs, 185 retained historical entries, 50 independent V0.7 source files across 13 existing categories.
- `python scripts/catalog.py validate && python scripts/catalog.py build && python -m unittest discover -s tests -v`.
- `tests/test_collection_v07.py` requires at least nine distinctly named mesh parts per new asset and cross-verifies metadata, source code, geometry recipe and dimensions.

## Geometry and binaries
- `node scripts/validate_models.mjs`: generate 235 Three.js groups; detect degenerate bounds, negative floor, duplicate mesh names, triangle and dimension problems.
- `npm run generate:assets && npm run verify:assets`: **235 WebP + 235 AVIF**, **705 optimized GLB** files covering LOD0, LOD1, LOD2; validate actual decodability and SHA-256 object hashes.
- `python scripts/smoke_p2.py`: mirror 705 actual GLBs to local SHA-256 immutable store, query new V0.7 asset metadata for all LOD levels, and verify complete 235-asset cursor pagination.

## Browser and integration
- `npm run build && npm run test:gallery && npm run test:remote`: real Chromium previews, V0.7 sci-fi model inspector, Chinese filtering and remote pagination.
- `python scripts/smoke_mcp.py` when the MCP SDK is installed: read-only source / database lookups.
- `python scripts/verify_skill_mirrors.py` and canonical Skill preflight: portable Codex/Pi/Claude Skill v2 mirrors remain intact.

## Publishing boundaries
- Publish main branch by GitHub Pages only after CI is green. A green PR is not equivalent to main's Pages deployment.
- These are stylized scene models, not CAD-perfect or rigged production art. Record visual-review gaps separately.
- External hosted object storage and API remain separate infrastructure from static GitHub Pages.
