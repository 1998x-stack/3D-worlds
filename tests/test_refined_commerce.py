"""First overseas detail batch: ten fixed catalog IDs and editable, dimensional CAD files."""
import json
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]
SIZES={'moon-phase-light-sleeve':(84,84,108),'aurora-wave-lantern':(87,87,112),
       'modular-pencil-caddy':(130,87,72),'cable-sort-desk-hub':(133,90,76),
       'paintbrush-workshop-rack':(136,93,80),'studio-tool-bin':(142,99,88),
       'trading-card-display':(116,106,93),'handheld-console-stand':(147,112,90),
       'ribbed-succulent-pot':(107,107,100),'propagation-vial-holder':(113,113,108)}

class RefinedCommerceTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog={item['slug']:item for item in json.loads(
            (ROOT/'catalog/models.json').read_text(encoding='utf8'))['assets']}
        cls.collection={item['slug']:item for item in json.loads(
            (ROOT/'catalog/collections/print-commerce-v13.json').read_text(encoding='utf8'))['assets']}

    def test_selected_ten_keep_stable_ids_and_exact_dimensions(self):
        self.assertEqual(len(SIZES),10)
        for slug,(w,d,h) in SIZES.items():
            with self.subTest(slug=slug):
                asset=self.catalog[slug]
                self.assertEqual(asset['id'],f'print-commerce.{slug}.001')
                self.assertEqual(asset['collection'],'v1.3')
                self.assertEqual(asset['dimensions_m'],[w/1000,h/1000,d/1000])
                self.assertEqual(self.collection[slug]['cad_path'],f'printables/{slug}.scad')
                source=(ROOT/f'printables/{slug}.scad').read_text(encoding='utf8')
                self.assertIn('use <lib/refined_forms.scad>',source)
                self.assertIn(f'slug="{slug}"',source)
                self.assertNotIn('resize(',source)
                for n in (w,d,h): self.assertIn(f'= {n};',source)

    def test_dispatch_consistency(self):
        cad=(ROOT/'printables/lib/refined_forms.scad').read_text(encoding='utf8')
        js=(ROOT/'src/models/refined_commerce_engine.js').read_text(encoding='utf8')
        for slug in SIZES:
            with self.subTest(slug=slug):
                self.assertIn(f'slug=="{slug}"',cad)
                self.assertIn(f"case '{slug}':",js)
        self.assertIn('manual_review_required',
                      (ROOT/'scripts/audit_refined_commerce.py').read_text(encoding='utf8'))

if __name__=='__main__': unittest.main()
