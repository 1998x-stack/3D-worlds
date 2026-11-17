# Overseas detail refinement · Batch 02 (20 existing SKUs)

> **Scope:** code-level detailed geometry + CAD topology checks only. **Not verified as
> printable, functionally fit-tested, mechanically safe, electrically certified or
> sale-ready.** No product photos, paid sales, review counts or physical samples are
> claimed.

## Why this batch exists

The original `print-commerce` collection introduced 50 original SKU hypotheses,
mostly using generic **family silhouettes**. Batch 01 refined 10 prototypes.
This batch replaces **another 20** with distinctive, product-specific Three.js
mesh assemblies and dimensioned OpenSCAD constructive solid geometry (CSG),
without copying marketplace meshes or modifying published catalog identities.
The existing total remains **565 assets / 14 categories**, with **30** overseas
products receiving dedicated detail passes and **20** retaining generic forms.

Every product preserves its ID, source module and `dimensions_m` metadata.
Products from batch 01 are not overwritten. Material, lighting and presentation
parts in Three.js approximate the design for visual review; they do **not** serve
as manufacturing-grade meshes. Manufacturing-source CAD remains in `printables/`.

## Individual design specification

`W × D × H` are millimeters in OpenSCAD (Z-up), equivalent to the catalog's
`[W, H, D]` values in meters (Y-up) for Three.js.

| # | Existing SKU | W × D × H (mm) | Distinctive structural details | Must test before use |
|---:|---|---:|---|---|
| 01 | `geometric-star-lightbox` | 90 × 90 × 116 | Pass-through five-point star perforations, reinforced banded open sleeve | LED heat, bridge thickness and projected shadow pattern |
| 02 | `forest-shadow-lantern` | 93 × 93 × 120 | Two staggered bands of original fir silhouettes and small cooling apertures | Bridge width, heat and optical shadow |
| 03 | `minimal-arch-nightlight` | 96 × 96 × 124 | Free-standing open arch tunnel, paired facades and lateral connecting rails | Tip-over, electrical component clearance (none supplied) |
| 04 | `cloud-whale-totem` | 92 × 80 × 125 | Floating whale on solid plinth, sculptural fins, twin tail flukes, crest spray | Fins and antenna impact failure; supports |
| 05 | `sleepy-owl-guardian` | 95 × 83 × 129 | Original sleepy owl with integrated brows, swept wings, tall ears and talons | Ear-tip fragility, undercuts and supports |
| 06 | `alpine-cabin-miniature` | 136 × 93 × 79 | Pitched gable chalet roof, chimney, trimmed windows and landscape details | Roof overhangs and scale miniature minimum feature size |
| 07 | `retro-station-platform` | 142 × 99 × 87 | Full-length canopy, paired pillars, diagonal braces, bench, sleepers and platform edge | Canopy supports, scale detail and unsupported beams |
| 08 | `craft-spool-organizer` | 139 × 96 × 84 | Eight tapered spool pegs, stop collars and rear classification rail | Spool inner bore range, peg shear and stability |
| 09 | `watch-display-cradle` | 113 × 103 × 89 | Raised curved watch cushion across two braces with a strap laydown shelf | Watch and strap fit, wristband load and contact surfaces |
| 10 | `miniature-tiered-riser` | 119 × 109 × 97 | Three progressive display decks, stacked feet, rear label band | Tier bearing loads, structural supports and balance |
| 11 | `universal-controller-cradle` | 135 × 100 × 74 | Paired raked support rails, twin front catches, raised rear spine | Specific controller geometry, button clearance and tipping |
| 12 | `tabletop-dice-tray` | 141 × 106 × 82 | Rounded tray plus integral corner dice-drop turret and interior guide baffles | Dice path performance, cleanup, tower bridging |
| 13 | `boardgame-token-sorter` | 144 × 109 × 86 | Six separately recessed wells, full-height integrated carrying bridge | Token sizes, handle fatigue, bridging and ergonomics |
| 14 | `arc-earring-display` | 112 × 82 × 99 | Suspended arched earring rail, ten perforated loop stations, solid foot | Earring-hook diameter, snagging, column strength |
| 15 | `ring-cone-tower` | 115 × 85 × 103 | Five individually graduated ring horns, decorative rim foot | Ring sizes, tip abrasion, slender horn strength |
| 16 | `geo-cactus-planter` | 110 × 110 × 104 | Twelve-facet tapered succulent pot, thickened rim, triple soil drain | Water, sunlight and layer adhesion; liner if needed |
| 17 | `custom-desk-nameplate` | 135 × 67 × 9 | Raised editable lettering, inset mounting holes, rounded profile | Correct spelling, font availability, lettering legibility |
| 18 | `house-number-plaque` | 145 × 71 × 11 | Raised configurable house digits, decorative parallel rails, mounting bores | Visibility, weathering, mounting and adhesive choice |
| 19 | `celestial-guild-medallion` | 75 × 75 × 9 | Original eight-point astral relief, dotted perimeter, round lanyard eyelet | Cord fit, pull strength and edges; decorative only |
| 20 | `alchemist-costume-brooch` | 84 × 84 × 12 | Original dodecagonal crest, layered six-point seal and symbolic flask | No integrated sharp pin; user-supplied attachment and fragility |

## Changes and source-of-truth

- **20 editable CAD entrypoints:** `printables/<slug>.scad` now import
  `printables/lib/refined_batch02_forms.scad`. For v1.3 compatibility each file
  retains the old `commerce_forms.scad` import plus its family/variant metadata.
  The old family module is **not invoked** by the new entrypoints.
- **20 intentionally different OpenSCAD designs:** radial cutouts, load paths,
  drilled earring holes, hollow planters, support braces, ornament features and
  editable personalized text. No global `resize()` of holes or walls.
- **20 inspectable gallery previews:** `src/models/refined_commerce_batch02.js`
  has a named-mesh construction branch for each slug. `buildCommerceModel()`
  first dispatches batch 02, then batch 01, then the 20 remaining generic assets.
- **No misleading release labels:** models stay `prototype_unverified` with
  market evidence at `category_level` and actual SKU sales `not_measured`.

### Build, test, audit

```bash
# Requires local OpenSCAD and Python trimesh for the mesh check.
python3 scripts/catalog.py validate
python3 -m unittest tests/test_refined_commerce_batch02.py -v
node --test tests/refined_commerce_batch02.test.mjs
python3 scripts/audit_refined_commerce_batch02.py \
  --output dist-print/refined-batch-02-audit.json

# One STL source export for slicer review, NOT a print certificate.
python3 scripts/export_print_commerce.py --only arc-earring-display --format stl
npm run build
```

The CAD audit independently renders all 20 STLs from their OpenSCAD sources,
checks positive volume, a single connected mesh, watertightness, consistent
triangle winding, 0.5 mm exterior dimension tolerance and SHA-256 for the
rendered file. Geometry-only success is called
`geometry_pass_manual_review_required` and is **not** a printability grade.
Temporary audited STLs / reports are not promoted as certified manufacturer
outputs, and the repo's original catalog IDs remain unchanged.

### Product-specific release checklist

1. **Geometry:** visually inspect CSG cutout semantics, assess local minimum
   walls / holes / overhangs with slicer preview, do not rely on watertightness alone.
2. **Material & slicing:** choose PLA/PETG/etc for intended conditions; log
   nozzle, orientation, layer height, infill, supports, grams and duration.
3. **Fit:** measure real device/strap/cable/spool/jewelry components with
   calipers; perform printed fit and repeated insertion/removal tests.
4. **Safety:** lamps are **passive shrouds**; no electronics or heat approval.
   Cosplay badges are **decorative**, contain no sharp attachment pin. Not toys,
   protective gear, food-contact goods or load-bearing safety components.
5. **Commerce:** original-design rights, clear physical-product listings,
   correct warning/age/use labels where applicable, real finished-product
   photos, shipping durability, and destination-market regulatory review.

### Batch boundaries

Batch 01: 10/50 already refined. Batch 02: +20/50, for **30/50** total. The
remaining **20/50** use the old family-level preview/CAD and should be refined
in subsequent releases. This document does **not** interpret a category-level
market signal as sales validation for any SKU.
