"""V1.5 batch integrity: IDs, all categories, source/portfolio correspondence, CAD candidates."""
import json
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]
def load(path): return json.loads((ROOT/path).read_text(encoding="utf-8"))

class V15Batch(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.all=load("catalog/models.json")["assets"]
        cls.batch=load("catalog/collections/v15.json")
        cls.by_id={a["id"]:a for a in cls.all}

    def test_count_and_preserved_ids(self):
        self.assertEqual(len(self.all),595)
        self.assertEqual(self.batch["asset_count"],30)
        self.assertEqual(len(self.batch["assets"]),30)
        self.assertEqual(len(set(a["id"] for a in self.all)),595)
        self.assertEqual(len(set(a["slug"] for a in self.all)),595)

    def test_all_14_categories(self):
        categories=set(a["id"] for a in load("catalog/categories.json")["categories"])
        observed={a["category"] for a in self.batch["assets"]}
        self.assertEqual(observed,categories)
        self.assertEqual(sum(self.batch["category_counts"].values()),30)

    def test_source_metadata_and_separate_cad(self):
        for detail in self.batch["assets"]:
            a=self.by_id[detail["id"]]
            self.assertEqual(a["collection"],"v1.5")
            self.assertEqual(a["source_path"],detail["source_path"])
            self.assertEqual(a["generator"],detail["generator"])
            self.assertEqual(a["dimensions_m"],detail["dimensions_m"])
            self.assertTrue((ROOT/a["source_path"]).is_file())
            self.assertGreaterEqual(detail["part_count"],15)
            self.assertEqual(detail["manufacturing_status"],"unverified_visual")
            source=(ROOT/a["source_path"]).read_text(encoding="utf-8")
            self.assertIn("buildMarketV15",source)
            self.assertIn("export function "+a["generator"]+"()",source)
            self.assertIn("export const assetMeta",source)
        cad=[item for item in self.batch["assets"] if item.get("cad_path")]
        self.assertEqual(len(cad),2)
        for item in cad:
            self.assertEqual(item["category"],"print-commerce")
            source=(ROOT/item["cad_path"]).read_text(encoding="utf-8")
            self.assertIn("difference()",source)
            self.assertIn("assert(",source)

if __name__=="__main__": unittest.main()
