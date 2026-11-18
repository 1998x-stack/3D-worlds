"""Batch 02: 20 distinct CAD sources + unmodified published overseas IDs."""
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = {
    'geometric-star-lightbox': (90, 90, 116),
    'forest-shadow-lantern': (93, 93, 120),
    'minimal-arch-nightlight': (96, 96, 124),
    'cloud-whale-totem': (92, 80, 125),
    'sleepy-owl-guardian': (95, 83, 129),
    'alpine-cabin-miniature': (136, 93, 79),
    'retro-station-platform': (142, 99, 87),
    'craft-spool-organizer': (139, 96, 84),
    'watch-display-cradle': (113, 103, 89),
    'miniature-tiered-riser': (119, 109, 97),
    'universal-controller-cradle': (135, 100, 74),
    'tabletop-dice-tray': (141, 106, 82),
    'boardgame-token-sorter': (144, 109, 86),
    'arc-earring-display': (112, 82, 99),
    'ring-cone-tower': (115, 85, 103),
    'geo-cactus-planter': (110, 110, 104),
    'custom-desk-nameplate': (135, 67, 9),
    'house-number-plaque': (145, 71, 11),
    'celestial-guild-medallion': (75, 75, 9),
    'alchemist-costume-brooch': (84, 84, 12),
}


class Batch02Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = {item['slug']: item for item in json.loads(
            (ROOT/'catalog/models.json').read_text(encoding='utf-8'))['assets']}
        cls.collection = {item['slug']: item for item in json.loads(
            (ROOT/'catalog/collections/print-commerce-v13.json').read_text(encoding='utf-8'))['assets']}

    def test_unmodified_published_ids_and_mm_envelopes(self):
        self.assertEqual(len(EXPECTED),20)
        self.assertEqual(len(self.catalog),625)
        for slug, (w, d, h) in EXPECTED.items():
            with self.subTest(slug=slug):
                spec = self.catalog[slug]
                self.assertEqual(spec['id'],f'print-commerce.{slug}.001')
                self.assertEqual(spec['collection'],'v1.3')
                self.assertEqual(spec['dimensions_m'],[w/1000,h/1000,d/1000])
                self.assertEqual(self.collection[slug]['cad_path'],f'printables/{slug}.scad')
                self.assertEqual(self.collection[slug]['stage'],'prototype_unverified')
                content = (ROOT/f'printables/{slug}.scad').read_text(encoding='utf-8')
                self.assertIn('use <lib/commerce_forms.scad>',content)
                self.assertIn('use <lib/refined_batch02_forms.scad>',content)
                self.assertIn(f'slug="{slug}"',content)
                self.assertNotIn('resize(',content)
                for mm in (w,d,h): self.assertIn(f'= {mm};',content)
                self.assertIn('variant='+str(self.collection[slug]['variant']),content)
                self.assertIn(f'family="{self.collection[slug]["commerce_family"]}"',content)

    def test_cad_and_three_specific_dispatch_are_in_sync(self):
        lib = (ROOT/'printables/lib/refined_batch02_forms.scad').read_text(encoding='utf-8')
        preview = (ROOT/'src/models/refined_commerce_batch02.js').read_text(encoding='utf-8')
        main = (ROOT/'src/models/print_commerce_engine.js').read_text(encoding='utf-8')
        self.assertIn('buildRefinedCommerceBatch02(spec)',main)
        self.assertIn('buildRefinedCommerceModel(spec)',main)
        self.assertNotIn('resize(',lib)
        for slug in EXPECTED:
            with self.subTest(slug=slug):
                self.assertIn(f'slug=="{slug}"',lib)
                self.assertIn(f"case '{slug}':",preview)
        self.assertIn('manual_review_required',
            (ROOT/'scripts/audit_refined_commerce_batch02.py').read_text(encoding='utf-8'))

    def test_first_batch_is_untouched_and_only_20_remain_generic(self):
        a = (ROOT/'src/models/refined_commerce_engine.js').read_text(encoding='utf-8')
        first = ['moon-phase-light-sleeve','aurora-wave-lantern','modular-pencil-caddy',
                 'cable-sort-desk-hub','paintbrush-workshop-rack','studio-tool-bin',
                 'trading-card-display','handheld-console-stand','ribbed-succulent-pot',
                 'propagation-vial-holder']
        self.assertTrue(all(f"'{slug}'" in a for slug in first))
        self.assertTrue(not set(first).intersection(EXPECTED))
        self.assertEqual(len(self.collection),50)
        self.assertEqual(len(self.collection)-len(first)-len(EXPECTED),20)


if __name__=='__main__': unittest.main()
