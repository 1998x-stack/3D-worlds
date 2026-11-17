#!/usr/bin/env python3
"""P2 read-only paginated asset search API.

No new dependency needed for local mode. Bind localhost by default.
Production deployments need reverse proxy, authentication/rate limiting,
TLS and an operational S3/MinIO bucket.
"""
from __future__ import annotations
import base64
import hashlib
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
import re
import sqlite3
import sys
from urllib.parse import parse_qs, unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from scripts.catalog import build_catalog  # noqa: E402
from services.storage import LocalStore, S3Store, from_environment, SHA  # noqa: E402

DB = Path(os.environ.get("THREED_WORLDS_DB", ROOT / "data" / "catalog.sqlite"))
INDEX = Path(os.environ.get(
    "THREED_WORLDS_VARIANTS", ROOT / "public" / "generated" / "index.json"
))
ASSET_ID = re.compile(r"^[a-z0-9][a-z0-9._-]{2,119}$")
TOKEN = re.compile(r"[^\s\"']+")
MAX_LIMIT = 100


def connect() -> sqlite3.Connection:
    if not DB.is_file():
        build_catalog(DB)
    conn = sqlite3.connect(f"file:{DB.resolve()}?mode=ro", uri=True, timeout=10)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA query_only=ON")
    return conn


def query_hash(search: str, category: str) -> str:
    return hashlib.sha256((search + "\n" + category).encode("utf8")).hexdigest()[:16]


def encode_cursor(last_id: str, search: str, category: str) -> str:
    data = json.dumps({"after": last_id, "scope": query_hash(search, category)},
                      separators=(",", ":")).encode()
    return base64.urlsafe_b64encode(data).decode().rstrip("=")


def decode_cursor(token: str, search: str, category: str) -> str:
    if not token:
        return ""
    if len(token) > 1024:
        raise ValueError("Cursor too long")
    try:
        data = json.loads(base64.b64decode(
            token + "=" * (-len(token) % 4), altchars=b"-_", validate=True
        ))
        if data.get("scope") != query_hash(search, category):
            raise ValueError("Cursor belongs to a different query")
        last = data["after"]
        if not isinstance(last, str) or not ASSET_ID.fullmatch(last):
            raise ValueError("Invalid cursor ID")
        return last
    except (ValueError, TypeError, KeyError, json.JSONDecodeError) as exc:
        raise ValueError("Malformed or incompatible cursor") from exc


def serialize_asset(row: sqlite3.Row) -> dict:
    d = dict(row)
    d.update({
        "id": d["asset_id"], "category": d["category_id"],
        "title_zh": d.get("title_zh", ""),
        "summary": d.get("description", ""),
        "license": d["license_spdx"], "author": d["creator"],
        "dimensions_m": [d["width"], d["height"], d["depth"]]
    })
    if d.get("preview_path"):
        d["preview_path"] = d["preview_path"]
    return d


def search_assets(search: str = "", category: str = "", limit: int = 24,
                  cursor: str = "") -> dict:
    search = search.strip()[:128]
    category = category.strip()[:64]
    limit = max(1, min(int(limit), MAX_LIMIT))
    last_id = decode_cursor(cursor, search, category)
    filters = ["a.status='published'", "a.asset_id > ?"]
    parameters: list = [last_id]
    if category:
        filters.append("a.category_id=?")
        parameters.append(category)
    if search:
        tokens = TOKEN.findall(search)[:8]
        if tokens and search.isascii():
            match = " AND ".join('"' + token.replace('"', '""') + '"' for token in tokens)
            filters.append("a.rowid IN (SELECT rowid FROM assets_fts WHERE assets_fts MATCH ?)")
            parameters.append(match)
        else:
            pattern = "%" + search.replace("%", "\\%").replace("_", "\\_") + "%"
            filters.append("(a.title_zh LIKE ? ESCAPE '\\' OR a.title LIKE ? ESCAPE '\\' OR a.search_terms LIKE ? ESCAPE '\\')")
            parameters.extend([pattern] * 3)
    sql = ("SELECT a.* FROM assets a WHERE " + " AND ".join(filters)
           + " ORDER BY a.asset_id ASC LIMIT ?")
    with connect() as conn:
        rows = conn.execute(sql, (*parameters, limit + 1)).fetchall()
    more = len(rows) > limit
    selected = rows[:limit]
    return {"items": [serialize_asset(r) for r in selected],
            "next_cursor": encode_cursor(selected[-1]["asset_id"], search, category)
            if more and selected else None,
            "limit": limit, "search": search, "category": category}


def get_asset(asset_id: str) -> dict | None:
    if not ASSET_ID.fullmatch(asset_id):
        return None
    with connect() as conn:
        row = conn.execute(
            "SELECT * FROM assets WHERE status='published' AND (asset_id=? OR slug=?)",
            (asset_id, asset_id)
        ).fetchone()
        if row is None:
            return None
        asset = serialize_asset(row)
        asset["tags"] = [r[0] for r in conn.execute(
            "SELECT tag_id FROM asset_tags WHERE asset_id=? ORDER BY tag_id",
            (asset["asset_id"],)
        )]
        asset["files"] = [dict(r) for r in conn.execute(
            "SELECT variant_key,role,format,repository_path,sha256,bytes "
            "FROM asset_files WHERE asset_id=?", (asset["asset_id"],)
        )]
        return asset


def get_categories() -> list[dict]:
    with connect() as conn:
        return [dict(r) for r in conn.execute(
            "SELECT c.category_id AS id,c.label,COUNT(a.asset_id) AS count "
            "FROM categories c LEFT JOIN assets a ON a.category_id=c.category_id "
            "AND a.status='published' GROUP BY c.category_id ORDER BY c.sort_order"
        )]


def variant_for(asset: dict, lod: int = 0) -> dict | None:
    if asset["kind"] == "glb":
        if not asset.get("content_sha256"):
            return None
        return {"sha256": asset["content_sha256"], "bytes": asset.get("file_size_bytes"),
                "path": asset["binary_path"], "level": 0}
    if not INDEX.is_file():
        return None
    index = json.loads(INDEX.read_text(encoding="utf8"))
    match = next((entry for entry in index.get("entries", [])
                  if entry["asset_id"] == asset["asset_id"]), None)
    if not match:
        return None
    return next((v for v in match["variants"] if v["level"] == lod), None)


def download_metadata(asset_id: str, lod: int = 0) -> dict | None:
    asset = get_asset(asset_id)
    if asset is None:
        return None
    variant = variant_for(asset, lod)
    if variant is None:
        return {"error": "asset_not_published", "asset_id": asset_id}
    backend = from_environment()
    sha = variant["sha256"]
    if isinstance(backend, S3Store):
        url = backend.signed_url(sha, "glb", expires=900)
    else:
        if not backend.exists(sha, "glb"):
            return {"error": "asset_not_mirrored", "asset_id": asset_id}
        url = "/api/v1/objects/" + sha + ".glb"
    return {"asset_id": asset["id"], "url": url, "sha256": sha,
            "bytes": variant.get("bytes"), "lod": variant.get("level", lod),
            "license": asset["license"], "expires_seconds": 900 if isinstance(backend, S3Store) else None}


class Handler(BaseHTTPRequestHandler):
    server_version = "3DWorldsAPI/1.0"

    def respond(self, value: dict | list, status: int = 200):
        body = json.dumps(value, ensure_ascii=False).encode("utf8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "public,max-age=30")
        self.cors()
        self.end_headers()
        self.wfile.write(body)

    def cors(self):
        origin = self.headers.get("Origin", "")
        allowed = set(os.environ.get(
            "THREED_WORLDS_ALLOWED_ORIGINS",
            "https://1998x-stack.github.io,http://localhost:5173,http://127.0.0.1:5173"
        ).split(","))
        if origin in allowed:
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")

    def do_OPTIONS(self):
        self.send_response(204)
        self.cors()
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        url = urlsplit(self.path)
        route = unquote(url.path)
        args = parse_qs(url.query, keep_blank_values=True)
        try:
            if route == "/healthz":
                with connect() as conn:
                    count = conn.execute("SELECT COUNT(*) FROM assets").fetchone()[0]
                return self.respond({"ok": True, "asset_count": count})
            if route == "/api/v1/categories":
                return self.respond(get_categories())
            if route == "/api/v1/assets":
                raw_limit = args.get("limit", ["24"])[0]
                if not raw_limit.isdecimal():
                    raise ValueError("Limit must be an integer")
                return self.respond(search_assets(
                    search=args.get("search", [""])[0],
                    category=args.get("category", [""])[0],
                    limit=int(raw_limit),
                    cursor=args.get("cursor", [""])[0]))
            if route.startswith("/api/v1/objects/"):
                sha_ext = route.removeprefix("/api/v1/objects/")
                if not sha_ext.endswith(".glb") or not SHA.fullmatch(sha_ext[:-4]):
                    return self.respond({"error": "invalid_object"}, 400)
                store = from_environment()
                if not isinstance(store, LocalStore):
                    return self.respond({"error": "object_served_by_s3"}, 404)
                sha = sha_ext[:-4]
                if not store.exists(sha):
                    return self.respond({"error": "object_not_found"}, 404)
                path = store.path(sha)
                with path.open("rb") as f:
                    body = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "model/gltf-binary")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "public,max-age=31536000,immutable")
                self.cors()
                self.end_headers()
                self.wfile.write(body)
                return
            if route.startswith("/api/v1/assets/"):
                tail = route.removeprefix("/api/v1/assets/")
                if tail.endswith("/download"):
                    identifier = tail.removesuffix("/download")
                    lod = args.get("lod", ["0"])[0]
                    if not lod.isdecimal() or int(lod) not in (0, 1, 2):
                        raise ValueError("Invalid LOD level")
                    result = download_metadata(identifier, int(lod))
                    return self.respond(result or {"error": "not_found"}, 200 if result and "error" not in result else 404)
                result = get_asset(tail)
                return self.respond(result or {"error": "not_found"}, 200 if result else 404)
            return self.respond({"error": "not_found"}, 404)
        except (ValueError, sqlite3.OperationalError) as err:
            if isinstance(err, sqlite3.OperationalError):
                self.log_error("SQLite query problem: %s", err)
                return self.respond({"error": "query_failed"}, 400)
            return self.respond({"error": "invalid_request", "message": str(err)}, 400)
        except Exception:
            self.log_error("Request failed (internal error)")
            return self.respond({"error": "internal"}, 500)


def serve(host: str = "127.0.0.1", port: int = 8071):
    server = ThreadingHTTPServer((host, port), Handler)
    print(f"3D Worlds read-only API http://{host}:{port}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    serve(host=os.environ.get("THREED_WORLDS_HOST", "127.0.0.1"),
          port=int(os.environ.get("THREED_WORLDS_PORT", "8071")))
