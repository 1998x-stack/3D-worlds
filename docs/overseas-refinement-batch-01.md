# Overseas print-commerce · Detail refinement batch 01 (10 SKUs)

**State: code-level / mesh-topology refinement, NOT sale-ready or print-verified.**
This batch improves **ten existing** original designs in the v1.3 overseas
`print-commerce` family. It does not increase the 565-asset catalog count, modify
published model IDs, clone marketplace listings, claim sales, or change ownership
of a design. The other forty print-commerce assets retain their existing engines.

## Engineering changes

Every selected item now has two deliberately distinct representations:

1. **Three.js preview:** a dedicated source branch with named meshes, segmented
   details, openings, rails, ribs and appropriate materials. `buildCommerceModel`
   dispatches the ten slugs into `refined_commerce_engine.js`; the remaining forty
   still use the generic family engine. Visual approximations are not a printable
   surface, and GLB should not be treated as an STL source.
2. **Parametric OpenSCAD CAD:** one dimensioned `.scad` entry per SKU, backed by
   `printables/lib/refined_forms.scad`. Core overall dimensions, wall thickness,
   holes and clearances are in millimeters. No global `resize()` that silently
   scales critical fit surfaces. The older `commerce_forms.scad` remains the
   unmodified compatibility library for the forty non-refined designs.

| SKU | CAD envelope (W × D × H, mm) | Detail and use-case engineering | Specific manual review |
|---|---:|---|---|
| `moon-phase-light-sleeve` | 84 × 84 × 108 | Real radial moon-phase openings, lower pinholes, annular top/bottom bands, open core | Heat, LED spacing, minimum bridges, supports |
| `aurora-wave-lantern` | 87 × 87 × 112 | Eight twisted ribs, three vent bands, radial vents, open sleeve | Overhangs, thermal and optical testing |
| `modular-pencil-caddy` | 130 × 87 × 72 | Three independently bored cylindrical pencil wells with 4.2 mm floor | Cup depth, thin-wall extrusion, stability |
| `cable-sort-desk-hub` | 133 × 90 × 76 | Five open-top channels with varying radii, rear spine and desktop guides | Actual cable diameter, bend radius, grip |
| `paintbrush-workshop-rack` | 136 × 93 × 80 | Perforated two-level rack, 8 graded bores, posts and catch channels | Bridge support and brush handle fit |
| `studio-tool-bin` | 142 × 99 × 88 | Six compartments, integral separators, raised front label rail | Tool dimensions, wall strength and warping |
| `trading-card-display` | 116 × 106 × 93 | Rearward inclined backrest, front stop lip, side rails and foot studs | Card/sleeve thickness, tilt and tip resistance |
| `handheld-console-stand` | 147 × 112 × 90 | Two leaning support rails, device lips and rear spacer, service pass-through | Device model, port access, weight and anti-slip pads |
| `ribbed-succulent-pot` | 107 × 107 × 100 | 24 exterior vertical flutes, open pot, rolled lip, five drainage holes | Leak and drainage behavior, UV/moisture durability |
| `propagation-vial-holder` | 113 × 113 × 108 | Five real vial apertures, four-column elevated deck, 5 drip recesses | Tube diameters, fall/drop test, wet-base stability |

## Repeatable checks

```bash
python3 scripts/catalog.py validate
python3 -m unittest tests/test_refined_commerce.py
node --test tests/refined_commerce.test.mjs
python3 scripts/audit_refined_commerce.py --output dist-print/refined-batch-01-audit.json
npm run build
```

The audit requires **OpenSCAD + Python `trimesh`**. It independently renders
STL from CAD sources, checks connectivity, winding, watertightness, positive
volume and an outer bounding-box tolerance of 0.5 mm, and emits a per-SKU JSON
report. All checks are **geometry-only**; pass means
`mesh_pass_manual_review_required`, not physically certified. A real slicer
review, material choice and printed fit sample are required for each SKU.

### Initial CAD bench results

Executed on the ten CAD files with OpenSCAD and trimesh during this refinement.
All ten generated nonempty STL meshes with positive volume, **one connected
component**, consistent winding and watertight topology. Measured envelopes
matched the table within ±0.1 mm (a 0.5 mm automated tolerance is used).
This is not evidence of minimum wall thickness, successful layer slicing,
mechanical strength or commercial fitness.

## Print/commerce release gate

- **G0 source:** dimensions, SPDX and stable IDs, OpenSCAD entry points and
  dedicated previews present.
- **G1 geometry:** rerun the report in your own toolchain; verify slice previews,
  bridge/support plans and printer-specific constraints.
- **G2 fit:** inspect dimensioned mating parts and desired clearance with calipers;
  verify real card/device/vial/cable interfaces, not a generic market label.
- **G3 physical:** print test pieces, document orientation, nozzle, material,
  layer height, supports, actual dimensions, deformation and drop/heat tests.
- **G4 listing:** photograph the *physical* prints, record provenance,
  accurate product dimensions and warnings, check local product safety rules
  and original-design policies. Do not market light sleeves with untested
  heat-generating electronics, and do not claim food-contact suitability.

### Batch 02 guidance

Continue in small controlled sets, prioritizing functional fits and original
artwork. Do not change these stable IDs if creating a substantially different
product: add an explicit new version instead. Track SKU-level research and
physical test outcomes without presenting category popularity as sales proof.
