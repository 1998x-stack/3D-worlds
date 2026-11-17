# Print Commerce · CAD source / 海外3D打印商品

**50 original prototype designs**, each with a dedicated `.scad` source that
calls either `lib/commerce_forms.scad` or the ten-SKU detailed
`lib/refined_forms.scad` construction library.
OpenSCAD uses **millimeters and Z-up**; Three.js gallery uses **meters and Y-up**.
Gallery preview meshes are stylized representations, not a manufacturing mesh.


## Overseas refined batch 01 · ten dimensional designs

The ten refined `.scad` entry files use `lib/refined_forms.scad` with explicit
`width_mm`, `depth_mm` and `height_mm`, **not** a global `resize()` that
silently changes functional clearances. The other 40 source designs continue
to use the original `commerce_forms.scad`.

```bash
python3 scripts/audit_refined_commerce.py
python3 scripts/audit_refined_commerce.py --only ribbed-succulent-pot
python3 scripts/export_print_commerce.py --only handheld-console-stand --format 3mf
```

The audit requires OpenSCAD and Python `trimesh`; its JSON report checks only
basic mesh topology and envelopes. **Not a slicer or real-print certification.**
See the [design, fit and safety checklist](../docs/overseas-refinement-batch-01.md).

## Export

Install [OpenSCAD](https://openscad.org/), then from repository root:

```bash
python3 scripts/export_print_commerce.py --only moon-phase-light-sleeve --format stl
python3 scripts/export_print_commerce.py --only custom-desk-nameplate --format 3mf
python3 scripts/export_print_commerce.py --format stl
python3 scripts/export_print_commerce.py --dry-run --limit 5
```

Output is `dist-print/` (ignored by git), including a SHA-256 audit report.
Open a generated file in PrusaSlicer, OrcaSlicer, Cura or Bambu Studio, and validate
orientation, scale, non-manifold faces, holes, layer adhesion, supports and fit.

## Status and critical limits

- **Prototype source provided; production printability is UNVERIFIED.**
  Render/export success alone does not prove closed topology, watertightness,
  food-contact safety, durability, lighting safety or regulatory compliance.
- The lanterns are **non-electrical shrouds**: source includes no wiring, power
  supply or LED board. Test thermal clearances and only use certified safe modules.
- Nameplates use placeholder text "CUSTOM" and must be customized.
- The planter prototypes are not water-tightness certified and need leak testing.
- Display stands have not been verified for the weight/dimensions of a device.
- No children's toys, vehicle safety parts, protective equipment, food-contact
  ware, franchise characters or copied logos are claimed.
- The printed end product seller is responsible for product safety, listing
  descriptions, original-design rules, labels, shipping and applicable laws.

`catalog/collections/print-commerce-v13.json` records each design and its
market hypothesis. More research: `docs/print-commerce-v13.md`.
