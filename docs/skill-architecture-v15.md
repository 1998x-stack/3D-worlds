# Skill architecture v1.5 — scalable 3D systems

## Design goals

Maintain one canonical source of truth in the repository and **byte-identical skill packages** at `.codex/skills`, `.claude/skills` and `.pi/skills`. Discover by concise YAML `name` and `description`, then progressively load skill body, focused `references/`, deterministic `scripts/`, and reusable `assets/`. This follows the Agent Skills convention (https://agentskills.io/specification) and Anthropic skill-authoring guidance (https://github.com/anthropics/skills/tree/main/skills/skill-creator).

## Routing matrix

| Task | Primary skill | Proof boundary |
| --- | --- | --- |
| Amazon/eBay/HN idea research | `market-intelligence` | signals only; no sales/rights conclusion |
| Named Three.js scene / 30-asset batch | `procedural-model-design` + existing `threejs-model-builder` | scene geometry not manufacture |
| New printable geometry | `parametric-print-cad` | mm CAD, slices, coupons separately |
| Vehicles/buildings/robots/aircraft | `assembly-world-systems` | graph ≠ collision/dynamics/physical validation |
| CI, gallery, GLB/LOD, release | `qa-and-release` | verify observed runs, do not fabricate artifacts |

## Contract and execution pipeline

```text
market evidence (dated, licensed) -> original design briefs -> catalog ID check
 -> Three.js named scene geometries -> source geometry validation
 -> headless previews / GLB+LOD -> static site and search release
      \-> independent mm parametric CAD -> topology -> slicer -> coupons -> physical review
future assemblies -> part/connector frames -> constraints -> collision/path -> physical review
```

The two branches cannot certify one another. New system types should add a small new domain skill + reference + input fixture + deterministic contract script, mirrored into all three clients and checked by `scripts/verify_skill_packages_v15.py`. Shared executable tooling remains in root `scripts/` so client packages don't fork canonical geometry logic. The existing `threejs-model-builder` is retained for compatibility and tested by `scripts/verify_skill_mirrors.py`.

## Quality ladder

1. **brief**: dated signal and original design differentiation;
2. **source**: valid manifest, generator and CAD if applicable;
3. **geometry**: finite bounds, semantic meshes, triangle/axis QA;
4. **render**: real browser previews, GLB/LOD/audit artifacts;
5. **manufacturing**: independent CAD, topology, slicer, physical coupon and intended-use testing;
6. **commerce**: only with proven permissions, safety documentation and actual customer demand evidence.

No stage may be silently upgraded by the existence of a file or an AI claim.
