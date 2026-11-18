# V1.4.2 — Manufacturing risk survey and two printable CAD *prototypes*

**Scope:** the 30 V1.4/V1.4.1 gallery models. **Purpose:** convert a visual-detail batch
into an evidence-backed engineering *backlog*. There is NO claim that these 30
visual scene meshes, the two new CAD pilots, or any generated STL is
manufacturing-certified, commercially safe, mechanically fit, watertight in
use, food-contact appropriate, or physically printed.

## Actual deliverables

1. **30/30 specific manufacturing questions**, fit targets, and three reviewer
   actions per model: [machine-readable manufacturing intent](../catalog/v14_manufacturing_intent.json).
2. A reproducible **batch original-GLB mesh inspection** (not LOD1/LOD2):
   [scripts/audit_v14_manufacturing.py](../scripts/audit_v14_manufacturing.py).
   Each record is pinned to a source SHA-256, asset ID, V1.4.1 geometry revision,
   requested physical scale, FDM profile and its inspected print-coordinate bounds.
3. **Two distinct OpenSCAD engineering prototypes**, in millimeters and Z-up:
   [clip-on soap drainage bridge](../printables/v14/clip_on_soap_drainage_bridge.scad) and
   [hex driver bit index dock](../printables/v14/hex_driver_bit_index_dock.scad).
   They are not silently substituted for the original Gallery scene models.
4. [CAD pilot STL evaluator](../scripts/audit_v14_cad_pilots.py) measuring
   topology and envelope only. GitHub Actions publishes **explicitly untested**
   STL artifacts and JSON reports for download, not commercial sales.

## Scan parameters and evidence boundaries

| Automated indicator | How it is checked | What it cannot prove |
|---|---|---|
| Full-resolution source | `.cache/raw/<slug>.glb`, SHA-256 | Physical CAD fidelity |
| Unit/axis | m Y-up converted to mm Z-up, 120 mm default longest side | Correct retail size |
| Mesh manifold | Trimesh watertight edges, winding, positive signed volume and degenerate faces | Self intersections or adequate wall thickness |
| Build volume | Full assembly's axis-aligned bounds vs FDM 220×220×250 mm | Optimal part layout or orientation |
| Very small geometry | Count individual component bounding-box **minimum extents** below 0.9 mm | **Not** a wall-thickness measurement; all thick/large components can still have thin shells |
| Potential crossing | Overlapping axis-aligned boxes | Not a true Boolean interference/clearance test |
| Downward surfaces | Fraction of downward-oriented triangles (a warning only) | Actual supports, bridging performance or slicer toolpaths |
| Bed contact | Sum of downward horizontal triangle area near lowest Z, heuristic | Bed adhesion or warp control |
| Structural condition | Always `not_tested` | Load capacity, heat/chemical suitability, safety |
| Final acceptance | Always `not_evaluated` | Product certification or legally safe sale |

**0.9 mm is a screening guideline, not a universal engineering minimum.**
For a typical 0.4 mm nozzle Prusa documents ~0.45 mm extrusion width per
perimeter, so two nominal perimeters are ~0.9 mm. Actual behavior varies with
printer, slicer, line width, layer height, material and orientation.
See [Prusa's thin-wall and overhang guidance](https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135).
The metrics are calculated from *visual scene geometry*, not from dimensionally
constrained engineering solids; large component bounding boxes must never be
used to assert that a wall is thick enough.

P0/P1/P2 remain *workflow priorities* from [print_policy.json](../catalog/print_policy.json),
not model quality scores. A blocked model is reported as `mesh_blocked`; a
model with no measured topology blockers is still only
`topology_pass_manual_review_required`. Missing source is a separate failure.
**Every row remains unreviewed, unsliced, physically untested and uncertified.**

## Reproduce locally

Install requirements and build the **original** geometry from existing scene
source. A browser STL is not an audit input; avoid simplified LOD assets.

```bash
python3 -m pip install -r requirements-print.txt
npm install
npx playwright install chromium
npm run generate:assets

# Every V1.4 source GLB must exist; all 30 get their own line in the report.
python3 scripts/audit_v14_manufacturing.py \
  --profile fdm-220 --longest-mm 120 --require-all-sources \
  --output .cache/print/v14-manufacturing-risk.json

# Test isolated manufacturability indicators without a printer or slicer.
python3 -m unittest tests/test_v14_manufacturing.py -v

# Two independent printable-geometry CAD candidates, NOT 30 converted CADs.
# Requires local OpenSCAD CLI and above Python dependencies.
python3 scripts/audit_v14_cad_pilots.py \
  --output .cache/print/v14-cad-pilots.json

# Manual export of a bit fit coupon, subject to physical calibration:
openscad -D 'mode="coupon"' \
  -o .cache/print/hex-driver-fit-coupon.stl \
  printables/v14/hex_driver_bit_index_dock.scad
```

Machine reports are deterministic by asset order and include a source/intent
hash. The CI uses the same commands **after** the original GLB generation,
archives the risk matrix and two CAD STL *drafts*, and fails on missing sources,
broken code or CAD topology errors. It **does not** fail on legitimate
geometry-risk findings: those findings are the *purpose* of the assessment.

## Parametric CAD pilots: explicit hypotheses

### Clip-on soap drainage bridge

Nominal OpenSCAD parameters: 128×85 mm drainage tray, 5 mm structural plate,
4.8 mm through drainage openings at 11 mm pitch, two integrated rear-open rigid C-cradles (V1.4.3 corrected the
formerly misaligned entry axis), 4-mm upper/lower jaws, and a
`target_lip_thickness_mm=14` / `lip_clearance_mm=0.4` **assumed**
total gap. The 14 mm lip **has not been measured** and is not a universal
sink dimension. A mesh topology check does not demonstrate clip elasticity,
retention, hygiene or resistance to warm water/cleaners.

**To accept:** measure the actual rim with calipers → adjust source parameters
→ examine supports and slicer layers → physically print a clip coupon
→ measure fit, inspect slip/creep under a realistic soap load → confirm
cleaning/durability. Avoid describing this as certified bathroom equipment.

### Hex driver bit index dock

Nominal OpenSCAD parameters: 108×108×18 mm rounded base, 4×4 socket grid,
12 mm blind hex sockets with a 6 mm nominal floor, 20 mm pitch,
bit across-flats 6.35 mm, and an **unverified** 0.25 mm nominal
per-side gap. The `mode="coupon"` option generates three
test-fit pockets at 0.15, 0.25 and 0.40 mm *per-side* allowances. Hex socket
radius is derived from actual across-flats, not arbitrary circumradius.

**To accept:** measure the user's bit brand and tool tips → print the
clearance coupon → test pull-out and wobble → adjust the pocket fit
→ inspect base top/bottom/perimeters in slicer → only then print and test
the full holder. The CAD and its STL do not establish tool retention or
tool-user safety.

## Full release gates — all are independent

| Gate | Acceptance requirement | Who/proof | Current state |
|---|---|---|---|
| G0: Asset traceability | Immutable IDs, geometry revisions, source hashes | Source catalog and CI | Machine-verifiable |
| G1: Mesh geometry | Closed oriented volumes, units, envelope, no zero-volume faces | OpenSCAD/Trimesh JSON + blocked models addressed | Inspected by CI, not automatically accepted |
| G2: True CAD walls/clearances | Geometry-based min thickness and dimensioned mating gaps | Native CAD cross-sections + caliper measurements | **Not measured** across 30 gallery assets |
| G3: Slicer study | Actual toolpaths, layer preview, supports, adhesion, 2+ wall loops as appropriate | Named machine/material/nozzle/slicer version and review screenshots/3MF | **Not run** |
| G4: Physical fit | Test coupons, assembly clearance, base contact, long-term movement | Per-asset dated measured print-test log | **Not run** |
| G5: Product/strength/safety | Intended loads, fatigue, water/heat, electrical/food/child issues, market IP rules | Qualified reviewer and documented measurements | **Not established** |

Use the [human review template](templates/v14-print-release-review.md) before
any status promotion. Reject or redesign unsafe parts rather than allowing
`mesh_blocked` or `topology_pass_manual_review_required` to imply
manufacturing-ready.

## V1.4-specific per-asset review targets

Every model has a different design constraint, not a generic repeated check.
The [30-asset intent registry](../catalog/v14_manufacturing_intent.json)
includes dimensional-fit tasks and 90 reviewer actions, for example:

- **P0:** soap-clip gap, drawer slides, detachable toothbrush parts, perforated
  brick webs, Truchet fabric adhesion, spice-carousel fit and greenhouse panels.
- **P1:** bicycle miniature axle clearance, robotic antenna attachment,
  mushroom stem continuity, coastal scene connectivity, cargo-cart wheels,
  locker doors and sci-fi sample canisters.
- **P2:** measured PCB keep-outs, sensor enclosure gasket clearances, 1/4-inch
  driver-bit socket test coupons, caliper holder contact and wearable skin-fit.
  The bouldering model is *explicitly non-load-bearing*.

Model-specific tests require measured physical dimensions; assumptions in
OpenSCAD defaults are starting hypotheses, never actual fit-test evidence.

## V1.4.3 addendum — actual candidate cross-sections and offline slicing

A subsequent [V1.4.3 pilot runbook](v14-cad-fit-coupons.md) corrects
the soap clip's mating-axis error, verifies selected actual STL
cross-sections on two fully separate CAD bodies and two fit-test strips,
and adds an offline PrusaSlicer G-code generation CI gate. Only software
topology and selected geometry sections are measured. The 30 original
V1.4 scene GLBs remain `mesh_blocked`, and no successful slice export
implies G3 human approval, G4 physical fit, or G5 release readiness.
