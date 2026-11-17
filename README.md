# 3D Worlds · Open Asset Infrastructure

**Explore, inspect, copy, export and integrate 3D assets.** A public Three.js
gallery paired with a local, searchable SQLite catalog and MCP server.

**[Live Gallery](https://1998x-stack.github.io/3D-worlds/)** ·
[Architecture](docs/architecture.md) ·
[UI design](docs/ui-design.md) ·
[Three.js research](docs/threejs-research.md) ·
[P0/P1/P2 runbook](docs/p0-p1-p2-delivery.md) ·
[50 new assets · v0.5](docs/50-assets-v05.md) ·
[40 previous assets · v0.4](docs/40-assets-v04.md) ·
[30 previous assets · v0.3](docs/30-assets-v03.md) ·
[MCP contract](docs/mcp-contract.md) ·
[Manifest schema](schemas/manifest.schema.json) ·
[Model-building Skill](.codex/skills/threejs-model-builder/SKILL.md)

## V0.5 — 50 new scene assets

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

- **135 original procedural models across 13 categories:** 85 historical
  assets and 50 new v0.5 scene models, each with editable native Three.js source.
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

> **Status:** v0.5, 135 editable original generators. CI generates real
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
