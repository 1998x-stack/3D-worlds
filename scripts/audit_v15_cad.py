#!/usr/bin/env python3
"""Compile two original V1.5 CAD prototypes and audit STL geometry, not physical fitness."""
from __future__ import annotations
import argparse, hashlib, json, os, shutil, subprocess
from pathlib import Path
import numpy as np
import trimesh

ROOT=Path(__file__).resolve().parents[1]
SPECS={
    "camera-battery-organizer": (150.0,96.0,22.0),
    "label-front-parts-bin": (124.0,84.0,36.0),
}

def audit(output: Path) -> dict:
    exe=shutil.which("openscad")
    if not exe:
        raise RuntimeError("OpenSCAD required; missing compiler is not a passing audit")
    output.parent.mkdir(parents=True,exist_ok=True)
    dest=output.parent/"v15-cad-stl"
    dest.mkdir(parents=True,exist_ok=True)
    rows=[]
    for slug,dims in SPECS.items():
        source=ROOT/"printables"/"v15"/(slug+".scad")
        if not source.is_file():
            raise FileNotFoundError(source)
        target=dest/(slug+".stl")
        proc=subprocess.run([exe,"-o",str(target),str(source)],
            capture_output=True,text=True,timeout=180,env={**os.environ,"QT_QPA_PLATFORM":"offscreen"})
        if proc.returncode or not target.is_file():
            raise RuntimeError(f"CAD failed for {slug}: {proc.stderr[-1500:]}")
        mesh=trimesh.load_mesh(target,process=True)
        if not isinstance(mesh,trimesh.Trimesh):
            raise AssertionError(f"{slug}: expected single STL mesh")
        components=mesh.split(only_watertight=False)
        extents=mesh.extents
        if not mesh.is_watertight or not mesh.is_winding_consistent or len(components)!=1:
            raise AssertionError(f"{slug}: mesh is not one watertight, winding-consistent solid")
        if not mesh.volume > 0 or not np.allclose(extents,dims,atol=0.25) or abs(mesh.bounds[0,2])>0.25:
            raise AssertionError(f"{slug}: invalid volume / declared mm dimensions / ground contact")
        rows.append({"slug":slug,"file":str(target.relative_to(ROOT)),
                     "source_sha256":hashlib.sha256(source.read_bytes()).hexdigest(),
                     "stl_sha256":hashlib.sha256(target.read_bytes()).hexdigest(),
                     "faces":int(len(mesh.faces)),"connected_components":len(components),
                     "watertight":bool(mesh.is_watertight),
                     "winding_consistent":bool(mesh.is_winding_consistent),
                     "volume_mm3":float(mesh.volume),"extents_mm":[float(v) for v in extents],
                     "status":"cad_geometry_candidate_unverified"})
    result={"models_checked":len(rows),"manufacturing_certified":False,
            "sliced":False,"physically_printed":False,"models":rows}
    output.write_text(json.dumps(result,indent=2)+"\n",encoding="utf8")
    return result

if __name__=="__main__":
    ap=argparse.ArgumentParser()
    ap.add_argument("--output",type=Path,default=ROOT/".cache/print/v15-cad-audit.json")
    args=ap.parse_args()
    report=audit(args.output)
    print("V1.5 CAD geometry only:",report["models_checked"],"STL candidates; NOT print certified")
