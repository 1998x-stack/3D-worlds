# Ten New Assets — Design Briefs v0.2

All ten designs are original, unrigged procedural Three.js scene props.
Dimensions are **declared approximate envelopes**, meters, +Y up, grounded
origin. They are not manufacturing CAD solids or physically calibrated PBR
assets. Every model has a distinct source module and stable catalog ID.

| Asset | Category | Dimensions (W×H×D m) | Functional design | Prototype limitation |
|---|---|---|---|---|
| Clay Linen Sofa | Furniture | 2.05×0.89×0.89 | Two seats, armrests, accent cushion | No physics/cloth deformation |
| Oak Studio Bookshelf | Furniture | 1.14×1.98×0.34 | Four populated shelves, independent books | Books not instanced |
| Coastal Queen Bed | Furniture | 1.72×0.92×2.12 | Headboard, mattress, pillows, duvet | No fabric simulation |
| Flared Floor Lamp | Furniture | 0.66×1.83×0.66 | Flared shade, metal shaft, weighted base | Non-emissive shade |
| Vessel Sink Vanity | Bathroom | 0.96×1.12×0.57 | Basin, wood drawers, chromed tap | Not CAD-accurate plumbing |
| Freestanding Oval Bath | Bathroom | 1.76×0.70×0.86 | Oval ceramic shell and water | Water is material, not fluid |
| Green Canopy Tree | Nature | 1.85×2.72×1.40 | Branches and layered crown | No wind/growth animation |
| City Electric Sedan | Vehicles | 1.96×1.33×3.31 | Wheels, glass, body and lamps | No steering/wheel rig |
| Minimal Laptop | Electronics | 0.35×0.27×0.25 | Open display, keyboard, trackpad | No actual screen contents |
| Monstera Pot | Decor | 0.84×1.10×0.80 | Ceramic pot, soil, stems, leaves | Botanical stylization |

### Model quality process

1. Each generator returns \`THREE.Group\` and avoids global scene coupling.
2. Named meshes make asset parts understandable for agent manipulation.
3. Every item has a localized name, keywords, author, SPDX license, category.
4. Automated checks reject empty scene, duplicate part names, origin below
   floor, unreasonable bounds and >100k triangles.
5. GLB can be exported in the Inspector; content-addressed batch GLB
   ingestion is a separate workflow for actual binary assets.
6. Manual visual QA should still inspect silhouettes, proportions, small
   display sizes, material coherence, real engine load and accessibility.

### Future high-value collections

Interior: kitchen appliances, modular cabinets, lights, office fixtures.
Urban: streets, kiosks, signs, benches, traffic props.
Games: character rigs, collision proxies, modular levels, interactive doors.
Nature: terrain tiles, rocks, vegetation LOD, sky and water assets.

Future assets must preserve stable IDs and provenance; category labels
are sourced from \`catalog/categories.json\`.
