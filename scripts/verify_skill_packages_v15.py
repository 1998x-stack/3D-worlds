#!/usr/bin/env python3
"""Verify v1.5 skill mirrors and all bundled offline structured-brief contracts."""
from pathlib import Path
import json
import re
import subprocess
import sys
ROOT=Path(__file__).resolve().parents[1]
CLIENTS=(".codex",".claude",".pi")
SKILLS=["market-intelligence","procedural-model-design","parametric-print-cad","assembly-world-systems","qa-and-release"]
REQ={"SKILL.md","references/CONTRACT.md","scripts/check.py","assets/brief.example.json"}

def main():
    errors=[]
    for name in SKILLS:
        original=ROOT/CLIENTS[0]/"skills"/name
        if not original.is_dir(): errors.append(f"missing canonical {name}"); continue
        files={str(p.relative_to(original)):p.read_bytes() for p in original.rglob("*") if p.is_file()}
        if not REQ <= files.keys(): errors.append(f"missing package resources {name}")
        skill=(original/"SKILL.md").read_text(encoding="utf-8")
        if not skill.startswith("---\n") or not re.search(r"(?m)^name: "+re.escape(name)+r"$",skill) or not re.search(r"(?m)^description: .+",skill):
            errors.append(f"invalid skill metadata {name}")
        for client in CLIENTS:
            base=ROOT/client/"skills"/name
            actual={str(p.relative_to(base)):p.read_bytes() for p in base.rglob("*") if p.is_file()} if base.exists() else {}
            if actual != files: errors.append(f"mirror drift {client}/{name}")
            for rel in ("references/CONTRACT.md","scripts/check.py","assets/brief.example.json"):
                if rel not in actual: errors.append(f"missing {client}/{name}/{rel}")
        result=subprocess.run([sys.executable,str(original/"scripts/check.py"),"--input",str(original/"assets/brief.example.json")],capture_output=True,text=True)
        if result.returncode: errors.append(f"invalid skill fixture {name}: {result.stderr.strip()}")
    if errors:
        print("\n".join("FAIL: "+m for m in errors),file=sys.stderr);return 1
    print(f"PASS: {len(SKILLS)} skill types, {len(CLIENTS)} identical clients, offline brief checks")
    return 0
if __name__=="__main__": raise SystemExit(main())
