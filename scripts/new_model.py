#!/usr/bin/env python3
"""Scaffold a primitive model and register it in the source-of-truth manifest.

Example:
  python scripts/new_model.py --slug side-table --category furniture \
    --title "Side Table" --title-zh "边桌" --dimensions 0.8 0.6 0.8
"""
from __future__ import annotations
import argparse
import json
import os
from pathlib import Path
import re
import tempfile

from catalog import MANIFEST, ROOT, CATEGORIES, IDENTIFIER, validate_manifest


def main() -> None:
    parser = argparse.ArgumentParser(description="Scaffold a Three.js model")
    parser.add_argument("--slug", required=True)
    parser.add_argument("--category", required=True, choices=sorted(CATEGORIES))
    parser.add_argument("--title", required=True)
    parser.add_argument("--title-zh", required=True)
    parser.add_argument("--dimensions", type=float, nargs=3, metavar=("W", "H", "D"),
                        default=[1.0, 1.0, 1.0])
    args = parser.parse_args()
    if not IDENTIFIER.fullmatch(args.slug) or "." in args.slug or "_" in args.slug:
        parser.error("slug must be lowercase kebab-case (letters, digits, hyphens)")
    if not all(0 < v < 10000 for v in args.dimensions):
        parser.error("dimensions must be positive numbers in meters")
    data = validate_manifest()
    asset_id = f"{args.category}.{args.slug}.001"
    if any(a["id"] == asset_id or a["slug"] == args.slug for a in data["assets"]):
        parser.error(f"Asset already exists: {asset_id}")
    filename = args.slug.replace("-", "_") + ".js"
    generator = "create" + "".join(token.capitalize() for token in args.slug.split("-"))
    path = ROOT / "src" / "models" / filename
    if path.exists():
        parser.error(f"Module already exists: {path}")
    width, height, depth = args.dimensions
    code = f"""import * as THREE from 'three';
import {{ box, mat }} from './primitives.js';

/** Editable prototype · origin on floor · meters · +Y up. */
export function {generator}() {{
  const root = new THREE.Group();
  root.name = {json.dumps(args.title, ensure_ascii=False)};
  const material = mat(0xb9a28c);
  box(root, 'main-body', [{width}, {height}, {depth}], [0, {height / 2}, 0], material);
  return root;
}}
"""
    item = {
        "id": asset_id,
        "slug": args.slug,
        "title": args.title,
        "title_zh": args.title_zh,
        "summary": f"Editable, original procedural blockout for {args.title}.",
        "category": args.category,
        "tags": [args.slug, args.category, "low-poly"],
        "generator": generator,
        "source_path": f"src/models/{filename}",
        "kind": "procedural",
        "license": "MIT",
        "author": "3D Worlds",
        "dimensions_m": [width, height, depth],
        "accent": "#c7d5d9",
        "style": "Parametric"
    }
    # Source module must exist before manifest validation.
    with path.open("x", encoding="utf-8") as handle:
        handle.write(code)
    try:
        data["assets"].append(item)
        fd, temp = tempfile.mkstemp(prefix=".models-", suffix=".json", dir=MANIFEST.parent)
        os.close(fd)
        try:
            Path(temp).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            validate_manifest(Path(temp))
            os.replace(temp, MANIFEST)
        finally:
            if os.path.exists(temp):
                os.unlink(temp)
    except BaseException:
        path.unlink(missing_ok=True)
        raise
    print(f"Created {item['id']} at {path.relative_to(ROOT)}")
    print("Edit geometry; then: python scripts/catalog.py build && npm run build")


if __name__ == "__main__":
    main()
