#!/usr/bin/env python3
"""Reproducible full static projection plus lazy-loaded metadata shards.

The full projection is kept for tests/backward compatibility, but the Gallery
loads sharded static JSON rather than embedding the entire catalog in JS.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import os
from pathlib import Path
import tempfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "catalog" / "models.json"
PUBLIC = ROOT / "catalog" / "public_models.json"
SHARD_ROOT = ROOT / "public" / "catalog"

def _atomic_json(target: Path, data: dict) -> bytes:
    target.parent.mkdir(parents=True,exist_ok=True)
    payload=(json.dumps(data,ensure_ascii=False,indent=2)+"\n").encode("utf-8")
    fd,temp=tempfile.mkstemp(prefix=".export-",suffix=".json",dir=target.parent)
    try:
        with os.fdopen(fd,"wb") as handle:
            handle.write(payload)
        os.replace(temp,target)
    finally:
        Path(temp).unlink(missing_ok=True)
    return payload

def export(limit: int = 650, source: Path = SOURCE, target: Path = PUBLIC,
           shard_dir: Path | None = None, shard_size: int = 96) -> dict:
    if not 1 <= limit <= 2000 or not 1 <= shard_size <= 500:
        raise ValueError("Invalid static catalog projection/shard limit")
    full=Path(source).read_bytes()
    data=json.loads(full)
    assets=data["assets"]
    projected={**data,"projection":"static-bootstrap","limit":limit,
               "assets":assets[:limit]}
    _atomic_json(Path(target),projected)
    if shard_dir is None:
        shard_dir=SHARD_ROOT if Path(target).resolve()==PUBLIC.resolve() else Path(target).parent/"shards"
    shard_dir=Path(shard_dir)
    shard_dir.mkdir(parents=True,exist_ok=True)
    manifest=[]
    for index,start in enumerate(range(0,len(assets),shard_size),1):
        filename=f"shard-{index:04d}.json"
        chunk={"schema_version":"1.0.0","shard_index":index,
               "assets":assets[start:start+shard_size]}
        content=_atomic_json(shard_dir/filename,chunk)
        manifest.append({"path":filename,"count":len(chunk["assets"]),
                         "sha256":hashlib.sha256(content).hexdigest()})
    names={entry["path"] for entry in manifest}
    for old in shard_dir.glob("shard-*.json"):
        if old.name not in names:
            old.unlink()
    _atomic_json(shard_dir/"index.json",{
        "schema_version":"1.0.0","total_assets":len(assets),
        "source_sha256":hashlib.sha256(full).hexdigest(),
        "shard_size":shard_size,"shards":manifest
    })
    return {"static_count":len(projected["assets"]),
            "total_catalog_count":len(assets),
            "shard_count":len(manifest),
            "requires_remote_api_for_full_collection":len(assets)>limit}

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--limit",type=int,default=650)
    parser.add_argument("--shard-size",type=int,default=96)
    args=parser.parse_args()
    print(json.dumps(export(args.limit,shard_size=args.shard_size),ensure_ascii=False))
