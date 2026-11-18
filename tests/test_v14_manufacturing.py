"""V1.4 manufacturing survey: explicit test of honest evidence boundaries."""
from __future__ import annotations
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import trimesh
from audit_v14_manufacturing import inspect_meshes, read_scope, create_report, ROOT as MODULE_ROOT
from audit_v14_cad_pilots import PILOTS


class ManufacturingScope(unittest.TestCase):
    def test_all_30_have_review_questions_and_no_approval(self):
        collection, intents = read_scope()
        self.assertEqual(len(collection["assets"]), 30)
        self.assertEqual(len(intents), 30)
        self.assertEqual(len({item["slug"] for item in collection["assets"]}), 30)
        for item in collection["assets"]:
            note = intents[item["id"]]
            self.assertEqual(note["review_stage"], "unreviewed")
            self.assertGreater(len(note["critical_fit_test"]), 20)
            self.assertEqual(len(note["validation_actions"]), 3)
            self.assertEqual(item["geometry_revision"], "1.4.1")
        pilots = [x for x in intents.values() if x["candidate_cad"]]
        self.assertEqual(len(pilots), 2)
        self.assertEqual(set(PILOTS), {Path(x["candidate_cad"]).stem for x in pilots})

    def test_missing_source_is_not_a_positive_audit(self):
        report = create_report(only_asset_id="tools.hex-driver-bit-index-dock.001")
        self.assertEqual(report["model_count"], 1)
        self.assertEqual(report["certified_count"], 0)
        self.assertEqual(report["physically_tested_count"], 0)
        self.assertEqual(report["slicer_reviewed_count"], 0)
        self.assertIn(report["assets"][0]["status"], {
            "source_missing", "mesh_blocked",
            "topology_pass_manual_review_required", "audit_error",
        })
        self.assertFalse(report["assets"][0]["manufacturing_certified"])


class RealMeshIndicatorTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.profile = {
            "id": "fixture", "process": "FDM",
            "build_volume_mm": [220, 220, 250],
            "nozzle_mm": 0.4, "feature_hint_mm": 0.8,
        }

    def test_closed_solid_box_is_topology_only_not_certified(self):
        mesh = trimesh.creation.box(extents=[10, 12, 6])
        mesh.apply_translation([0, 0, 3])
        info = inspect_meshes([mesh], profile=self.profile,
                              asset_id="fixture.closed")
        self.assertEqual(info["status"], "topology_pass_manual_review_required")
        self.assertEqual(info["watertight_mesh_count"], 1)
        self.assertEqual(info["component_bbox_below_reference_count"], 0)
        self.assertGreater(info["planar_bed_contact_area_proxy_mm2"], 1)
        self.assertEqual(info["evidence_boundary"]["wall_thickness"], "not_measured")
        self.assertEqual(info["evidence_boundary"]["assembly_fit"], "not_measured")
        self.assertEqual(info["evidence_boundary"]["physical_print"], "not_tested")
        self.assertFalse(info["manufacturing_certified"])

    def test_open_mesh_fails_topology(self):
        mesh = trimesh.creation.box(extents=[10, 10, 6])
        mesh.update_faces([i for i in range(len(mesh.faces)) if i != 0])
        mesh.remove_unreferenced_vertices()
        report = inspect_meshes([mesh], profile=self.profile,
                                asset_id="fixture.open")
        self.assertEqual(report["status"], "mesh_blocked")
        self.assertEqual(report["watertight_mesh_count"], 0)
        self.assertIn("mesh_topology_or_envelope_blocker", report["risk_tags"])

    def test_tiny_component_bbox_warns_but_not_called_wall_measurement(self):
        mesh = trimesh.creation.box(extents=[0.35, 3, 4])
        mesh.apply_translation([0, 0, 2])
        info = inspect_meshes([mesh], profile=self.profile,
                              asset_id="fixture.thin")
        self.assertIn("component_bbox_below_reference_feature",
                      info["risk_tags"])
        self.assertEqual(info["component_bbox_below_reference_count"], 1)
        self.assertEqual(info["evidence_boundary"]["part_bbox"],
                         "measured_not_a_wall_gauge")

    def test_build_volume_is_a_real_blocker(self):
        mesh = trimesh.creation.box(extents=[300, 10, 10])
        info = inspect_meshes([mesh], profile=self.profile,
                              asset_id="fixture.oversize")
        self.assertEqual(info["status"], "mesh_blocked")
        self.assertTrue(any("does_not_fit_specified_build_volume" in e
                            for e in info["errors_sample"]))


if __name__ == "__main__":
    unittest.main()
