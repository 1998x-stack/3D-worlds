# Worked example: author a side table

This is a **reproducible recipe**, not a claim that a new side-table has already been committed. It uses the existing scaffold path and validation architecture.

## 1. Design

A compact side table: `0.8 × 0.6 × 0.8 m`, furniture category, stylized wood, 4 legs, one top slab, lower shelf. All meshes receive stable names. Use [brief](../assets/model-brief.md) and check for duplicate `side-table` slug first.

## 2. Scaffold

```bash
python3 scripts/catalog.py validate
python3 scripts/new_model.py --slug side-table --category furniture \
  --title "Side Table" --title-zh "边桌" --dimensions 0.8 0.6 0.8
```

If already exists, choose another slug; do not overwrite. The scaffold registers `furniture.side-table.001` **and** writes `src/models/side_table.js`.

## 3. Replace placeholder mesh

Edit `createSideTable()` and give the top, legs and shelf physically meaningful sizes. Example modeling pseudocode:

```js
// inside createSideTable():
box(root, 'top', [0.8, 0.05, 0.8], [0, 0.575, 0], wood);
for (const [index, x, z] of [[0,-0.32,-0.32],[1,0.32,-0.32],
                           [2,-0.32,0.32],[3,0.32,0.32]]) {
  box(root, 'leg-' + index, [0.06, 0.55, 0.06], [x, 0.275, z], wood);
}
box(root, 'lower-shelf', [0.68, 0.04, 0.68], [0, 0.20, 0], wood);
```

The example assumes `wood` is a valid MeshStandardMaterial created in the function. Verify helpers and local root bounds in actual code.

## 4. Validate and render

```bash
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
node scripts/validate_models.mjs
npm run build
# When Playwright/Chromium are installed:
npm run generate:assets
npm run verify:assets
npm run test:gallery
```

Compare 3/4, side, and top views. Confirm no leg sinks below y=0. Export and independently load the GLB. Include `primitives.js` with copied code if exporting source to another game project.

## 5. Report

Use [acceptance report](../assets/acceptance-report.md). Mark renderer/browser gates skipped if unavailable. Mention exact resulting ID, source file, actual dimensions and measured triangles. Avoid fabricated render counts.

