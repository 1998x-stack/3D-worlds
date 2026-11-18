#!/usr/bin/env python3
"""Render and inspect two V1.4.2 dimensioned CAD prototypes with OpenSCAD.

This is an automated STL topology/size check, NOT wall-thickness metrology,
slicer toolpaths, clearance metrology, chemical safety or a printed load test.
"""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import sys

import trimesh

ROOT = Path(__file__).resolve().parents[1]
PILOTS = {
    "clip_on_soap_drainage_bridge": {
        "asset_id": "bathroom.clip-on-soap-drainage-bridge.001",
        "source": ROOT / "printables/v14/clip_on_soap_drainage_bridge.scad",
        "bounds_ranges_mm": [(127.5, 128.5), (92, 100), (27.5, 28.5)],
        "fit_dimension_mm": None,  # measured target tub lip is not known
    },
    "hex_driver_bit_index_dock": {
        "asset_id": "tools.hex-driver-bit-index-dock.001",
        "source": ROOT / "printables/v14/hex_driver_bit_index_dock.scad",
        "bounds_ranges_mm": [(107.5, 108.5), (107.5, 108.5), (17.5, 18.5)],
        "fit_dimension_mm": 6.35,  # nominal bit AF, not measured actual bit
    },
}


def inspect_stl(path: Path, bound_ranges: list[tuple[float, float]]) -> dict:
    mesh = trimesh.load(path, force="mesh", process=True)
    if mesh.is_empty:
        raise ValueError("OpenSCAD generated an empty STL")
    bounds = [round(float(x), 3) for x in mesh.extents]
    envelope_ok = all(lo <= got <= hi for got, (lo, hi)
                      in zip(bounds, bound_ranges))
    parts = mesh.split(only_watertight=False)
    topology_ok = (
        bool(mesh.is_watertight) and bool(mesh.is_winding_consistent)
        and float(mesh.volume) > 0 and len(parts) == 1
        and float(mesh.bounds[0][2]) >= -0.01
    )
    return {
        "status": "topology_pass_manual_review_required"
                  if topology_ok and envelope_ok else "mesh_blocked",
        "measured_dimensions_mm": bounds,
        "watertight": bool(mesh.is_watertight),
        "winding_consistent": bool(mesh.is_winding_consistent),
        "positive_volume": bool(mesh.volume > 0),
        "connected_components": len(parts),
        "flat_print_orientation_min_z_mm": round(float(mesh.bounds[0][2]), 3),
        "dimensions_within_expected_range": envelope_ok,
        "triangle_count": int(len(mesh.faces)),
        "manufacturing_certified": False,
        "wall_thickness_measured": False,
        "clearance_fit_tested": False,
        "slicer_reviewed": False,
        "physically_printed": False,
    }


def run_audit(*, output: Path, only: str | None = None,
              timeout: int = 180) -> dict:
    if not shutil.which("openscad"):
        raise RuntimeError("OpenSCAD CLI is required")
    if only is not None and only not in PILOTS:
        raise ValueError("Unknown CAD pilot")
    results = []
    artifacts = output.parent / "cad-pilot-stl"
    artifacts.mkdir(parents=True, exist_ok=True)
    for slug, spec in PILOTS.items():
        if only and only != slug:
            continue
        path = artifacts / (slug + ".stl")
        # Delete prior outputs: never report a stale STL from another revision.
        path.unlink(missing_ok=True)
        run = subprocess.run(
            ["openscad", "-o", str(path), str(spec["source"])],
            capture_output=True, text=True, timeout=timeout, check=False)
        row = {
            "slug": slug,
            "asset_id": spec["asset_id"],
            "cad_source": str(spec["source"].relative_to(ROOT)),
            "cad_source_sha256": hashlib.sha256(spec["source"].read_bytes()).hexdigest(),
            "manufacturing_certified": False,
            "physical_fit": "not_tested",
            "printer_slicer": "not_run",
            "material_strength": "not_tested",
        }
        if run.returncode != 0 or not path.is_file():
            row.update(status="render_error",
                       error=run.stderr[-650:])
        else:
            try:
                row.update(inspect_stl(path, spec["bounds_ranges_mm"]))
                row.update(stl_path=str(path),
                           stl_sha256=hashlib.sha256(path.read_bytes()).hexdigest(),
                           stl_bytes=path.stat().st_size)
            except (ValueError, RuntimeError, OSError) as exc:
                row.update(status="audit_error", error=str(exc)[:650])
        results.append(row)
    report = {
        "schema_version": "1.0.0",
        "title": "Unverified original V1.4 scene-inspired CAD prototypes",
        "count": len(results),
        "topology_pass_count": sum(
            x["status"] == "topology_pass_manual_review_required" for x in results),
        "slicer_reviewed_count": 0,
        "physically_printed_count": 0,
        "certified_count": 0,
        "models": results,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n",
                      encoding="utf-8")
    return report


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path,
                        default=ROOT / ".cache/print/v14-cad-pilots.json")
    parser.add_argument("--only", choices=tuple(PILOTS))
    args = parser.parse_args(argv)
    try:
        report = run_audit(output=args.output, only=args.only)
        print(json.dumps({
            "cad_models": report["count"],
            "topology_pass": report["topology_pass_count"],
            "report": str(args.output),
            "physical_prints": 0,
        }, ensure_ascii=False))
        return 0 if report["count"] == report["topology_pass_count"] else 2
    except (OSError, RuntimeError, ValueError) as exc:
        print(str(exc), file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
