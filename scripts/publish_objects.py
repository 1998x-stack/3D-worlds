#!/usr/bin/env python3
"""Publish prevalidated content-addressed P1 GLB files to S3/MinIO or local store.

Explicit --apply required; never uploads on dry-run.
"""
from __future__ import annotations
import argparse
import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from services.storage import from_environment, checksum  # noqa: E402


def publish(index_path: Path, apply: bool = False) -> dict:
    index_path = Path(index_path).resolve()
    if not index_path.is_relative_to(ROOT):
        raise ValueError("Index path must be inside repository")
    data = json.loads(index_path.read_text(encoding="utf8"))
    if data.get("schema_version") != "1.0.0":
        raise ValueError("Unsupported published artifact manifest")
    pending = []
    for entry in data.get("entries", []):
        for variant in entry.get("variants", []):
            src = (ROOT / variant["path"]).resolve()
            if not src.is_relative_to((ROOT / "public" / "generated").resolve()) or src.suffix != ".glb":
                raise ValueError("Untrusted generated GLB path")
            if checksum(src) != variant["sha256"]:
                raise ValueError(f"SHA mismatch: {entry['asset_id']}")
            pending.append((src, variant["sha256"]))
    # Imported third-party GLBs use the same content-addressed store.
    catalog = json.loads((ROOT / "catalog" / "models.json").read_text(encoding="utf8"))
    for item in catalog.get("assets", []):
        if item.get("kind") != "glb":
            continue
        src = (ROOT / item["binary_path"]).resolve()
        if not src.is_relative_to((ROOT / "public" / "assets").resolve()):
            raise ValueError("Imported asset escapes public/assets")
        if checksum(src) != item.get("content_sha256"):
            raise ValueError("Imported asset checksum mismatch")
        pending.append((src, item["content_sha256"]))
    # Never resolve credentials or call external storage on dry-run.
    if apply:
        store = from_environment()
        for src, sha in pending:
            store.put_file(src, sha, "glb")
    return {"mode": "published" if apply else "dry-run",
            "objects": len(pending),
            "total_bytes": sum(source.stat().st_size for source, _ in pending)}


def main():
    parser = argparse.ArgumentParser(description="Publish optimized GLBs to content-addressed storage")
    parser.add_argument("--index", type=Path, default=ROOT / "public/generated/index.json")
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    print(json.dumps(publish(args.index, apply=args.apply), indent=2))


if __name__ == "__main__":
    main()
