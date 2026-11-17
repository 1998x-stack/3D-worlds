# 30 New 3D Assets — Collection v0.3

These 30 items are original **procedural Three.js models** authored in
`src/models/*.js`, not externally scraped content or disguised placeholders.
Every asset receives an immutable catalog ID, bilingual names, dimensions,
a license, and a unique assembly recipe editable through
`src/models/recipe_engine.js`.

| Category | Models | Design focus |
|---|---|---|
| Furniture (4) | Marble Dining Table, Swivel Office Chair, Round Coffee Table, Oak Wardrobe | Home/office silhouette and modular supports |
| Kitchen (6) | Smart Refrigerator, Induction Stove, Kitchen Sink, Microwave, Electric Kettle, Wooden Bar Stool | Household appliance parts and handles |
| Architecture (4) | Arched Wood Door, Industrial Window, Concrete Stairs, Picket Fence | Building blockouts and repeated pieces |
| Urban (4) | Streetlight, Park Bench, Traffic Signal, Fire Hydrant | Streetscape visual identity |
| Nature (4) | Alpine Pine, Granite Boulder, Forest Mushrooms, Desert Cactus | Outdoor biome variation |
| Electronics (2) | Studio Monitor, Digital Camera | Display and lens geometry |
| Tools (2) | Steel Toolbox, Claw Hammer | Workshop hardware |
| Sports (2) | Soccer Ball, Basketball Hoop | Playground and sports scene props |
| Sci-fi (2) | Patrol Spacecraft, Survey Drone | Stylized non-rigged sci-fi game assets |

**Totals:** 30 new assets + 15 v0.2 assets = 45 procedural models,
across 13 categories.

## Why modular recipes?

For a user-facing editable asset store, native Three.js generator code is a
feature, not a nuisance. A recipe is a JSON-like specification of original
named `box`, `sphere`, `cylinder`, `torus` and `rod` parts.
The engine creates mesh hierarchies with standard materials and scales
their bounding envelope to declared meters. A single asset's source
can be copied as a self-contained module that includes the recipe engine.

The engine deliberately does **not** claim physically correct CAD topology,
rigs, collision hulls, or UV-unwrapped texture packs. Advanced
manufacturing CAD requires a separate parametric B-rep pipeline.
The goal here is reliable, reusable, game-scene blockouts and props.

## Review guidance

Every new model must:
- Compile and return a non-empty `THREE.Group`.
- Have uniquely named mesh parts, finite dimensions and floor origin.
- Be visible in the static Gallery with generated 3D thumbnail.
- Export a valid GLB and have LOD0/1/2 variants.
- Pass SQLite record lookup and preserve license/provenance.
- Be independently reviewed for appearance before marketing as a polished asset.

P0 thumbnails and P1 binaries are generated automatically by GitHub Actions
during the Pages build rather than committed as source-controlled binary assets.
