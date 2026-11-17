# V1.4 acceptance and printing caveats

- [x] 30 new, unique stable IDs and source-backed individual Three.js recipe modules.
- [x] 13 general scene categories and immutable historical 535 models preserved.
- [x] Every new source has explicit metadata, a distinct named mesh recipe, MIT attribution, metric dimensions, and an export factory.
- [x] Static catalog bootstrap raised maintained at 600 so that all 565 models are discoverable.
- [ ] Execute repository CI, complete headless WebP/AVIF + GLB LOD generation, and verify gallery smoke on the resulting branch.
- [ ] Physical 3D printing, slicer, watertightness, strength, supports and tolerance qualification per asset; **not claimed**.

## Release gates

```bash
python3 scripts/catalog.py validate && python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
npm install --no-audit --no-fund
node scripts/validate_models.mjs
npm run generate:assets && npm run verify:assets && npm run build
npm run test:gallery
```

## Source interpretation

Concepts were independently authored from qualitative commercial demand signals, and are nonfunctional visual models unless individually validated for manufacturing. No Amazon/eBay seller geometry or brand/model likeness was copied.

## V1.4.1 detail revision gates

- 30/30 geometry_revision fields equal `1.4.1` in model source and catalog.
- Parts per model increase by at least eight, with three or more distinguishable material finishes.
- Validate portable `rounded-box`, `hex`, and `arc` recipes in the existing Three.js source-copy flow.
- Ensure all 565 registered models pass generation & bounds checks.
- **No physical print certification:** in particular, labels, micro rivets, fine-scale slots and optical glass are preview geometry only.

See [the side-by-side geometric change log](v14-fine-detail-refinement.md).
