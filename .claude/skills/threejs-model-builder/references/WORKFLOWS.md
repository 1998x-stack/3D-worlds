# Task playbooks · procedural / recipe / imported / bulk

## Decision tree

1. Need editable new prop assembled from boxes/spheres/rods? Use procedural code and `scripts/new_model.py`.
2. Need many parameterized stylized variants composed from named primitives? Use `buildRecipe(spec)` and register one export for each ID.
3. Have third-party binary? Use `scripts/ingest_glb.mjs`; audit license before accepting geometry.
4. Need output only? Query catalog/MCP first, avoid unnecessary cloning or duplicating the model.
5. Need editable CAD, physical tolerances, or watertight print files? This repo is a game/web visualization platform. Mark unsupported and specify additional CAD/manifold QA; never treat GLB as STEP or manufacturing proof.

## Single procedural asset (detailed)

1. Search for existing `slug`, `id` and near-duplicate category/tag in `catalog/models.json`; inspect shape prototypes.
2. Write brief: width/height/depth, functional part list (e.g. chair: frame, seat, back, legs), color palette, floor contact, pivot, triangle budget and material choices.
3. Scaffold with the project's `scripts/new_model.py`. It **already creates both** `src/models/<slug_with_underscores>.js` and a manifest entry. Do not append a duplicate.
4. Implement using `THREE.Group`, `src/models/primitives.js` helpers or native Three.js. All parts get deterministic unique mesh names. Keep factory free of global side effects; dynamic transforms happen in consumer scene.
5. Visual QA: all faces, top/bottom, proportions, recognizable silhouette, transparent/cutout materials, shadows and orientation; inspect both laptop and phone if promising responsive output.
6. Validate counts/bounds and stable ID, then export GLB and reimport in a clean viewer. Ensure source-copy helper dependencies accompany the module.
7. Record actual measurable results; fill acceptance report.

## Recipe-based bulk design (13 categories)

For 20–50 assets, create **a per-asset specification first**, not a loop producing recolored identical boxes. Each spec must distinguish silhouette and functional subparts; meaningful names (`wheel-front-left`, `handle`, `back-slat`). The implementation already supports `box`, `sphere`, `cylinder`, `cone`, `triangle`, `torus` and `rod` in `src/models/recipe_engine.js`; do not invent primitive tokens. `triangle.vertices` is a 3-vector array; `rod` requires `from`, `to`, radius `r` and color `c`. Other shapes take `p`, `s` and `c`, optional `rot`. The builder normalizes resulting world dimensions to `spec.dimensions`.

**Procedure:** plan IDs/categories → write a collection inventory with dimension and design rationale → create each module/export → append catalog entries → add collection regression tests where needed → run geometry validation → render+review thumbs → measure actual GLB/LOD output. See [recipe source](../assets/recipe-example.js) and [worked furniture example](../examples/procedural-furniture.md). Don't relabel old v0.4 collection; it is historical.

## Import an external GLB

See [ingestion guide](GLB-INGESTION.md) in full. A license URL, source URL, and author must reflect real evidence, not example.org placeholders. The default importer is non-mutating; `--apply` writes files and appends catalog metadata. Verify separate GLB display and persisted content-addressed path.

## Edits versus new versions

- Small fixes to geometry without changing public meaning/compatibility: retain asset ID and document change.
- New dimensions, alternate LOD source or fundamentally different design: use a separate slug/new version and preserve old IDs for downstream integrations.
- Deleted/disallowed external rights: quarantine publication, record cause, avoid silently redirecting hashes.
- Catalog and `public_models.json` are different views; source of truth stays `catalog/models.json`.

## Expected response

Report number and names of actually added models, touched files, command exit statuses, license summary, unverified steps, and a PR/commit URL when available. Avoid "50 generated" unless the scripts, manifest, and model sources truly contain 50 tested new assets.

