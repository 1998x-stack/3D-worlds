<div align="center">

# 3D Worlds

**Open 3D asset infrastructure — inspectable Three.js scenes, reproducible GLB outputs, and honest 3D printing candidates.**

[**Explore the gallery**](https://1998x-stack.github.io/3D-worlds/) · [**3D Print Workbench**](https://1998x-stack.github.io/3D-worlds/#print-workflow) · [**中文文档**](README.zh-CN.md) · [**Architecture**](docs/architecture.md)

[![Verify and Deploy Pages](https://github.com/1998x-stack/3D-worlds/actions/workflows/pages.yml/badge.svg)](https://github.com/1998x-stack/3D-worlds/actions/workflows/pages.yml) [![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

> **Manufacturing safety:** Browser STL output is an **unverified geometry draft**. Passing CLI mesh checks does not certify printability, physical strength, safe use, or printer compatibility.

## Overview

3D Worlds connects a catalog of **535 original, source-editable procedural models across 14 categories** to a static Three.js gallery, content-addressed GLB/LOD artifacts, searchable SQLite/MCP integrations, and an optional offline STL/3MF preparation workflow. It is an **asset platform**, not a native parametric CAD program or a slicer.

| Layer | Key capability | Delivery |
|---|---|---|
| Catalog | 535 model generators, stable IDs, bilingual labels, physical dimensions, provenance | `catalog/models.json` · `src/models/` |
| Gallery | Real WebP/AVIF thumbnails, interactive model inspector, category search | [GitHub Pages](https://1998x-stack.github.io/3D-worlds/) |
| Game assets | GLB generation and Meshopt LOD0/LOD1/LOD2 optimization | Local build / CI artifact |
| 3D print workbench | Printer-bed dimensions, scaled size estimate, P0/P1/P2 category guidance, STL draft | Browser · **not audited** |
| Print QA | Topology, winding, volume, file hashes, STL/3MF candidates, split part STLs | Optional Python CLI |
| Integrations | SQLite FTS5, read-only MCP tools, paginated API, optional local/S3 object storage | Self-hosted |

**P0/P1/P2 are workflow priorities, not quality grades.** The catalog does not label any generated model as physically verified.

## Overseas print-commerce · v1.3

An independent **海外3D打印商品 / print-commerce** collection adds 50 original
CAD-backed product hypotheses (total **535 models / 14 categories**), preserving
all 485 preexisting scenes. Each product has a procedural Three.js preview,
a dedicated editable `.scad` source (dimensions in millimeters), and market
evidence fields. Its CAD file can be exported to STL or 3MF with OpenSCAD.
No model has been physically tested or certified for sale.

[Overseas customer preference research and all 50 original candidates](docs/print-commerce-v13.md) ·
[Machine-readable product collection](catalog/collections/print-commerce-v13.json) ·
[STL / 3MF CAD export](printables/README.md)

~~~bash
python3 scripts/export_print_commerce.py --format stl --only moon-phase-light-sleeve
~~~

## Quick start

Requires Node.js 22+, Python 3.11+, and a modern browser.

~~~bash
git clone https://github.com/1998x-stack/3D-worlds.git
cd 3D-worlds
npm install
npm run dev
~~~

The Vite server prints the local gallery URL. To regenerate full previews and raw source GLBs (GPU-backed Chromium required):

~~~bash
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
npm run build
~~~

Generated previews, LOD binaries and SQLite files are build outputs, not tracked source artifacts.

## From Three.js to 3D printing

The [online Print Workbench](https://1998x-stack.github.io/3D-worlds/#print-workflow) offers a conservative build-volume estimate for a selected printer preset and a **draft** binary STL. The browser does not run Python, inspect true wall thickness, generate supports or approve manufacturing.

For geometry-audited **candidate** STL/3MF output:

~~~bash
python3 -m pip install -r requirements-print.txt

# Export the original GLB for one model, never a simplified game LOD.
node scripts/render_assets.mjs --id furniture.chair.linen-001

# P0: standard assembly, longest printed dimension 120 mm.
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220

# P1: preserve a multi-object 3MF while also exporting separate per-part STLs.
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 --mode separated

# P2: specify material and record a desired clearance for manual engineering review.
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 \
  --material PETG --clearance-mm 0.25
~~~

**Important:** `--clearance-mm` records a design requirement; it **does not modify** CAD geometry or guarantee the actual clearance. Successful candidates are written under `.cache/print/` as STL, 3MF (explicit millimeter units), and a JSON source/geometry report. Rejected geometry produces a blocked JSON report without usable new STL/3MF output.

### Catalog-wide audit

~~~bash
# Validate all category mappings; every asset remains "not_audited".
python3 scripts/audit_print_catalog.py --metadata-only

# Audit at most ten local original source GLBs; missing sources stay "missing_source".
python3 scripts/audit_print_catalog.py --limit 10 --longest-mm 120

# Fail the script when missing, blocked or errored sources are detected.
python3 scripts/audit_print_catalog.py --category furniture --strict
~~~

The JSON summary distinguishes `not_audited`, `missing_source`, `blocked`, `audit_error` and `geometry_pass_manual_review_required`. None means slicer-reviewed or physically printed.

## Manufacturing readiness tracks

| Priority | Asset groups | Implemented automation | Mandatory human review |
|---|---|---|---|
| **P0 · Geometry** | Decor, miniature furniture, simple accessories | Meter→mm, Y-up→Z-up, manifold/winding/volume gates, nominal bed-envelope check | Real thickness, stable build-plate contact, slicer layers |
| **P1 · Assembly** | Characters, nature, sci-fi, vehicles, architecture, urban models | Separate-part STL, 3MF build items, optional Boolean union, overlap/down-facing indicators | Supports, physical connections, actual part separation and fit |
| **P2 · Functional** | Electronics housings, tools, structural equipment | Generic printer/material presets, recorded desired CAD clearance, unresolved checks | Precise holes, native CAD constraints, material shrinkage, stress and fatigue |

**No** automatic G-code, exact thin-wall analysis, manufacturability guarantee, slicer review, physical printing certificate, or STEP reconstruction is included. STL has no trustworthy units; use millimeters in the slicer.

- [Print pipeline, API and exact CLI behavior](docs/print-pipeline.md)
- [P0/P1/P2 engineering acceptance checklist](docs/print-engineering.md)
- [Machine-readable workflow policy](catalog/print_policy.json)
- [3MF Consortium's Core specification](https://3mf.io/spec/)

## Architecture

~~~mermaid
flowchart LR
    A["Three.js generators<br/>catalog/models.json"] --> B["Gallery on Pages"]
    A --> C["Original GLB"]
    C --> D["Meshopt LOD0/1/2<br/>for realtime 3D"]
    C --> E["Offline print audit<br/>Trimesh + profiles"]
    E --> F{"Core mesh checks pass?"}
    F -->|yes| G["STL / 3MF candidates<br/>manual slicer review"]
    F -->|no| H["Blocked report"]
    A --> I["SQLite + MCP + Search API"]
~~~

| Directory | Responsibility |
|---|---|
| `catalog/` · `schemas/` | Canonical manifests, categories and validation schemas |
| `src/models/` · `src/` | Source-editable generators and gallery/print UI |
| `scripts/` · `tests/` | Rendering, verification, printing and regression tests |
| `services/` · `db/` | MCP, search, storage and SQLite |
| `docs/` | Architecture, QA runbooks and [historic batch notes](docs/release-history.md) |
| `.codex/` · `.pi/` · `.claude/` | Mirrored portable model-building skills |

## Verify the repository

~~~bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
npm run test:print
python3 -m unittest discover -s tests -v
node scripts/validate_models.mjs
npm run generate:assets && npm run verify:assets
npm run build && npm run test:gallery
~~~

Tests validate catalog integrity, source-backed generators, preview/LOD structure, browser STL draft dimensions, basic 3MF interoperability, and conservative readiness reports. **Automated tests do not replace test printing.**

### Extend the library

~~~bash
python3 scripts/new_model.py \
  --slug side-table --category furniture \
  --title "Side Table" --title-zh "边桌" \
  --dimensions 0.8 0.6 0.8
# Edit the generated src/models/side_table.js.
python3 scripts/catalog.py validate
node scripts/validate_models.mjs
~~~

Each asset needs immutable IDs, meaningful editable source, license/provenance evidence and dimensions in **meters, Y-up**. See [Contributing](CONTRIBUTING.md), [Agent instructions](AGENTS.md), [Model Builder Skill](.codex/skills/threejs-model-builder/SKILL.md) and [release history](docs/release-history.md).

## Deploy and integrate

[GitHub Actions](.github/workflows/pages.yml) builds verified static Pages output from the default branch. External S3/MinIO and search/MCP services need separate hosting and credentials; they are **not** provided by GitHub Pages. Read [MCP contract](docs/mcp-contract.md), [ingestion and provenance](docs/ingestion-architecture.md), and [deployment runbook](docs/p0-p1-p2-delivery.md). Never commit credentials or bypass asset licensing.

## Project maturity & limitations

| Verified automatically | Not verified automatically |
|---|---|
| Catalog & recipe integrity, browser inspector and binary STL dimensions | Successful printer operation, build adhesion, safe loads |
| Trimesh watertightness, orientation and positive volume | Exact wall-thickness maps, supports, functional stress |
| 3MF ZIP structure, millimeter units and Trimesh readback fixtures | Real-world printer/slicer-specific 3MF compatibility |
| Source SHA-256 and explicit `not_checked` indicators | CAD hole tolerances, material shrinkage and dimensional accuracy |

## Community, credits, license

For bugs or improvements, see [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md). Useful reports include an asset ID, exact command, affected printer profile, saved JSON output, expected behavior and reproduction steps.

Built with [Three.js](https://threejs.org/), [glTF Transform](https://gltf-transform.dev/), [Meshoptimizer](https://github.com/zeux/meshoptimizer), [Trimesh](https://trimesh.org/) and [Playwright](https://playwright.dev/). Documentation layout draws on the clear onboarding and capability boundaries of [FreeCAD](https://github.com/FreeCAD/FreeCAD), [PrusaSlicer](https://github.com/prusa3d/PrusaSlicer), [OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) and GitHub's repository guidance; 3D Worlds is an independent project.

The project's original code is distributed under [MIT](LICENSE); third-party imported meshes require **per-asset** redistribution permission. The repository license does not override external authors' rights.
