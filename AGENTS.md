# AGENTS.md — 3D Worlds engineering instructions

> **Scope:** All contributors using AI coding agents (Codex, Claude Code, Pi, Copilot-style agents, and other automated tools) in this repository. This is the **operational execution contract**; [`README.md`](README.md) explains the product to users, and the [portable model-builder Skill](.codex/skills/threejs-model-builder/SKILL.md) supplies task-specific implementation details.

## 0. Mission and completion standard

Maintain **3D Worlds as a reproducible, source-editable asset platform**, not a one-off gallery demo and not a marketplace claiming certified 3D-print products.

An acceptable agent change:

1. Solves the requested task using the **existing** catalog, source, CI and deployment contracts.
2. Preserves published asset identity, source provenance, license boundaries, coordinate conventions and stable interface behavior.
3. Includes truthful tests/evidence and a clear statement of what remains unverified.
4. Keeps the static website, backend integrations and manufacturing workflows **distinct**.
5. Produces maintainable, reviewable code and documentation rather than a large unvalidated generation dump.

**Never claim a successful test, production deploy, model count, LOD compression improvement, printer fit, physical test, legal clearance or commercial sales result without evidence from the actual run/source.**

## 1. Instruction precedence and where to read

Follow, in order:

1. The human task and applicable higher-priority runtime/security instructions.
2. This root `AGENTS.md` for repo-wide invariants.
3. The existing schema, source code, tests and machine-readable policy for precise behavior.
4. The task-specific [threejs-model-builder Skill](.codex/skills/threejs-model-builder/SKILL.md) and only the references needed for this route.
5. Supporting [engineering documentation](docs/architecture.md), which may contain **historical roadmap prose**. When historical documentation conflicts with current code, inspect the current implementation and update stale docs rather than invent current features.

### Task routing

| Request type | Primary files to inspect | Required outcome |
| :-- | :-- | :-- |
| New individual procedural model | `catalog/models.json`, `schemas/manifest.schema.json`, `src/models/`, `scripts/new_model.py` | Original factory + metadata + validation |
| Batch of 30/40/50 models | Above + `catalog/collections/`, recent collection and test patterns | Unique additive IDs, per-model craft/evidence and full batch integrity checks |
| Gallery/UI/Pages | `src/main.js`, `src/print-planner.js`, `scripts/export_static_catalog.py`, `vite.config.js`, `.github/workflows/pages.yml` | Static-safe UI, browser smoke and no false hosting claims |
| Previews/GLB/LOD | `scripts/render_assets.mjs`, `scripts/optimize_assets.mjs`, `scripts/verify_generated.mjs` | Real rendered outputs, tested GLB variants, observed metrics |
| Ingestion/third-party GLB | `ingest/`, `scripts/ingest_glb.mjs`, `scripts/audit_glb.mjs`, `docs/ingestion-architecture.md` | License-gated, validated, hashed imports; no trust of unreviewed files |
| Metadata/API/SQLite | `scripts/catalog.py`, `db/schema.sql`, `services/search_api.py` | Valid schema, pagination, secure queries, read-only access |
| MCP/Agent integration | `services/mcp_server.py`, `docs/mcp-contract.md` | Stable read-only discovery/source contract |
| Scene-mesh print output | `scripts/export_print.py`, `scripts/audit_print_catalog.py`, `catalog/print_policy.json` | Conservative geometry report and **candidate**, not certification |
| OpenSCAD commercial prototypes | `printables/`, `scripts/export_print_commerce.py`, `printables/README.md` | CAD-backed prototype and truthful status |
| Documentation/release | `README.md`, `README.zh-CN.md`, `CONTRIBUTING.md`, `docs/release-history.md` | Accurate commands/capabilities, stable links and synchronized public claims |
| Skill updates | `.codex/skills/threejs-model-builder/`, `.claude/skills/`, `.pi/skills/` | Byte-identical portable bundles + preflight/mirror checks |

Start by inspecting **real files** and the latest relevant collection. Do not generate a parallel framework, replace proven tooling or invent file paths before checking the tree.

## 2. Source-of-truth rules (do not violate)

| Concern | Authoritative source | Derived / related outputs |
| :-- | :-- | :-- |
| Asset IDs, metadata, categories, source paths | `catalog/models.json` | `catalog/public_models.json`, SQLite, website facets |
| Record structure | `schemas/manifest.schema.json` | Validation and tests |
| Per-category print workflow and printer reference values | `catalog/print_policy.json` | Browser estimates and Python reports |
| Procedural visual geometry | `src/models/*.js` and required helper modules | Raw GLB, LOD variants, previews |
| Dedicated parametric product geometry | `printables/*.scad` and `printables/lib/` | STL/3MF CAD prototypes, never automatically equivalent to gallery mesh |
| Release membership | `catalog/collections/*.json` | Release notes, count summaries |
| Tested public behavior | Source code plus actual passing tests | Documentation and release descriptions |

### Identity, coordinates, and geometry

- A published `asset.id` is **immutable**, cannot be reassigned or silently recycled. A major new silhouette, changed dimensions/semantics or fundamentally new design needs a **new version or new ID**, rather than overwriting established content.
- New slugs must be distinct, stable, lower-case kebab-case; factory modules follow repository naming conventions. Do not rename existing source paths or public deep links without a deliberate migration.
- Three.js procedural scene geometry uses **meters**, **+Y up**, floor-contact origin and local X/Z center. Declare dimensions in width/height/depth order; distinguish source scene coordinates from print coordinates.
- A generator returns `THREE.Group`; it must not mutate a singleton global scene, create a renderer as a model side effect, fetch untrusted code, or depend on global UI state.
- Name meaningful mesh components; use deliberate materials, proportions, model hierarchy and spatial details. Keep geometry finite and transforms stable.
- Recipe-backed assets must retain meaningful `assetMeta`, `buildRecipe` and consistent portable source. When an imported snippet needs `primitives.js`, `recipe_engine.js` or other helpers, ship **all required dependencies**, not an unusable isolated function.
- Preserve bilingual labels, credible dimensions, accurate license/SPDX and provenance in the manifest. External assets have **per-asset** rights; the repository's MIT license is not permission to copy third-party models.

### Architecture boundaries

- **GitHub Pages is static.** It never directly serves a Python process, a live SQLite file, MCP stdio or a private S3 signing service. Web code may call an explicitly deployed, separately hosted API if configured.
- `npm run dev` and `npm run build` invoke static catalog export hooks. Do not incorrectly represent generated JSON as the canonical manifest or assume a historical projected-count cap is the current cap.
- Remote search must remain paginated/cursor-driven and bounded; the HTTP API caps individual pages at **100**. Do not load 50,000 models or instantiate a WebGL renderer per result/card.
- MCP search/source tools are **read-only with respect to caller projects**. The host agent can make edits through its own authorized process; the MCP server itself must not execute arbitrary catalog-supplied code or write into the caller repository.
- Hash-based binary storage is independent of IDs. GLB/LOD variants can be regenerated; avoid committing generated binaries unless a reviewed publication requirement explicitly says so.
- Server-side API binds to localhost by default; public hosting requires independent authentication, TLS, rate limits, logging and operational protection.

## 3. How to build *good* new 3D assets

When adding a single model or a batch, avoid producing cosmetic clones, renamed primitives, implausible scales or design metadata unrelated to actual geometry.

### Step A — inventory before authoring

1. Run or inspect `python3 scripts/catalog.py validate` and the latest `catalog/collections/` records.
2. Determine currently occupied IDs, slugs, categories and source paths. **Compute counts from the manifest; do not copy a snapshot number from README into tests.**
3. Classify each proposal by user value, geometric identity, expected use case, detail burden and print-risk category.
4. For market-inspired suggestions, record only the **qualitative** observation and original design intent. Amazon/eBay/Hacker News are research channels, not model file sources or proof of purchases.
5. Check any proposed asset name against the catalog to avoid duplicates and unintended derivatives.

### Step B — author a cohesive design

- Define a short design brief per asset: form, scale, silhouette, hero details, component hierarchy, palette/material intent, potential assembly and important failure modes.
- Use `python3 scripts/new_model.py` when appropriate, then replace the starter geometry with a detailed, source-editable original model.
- Distinct models should differ in functional layout, geometry, details, and silhouette—not only `title` and color.
- Prefer coherent named subassemblies, symmetry where intended, nonuniform proportions, readable negative space, stable placement, and sensible mesh tessellation.
- Use the existing primitives/recipe engine where practical, and introduce new helpers with tests instead of copying hundreds of near-identical constructors.
- Avoid excessive polygons for invisible details. Create enough named parts for an inspectable design, but **do not game arbitrary part-count targets with meaningless micro-meshes**.
- Record constraints and unverified assumptions (e.g. a stand may resemble a load-bearing product without having a tested load rating).

### Step C — register, cross-check, review

- Append a unique record to `catalog/models.json`; preserve all historical records and their IDs.
- Update the appropriate additive collection manifest and related release note when working as a numbered batch. Do not rewrite old collection membership to make a count pass.
- Validate exact factory export names, dimensions, tags, categories, and references.
- Capture a real preview and rotate/inspect the model from multiple viewpoints. Check silhouettes, intersections, missing pieces, z-fighting, hovering parts, clipping and camera framing.
- Use the full relevant quality gate in [Section 9](#9-verification-matrix) below.
- Report **actual** test status and the number of generated/validated models. A manifest count is not proof that all rendered successfully.

### Batch acceptance evidence

For each batch, provide or retain:

- An inventory of `id`, category, source path and brief unique-design rationale.
- Proof of no duplicate/newly colliding IDs and preservation of earlier releases.
- Reproducible scripts/commands and results for catalog, source validation and image/GLB generation.
- A few deliberately chosen visual inspections covering high-detail, high-risk and atypical categories.
- Manufacturing status per asset only where it has actually been evaluated, with all unverified items explicitly labeled as such.

Historic v0.4–v1.4 batch requirements live in `catalog/collections/` and `docs/release-history.md`. Do not paste older release counts into evergreen rules, and do not re-run an obsolete exact-count assertion as if it describes the new current corpus.

## 4. Rendering, optimization and website discipline

### Media pipeline

- Capture thumbnails through the **actual procedural model** in Chromium. No AI-generated stock images, SVG stand-ins or browser-live card rendering may be mislabeled as verified preview output.
- `npm run generate:assets` exports source GLB and produces optimized LOD0/LOD1/LOD2 using the existing scripts; verify output files by reading their generated index.
- Preserve original full-resolution geometry under `.cache/raw/` for any downstream print audit. Meshopt LOD1/LOD2 are **rendering artifacts**, not manufacturing sources.
- Report triangle counts, byte sizes, hash checks and compression ratios from **measured outputs**. Simplification percentages are targets, not guarantees.
- Keep images reasonably lightweight, use stable aspect ratio/framing, and avoid one WebGL context per card.
- Avoid checking in `dist/`, `.cache/`, SQLite, generated thumbs/GLBs or ad hoc validation screenshots unless the publishing workflow explicitly requires reviewed artifacts.

### Gallery and search

- Preserve gallery search, category filters, deep links, model inspector, code/source copy, GLB export and Print Workbench warning labels.
- Keep `VITE_CATALOG_API_URL` an **optional configuration**. In unconfigured Pages mode, consume the static projection; never require the API for the site to boot.
- Use bounded rendering and cursor pagination for large catalogs. Search index + model metadata are not permission to load every asset's 3D mesh at once.
- Ensure links work under Vite's `/3D-worlds/` base path on Pages.
- When changing `src/main.js` or rendering/export code, perform real-browser smoke and check console errors, not just a successful JS build.

## 5. Manufacturing safety: do not cross the evidence boundary

### Two source families — keep them separate

| Track | Source | Source units/up axis | Export / interpretation |
| :-- | :-- | :-- | :-- |
| Procedural gallery scenes | `src/models/` → original raw GLB | meters / Y-up | `scripts/export_print.py` normalizes and audits; STL/3MF **candidates** only |
| Dedicated print-commerce designs | `printables/*.scad` | millimeters / Z-up | `scripts/export_print_commerce.py` invokes OpenSCAD; prototypes require independent print review |

**Never** treat a styled Three.js scene mesh as a mechanically validated parametric CAD model. Never substitute simplified LOD meshes as print masters.

### P0/P1/P2 *workflow* priorities

The authoritative category mapping is `catalog/print_policy.json`:

- **P0 geometry:** decorative, miniature furniture, kitchen/bathroom props and print-commerce geometry. Focus on actual closed solids, base contact, dimensions and thin details.
- **P1 assemblies:** character/nature/scifi/vehicle/architecture/urban models. Focus on dangling islands, orientation, support demands, overlap and real joint design.
- **P2 functional:** electronics housings, tools and sports/structural designs. Focus on true CAD tolerances, hole locations, material selection, mechanical loads and fatigue.

These labels **are not** quality scores, certificates, or guarantees. Never promote a category priority to a print-readiness claim.

### Required print safeguards

1. Browser-side STL is always a **draft**, with status `not_audited`. A fit estimate uses declared model dimensions and a nominal bed envelope only.
2. Offline `scripts/export_print.py` uses **original** GLB, applies Y-up→Z-up and m→mm conversion, checks mesh topology/orientation/volume and records SHA-256 evidence. Failure must block usable candidate files.
3. `--mode separated` exports separate **source mesh parts** and an assembly-preserving 3MF; it does not automatically engineer printable splits, connectors or tolerances.
4. `--mode fused` may depend on optional manifold operations, which can fail or change fine features; do not promise a flawless union.
5. `--clearance-mm` records desired fit intent but **does not alter** geometry or certify a measured gap.
6. The 3MF package explicitly uses millimeters. STL has no reliable intrinsic units; require explicit slicer unit review.
7. `geometry_pass_manual_review_required` means only a limited automatic audit passed. Leave `manufacturing_certified: false` and all unmeasured qualities marked as unknown.
8. Never auto-label `slicer_reviewed` or `physically_verified` without actual per-asset, independently reviewable evidence.
9. Do not produce or claim automatic G-code, exact wall-thickness maps, proven supports, load ratings, regulatory clearance, STEP/native-CAD reconstruction or commercial-sale approval.
10. Do not publish previously blocked output or let stale STL/3MF files survive a failed export as apparently valid artifacts.

### Human validation required outside automation

A real-world release needs manual slicer layers, minimum feature/true wall thickness, material/printer profiles, overhang/supports, bed contact, assembly fit, structural/thermal/chemical suitability, device-specific safety and—in relevant cases—physical tests. For selling overseas, separately assess brand/IP rights, applicable rules, labeling and user safety. Avoid food-contact, child-safety, protective/load-bearing or powered/electrical suitability claims without specific evidence.

Reference: [print workflow](docs/print-pipeline.md), [engineering checklist](docs/print-engineering.md), [dedicated CAD notes](printables/README.md).

## 6. Data, API, MCP, and security

- **Canonical:** validate and update `catalog/models.json`; generate SQLite with `python3 scripts/catalog.py build`. Never use derived SQLite as the authoring source.
- **Search:** HTTP API `GET /api/v1/assets` accepts `search`, `category`, `limit` (1–100) and a query-bound opaque `cursor`. Preserve deterministic, bounded pagination.
- **Input:** use SQL parameters and constrain file paths to expected repo directories. Reject path traversal and unsafe symlinks.
- **MCP:** keep existing read-only tool names (`search_models`, `get_model`, `list_categories`, `get_threejs_source`, `get_import_recipe`), unless a deliberately versioned contract change is approved. No arbitrary filesystem/network/code-execution tools disguised as retrieval.
- **External assets:** reject or quarantine unknown/unlicensed material; do not ingest third-party geometry solely on a claimed "free download" label. Record per-file rights and hashes.
- **Storage:** `THREED_WORLDS_STORE=s3` assumes separate private S3/MinIO infrastructure. No embedded credentials, public bucket ACL defaults, leaked presigned URLs or unbounded blob fetches. Never tell users it is already deployed when it is only an adapter.
- **API deploy:** local stdlib HTTP server is not hardened for Internet exposure. Keep production hardening requirements visible in docs.
- **Secrets/data:** never commit access tokens, AWS keys, private supplier files, user private data, unlicensed images or hidden credentials. Respect `.gitignore` and [`SECURITY.md`](SECURITY.md).

## 7. Portable Agent Skill contract

The canonical portable authoring bundle lives in:

`.codex/skills/threejs-model-builder/`

The following **must remain byte-identical standalone mirrors**, including their entire resource trees, not only `SKILL.md`:

- `.claude/skills/threejs-model-builder/`
- `.pi/skills/threejs-model-builder/`

When changing any Skill resource, modify the canonical copy, mirror the **whole directory**, and verify with:

~~~bash
python3 scripts/verify_skill_mirrors.py
python3 .codex/skills/threejs-model-builder/scripts/preflight.py --json
~~~

Read the relevant `references/*.md` in the Skill on demand. Use the existing model-brief and acceptance-report templates. Example or placeholder license URLs **are not provenance evidence**.

## 8. Implementation workflow for every agent

### Before editing

1. Interpret the user request and define the exact affected layer(s): source geometry, catalog, gallery, GLB, printing, service, docs, or Skill.
2. Inspect existing files, history/collection manifest and relevant tests. Record actual current catalog size if material.
3. Identify irreversible or high-risk actions (rewriting published IDs, unlicensed external imports, printing claims, destructive file changes, secrets). Choose the non-destructive path.
4. Make a small plan and describe the expected artifact and verification.

### During editing

1. Keep changes narrow and backward compatible. Avoid speculative framework rewrites.
2. Change authoritative source **first**, then derived metadata/build logic or tests.
3. Add/extend targeted tests alongside behavior changes.
4. Preserve machine-readable output and documented CLI flags.
5. Use meaningful technical English for code/documentation with Chinese localization where already expected.
6. Never fabricate thumbnails, binary artifact size reports, citations, test logs or printed-part validation.
7. When commands are expensive, validate one representative asset before launching a full GPU build; the **final release gate** must still cover the affected set.

### Before completion

1. Run the appropriate [verification matrix](#9-verification-matrix); state commands that **actually** ran and their outcomes.
2. Validate relative Markdown links and visible README/Pages paths when documentation changes.
3. Check the diff for deleted historical IDs, suspicious generated files, accidental credentials, oversized binaries and version-number claims.
4. For user-visible changes, reconcile [README](README.md), [Chinese overview](README.zh-CN.md), relevant docs and UI disclaimers; do not leave conflicting promises.
5. Prefer a focused PR with a precise description and real validation summary. Do not bypass branch protection or quietly force-push.
6. If a requirement was not verified, report it as **not run / blocked / requires manual review**, never as complete.

## 9. Verification matrix

Choose relevant subsets during development and the full release gate when required. These are **commands**, not assertions that the agent has run them.

| Change scope | Minimum local checks | Additional release checks |
| :-- | :-- | :-- |
| Documentation only | Resolve relative links, inspect diff and command references | Verify no misleading claims; optional CI |
| Catalog/metadata | `python3 scripts/catalog.py validate`, `python3 scripts/catalog.py build` | `python3 -m unittest discover -s tests -v` |
| Procedural geometry | Catalog checks, `node scripts/validate_models.mjs` | Full asset generation, `npm run verify:assets`, gallery smoke |
| GLB ingest/LOD/capture | `npm run test:ingest`, targeted render/audit | `npm run generate:assets`, `npm run verify:assets`, `npm run test:gallery` |
| Gallery/Pages | `npm run build` | `npm run test:gallery`, `npm run test:remote` after build and suitable dependencies |
| Print planner/priority | `npm run test:print`, `python3 scripts/audit_print_catalog.py --metadata-only` | Python full tests + browser smoke |
| Scene printing | `python3 -m unittest discover -s tests -p test_print_export.py -v` | `python3 -m unittest discover -s tests -v`, selected real source audit |
| OpenSCAD print-commerce | `python3 scripts/export_print_commerce.py --dry-run --limit 5` | Representative STL and 3MF exports with OpenSCAD available; manual slicer review |
| API/storage/MCP | `python3 scripts/catalog.py build`, `python3 -m unittest discover -s tests -v` | `python3 scripts/smoke_p2.py`, `python3 scripts/smoke_mcp.py`, `npm run test:remote` |
| Portable Skill bundle | `python3 scripts/verify_skill_mirrors.py` and preflight | Related source/model tests |

**Known full CI-equivalent sequence** (dependencies must be installed as needed):

~~~bash
npm install --no-audit --no-fund
python3 -m pip install -r requirements-print.txt
python3 scripts/verify_skill_mirrors.py
python3 .codex/skills/threejs-model-builder/scripts/preflight.py --json
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm run test:print
npm run test:ingest
node scripts/validate_models.mjs
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
npm run build
npm run test:gallery
npm run test:remote
~~~

The repository's [`.github/workflows/pages.yml`](.github/workflows/pages.yml) is the primary **authoritative CI definition** and also covers sample CAD export, object-store and MCP smoke checks. Read the workflow if command ordering or prerequisites change. GitHub Actions verification is not a substitute for manual visual QA or actual printed-part evidence.

## 10. PR and handoff contract

Every significant agent-delivered PR or completion summary should state:

| Field | Required content |
| :-- | :-- |
| Scope | What layers/files changed and why |
| Asset inventory | New IDs, categories, counts and collection version (if relevant) |
| Compatibility | Whether historical IDs, public deep links, metadata, API and Skill mirrors are preserved |
| Evidence | Exact commands run, pass/fail/not-run, and links to reports/CI where available |
| Visual QA | Whether actual browser render/inspection happened, which models sampled |
| Manufacturing | `not_audited`, `blocked`, `geometry_pass_manual_review_required`, or independently evidenced human stages |
| Remaining limits | Any unverified behavior, dependency, operator action or risk |

**Minimum PR checklist**

- [ ] No historical asset IDs overwritten/reused; new slugs and source paths unique.
- [ ] Metadata fields, license/provenance and dimensions are defensible.
- [ ] Relevant regression tests are present and actually executed (or explicitly unrun).
- [ ] No generated binary debris, secrets, broken links or false deployment claims.
- [ ] Public documentation and UI limitations match implementation.
- [ ] 3D-print outputs are not advertised as certified without evidence.
- [ ] Any changed portable Skill tree is byte-identical across its three locations.
- [ ] Reports distinguish **source validation**, **rendering/geometry checks**, **slicer review** and **physical testing**.

## 11. Prohibited shortcuts

Do **not**:

- Rename published assets to make a batch appear novel; overwrite historical geometry without versioning; delete old collections to satisfy a target count.
- Paste unlicensed marketplace meshes, seller renders, logos, game/franchise likenesses, or reference code without rights review.
- State all models are "3D printable", "production ready", "structurally safe", "certified" or "best selling".
- Equate browser STL export, successful OpenSCAD compilation, manifold geometry, simple bed fit, or `geometry_pass_manual_review_required` with a successful real print.
- Export LOD2/LOD1 to STL as if it were the manufacturing source.
- Hardcode fabricated polygon counts/size savings, imagined CI results, sales figures or new model inventory totals.
- Break static Pages by requiring a server-only feature; run a canvas per gallery card; load an unbounded catalog in one request.
- Make MCP execute arbitrary supplied code, accept path traversal, expose tokens or publish a private object store with public-read defaults.
- Replace the three portable Skill bundles with divergent near-copies or untested placeholders.
- Claim work was merged, published, tested or deployed until the actual repository/CI state supports it.

## 12. Reference quick links

- [Project entry point](README.md)
- [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md)
- [Manifest schema](schemas/manifest.schema.json) · [Print policy](catalog/print_policy.json)
- [Architecture](docs/architecture.md) · [Ingestion](docs/ingestion-architecture.md)
- [Rendering/LOD/storage runbook](docs/p0-p1-p2-delivery.md)
- [3D-print pipeline](docs/print-pipeline.md) · [Engineering checklist](docs/print-engineering.md)
- [OpenSCAD source policy](printables/README.md)
- [MCP contract](docs/mcp-contract.md) · [Skill architecture](docs/skill-architecture.md)
- [Release history](docs/release-history.md) · [Latest v1.4 verification](docs/verification-v14.md)

---

**Agent principle:** Build assets that can be inspected and reproduced, make all evidence traceable, and distinguish what the software can measure from what only a human or real-world test can establish.

## Overseas detail refinement batch 02 · twenty additional CAD/preview pairs

- Keep the first ten refined v1.3 products and all other published IDs stable. Batch 02 replaces generic geometry only for its [twenty named SKUs](docs/overseas-refinement-batch-02.md), leaving 20 original family-level prototypes unchanged.
- The source-of-truth manufacturing candidate is `printables/<slug>.scad` using `printables/lib/refined_batch02_forms.scad` with explicit millimeter dimensions. The gallery engine `src/models/refined_commerce_batch02.js` generates approximated Y-up Three.js previews; never approve its GLBs as slicer-ready manufacturing geometry.
- Keep preexisting `use <lib/commerce_forms.scad>` references and `family`/`variant` metadata in wrappers for v1.3 regression compatibility. Do not add global `resize()` around fit-sensitive CAD features.
- Run `python3 -m unittest tests/test_refined_commerce_batch02.py -v`, `npm run test:refined-commerce` and `python3 scripts/audit_refined_commerce_batch02.py` (OpenSCAD + trimesh) for changes in this batch. Only state measured topology/bounds results and explicitly require physical fit, safety and slicer tests.

## V1.4.2 scene manufacturability and CAD pilot evidence

- There are exactly **30 V1.4.1 visual scene models** and **two separate OpenSCAD
  prototype designs**, not thirty audited dimensioned product CAD files.
- `catalog/v14_manufacturing_intent.json` contains all 30 unique unreviewed fit
  questions and 90 acceptance actions. A model's stage stays `unreviewed`
  regardless of automatic risk scan findings.
- Use the **original raw GLB** and `scripts/audit_v14_manufacturing.py`; do not
  interpret component bounding-box extents as true wall thickness, AABB overlap
  as verified solid interference, or downward triangles as a support plan.
- The two `printables/v14/*.scad` prototypes use independent mm/Z-up CAD
  geometry. Their nominal clip and bit-fit values require caliper measurements
  and actual clearance coupons; they do not change the Gallery scene geometry.
- Run `python -m unittest tests/test_v14_manufacturing.py -v` and the full
  existing test suite. After GLB generation, run
  `python scripts/audit_v14_manufacturing.py --require-all-sources`.
  With OpenSCAD installed, run `python scripts/audit_v14_cad_pilots.py`.
- CI may **pass while geometry risk rows are blocked**: it means the reporting
  pipeline completed honestly; it is NOT a certification or manual signoff.
- Only completed human [print/fit review forms](docs/templates/v14-print-release-review.md)
  with actual slicer and print results can support later per-asset claims.

## V1.4.3 CAD fit geometry and slicer-run evidence boundary

- Keep separate Three.js V1.4.1 scene assets and OpenSCAD V1.4.3
  `printables/v14/` engineering prototypes. The scene models remain
  blocked for manufacturing, even when CAD-specific checks pass.
- `scripts/audit_v14_cad_fit.py` renders **four** measured solids:
  two bodies + two connected three-clearance fit coupon strips.
  Verify exact STL triangle cross-sections for soap drainage webs,
  clip opening direction/upper-lower arms, hex opening AF, floors
  and all three test clearances. Do not call selected cross-sections
  global wall-thickness metrology.
- For offline slicing CI installs Ubuntu `slic3r`; run
  `python3 scripts/audit_v14_cad_fit.py --with-slicer`.
  A G-code file **must not** be sent to any printer: generated machine
  assumptions are generic and have not received human layer review.
- A successful CI check never promotes a manufacturing review stage:
  final fit, creep, hygiene, load, slicer profile, material and physical
  testing are all unverified. Use
  `docs/templates/v14-coupon-physical-fit-log.md` for real tests.
