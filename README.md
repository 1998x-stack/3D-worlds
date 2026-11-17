# 3D Worlds · Open Asset Infrastructure

**Explore, inspect, copy, export and integrate 3D assets.** A public Three.js
gallery paired with a local, searchable SQLite catalog and MCP server.

**[Live Gallery](https://1998x-stack.github.io/3D-worlds/)** ·
[Architecture](docs/architecture.md) ·
[UI design](docs/ui-design.md) ·
[Three.js research](docs/threejs-research.md) ·
[P0/P1/P2 runbook](docs/p0-p1-p2-delivery.md) ·
[50 newest assets · v0.9](docs/50-assets-v09.md) ·
[50 previous assets · v0.8](docs/50-assets-v08.md) ·
[50 previous assets · v0.7](docs/50-assets-v07.md) ·
[50 previous assets · v0.6](docs/50-assets-v06.md) ·
[50 previous assets · v0.5](docs/50-assets-v05.md) ·
[40 previous assets · v0.4](docs/40-assets-v04.md) ·
[30 previous assets · v0.3](docs/30-assets-v03.md) ·
[MCP contract](docs/mcp-contract.md) ·
[Manifest schema](schemas/manifest.schema.json) ·
[Model-building Skill v2](.codex/skills/threejs-model-builder/SKILL.md) ·
[Skill architecture](docs/skill-architecture.md)


## Three.js Model Builder · Skill v2

The model-building Agent Skill now ships as a **complete, portable directory**
for Codex, Claude and Pi — not only a single `SKILL.md`. Each mirror includes:

- `SKILL.md`: task routing, safe defaults and execution/acceptance rules.
- `references/`: procedural modeling, category taxonomy, catalog/provenance,
  GLB ingestion, thumbnails/LOD, Pages/MCP/storage, QA and official external sources.
- `assets/`: model design brief, acceptance report, import-batch manifest and
  working recipe module template.
- `examples/`: procedural furniture design and audited GLB import walk-through.
- `scripts/preflight.py`: read-only project integration and reference checks.

Begin at [the canonical Skill](.codex/skills/threejs-model-builder/SKILL.md)
and [Skill architecture](docs/skill-architecture.md). All Markdown references
use **paths relative to the Skill root**; external authoritative URLs are
collected in [EXTERNAL-SOURCES.md](.codex/skills/threejs-model-builder/references/EXTERNAL-SOURCES.md).

```bash
python3 scripts/verify_skill_mirrors.py
python3 .codex/skills/threejs-model-builder/scripts/preflight.py --json
```

Contributors edit `.codex/skills/threejs-model-builder/`, then copy **all**
resources (not just `SKILL.md`) to `.claude/` and `.pi/`. CI rejects drift or
broken local links.

## V0.9 — 50 new source-backed modular scene assets

V0.9 adds **50 original independent Three.js models** to the V0.8 baseline of 285,
reaching **335 source-backed procedural assets across 13 categories**. The new
furniture, accessible bathroom, professional characters, biomes, vehicles,
electronics, urban infrastructure, workshop and science assets have 1,068
individually named editable mesh parts. Existing IDs and source paths remain stable.

- [V0.9 full bilingual inventory](docs/50-assets-v09.md)
- [V0.9 machine-readable collection](catalog/collections/v09.json)
- [V0.9 regression and publishing requirements](docs/verification-v09.md)

## V0.8 — 50 previous editable original scene assets

V0.8 expands the original **235 source-editable Three.js generators** by **50 new original models** to **285 assets / 13 categories**, retaining all historical IDs and geometry files. The collection adds health, professional transport, industrial equipment, modular architecture, urban facilities and science scenes.

- [V0.8 full bilingual catalog](docs/50-assets-v08.md)
- [Machine-readable V0.8 collection](catalog/collections/v08.json)
- [V0.8 verification gate](docs/verification-v08.md)

## V0.7 — previous 50 procedural scene assets

V0.7 extends the existing 185 models with **50 original Three.js procedural scene assets**
across all 13 categories: **235 source-editable assets** in total, including new
modular architecture, equipment and landscape props. All prior model IDs remain
stable; CI renders 235 WebP, 235 AVIF and 705 optimized GLB LOD0/1/2 variants.

- [Full bilingual V0.7 50-asset design catalog](docs/50-assets-v07.md)
- [Machine-readable V0.7 collection](catalog/collections/v07.json)
- [V0.7 verification and publishing gate](docs/verification-v07.md)

## V0.6 — previous 50 original scene assets

V0.6 expands the original **135** source-editable models with **50 more
individually authored Three.js generators** to **185 assets / 13 categories**.
All prior stable IDs remain valid, with full Gallery, SQLite, MCP and
WebP/AVIF + Meshopt LOD pipelines retained.

- [Full bilingual 50-asset design inventory](docs/50-assets-v06.md)
- [V0.6 machine-readable collection](catalog/collections/v06.json)

## V0.5 — 50 previous scene assets

V0.5 extends the original 85 source-backed Three.js models to **135 assets
across all 13 categories**, with 50 new original generators.
All 50 new assets have bilingual names, editable Mesh components and an
independent collection inventory. The original 85 IDs remain stable.
CI generates 135 WebP previews, 135 AVIF previews and 405 Meshopt GLB LOD files.

- [Read the full 50-asset design and QA specification](docs/50-assets-v05.md)
- [Machine-readable v0.5 collection](catalog/collections/v05.json)

## V0.4 — 40 previous scene assets

This release adds **40 original scene props** across every existing category:
furniture (4), bathroom (3), characters (3), nature (3), vehicles (4),
electronics (3), decor (3), kitchen (3), architecture (3), urban (3),
tools (3), sports (2) and sci-fi (3).

Review [the full bilingual design inventory](docs/40-assets-v04.md) and the
machine-readable [collection specification](catalog/collections/v04.json).

## Capabilities

- **335 original procedural models across 13 categories:** 285 historical assets plus 50 new V0.9 scene models, each with editable native Three.js source.
- **Web Gallery:** pre-rendered 3D WebP/AVIF cards, bilingual category search,
  model inspector and optional cursor-paginated search API.
- **3D Inspector:** drag to rotate, scroll to zoom, reset, copy deep link.
- **Portable output:** copy self-contained Three.js source or export GLB; build
  pipeline publishes Meshopt compressed GLB LOD0/1/2 variants.
- **GLB batch ingestion:** Khronos specification validation, budgets,
  license/source evidence, content hashes, dry run and explicit publishing.
- **P2 object storage:** content-addressed local/S3/MinIO adapters, signed
  downloads and paginated SQLite search API (optional separate server).
- **SQLite catalog:** normalized categories, tags, files, provenance, relations
  and incremental-search FTS5 index.
- **MCP:** search/get/source/import tools for an AI game-building assistant,
  served from a local read-only SQLite connection.
- **Skills:** mirrored for Codex, Pi and Claude.

> **Status:** v0.9, 335 editable original generators. CI generates real
> WebP/AVIF thumbnails and three optimized GLB LOD variants per generator.
> S3/MinIO implementation is configurable but requires your credentials and
> external deployment; remote MCP hosting and real 50K-asset load testing
> are not claimed. Humanoid prototypes remain unrigged.

## Local run

Requires Node.js 20.19+ or 22.12+ for Vite 7 and Python 3.11+.

```bash
git clone https://github.com/1998x-stack/3D-worlds.git
cd 3D-worlds
npm install
npm run dev
```

Open the local address printed by Vite. Use the UI to inspect/export assets.

### Build SQLite

```bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 scripts/catalog.py stats
python3 -m unittest discover -s tests -v
npm install && node scripts/validate_models.mjs
```

Database is generated as `data/catalog.sqlite` and ignored by Git. CI also
publishes the compiled SQLite file as a 30-day downloadable Actions artifact
(`3d-worlds-catalog-sqlite`). Metadata
source of truth is `catalog/models.json`. Rebuild after changing the manifest.

### Start MCP server

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-mcp.txt
python services/mcp_server.py
```

Configure a stdio MCP client with this shape (replace working directory and
interpreter with absolute paths in the client configuration):

```json
{
  "mcpServers": {
    "3d-worlds": {
      "command": "/ABS/PATH/3D-worlds/.venv/bin/python",
      "args": ["/ABS/PATH/3D-worlds/services/mcp_server.py"],
      "env": {"THREED_WORLDS_HOME": "/ABS/PATH/3D-worlds"}
    }
  }
}
```

MCP actions: `search_models(query, category, limit, offset)`,
`get_model(asset_id)`, `list_categories()`,
`get_threejs_source(asset_id)`, `get_import_recipe(asset_id, target)`,
`get_asset_download(asset_id)` for an already published binary.
Resource `3dworlds://asset/{asset_id}`; prompt `place_asset_in_game`.

Example agent workflow: `search_models("chair")` → `get_model(id)` →
`get_threejs_source(id)` → paste the complete module into user's game,
`scene.add(createChair())`. The MCP server returns code; **it does not
automatically edit the caller's project**.

## Create a model

```bash
python3 scripts/new_model.py --slug side-table --category furniture \
  --title "Side Table" --title-zh "边桌" --dimensions 0.8 0.6 0.8
# Edit generated src/models/side_table.js
python3 scripts/catalog.py build
npm run build
```

The script creates the generator and adds a catalog record; the Gallery's
Vite model registry auto-discovers it. Follow the [Skill](.codex/skills/threejs-model-builder/SKILL.md)
for quality and provenance checks.

## Batch import verified GLB files

The batch importer operates on local files under `ingest/staging/` and is
**dry-run only by default**. Every asset must provide an author, license,
category, dimensions and source evidence for third-party work. The tool
runs structural checks plus the Khronos glTF Validator; only self-contained
GLB 2.0 files are accepted.

```bash
# Copy a legally sourced GLB into ingest/staging/
cp /PATH/TO/MODEL.glb ingest/staging/example.glb
cp ingest/batch.example.json ingest/my-batch.json
# Edit the batch fields, especially file, license evidence and dimensions
node scripts/ingest_glb.mjs --batch ingest/my-batch.json
# Only after inspecting the quality report:
node scripts/ingest_glb.mjs --batch ingest/my-batch.json --apply
python3 scripts/catalog.py build
npm run build
```

See [GLB ingestion architecture](docs/ingestion-architecture.md),
[Ten new asset briefs](docs/asset-designs-v02.md) and
[glTF Validator](https://github.com/KhronosGroup/glTF-Validator).

## P0/P1/P2 — production pipeline

```bash
npm install
npx playwright install --with-deps chromium
npm run generate:assets    # WebP/AVIF + raw GLB + Meshopt LOD0/1/2
npm run verify:assets      # image formats, SHA-256 and decodable GLBs
npm run build
npm run test:gallery       # real Chromium Pages smoke
python3 scripts/catalog.py build
python3 services/search_api.py  # P2 separate local query server
```

See [the P0/P1/P2 runbook](docs/p0-p1-p2-delivery.md) for object storage,
import and S3/MinIO configurations. Generated binaries and thumbnails are
build artifacts, not source files committed to Git.

## Publish to GitHub Pages

Commit to `main`; workflow `.github/workflows/pages.yml` validates catalog,
runs tests, builds Vite and deploys `dist/`. In GitHub repository
**Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
The Vite `base` is `/3D-worlds/` for a project Pages site. If the URL is
not yet active, check Actions and Pages settings before treating it as live.

## Project tree

```text
3D-worlds/
├── .github/workflows/pages.yml
├── .codex/skills/threejs-model-builder/SKILL.md
├── .pi/skills/threejs-model-builder/SKILL.md
├── .claude/skills/threejs-model-builder/SKILL.md
├── catalog/{models,categories}.json # asset and category source of truth
├── db/schema.sql                # SQLite relations, triggers and FTS5
├── data/catalog.sqlite          # generated locally, ignored by git
├── docs/{architecture,threejs-research,ui-design}.md
├── scripts/{catalog,new_model}.py
├── scripts/{audit_glb,ingest_glb,test_ingest}.mjs
├── ingest/{batch.example.json,staging/}
├── public/assets/               # imported GLBs, content-addressed
├── services/mcp_server.py
├── src/models/*.js              # 15 original parametric assets
├── src/{main,scene,styles}.*
├── tests/test_catalog.py
├── package.json / vite.config.js
└── index.html
```

## Contribution policy

Each model requires dimensions, ID/slug, description, tags, license and author.
Never upload unverified licensed third-party models. Every object must
stand on the y=0 floor plane at meaningful meter scale. More details in
[AGENTS.md](AGENTS.md).

## License

MIT for source code and original procedural assets in this repository.
External models contributed later may have different SPDX identifiers;
always inspect each asset's metadata before reuse.
