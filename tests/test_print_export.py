"""Fixture-based STL/3MF interoperability and unsafe geometry regression tests."""
import importlib.util
import tempfile
import unittest
from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET

import trimesh

MODULE = Path(__file__).resolve().parents[1] / 'scripts/export_print.py'
spec = importlib.util.spec_from_file_location('export_print', MODULE)
exporter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(exporter)


class PrintExportTests(unittest.TestCase):
    def test_dimensions_axes_and_3mf_package(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            trimesh.creation.box(extents=[1., 2., .5]).export(root / 'box.glb')
            report = exporter.export_print(
                root / 'box.glb', root / 'print', 'test-box', longest_mm=100)
            self.assertEqual(report['status'], 'geometry_pass_manual_review_required')
            self.assertFalse(report['manufacturing_certified'])
            self.assertAlmostEqual(max(report['dimensions_mm']), 100., places=4)
            stl = trimesh.load(root / 'print/test-box.stl', force='mesh')
            self.assertTrue(stl.is_watertight)
            self.assertAlmostEqual(max(stl.extents), 100, places=3)
            with ZipFile(root / 'print/test-box.3mf') as archive:
                self.assertEqual(set(archive.namelist()),
                                 {'[Content_Types].xml', '_rels/.rels', '3D/3dmodel.model'})
                model = ET.fromstring(archive.read('3D/3dmodel.model'))
                self.assertEqual(model.attrib['unit'], 'millimeter')
                ns = {'m': exporter.CORE}
                self.assertEqual(len(model.findall('.//m:triangle', ns)), 12)
                self.assertEqual(len(model.findall('.//m:item', ns)), 1)
            # Independent 3MF importer can reopen the generated package.
            reopened = trimesh.load(root / 'print/test-box.3mf', force='scene')
            self.assertEqual(len(reopened.geometry), 1)
            self.assertTrue((root / 'print/test-box.print-report.json').is_file())

    def test_open_mesh_blocked(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            triangle = trimesh.Trimesh(vertices=[[0,0,0],[1,0,0],[0,1,0]],
                                       faces=[[0,1,2]], process=False)
            triangle.export(root / 'open.glb')
            report = exporter.export_print(root / 'open.glb', root / 'print', 'open')
            self.assertEqual(report['status'], 'blocked')
            self.assertIn('part_0:open_or_nonmanifold_mesh', report['errors'])
            self.assertFalse((root / 'print/open.stl').exists())

    def test_build_volume_blocks_oversized_model(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            trimesh.creation.box(extents=[.2,.3,.1]).export(root / 'box.glb')
            report = exporter.export_print(root / 'box.glb', root / 'out',
                                           'box', bed_mm=[100,100,100])
            self.assertIn('does_not_fit_specified_build_volume', report['errors'])

    def test_filename_traversal_rejected(self):
        with self.assertRaises(ValueError):
            exporter.export_print(Path('/dev/null'), Path('/tmp'), '../../escape')


if __name__ == '__main__':
    unittest.main()
