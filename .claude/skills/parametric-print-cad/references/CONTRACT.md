# parametric-print-cad: detailed operator reference

Scene assets are in meters and +Y up; OpenSCAD expects millimeters and Z-up for print-bed convention. Never rename a scene mesh into STL and call it CAD. Model design must explicitly state minimum intended base, walls, lip, nominal clearances, build orientation, support-sensitive surfaces, fit coupon variant, material and unknowns. `openscad -o file.stl file.scad` is a compile action; manifoldness, sectional wall measures and slicer G-code must be independently checked. Successful compilation or positive volume is not a strength, regulatory, fit or thermal certificate. Refer to `docs/v14-cad-fit-coupons.md` for actual verification language.

## Review outcomes

- **Pass** requires actual validation for the declared scope, source links where applicable, and stable names/units.
- **Needs review** means input/scene source exists but no real mechanical/physical/browser evidence.
- **Block** means mismatched source claims, missing provenance, unknown licenses for imported files, invalid dimensions, or unsupported physical safety claims.

## Integration points

Root `AGENTS.md` defines precedence; `catalog/models.json` defines identities and `catalog/collections/` defines release membership. Prefer existing `scripts/` and `tests/` implementations over duplicated logic. Document exceptions and maintain cross-agent reproducibility.
