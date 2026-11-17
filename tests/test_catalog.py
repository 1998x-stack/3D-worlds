"""Zero-dependency catalog integrity and FTS regression tests."""
from pathlib import Path
import sqlite3
import tempfile
import unittest
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from scripts.catalog import build_catalog, validate_manifest


class CatalogTests(unittest.TestCase):
    def test_manifest_validates_five_assets(self):
        data = validate_manifest()
        self.assertEqual(data["schema_version"], "1.0.0")
        self.assertEqual(len(data["assets"]), 5)
        self.assertEqual({a["category"] for a in data["assets"]}, {"furniture", "bathroom", "characters"})

    def test_database_schema_relations_and_fts(self):
        with tempfile.TemporaryDirectory() as directory:
            db = Path(directory) / "catalog.sqlite"
            self.assertEqual(build_catalog(db), 5)
            with sqlite3.connect(db) as connection:
                self.assertEqual(connection.execute("SELECT count(*) FROM assets").fetchone()[0], 5)
                self.assertEqual(connection.execute("PRAGMA integrity_check").fetchone()[0], "ok")
                self.assertEqual(connection.execute("PRAGMA foreign_key_check").fetchall(), [])
                self.assertEqual(
                    connection.execute("SELECT count(*) FROM asset_tags").fetchone()[0], 27
                )
                rows = connection.execute(
                    "SELECT a.asset_id FROM assets a JOIN assets_fts ON a.rowid=assets_fts.rowid "
                    "WHERE assets_fts MATCH ?", ('"chair"',)
                ).fetchall()
                self.assertEqual(len(rows), 1)
                self.assertEqual(rows[0][0], "furniture.chair.linen-001")
                connection.execute(
                    "UPDATE assets SET title='Updated Stool' WHERE asset_id='furniture.chair.linen-001'"
                )
                self.assertEqual(
                    connection.execute("SELECT count(*) FROM assets_fts WHERE assets_fts MATCH 'Stool'").fetchone()[0],
                    1
                )
                connection.execute(
                    "DELETE FROM assets WHERE asset_id='furniture.chair.linen-001'"
                )
                self.assertEqual(
                    connection.execute("SELECT count(*) FROM assets_fts WHERE assets_fts MATCH 'Stool'").fetchone()[0],
                    0
                )

    def test_build_is_repeatable(self):
        with tempfile.TemporaryDirectory() as directory:
            db = Path(directory) / "catalog.sqlite"
            for _ in range(2):
                build_catalog(db)
            with sqlite3.connect(db) as connection:
                self.assertEqual(connection.execute("SELECT count(*) FROM assets").fetchone()[0], 5)


if __name__ == "__main__":
    unittest.main()
