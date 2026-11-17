#!/usr/bin/env python3
"""Validate the checked-in manifest and compile a reproducible SQLite catalog.

No third-party dependencies. The catalog JSON is the source of truth; SQLite is
a replaceable query index for local MCP clients and future API services.
"""
from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import re
import sqlite3
import tempfile

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "catalog" / "models.json"
SCHEMA = ROOT / "db" / "schema.sql"
DEFAULT_DB = ROOT / "data" / "catalog.sqlite"
CATEGORIES = {
    "furniture": ("家具", 10),
    "bathroom": ("卫浴", 20),
    "characters": ("人物原型", 30),
}
IDENTIFIER = re.compile(r"^[a-z0-9][a-z0-9._-]{2,119}$")
SPDX = re.compile(r"^[A-Za-z0-9][A-Za-z0-9.\-+]*$")


def validate_manifest(path: Path = MANIFEST) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("schema_version") != "1.0.0":
        raise ValueError("Unsupported manifest schema_version")
    items = data.get("assets")
    if not isinstance(items, list):
        raise ValueError("assets must be a list")
    seen_ids: set[str] = set()
    seen_slugs: set[str] = set()
    for item in items:
        for field in ("id", "slug", "title", "category", "license", "author", "kind"):
            if not isinstance(item.get(field), str) or not item[field].strip():
                raise ValueError(f"Missing or invalid {field}: {item!r}")
        if not IDENTIFIER.fullmatch(item["id"]):
            raise ValueError(f"Invalid asset id: {item['id']}")
        if not IDENTIFIER.fullmatch(item["slug"]):
            raise ValueError(f"Invalid slug: {item['slug']}")
        if item["id"] in seen_ids or item["slug"] in seen_slugs:
            raise ValueError(f"Duplicate id or slug: {item['id']}")
        seen_ids.add(item["id"])
        seen_slugs.add(item["slug"])
        if item["category"] not in CATEGORIES:
            raise ValueError(f"Unknown category: {item['category']}")
        if item["kind"] not in {"procedural", "gltf", "glb"}:
            raise ValueError(f"Unknown kind: {item['kind']}")
        if not SPDX.fullmatch(item["license"]):
            raise ValueError(f"Invalid SPDX identifier: {item['license']}")
        dims = item.get("dimensions_m")
        if not isinstance(dims, list) or len(dims) != 3 or any(
            not isinstance(x, (int, float)) or isinstance(x, bool) or not 0 < x < 10000
            for x in dims
        ):
            raise ValueError(f"Invalid dimensions_m: {item['id']}")
        source = item.get("source_path")
        binary = item.get("binary_path")
        if not source and not binary:
            raise ValueError(f"Missing source/binary for {item['id']}")
        for raw in (source, binary):
            if raw:
                resolved = (ROOT / raw).resolve()
                if not resolved.is_relative_to(ROOT) or not resolved.is_file():
                    raise ValueError(f"Unsafe or missing path: {raw}")
        if item["kind"] == "procedural" and (not source or not item.get("generator")):
            raise ValueError(f"Procedural asset missing source/generator: {item['id']}")
        if not isinstance(item.get("tags", []), list) or not all(
            isinstance(tag, str) and tag and IDENTIFIER.fullmatch(tag) for tag in item.get("tags", [])
        ):
            raise ValueError(f"Invalid tags: {item['id']}")
    return data


def build_catalog(db_path: Path = DEFAULT_DB, manifest_path: Path = MANIFEST) -> int:
    """Atomic build: never leave a half-written production DB on failures."""
    data = validate_manifest(manifest_path)
    db_path = Path(db_path)
    db_path.parent.mkdir(parents=True, exist_ok=True)
    fd, temporary = tempfile.mkstemp(prefix=".catalog-", suffix=".sqlite", dir=db_path.parent)
    os.close(fd)
    try:
        conn = sqlite3.connect(temporary)
        try:
            conn.executescript(SCHEMA.read_text(encoding="utf-8"))
            conn.execute("PRAGMA foreign_keys = ON")
            for key, (label, order) in CATEGORIES.items():
                conn.execute(
                    "INSERT INTO categories(category_id,label,sort_order) VALUES (?,?,?)",
                    (key, label, order)
                )
            for asset in data["assets"]:
                w, h, d = asset["dimensions_m"]
                conn.execute(
                    """INSERT INTO assets
                    (asset_id,slug,title,title_zh,description,search_terms,category_id,kind,
                     license_spdx,creator,source_url,source_path,generator,binary_path,
                     preview_path,width,height,depth,style,accent)
                    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)""",
                    (asset["id"], asset["slug"], asset["title"], asset.get("title_zh", ""),
                     asset.get("summary", ""), " ".join(asset.get("tags", [])),
                     asset["category"], asset["kind"], asset["license"], asset["author"],
                     asset.get("source_url"), asset.get("source_path"), asset.get("generator"),
                     asset.get("binary_path"), asset.get("preview_path"),
                     w, h, d, asset.get("style", ""), asset.get("accent", ""))
                )
                for tag in sorted(set(asset.get("tags", []))):
                    conn.execute("INSERT OR IGNORE INTO tags(tag_id,label) VALUES (?,?)", (tag, tag))
                    conn.execute("INSERT INTO asset_tags(asset_id,tag_id) VALUES (?,?)", (asset["id"], tag))
                for key, role, path, fmt in (
                    ("source", "source", asset.get("source_path"), "javascript"),
                    ("model", "model", asset.get("binary_path"), "glb"),
                    ("thumbnail", "thumbnail", asset.get("preview_path"), "webp")
                ):
                    if path:
                        conn.execute(
                            "INSERT INTO asset_files(asset_id,variant_key,role,format,repository_path) VALUES (?,?,?,?,?)",
                            (asset["id"], key, role, fmt, path)
                        )
                conn.execute(
                    "INSERT INTO asset_provenance(asset_id,source_name,original_author,notes) VALUES (?,?,?,?)",
                    (asset["id"], "3D Worlds original procedural source", asset["author"],
                     "MIT licensed procedural geometry; generated GLB inherits source terms.")
                )
            conn.commit()
            failed = conn.execute("PRAGMA integrity_check").fetchone()[0]
            if failed != "ok":
                raise ValueError(f"SQLite integrity_check: {failed}")
            foreign_keys = conn.execute("PRAGMA foreign_key_check").fetchall()
            if foreign_keys:
                raise ValueError(f"Foreign key violations: {foreign_keys}")
        finally:
            conn.close()
        os.replace(temporary, db_path)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)
    return len(data["assets"])


def main() -> None:
    parser = argparse.ArgumentParser(description="3D Worlds catalog tooling")
    parser.add_argument("command", choices=["validate", "build", "stats"])
    parser.add_argument("--db", type=Path, default=DEFAULT_DB)
    args = parser.parse_args()
    if args.command == "validate":
        data = validate_manifest()
        print(f"OK: {len(data['assets'])} assets validated")
    elif args.command == "build":
        count = build_catalog(args.db)
        print(f"OK: built {args.db} with {count} assets")
    else:
        if not args.db.exists():
            raise SystemExit("Catalog missing. Run: python3 scripts/catalog.py build")
        with sqlite3.connect(args.db) as conn:
            rows = conn.execute(
                "SELECT category_id, count(*) FROM assets GROUP BY category_id ORDER BY category_id"
            ).fetchall()
        print(json.dumps(dict(rows), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
