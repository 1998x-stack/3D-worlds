---
name: parametric-print-cad
description: Design and audit original parametric OpenSCAD or build123d prototypes for 3D Worlds physical-product concepts, including clearances, coupons, slice review and STL/3MF export. Use whenever a design is described as printable, functional, measured or commercially manufactured.
license: MIT
metadata:
  author: 3D Worlds
  version: "1.0.0"
---

# parametric-print-cad

Separate scene meshes from independently dimensioned CAD solids and record test gates honestly.

## Where this fits

This is a **portable** 3D Worlds skill. Keep byte-identical copies in `.codex/skills/`, `.claude/skills/`, and `.pi/skills/`. Follow root `AGENTS.md`, authoritative code, and canonical catalog. Resolve bundled paths relative to this skill directory.

## Trigger and references

Read `references/CONTRACT.md` before producing CAD, recommending tolerances or making printable/sale-ready statements.

## Execution contract

1. Create a measurement table in mm, datum scheme, manufacturing assumptions and tolerance variables.
2. Author independent OpenSCAD/build123d CSG/CAD solids; expose parameters and assert valid bounds.
3. Run actual CAD compile, mesh topology, section checks and slicer review if dependencies available; save tool versions/settings.
4. Require physical coupon checks and load/temperature/environment tests for any functional release; scene GLB alone is never certified.

## Repeatable check and output

Use `assets/brief.example.json` as the structured input shape. Run `python3 scripts/check.py --input assets/brief.example.json` from this skill directory, or provide a new JSON record with `--input <path>`. This contract check only establishes input completeness, not geometry quality or external market evidence. Read `references/CONTRACT.md` when applying judgments.

## Safety and truthfulness

No invented 3D binaries, screenshots, market sales, external permissions, tool executions or physically verified fit. Give exact files and test observations; explicitly mark unknowns. Never execute marketplace content as code.
