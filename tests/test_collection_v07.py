"""V0.7: audit 50 original procedural assets and preserve 185 historical IDs."""
from __future__ import annotations
import json
import math
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
COLLECTION = ROOT / "catalog/collections/v07.json"
CATALOG = ROOT / "catalog/models.json"

class V07CollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection = json.loads(COLLECTION.read_text(encoding="utf8"))
        cls.assets = json.loads(CATALOG.read_text(encoding="utf8"))["assets"]
        cls.by_id = {a["id"]: a for a in cls.assets}

    def test_50_new_unique_assets_cover_every_category(self):
        c = self.collection
        self.assertEqual(c["version"], "v0.7")
        self.assertEqual(c["asset_count"], 50)
        self.assertEqual(c["category_count"], 13)
        self.assertEqual(len(c["assets"]), 50)
        self.assertGreaterEqual(len(self.assets), 235)
        self.assertEqual(len(self.by_id), len(self.assets))
        self.assertEqual(len({a["slug"] for a in self.assets}), len(self.assets))
        categories = {x["id"] for x in json.loads((ROOT / "catalog/categories.json").read_text(encoding="utf8"))["categories"]}
        self.assertEqual(set(c["category_counts"]), categories - {"print-commerce"})
        self.assertEqual(sum(c["category_counts"].values()), 50)
        self.assertGreaterEqual(min(c["category_counts"].values()), 3)
        self.assertEqual({a["category"] for a in c["assets"]}, categories - {"print-commerce"})
        self.assertEqual(len([a for a in self.assets if a.get("collection") == "v0.7"]), 50)

    def test_real_3d_geometry_and_provenance(self):
        for entry in self.collection["assets"]:
            with self.subTest(id=entry["id"]):
                asset = self.by_id[entry["id"]]
                self.assertEqual(asset["collection"], "v0.7")
                self.assertEqual(asset["kind"], "procedural")
                self.assertEqual(asset["license"], "MIT")
                self.assertEqual(asset["author"], "3D Worlds")
                self.assertEqual(asset["source_path"], entry["source_path"])
                self.assertEqual(asset["generator"], entry["generator"])
                self.assertEqual(asset["preview_path"], "public/thumbs/" + asset["slug"] + ".webp")
                source = (ROOT / asset["source_path"]).resolve()
                self.assertTrue(source.is_relative_to((ROOT / "src/models").resolve()))
                text = source.read_text(encoding="utf8")
                self.assertIn("export function " + asset["generator"] + "()", text)
                meta = json.loads(text.split("export const assetMeta = ", 1)[1].split(";\nexport function", 1)[0])
                spec = json.loads(text.split("return buildRecipe(", 1)[1].split(");", 1)[0])
                for field in ("id", "slug", "title", "title_zh", "source_path", "generator", "collection"):
                    self.assertEqual(meta[field], asset[field])
                self.assertEqual(spec["title"], asset["title"])
                self.assertEqual(spec["dimensions"], asset["dimensions_m"])
                self.assertEqual(len(spec["parts"]), entry["part_count"])
                self.assertGreaterEqual(len(spec["parts"]), 9)
                part_names = [p["n"] for p in spec["parts"]]
                self.assertEqual(len(part_names), len(set(part_names)))
                for p in spec["parts"]:
                    self.assertIn(p["t"], {"box", "sphere", "cylinder", "cone", "torus", "rod", "triangle"})
                    if p["t"] == "rod":
                        self.assertGreater(p["r"], 0)
                        self.assertNotEqual(p["from"], p["to"])
                    elif p["t"] == "triangle":
                        self.assertEqual(len(p["vertices"]), 3)
                    else:
                        self.assertTrue(all(math.isfinite(v) and v > 0 for v in p["s"]))
                        self.assertTrue(all(math.isfinite(v) for v in p["p"]))
                self.assertTrue(all(math.isfinite(v) and v > 0 for v in asset["dimensions_m"]))

    def test_historical_185_assets_not_reassigned(self):
        old = [a for a in self.assets if a.get("collection") not in ("v0.7", "v0.8", "v0.9", "v1.0", "v1.1", "v1.2", "v1.3")]
        self.assertEqual(len(old), 185)
        self.assertEqual(len([a for a in old if a.get("collection") == "v0.6"]), 50)
        self.assertEqual(len([a for a in old if a.get("collection") == "v0.5"]), 50)
        self.assertEqual(len([a for a in old if a.get("collection") == "v0.4"]), 40)
        self.assertIn("furniture.table.oak-study-001", {a["id"] for a in old})
        self.assertIn("scifi.holographic-command-console.001", {a["id"] for a in old})

if __name__ == "__main__":
    unittest.main()
