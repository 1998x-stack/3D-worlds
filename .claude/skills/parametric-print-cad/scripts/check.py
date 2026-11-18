#!/usr/bin/env python3
"""Offline structured brief gate for the parametric-print-cad skill; NOT a model/sales certification."""
import argparse
import json
from pathlib import Path
import sys

REQUIRED = ["slug","cad_path","units","material_assumption","dimensions_mm","stage","unverified"]

def check(payload):
    errors = []
    if not isinstance(payload, dict):
        return ["Input must be a JSON object"]
    for key in REQUIRED:
        if key not in payload or payload[key] is None or payload[key] == "" or payload[key] == []:
            errors.append("missing/empty: " + key)
    if "dimensions_m" in payload:
        ds = payload["dimensions_m"]
        if not isinstance(ds, list) or len(ds) != 3 or any(type(v) not in (float,int) or v <= 0 for v in ds):
            errors.append("dimensions_m requires three positive numbers")
    if "dimensions_mm" in payload:
        ds = payload["dimensions_mm"]
        if not isinstance(ds, list) or len(ds) != 3 or any(type(v) not in (float,int) or v <= 0 for v in ds):
            errors.append("dimensions_mm requires three positive numbers")
    if "source_signals" in payload:
        for i, signal in enumerate(payload["source_signals"]):
            if not isinstance(signal,dict) or not str(signal.get("url","")).startswith("https://") or not signal.get("observed_on") or not signal.get("observation"):
                errors.append("source_signals[%d] missing URL/date/observation" % i)
    if "joints" in payload:
        ids={part.get("id") for part in payload.get("parts",[]) if isinstance(part,dict)}
        if payload.get("root_part") not in ids: errors.append("root_part missing from parts")
        for j in payload["joints"]:
            if j.get("a") not in ids or j.get("b") not in ids: errors.append("joint has missing part endpoint")
            axis=j.get("axis")
            if axis is not None and (not isinstance(axis,list) or len(axis)!=3 or sum(v*v for v in axis)<1e-12):
                errors.append("invalid joint axis")
    return errors

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--input",type=Path,default=Path(__file__).resolve().parents[1]/"assets"/"brief.example.json")
    args=parser.parse_args()
    try: payload=json.loads(args.input.read_text(encoding="utf-8"))
    except (OSError,ValueError) as exc: print("FAIL:",exc,file=sys.stderr); return 2
    errors=check(payload)
    if errors: print("\n".join("FAIL: "+e for e in errors),file=sys.stderr); return 1
    print("PASS: parametric-print-cad structured brief contract (not production verification)")
    return 0

if __name__=="__main__":
    raise SystemExit(main())
