"""Cross-PR integration guard: preserve both distinct batches without upgrading manufacturing claims."""
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

def read(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))

class ReleaseIntegrationTests(unittest.TestCase):
    def test_both_batches_keep_distinct_ids(self):
        all_assets = read("catalog/models.json")["assets"]
        v15 = read("catalog/collections/v15.json")["assets"]
        v16 = read("catalog/collections/v16.json")["assets"]
        self.assertEqual(len(all_assets), 625)
        self.assertEqual(len({a["id"] for a in all_assets}), 625)
        self.assertEqual(len({a["slug"] for a in all_assets}), 625)
        self.assertEqual(len(v15), 30)
        self.assertEqual(len(v16), 30)
        self.assertFalse({x["id"] for x in v15} & {x["id"] for x in v16})
        self.assertEqual({x["id"] for x in v15}, {a["id"] for a in all_assets if a.get("collection")=="v1.5"})
        self.assertEqual({x["id"] for x in v16}, {a["id"] for a in all_assets if a.get("collection")=="v1.6"})
        self.assertEqual(len(read("catalog/public_models.json")["assets"]), 625)

    def test_source_and_cad_paths_are_present(self):
        all_assets = read("catalog/models.json")["assets"]
        for a in all_assets:
            self.assertTrue((ROOT / a["source_path"]).is_file(), a["id"])
        for slug in ("camera-battery-organizer", "label-front-parts-bin",
                     "micro-screw-bin-lattice", "paint-pipette-drying-rack"):
            self.assertTrue((ROOT / "printables" / "v15" / (slug+".scad")).is_file())

    def test_release_gates_are_kept(self):
        workflow = (ROOT / ".github/workflows/pages.yml").read_text()
        for marker in ("cad-audit:", "verify:", "verify_skill_packages_v15.py",
                       "audit_v15_cad.py", "v15_market_assets.test.mjs",
                       "audit_refined_commerce_batch03.py", "needs: [verify, cad-audit]"):
            self.assertIn(marker, workflow)
        self.assertNotIn("run: npm ci", workflow)

if __name__ == "__main__":
    unittest.main()
