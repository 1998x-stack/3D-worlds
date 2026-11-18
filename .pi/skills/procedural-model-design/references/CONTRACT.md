# procedural-model-design: detailed operator reference

The catalog source of truth is `catalog/models.json`; website projection `catalog/public_models.json` is generated. `src/models/*.js` factories return `THREE.Group` and may use `buildRecipe`. `buildRecipe` rescales authored envelope to declared dimensions: do not interpret recipe-unit primitive sizes as millimeters. PBR material `finish` supports wood, metal, ceramic, rubber, fabric, glass, anodized and matte. For each asset inspect silhouette at three angles, dark/light material readability, meaningful negative spaces, bottom plane, possible floating elements, poly budget and export hierarchy. Code review must check `assetMeta` matches manifest. If rendering is unavailable report not executed, do not invent thumbnails.

## Review outcomes

- **Pass** requires actual validation for the declared scope, source links where applicable, and stable names/units.
- **Needs review** means input/scene source exists but no real mechanical/physical/browser evidence.
- **Block** means mismatched source claims, missing provenance, unknown licenses for imported files, invalid dimensions, or unsupported physical safety claims.

## Integration points

Root `AGENTS.md` defines precedence; `catalog/models.json` defines identities and `catalog/collections/` defines release membership. Prefer existing `scripts/` and `tests/` implementations over duplicated logic. Document exceptions and maintain cross-agent reproducibility.
