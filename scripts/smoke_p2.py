#!/usr/bin/env python3
"""P2 end-to-end local object publication using actual P1 generated LODs."""
import json
from pathlib import Path
import os
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
os.environ["THREED_WORLDS_STORE"] = "local"
os.environ["THREED_WORLDS_LOCAL_STORE"] = str(ROOT / ".cache" / "object-store")

from scripts.publish_objects import publish
from services.search_api import download_metadata, search_assets, get_categories
from services.storage import from_environment

report = publish(ROOT / "public/generated/index.json", apply=True)
assert report["objects"] == 45 * 3, report
store = from_environment()
for asset_id in (
    "furniture.table.oak-study-001",
    "scifi.patrol-spacecraft.001",
    "nature.desert-cactus.001",
):
    for level in (0, 1, 2):
        metadata = download_metadata(asset_id, level)
        assert metadata and "error" not in metadata, metadata
        assert metadata["url"].startswith("/api/v1/objects/"), metadata
        assert store.exists(metadata["sha256"]), metadata
assert len(get_categories()) == 13
assert len(search_assets(limit=100)["items"]) == 45
print("P2 END-TO-END OK:",json.dumps(report))
