#!/usr/bin/env python3
"""Smoke test the installable MCP service with a generated read-only SQLite DB."""
import sys
from pathlib import Path
root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(root))
from services.mcp_server import lookup, connection, mcp, get_threejs_source

item = lookup("furniture.chair.linen-001")
assert item["slug"] == "linen-dining-chair", item
assert "chair" in item["tags"]
assert item["files"] and item["files"][0]["role"] == "source"
source = get_threejs_source("furniture.chair.linen-001")
assert "createChair()" in source["module"], source
assert "import * as THREE from 'three';" in source["module"]
with connection() as conn:
    assert conn.execute("SELECT COUNT(*) FROM assets").fetchone()[0] >= 5
print("MCP v2 import, source lookup and SQLite read-only queries: OK")
