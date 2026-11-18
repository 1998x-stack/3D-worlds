<div align="center">

# 3D Worlds

### Open, source-editable 3D assets for the web, games, agents, and responsible 3D-print prototyping

**Explore models in Three.js · Reproduce GLB/LOD builds · Query assets via SQLite/MCP · Prototype STL/3MF responsibly**

[**Live Gallery**](https://1998x-stack.github.io/3D-worlds/) · [**3D Print Workbench**](https://1998x-stack.github.io/3D-worlds/#print-workflow) · [**中文说明**](README.zh-CN.md) · [**Contributor Guide**](CONTRIBUTING.md) · [**AI Agent Guide**](AGENTS.md)

[![Verify and Deploy Pages](https://github.com/1998x-stack/3D-worlds/actions/workflows/pages.yml/badge.svg)](https://github.com/1998x-stack/3D-worlds/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-097b55.svg)](LICENSE)
[![Node.js 22+](https://img.shields.io/badge/Node.js-22%2B-43853d.svg)](package.json)
[![Three.js](https://img.shields.io/badge/Three.js-0.180.0-252525.svg)](package.json)

</div>

> [!IMPORTANT]
> **A renderable model is not automatically a printable product.** Browser STL downloads are *unverified drafts*; a successful topology audit produces a *candidate for manual review*, not a slicer-approved, physically verified, load-rated, or sale-certified design. P0/P1/P2 denote engineering workflow priorities, **never quality or safety grades**.

## Contents

- [What is 3D Worlds?](#what-is-3d-worlds)
- [V1.4.1 maker model fine-detail refresh](#v141--maker-model-fine-detail-refresh)
- [V1.4.3 CAD fit coupons and offline slicing](#v143--two-cad-pilots-geometry-and-toolpaths)
- [V1.4.2 manufacturing risks and CAD prototypes](#v142--30-model-print-risk-survey-and-cad-pilots)
- [Explore the platform](#explore-the-platform)
- [Overseas print-commerce detail refinement: 20 additional models](#overseas-print-commerce-detail-refinement--batch-02-20-more)
- [Overseas print-commerce detail refinement: final 20 models](#overseas-print-commerce-detail-refinement--batch-03-final-20)
- [Quick start](#quick-start)
- [Capabilities and boundaries](#capabilities-and-boundaries)
- [System architecture](#system-architecture)
- [Repository map](#repository-map)
- [Asset contract and authoring](#asset-contract-and-authoring)
- [Reproducible previews and GLB assets](#reproducible-previews-and-glb-assets)
- [3D printing: two distinct workflows](#3d-printing-two-distinct-workflows)
- [Search API, MCP, and storage](#search-api-mcp-and-storage)
- [Verification and CI](#verification-and-ci)
- [Deployment](#deployment)
- [Contributing, security, and licensing](#contributing-security-and-licensing)
- [Documentation index](#documentation-index)

## What is 3D Worlds?

**3D Worlds** is an open 3D asset infrastructure project, not merely a model-viewer demo. It joins original, editable Three.js model factories to a browsable static website, repeatable image/GLB builds, structured metadata, local AI-agent integrations, and optional manufacturing *assessment* tools.

At the **v1.4 catalog snapshot**, the repository documents **565 original models across 14 categories**. This includes a 50-design, OpenSCAD-backed overseas print-commerce collection (v1.3) and a later 30-model maker-inspired scene collection (v1.4). The definitive inventory is always `catalog/models.json` and `catalog/collections/`; do not assume a count in this prose remains current after later batches.

The project serves several different audiences:

| Audience | Practical entry point | What they receive |
| :-- | :-- | :-- |
| Web/Three.js developers | [Gallery](https://1998x-stack.github.io/3D-worlds/) and `src/models/` | Editable procedural source, model dimensions, interactive inspection |
| Game and simulation builders | GLB generation, optimized LODs, source recipes | Asset variants for integration and performance experiments |
| AI coding agents | [`AGENTS.md`](AGENTS.md), [portable Skill](.codex/skills/threejs-model-builder/SKILL.md), local MCP | Searchable IDs, attribution-aware source and import guidance |
| Designers and makers | [Print Workbench](https://1998x-stack.github.io/3D-worlds/#print-workflow), `printables/` | Initial geometric drafts and editable CAD prototypes |
| Contributors and maintainers | `catalog/`, `scripts/`, `tests/` and GitHub Actions | A reproducible path to add, validate, review, and publish assets |

## V1.4.1 · Maker model fine-detail refresh

All **30 previously released V1.4 maker-scene models** have undergone an original geometry and material-detail revision (not a new catalog batch). Existing model IDs, titles, generator names, metric envelopes and licensing remain stable; the complete catalog stays at **565 assets / 14 categories**.

- **825 → 1,824 individually named mesh parts** (+999 semantically designed details), documented per model with before/after counts.
- Six-sided storage cells, open soap drainage slats, true-aperture shade bricks, curved Truchet geometries, authentic surface fixtures, circuit traces, fasteners and biome microdetails.
- Portable Three.js recipe extensions for rounded profiles, hexagonal prisms and arcs, with exportable PBR material treatments. Browser source-copy and GLB export remain supported.
- **Manufacturing disclaimer:** the revisions improve *appearance* and some geometric openings, but do not establish printability, measured clearances, watertightness, physical strength or slicer approval.

[Full bilingual 30-model refinement report](docs/v14-fine-detail-refinement.md) ·
[V1.4 manifest / revision metadata](catalog/collections/v14.json) ·
[Verification gates](docs/verification-v14.md)

## V1.4.3 · Two CAD pilots: geometry and toolpaths

The 30 original V1.4 GLB scenes remain **blocked** for print manufacturing.
The next focused step revises the **two distinct OpenSCAD pilots**:
the soap bridge uses a corrected **side-entry C-profile** with a measured
14.4-mm nominal lip gap, and the hex bit rack has measured 6.85-mm AF
pockets and a 6.0-mm pocket floor. Two CAD bodies and two three-clearance coupon strips (four STL solids)
undergo actual triangle cross-section checks, and CI runs an
**offline PrusaSlicer toolpath export** (no printer connection).

**NOT tested:** real rim and driver-bit dimensions, physical printed
coupons, part-load strength, global min wall thickness, human slicer layer
review, and product safety or commercial certification. Toolpaths are
not approved printer instructions.

[CAD measurement and offline-slicing report](docs/v14-cad-fit-coupons.md) ·
[Physical-fit recording form](docs/templates/v14-coupon-physical-fit-log.md)

## V1.4.2 · 30-model print risk survey and CAD pilots

**New manufacturing evidence, not a new visual asset batch:** the same 30 V1.4
models are now covered by a source-hashed, full-resolution GLB risk survey and
**30 individual dimension/fit review plans**. CI runs topology, envelope,
tiny-component proxy, overhang and bed-contact heuristics after building GLBs.
**No wall thickness, mating clearance, toolpath, strength or real print is
certified by this step.**

Two separately authored **parametric OpenSCAD geometry prototypes** are provided:
a **clip-on soap drainage bridge** (measure lip thickness first) and a
**1/4-inch hex bit rack** (print its three-clearance fit coupon first).
Their real mm-scale CAD source is **not** a renamed version of the Three.js
scene mesh. Machine-generated STL audits cover only topology, envelope
and positive volume; operator slicer and real fit testing remain required.

[Full engineering scope, commands and acceptance gates](docs/v14-print-manufacturing.md) ·
[30 unique acceptance intents](catalog/v14_manufacturing_intent.json) ·
[Human print review template](docs/templates/v14-print-release-review.md)

## Explore the platform

**Live experience:** https://1998x-stack.github.io/3D-worlds/

The static gallery supports category/search discovery, model detail inspection, and browser-side model/export interactions. The print workbench estimates fit using *declared catalog bounds* and reference printer envelopes. The gallery is static: it **does not run** the Python search API, MCP server, slicer, or print-geometry audit.

**Recent collections**

| Collection | Scope | Editable source | Status |
| :-- | :-- | :-- | :-- |
| [v1.4 creative maker-market scenes](docs/30-assets-v14.md) | 30 new designs, 13 general scene categories | Three.js factories and recipes | Original visual assets; physical use unverified |
| [v1.3 overseas print-commerce](docs/print-commerce-v13.md) | 50 product hypotheses in 10 families | Three.js previews **plus** `printables/*.scad` | CAD prototypes; commercial demand and printability unverified |
| [Earlier batches](docs/release-history.md) | Historical collections and acceptance notes | Versioned source references | Preserved IDs; refer to each collection's evidence |

Amazon/eBay product listings and Hacker News maker discussions are **inspiration/research signals**, not proof of demand, permission to copy third-party geometry, endorsement, or product-safety certification. See [the v1.4 source notes](docs/30-assets-v14.md) and [CAD/HN technical research](docs/codex-cad-3d-printing-hn-research-2026.md).


### Overseas detail refinement · batch 01 (10 designs)

Ten existing overseas prototypes now have **SKU-specific Three.js geometry and
dimensioned OpenSCAD CAD** rather than only generic family silhouettes: two
non-electrical light sleeves, modular pencil storage, cable and paintbrush
organizers, a six-bay tool bin, trading-card and handheld-console stands, a
ribbed succulent pot and a propagation-vial holder. The **565-asset count and
stable IDs are preserved**. The CAD was checked for watertightness,
connectivity and dimension envelopes, but has **not** been slicer- or
physically print-verified.

[Ten-SKU dimensional refinement and release checks](docs/overseas-refinement-batch-01.md) ·
[Geometry audit source](scripts/audit_refined_commerce.py)

## Overseas print-commerce detail refinement · batch 02 (20 more)

**30 of the existing 50 overseas print-commerce prototypes now have SKU-specific detail geometry** (10 in batch 01 + 20 in batch 02). Batch 02 adds twenty original, dimensioned OpenSCAD designs and separate named-mesh Three.js previews, spanning non-electrical lamps, original figurines, miniature scenery, organizing, stands, gaming, jewelry, horticulture, customizable gifts, and costume ornaments. The final twenty were subsequently refined in batch 03; no new asset IDs were added.

**Engineering status:** the twenty CAD sources passed geometry-only checks for connected, watertight positive-volume meshes and outer bounds; this does **not** verify printed fit, minimum wall thickness, slice supports, safe use, legal compliance, or marketplace sales.

[Detailed 20-SKU design inventory and manual gates](docs/overseas-refinement-batch-02.md) · [CAD source + topology audit](scripts/audit_refined_commerce_batch02.py) · [Batch 01 report](docs/overseas-refinement-batch-01.md)

## Overseas print-commerce detail refinement · batch 03 (final 20)

Across all three refinement batches, **50/50 existing overseas concepts** now have SKU-specific Three.js previews and native OpenSCAD forms. The final 20 additionally received a second detail pass. Catalog count remains **565**, IDs/dimensions and `prototype_unverified` status remain stable.

Recorded Batch 03 GitHub Actions logs show **20/20 CAD meshes passed geometry-only checks** (watertight, connected, positive volume, consistent winding, envelopes within ±0.5 mm). They are **not** certified for slicer layers, wall thickness, clearance, physical fit, load, safety, or sale. GLB/LOD/browser and V1.4 CAD integration are separate release gates.

[Final 20 design and limits](docs/overseas-refinement-batch-03.md) · [CAD geometry audit](scripts/audit_refined_commerce_batch03.py)

## Quick start

**Requirements:** Node.js **22+**, a modern WebGL-capable browser, and Python **3.11+** for catalog/CLI tooling. Chromium/Playwright is required for reproducible preview and GLB generation; OpenSCAD is required only for the CAD-backed print-commerce workflow.

### 1. Run the gallery locally

~~~bash
git clone https://github.com/1998x-stack/3D-worlds.git
cd 3D-worlds
npm install
npm run dev
~~~

Open the URL printed by Vite. The `predev` script generates the static catalog projection before starting the dev server. The Vite base path for GitHub Pages is `/3D-worlds/`; use `npm run dev` rather than opening `index.html` directly as a local file.

### 2. Build the website

~~~bash
python3 scripts/catalog.py validate
npm run build
npm run preview
~~~

`prebuild` regenerates `catalog/public_models.json`. A website build is *not* the same as generating fresh GLB binaries or preview images.

### 3. Rebuild previews and downloadable GLB/LOD artifacts

~~~bash
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
npm run build
npm run test:gallery
~~~

This pipeline requires working headless Chromium/WebGL and can be substantially more expensive than a documentation-only build. It must fail on unavailable rendering support rather than substitute fake thumbnails.

### 4. Work with an existing asset

For example, `furniture.chair.linen-001` is a stable catalog ID; its source factory is in `src/models/chair.js`. Edit the factory for a **new** asset/variant, or inspect the existing source and consume its generated GLB. **Do not silently mutate published model identity or geometry** in a way that breaks downstream consumers.

## Capabilities and boundaries

| Area | Supported here | Explicit non-goals / additional work |
| :-- | :-- | :-- |
| Source catalog | Schema-validated model registry, bilingual labels, category metadata, immutable IDs | Third-party IP clearance cannot be inferred from a successful schema check |
| Gallery | Static Three.js browsing, inspect/copy/export controls, prerendered cards | A permanent WebGL canvas for every catalog card |
| Game delivery | Raw GLB, LOD0/1/2, Meshopt, image previews, hashes/metrics | Game-engine-specific rigs, animation, collision or performance guarantees |
| Search and agents | Local SQLite FTS5, cursor-paginated HTTP API, read-only stdio MCP | Public hosted API/MCP on GitHub Pages |
| Browser print planning | Reference build-volume fit estimate and STL **draft** | Slicer review, support generation, verified wall thickness or production sign-off |
| Offline scene-mesh print audit | Meter-to-mm conversion, coordinate conversion, topology/volume gates, reports, candidate STL/3MF | Mechanical verification, native CAD/STEP reconstruction, automatic tolerancing |
| Dedicated CAD prototypes | 50 OpenSCAD `.scad` design masters and export script | Production-ready products or verified overseas sales |

The 14 top-level catalog categories include the 13 general scene categories (`furniture`, `bathroom`, `characters`, `nature`, `vehicles`, `electronics`, `decor`, `kitchen`, `architecture`, `urban`, `tools`, `sports`, `scifi`) plus `print-commerce`. The canonical category/priority mapping is [`catalog/print_policy.json`](catalog/print_policy.json).

## System architecture

~~~mermaid
flowchart TD
    S["Three.js source factories<br/>src/models/"] --> M["Canonical catalog<br/>catalog/models.json"]
    M --> V["Schema and catalog validation"]
    S --> R["Playwright + Chromium renderer"]
    V --> R
    R --> T["WebP / AVIF thumbnails"]
    R --> G["Raw full-resolution GLB"]
    G --> L["glTF Transform + Meshopt<br/>LOD0 / LOD1 / LOD2"]
    T --> P["Vite static gallery<br/>GitHub Pages"]
    L --> P
    V --> Q["SQLite FTS5 index"]
    Q --> API["Self-hosted paginated API"]
    Q --> MCP["Local stdio MCP"]
    L --> STORE["Local or private S3/MinIO<br/>content-addressed objects"]
    G --> QA["Offline print geometry audit"]
    QA --> D{"Checks pass?"}
    D -->|yes| C["STL / 3MF candidates<br/>+ audit JSON"]
    D -->|no| X["Blocked JSON report"]
    C --> H["Human slicer + physical review"]
    CAD["OpenSCAD masters<br/>printables/*.scad"] --> CE["Separate CAD export CLI"]
    CE --> H
~~~

### Non-negotiable separation of concerns

1. **Metadata source of truth:** `catalog/models.json`. SQLite and static JSON are derived projections.
2. **Visual source of truth:** `src/models/*.js` factories and reusable helpers; use original raw GLB for geometry audits.
3. **Realtime transport optimization:** LOD/Meshopt is for game/website consumption; LOD1/LOD2 are **not** manufacturing masters.
4. **Manufacturing geometry:** The print CLI verifies selected mesh properties; OpenSCAD masters use an independent mm/Z-up contract.
5. **Hosting:** Pages is static; Python stdio MCP, SQLite API and storage adapters are local/self-hosted services, not hidden Pages features.

Architecture details: [`docs/architecture.md`](docs/architecture.md) · [P0/P1/P2 delivery runbook](docs/p0-p1-p2-delivery.md) · [Ingestion and provenance](docs/ingestion-architecture.md).

## Repository map

~~~text
3D-worlds/
├── catalog/
│   ├── models.json              # canonical asset records and stable IDs
│   ├── collections/             # historical additive release inventories
│   └── print_policy.json        # print priority and reference printer profiles
├── schemas/manifest.schema.json # registry contract
├── src/
│   ├── models/                  # procedural generators, primitives, recipes
│   └── ...                      # gallery, inspector and browser print planning
├── printables/                  # OpenSCAD CAD masters and helper library
├── scripts/                     # catalog, rendering, GLB, print and QA commands
├── tests/                       # Python regression and geometry/collection tests
├── services/                    # read-only MCP, HTTP API, storage backends
├── db/                          # SQLite schema and derived query model
├── public/                      # static frontend assets / generated build outputs
├── ingest/                      # optional third-party GLB ingest staging
├── deploy/                      # optional local API deployment examples
├── .github/workflows/           # verify + deploy Pages; research PDF workflow
├── .codex/skills/               # canonical portable model-building Skill
├── .claude/skills/              # byte-identical mirror
├── .pi/skills/                  # byte-identical mirror
├── docs/                        # architecture, QA, research, release history
├── README.md                    # public technical entry point
├── README.zh-CN.md              # Chinese project overview
├── AGENTS.md                    # executable rules for coding agents
└── CONTRIBUTING.md              # contribution process
~~~

Some folders contain generated data during local runs. Files in `.cache/`, generated GLBs/thumbnails, SQLite databases, and `dist/` are build products unless a particular reviewed publication workflow says otherwise. **Do not commit large generated artifacts just because a test created them.**

## Asset contract and authoring

### Canonical metadata

A catalog record connects an immutable `id` and unique `slug` to a category, title, tags, license, author, source or binary path, declared dimensions, and optional provenance/variant metadata. Schema: [`schemas/manifest.schema.json`](schemas/manifest.schema.json).

- **Units/orientation:** Three.js assets use **meters, +Y up**, floor-aligned origin, with the model locally centered on X/Z.
- **Identity:** preserve published `id`, `slug` and source references. A substantially different object belongs in a new version or new asset ID.
- **Source:** procedural assets expose an editable model factory returning `THREE.Group`, with clearly named components. Recipe-backed assets must remain reconstructible.
- **Provenance:** retain accurate author, SPDX license and evidence. External references are not authorization to redistribute a model.
- **Dimensions:** positive [width, height, depth] values in meters, checked against actual model geometry when feasible.
- **Localization:** write meaningful English and Chinese titles for new authored catalog assets.

### Scaffold a model

~~~bash
python3 scripts/new_model.py \
  --slug side-table --category furniture \
  --title "Side Table" --title-zh "边桌" \
  --dimensions 0.8 0.6 0.8
~~~

Then refine `src/models/side_table.js` into an original, named, visually intentional model. Adjust manifest metadata and add appropriate tests/release inventory before publishing.

~~~bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
node scripts/validate_models.mjs
~~~

**AI-assisted batches:** do not merely output 30–50 differently named boxes. Require distinct silhouettes, useful part hierarchy, detailed source factories, plausible dimensions, originality, stable IDs, per-asset source evidence and runnable validation. The authoritative agent workflow is [`AGENTS.md`](AGENTS.md) and the [model builder Skill](.codex/skills/threejs-model-builder/SKILL.md).

## Reproducible previews and GLB assets

The build route uses Playwright/Chromium to capture real rendered thumbnails and raw GLB, then glTF Transform/Meshopt for LOD0/1/2. A generated index records actual artifact sizes, geometry metrics and SHA-256 hashes. LOD simplification targets are approximate: report observed reductions, not marketing estimates.

| Output | Typical location | Notes |
| :-- | :-- | :-- |
| Source GLB | `.cache/raw/<slug>.glb` | Original render-export mesh for offline audit |
| WebP/AVIF | `public/thumbs/<slug>.webp` / `.avif` | Real renderer output; no placeholder stock assets |
| Optimized GLB variants | `public/generated/<slug>-lod0.glb` through `-lod2.glb` | Meshopt-aware loader required |
| Build index | `public/generated/index.json` | Actual variants, hashes and metrics |
| Static website | `dist/` | Generated by Vite; deployed from verified CI artifact |

~~~bash
# A single source GLB when investigating one model:
node scripts/render_assets.mjs --id furniture.chair.linen-001

# Entire model set (Chromium/WebGL required):
npm run generate:assets
npm run verify:assets
~~~

The exact pipeline, content-addressed publication mechanics, API pagination and storage options are documented in [`docs/p0-p1-p2-delivery.md`](docs/p0-p1-p2-delivery.md).

## 3D printing: two distinct workflows

**Choose the workflow by the authoritative geometry source.** A stylized Three.js scene and a native parametric CAD design are not interchangeable.

### A. Scene asset → audited *candidate* STL/3MF

~~~bash
python3 -m pip install -r requirements-print.txt
npx playwright install chromium

# Export ORIGINAL source geometry, not a game LOD:
node scripts/render_assets.mjs --id furniture.chair.linen-001

# Basic topology-checked STL / mm-encoded 3MF and report:
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220

# Preserve multi-object 3MF and export per-source-mesh STL parts:
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 --mode separated

# Record desired material/fit intent; no geometry change is performed:
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 \
  --material PETG --clearance-mm 0.25
~~~

The CLI transforms **meters/Y-up to millimeters/Z-up**; validates selected mesh invariants (including closure/orientation/positive volume); and emits a JSON evidence report. It blocks unsafe geometry rather than silently endorsing it. `--mode separated` is a source-mesh partition, **not automatic manufacturable segmentation**. `--clearance-mm` is a recorded design requirement, **not a boolean offset** or guaranteed real clearance.

### B. CAD-backed print-commerce design → OpenSCAD prototype

~~~bash
# Install the OpenSCAD CLI first.
python3 scripts/export_print_commerce.py \
  --only moon-phase-light-sleeve --format stl

python3 scripts/export_print_commerce.py \
  --only custom-desk-nameplate --format 3mf

# Preview planned batch work without exporting:
python3 scripts/export_print_commerce.py --dry-run --limit 5
~~~

The 50 dedicated `printables/*.scad` source files are parameterized in **millimeters/Z-up**, using `printables/lib/commerce_forms.scad`. Their procedural gallery counterparts are **visual representations**, not a guarantee of identical watertight CAD geometry. See [CAD instructions](printables/README.md).

### Print QA states and release decision

~~~bash
# Metadata survey only. Does NOT open meshes or approve anything.
python3 scripts/audit_print_catalog.py --metadata-only

# Try a limited number of locally generated source meshes.
python3 scripts/audit_print_catalog.py --limit 10 --longest-mm 120

# Make missing/blocked/audit errors fail the audit command.
python3 scripts/audit_print_catalog.py --category furniture --strict
~~~

| Report state | Interpretation | May publicly claim "ready to print"? |
| :-- | :-- | :-- |
| `not_audited` | Metadata/planning only | **No** |
| `missing_source` | Required source mesh unavailable | **No** |
| `blocked` / `audit_error` | Failed or incomplete geometry checks | **No** |
| `geometry_pass_manual_review_required` | Limited automatic checks passed | **No** |
| Human slicer and physical review | Separate evidence outside the automatic pipeline | Only with precise, asset-specific substantiation |

Before any real print or commercial sale, independently check actual minimum wall thickness, build orientation, adhesion/supports, islands, dimensional tolerances, device clearances, assembly, fatigue, material suitability, safety and target-market regulation. STL has **no reliable embedded unit**; verify mm in the slicer. No generated G-code or certification is implied.

Read [print pipeline](docs/print-pipeline.md) · [engineering review](docs/print-engineering.md) · [reference profiles](catalog/print_policy.json).

## Search API, MCP, and storage

The **local and self-hosted** integrations are optional; they are not hosted by GitHub Pages.

### SQLite and read-only search API

~~~bash
python3 scripts/catalog.py build
python3 services/search_api.py

curl http://127.0.0.1:8071/healthz
curl 'http://127.0.0.1:8071/api/v1/assets?search=chair&limit=10'
curl 'http://127.0.0.1:8071/api/v1/categories'
~~~

The API supports `GET /api/v1/assets` with `search`, `category`, bounded `limit` (maximum 100), and opaque `cursor` pagination, plus individual asset and download-metadata routes. It defaults to loopback; public production exposure requires independent HTTPS, identity/rate limiting, operational monitoring and storage planning.

To exercise the gallery's API-backed mode:

~~~bash
VITE_CATALOG_API_URL=http://127.0.0.1:8071 npm run dev
~~~

Without that variable, the static deployment uses a generated catalog projection. Do not confuse the static subset/projection with the canonical full registry or claim the public Pages site has a live database.

### Local MCP for coding agents

~~~bash
python3 scripts/catalog.py build
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements-mcp.txt
python3 services/mcp_server.py
~~~

Configure the MCP client to launch the Python program via **stdio** with the repository path (see [MCP contract](docs/mcp-contract.md)). Tools include `search_models`, `get_model`, `list_categories`, `get_threejs_source` and `get_import_recipe`. They return metadata/source/import guidance; they do **not** automatically modify another repository or perform arbitrary code execution.

### Object storage

A local content-addressed store can be smoke-tested without cloud access. S3/MinIO publication requires a separately provisioned **private** bucket and credentials supplied through environment variables, never Git. See [storage/deployment runbook](docs/p0-p1-p2-delivery.md). The repository does **not** provide a ready-made public S3 account or production service.

## Verification and CI

Run the **smallest relevant tests during iteration**, then the applicable full gate before a release. Examples below are commands present in the repository; do not report a pass unless you actually ran it.

~~~bash
# Registry, stable source contracts, Python tests
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
node scripts/validate_models.mjs

# Printing policy and browser planning
npm run test:print

# GLB ingestion contract
npm run test:ingest

# Agent Skill mirror contract
python3 scripts/verify_skill_mirrors.py
python3 .codex/skills/threejs-model-builder/scripts/preflight.py

# Full media + website gate
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
npm run build
npm run test:gallery
npm run test:remote
~~~

The [Pages workflow](.github/workflows/pages.yml) checks the catalog, Python tests, print policies, representative OpenSCAD exports, the GLB ingest path, Skill mirrors, generated thumbnails/LODs, local storage/API behavior, gallery browser smoke and MCP integration. On a **pull request**, CI verifies without deploying; on a **main-branch push**, deployment follows successful verification.

A passing CI build establishes that specific automated checks passed. It **does not** prove good-looking composition, perfect game performance, manufacturing safety, commercial compliance or successful physical fabrication.

## Deployment

| Target | Delivery | Operational boundary |
| :-- | :-- | :-- |
| GitHub Pages | Vite `dist/` via [`pages.yml`](.github/workflows/pages.yml) | Static assets only, base path `/3D-worlds/` |
| Local gallery | `npm run dev` / `npm run preview` | Developer workstation |
| Search API | `python3 services/search_api.py` or [local Compose example](deploy/compose.local.yml) | Self-hosted, initially loopback |
| MCP | `python3 services/mcp_server.py` | Local stdio integration |
| Asset store | Local SHA-256 store or externally configured S3/MinIO | Private credentials and provisioning required |

For a release, review the commit diff, run the right gates, inspect representative assets in a real browser, verify Pages URL/deep links after deployment, and retain actual machine-readable reports. Do not publish unreviewed print-candidate files as certified production files.

## Contributing, security, and licensing

- **Contributions:** follow [CONTRIBUTING.md](CONTRIBUTING.md); keep changes focused, add evidence, do not change published IDs silently, and update docs when behavior changes.
- **Agent execution:** use [AGENTS.md](AGENTS.md) for task routing, source-of-truth rules, validation matrix, safety constraints and handoff reports.
- **Security reports:** follow [SECURITY.md](SECURITY.md); never commit tokens, private buckets, credentials or private user content.
- **Licensing:** project-authored code is [MIT licensed](LICENSE). The license does not automatically grant rights to any imported mesh, brand, texture or trademark. Check *each asset's* SPDX/provenance and any third-party dependency conditions before redistribution or commercial use.
- **Responsible product claims:** concepts are not verified sales results. For manufactured goods, the designer/seller must separately evaluate fit, mechanical/thermal/chemical safety, labeling and applicable rules.

## Documentation index

| Topic | Where to start |
| :-- | :-- |
| Chinese project overview | [`README.zh-CN.md`](README.zh-CN.md) |
| Architecture and data ownership | [`docs/architecture.md`](docs/architecture.md) |
| Three.js design and research | [`docs/threejs-research.md`](docs/threejs-research.md) |
| Model-generation agent Skill | [`.codex/skills/threejs-model-builder/SKILL.md`](.codex/skills/threejs-model-builder/SKILL.md) |
| Portable Skill design | [`docs/skill-architecture.md`](docs/skill-architecture.md) |
| Rendering, LOD, API and object storage | [`docs/p0-p1-p2-delivery.md`](docs/p0-p1-p2-delivery.md) |
| Ingest and provenance | [`docs/ingestion-architecture.md`](docs/ingestion-architecture.md) |
| Search/MCP tool contract | [`docs/mcp-contract.md`](docs/mcp-contract.md) |
| 3D-print pipeline and limitations | [`docs/print-pipeline.md`](docs/print-pipeline.md) |
| Print engineering review checklist | [`docs/print-engineering.md`](docs/print-engineering.md) |
| OpenSCAD prototypes | [`printables/README.md`](printables/README.md) |
| Overseas market design hypotheses | [`docs/print-commerce-v13.md`](docs/print-commerce-v13.md) |
| v1.4 30-model inventory and verification | [`docs/30-assets-v14.md`](docs/30-assets-v14.md), [`docs/verification-v14.md`](docs/verification-v14.md) |
| Historical collections | [`docs/release-history.md`](docs/release-history.md) |

---

**Build original assets. Keep provenance inspectable. Verify what you can measure. Never mistake a visual preview for physical-world certification.**

## Integrated V1.5 + V1.6 candidate batches (review branch)

The release-integrity integration preserves **625 unique procedural model IDs** across 14 categories: the existing 565 historical assets, 30 V1.5 refined market models (PR #31) and 30 *different* V1.6 skill-guided originals (PR #32). See [V1.5](catalog/collections/v15.json), [V1.6](catalog/collections/v16.json), [design notes](docs/30-assets-v15.md) and [V1.6 briefs](docs/30-assets-v16.md).

Both sets remain independently authored visual geometry, not manufacturing CAD. Four separate original OpenSCAD CAD **candidates** are in `printables/v15/`; they require measured wall, slicer, fit, materials and physical review before any functional claim. PR #27's final 20 overseas detail refinements are included in this integration. CI checks original geometry, all portable Skills, all four CAD candidates and browser builds; no physical testing is claimed.

For new batches use new release collections (e.g. V1.7), never replace existing IDs or silently reinterpret an existing collection.
