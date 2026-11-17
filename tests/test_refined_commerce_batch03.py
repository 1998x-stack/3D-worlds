"""Batch 03: final 20 overseas SKU CAD sources and stable catalogue identity."""
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = {'lunar-fox-bust': {'w': 98, 'd': 86, 'h': 133, 'family': 'figurine', 'variant': 3}, 'garden-robot-companion': {'w': 101, 'd': 89, 'h': 137, 'family': 'figurine', 'variant': 4}, 'mountain-spirit-figurine': {'w': 104, 'd': 92, 'h': 141, 'family': 'figurine', 'variant': 5}, 'harbor-cargo-diorama': {'w': 130, 'd': 87, 'h': 71, 'family': 'scenery', 'variant': 1}, 'desert-roadway-diorama': {'w': 133, 'd': 90, 'h': 75, 'family': 'scenery', 'variant': 2}, 'urban-street-corner': {'w': 139, 'd': 96, 'h': 83, 'family': 'scenery', 'variant': 4}, 'collectible-display-plinth': {'w': 110, 'd': 100, 'h': 85, 'family': 'display', 'variant': 1}, 'eyewear-display-stand': {'w': 122, 'd': 112, 'h': 101, 'family': 'display', 'variant': 5}, 'retro-cartridge-rack': {'w': 138, 'd': 103, 'h': 78, 'family': 'gaming', 'variant': 2}, 'bracelet-display-arch': {'w': 118, 'd': 88, 'h': 107, 'family': 'jewelry', 'variant': 3}, 'pendant-sorting-tray': {'w': 121, 'd': 91, 'h': 111, 'family': 'jewelry', 'variant': 4}, 'modular-jewelry-plinth': {'w': 124, 'd': 94, 'h': 115, 'family': 'jewelry', 'variant': 5}, 'bonsai-display-pot': {'w': 116, 'd': 116, 'h': 112, 'family': 'planter', 'variant': 4}, 'desktop-herb-planter': {'w': 119, 'd': 119, 'h': 116, 'family': 'planter', 'variant': 5}, 'wedding-place-card': {'w': 140, 'd': 69, 'h': 10, 'family': 'gift', 'variant': 2}, 'anniversary-message-plaque': {'w': 150, 'd': 73, 'h': 12, 'family': 'gift', 'variant': 4}, 'monogram-desk-coaster': {'w': 155, 'd': 75, 'h': 13, 'family': 'gift', 'variant': 5}, 'fantasy-crest-badge': {'w': 78, 'd': 78, 'h': 10, 'family': 'cosplay', 'variant': 2}, 'space-explorer-insignia': {'w': 81, 'd': 81, 'h': 11, 'family': 'cosplay', 'variant': 3}, 'mythic-rune-emblem': {'w': 87, 'd': 87, 'h': 13, 'family': 'cosplay', 'variant': 5}}

class Batch03Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = {x["slug"]: x for x in json.loads(
            (ROOT / "catalog/models.json").read_text(encoding="utf-8"))["assets"]}
        cls.collection = {x["slug"]: x for x in json.loads(
            (ROOT / "catalog/collections/print-commerce-v13.json").read_text(encoding="utf-8"))["assets"]}

    def test_twenty_existing_skus_keep_ids_dimensions_and_paths(self):
        self.assertEqual(len(EXPECTED), 20)
        self.assertEqual(len(self.collection), 50)
        for slug, spec in EXPECTED.items():
            with self.subTest(slug=slug):
                item = self.catalog[slug]
                collection_item = self.collection[slug]
                w, d, h = spec["w"], spec["d"], spec["h"]
                self.assertEqual(item["id"], f"print-commerce.{slug}.001")
                self.assertEqual(item["collection"], "v1.3")
                self.assertEqual(item["dimensions_m"], [w/1000, h/1000, d/1000])
                self.assertEqual(collection_item["cad_path"], f"printables/{slug}.scad")
                self.assertEqual(collection_item["stage"], "prototype_unverified")
                self.assertEqual(collection_item["commerce_family"], spec["family"])
                self.assertEqual(collection_item["variant"], spec["variant"])
                source = (ROOT / "printables" / f"{slug}.scad").read_text(encoding="utf-8")
                self.assertIn("use <lib/refined_batch03_forms.scad>", source)
                self.assertIn(f'slug="{slug}"', source)
                self.assertIn(f'w = {w};', source)
                self.assertIn(f'd = {d};', source)
                self.assertIn(f'h = {h};', source)
                self.assertNotIn("resize(", source)

    def test_cad_preview_dispatch_and_audit_cover_same_twenty(self):
        cad = (ROOT / "printables/lib/refined_batch03_forms.scad").read_text(encoding="utf-8")
        preview = (ROOT / "src/models/refined_commerce_batch03.js").read_text(encoding="utf-8")
        main = (ROOT / "src/models/print_commerce_engine.js").read_text(encoding="utf-8")
        audit = (ROOT / "scripts/audit_refined_commerce_batch03.py").read_text(encoding="utf-8")
        self.assertIn("buildRefinedCommerceBatch03(spec)", main)
        self.assertIn("manual_review_required", audit)
        for slug in EXPECTED:
            with self.subTest(slug=slug):
                self.assertIn(f'slug=="{slug}"', cad)
                self.assertIn(f"case '{slug}':", preview)
                self.assertIn(f"'desktop-herb-planter'", preview)
                self.assertIn(f"'desktop-herb-planter'", audit)

    def test_first_two_batches_remain_separate_and_twenty_skus_were_remaining(self):
        first = (ROOT / "src/models/refined_commerce_engine.js").read_text(encoding="utf-8")
        second = (ROOT / "src/models/refined_commerce_batch02.js").read_text(encoding="utf-8")
        first_ids = ["moon-phase-light-sleeve", "aurora-wave-lantern",
                     "modular-pencil-caddy", "cable-sort-desk-hub",
                     "paintbrush-workshop-rack", "studio-tool-bin",
                     "trading-card-display", "handheld-console-stand",
                     "ribbed-succulent-pot", "propagation-vial-holder"]
        second_ids = ["geometric-star-lightbox", "forest-shadow-lantern",
                      "minimal-arch-nightlight", "cloud-whale-totem",
                      "sleepy-owl-guardian", "alpine-cabin-miniature",
                      "retro-station-platform", "craft-spool-organizer",
                      "watch-display-cradle", "miniature-tiered-riser",
                      "universal-controller-cradle", "tabletop-dice-tray",
                      "boardgame-token-sorter", "arc-earring-display",
                      "ring-cone-tower", "geo-cactus-planter",
                      "custom-desk-nameplate", "house-number-plaque",
                      "celestial-guild-medallion", "alchemist-costume-brooch"]
        self.assertTrue(all(f"'desktop-herb-planter'" in first for slug in first_ids))
        self.assertTrue(all(f"'desktop-herb-planter'" in second for slug in second_ids))
        self.assertFalse(set(EXPECTED).intersection(first_ids + second_ids))
        self.assertEqual(len(self.collection) - len(first_ids) - len(second_ids) - len(EXPECTED), 0)

if __name__ == "__main__":
    unittest.main()
