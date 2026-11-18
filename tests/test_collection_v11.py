"""V1.1 collection QA: 50 source-backed 3D assets, unique geometry, 385 historical preserved."""
from __future__ import annotations
import json
import math
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class V11CollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection = json.loads((ROOT / "catalog/collections/v11.json").read_text(encoding="utf8"))
        cls.assets = json.loads((ROOT / "catalog/models.json").read_text(encoding="utf8"))["assets"]
        cls.by_id = {a["id"]: a for a in cls.assets}

    def test_categories_counts_and_immutability(self):
        c=self.collection
        self.assertEqual(c["version"], "v1.1")
        self.assertEqual(c["asset_count"],50)
        self.assertEqual(c["category_count"],13)
        self.assertEqual(len(c["assets"]),50)
        self.assertGreaterEqual(len(self.assets), 565)
        self.assertEqual(len(self.by_id), len(self.assets))
        self.assertEqual(len({a["slug"] for a in self.assets}), len(self.assets))
        self.assertEqual(len([a for a in self.assets[:565] if a.get("collection") not in ("v1.1", "v1.2", "v1.3", "v1.4")]),385)
        self.assertEqual(len([a for a in self.assets if a.get("collection") == "v1.1"]),50)
        cats={x["id"] for x in json.loads((ROOT/"catalog/categories.json").read_text(encoding="utf8"))["categories"]}
        self.assertEqual(set(c["category_counts"]),cats - {"print-commerce"})
        self.assertEqual({a["category"] for a in c["assets"]},cats - {"print-commerce"})
        self.assertEqual(sorted(c["category_counts"].values()),[3,3]+[4]*11)
        self.assertEqual(sum(x["part_count"] for x in c["assets"]),1465)
        self.assertIn("furniture.table.oak-study-001",self.by_id)
        self.assertIn("scifi.ion-propulsion-test-platform.001",self.by_id)

    def test_model_modules_and_independent_geometry(self):
        signatures=set()
        for entry in self.collection["assets"]:
            with self.subTest(id=entry["id"]):
                asset=self.by_id[entry["id"]]
                self.assertEqual(asset["collection"],"v1.1")
                self.assertEqual(asset["kind"],"procedural")
                self.assertEqual(asset["license"],"MIT")
                self.assertEqual(asset["author"],"3D Worlds")
                self.assertEqual(asset["source_path"],entry["source_path"])
                self.assertEqual(asset["generator"],entry["generator"])
                self.assertEqual(asset["preview_path"],"public/thumbs/"+entry["slug"]+".webp")
                path=(ROOT/asset["source_path"]).resolve()
                self.assertTrue(path.is_relative_to((ROOT/"src/models").resolve()))
                contents=path.read_text(encoding="utf8")
                self.assertIn("export function "+asset["generator"]+"()",contents)
                meta=json.loads(contents.split("export const assetMeta = ",1)[1].split(";\nexport function",1)[0])
                spec=json.loads(contents.split("return buildRecipe(",1)[1].split(");",1)[0])
                for k in ("id","slug","title","title_zh","source_path","generator","collection","dimensions_m"):
                    self.assertEqual(meta[k],asset[k])
                self.assertEqual(spec["title"],asset["title"])
                self.assertEqual(spec["dimensions"],asset["dimensions_m"])
                self.assertEqual(len(spec["parts"]),entry["part_count"])
                self.assertGreaterEqual(len(spec["parts"]),12)
                names=[p["n"] for p in spec["parts"]]
                self.assertEqual(len(names),len(set(names)))
                signatures.add(tuple(names))
                for p in spec["parts"]:
                    self.assertIn(p["t"],{"box","sphere","cylinder","cone","torus","rod","triangle"})
                    if p["t"]=="rod":
                        self.assertGreater(p["r"],0)
                        self.assertNotEqual(p["from"],p["to"])
                    else:
                        self.assertTrue(all(math.isfinite(n) and n>0 for n in p["s"]))
                        self.assertTrue(all(math.isfinite(n) for n in p["p"]))
        self.assertEqual(len(signatures),50)

if __name__ == "__main__":
    unittest.main()
