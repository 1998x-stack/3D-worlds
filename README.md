# 3D Worlds · Open Asset Infrastructure

**Explore, inspect, copy, export and integrate 3D assets.** A public Three.js
gallery paired with a local, searchable SQLite catalog and MCP server.

**[Live site (after Pages activation)](https://1998x-stack.github.io/3D-worlds/)** ·
[Architecture](docs/architecture.md) ·
[UI design](docs/ui-design.md) ·
[Three.js research](docs/threejs-research.md) ·
[Model-building Skill](.codex/skills/threejs-model-builder/SKILL.md)

## Capabilities

- **Five original procedural models:** oak desk, linen dining chair, ceramic
  toilet, male-presenting mannequin, female-presenting mannequin.
- **Web Gallery:** responsive cards, bilingual text search, categories and sorting.
- **3D Inspector:** drag to rotate, scroll to zoom, reset, copy deep link.
- **Portable output:** copy self-contained Three.js source or generate a downloadable GLB.
- **SQLite catalog:** normalized categories, tags, files, provenance, relations
  and incremental-search FTS5 index.
- **MCP:** search/get/source/import tools for an AI game-building assistant,
  served from a local read-only SQLite connection.
- **Skills:** mirrored for Codex, Pi and Claude.

> **Status:** v0.1 MVP. Source-copy and browser GLB export work for the five
> authored generators. The people are stylized, unrigged placeholders. The
> MCP server runs locally, **not** on GitHub Pages. Bulk GLB ingestion, hosted
> binary search, and remote MCP are future capabilities.

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
```

Database is generated as `data/catalog.sqlite` and ignored by Git; metadata
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
`get_threejs_source(asset_id)`, `get_import_recipe(asset_id, target)`.
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
├── catalog/models.json          # versioned source of truth
├── db/schema.sql                # SQLite relations, triggers and FTS5
├── data/catalog.sqlite          # generated locally, ignored by git
├── docs/{architecture,threejs-research,ui-design}.md
├── scripts/{catalog,new_model}.py
├── services/mcp_server.py
├── src/models/{primitives,table,chair,toilet,man,woman}.js
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
