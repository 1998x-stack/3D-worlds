"""Prevent future PR integrations from dropping CAD or gallery quality gates."""
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class PrCiContracts(unittest.TestCase):
    def test_second_pass_is_in_node_suite(self):
        command = json.loads((ROOT / 'package.json').read_text())['scripts']['test:refined-commerce']
        for testname in ('refined_commerce.test.mjs', 'refined_commerce_batch02.test.mjs',
                         'refined_commerce_batch03.test.mjs', 'refined_commerce_batch03_v2.test.mjs'):
            with self.subTest(testname=testname):
                self.assertIn(testname, command)
                self.assertTrue((ROOT/'tests'/testname).is_file())

    def test_main_manufacturing_gates_and_cad_upload_are_preserved(self):
        yml = (ROOT/'.github/workflows/pages.yml').read_text()
        for gate in ('  cad-audit:', '  verify:', '  deploy:', 'needs: [verify, cad-audit]',
                     'audit_refined_commerce_batch03.py', 'audit_v14_cad_fit.py --with-slicer',
                     'audit_v14_manufacturing.py', 'github.ref == \'refs/heads/main\'',
                     '.cache/print/refined-batch-03-audit.json'):
            with self.subTest(gate=gate): self.assertIn(gate, yml)
        self.assertIn('          path: |\n            .cache/print/refined-batch-01-audit.json', yml)

    def test_cad_status_retains_review_boundary(self):
        src = (ROOT/'scripts/audit_refined_commerce_batch03.py').read_text()
        self.assertIn('geometry_only_not_slicer_or_physical_tested', src)

if __name__ == '__main__':
    unittest.main()
