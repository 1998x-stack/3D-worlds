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
