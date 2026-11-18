#!/usr/bin/env python3
"""Compile V1.5 mm CAD candidates with real OpenSCAD and audit STL geometry.

Checks compile status, OpenSCAD warning output, connectedness, watertightness,
positive volume and declared size only. Does NOT verify wall thickness, material,
fit, print supports, strength, slicer G-code, food/chemical safety or sales.
"""
from __future__ import annotations
import argparse
import json
import os
from pathlib import Path
import subprocess
import tempfile

import numpy as np
import trimesh

ROOT = Path(__file__).resolve().parents[1]
CASES = (
    ("micro-screw-bin-lattice", [148, 92, 28]),
    ("paint-pipette-drying-rack", [132, 86, 20]),
)

def audit_one(slug, expected, dest):
    source = ROOT / "printables" / "v15" / (slug + ".scad")
    target = dest / (slug + ".stl")
    env = os.environ.copy()
    env.setdefault("QT_QPA_PLATFORM", "offscreen")
    result = subprocess.run(["openscad", "-o", str(target), str(source)],
                            capture_output=True, text=True, env=env, timeout=120)
    combined = result.stdout + "\n" + result.stderr
    if result.returncode != 0 or not target.is_file():
        raise RuntimeError(f"{slug}: OpenSCAD failed: {combined[-1200:]}")
    if "WARNING:" in combined.upper() or "ERROR:" in combined.upper():
        raise RuntimeError(f"{slug}: compiler warning/error: {combined[-1200:]}")
    mesh = trimesh.load(str(target), force="mesh", process=True)
    actual = (mesh.bounds[1] - mesh.bounds[0]).tolist()
    connected = len(mesh.split(only_watertight=False))
    record = {
        "slug": slug, "source": str(source.relative_to(ROOT)), "units": "mm",
        "expected_xyz_mm": expected, "actual_xyz_mm": [round(float(v), 3) for v in actual],
        "manifold_watertight": bool(mesh.is_watertight),
        "winding_consistent": bool(mesh.is_winding_consistent),
        "connected_component_count": connected, "positive_volume_mm3": round(float(mesh.volume), 2),
        "triangle_count": int(len(mesh.faces)),
        "verification_stage": "compiled_geometry_only",
        "not_verified": ["global_min_wall", "dimensioned_fit", "print_orientation",
                         "slicer_toolpath", "physical_strength", "chemical_safety", "market_demand"]
    }
    if not mesh.is_watertight or not mesh.is_winding_consistent or connected != 1:
        raise RuntimeError(f"{slug}: invalid manifold / disconnected geometry")
    if mesh.volume <= 0 or not np.allclose(actual, expected, atol=0.05):
        raise RuntimeError(f"{slug}: nonpositive volume or CAD/catalog envelope mismatch: {record}")
    return record

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=ROOT/".cache"/"print"/"v15-cad-geometry.json")
    args = parser.parse_args()
    with tempfile.TemporaryDirectory(prefix="v15-cad-") as tmp:
        evidence = [audit_one(slug, expected, Path(tmp)) for slug, expected in CASES]
    payload = {"scope": "OpenSCAD geometry only, not manufacturing approval", "assets": evidence}
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    print(f"PASS: {len(evidence)} original V1.5 CAD source geometries compiled; output {args.output}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
