#!/usr/bin/env python3
"""Verify 20 overseas print-commerce CAD source meshes (topology, bounds, connectedness).

This audit is geometry-only, not strength, fit, slicer or market certification.
Run after installing OpenSCAD and trimesh. All CAD source dimensions are mm / Z-up.
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
EXPECTED = {
    'geometric-star-lightbox': (90, 90, 116),
    'forest-shadow-lantern': (93, 93, 120),
    'minimal-arch-nightlight': (96, 96, 124),
    'cloud-whale-totem': (92, 80, 125),
    'sleepy-owl-guardian': (95, 83, 129),
    'alpine-cabin-miniature': (136, 93, 79),
    'retro-station-platform': (142, 99, 87),
    'craft-spool-organizer': (139, 96, 84),
    'watch-display-cradle': (113, 103, 89),
    'miniature-tiered-riser': (119, 109, 97),
    'universal-controller-cradle': (135, 100, 74),
    'tabletop-dice-tray': (141, 106, 82),
    'boardgame-token-sorter': (144, 109, 86),
    'arc-earring-display': (112, 82, 99),
    'ring-cone-tower': (115, 85, 103),
    'geo-cactus-planter': (110, 110, 104),
    'custom-desk-nameplate': (135, 67, 9),
    'house-number-plaque': (145, 71, 11),
    'celestial-guild-medallion': (75, 75, 9),
    'alchemist-costume-brooch': (84, 84, 12),
}


def audit_one(slug, expected, temp_dir, trimesh):
    src = ROOT / 'printables' / f'{slug}.scad'
    stl = Path(temp_dir) / f'{slug}.stl'
    if not src.is_file():
        raise RuntimeError(f'Missing CAD source: {src}')
    run = subprocess.run(['openscad', '-o', str(stl), str(src)],
                         capture_output=True, text=True, timeout=180, check=False)
    if run.returncode != 0 or not stl.is_file() or stl.stat().st_size < 100:
        raise RuntimeError(f'OpenSCAD render failed ({slug}): {run.stderr[-800:]}')
    mesh = trimesh.load(stl, force='mesh', process=True)
    extent = [round(float(value), 3) for value in mesh.extents]
    pieces = len(mesh.split(only_watertight=False))
    bounds_match = all(abs(actual - nominal) <= 0.5 for actual, nominal in zip(extent, expected))
    good = all((mesh.is_watertight, mesh.is_winding_consistent, pieces == 1,
                mesh.volume > 0, bounds_match))
    return {
        'slug': slug, 'declared_bounds_mm': list(expected), 'measured_bounds_mm': extent,
        'bounds_within_half_mm': bool(bounds_match),
        'watertight': bool(mesh.is_watertight),
        'winding_consistent': bool(mesh.is_winding_consistent),
        'connected_components': pieces,
        'positive_signed_volume': bool(mesh.volume > 0),
        'faces': int(len(mesh.faces)),
        'sha256': hashlib.sha256(stl.read_bytes()).hexdigest(),
        'status': 'geometry_pass_manual_review_required' if good else 'blocked',
    }


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--only', choices=list(EXPECTED))
    ap.add_argument('--output', type=Path,
                    default=Path('dist-print/refined-batch-02-audit.json'))
    args = ap.parse_args()
    if not shutil.which('openscad'):
        ap.error('Install OpenSCAD on PATH before this geometry-only audit')
    try:
        import trimesh
    except ImportError:
        ap.error('Install Python trimesh to audit mesh topology')
    records = []
    with tempfile.TemporaryDirectory(prefix='three-d-worlds-b02-') as work:
        for slug, expected in EXPECTED.items():
            if args.only and slug != args.only:
                continue
            record = audit_one(slug, expected, work, trimesh)
            records.append(record)
            print(slug, record['status'], record['measured_bounds_mm'],
                  'triangles', record['faces'])
    passed = sum(record['status'].startswith('geometry_pass') for record in records)
    report = {
        'scope': 'batch_02_geometry_only',
        'certification': 'not_slicer_reviewed_not_physically_print_verified',
        'count': len(records), 'passed': passed, 'blocked': len(records)-passed,
        'models': records,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print('Report:', args.output, 'passed:', passed, '/', len(records))
    return 0 if passed == len(records) else 1


if __name__ == '__main__':
    sys.exit(main())
