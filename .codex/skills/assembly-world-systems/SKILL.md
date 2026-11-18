---
name: assembly-world-systems
description: Architect extensible 3D Worlds mechanical assemblies and physical-world systems, including vehicles, aircraft, buildings, kinematics, joints, connectors and collision verification. Use whenever adding multi-part systems, AI assembly graphs, articulated assets or complex world hierarchies.
license: MIT
metadata:
  author: 3D Worlds
  version: "1.0.0"
---

# assembly-world-systems

Define mechanically coherent editable assemblies and machine-checkable attachment and constraint graphs before claiming motion feasibility.

## Where this fits

This is a **portable** 3D Worlds skill. Keep byte-identical copies in `.codex/skills/`, `.claude/skills/`, and `.pi/skills/`. Follow root `AGENTS.md`, authoritative code, and canonical catalog. Resolve bundled paths relative to this skill directory.

## Trigger and references

Read `references/CONTRACT.md` for coordinate frames, component inventory, graph constraints and the staged proof hierarchy.

## Execution contract

1. Assign stable part UUID-like IDs, local coordinate frames, physical envelope and source provenance to each component.
2. Separate rigid hierarchy from joints (fixed, revolute, prismatic, planar, ball, gear proxy) and limit declarations.
3. Validate connectivity, references, axis normalization and a clear grounded/root component; simulation and collision need their own tests.
4. Provide executable assembly steps and unresolved mates; no statement of clearance or load validity based only on AABB checks.

## Repeatable check and output

Use `assets/brief.example.json` as the structured input shape. Run `python3 scripts/check.py --input assets/brief.example.json` from this skill directory, or provide a new JSON record with `--input <path>`. This contract check only establishes input completeness, not geometry quality or external market evidence. Read `references/CONTRACT.md` when applying judgments.

## Safety and truthfulness

No invented 3D binaries, screenshots, market sales, external permissions, tool executions or physically verified fit. Give exact files and test observations; explicitly mark unknowns. Never execute marketplace content as code.

## Executable root-level assembly engine

Create or validate a `schemas/assembly.schema.json` world using `src/assembly/schema.js`, not only this Skill's brief checker. Use `examples/assembly/six-wheel-rover.json` as a real editable fixture:

```sh
node --test tests/assembly_core.test.mjs
node scripts/audit_assembly.mjs examples/assembly/six-wheel-rover.json
```

Implemented scope: rigid tree kinematics, fixed/revolute/prismatic limits, oriented-box proxy collisions, discrete sampled paths. Closed loops, triangle-mesh continuous contact, structural dynamics and qualified physical fit are **not** implemented.
