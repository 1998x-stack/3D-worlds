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

catalog = json.loads((ROOT / "catalog/models.json").read_text(encoding="utf8"))
expected = sum(asset["kind"] == "procedural" for asset in catalog["assets"])
report = publish(ROOT / "public/generated/index.json", apply=True)
assert report["objects"] == expected * 3, report
store = from_environment()
for asset_id in (
    "furniture.table.oak-study-001",
    "scifi.patrol-spacecraft.001",
    "nature.desert-cactus.001",
    "vehicles.coastal-sailboat.001",
    "scifi.ancient-portal-gateway.001",
    "urban.public-bicycle-parking-rack.001",
    "scifi.holographic-command-console.001",
    "nature.alpine-waterfall-cliff.001",
    "architecture.timber-balcony-module.001",
    "scifi.robotic-mining-excavator.001",
    "nature.mangrove-root-island.001",
    "architecture.modular-glass-curtain-wall.001",
    "scifi.orbital-hydroponic-growing-tower.001",
    "nature.glacial-ice-cave.001",
    "architecture.underground-utility-tunnel.001",
    "scifi.orbital-navigation-beacon.001",
):
    for level in (0, 1, 2):
        metadata = download_metadata(asset_id, level)
        assert metadata and "error" not in metadata, metadata
        assert metadata["url"].startswith("/api/v1/objects/"), metadata
        assert store.exists(metadata["sha256"]), metadata
assert len(get_categories()) == 13
all_ids = []
cursor = ""
while True:
    page = search_assets(limit=29, cursor=cursor)
    all_ids.extend(row["id"] for row in page["items"])
    cursor = page["next_cursor"]
    if not cursor:
        break
assert len(all_ids) == expected, (len(all_ids), expected)
assert len(set(all_ids)) == expected
assert all_ids == sorted(all_ids)
print("P2 END-TO-END OK:",json.dumps(report))
