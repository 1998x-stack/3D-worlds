"""Public JSON projection must be a small bounded subset of full catalog."""
import json
from pathlib import Path
import sys
import tempfile
import unittest
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
from scripts.export_static_catalog import export


class StaticCatalogTest(unittest.TestCase):
    def test_default_projection_includes_all_565_current_assets(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "public-all.json"
            result = export(target=path)
            public = json.loads(path.read_text(encoding="utf8"))
            source = json.loads((ROOT / "catalog/models.json").read_text(encoding="utf8"))
            self.assertEqual(len(source["assets"]), 565)
            self.assertEqual(result["static_count"], 565)
            self.assertEqual(result["total_catalog_count"], 565)
            self.assertFalse(result["requires_remote_api_for_full_collection"])
            self.assertEqual(public["assets"], source["assets"])
            self.assertIn("scifi.ion-propulsion-test-platform.001",
                          {a["id"] for a in public["assets"]})

    def test_projection_is_bounded(self):
        with tempfile.TemporaryDirectory() as directory:
            path=Path(directory)/"public.json"
            result=export(limit=12,target=path)
            public=json.loads(path.read_text(encoding="utf8"))
            source=json.loads((ROOT/"catalog/models.json").read_text(encoding="utf8"))
            self.assertEqual(result["static_count"],12)
            self.assertEqual(len(public["assets"]),12)
            self.assertEqual(public["assets"],source["assets"][:12])
            self.assertTrue(result["requires_remote_api_for_full_collection"])
