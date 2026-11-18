"""V1.0 regression: new source-backed geometry, old-model compatibility, metadata integrity."""
from __future__ import annotations
import json
import math
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class V10CollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection = json.loads((ROOT / "catalog/collections/v10.json").read_text(encoding="utf8"))
        cls.assets = json.loads((ROOT / "catalog/models.json").read_text(encoding="utf8"))["assets"]
        cls.by_id = {x["id"]: x for x in cls.assets}

    def test_counts_categories_and_history(self):
        c = self.collection
        self.assertEqual(c["version"], "v1.0")
        self.assertEqual(c["asset_count"], 50)
        self.assertEqual(c["category_count"], 13)
        self.assertEqual(len(c["assets"]), 50)
        self.assertGreaterEqual(len(self.assets), 565)
        self.assertEqual(len(self.by_id), len(self.assets))
        self.assertEqual(len({a["slug"] for a in self.assets}), len(self.assets))
        self.assertEqual(len([a for a in self.assets[:565] if a.get("collection") not in ("v1.0", "v1.1", "v1.2", "v1.3", "v1.4")]), 335)
        cats = {x["id"] for x in json.loads((ROOT / "catalog/categories.json").read_text(encoding="utf8"))["categories"]}
        self.assertEqual(set(c["category_counts"]), cats - {"print-commerce"})
        self.assertEqual({x["category"] for x in c["assets"]}, cats - {"print-commerce"})
        self.assertEqual(sum(c["category_counts"].values()), 50)
        self.assertEqual(sorted(c["category_counts"].values()), [3, 3] + [4] * 11)
        self.assertEqual(sum(x["part_count"] for x in c["assets"]), 1232)
        self.assertIn("furniture.table.oak-study-001", self.by_id)
        self.assertIn("scifi.interstellar-cargo-transit-gate.001", self.by_id)

    def test_original_editable_factories_with_real_parts(self):
        signatures = set()
        for e in self.collection["assets"]:
            with self.subTest(model=e["id"]):
                a = self.by_id[e["id"]]
                self.assertEqual(a["collection"], "v1.0")
                self.assertEqual(a["kind"], "procedural")
                self.assertEqual(a["license"], "MIT")
                self.assertEqual(a["author"], "3D Worlds")
                self.assertEqual(a["source_path"], e["source_path"])
                self.assertEqual(a["generator"], e["generator"])
                self.assertEqual(a["preview_path"], "public/thumbs/" + a["slug"] + ".webp")
                path = (ROOT / a["source_path"]).resolve()
                self.assertTrue(path.is_relative_to((ROOT / "src/models").resolve()))
                text = path.read_text(encoding="utf8")
                self.assertIn("export function " + a["generator"] + "()", text)
                meta = json.loads(text.split("export const assetMeta = ", 1)[1].split(";\nexport function", 1)[0])
                recipe = json.loads(text.split("return buildRecipe(", 1)[1].split(");", 1)[0])
                for field in ("id", "slug", "title", "title_zh", "source_path", "generator", "collection", "dimensions_m"):
                    self.assertEqual(meta[field], a[field])
                self.assertEqual(recipe["title"], a["title"])
                self.assertEqual(recipe["dimensions"], a["dimensions_m"])
                self.assertEqual(len(recipe["parts"]), e["part_count"])
                self.assertGreaterEqual(len(recipe["parts"]), 9)
                names = [p["n"] for p in recipe["parts"]]
                self.assertEqual(len(names), len(set(names)))
                for part in recipe["parts"]:
                    self.assertIn(part["t"], {"box", "sphere", "cylinder", "cone", "torus", "rod", "triangle"})
                    if part["t"] == "rod":
                        self.assertGreater(part["r"], 0)
                        self.assertNotEqual(part["from"], part["to"])
                    else:
                        self.assertTrue(all(math.isfinite(x) and x > 0 for x in part["s"]))
                        self.assertTrue(all(math.isfinite(x) for x in part["p"]))
                signatures.add(tuple(names))
        self.assertEqual(len(signatures), 50)

if __name__ == "__main__":
    unittest.main()
