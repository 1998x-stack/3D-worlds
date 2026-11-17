"""Validate 40 original collection assets, their editable geometry and metadata."""
from __future__ import annotations
import json
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]
MANIFEST=ROOT/"catalog/models.json"
COLLECTION=ROOT/"catalog/collections/v04.json"


class CollectionV04Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection=json.loads(COLLECTION.read_text(encoding="utf8"))
        cls.assets=json.loads(MANIFEST.read_text(encoding="utf8"))["assets"]
        cls.by_id={a["id"]: a for a in cls.assets}

    def test_40_distinct_assets_across_every_category(self):
        data=self.collection
        self.assertEqual(data["asset_count"],40)
        self.assertEqual(len(data["assets"]),40)
        self.assertEqual(len(set(row["id"] for row in data["assets"])),40)
        self.assertGreaterEqual(len(self.assets),85)
        categories=json.loads((ROOT/"catalog/categories.json").read_text(encoding="utf8"))["categories"]
        expected={x["id"] for x in categories}
        self.assertEqual({row["category"] for row in data["assets"]},expected)
        for category in expected:
            self.assertGreaterEqual(sum(a["category"]==category for a in data["assets"]),2)

    def test_all_assets_have_original_source_and_editable_recipe(self):
        for row in self.collection["assets"]:
            with self.subTest(id=row["id"]):
                asset=self.by_id[row["id"]]
                self.assertEqual(asset["collection"],"v0.4")
                self.assertEqual(asset["license"],"MIT")
                self.assertEqual(asset["source_path"],row["source_path"])
                self.assertEqual(asset["generator"],row["generator"])
                self.assertEqual(asset["preview_path"],"public/thumbs/"+asset["slug"]+".webp")
                source=(ROOT/asset["source_path"]).read_text(encoding="utf8")
                self.assertIn("export function "+asset["generator"]+"()",source)
                raw=source.split("return buildRecipe(",1)[1].rsplit(");",1)[0]
                spec=json.loads(raw)
                self.assertEqual(spec["title"],asset["title"])
                self.assertEqual(spec["dimensions"],asset["dimensions_m"])
                parts=spec["parts"]
                self.assertGreaterEqual(len(parts),5)
                names=[part["n"] for part in parts]
                self.assertEqual(len(set(names)),len(names))
                for part in parts:
                    self.assertIn(part["t"],{"box","sphere","cylinder","torus","rod","cone","triangle"})
                    if part["t"]=="triangle":
                        self.assertEqual(len(part["vertices"]),3)
                    if part["t"]=="rod":
                        self.assertGreater(part["r"],0)
                    if part["t"] in {"box","sphere","cylinder","torus","cone"}:
                        self.assertTrue(all(isinstance(n,(int,float)) and n>0 for n in part["s"]))

    def test_legacy_identifiers_remain_unmodified(self):
        legacy=[x for x in self.assets if x.get("collection") not in ("v0.4", "v0.5", "v0.6", "v0.7", "v0.8", "v0.9", "v1.0", "v1.1")]
        self.assertEqual(len(legacy),45)
        self.assertIn("furniture.table.oak-study-001",{x["id"] for x in legacy})
        self.assertIn("scifi.patrol-spacecraft.001",{x["id"] for x in legacy})


if __name__=="__main__":
    unittest.main()
