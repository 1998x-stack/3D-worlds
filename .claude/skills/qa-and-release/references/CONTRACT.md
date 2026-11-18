# qa-and-release: detailed operator reference

Catalog: `python3 scripts/catalog.py validate` then `python3 scripts/catalog.py build`. Skill mirrors: `python3 scripts/verify_skill_mirrors.py` and `python3 scripts/verify_skill_packages_v15.py`. JS geometry: `node scripts/validate_models.mjs`. Gallery: `npm run build`, `npm run generate:assets`, `npm run verify:assets`, `npm run test:gallery`. Print: use separate CAD audits/slicing/fit coupons. Keep export and legal rights gates explicit. GitHub Pages is static and previews are generated through a real headless browser, not faked. A Pull Request is proposed code, not a production deployment; wait for actual CI and merge before calling it live.

## Review outcomes

- **Pass** requires actual validation for the declared scope, source links where applicable, and stable names/units.
- **Needs review** means input/scene source exists but no real mechanical/physical/browser evidence.
- **Block** means mismatched source claims, missing provenance, unknown licenses for imported files, invalid dimensions, or unsupported physical safety claims.

## Integration points

Root `AGENTS.md` defines precedence; `catalog/models.json` defines identities and `catalog/collections/` defines release membership. Prefer existing `scripts/` and `tests/` implementations over duplicated logic. Document exceptions and maintain cross-agent reproducibility.
