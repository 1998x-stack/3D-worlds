#!/usr/bin/env python3
"""Geometry-only audit for the final 20 overseas print-commerce CAD prototypes.

Requires OpenSCAD and trimesh. A pass verifies a closed, consistently oriented,
single-component mesh and catalogue envelope only. It does NOT certify slicing,
strength, fit, safety, materials, or commercial readiness.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = {'lunar-fox-bust': (98, 86, 133), 'garden-robot-companion': (101, 89, 137), 'mountain-spirit-figurine': (104, 92, 141), 'harbor-cargo-diorama': (130, 87, 71), 'desert-roadway-diorama': (133, 90, 75), 'urban-street-corner': (139, 96, 83), 'collectible-display-plinth': (110, 100, 85), 'eyewear-display-stand': (122, 112, 101), 'retro-cartridge-rack': (138, 103, 78), 'bracelet-display-arch': (118, 88, 107), 'pendant-sorting-tray': (121, 91, 111), 'modular-jewelry-plinth': (124, 94, 115), 'bonsai-display-pot': (116, 116, 112), 'desktop-herb-planter': (119, 119, 116), 'wedding-place-card': (140, 69, 10), 'anniversary-message-plaque': (150, 73, 12), 'monogram-desk-coaster': (155, 75, 13), 'fantasy-crest-badge': (78, 78, 10), 'space-explorer-insignia': (81, 81, 11), 'mythic-rune-emblem': (87, 87, 13)}

def audit_one(slug, bounds, work, trimesh):
    source = ROOT / "printables" / f"{slug}.scad"
    stl = Path(work) / f"{slug}.stl"
    if not source.is_file():
        raise RuntimeError(f"Missing CAD source: {source}")
    run = subprocess.run(
        ["openscad", "-o", str(stl), str(source)],
        capture_output=True, text=True, timeout=240, check=False
    )
    if run.returncode or not stl.is_file() or stl.stat().st_size < 100:
        raise RuntimeError(f"OpenSCAD failed for {slug}: {run.stderr[-1200:]}")
    mesh = trimesh.load(stl, force="mesh", process=True)
    measured = [round(float(v), 3) for v in mesh.extents]
    connected = len(mesh.split(only_watertight=False))
    envelope_ok = all(abs(a-b) <= 0.5 for a,b in zip(measured,bounds))
    passed = bool(mesh.is_watertight and mesh.is_winding_consistent and
                  connected == 1 and mesh.volume > 0 and envelope_ok)
    return {
        "slug": slug, "declared_bounds_mm": list(bounds),
        "measured_bounds_mm": measured, "faces": int(len(mesh.faces)),
        "watertight": bool(mesh.is_watertight),
        "winding_consistent": bool(mesh.is_winding_consistent),
        "connected_components": connected,
        "positive_volume": bool(mesh.volume > 0),
        "envelope_tolerance_mm": 0.5,
        "sha256": hashlib.sha256(stl.read_bytes()).hexdigest(),
        "status": "geometry_pass_manual_review_required" if passed else "blocked"
    }

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--only", choices=tuple(EXPECTED))
    parser.add_argument("--output", type=Path,
                        default=Path("dist-print/refined-batch-03-audit.json"))
    args = parser.parse_args()
    if not shutil.which("openscad"):
        parser.error("OpenSCAD is required")
    try:
        import trimesh
    except ImportError:
        parser.error("Install trimesh (pip install trimesh)")
    records = []
    with tempfile.TemporaryDirectory(prefix="3d-worlds-batch03-") as work:
        for slug, bounds in EXPECTED.items():
            if args.only and slug != args.only:
                continue
            record = audit_one(slug, bounds, work, trimesh)
            records.append(record)
            print(slug, record["status"], record["measured_bounds_mm"],
                  "triangles", record["faces"])
    passed = sum(r["status"].startswith("geometry_pass") for r in records)
    report = {
        "scope": "overseas_print_commerce_batch_03",
        "certification": "geometry_only_not_slicer_or_physical_tested",
        "count": len(records), "passed": passed, "blocked": len(records)-passed,
        "models": records
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print("Report:", args.output, "passed:", passed, "/", len(records))
    return 0 if passed == len(records) else 1

if __name__ == "__main__":
    sys.exit(main())
