# 3D Worlds → 3D Printing Pipeline (STL / 3MF)

> **Current capability: audited geometry candidates, NOT print certification.**
> Do not mark all 485 scene assets as printable. Preserve Three.js/GLB as the
> editable visual source of truth.

## Why direct GLB → STL is not enough

Models in `src/models/` are predominantly assembled Three.js primitives,
in **meters / Y-up**. Some use individual non-solid triangles; other parts
may overlap, float, barely touch, or be too thin when miniaturized. A 3D game
asset can look right on-screen while having zero wall thickness or no enclosed
volume. Meshopt LOD1/LOD2 are designed for rendering, not manufacturing
precision. Converting their triangles to STL does NOT repair topology.

### Available outputs

| Output | Source | Promise |
|---|---|---|
| Browser `*-draft-120mm.stl` | Full procedural factory | Immediate geometry-only draft; no mesh-health test or print guarantee |
| CLI `<slug>.stl` | Source GLB (`.cache/raw`) | Blocks nonwatertight/nonpositive-volume components |
| CLI `<slug>.3mf` | Same normalized, checked geometry | 3MF Core ZIP, explicit millimeter units, objects and build items |
| CLI `<slug>.print-report.json` | Audit results | Source/output SHA-256, actual extents, topology outcome, warnings, no certification |

The first release **does not** emit G-code, CAD STEP, slicer project
profiles, printer-specific commands, color/multimaterial objects, hollowing,
support structures or wall-thickness guarantees.

## Quick start

```bash
npm install
npx playwright install chromium
node scripts/render_assets.mjs --id furniture.chair.linen-001  # one raw GLB + thumbnail
python3 -m pip install -r requirements-print.txt

# Suggested miniature: longest side 120mm, build plate 220×220×250 mm
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --bed-mm 220 220 250

# Alternatively use a trusted full-resolution GLB already in meters/Y-up
python3 scripts/export_print.py \
  --input /PATH/TO/original.glb --slug original-model \
  --longest-mm 120 --output-dir .cache/print

# Optional Boolean union (requires closed solids and optional dependency)
python3 -m pip install manifold3d
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --mode fused
```

Success: exit `0`, STL + 3MF + print-report in `.cache/print/`.
Block: exit `2` with JSON error diagnostics printed to stdout.
Missing source/invalid command: exit `2`, error written to stderr.
The `--repair-normals` flag may fix inconsistent triangle directions; it
does **not** automatically close holes, fix intersections or add thickness.

### Units and transforms

1. Load a **full-resolution** source GLB; bake every node transform.
2. Weld duplicate geometric vertices from glTF's UV/normal splits; eliminate
   exact duplicate and degenerate faces during canonicalization.
3. Apply a +90° rotation about X to convert Three.js Y-up to print Z-up:
   `X'=X, Y'=-Z, Z'=Y`.
4. Convert meters to millimeters by multiplying by **1000**.
5. Apply optional `--longest-mm` scaling uniformly to the whole assembly,
   then move its bounding-box minimum to (0,0,0).
6. Audit manifold edges, winding consistency, signed volume, optional build
   envelope and triangle budget.
7. Export binary STL (which **cannot declare units**) and 3MF Core (which
   does declare `unit="millimeter"`) only after the geometry checks pass.

**Without `--longest-mm`, a 1-meter object is 1000 mm in the slicer.**
Interpret STL as mm when importing. For physical manufacturing, original
catalog dimensions can be full-size architecture or furniture and may not
fit a consumer printer.

### Assembly modes and limitations

- `--mode parts` (default) preserves each separate watertight GLB mesh as
  an object in the 3MF build. In STL those meshes are concatenated as
  disconnected shells. Individual validity **does not** establish that the
  whole assembly is a valid solid: overlaps, gaps and merely touching parts
  need manual inspection in the slicer.
- `--mode fused` requests a volumetric Boolean union through
  `trimesh.boolean.union(..., engine='manifold')`. It requires the optional
  manifold3d package, and the operation may fail or alter fine geometry.
- `manufacturing_certified` remains `false` in both modes. Neither can
  prove printable minimum wall thickness, self-intersection freedom,
  compatible tolerances, supportability or material suitability.

## Validation & review

```bash
python3 -m unittest discover -s tests -p test_print_export.py -v
python3 scripts/export_print.py --help
```

The automated test fixtures cover closed-box print exports, 3MF Core package
structure and readback via Trimesh, Y-up-to-Z-up/scale, open-surface blocking,
printer volume limits and path-safe slugs. They do not replace physical prints.

For every exported candidate:

1. Open 3MF in PrusaSlicer, Bambu Studio, OrcaSlicer, Cura or compatible slicer.
2. Confirm **millimeters**, dimensions and model orientation.
3. Inspect every layer for dropped details, unsupported overhangs,
   unintended islands, voids, overly thin walls and intersecting shells.
4. Choose material, printer, nozzle/resin, tolerances, infill and supports.
5. Only record `slicer_reviewed` and later `physically_verified` with
   actual evidence of slice inspection and successful print.

## Future scalable architecture

```text
catalog/models.json + raw GLB
      ↓ Print Job API / queue (P1)
normalization → manifold diagnostics → optional geometry repair
      ↓
STL / 3MF + per-asset evidence report (content-addressed)
      ↓ review gate
printer/material-profile-aware slicer preview (P2)
      ↓
human-reviewed / physical-print-verified distribution
```

Suggested per-asset status:
`unsupported`, `blocked`, `geometry_pass_manual_review_required`,
`slicer_reviewed`, `physically_verified`. Cache by source SHA-256,
tool version and export policy, not just asset ID. Treat print exports
as separate variants: do not replace game LOD assets or silently modify
historical source meshes.

Implemented follow-up: `scripts/audit_print_catalog.py` performs a full
catalog priority inventory or a local raw-GLB geometry audit with distinct
`missing_source`, `blocked` and `geometry_pass_manual_review_required`
statuses. `--mode separated` exports per-mesh STL files (and preserves the
assembled positions in 3MF). Optional `--mode fused` uses Manifold for Boolean
union when available. Generic FDM/MSLA printer profiles and material labels are
now defined in `catalog/print_policy.json`. Downward-facing triangle and
component-box overlap indicators remain heuristics, not support/clearance proof.

Still not implemented: exact thin-wall analysis, adaptive supports, reliable
functional tolerances, multicolor production files, native CAD/STEP
reconstruction, or automated physical print verification. See
[engineering acceptance](print-engineering.md) for the full status matrix.

## Technical references

- [3MF Core specification](https://3mf.io/spec/) (units, required
  closed mesh topology, ZIP packaging, object resources, build items)
- [Three.js STLExporter](https://threejs.org/docs/pages/STLExporter.html)
- [Trimesh documentation](https://trimesh.org/)
- [Manifold solid geometry library](https://github.com/elalish/manifold)
- [Prusa Knowledge Base](https://help.prusa3d.com/)


## P0/P1/P2 interactive workbench and batch audit

The static GitHub Pages site now includes a dedicated Print Workbench and
model-specific planning panel. Select a generic printer envelope and printed
longest dimension; the displayed size is estimated from the model's
`dimensions_m` (catalog metadata), with XY in-plane rotation considered for fit.
A predicted fit is **never** a geometry pass, slicer review or certificate.

The Pages site uses `src/print-planner.js` and
`catalog/print_policy.json`; the Python CLI uses the same policy JSON.

~~~bash
# P0 read-only metadata index for all models
python3 scripts/audit_print_catalog.py --metadata-only

# P1: run true geometry audit only when original source GLB is locally present
python3 scripts/audit_print_catalog.py --limit 10 --longest-mm 120

# P1 split per source GLB mesh:
python3 scripts/export_print.py --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 --mode separated

# P2 record functional design requirements (no automatic CAD modifications):
python3 scripts/export_print.py --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 --material PETG --clearance-mm 0.25

# No side-effect geometry audit:
python3 scripts/export_print.py --asset-id furniture.chair.linen-001 \
  --longest-mm 120 --profile fdm-220 --audit-only
~~~

`--mode separated` also emits `<slug>-part-NNN.stl` files placed
at individual per-part local origins. This is a **source mesh partition**,
not smart print-part segmentation or automated support layout. The 3MF
preserves original relative mesh placement.

An audit-only result never writes STL/3MF and cannot certify printability.
A blocked non-audit-only run invalidates any previous same-slug STL and 3MF
files in the chosen output directory, preventing unsafe stale reuse.

Printer presets are reference values only. `--clearance-mm` is recorded as
an intent; actual clearance, wall thickness and functional performance are
`not_checked`. For human workflows use the [P0/P1/P2 engineering playbook](print-engineering.md).
