#!/usr/bin/env python3
"""Generate manufacturing-prototype STL/3MF from 50 original OpenSCAD sources.

This only checks CAD export success; it is NOT slicer, strength or product compliance QA.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
COLLECTION = ROOT / "catalog/collections/print-commerce-v13.json"

def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--format", choices=("stl", "3mf"), default="stl")
    ap.add_argument("--only", help="one model slug from the collection")
    ap.add_argument("--limit", type=int, default=50)
    ap.add_argument("--out", type=Path, default=ROOT/"dist-print")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    items = json.loads(COLLECTION.read_text(encoding="utf8"))["assets"]
    if args.limit < 1 or args.limit > 50:
        ap.error("--limit must be in 1..50")
    if args.only:
        items = [x for x in items if x["slug"] == args.only]
        if not items:
            ap.error("unknown slug")
    else:
        items = items[:args.limit]
    exe = shutil.which("openscad")
    if not exe and not args.dry_run:
        sys.exit("OpenSCAD missing: install OpenSCAD and add openscad to PATH")
    args.out.mkdir(parents=True,exist_ok=True)
    report = {"format":args.format, "status":"exported_not_print_verified", "models":[]}
    for a in items:
        src = ROOT/a["cad_path"]
        if not src.is_file() or not src.resolve().is_relative_to((ROOT/"printables").resolve()):
            raise ValueError("Unsafe/missing CAD source: "+str(src))
        target = args.out/(a["slug"]+"."+args.format)
        cmd = [exe or "openscad", "-o", str(target), str(src)]
        if args.dry_run:
            print("DRY-RUN", " ".join(cmd))
            continue
        run = subprocess.run(cmd,text=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,
                             timeout=240,check=False)
        if run.returncode:
            print(run.stderr[-2500:],file=sys.stderr)
            raise RuntimeError(f"OpenSCAD export failed for {a['slug']}: {run.returncode}")
        if not target.is_file() or target.stat().st_size < 100:
            raise RuntimeError(f"CAD export empty or invalid-size: {a['slug']}")
        data=target.read_bytes()
        report["models"].append({"slug":a["slug"],"format":args.format,
            "file":target.name,"bytes":len(data),
            "sha256":hashlib.sha256(data).hexdigest(),"status":"mesh_exported_unverified"})
        print("EXPORTED", a["slug"], len(data), "bytes")
    if not args.dry_run:
        (args.out/"report.json").write_text(json.dumps(report,indent=2)+"\n",encoding="utf8")
        print("EXPORTED",len(report["models"]),"CAD meshes to",args.out)
if __name__=="__main__":
    main()
