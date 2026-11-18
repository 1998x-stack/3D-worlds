#!/usr/bin/env python3
"""Measured CAD STL cross sections and optional *offline* slicer toolpaths.

No physical printing, G-code transmission, or approval is performed. This
checks deliberate model-space geometry, not real printer tolerances.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path
import re
import shutil
import subprocess
import sys

import numpy as np
import trimesh

ROOT = Path(__file__).resolve().parents[1]
PILOTS = {
    "clip_on_soap_drainage_bridge": "bathroom.clip-on-soap-drainage-bridge.001",
    "hex_driver_bit_index_dock": "tools.hex-driver-bit-index-dock.001",
}
# Expected actual mm bounds, including the revised +Y rear-open lip cradle.
GEOMETRY_BOUNDS = {
    "clip_on_soap_drainage_bridge": {"body": [128., 99.8, 28.], "coupon": [82., 25.8, 28.]},
    "hex_driver_bit_index_dock": {"body": [108., 108., 18.], "coupon": [74., 26., 10.]},
}


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def scan_intervals(mesh: trimesh.Trimesh, *, plane_axis: int,
                   plane_value: float, line_axis: int, line_value: float,
                   measure_axis: int) -> list[tuple[float, float]]:
    """Independent STL/triangle planar cut: measure occupied 1D intervals.

    The plane intersects triangles into line segments; the test line cuts
    those into sorted even/odd interior spans. This is a verified 2D *CAD
    cross-section*, NOT global minimum thickness or real-world fit.
    """
    if len({plane_axis, line_axis, measure_axis}) != 3:
        raise ValueError("Section axes must be distinct")
    normal = np.eye(3)[plane_axis]
    origin = np.zeros(3)
    origin[plane_axis] = plane_value
    segments = trimesh.intersections.mesh_plane(mesh, plane_normal=normal,
                                                 plane_origin=origin)
    # Triangle diagonal vertices may fall exactly on the queried line and
    # appear on opposite sides by roundoff (~1e-15). Retry a tiny shift,
    # far below our 0.065 mm geometry measurement tolerance.
    last_count = 0
    for probe in (line_value, line_value+1.e-5, line_value-1.e-5):
        crossings = []
        for line in segments:
            t0, t1 = line[:, line_axis]
            if abs(t0-t1) <= 1.e-8 or not min(t0,t1) <= probe < max(t0,t1):
                continue
            mix=(probe-t0)/(t1-t0)
            x=line[0,measure_axis]+mix*(line[1,measure_axis]-line[0,measure_axis])
            if not math.isfinite(x):
                raise ValueError("Non-finite STL plane intersection")
            crossings.append(float(x))
        crossings.sort()
        unique=[]
        for x in crossings:
            if not unique or abs(unique[-1]-x)>1.e-4:
                unique.append(x)
        if unique and len(unique)%2==0:
            return [(unique[i],unique[i+1]) for i in range(0,len(unique),2)]
        last_count=len(unique)
    raise ValueError(f"STL section has odd/empty intersection count: {last_count}")


def between_gaps(intervals):
    return [intervals[i+1][0]-intervals[i][1]
            for i in range(len(intervals)-1)]


def require_widths(actual, expected, *, tol=0.065, label="cross-section"):
    if len(actual) != len(expected):
        raise ValueError(f"{label}: {len(actual)} spans instead of {len(expected)}")
    if any(abs(got-want)>tol for got,want in zip(actual,expected)):
        raise ValueError(f"{label}: measured={actual}, expected={expected}, tol={tol}")
    return [round(float(n),4) for n in actual]


def measure_body_and_coupon(slug: str, mode: str,
                            mesh: trimesh.Trimesh) -> dict:
    size = mesh.extents.tolist()
    require_widths(size,GEOMETRY_BOUNDS[slug][mode],tol=.11,
                   label=f"{slug}/{mode} envelope")
    components=len(mesh.split(only_watertight=False))
    if not (mesh.is_watertight and mesh.is_winding_consistent
            and mesh.volume>0 and components==1 and mesh.bounds[0,2]>=-1.e-4):
        raise ValueError(f"{slug}/{mode} nonmanifold, disjoint, negative-Z or invalid volume")
    cut = {}
    if slug == "clip_on_soap_drainage_bridge":
        if mode == "body":
            # Z=2mm cuts through all 9 drainage openings; Y=0 hits slot centers.
            slots = scan_intervals(mesh,plane_axis=2,plane_value=2,
                                   line_axis=1,line_value=0,measure_axis=0)
            if len(slots)!=10:
                raise ValueError("Expected 9 genuinely through-slotted openings")
            cut["through_drain_slot_widths_mm"] = require_widths(
                between_gaps(slots),[4.8]*9,label="through-slot widths")
            cut["material_web_widths_mm"] = require_widths(
                [b-a for a,b in slots[1:-1]],[6.2]*8,label="drainage webs")
            # Y=50 is past the solid back web, so these are REAL facing jaws.
            cuts = [scan_intervals(mesh,plane_axis=1,plane_value=50,
                                   line_axis=0,line_value=x,measure_axis=2)
                    for x in [-42,42]]
            if any(len(c)!=2 for c in cuts):
                raise ValueError("Lateral clip opening is not a side-entry C")
            gaps=[c[1][0]-c[0][1] for c in cuts]
            cut["side_entry_lip_gaps_mm"] = require_widths(
                gaps,[14.4,14.4],label="rear-open C clearance")
            cut["lower_jaw_thicknesses_mm"] = require_widths(
                [c[0][1]-c[0][0] for c in cuts],[4,4],label="lower jaw")
            cut["upper_jaw_thicknesses_mm"] = require_widths(
                [c[1][1]-c[1][0] for c in cuts],[4,4],label="upper jaw")
        else:
            cuts=[scan_intervals(mesh,plane_axis=1,plane_value=5,
                                 line_axis=0,line_value=x,measure_axis=2)
                  for x in [-28,0,28]]
            if any(len(c)!=2 for c in cuts):
                raise ValueError("Three soap clearance coupons must be open-sided")
            cut["coupon_clearances_over_unmeasured_14mm_lip_mm"]=require_widths(
                [c[1][0]-c[0][1]-14 for c in cuts],
                [.2,.4,.6],label="soap clip 3-coupon gap sweep")
    else:
        if mode == "body":
            # Four holes along Y=-30 at Z=12, below top-mouth chamfer.
            cutlines=scan_intervals(mesh,plane_axis=2,plane_value=12,
                                    line_axis=1,line_value=-30,measure_axis=0)
            if len(cutlines)!=5:
                raise ValueError("Expected 4 genuinely empty hex wells")
            cut["blind_hex_socket_across_flats_mm"]=require_widths(
                between_gaps(cutlines),[6.85]*4,label="dimensioned hex hole AF")
            floor=scan_intervals(mesh,plane_axis=1,plane_value=-30,
                                 line_axis=0,line_value=-30,measure_axis=2)
            if len(floor)!=1:
                raise ValueError("Hex blind pocket missing solid 6mm base")
            cut["actual_bottom_floor_thickness_mm"]=require_widths(
                [floor[0][1]-floor[0][0]],[6.],label="pocket floor")
        else:
            cutlines=scan_intervals(mesh,plane_axis=2,plane_value=8,
                                    line_axis=1,line_value=0,measure_axis=0)
            if len(cutlines)!=6:
                raise ValueError("Three hex clearance coupons not present")
            gaps=between_gaps(cutlines)
            cut["coupon_hex_across_flats_mm"]=require_widths(
                [gaps[i] for i in (0,2,4)],
                [6.65,6.85,7.15],label="hex calibration test pockets")
            floor=[scan_intervals(mesh,plane_axis=1,plane_value=0,
                                  line_axis=0,line_value=x,measure_axis=2)
                   for x in [-23,0,23]]
            cut["coupon_floor_thickness_mm"]=require_widths(
                [c[0][1]-c[0][0] for c in floor],[6,6,6],label="coupon floors")
    return {
        "status":"cad_cross_sections_pass_manual_review_required",
        "dimensions_mm":[round(v,3) for v in size],
        "triangles":int(len(mesh.faces)),
        "solid_components":components,
        "watertight":True,
        "actual_stl_section_measurements":cut,
        "global_minimum_wall_thickness":"not_measured",
        "slicer_human_review":"not_done",
        "measured_on_physical_part":False,
        "structural_strength":"not_tested",
    }


def compile_openscad(source:Path, output:Path, mode:str,
                     defines:list[str]|None=None)->None:
    output.unlink(missing_ok=True)
    cmd=["openscad","-o",str(output),"-D",f'mode="{mode}"']
    for define in defines or []:
        cmd.extend(["-D",define])
    result=subprocess.run(cmd+[str(source)],capture_output=True,text=True,timeout=300)
    if result.returncode!=0 or not output.is_file() or not output.stat().st_size:
        raise RuntimeError(f"OpenSCAD {source.name}/{mode} failed: " + result.stderr[-700:])


def slice_offline(stl:Path, output:Path)->dict:
    output.unlink(missing_ok=True)
    slicer = shutil.which("prusa-slicer") or shutil.which("slic3r")
    if slicer is None:
        raise RuntimeError("No offline PrusaSlicer or Slic3r available")
    cmd=[slicer,"--export-gcode", "--layer-height","0.2",
         "--perimeters","3", "--nozzle-diameter","0.4",
         "--filament-diameter","1.75", "--fill-density","20%",
         "--output",str(output),str(stl)]
    result=subprocess.run(cmd,capture_output=True,text=True,timeout=300)
    if result.returncode or not output.is_file():
        raise RuntimeError(f"Offline slicer could not process {stl.name}: " +
                           (result.stderr+result.stdout)[-700:])
    gcode=output.read_text(encoding="utf-8",errors="replace")
    extrusion=sum(1 for line in gcode.splitlines()
                  if line.startswith("G1 ") and "E" in line and
                  ("X" in line or "Y" in line))
    zset=set()
    for line in gcode.splitlines():
        if re.match(r"^G[01]\s",line):
            m=re.search(r"(?:^|\s)Z(-?\d+(?:\.\d+)?)",line)
            if m: zset.add(round(float(m.group(1)),3))
    if len(gcode)<3000 or extrusion<40 or len(zset)<6:
        raise ValueError(f"No useful toolpath: E moves={extrusion}, Z levels={len(zset)}")
    return {
        "status":"offline_gcode_generated_not_human_approved",
        "slicer":Path(slicer).name+" CLI; settings are illustrative not printer-qualified",
        "slicer_extruding_moves":extrusion,
        "observed_distinct_z_moves":len(zset),
        "toolpath_sha256":sha256(output),
        "gcode_bytes":output.stat().st_size,
        "physical_printer_connected":False,
        "human_layer_review":"not_done",
        "physical_print":"not_performed",
    }


def run_audit(*,root:Path=ROOT,output:Path,
              with_slicer:bool=False)->dict:
    if not shutil.which("openscad"):
        raise RuntimeError("Missing OpenSCAD CLI")
    if with_slicer and not (shutil.which("prusa-slicer") or shutil.which("slic3r")):
        raise RuntimeError("Missing offline PrusaSlicer/Slic3r CLI: no simulated slicer success")
    output.parent.mkdir(parents=True,exist_ok=True)
    stems=output.parent/"cad-fit-stl";stems.mkdir(exist_ok=True)
    toolpaths=output.parent/"cad-fit-toolpaths";toolpaths.mkdir(exist_ok=True)
    cases=[]
    for slug,asset in PILOTS.items():
        source=root/"printables"/"v14"/(slug+".scad")
        for mode in ["body","coupon"]:
            stl=stems/(slug+"-"+mode+".stl")
            compile_openscad(source,stl,mode)
            mesh=trimesh.load(stl,force="mesh",process=True)
            actual=measure_body_and_coupon(slug,mode,mesh)
            actual.update(asset_id=asset,mode=mode,
                          cad_source_sha256=sha256(source),
                          stl_sha256=sha256(stl),
                          stl_relative_path=str(stl.relative_to(output.parent)))
            if with_slicer:
                actual["offline_slicer"]=slice_offline(
                    stl,toolpaths/(slug+"-"+mode+".gcode"))
            else:
                actual["offline_slicer"]={"status":"not_run"}
            cases.append(actual)
    return {
        "schema_version":"1.0.0",
        "run_scope":"2 separate CAD designs / 2 body solids + 2 fit coupons",
        "models":2,
        "inspected_stls":len(cases),
        "cross_section_pass_count":sum(x["status"].startswith("cad_cross_") for x in cases),
        "offline_slicing_performed":with_slicer,
        "slicer_toolpaths_produced":sum(x["offline_slicer"]["status"].startswith("offline_gcode_")
                                         for x in cases),
        "physical_prints":0,
        "human_slicer_reviews":0,
        "commercial_certifications":0,
        "cases":cases,
    }


def main(argv=None)->int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output",type=Path,default=ROOT/".cache/print/v14-cad-fit-sections.json")
    parser.add_argument("--with-slicer",action="store_true")
    args=parser.parse_args(argv)
    try:
        result=run_audit(output=args.output,with_slicer=args.with_slicer)
        args.output.write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
        print(json.dumps({"report":str(args.output),"sections":result["cross_section_pass_count"],
                          "toolpaths":result["slicer_toolpaths_produced"],"physical_prints":0}))
    except (OSError,RuntimeError,ValueError) as exc:
        parser.error(str(exc))
    return 0


if __name__=="__main__":
    sys.exit(main())
