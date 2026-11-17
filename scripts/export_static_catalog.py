#!/usr/bin/env python3
"""Bounded static Gallery projection; prevents shipping 50k catalog records in Vite JS.

Full catalog stays in catalog/models.json and SQLite; API mode queries all.
"""
from __future__ import annotations
import argparse
import json
import os
from pathlib import Path
import tempfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "catalog" / "models.json"
PUBLIC = ROOT / "catalog" / "public_models.json"


def export(limit: int = 600, source: Path = SOURCE, target: Path = PUBLIC) -> dict:
    if limit < 1 or limit > 2000:
        raise ValueError("Static Gallery projection limit must be 1..2000")
    data = json.loads(Path(source).read_text(encoding="utf8"))
    output = {**data, "projection": "static-bootstrap", "limit": limit,
              "assets": data["assets"][:limit]}
    target.parent.mkdir(parents=True, exist_ok=True)
    fd, temp = tempfile.mkstemp(prefix=".static-models-",suffix=".json",dir=target.parent)
    os.close(fd)
    try:
        Path(temp).write_text(json.dumps(output,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
        os.replace(temp,target)
    finally:
        Path(temp).unlink(missing_ok=True)
    return {"static_count": len(output["assets"]), "total_catalog_count": len(data["assets"]),
            "requires_remote_api_for_full_collection":len(data["assets"])>limit}


if __name__ == "__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--limit",type=int,default=600)
    args=parser.parse_args()
    print(json.dumps(export(args.limit),ensure_ascii=False))
