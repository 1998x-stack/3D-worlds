# Pull request integration and CI evidence

This repository-specific procedure is for maintaining open PRs on top of an evolving 3D Worlds main branch. Follow `AGENTS.md` and inspect live code; historical PR descriptions can be stale.

## First inspect, then edit

1. Retrieve PR title, body, **current head and base commit SHAs**, changed-file list, review threads, workflow runs, job step results and raw error messages. Match each run to the correct SHA.
2. Compare PR changes with their merge-base, and separately compare current main with the same merge-base. Resolve every overlapping path intentionally. **Do not replace the entire mainline workflow with an older PR version.**
3. Prefer a normal, non-forced two-parent integration commit and use an expected-head SHA on branch updates. If another contributor advanced the branch, inspect and reconcile rather than overwrite.
4. Report exact implementation, tests executed and missing evidence; a mergeable PR is not proof of full CI pass.

## Preserve independent evidence layers

| Quality gate | Evidence established | Not established |
| --- | --- | --- |
| Catalog schema, immutable IDs and collection coverage | Metadata correctness and source mapping | Mesh rendering |
| Three.js preview tests + GLB generation | Actual runtime geometry, named parts, bounds, files | Printable CAD |
| OpenSCAD CAD topology | Watertight STL, winding, component count, volume, dimensions | Minimum wall, slicing, real fit |
| V1.4 CAD cross-section + offline slicer | Triangle-section measurements and generated G-code | Qualified printer settings |
| Browser/Page deployment gate | WebGL smoke and static output | Material/physical product safety |

The print-commerce CAD jobs, original V1.4 GLB manufacturing risk scan, V1.4 CAD prototype fit tests, offline slicer, GLB/LOD production, and remote gallery/MCP tests are distinct. Keep all of them when moving jobs. A last green run on another commit cannot certify the new head.

## GitHub Actions discipline

- Independent `cad-audit` and `verify` jobs should both be required by `deploy`. A PR check must never deploy. Publish on `refs/heads/main` only.
- Default GitHub Actions permissions should be read-only. Grant `pages: write` and `id-token: write` **only** in the deployment job.
- Each `actions/upload-artifact` step needs a populated `path`, with explicit report/STL globs. `if: always()` can retain partial failure reports; it does not convert a failed audit into a pass.
- The default `npm run test:refined-commerce` must include all newly added source and second-pass tests; Python unittest discovery must cover new audit metadata tests.
- GitHub Actions runner exit 143 / shutdown is an interrupted run, not evidence of a particular model failure. Missing artifact `path` is a definite configuration defect. Investigate logs before naming a cause.
- Do not claim 20/20 physically printable because 20/20 STL topology checks succeeded. Maintain `prototype_unverified` until slicer review, physical samples, fit and safety evidence exist.

## Practical handoff

Use the [review checklist](../assets/pr-review-checklist.md) when preparing a merge. Run `python3 scripts/verify_skill_mirrors.py`, `python3 -m unittest discover -s tests -v`, `npm run test:refined-commerce`, `node scripts/validate_models.mjs`, and `npm run build`. Heavy OpenSCAD and Chromium/GLB jobs require actual tools and CI. Report a missing result as **not yet verified**, never as successful.

Sync README EN/ZH and maintain stable 565-model catalog IDs unless introducing an explicitly approved additive release.
