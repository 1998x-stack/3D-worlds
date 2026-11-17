# 3D Worlds MCP Contract · v0.1

## Install and launch

Clone repository, generate SQLite, install the official MCP Python SDK v2:

```bash
python3 scripts/catalog.py build
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements-mcp.txt
python services/mcp_server.py
```

The server speaks **stdio** and must be launched by your MCP host.
It writes protocol frames to stdout; do not pipe logging or interactive
prompts into stdout. All asset reads come from local catalog.

Configure each host's stdio MCP integration with the Python interpreter,
absolute script path and the environment variable `THREED_WORLDS_HOME`.
`THREED_WORLDS_DB` may point to a trusted compiled catalog in another
directory. This is a **local server**, not an HTTPS endpoint.

## Public tool contract

| Tool | Inputs | Returns |
|---|---|---|
| `search_models` | `query?:str`, `category?:str`, `limit?:int`, `offset?:int` | Metadata array and paging inputs; limit capped at 100 |
| `get_model` | `asset_id:str` (ID or slug) | Full record, tags, file variants |
| `list_categories` | none | Category and count array |
| `get_threejs_source` | `asset_id:str` | Portable JavaScript source module + license |
| `get_import_recipe` | `asset_id:str`, `target?:str` | Steps for procedural source or GLTFLoader snippet |

Resource: `3dworlds://asset/{asset_id}` → JSON metadata.

Prompt: `place_asset_in_game(asset_id, scene_description="")` → a
structured agent instruction to inspect exact IDs and respect license and scale.

## Concrete example

Caller asks: "Find a chair and put it beside my existing desk."

1. `search_models(query="chair", limit=10)` returns
   `furniture.chair.linen-001`.
2. `get_model(asset_id="furniture.chair.linen-001")` returns dimensions
   and MIT license.
3. `get_threejs_source(asset_id="furniture.chair.linen-001")` returns
   copy-ready code including helper definitions.
4. The host agent creates a module in the user's project with that code,
   imports `createChair`, sets an appropriate world-space transform and
   calls `scene.add(chair)`.
5. Optionally user downloads `linen-dining-chair.glb` in the Gallery and
   imports using GLTFLoader.

Important: **This MCP service does not modify the user's repository,
copy files onto their machine, or install model packages automatically.**
The agent host may do that separately, subject to its own permissions.

## Security and API semantics

- The service opens SQLite in read-only mode for catalog queries.
- Source retrieval is restricted to `src/models/*.js` within repository root.
- IDs are matched by SQL parameters; FTS terms are quoted and bounded.
- Unknown IDs are explicit errors, never silently substituted.
- Remote HTTP transport, OAuth, server-side upload and signed downloads are
  not part of this deliverable.
- Commercial usage must follow the **per-asset SPDX license**, not simply
  an assumption that every future gallery item is MIT.

## Extensibility

Add `find_similar_models`, `get_lod`, `get_animation_clip`,
`get_collision_geometry`, `get_dependency_graph` as new tools after the
schema and asset corpus supply grounded data. Keep backward compatibility for
existing tool names and stable IDs; version incompatible contracts.
