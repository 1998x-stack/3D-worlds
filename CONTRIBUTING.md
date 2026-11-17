# Contributing to 3D Worlds

Thank you for improving the asset library, web gallery, AI agent integrations and 3D-printing checks. Please submit focused, independently testable PRs.

## Before a PR

- Read [AGENTS.md](AGENTS.md), [the architecture](docs/architecture.md), and the [print engineering acceptance rules](docs/print-engineering.md) if touching geometry or printing.
- Keep `catalog/models.json` as the source of truth; never silently replace an existing ID or overwrite published geometry.
- Document author, explicit license, source/provenance, category, stable ID and physical dimensions in **meters, Y-up**.
- Do not introduce proprietary meshes or unlicensed scans. Do not check in secrets, printer access tokens, object store credentials or personal data.
- Include tests for policy changes, browser behavior, geometry transforms and JSON status changes.

## Local verification

~~~bash
npm install
python3 -m pip install -r requirements-print.txt
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
npm run test:print
python3 -m unittest discover -s tests -v
node scripts/validate_models.mjs
~~~

Full GPU/asset and gallery CI equivalent:

~~~bash
npx playwright install --with-deps chromium
npm run generate:assets
npm run verify:assets
npm run build
npm run test:gallery
~~~

## Printing PR requirements

1. Supply at least one small closed-solid regression fixture and one rejected broken-surface fixture.
2. If introducing a printer/material preset, explain process, envelope and empirical origin. Label all generic values as illustrative.
3. If changing STL or 3MF output, verify unit conversion, orientation, signed volume, archive structure and independent import.
4. Categorize issues into P0 geometry, P1 assembly/support, or P2 functional tolerances. **These are task priorities, never print success labels.**
5. Preserve `manufacturing_certified: false` for all purely automated outputs.
6. Record what the software **does not** measure (wall thickness, real joint fit, slicer result or physical strength).

## Pull request checklist

- [ ] Model IDs and source paths remain stable
- [ ] Manifest and provenance are valid
- [ ] Build/test commands and real results attached
- [ ] No unverifiable print certification or safety claims
- [ ] README, Chinese translation and docs updated for public-facing changes
- [ ] No credentials, binary debris or unrelated generated artifacts

## Reporting an issue

Provide model ID, reproducible command, environment/platform, printer preset when relevant, expected and observed behavior, any JSON report, and a short (non-sensitive) sample or log. If a full print failed, describe slicer version and actual geometry evidence rather than an inference from preview alone.

See [SECURITY.md](SECURITY.md) for potentially exploitable bugs.
