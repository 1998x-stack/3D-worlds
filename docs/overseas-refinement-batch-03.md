# Overseas print-commerce · Detail refinement batch 03 (final 20 SKUs)

> **Engineering status:** CAD mesh topology and gallery preview code checked. These are
> original prototype designs, not sale-ready products, slicer-certified files, or
> physically fit-tested parts. No marketplace sales, reviews, or customer demand are
> claimed.

## Scope

This batch replaces the generic family silhouettes for the final 20 assets in the
existing 50-SKU overseas `print-commerce` collection. Together with batches 01 and 02,
all 50 SKUs now have a dedicated Three.js preview and a parameterized OpenSCAD entry
point. Published IDs, family/variant values, dimensions, source paths, collection
version, and the 565-asset global catalog count are preserved.

All CAD dimensions are millimeters, with X = width, Y = depth, Z = height. The
catalogue's `dimensions_m` remains `[width, height, depth]`.

## Refined SKUs

| SKU | CAD envelope W × D × H (mm) | Product-specific structure |
|---|---:|---|
| Lunar Fox Bust | 98 × 86 × 133 | Layered muzzle, pointed ears, cheek tufts, eye relief and integrated curled tail |
| Garden Robot Companion | 101 × 89 × 137 | Segmented boots, leg/arm joints, screen panel, optical sensors and antenna |
| Mountain Spirit Figurine | 104 × 92 × 141 | Faceted mantle, paired crystal horns, face relief, stone hands and shoulder shards |
| Harbor Cargo Diorama | 130 × 87 × 71 | Three ribbed containers, portal crane, hoist, bollards and quay edge |
| Desert Roadway Diorama | 133 × 90 × 75 | Raised asphalt, lane dashes, dunes, cactus forms and roadside marker |
| Urban Street Corner | 139 × 96 × 83 | Corner storefront, framed windows, awning, streetlamp, bench and crossing |
| Collectible Display Plinth | 110 × 100 × 85 | Weighted foot, tapered collar, fluted pedestal, stepped deck and index pins |
| Eyewear Display Stand | 122 × 112 × 101 | Paired uprights, bridge saddle, temple rests, nose grips and foot pads |
| Retro Cartridge Rack | 138 × 103 × 78 | Six divided bays, cartridge stops, rear retaining wall and carry rail |
| Bracelet Display Arch | 118 × 88 × 107 | Continuous curved arch, ten bracelet retainers and integrated feet |
| Pendant Sorting Tray | 121 × 91 × 111 | Six recessed compartments, rear hook rail, six hanging posts and header |
| Modular Jewelry Plinth | 124 × 94 × 115 | Three stepped podiums, ring cones, jewel pins and side necklace posts |
| Bonsai Display Pot | 116 × 116 × 112 | Tapered hollow bowl, rolled rim, drainage bores and radial root flutes |
| Desktop Herb Planter | 119 × 119 × 116 | Three planting bays, drainage ports and integrated climbing trellis |
| Wedding Place Card | 140 × 69 × 10 | Card slot, angled back support, front stop and editable label |
| Anniversary Message Plaque | 150 × 73 × 12 | Recessed message field, raised frame, corner rosettes and mounting bores |
| Monogram Desk Coaster | 155 × 75 × 13 | Dual cup wells, raised rings, inset medallion and editable monogram |
| Fantasy Crest Badge | 78 × 78 × 10 | Shield outline, raised inner border, six-point heraldic star and eyelet |
| Space Explorer Insignia | 81 × 81 × 11 | Insignia disc, orbit tracks, rocket relief, navigation stars and lanyard aperture |
| Mythic Rune Emblem | 87 × 87 × 13 | Octagonal core, concentric relief rings and eight original rune groups |

## Verification performed

Executed locally with OpenSCAD 2021.01 and trimesh 4.11.1:

- 20/20 CAD entry points rendered to non-empty STL files.
- 20/20 meshes are watertight and have consistent winding.
- 20/20 meshes contain exactly one connected component.
- 20/20 meshes have positive volume.
- Measured X/Y/Z envelopes match catalogue dimensions within ±0.5 mm.
- The Three.js tests enforce unique named mesh parts, valid vertex buffers, ground
  contact, and exact catalogue preview bounds after normalization.

Re-run:

```bash
python scripts/audit_refined_commerce_batch03.py --output dist-print/refined-batch-03-audit.json
python -m unittest tests/test_refined_commerce_batch03.py -v
node --test tests/refined_commerce_batch03.test.mjs
npm run test:refined-commerce
npm run build
```

The CAD audit is a geometry-only gate. It does not check slicer toolpaths, minimum
feature resolution for a particular nozzle, bridge/support quality, material shrink,
mechanical strength, fit with third-party products, weathering, food contact, skin
contact, or electrical/fire safety. Perform slicer preview, tolerance coupons,
physical print tests, and product-specific safety review before selling or making
functional claims.

## Release policy

- Preserve existing IDs and `prototype_unverified` status.
- Do not present generic category research as measured product sales.
- Use physical photographs only after real samples have been printed.
- Lighting and electronics are not included in this batch.
- For jewelry and cosplay parts, verify skin-contact materials, edges, pin/hook
  attachment, and local consumer product rules before use.

## Audit follow-up · second detail pass (2026-11-18)

Following the first PR audit, each of the same **20 existing** batch-03 SKUs
received a second, SKU-specific CAD/preview detail pass. This is not a new set
of products: all 50 overseas v1.3 products have now received a dedicated first
pass across three batches, and this final set of 20 received a further pass.
Stable IDs, source modules, original catalogue bounds, licensing and the
**565-model total** remain unchanged.

- Source of manufacturing geometry:
  `printables/lib/refined_batch03_forms.scad` plus
  `printables/lib/refined_batch03_v2_details.scad`. Every batch-03 `.scad`
  entry point now selects `refined_batch03_v2_form(...)` without global resizing.
- Three.js presentation: `src/models/refined_commerce_batch03.js` adds the
  product-specific details from `refined_commerce_batch03_v2.js` *before*
  restoring the catalogue bounds. It keeps separate named meshes, PBR materials
  and `manufacturingStatus='unverified'`.
- Actual CAD changes include ear and cheek reliefs, robot face and boot details,
  stone carving, container door locks and crane joints, desert roadway edge
  markings, storefront mullions, plinth fluting and a shallow display recess,
  contact rails for eyewear, cartridge dividers, bracelet/hook supports,
  six-pocket jewelry pads, planter lip relief, stable nonoverhanging herb labels,
  wedding and anniversary embossing, and refined original insignia glyphs.
- Corrected a previously almost-zero-height monogram lettering extrusion:
  source uses a meaningful 1.1 mm extrude, staying within the published envelope.
- Fixed initial second-pass union errors by connecting all decorations to their
  structural base; also moved out-of-bounds labels and fixed an accidental
  radial coordinate transform that expanded the coaster envelope.

### Repeatable verification

```sh
python3 -m unittest discover -s tests -p 'test_refined_commerce_batch03*.py' -v
node --test tests/refined_commerce_batch03.test.mjs tests/refined_commerce_batch03_v2.test.mjs
python3 scripts/audit_refined_commerce_batch03.py --output .cache/print/refined-batch-03-audit.json
npm run build
```

The second-pass local STL QA re-rendered each source using OpenSCAD and tested
with trimesh. **20/20** passed watertightness, consistent winding, positive
volume, a single connected component and matching dimensions within ±0.5 mm.
All 20 resulting mesh SHA-256 values differ from the previous batch-03 geometry,
with total triangle count increasing from **71,804** to **96,352**. More triangles
reflect authored detail, *not* better game performance, functional fitness or
printer compatibility. The model LOD/glTF workflow remains separate from CAD.

The prior CI run for PR #27 failed after completing CAD checks; it did **not**
verify all remaining steps. CAD checks are separated into a parallel CI job in
this revision, with deployment gated on both CAD and gallery verification.
If either fails, deployment must not be treated as successful.

### Product safety limitations

These are CAD and surface-geometry candidates, not photographs or tested
manufactured goods. No SKU has verified minimal thickness, bridging and support
conditions, slicer layers, impact/wear/thermal performance, device fit, adhesion,
food/water contact or marketplace/region-specific compliance. Product buyers
must not be told any of these designs are sale-ready or print-certified.
