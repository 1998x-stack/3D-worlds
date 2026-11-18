"""Regression: 50 genuine v0.5 geometry modules, stable 85 legacy IDs."""
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
COLLECTION = ROOT / "catalog/collections/v05.json"
CATALOG = ROOT / "catalog/models.json"


class CollectionV05Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.c = json.loads(COLLECTION.read_text(encoding="utf-8"))
        cls.assets = json.loads(CATALOG.read_text(encoding="utf-8"))["assets"]
        cls.by_id = {a["id"]: a for a in cls.assets}

    def test_50_models_all_13_categories(self):
        c = self.c
        self.assertEqual(c["asset_count"], 50)
        self.assertEqual(len(c["assets"]), 50)
        self.assertGreaterEqual(len(self.assets), 135)
        self.assertEqual(len(self.by_id), len(self.assets))
        self.assertEqual(len(set(a["slug"] for a in self.assets)), len(self.assets))
        categories = {a["id"] for a in json.loads((ROOT / "catalog/categories.json").read_text(encoding="utf-8"))["categories"]}
        self.assertEqual(set(c["category_counts"]), categories - {"print-commerce"})
        self.assertEqual({a["category"] for a in c["assets"]}, categories - {"print-commerce"})
        self.assertEqual(sum(c["category_counts"].values()), 50)
        self.assertGreaterEqual(min(c["category_counts"].values()), 3)

    def test_source_and_mesh_geometry(self):
        for item in self.c["assets"]:
            with self.subTest(asset=item["id"]):
                a = self.by_id[item["id"]]
                self.assertEqual(a["collection"], "v0.5")
                self.assertEqual(a["license"], "MIT")
                self.assertEqual(a["kind"], "procedural")
                self.assertEqual(a["source_path"], item["source_path"])
                self.assertEqual(a["generator"], item["generator"])
                self.assertEqual(a["preview_path"], "public/thumbs/" + a["slug"] + ".webp")
                source = (ROOT / a["source_path"]).resolve()
                self.assertTrue(source.is_relative_to((ROOT / "src/models").resolve()))
                code = source.read_text(encoding="utf-8")
                meta = json.loads(code.split("export const assetMeta = ", 1)[1].split(";\nexport function", 1)[0])
                recipe = json.loads(code.split("return buildRecipe(", 1)[1].split(");", 1)[0])
                self.assertEqual(meta["id"], a["id"])
                self.assertEqual(meta["slug"], a["slug"])
                self.assertEqual(meta["title"], a["title"])
                self.assertEqual(recipe["title"], a["title"])
                self.assertEqual(recipe["dimensions"], a["dimensions_m"])
                self.assertEqual(len(recipe["parts"]), item["part_count"])
                self.assertGreaterEqual(len(recipe["parts"]), 8)
                names = [p["n"] for p in recipe["parts"]]
                self.assertEqual(len(names), len(set(names)))
                for part in recipe["parts"]:
                    self.assertIn(part["t"], {"box", "sphere", "cylinder", "cone", "torus", "rod", "triangle"})
                    if part["t"] == "rod":
                        self.assertGreater(part["r"], 0)
                        self.assertNotEqual(part["from"], part["to"])
                    elif part["t"] == "triangle":
                        self.assertEqual(len(part["vertices"]), 3)
                    else:
                        self.assertTrue(all(v > 0 for v in part["s"]))

    def test_legacy_85_models_remain(self):
        old = [a for a in self.assets if a.get("collection") not in ("v0.5", "v0.6", "v0.7", "v0.8", "v0.9", "v1.0", "v1.1", "v1.2", "v1.3", "v1.4", "v1.5", "v1.6")]
        self.assertEqual(len(old), 85)
        self.assertEqual(len([a for a in old if a.get("collection") == "v0.4"]), 40)
        self.assertIn("furniture.table.oak-study-001", {a["id"] for a in old})


if __name__ == "__main__":
    unittest.main()
