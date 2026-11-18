# assembly-world-systems: detailed operator reference

Use right-handed +Y up Three.js frames; record any conversion to print Z-up or engine-specific formats. Component graph checks can prove endpoints exist and one-root reachability, not that a vehicle rolls, a plane flies, a building supports loads, or objects can be assembled without interference. Define connectors with dimensions, mate transforms, rotation axes and limit intervals. Multi-loop constraints require a solver and residual reports; never infer from a parent-child tree. Run broad-phase collision and narrow-phase geometry tests when available, swept-path testing for disassembly, dynamics only with validated mass/inertia/contact models. Stage labels: conceptual -> geometry -> graph -> kinematic -> collision-path -> physical-validation. Preserve deterministic seed and validation artifacts.

## Review outcomes

- **Pass** requires actual validation for the declared scope, source links where applicable, and stable names/units.
- **Needs review** means input/scene source exists but no real mechanical/physical/browser evidence.
- **Block** means mismatched source claims, missing provenance, unknown licenses for imported files, invalid dimensions, or unsupported physical safety claims.

## Integration points

Root `AGENTS.md` defines precedence; `catalog/models.json` defines identities and `catalog/collections/` defines release membership. Prefer existing `scripts/` and `tests/` implementations over duplicated logic. Document exceptions and maintain cross-agent reproducibility.
