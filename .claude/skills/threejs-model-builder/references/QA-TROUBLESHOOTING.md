# QA gates, triage and evidence thresholds

## CI-equivalent fast gate

```bash
python3 scripts/verify_skill_mirrors.py
python3 .codex/skills/threejs-model-builder/scripts/preflight.py
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm install --no-audit --no-fund
node scripts/validate_models.mjs
node scripts/test_ingest.mjs
npm run build
```

For end-to-end preview/LOD use Chromium and `npm run generate:assets && npm run verify:assets && npm run test:gallery`. For P2 use `python3 scripts/smoke_p2.py`, `node scripts/smoke_remote_gallery.mjs` and `python3 scripts/smoke_mcp.py` after requirements are installed. Some tasks need graphics, network, Python packages or access to credentials. Mark SKIPPED vs FAILED vs PASS exactly.

## Acceptance matrix

| Gate | Mechanism | Remaining human validation |
| --- | --- | --- |
| Manifest | `catalog.py validate` and schema | semantics, clear title, duplicate meaning |
| Geometry | `validate_models.mjs` | likeness, silhouette, actual usability |
| Imported binary | `audit_glb.mjs` / dry-run importer | license/rightsholder, textures, geometry visually |
| P0 preview | `verify_generated.mjs` | visual snapshot and device review |
| P1 variants | hashes + trend + sampled decoder | all variants in independent GLTFLoader, FPS |
| P2 store/API | local smoke tests | deployed S3, HTTPS, cost/security posture |
| Integration | Vite browser smoke + MCP | consumer engine import and gameplay |
| Skill packaging | `verify_skill_mirrors.py` | cross-client discovery experience |

## Common failures

**Missing Node modules:** run `npm install` at repo root; do not move package-lock or change dependencies without an explicit versioned upgrade.

**GLB exported but loader fails:** ensure Meshopt decoder on optimized variants, valid asset URLs/base path, correct MIME/CORS, and that raw vs compressed file wasn't confused.

**Gallery card blank:** check `public/thumbs/<slug>.avif`/`.webp` existence after generation, browser console, asset slug and prebuild projection; a GitHub clone does not necessarily contain generated images.

**Renderer cannot launch WebGL in CI:** inspect Playwright Chromium installation and SwiftShader logs; do not substitute generated PNGs unrelated to geometry.

**Bounds disagree:** inspect real `Box3` world transform and root scaling; target `dimensions_m` are [W,H,D], not [H,W,D]. Review pivot and y=0 floor.

**Recipe color/primitive wrong:** `buildRecipe` accepts only documented types; check `src/models/recipe_engine.js` and each part's field names. All meshes need unique names.

**Catalog count differs:** run `catalog.py validate` and `export_static_catalog.py`; static browser projection is bounded and need not equal total catalog.

**External asset rejected:** follow validator issues and provenance gate; do not bypass rights review with dummy URL.

**MCP not reachable from Pages:** expected—MCP is local stdio, not hosted by static site.

**Skill mirrors differ:** run `python3 scripts/verify_skill_mirrors.py`; edit the canonical `.codex/skills/threejs-model-builder/` content then mirror identical bytes to `.claude` and `.pi` before committing. The checker catches drift.

## Reporting rubric

Always separate **implemented**, **tested**, **visually reviewed**, **deployment verified** and **pending**. Include concrete command, exit code or error, checked catalog count and artifact paths. Complete [the report template](../assets/acceptance-report.md). A red CI check is a blocker; do not say "fully delivered" until checks run and pass.

