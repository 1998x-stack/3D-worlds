# 3D Worlds → 3D Printing Pipeline (STL / 3MF)

> **Current capability: audited geometry candidates, NOT print certification.**
> Do not mark all 385 scene assets as printable. Preserve Three.js/GLB as the
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
| CLI `<slug>.print-report.json` | Audit results | SHA-256, actual extents, topology outcome, warnings, no certification |

The first release **does not** emit G-code, CAD STEP, slicer project
profiles, printer-specific commands, color/multimaterial objects, hollowing,
support structures or wall-thickness guarantees.

## Quick start

```bash
npm install
npx playwright install chromium
npm run generate:assets                 # creates full-res .cache/raw/<slug>.glb
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

Planned P1: per-ID batch audit of the full catalog, issue report
classification, part-specific boolean strategies, repair provenance,
slicer-import smoke and CI metrics. Planned P2: printer/material profiles,
thin-wall analysis, adaptive supports, geometrical tolerances, multicolor
3MF, object storage and API/download entitlements. True parametric STEP
requires a separate CAD-native authoring pipeline, not GLB conversion.

## Technical references

- [3MF Core specification](https://3mf.io/spec/) (units, required
  closed mesh topology, ZIP packaging, object resources, build items)
- [Three.js STLExporter](https://threejs.org/docs/pages/STLExporter.html)
- [Trimesh documentation](https://trimesh.org/)
- [Manifold solid geometry library](https://github.com/elalish/manifold)
- [Prusa Knowledge Base](https://help.prusa3d.com/)
