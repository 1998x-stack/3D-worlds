# 3D Worlds · Manufacturing readiness & engineering acceptance

**Status:** The repository produces geometry candidates and auditable diagnostics; it has **no automatic printability, strength, clinical/safety or production certification**. The workflow-priority label **P0/P1/P2 is not a model score**.

## 1. Core acceptance policy

| Gate | Automation | Decision and evidence |
|---|---|---|
| Ownership, source model, stable ID | Catalog validation | Source `catalog/models.json` and licensed provenance; verify rights for imported third-party models |
| Unit and orientation | Export CLI + browser draft | Meter/Y-up source → millimeter/Z-up candidate; open STL as millimeters in a slicer |
| Closed surface | Trimesh `is_watertight` | Block open/nonmanifold shells, triangles with no enclosed solid |
| Winding and volume | Trimesh `is_winding_consistent` and signed volume | Block zero/negative volume and inconsistent winding; optional manual `--repair-normals` |
| Bed envelope | Explicit build-volume profile | Block if *current orientation* does not fit chosen XYZ envelope; this does not perform automated orientation optimization |
| Triangles and degeneracy | Triangle count and degenerate-face checks | Reject budget violations; normalization may weld duplicate vertices and eliminate duplicate faces |
| Assembly integrity | Part list and conservative AABB overlap warning | **Not checked** for exact intersection, connectivity or load-bearing joints |
| Down-facing regions | Normal-angle warning, bed-exclusion heuristic | **Not checked** for true support necessity, bridge span or islands |
| Thin walls and small features | Minimum *component bounding-box extent* warning | **Not checked** for true local wall thickness |
| Functional tolerances | Desired clearance stored in report | **Not checked** for actual hole/shaft spacing or applied offsets |
| Slicing and machine calibration | Separate external slicer and printer | **Manual** inspection and physical evidence before a model can claim verified |

The `indicators_not_manufacturing_checks` field uses explicit `not_checked` values. **Do not rename warning indicators to "passed".**

## 2. Priority playbooks

### P0 · Display objects, miniature furniture, simple props

1. Record target printed envelope (e.g. longest edge 120 mm), build volume, expected material and actual *measured* minimum features.
2. Generate original GLB: `node scripts/render_assets.mjs --id <asset-id>`.
3. Run `python3 scripts/export_print.py --asset-id <asset-id> --longest-mm 120 --profile fdm-220`.
4. Read the report. If blocked, redesign geometry before a new attempt.
5. In the slicer, verify bed contact, first-layer footprint, thin components, gaps and actual layer paths. Consider a separately designed base when appropriate.

P0 output is a **candidate**, never an approved manufacturable article.

### P1 · Characters, natural forms, vehicles, sci-fi, modular architecture

1. Run `--mode separated` to export distinct per-part STLs and preserve assembled-object placements in 3MF.
2. Inspect component indices, bounding-box overlap warnings, disconnected/loose submeshes and downward-facing triangle indicators.
3. Decide which parts should be joined by CAD design, separated for different orientations, or mounted with fittings; do not assume the automatically extracted mesh grouping matches manufacturable components.
4. If needed, run `--mode fused` only on closed solids and review the Boolean output carefully; this requires the optional `manifold3d` package.
5. Model joints/pegs/sockets in a real CAD workflow; record actual clearances, minimum wall thickness and print orientation.
6. Slice every component, review support strategies and explicitly confirm assembly and removal/clearance.

`--mode separated` only splits **source mesh objects**, not connected components inside one mesh and not an automatic smart part-layout algorithm.

### P2 · Electronics housings, tools and functional/structural parts

1. Start with dimensioned parametric CAD (e.g. FreeCAD/OpenSCAD or a suitable mechanical modeling kernel); a mesh-only GLB is not an editable STEP body.
2. Define real reference dimensions, hole positions, shaft diameters, gasket/interface geometry and tolerance stackups.
3. Record printer process/material/nozzle and desired clearance in the 3D Worlds report. **No report parameter adjusts mesh geometry.**
4. Design minimum wall thickness against the actual printer/material and measured load direction; FDM parts are generally directionally anisotropic.
5. Perform calibration prints, measured fit checks, assembly tests and representative load testing before approving a functional design.
6. Safety-relevant, electrical, load-bearing, food-contact or medical parts need additional qualified review. This tool does not perform those qualifications.

**Evidence required for "physically verified":** printer + material + slicer build/version + print orientation/supports + nozzle/layer settings or resin process + dimensions after print + photographs + pass/fail criteria + a human reviewer. No current automated job creates this status.

## 3. Data model and status meanings

- `not_audited` — model classification only; geometry never opened.
- `missing_source` — original GLB not found in local cache/staging.
- `audit_error` — tooling or parsing error; do not interpret as failure or pass of part geometry.
- `blocked` — basic geometry or print-envelope checks rejected the model.
- `geometry_pass_manual_review_required` — basic checks passed; true thickness, assembly, supports and slicer still pending.
- `slicer_reviewed` — **manual human** status requiring explicit slicer screenshots and tested process version; not emitted by CLI.
- `physically_verified` — **manual human** status requiring physical print and measurement evidence; not emitted by CLI.

If any input geometry changes, the QA source SHA-256 changes and the evidence should be re-evaluated. Avoid publishing printer-ready badges solely because a static build succeeded.

## 4. Printer policy

`catalog/print_policy.json` contains generic reference envelopes and processes. These are **not vendor profiles** and cannot be sent directly to a printer.

| Profile | Process | Reference build envelope | Feature guide |
|---|---|---|---|
| `fdm-220` | FDM | 220 × 220 × 250 mm | 0.8 mm component extent warning, not wall test |
| `fdm-300` | FDM | 300 × 300 × 300 mm | 0.8 mm component extent warning |
| `resin-192` | MSLA | 192 × 120 × 200 mm | No automatic feature threshold |

For custom machines use `--bed-mm X Y Z`. A bed-fit result only assesses an axis-aligned envelope. Actual bed clips, supports, resin drainage, brim/raft and orientation can reduce usable space.

## 5. Reproducible review

~~~bash
npm run test:print
python3 -m unittest discover -s tests -p 'test_print*.py' -v
python3 scripts/audit_print_catalog.py --metadata-only
python3 scripts/audit_print_catalog.py --limit 10 --profile fdm-220
~~~

Review outputs under `.cache/print/`; the CI workflow archives metadata-only and sampled source-geometry audit reports. Real 3MF import and layer slicing should be tested with an external slicer. Never silently auto-approve all catalog entries.

## 6. Next engineering tasks (not yet implemented)

- Real local wall-thickness maps and robust self-intersection/clearance predicates using a dedicated geometry kernel.
- Reliable auto-orientation, supports, hollowing, island analysis and 3D print plate packing.
- Parametric CAD authoring with exact assembly constraints and STEP export.
- Printer-specific, licensed material process recipes and slicer command-line interoperability testing.
- Physically verified model/evidence publication by a reviewer.

These tasks are intentionally separated from the existing reproducible P0/P1/P2 infrastructure. 
