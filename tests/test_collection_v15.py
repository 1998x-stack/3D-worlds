"""Validate v1.5 identity, detailed recipes and evidence boundaries."""
import json
import unittest
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

class Batch15Test(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.batch=json.loads((ROOT/"catalog/collections/v15.json").read_text())
        cls.assets=json.loads((ROOT/"catalog/models.json").read_text())["assets"]
        cls.lookup={a["id"]:a for a in cls.assets}

    def test_inventory(self):
        self.assertEqual(len(self.assets),625)
        self.assertEqual(len(self.lookup),625)
        self.assertEqual(len({a["slug"] for a in self.assets}),625)
        self.assertEqual(self.batch["asset_count"],30)
        self.assertEqual(len(self.batch["assets"]),30)
        self.assertEqual(self.batch["category_count"],13)
        self.assertEqual(sum(self.batch["category_counts"].values()),30)
        self.assertEqual(sum(a.get("collection")=="v1.4" for a in self.assets),30)
        self.assertEqual(sum(a.get("collection")=="v1.5" for a in self.assets),30)

    def test_source_quality_and_provenance(self):
        signatures=set()
        for item in self.batch["assets"]:
            with self.subTest(id=item["id"]):
                m=self.lookup[item["id"]]
                self.assertEqual(m["source_path"],item["source_path"])
                self.assertEqual(m["generator"],item["generator"])
                self.assertEqual(m["dimensions_m"],item["dimensions_m"])
                self.assertEqual(m["license"],"MIT")
                self.assertIn("not",self.batch["manufacturing_status"])
                src=(ROOT/m["source_path"]).read_text()
                self.assertIn("export function "+m["generator"]+"()",src)
                meta=json.loads(src.split("export const assetMeta = ",1)[1].split(";\nexport function",1)[0])
                self.assertEqual(meta,m)
                spec=json.loads(src.split("return buildRecipe(",1)[1].split(");",1)[0])
                self.assertEqual(spec["dimensions"],m["dimensions_m"])
                self.assertEqual(len(spec["parts"]),item["part_count"])
                self.assertGreaterEqual(len(spec["parts"]),26)
                names=[x["n"] for x in spec["parts"]]
                self.assertEqual(len(names),len(set(names)))
                signatures.add(tuple(names))
                self.assertGreaterEqual(len({x.get("finish") for x in spec["parts"]}),2)
                for part in spec["parts"]:
                    if part["t"]=="rod":
                        self.assertGreater(part["r"],0)
                        self.assertNotEqual(part["from"],part["to"])
                    else:
                        self.assertTrue(all(x>0 for x in part["s"]))
        self.assertEqual(len(signatures),30)

if __name__=="__main__": unittest.main()
