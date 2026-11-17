---
name: threejs-model-builder
description: Create, validate, catalog, preview and distribute reusable Three.js 3D models for the 3D Worlds asset library, with glTF export and MCP lookup compatibility.
---

# Three.js Model Builder · Skill v1

## When to activate

Use when asked to create a new 3D object, extend the 3D Worlds gallery,
prepare an importable game prop, register model metadata, or make a model
discoverable via local MCP. Never claim a mesh is production-grade without
topology, performance, visual and license evidence.

## Inputs and requirements

Collect/derive: object name, use context (game/web/print), dimensions in meters,
target triangle budget, geometry hierarchy, style/level of detail, material
palette, whether animation/colliders/LOD are needed, SPDX license, author,
and whether an external source needs permission checks.

If unknown, use these defaults only for new **prototypes**: +Y up, floor at
y=0, centered x/z, meters, MeshStandardMaterial, primitive mesh design,
no rig, MIT original code license, no external textures.

## Required workflow

1. **Survey existing assets.** Inspect `catalog/models.json` and run
   `python3 scripts/catalog.py validate`. Check duplicate slugs/IDs.
2. **Write a model brief.** Record target dimensions, silhouette, assembly
   breakdown, interaction points and whether model is stylized/blockout.
3. **Scaffold:** run
   `python3 scripts/new_model.py --slug example --category furniture --title "Example" --title-zh "示例" --dimensions 1 1 1`.
   Or add a fully specified module and manifest record by hand.
4. **Implement.** Put original, named meshes in
   `src/models/<snake_case>.js` exporting one `createX()` that returns a
   `THREE.Group`. Import helpers from `./primitives.js`; do not touch
   global scene, window, lights, renderer, or DOM. Use +Y up and meters.
5. **Inspect.** Run Vite, filter by category, click card, orbit, reset and
   zoom. Check front/back, normals, local pivot, dimensions, material,
   shadows, performance and phone rendering.
6. **Deliver reusable form.** Confirm "copy Three.js source" includes
   helper code, the generated module and a `scene.add(createX())` example.
   Download the GLB and load it in an independent GLTFLoader viewer.
7. **Register and index.** Include stable asset ID, localized title, tags,
   category, dimensions, style, license, creator and path. Run
   `python3 scripts/catalog.py build`.
8. **Validate:** run `python3 -m unittest discover -s tests -v` and
   `npm run build`. Inspect GitHub Pages route and the MCP `get_model`,
   `get_threejs_source` and `search_models` results.
9. **Report.** Provide file paths, asset ID, catalog count, license,
   reproducible commands, actual test results and remaining limitations.

## Hard constraints

- Do not fabricate model screenshots, committed GLBs, verified topology,
  animation rigs, provenance or licensing.
- Do not ingest commercial meshes without evidence of reuse rights.
- Do not put a live SQLite/MCP process behind GitHub Pages. MCP is a
  separate local stdio process.
- Use procedural geometry for simple props; for rich scans, use Blender/
  DCC export to GLB and implement validated binary ingest in a later phase.
- Skip expensive always-on WebGL thumbnails when catalog scales;
  create cached thumbnails and shard the metadata API.
- Keep model creation separate from presentation code.
- Avoid breaking old asset IDs; use versions and derived asset links.


## External GLB batch-ingestion branch

If the input is an existing GLB instead of a new Three.js generator, use
`docs/ingestion-architecture.md` and `scripts/ingest_glb.mjs`. Never
execute imported code. Require verified permission and a license evidence
URL for third-party authors, a category from `catalog/categories.json`,
and author-supplied dimensions in meters. Run a read-only dry run first;
apply only with `--apply` after checking the official Khronos Validator
report. Record SHA-256, file metrics and origin. Inspect the resulting
binary in the Gallery, then verify retrieval through MCP.

The CLI does not certify ownership, transform-aware dimensions, safety
for 3D printing, or professional game readiness; those require separate
review. Models that exceed the repository size budget belong in a future
object-storage pipeline, not directly in Git history.

## Output checklist

- [ ] Original source module works as a pure `THREE.Group` factory.
- [ ] Catalog entry validates and license/provenance is recorded.
- [ ] Model appears in gallery with correct category/search.
- [ ] Inspector supports orbit, zoom and reset.
- [ ] Copy-ready JavaScript imports into an independent game project.
- [ ] GLB export/import verified.
- [ ] SQLite builder / tests / frontend build pass.
- [ ] MCP retrieval uses exact asset ID and source path.
- [ ] No unverified external model references or copied artwork.

## References

- `docs/threejs-research.md`: Three.js and glTF choices.
- `docs/architecture.md`: SQLite, FTS5, CDN and scaling roadmap.
- `docs/ui-design.md`: UI interaction and accessibility.
- `AGENTS.md`: repository quality contract.
