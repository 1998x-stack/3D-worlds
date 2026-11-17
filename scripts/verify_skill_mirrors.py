#!/usr/bin/env python3
"""Guard three self-contained Skill mirrors against drift and broken links."""
from __future__ import annotations

import hashlib
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
CLIENTS = (".codex", ".claude", ".pi")
NAME = "threejs-model-builder"
LINK = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")


def bundle(client: str) -> Path:
    return ROOT / client / "skills" / NAME


def files(path: Path) -> dict[str, bytes]:
    return {str(item.relative_to(path)): item.read_bytes()
            for item in path.rglob("*") if item.is_file()}


def main() -> int:
    errors = []
    canonical = bundle(CLIENTS[0])
    expected = files(canonical)
    if not expected:
        errors.append("Canonical Skill missing or empty")
    required = {"SKILL.md", "scripts/preflight.py",
                "references/EXTERNAL-SOURCES.md", "references/WORKFLOWS.md",
                "assets/model-brief.md", "assets/acceptance-report.md",
                "examples/procedural-furniture.md"}
    errors += [f"Canonical missing {name}" for name in sorted(required - expected.keys())]
    for client in CLIENTS:
        root = bundle(client)
        current = files(root)
        if current.keys() != expected.keys():
            errors.append(f"{client}: missing/extra resources {sorted(expected.keys() ^ current.keys())}")
        for name in expected.keys() & current.keys():
            if current[name] != expected[name]:
                errors.append(f"{client}/{name}: differs from canonical")
        for name, data in current.items():
            if not name.endswith(".md"):
                continue
            content = data.decode("utf-8")
            if name == "SKILL.md":
                if not content.startswith("---\n") or "\nname: threejs-model-builder\n" not in content or "\ndescription:" not in content:
                    errors.append(f"{client}: malformed skill frontmatter")
            for link in LINK.findall(content):
                if link.startswith(("https://", "http://", "#", "mailto:")):
                    continue
                rel = link.split("#", 1)[0].split("?", 1)[0]
                if not rel:
                    continue
                resolved = (root / name).parent.joinpath(rel).resolve()
                if not resolved.is_relative_to(root.resolve()):
                    errors.append(f"{client}/{name}: link escapes bundle: {link}")
                elif not resolved.is_file():
                    errors.append(f"{client}/{name}: broken local link: {link}")
    if errors:
        print("Skill package verification FAILED:")
        print("\n".join(" - " + item for item in errors), file=sys.stderr)
        return 1
    digest = hashlib.sha256(b"".join(expected[k] for k in sorted(expected))).hexdigest()[:16]
    print(f"PASS {len(expected)} identical files × {len(CLIENTS)} clients; bundle-sha256-prefix={digest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

