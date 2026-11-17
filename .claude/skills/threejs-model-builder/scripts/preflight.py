#!/usr/bin/env python3
"""Read-only checks for 3D Worlds Skill and its project wiring; stdlib only."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import sys

SKILL = Path(__file__).resolve().parent.parent
ROOT = SKILL.parents[2]  # /repo/.codex/skills/skill -> /repo
LINK = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
REQUIRED = (
    "SKILL.md",
    "references/WORKFLOWS.md",
    "references/MODEL-GEOMETRY.md",
    "references/TAXONOMY.md",
    "references/CATALOG-PROVENANCE.md",
    "references/GLB-INGESTION.md",
    "references/RENDER-LOD.md",
    "references/PUBLISH-MCP.md",
    "references/QA-TROUBLESHOOTING.md",
    "references/EXTERNAL-SOURCES.md",
    "assets/model-brief.md",
    "assets/acceptance-report.md",
    "assets/import-batch.example.json",
    "assets/recipe-example.js",
    "examples/procedural-furniture.md",
    "examples/imported-glb.md",
    "scripts/preflight.py",
)
PROJECT = ("AGENTS.md", "catalog/models.json", "catalog/categories.json",
           "scripts/catalog.py", "scripts/new_model.py", "scripts/validate_models.mjs",
           "scripts/ingest_glb.mjs", "scripts/optimize_assets.mjs",
           "scripts/render_assets.mjs", "scripts/verify_generated.mjs",
           "src/models/recipe_engine.js", "package.json")


def check() -> dict:
    problems = []
    for path in REQUIRED:
        if not (SKILL / path).is_file():
            problems.append("Missing Skill resource: " + path)
    for path in PROJECT:
        if not (ROOT / path).is_file():
            problems.append("Missing expected project path: " + path)
    for md in SKILL.rglob("*.md"):
        content = md.read_text(encoding="utf-8")
        for link in LINK.findall(content):
            if link.startswith(("https://", "http://", "#", "mailto:")):
                continue
            target = link.split("#", 1)[0].split("?", 1)[0]
            if not target:
                continue
            resolved = (md.parent / target).resolve()
            if not resolved.is_relative_to(SKILL):
                problems.append(f"Skill link escapes its portable package: {md.relative_to(SKILL)} -> {link}")
            elif not resolved.is_file():
                problems.append(f"Broken Skill link: {md.relative_to(SKILL)} -> {link}")
    try:
        manifest = json.loads((ROOT / "catalog/models.json").read_text(encoding="utf-8"))
        cats = json.loads((ROOT / "catalog/categories.json").read_text(encoding="utf-8"))
        assets = manifest["assets"]
        names = {x["id"] for x in cats["categories"]}
        ids = [a["id"] for a in assets]
        slugs = [a["slug"] for a in assets]
        if len(ids) != len(set(ids)) or len(slugs) != len(set(slugs)):
            problems.append("Duplicate catalog ID or slug")
        invalid = [a["id"] for a in assets if a["category"] not in names]
        if invalid:
            problems.append("Unknown category in catalog: " + ", ".join(invalid[:10]))
    except (KeyError, OSError, json.JSONDecodeError, TypeError) as error:
        problems.append("Catalog could not be parsed: " + str(error))
        assets = []
        names = set()
    return {"ok": not problems, "skill_root": str(SKILL.relative_to(ROOT)),
            "resources": len(REQUIRED), "categories": len(names),
            "assets": len(assets), "issues": problems}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--json", action="store_true", help="Print machine-readable result")
    args = parser.parse_args()
    report = check()
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(("PASS" if report["ok"] else "FAIL"), report["skill_root"],
              "resources=", report["resources"], "categories=", report["categories"],
              "assets=", report["assets"])
        for issue in report["issues"]:
            print(" -", issue, file=sys.stderr)
    return 0 if report["ok"] else 1


if __name__ == "__main__":
    raise SystemExit(main())

