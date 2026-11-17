#!/usr/bin/env python3
"""3D Worlds MCP server (official MCP Python SDK v2, stdio transport).

Run from repository root with:
  pip install -r requirements-mcp.txt
  python services/mcp_server.py
"""
from __future__ import annotations

import json
import os
from pathlib import Path
import re
import sqlite3
import sys
from typing import Any

ROOT = Path(os.environ.get("THREED_WORLDS_HOME", Path(__file__).resolve().parents[1])).resolve()
sys.path.insert(0, str(ROOT))
from scripts.catalog import build_catalog  # noqa: E402
from mcp.server import MCPServer  # noqa: E402

DB = Path(os.environ.get("THREED_WORLDS_DB", ROOT / "data" / "catalog.sqlite")).resolve()
mcp = MCPServer("3D Worlds Asset Catalog")


def connection() -> sqlite3.Connection:
    if not DB.is_file():
        build_catalog(DB)
    conn = sqlite3.connect(f"file:{DB}?mode=ro", uri=True)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA query_only=ON")
    return conn


def item_detail(conn: sqlite3.Connection, row: sqlite3.Row) -> dict[str, Any]:
    asset = dict(row)
    asset["tags"] = [
        record[0] for record in conn.execute(
            "SELECT tag_id FROM asset_tags WHERE asset_id=? ORDER BY tag_id",
            (asset["asset_id"],)
        )
    ]
    asset["files"] = [
        dict(record) for record in conn.execute(
            "SELECT variant_key,role,format,repository_path,public_url,sha256,bytes,lod_level "
            "FROM asset_files WHERE asset_id=? ORDER BY variant_key", (asset["asset_id"],)
        )
    ]
    provenance = conn.execute(
        "SELECT source_name,source_url,original_author,license_evidence_url,notes "
        "FROM asset_provenance WHERE asset_id=?", (asset["asset_id"],)
    ).fetchone()
    asset["provenance"] = dict(provenance) if provenance else None
    return asset


def lookup(asset_id: str) -> dict[str, Any]:
    with connection() as conn:
        row = conn.execute(
            "SELECT * FROM assets WHERE (asset_id=? OR slug=?) AND status='published'",
            (asset_id, asset_id)
        ).fetchone()
        if row is None:
            return {"error": "asset_not_found", "requested": asset_id}
        return item_detail(conn, row)


@mcp.tool()
def search_models(query: str = "", category: str = "", limit: int = 20, offset: int = 0) -> dict:
    """Search published models, optionally by category. Returns paginated metadata.

    Search uses SQLite FTS5 with safely quoted tokens. For Chinese substrings
    that FTS5's default tokenizer misses, fallback to LIKE.
    """
    limit = max(1, min(limit, 100))
    offset = max(0, min(offset, 1_000_000))
    where = ["a.status='published'"]
    args: list[Any] = []
    if category:
        where.append("a.category_id=?")
        args.append(category)
    tokens = re.findall(r"[^\s\"']+", query.strip())[:8]
    match = " AND ".join('"' + token.replace('"', '""') + '"' for token in tokens)
    with connection() as conn:
        if match:
            fts_where = " AND ".join(where + ["assets_fts MATCH ?"])
            sql = ("SELECT a.* FROM assets a JOIN assets_fts ON assets_fts.rowid=a.rowid "
                   f"WHERE {fts_where} ORDER BY bm25(assets_fts), a.asset_id LIMIT ? OFFSET ?")
            rows = conn.execute(sql, (*args, match, limit, offset)).fetchall()
            if not rows:
                pattern = "%" + query.strip().replace("%", "\\%").replace("_", "\\_") + "%"
                fallback_where = " AND ".join(where + [
                    "(a.title LIKE ? ESCAPE '\\' OR a.title_zh LIKE ? ESCAPE '\\' "
                    "OR a.description LIKE ? ESCAPE '\\' OR a.search_terms LIKE ? ESCAPE '\\')"
                ])
                rows = conn.execute(
                    f"SELECT a.* FROM assets a WHERE {fallback_where} ORDER BY a.title LIMIT ? OFFSET ?",
                    (*args, pattern, pattern, pattern, pattern, limit, offset)
                ).fetchall()
        else:
            sql = "SELECT a.* FROM assets a WHERE " + " AND ".join(where) + " ORDER BY a.asset_id LIMIT ? OFFSET ?"
            rows = conn.execute(sql, (*args, limit, offset)).fetchall()
        return {"query": query, "category": category, "limit": limit, "offset": offset,
                "items": [item_detail(conn, row) for row in rows]}


@mcp.tool()
def get_model(asset_id: str) -> dict:
    """Fetch metadata, dimensions in meters, tags, license, provenance, and asset files."""
    return lookup(asset_id)


@mcp.tool()
def list_categories() -> list[dict]:
    """List model categories and the number of published assets in each."""
    with connection() as conn:
        rows = conn.execute(
            "SELECT c.category_id, c.label, count(a.asset_id) AS count "
            "FROM categories c LEFT JOIN assets a "
            "ON a.category_id=c.category_id AND a.status='published' "
            "GROUP BY c.category_id ORDER BY c.sort_order"
        ).fetchall()
        return [dict(row) for row in rows]


@mcp.tool()
def get_threejs_source(asset_id: str) -> dict:
    """Get a complete, copy-ready Three.js module for a procedural asset.

    Reads only source files listed in the trusted catalog and under src/models.
    This does not execute model code or write into the caller's project.
    """
    asset = lookup(asset_id)
    if "error" in asset:
        return asset
    if asset["kind"] != "procedural" or not asset.get("source_path"):
        return {"error": "not_procedural", "asset_id": asset_id}
    model_dir = (ROOT / "src" / "models").resolve()
    source = (ROOT / asset["source_path"]).resolve()
    helpers = model_dir / "primitives.js"
    if not source.is_relative_to(model_dir) or source.suffix != ".js" or not source.is_file():
        return {"error": "unsafe_or_missing_source", "asset_id": asset_id}
    model_code = re.sub(r"^import[^\n]+\n", "", source.read_text(encoding="utf-8"), flags=re.M)
    helper_code = re.sub(
        r"^import\s+\*\s+as\s+THREE\s+from\s+['\"]three['\"];?\s*",
        "", helpers.read_text(encoding="utf-8"), count=1, flags=re.M
    )
    code = (
        "// 3D Worlds original asset · MIT license\n"
        "// npm install three\n"
        "import * as THREE from 'three';\n\n"
        + helper_code + "\n" + model_code + "\n"
        + f"// In an existing THREE.Scene: scene.add({asset['generator']}());\n"
    )
    return {"asset_id": asset["asset_id"], "language": "javascript",
            "module": code, "license": asset["license_spdx"]}


@mcp.tool()
def get_import_recipe(asset_id: str, target: str = "threejs") -> dict:
    """Explain how to add a selected model to a Three.js game.

    For procedural assets, call get_threejs_source and paste the returned
    module. For binary assets, use the GLTFLoader recipe and resolved URL.
    """
    asset = lookup(asset_id)
    if "error" in asset:
        return asset
    if target != "threejs":
        return {"error": "unsupported_target", "supported_targets": ["threejs"]}
    if asset["kind"] == "procedural":
        return {"asset_id": asset["asset_id"], "target": target,
                "steps": ["Install three with npm install three",
                          "Call get_threejs_source for the complete original module",
                          f"Invoke {asset['generator']}() and add it to scene",
                          "Optionally export a .glb from the Gallery web inspector"],
                "scale_unit": asset["unit"], "up_axis": asset["up_axis"]}
    filename = asset["slug"] + ".glb"
    return {"asset_id": asset["asset_id"], "target": target,
            "steps": ["Download the binary from get_asset_download",
                      f"Copy it into your game's public/assets/{filename}",
                      "Use GLTFLoader to instantiate and position it"],
            "code": ("import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';\n"
                     f"const gltf = await new GLTFLoader().loadAsync('/assets/{filename}');\n"
                     "scene.add(gltf.scene);"),
            "license": asset["license_spdx"]}


@mcp.tool()
def get_asset_download(asset_id: str) -> dict:
    """Get immutable download URL, SHA-256 and license for an imported GLB."""
    asset = lookup(asset_id)
    if "error" in asset:
        return asset
    if asset["kind"] != "glb" or not asset.get("binary_path"):
        return {"error": "not_prebuilt_glb", "asset_id": asset_id,
                "hint": "For procedural models call get_threejs_source or export GLB in the Gallery"}
    path = asset["binary_path"].removeprefix("public/")
    return {"asset_id": asset["asset_id"],
            "url": "https://1998x-stack.github.io/3D-worlds/" + path,
            "sha256": asset.get("content_sha256"),
            "bytes": asset.get("file_size_bytes"),
            "license": asset["license_spdx"],
            "provenance": asset.get("provenance")}


@mcp.resource("3dworlds://asset/{asset_id}")
def model_resource(asset_id: str) -> str:
    """Machine-readable JSON metadata for one asset."""
    return json.dumps(lookup(asset_id), ensure_ascii=False)


@mcp.prompt()
def place_asset_in_game(asset_id: str, scene_description: str = "") -> str:
    """Help a coding agent import a selected asset without inventing model IDs."""
    return (
        f"Use the 3D Worlds MCP tools get_model('{asset_id}'), "
        f"get_import_recipe('{asset_id}'), and if needed get_threejs_source('{asset_id}'). "
        "Respect license, meters and Y-up orientation; use only verified assets. "
        f"Scene context: {scene_description}"
    )


if __name__ == "__main__":
    mcp.run(transport="stdio")
