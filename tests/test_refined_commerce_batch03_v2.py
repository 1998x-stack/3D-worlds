"""Second geometry/detail pass: exact 20-SKU coverage, no renamed catalog assets."""
import json
from pathlib import Path
import unittest
from test_refined_commerce_batch03 import EXPECTED

ROOT = Path(__file__).resolve().parents[1]

class SecondPassTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = {x['slug']: x for x in json.loads(
            (ROOT/'catalog/models.json').read_text(encoding='utf-8'))['assets']}

    def test_each_of_twenty_cad_models_has_second_pass_coverage(self):
        cad=(ROOT/'printables/lib/refined_batch03_v2_details.scad').read_text(encoding='utf-8')
        self.assertIn('difference()',cad)
        self.assertNotIn('resize(',cad)
        self.assertEqual(len(EXPECTED),20)
        for slug,dim in EXPECTED.items():
            with self.subTest(slug=slug):
                self.assertIn(f'slug=="{slug}"',cad)
                entry=(ROOT/f'printables/{slug}.scad').read_text(encoding='utf-8')
                self.assertIn('use <lib/refined_batch03_v2_details.scad>',entry)
                self.assertIn('refined_batch03_v2_form(',entry)
                item=self.catalog[slug]
                self.assertEqual(item['id'],f'print-commerce.{slug}.001')
                self.assertEqual(item['dimensions_m'],[dim['w']/1000,dim['h']/1000,dim['d']/1000])
                self.assertEqual(item['cad_path'],f'printables/{slug}.scad')

    def test_second_pass_preview_matches_cad_dispatch(self):
        js=(ROOT/'src/models/refined_commerce_batch03_v2.js').read_text(encoding='utf-8')
        preview=(ROOT/'src/models/refined_commerce_batch03.js').read_text(encoding='utf-8')
        self.assertIn('addBatch03SecondPassDetails(root,spec)',preview)
        self.assertIn("detailPass:2",preview)
        for slug in EXPECTED:
            self.assertIn(f"case '{slug}':",js)
        self.assertNotIn('manufacturingStatus:\'verified\'',preview)

    def test_originally_weak_monogram_is_now_actual_embossed_geometry(self):
        base=(ROOT/'printables/lib/refined_batch03_forms.scad').read_text(encoding='utf-8')
        self.assertNotIn('linear_extrude(height=0.01)',base)
        self.assertIn('linear_extrude(height=1.1)',base)

if __name__=='__main__': unittest.main()
