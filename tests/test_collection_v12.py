"""V1.2: 50 independently authored Three.js modules with original geometry."""
from __future__ import annotations
import json
import math
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]

class V12CollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection=json.loads((ROOT/"catalog/collections/v12.json").read_text(encoding="utf8"))
        cls.assets=json.loads((ROOT/"catalog/models.json").read_text(encoding="utf8"))["assets"]
        cls.by_id={a["id"]:a for a in cls.assets}

    def test_total_485_and_historical_435(self):
        c=self.collection
        self.assertEqual(c["version"],"v1.2")
        self.assertEqual(c["asset_count"],50)
        self.assertEqual(c["category_count"],13)
        self.assertEqual(len(c["assets"]),50)
        self.assertEqual(len(self.assets), 625)
        self.assertEqual(len(self.by_id), 625)
        self.assertEqual(len({a["slug"] for a in self.assets}), 625)
        self.assertEqual(sum(a.get("collection") not in ("v1.2", "v1.3", "v1.4", "v1.5", "v1.6") for a in self.assets),435)
        self.assertEqual(sum(a.get("collection")=="v1.2" for a in self.assets),50)
        categories={x["id"] for x in json.loads((ROOT/"catalog/categories.json").read_text(encoding="utf8"))["categories"]}
        self.assertEqual(set(c["category_counts"]),categories - {"print-commerce"})
        self.assertEqual({a["category"] for a in c["assets"]},categories - {"print-commerce"})
        self.assertEqual(sorted(c["category_counts"].values()),[3,3]+[4]*11)
        self.assertEqual(sum(a["part_count"] for a in c["assets"]),1414)
        self.assertIn("furniture.table.oak-study-001",self.by_id)
        self.assertIn("scifi.orbital-debris-collector-drone.001",self.by_id)

    def test_new_model_sources_and_meshes(self):
        signatures=set()
        for e in self.collection["assets"]:
            with self.subTest(id=e["id"]):
                a=self.by_id[e["id"]]
                self.assertEqual(a["collection"],"v1.2")
                self.assertEqual(a["kind"],"procedural")
                self.assertEqual(a["license"],"MIT")
                self.assertEqual(a["author"],"3D Worlds")
                self.assertEqual(a["source_path"],e["source_path"])
                self.assertEqual(a["generator"],e["generator"])
                self.assertEqual(a["preview_path"],"public/thumbs/"+a["slug"]+".webp")
                file=(ROOT/a["source_path"]).resolve()
                self.assertTrue(file.is_relative_to((ROOT/"src/models").resolve()))
                raw=file.read_text(encoding="utf8")
                self.assertIn("export function "+a["generator"]+"()",raw)
                meta=json.loads(raw.split("export const assetMeta = ",1)[1].split(";\nexport function",1)[0])
                spec=json.loads(raw.split("return buildRecipe(",1)[1].split(");",1)[0])
                for f in ("id","slug","title","title_zh","source_path","generator","collection","dimensions_m"):
                    self.assertEqual(meta[f],a[f])
                self.assertEqual(spec["title"],a["title"])
                self.assertEqual(spec["dimensions"],a["dimensions_m"])
                self.assertEqual(len(spec["parts"]),e["part_count"])
                self.assertGreaterEqual(len(spec["parts"]),18)
                names=[x["n"] for x in spec["parts"]]
                self.assertEqual(len(names),len(set(names)))
                signatures.add(tuple(names))
                for part in spec["parts"]:
                    self.assertIn(part["t"],{"box","sphere","cylinder","cone","torus","rod","triangle"})
                    if part["t"]=="rod":
                        self.assertGreater(part["r"],0)
                        self.assertNotEqual(part["from"],part["to"])
                    else:
                        self.assertTrue(all(math.isfinite(n) and n>0 for n in part["s"]))
                        self.assertTrue(all(math.isfinite(n) for n in part["p"]))
        self.assertEqual(len(signatures),50)

if __name__=="__main__":
    unittest.main()
