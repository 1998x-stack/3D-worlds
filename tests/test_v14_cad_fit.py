"""No G-code transmission: V1.4.3 CAD cross-section and QA evidence boundary tests."""
from __future__ import annotations

from pathlib import Path
import sys
import unittest
from unittest import mock

import trimesh

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from audit_v14_cad_fit import (
    GEOMETRY_BOUNDS,
    PILOTS,
    between_gaps,
    measure_body_and_coupon,
    require_widths,
    run_audit,
    scan_intervals,
)


class SectionMathTests(unittest.TestCase):
    def test_synthetic_10mm_box_measures_real_slice(self):
        mesh = trimesh.creation.box(extents=[10, 12, 4])
        mesh.apply_translation([0, 0, 2])
        sections = scan_intervals(mesh, plane_axis=2, plane_value=2,
                                  line_axis=1, line_value=0, measure_axis=0)
        self.assertEqual(require_widths(
            [b-a for a,b in sections], [10]), [10.0])

    def test_section_rejects_non_distinct_axes(self):
        mesh = trimesh.creation.box(extents=[1, 1, 1])
        with self.assertRaises(ValueError):
            scan_intervals(mesh, plane_axis=2, plane_value=0,
                           line_axis=2, line_value=0, measure_axis=0)

    def test_changed_clearance_fails_measured_tolerance(self):
        with self.assertRaisesRegex(ValueError, "measured"):
            require_widths([0.8, 0.4], [0.2, 0.4])

    def test_wrong_number_of_sockets_fails(self):
        with self.assertRaisesRegex(ValueError, "spans"):
            require_widths([6.85]*3, [6.85]*4)

    def test_gap_math(self):
        self.assertEqual(between_gaps([(0, 4), (6, 10), (15, 19)]),
                         [2, 5])

    def test_no_slicer_can_never_report_slicer_success(self):
        # Early failure before any source render; no false positive logs.
        with mock.patch("audit_v14_cad_fit.shutil.which", return_value=None):
            with self.assertRaisesRegex(RuntimeError, "OpenSCAD"):
                run_audit(output=ROOT/".cache/test/slicer-never-created.json",
                          with_slicer=True)


class CADContractTests(unittest.TestCase):
    def test_two_distinct_pilots_and_both_required_modes(self):
        self.assertEqual(len(PILOTS), 2)
        self.assertEqual(len(GEOMETRY_BOUNDS), 2)
        for slug in PILOTS:
            path = ROOT/"printables/v14"/(slug+".scad")
            self.assertTrue(path.is_file())
            contents = path.read_text(encoding="utf8")
            self.assertIn('mode=', contents)
            self.assertIn("module coupon()", contents)
            self.assertIn("module body()", contents)
            self.assertIn("assert(", contents)
            self.assertEqual(set(GEOMETRY_BOUNDS[slug]), {"body", "coupon"})

    def test_closed_box_is_not_an_approved_pilot(self):
        mesh = trimesh.creation.box(extents=[128, 99.8, 28])
        mesh.apply_translation([0, 0, 14])
        # Exact envelope is insufficient: the soap must have actual holes
        # and a horizontal side-entry gap.
        with self.assertRaises(ValueError):
            measure_body_and_coupon("clip_on_soap_drainage_bridge",
                                    "body", mesh)

    def test_no_global_wall_or_physical_test_claims(self):
        self.assertNotIn("certified", str(GEOMETRY_BOUNDS))
        with self.assertRaises(ValueError):
            require_widths([3.0], [4.0], label="insufficient jaw")


if __name__ == "__main__":
    unittest.main()
