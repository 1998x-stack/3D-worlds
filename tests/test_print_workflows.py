"""Printing process gates, assembly splits and honest catalog readiness."""
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
import xml.etree.ElementTree as ET
from zipfile import ZipFile

import trimesh

from test_print_export import exporter


class PrintReadinessTests(unittest.TestCase):
    def test_split_part_mode_keeps_3mf_assembly_and_emits_local_part_stl(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            scene = trimesh.Scene()
            scene.add_geometry(trimesh.creation.box(extents=[.06,.08,.04]),
                               node_name='left', geom_name='left')
            other = trimesh.creation.box(extents=[.04,.06,.03])
            other.apply_translation([.15,0,0])
            scene.add_geometry(other,node_name='right',geom_name='right')
            scene.export(root/'assembly.glb')
            report = exporter.export_print(root/'assembly.glb',root/'out','assembly',
                longest_mm=120,mode='separated',profile_id='fdm-220',material='PLA',
                desired_clearance_mm=0.25)
            self.assertEqual(report['status'],'geometry_pass_manual_review_required')
            self.assertEqual(len(report['parts']),2)
            self.assertTrue((root/'out/assembly-part-001.stl').is_file())
            self.assertTrue((root/'out/assembly-part-002.stl').is_file())
            self.assertEqual(report['material'],'PLA')
            self.assertEqual(report['indicators_not_manufacturing_checks']['hole_fit_and_clearance'],
                             'not_checked')
            with ZipFile(root/'out/assembly.3mf') as archive:
                model=ET.fromstring(archive.read('3D/3dmodel.model'))
            ns={'m':exporter.CORE}
            self.assertEqual(len(model.findall('.//m:item',ns)),2)

    def test_audit_only_never_generates_print_files(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            trimesh.creation.box(extents=[.06,.07,.05]).export(root/'box.glb')
            output=root/'out'
            r=exporter.export_print(root/'box.glb',output,'box',
                audit_only=True,profile_id='fdm-220')
            self.assertEqual(r['status'],'geometry_pass_manual_review_required')
            self.assertTrue(r['audit_only'])
            self.assertFalse(output.exists())
            self.assertFalse(r['manufacturing_certified'])

    def test_blocked_run_invalidates_old_stl(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            path=root/'test.glb'
            trimesh.creation.box(extents=[.03,.03,.03]).export(path)
            accepted=exporter.export_print(path,root/'out','test')
            self.assertEqual(accepted['status'],'geometry_pass_manual_review_required')
            self.assertTrue((root/'out/test.stl').exists())
            triangle=trimesh.Trimesh(vertices=[[0,0,0],[.05,0,0],[0,.05,0]],
                                     faces=[[0,1,2]],process=False)
            triangle.export(path)
            blocked=exporter.export_print(path,root/'out','test')
            self.assertEqual(blocked['status'],'blocked')
            self.assertFalse((root/'out/test.stl').exists())
            self.assertTrue((root/'out/test.print-report.json').exists())

    def test_preset_material_and_clearance_validation(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            trimesh.creation.box(extents=[.1,.1,.1]).export(root/'box.glb')
            with self.assertRaisesRegex(ValueError,'Material not supported'):
                exporter.export_print(root/'box.glb',root/'out','box',
                                      material='resin',profile_id='fdm-220')
            with self.assertRaisesRegex(ValueError,'clearance'):
                exporter.export_print(root/'box.glb',root/'out','box',
                                      desired_clearance_mm=-1)
            with self.assertRaisesRegex(ValueError,'Unknown print profile'):
                exporter.export_print(root/'box.glb',root/'out','box',
                                      profile_id='untrusted')

    def test_metadata_inventory_only_says_not_audited(self):
        root=Path(__file__).resolve().parents[1]
        with tempfile.TemporaryDirectory() as temp:
            report=Path(temp)/'inventory.json'
            cmd=[sys.executable,str(root/'scripts/audit_print_catalog.py'),
                 '--metadata-only','--output',str(report)]
            proc=subprocess.run(cmd,cwd=root,stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE,text=True,timeout=40)
            self.assertEqual(proc.returncode,0,proc.stderr)
            payload=json.loads(report.read_text())
            self.assertEqual(payload['catalog_total'],len(payload['results']))
            self.assertGreaterEqual(payload['catalog_total'],435)
            self.assertEqual(payload['status_counts'],{'not_audited':len(payload['results'])})
            self.assertFalse(payload['physical_print_verified'])
            self.assertFalse(any(x['manufacturing_certified'] for x in payload['results']))


if __name__ == '__main__':
    unittest.main()
