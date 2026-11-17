#!/usr/bin/env python3
"""Inspect the ten refined CAD prototypes; never declares physical printability.

Requires OpenSCAD and trimesh. Uses STL millimeter bounds and mesh topology,
checks component count and emits a reproducible JSON QA report.
"""
import argparse
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

IDS = {
    'moon-phase-light-sleeve': (84,84,108),
    'aurora-wave-lantern': (87,87,112),
    'modular-pencil-caddy': (130,87,72),
    'cable-sort-desk-hub': (133,90,76),
    'paintbrush-workshop-rack': (136,93,80),
    'studio-tool-bin': (142,99,88),
    'trading-card-display': (116,106,93),
    'handheld-console-stand': (147,112,90),
    'ribbed-succulent-pot': (107,107,100),
    'propagation-vial-holder': (113,113,108),
}
ROOT=Path(__file__).resolve().parents[1]

def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output',type=Path,default=Path('dist-print/refined-batch-01-audit.json'))
    ap.add_argument('--only',choices=tuple(IDS),help='Audit a single SKU')
    args=ap.parse_args()
    if not shutil.which('openscad'):
        ap.error('OpenSCAD is required')
    try:
        import trimesh
    except ImportError:
        ap.error('Install trimesh (pip install trimesh) to audit topology')
    records=[]
    with tempfile.TemporaryDirectory(prefix='3d-worlds-refined-') as tmp:
        for slug,expected in IDS.items():
            if args.only and slug!=args.only: continue
            scad=ROOT/'printables'/f'{slug}.scad'
            stl=Path(tmp)/(slug+'.stl')
            result=subprocess.run(['openscad','-o',str(stl),str(scad)],text=True,
                                  capture_output=True,timeout=240,check=False)
            if result.returncode or not stl.exists():
                raise RuntimeError(f'CAD render failed {slug}: {result.stderr[-1600:]}')
            obj=trimesh.load(stl,force='mesh')
            extent=[round(float(x),2) for x in obj.extents]
            components=len(obj.split(only_watertight=False))
            expected_ok=all(abs(a-b)<=.5 for a,b in zip(extent,expected))
            ok=bool(obj.is_watertight and obj.is_winding_consistent and components==1 and
                    obj.volume>0 and expected_ok)
            records.append({'slug':slug,'declared_bounds_mm':list(expected),
                'measured_bounds_mm':extent,'faces':len(obj.faces),'watertight':bool(obj.is_watertight),
                'winding_consistent':bool(obj.is_winding_consistent),'connected_components':components,
                'envelope_tolerance_mm':.5,'status':'mesh_pass_manual_review_required' if ok else 'blocked'})
            print(slug,records[-1]['status'],extent,'faces',len(obj.faces))
    report={'status':'geometry_only_not_physical_or_slicer_verified','count':len(records),
            'passed':sum(r['status'].startswith('mesh_pass') for r in records),'models':records}
    args.output.parent.mkdir(parents=True,exist_ok=True)
    args.output.write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    print('Report:',args.output)
    return 0 if report['passed']==report['count'] else 1

if __name__=='__main__': sys.exit(main())
