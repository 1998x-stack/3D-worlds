"""V1.4: 30 original maker-inspired recipes with immutable historical geometry."""
from __future__ import annotations
import json
import math
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]

class V14CollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection=json.loads((ROOT/"catalog/collections/v14.json").read_text(encoding="utf8"))
        cls.assets=json.loads((ROOT/"catalog/models.json").read_text(encoding="utf8"))["assets"]
        cls.by_id={a["id"]:a for a in cls.assets}

    def test_v14_inventory_and_preserved_history(self):
        c=self.collection
        self.assertEqual(c["version"],"v1.4", "v1.5")
        self.assertEqual(c["asset_count"],30)
        self.assertEqual(c["category_count"],13)
        self.assertEqual(len(c["assets"]),30)
        self.assertEqual(len(self.assets),595)
        self.assertEqual(len(self.by_id),595)
        self.assertEqual(len({a["slug"] for a in self.assets}),595)
        self.assertEqual(sum(a.get("collection") not in ("v1.4", "v1.5") for a in self.assets),535)
        self.assertEqual(sum(a.get("collection")=="v1.4" for a in self.assets),30)
        categories={x["id"] for x in json.loads((ROOT/"catalog/categories.json").read_text(encoding="utf8"))["categories"]}
        self.assertEqual(set(c["category_counts"]),categories - {"print-commerce"})
        self.assertEqual(set(a["category"] for a in c["assets"]),categories - {"print-commerce"})
        self.assertEqual(sum(c["category_counts"].values()),30)
        self.assertIn("furniture.table.oak-study-001",self.by_id)
        self.assertIn("scifi.orbital-debris-collector-drone.001",self.by_id)

    def test_distinct_sources_and_geometry(self):
        signatures=set()
        for e in self.collection["assets"]:
            with self.subTest(id=e["id"]):
                a=self.by_id[e["id"]]
                self.assertEqual(a["collection"],"v1.4", "v1.5")
                self.assertEqual(a["kind"],"procedural")
                self.assertEqual(a["license"],"MIT")
                self.assertEqual(a["author"],"3D Worlds")
                self.assertEqual(a["generator"],e["generator"])
                self.assertEqual(a["source_path"],e["source_path"])
                source=(ROOT/a["source_path"]).resolve()
                self.assertTrue(source.is_relative_to((ROOT/"src/models").resolve()))
                code=source.read_text(encoding="utf8")
                self.assertIn("export function "+a["generator"]+"()",code)
                meta=json.loads(code.split("export const assetMeta = ",1)[1].split(";\nexport function",1)[0])
                spec=json.loads(code.split("return buildRecipe(",1)[1].split(");",1)[0])
                for key in ("id","slug","title","title_zh","source_path","generator","collection","dimensions_m"):
                    self.assertEqual(meta[key],a[key])
                self.assertEqual(spec["title"],a["title"])
                self.assertEqual(spec["dimensions"],a["dimensions_m"])
                self.assertEqual(len(spec["parts"]),e["part_count"])
                self.assertEqual(a["geometry_revision"], "1.4.1")
                self.assertEqual(meta["geometry_revision"], "1.4.1")
                self.assertEqual(spec["geometry_revision"], "1.4.1")
                self.assertGreaterEqual(e["part_count"]-e["baseline_part_count"], 8)
                finishes={part.get("finish","matte") for part in spec["parts"]}
                self.assertGreaterEqual(len(finishes),3)
                self.assertEqual(e["finish_count"], len(finishes))
                for part in spec["parts"]:
                    if part["t"]=="arc":
                        self.assertGreater(part["sweep"],0)
                        self.assertLessEqual(part["sweep"], 2*math.pi)
                    self.assertIn(part.get("finish","matte"),{"matte","metal","anodized","ceramic","rubber","fabric","wood","glass","glow"})
                self.assertGreaterEqual(len(spec["parts"]),38)
                names=[p["n"] for p in spec["parts"]]
                self.assertEqual(len(names),len(set(names)))
                signatures.add(tuple(names))
                for part in spec["parts"]:
                    self.assertIn(part["t"],("box","sphere","cylinder","cone","torus","rod","triangle","rounded-box","hex","arc"))
                    if part["t"]=="rod":
                        self.assertGreater(part["r"],0)
                        self.assertNotEqual(part["from"],part["to"])
                    else:
                        self.assertTrue(all(math.isfinite(n) and n>0 for n in part["s"]))
                        self.assertTrue(all(math.isfinite(n) for n in part["p"]))
        self.assertEqual(len(signatures),30)

if __name__=="__main__":
    unittest.main()
