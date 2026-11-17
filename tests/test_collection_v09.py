"""V0.9: assert 50 independently authored Three.js models and history compatibility."""
from __future__ import annotations
import json
import math
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class V09CollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection = json.loads((ROOT / "catalog/collections/v09.json").read_text(encoding="utf8"))
        cls.assets = json.loads((ROOT / "catalog/models.json").read_text(encoding="utf8"))["assets"]
        cls.by_id = {x["id"]: x for x in cls.assets}

    def test_totals_provenance_and_existing_ids(self):
        c = self.collection
        self.assertEqual(c["version"], "v0.9")
        self.assertEqual(c["asset_count"], 50)
        self.assertEqual(c["category_count"], 13)
        self.assertEqual(len(c["assets"]), 50)
        self.assertEqual(len(self.assets), 485)
        self.assertEqual(len(self.by_id), 485)
        self.assertEqual(len({a["slug"] for a in self.assets}), 485)
        self.assertEqual(len([a for a in self.assets if a.get("collection") not in ("v0.9", "v1.0", "v1.1", "v1.2")]), 285)
        categories = {c["id"] for c in json.loads((ROOT / "catalog/categories.json").read_text(encoding="utf8"))["categories"]}
        self.assertEqual(set(c["category_counts"]), categories)
        self.assertEqual(sum(c["category_counts"].values()), 50)
        self.assertEqual({x["category"] for x in c["assets"]}, categories)
        self.assertEqual(sum(x["part_count"] for x in c["assets"]), 1068)
        self.assertIn("furniture.table.oak-study-001", self.by_id)
        self.assertIn("scifi.orbital-navigation-beacon.001", self.by_id)

    def test_each_new_file_contains_distinct_real_geometry(self):
        signatures = set()
        for entry in self.collection["assets"]:
            with self.subTest(entry=entry["id"]):
                asset = self.by_id[entry["id"]]
                self.assertEqual(asset["collection"], "v0.9")
                self.assertEqual(asset["kind"], "procedural")
                self.assertEqual(asset["license"], "MIT")
                self.assertEqual(asset["author"], "3D Worlds")
                self.assertEqual(asset["source_path"], entry["source_path"])
                self.assertEqual(asset["generator"], entry["generator"])
                self.assertEqual(asset["preview_path"], "public/thumbs/" + asset["slug"] + ".webp")
                source = (ROOT / asset["source_path"]).resolve()
                self.assertTrue(source.is_relative_to((ROOT / "src/models").resolve()))
                content = source.read_text(encoding="utf8")
                self.assertIn("export function " + asset["generator"] + "()", content)
                meta = json.loads(content.split("export const assetMeta = ", 1)[1].split(";\nexport function", 1)[0])
                recipe = json.loads(content.split("return buildRecipe(", 1)[1].split(");", 1)[0])
                for field in ("id", "slug", "title", "title_zh", "source_path", "generator", "collection", "dimensions_m"):
                    self.assertEqual(meta[field], asset[field])
                self.assertEqual(recipe["title"], asset["title"])
                self.assertEqual(recipe["dimensions"], asset["dimensions_m"])
                self.assertEqual(len(recipe["parts"]), entry["part_count"])
                self.assertGreaterEqual(len(recipe["parts"]), 9)
                names = [p["n"] for p in recipe["parts"]]
                self.assertEqual(len(names), len(set(names)))
                for p in recipe["parts"]:
                    self.assertIn(p["t"], {"box", "sphere", "cylinder", "cone", "torus", "rod", "triangle"})
                    if p["t"] == "rod":
                        self.assertGreater(p["r"], 0)
                        self.assertNotEqual(p["from"], p["to"])
                    else:
                        self.assertTrue(all(math.isfinite(x) and x > 0 for x in p["s"]))
                        self.assertTrue(all(math.isfinite(x) for x in p["p"]))
                signatures.add(tuple(names))
        self.assertEqual(len(signatures), 50)

if __name__ == "__main__":
    unittest.main()
