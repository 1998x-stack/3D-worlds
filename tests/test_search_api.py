"""P2 search, pagination and immutable storage regression tests."""
from __future__ import annotations
from pathlib import Path
import tempfile
import unittest
import sys
import hashlib

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from scripts.catalog import build_catalog
import services.search_api as api
from services.storage import LocalStore, key_for


class SearchTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory()
        api.DB = Path(cls.temp.name) / "catalog.sqlite"
        build_catalog(api.DB)

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def test_cursor_pagination_no_duplicates(self):
        visited = []
        cursor = ""
        while True:
            result = api.search_assets(limit=7, cursor=cursor)
            visited.extend(row["id"] for row in result["items"])
            cursor = result["next_cursor"]
            if not cursor:
                break
        self.assertEqual(len(visited), 45)
        self.assertEqual(len(set(visited)), 45)
        self.assertEqual(visited, sorted(visited))

    def test_search_and_category(self):
        items = api.search_assets(search="chair", limit=20)["items"]
        self.assertTrue(any("chair" in row["slug"] for row in items))
        self.assertTrue(all(row["id"] and row["license"] for row in items))
        self.assertEqual(len(api.search_assets(category="scifi")["items"]), 2)
        categories = {item["id"]: item["count"] for item in api.get_categories()}
        self.assertEqual(sum(categories.values()), 45)
        self.assertEqual(len(categories), 13)

    def test_invalid_cursor_and_filters(self):
        token = api.search_assets(limit=1)["next_cursor"]
        with self.assertRaises(ValueError):
            api.search_assets(search="chair", cursor=token)
        with self.assertRaises(ValueError):
            api.search_assets(cursor="../")
        self.assertEqual(api.search_assets(search="' OR 1=1 --")["items"], [])

    def test_detail(self):
        asset = api.get_asset("furniture.table.oak-study-001")
        self.assertEqual(asset["license"], "MIT")
        self.assertTrue(asset["tags"])
        self.assertIsNone(api.get_asset("../etc/passwd"))

    def test_local_storage_roundtrip(self):
        store = LocalStore(Path(self.temp.name) / "objects")
        source = Path(self.temp.name) / "triangle.glb"
        source.write_bytes(b"GLB-for-storage-transport-test")
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        key = store.put_file(source, digest)
        self.assertEqual(key, key_for(digest))
        self.assertTrue(store.exists(digest))
        self.assertEqual(store.put_file(source, digest), key)
        with self.assertRaises(ValueError):
            store.put_file(source, "f" * 64)


if __name__ == "__main__":
    unittest.main()
