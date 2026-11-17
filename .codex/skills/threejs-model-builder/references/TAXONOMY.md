# Asset category taxonomy and differentiated design

The **actual** category IDs live in `catalog/categories.json`; read the file before registration. The current 13 IDs are:

| ID | Modeling focus | Typical named components / checks |
| --- | --- | --- |
| `furniture` | seating, storage, tables | support legs, joints, seat, doors, believable proportions |
| `bathroom` | fixtures and accessories | basins, taps, handles, mirror planes, plumbing abstraction |
| `characters` | stylized mannequin or game NPC blockout | head/body/limbs, proportions, stance; rig **only if implemented** |
| `nature` | trees, shrubs, rocks and terrain props | asymmetry, leaf clusters, base contact, controlled variation |
| `vehicles` | road, water, transport props | wheel axes, windows, doors, directional silhouette |
| `electronics` | devices and peripherals | screens, ports, vents, controls, material segmentation |
| `decor` | interior ornaments | layers, distinct silhouettes, natural-looking variation |
| `kitchen` | kitchen appliances and work surfaces | handles, functional zones, knobs, shelves |
| `architecture` | building pieces | join alignment, thickness, openings, grid modularity |
| `urban` | street fixtures and city props | sign readability, pole/fixture support, pedestrian scale |
| `tools` | hand/power tools | grip, functional head, guard, ergonomic scale |
| `sports` | equipment and court props | familiar proportions, nets/frames, tension cues |
| `scifi` | fictional tech structures/props | logic of panels, emitted-light region, intentional mechanical hierarchy |

## Category selection

Use primary functional context, not material color. A pot plant for room dressing is `decor`; a tree for outdoors is `nature`. A laptop is `electronics`, an arcade cabinet may be `electronics` or `scifi` depending on its role—inspect existing taxonomy and avoid gratuitous new IDs.

## Bulk collection matrix

Before generating 30, 40 or 50 new assets, create a planning table containing: unique slug, current category, English and Chinese title, characteristic silhouette, minimum five meaningful parts when authoring a v0.4-style scene prop, intended dimensions, color system, distinguishable interactions, expected complexity, export/preview QA. Reject duplicative "same cube, different color" additions.

Sampling ideas for distinct profiles (not a claim of implemented assets):

- Furniture: telescoping lectern vs modular bunk vs folding stool.
- Nature: tangled roots vs layered coral vs irregular canyon rock.
- Urban: ticket kiosk vs bridge barrier vs public drinking fountain.
- Scifi: modular reactor console vs orbital docking arm vs survey beacon.
- Sports: foldable goal frame vs cricket wicket vs ski rack.

Keep balance by genuine use cases, not arithmetic alone. Every asset should be discoverable by stable English ASCII tags and, when possible, bilingual titles. Preserve historical `catalog/collections/v04.json` contents.

## Naming and identity

Slugs are lowercase kebab case such as `folding-camp-chair`; generator symbols are PascalCase suffixes such as `createFoldingCampChair`; module path uses underscores (`folding_camp_chair.js`); asset ID format in this repository follows `<category>.<slug>.001`. Check exact restrictions in `scripts/new_model.py` / `scripts/catalog.py` and schema, not unverified assumptions.

