# Skill architecture · threejs-model-builder v2.0

This repository retains **three complete, byte-identical portable bundles** because Claude, Codex and Pi discover Skills in different directories. A single canonical authoring copy lives in `.codex/skills/threejs-model-builder/`; `.claude` and `.pi` are mirrors. Each includes local `references/`, `assets/`, `scripts/` and `examples/`; no symlinks and no absolute paths are required.

```text
.codex/skills/threejs-model-builder/
├── SKILL.md                 # task routing, invariants, workflow, output contract
├── references/
│   ├── WORKFLOWS.md
│   ├── MODEL-GEOMETRY.md
│   ├── TAXONOMY.md
│   ├── CATALOG-PROVENANCE.md
│   ├── GLB-INGESTION.md
│   ├── RENDER-LOD.md
│   ├── PUBLISH-MCP.md
│   ├── QA-TROUBLESHOOTING.md
│   └── EXTERNAL-SOURCES.md
├── assets/
│   ├── model-brief.md
│   ├── acceptance-report.md
│   ├── import-batch.example.json
│   └── recipe-example.js
├── examples/
│   ├── procedural-furniture.md
│   └── imported-glb.md
└── scripts/
    └── preflight.py
```

## Why separate files?

The Skill entrypoint is loaded when its topic is relevant. Detailed references are loaded only for the selected route (procedural authoring, external imports, P0/P1, P2, QA). Assets are reusable templates; examples show how to work within the existing source tree. Scripts provide *read-only* checks, not hidden publication actions. This follows [Agent Skills layout and progressive disclosure](https://agentskills.io/specification).

## Authoring and checks

1. Edit canonical `.codex/skills/threejs-model-builder/`.
2. Copy the **entire directory contents** to both other client locations; all mirrors must be standalone.
3. Run `python3 scripts/verify_skill_mirrors.py` and `python3 .codex/skills/threejs-model-builder/scripts/preflight.py`. The former compares all bytes and Markdown links; the latter checks the repo contract without writing.
4. Run existing project quality gates before modifying production assets.
5. CI runs mirror validation on PRs before catalog/model build.

**No third-party binary geometry or unlicensed reference artwork is bundled in the Skill.** URLs in `references/EXTERNAL-SOURCES.md` link to official external specs, and placeholder license URLs in `assets/import-batch.example.json` are not evidence.

