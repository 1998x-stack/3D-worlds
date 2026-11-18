---
name: threejs-model-builder
description: Create, extend, inspect, import, optimize, validate and publish licensed 3D assets in the 3D Worlds Three.js gallery and MCP catalog. Use for new procedural props, recipe-based collections, GLB ingestion, WebP/AVIF previews, Meshopt LODs, object storage and troubleshooting.
license: MIT
metadata:
  author: 3D Worlds
  version: "2.1.0"
---

# Three.js Model Builder — 3D Worlds Skill v2

This Skill is a **repository-specific operator contract**, not a general-purpose 3D generator. It is mirrored verbatim in `.claude/skills/`, `.codex/skills/` and `.pi/skills/` so each client can load local resources independently. Resolve every `references/`, `assets/`, `examples/` or `scripts/` path **relative to this SKILL.md directory**, not the shell working directory. Execute project commands from the repository root.

## When to activate / choose a workflow

| User goal | Read before modifying files |
| --- | --- |
| Create a primitive, stylized prop, or named assembly | [Workflows](references/WORKFLOWS.md), [Geometry contract](references/MODEL-GEOMETRY.md), [Taxonomy](references/TAXONOMY.md) |
| Build an original Amazon / eBay / Hacker News-inspired collection | [Market research and originality](references/MARKET-ORIGINALITY.md), [Workflows](references/WORKFLOWS.md), [Catalog & provenance](references/CATALOG-PROVENANCE.md) |
| Add many recipe-based assets or an entire category | [Workflows](references/WORKFLOWS.md), [Taxonomy](references/TAXONOMY.md), [Catalog & provenance](references/CATALOG-PROVENANCE.md) |
| Import someone else's GLB or a batch | [GLB ingestion](references/GLB-INGESTION.md), [Catalog & provenance](references/CATALOG-PROVENANCE.md) |
| Produce previews, compressed GLBs or LOD variants | [Rendering & LOD](references/RENDER-LOD.md), [QA](references/QA-TROUBLESHOOTING.md) |
| Publish Pages, SQLite, MCP, storage or API | [Publishing & MCP](references/PUBLISH-MCP.md), [QA](references/QA-TROUBLESHOOTING.md) |
| Investigate broken geometry, exports or CI | [QA & troubleshooting](references/QA-TROUBLESHOOTING.md), then the workflow-specific guide |
| Verify upstream authority for a design decision | [External sources](references/EXTERNAL-SOURCES.md) |

**Never read every reference by default.** Load only the selected workflow and related reference(s), then inspect actual repository code. These files augment, not override, `AGENTS.md` and existing code.

## Non-negotiable rules

1. Original generators export `createX()` and return a `THREE.Group`; no DOM, global scene, renderer or network side effects. Name meaningful parts; meter units, +Y up, x/z centered, floor at y=0.
2. `catalog/models.json` is the canonical metadata authoring source, NOT generated SQLite, static projection, thumbnails or optimized GLB files. Preserve published asset IDs; append a new slug/version instead of silently replacing incompatible geometry.
3. Confirm license, original author and provenance. An external GLB requires actual reuse rights evidence; a URL or SPDX-shaped string alone does **not** prove a grant. Never invent authors, licenses, provenance, generated artifacts, topology, results or screenshots.
4. Third-party files must be reviewed and processed by the local GLB importer; do not execute arbitrary imported code. Dry-run and inspect before `--apply`.
5. Treat `public/thumbs/`, `public/generated/`, `.cache/` and `data/catalog.sqlite` as generated outputs. Do not claim these files are versioned in Git; they are reproduced in CI. Static Pages does not run Python, MCP or the live SQLite API.
6. For game-ready claims require visual, performance, export/import and usage checks. For 3D printing require a separate watertight/manufacturing inspection; glTF validity is insufficient. An unrigged character must not be described as rigged.
7. Report verification evidence and limitations, distinguishing executed commands from proposed checks. Do not paste access keys or make private buckets public.

## Input brief (infer conservatively, request only if blocking)

Record: desired object, function/game usage, category, dimensions **[width,height,depth] in meters**, visual style, reference constraints, named subparts, collision/animation needs, texture and LOD goals, triangle budget, author, license, rights evidence, and export target. Use [the brief template](assets/model-brief.md). For an unspecified **prototype**, default to original stylized geometry, procedural materials, +Y up, no animations, no external assets. A sketch is not a dimension/rights certificate.

## End-to-end execution

1. **Inspect repository state.** Read `AGENTS.md`, `catalog/categories.json` and nearby `src/models/*.js`; check duplicates, build scripts and latest test results. Run `python3 scripts/catalog.py validate`. Optionally run the read-only [Skill preflight](scripts/preflight.py) with `python3 .codex/skills/threejs-model-builder/scripts/preflight.py`.
2. **Plan the geometry.** Fill the [model brief](assets/model-brief.md); define silhouette, pivot, scale, part naming and exact category. Consult [geometry](references/MODEL-GEOMETRY.md) and [taxonomy](references/TAXONOMY.md).
3. **Build from the correct source:** for a conventional procedural module, run `python3 scripts/new_model.py --slug side-table --category furniture --title "Side Table" --title-zh "边桌" --dimensions 0.8 0.6 0.8`, then replace the scaffold mesh with meaningful parts. For v0.4-style recipe assets, author `buildRecipe(spec)` using `src/models/recipe_engine.js`; see [recipe example](assets/recipe-example.js) and [worked case](examples/procedural-furniture.md). For verified imported GLBs use [the ingestion workflow](references/GLB-INGESTION.md), never the generator scaffold.
4. **Register and reconcile.** Add or inspect catalog record: immutable ID, unique slug, localized title, category, tags, correct `source_path`/`generator` or `binary_path`, dimensions, kind, license, author, evidence. See [catalog contract](references/CATALOG-PROVENANCE.md). Do not edit generated `catalog/public_models.json` manually.
5. **Run fast gates.** `python3 scripts/catalog.py validate`, `python3 scripts/catalog.py build`, `python3 -m unittest discover -s tests -v`, `node scripts/validate_models.mjs`, `npm run build`. Fix failures before claiming completion.
6. **Render + optimize when applicable.** After installing npm and Chromium, `npm run generate:assets`, `npm run verify:assets`, `npm run test:gallery`. These may be slow, use local WebGL; only report success if actually run. Follow [rendering guide](references/RENDER-LOD.md). For imported GLBs, do not misrepresent the procedural export pipeline as processing the import.
7. **Verify integration.** Inspect Gallery search, inspector/orbit/zoom, deep link, copy-ready source with `primitives.js` or `recipe_engine.js`, exported GLB via an independent GLTFLoader, and MCP tool retrieval after local SQLite build. Follow [publishing](references/PUBLISH-MCP.md).
8. **Deliver evidence.** Complete [acceptance report](assets/acceptance-report.md) with files/IDs, per-command outcomes, hashes, preview links, license provenance, limitations and exact next actions. Prefer a small PR and gate it in CI.

## Quick command menu

```bash
# Read-only consistency + metadata checks
python3 .codex/skills/threejs-model-builder/scripts/preflight.py
python3 scripts/verify_skill_mirrors.py
python3 scripts/catalog.py validate
# Source, catalog, and frontend gates
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm install && node scripts/validate_models.mjs && npm run build
# Full local P0/P1, if Chromium + graphics dependencies exist
npx playwright install chromium
npm run generate:assets && npm run verify:assets && npm run test:gallery
# Imported GLB: dry run before any mutation
node scripts/ingest_glb.mjs --batch ingest/my-batch.json
```

## Acceptance threshold

A change is **done** only when the model is original or licensed for its documented use, IDs and dimensions validate, fast gates pass, and any promised preview/LOD/export/integration tests have real evidence. Missing local Chromium, credentials or manual review ⇒ explicitly mark **not verified** rather than pass. Read [QA](references/QA-TROUBLESHOOTING.md) for blockers and recovery.

## Bundled resources

- [Market originality and market evidence](references/MARKET-ORIGINALITY.md), [Workflow playbooks](references/WORKFLOWS.md), [geometry](references/MODEL-GEOMETRY.md), [category design](references/TAXONOMY.md), [catalog & provenance](references/CATALOG-PROVENANCE.md)
- [GLB ingest](references/GLB-INGESTION.md), [render/LOD](references/RENDER-LOD.md), [publish/MCP](references/PUBLISH-MCP.md), [QA/recovery](references/QA-TROUBLESHOOTING.md), [official external links](references/EXTERNAL-SOURCES.md)
- [Model brief](assets/model-brief.md), [acceptance report](assets/acceptance-report.md), [import manifest example](assets/import-batch.example.json), [recipe source template](assets/recipe-example.js)
- [New furniture example](examples/procedural-furniture.md), [GLB audit example](examples/imported-glb.md), [read-only preflight](scripts/preflight.py)

**External authoritative specifications** are linked with scope and authority notes in [EXTERNAL-SOURCES.md](references/EXTERNAL-SOURCES.md). Verify current APIs against pinned `package.json` and actual implementation before upgrading tools.

