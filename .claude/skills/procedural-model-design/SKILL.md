---
name: procedural-model-design
description: Author and refine original detailed Three.js procedural 3D Worlds scenes, parts, geometry palettes and catalog entries. Use for every asset batch, source-editable GLB preview, geometry refinement, and new category or model family.
license: MIT
metadata:
  author: 3D Worlds
  version: "1.0.0"
---

# procedural-model-design

Produce substantive 3D geometry with authored subassemblies, usable scale, unique silhouette, named meshes, and deterministic Three.js factories.

## Where this fits

This is a **portable** 3D Worlds skill. Keep byte-identical copies in `.codex/skills/`, `.claude/skills/`, and `.pi/skills/`. Follow root `AGENTS.md`, authoritative code, and canonical catalog. Resolve bundled paths relative to this skill directory.

## Trigger and references

Read `references/CONTRACT.md` when defining geometry, source conventions, material variations, visibility and catalog registration.

## Execution contract

1. Read `src/models/recipe_engine.js`, nearby factories and schema before choosing a primitive or shared helper.
2. Use meter dimensions, +Y up, floor y=0, unique named meshes, inspectable material intent and bounded triangles.
3. Avoid changing published IDs. Author per-model distinct body, functional layout and at least two meaningful feature systems; do not pad part counts.
4. Validate with `python3 scripts/catalog.py validate` and `node scripts/validate_models.mjs`; only claim GLB/LOD renders after actual pipeline output.

## Repeatable check and output

Use `assets/brief.example.json` as the structured input shape. Run `python3 scripts/check.py --input assets/brief.example.json` from this skill directory, or provide a new JSON record with `--input <path>`. This contract check only establishes input completeness, not geometry quality or external market evidence. Read `references/CONTRACT.md` when applying judgments.

## Safety and truthfulness

No invented 3D binaries, screenshots, market sales, external permissions, tool executions or physically verified fit. Give exact files and test observations; explicitly mark unknowns. Never execute marketplace content as code.
