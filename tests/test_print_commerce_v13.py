"""V1.3: 50 original market-hypothesis designs, CAD and live preview modules."""
import json
from pathlib import Path
import re
import unittest

ROOT=Path(__file__).resolve().parents[1]
class PrintCommerceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection=json.loads((ROOT/"catalog/collections/print-commerce-v13.json").read_text(encoding="utf8"))
        cls.catalog=json.loads((ROOT/"catalog/models.json").read_text(encoding="utf8"))["assets"]
        cls.ids={x["id"]:x for x in cls.catalog}
    def test_50_unique_ids_preserve_485_history(self):
        self.assertEqual(len(self.catalog),595)
        self.assertEqual(len(self.ids),595)
        self.assertEqual(len({x["slug"] for x in self.catalog}),595)
        new=[x for x in self.catalog if x.get("collection")=="v1.3"]
        self.assertEqual(len(new),50)
        self.assertEqual(len([x for x in self.catalog if x.get("collection") not in ("v1.3","v1.4", "v1.5")]),485)
        self.assertEqual(len({x["commerce_family"] for x in self.collection["assets"]}),10)
        self.assertEqual(set(self.collection["families"].values()),{5})
        self.assertEqual(len(self.collection["assets"]),50)
    def test_all_cad_sources_and_bilingual_preview_modules(self):
        signatures=set()
        for item in self.collection["assets"]:
            with self.subTest(slug=item["slug"]):
                asset=self.ids[item["id"]]
                self.assertEqual(asset["category"],"print-commerce")
                self.assertEqual(asset["title_zh"],item["title_zh"])
                self.assertEqual(asset["collection"],"v1.3")
                self.assertEqual(asset["license"],"MIT")
                self.assertEqual(asset["generator"],item["generator"])
                self.assertTrue(asset["source_path"].startswith("src/models/"))
                mod=(ROOT/asset["source_path"]).read_text(encoding="utf8")
                self.assertIn("export function "+asset["generator"]+"()",mod)
                self.assertIn("buildCommerceModel(assetMeta)",mod)
                self.assertIn('"variant": '+str(item["variant"]),mod)
                self.assertIn('"commerce_family": "'+item["commerce_family"]+'"',mod)
                scad=(ROOT/item["cad_path"]).read_text(encoding="utf8")
                self.assertIn("use <lib/commerce_forms.scad>",scad)
                self.assertIn('family="'+item["commerce_family"]+'"',scad)
                self.assertIn("variant="+str(item["variant"]),scad)
                signatures.add((item["commerce_family"],item["variant"]))
        self.assertEqual(len(signatures),50)
    def test_no_unsafe_business_claims(self):
        self.assertEqual(self.collection["asset_count"],50)
        self.assertTrue(all(x["stage"]=="prototype_unverified" for x in self.collection["assets"]))
        self.assertTrue(all(x["sales_status"]=="not_measured" for x in self.collection["assets"]))
if __name__=="__main__":
    unittest.main()
