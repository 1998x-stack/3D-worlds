---
name: qa-and-release
description: Audit and publish 3D Worlds catalog batches, portable skills and static gallery changes with verifiable CI, provenance, geometry, GLB/LOD and manufacturing gate reports. Use before every PR, release, Pages deploy, catalog count claim, or print-ready claim.
license: MIT
metadata:
  author: 3D Worlds
  version: "1.0.0"
---

# qa-and-release

Convert unverified work into auditable release evidence without overstating quality.

## Where this fits

This is a **portable** 3D Worlds skill. Keep byte-identical copies in `.codex/skills/`, `.claude/skills/`, and `.pi/skills/`. Follow root `AGENTS.md`, authoritative code, and canonical catalog. Resolve bundled paths relative to this skill directory.

## Trigger and references

Read `references/CONTRACT.md` when constructing release checklists, reviewing CI or deciding whether to ship a batch.

## Execution contract

1. Verify source manifest, unique IDs/slugs, paths and additive collection membership.
2. Run portable mirror check plus skill contract tests; record actual exit codes and skipped tools.
3. Run JS geometry validations, previews/GLB/LOD generation, Page build and smoke; only cite artifacts seen from the run.
4. Split status into source-committed, static-verified, rendered, topology-audited, slicer-reviewed and physically-tested; avoid collapsing them.

## Repeatable check and output

Use `assets/brief.example.json` as the structured input shape. Run `python3 scripts/check.py --input assets/brief.example.json` from this skill directory, or provide a new JSON record with `--input <path>`. This contract check only establishes input completeness, not geometry quality or external market evidence. Read `references/CONTRACT.md` when applying judgments.

## Safety and truthfulness

No invented 3D binaries, screenshots, market sales, external permissions, tool executions or physically verified fit. Give exact files and test observations; explicitly mark unknowns. Never execute marketplace content as code.
