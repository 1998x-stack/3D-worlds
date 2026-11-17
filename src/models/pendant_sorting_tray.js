import { buildCommerceModel } from './print_commerce_engine.js';
/** Pendant Sorting Tray — original design, CAD source in printables/pendant-sorting-tray.scad */
export const assetMeta = {
  "id": "print-commerce.pendant-sorting-tray.001",
  "slug": "pendant-sorting-tray",
  "title": "Pendant Sorting Tray",
  "title_zh": "吊坠分格托盘",
  "dimensions_m": [
    0.121,
    0.111,
    0.091
  ],
  "source_path": "src/models/pendant_sorting_tray.js",
  "generator": "createPendantSortingTray",
  "collection": "v1.2",
  "commerce_family": "jewelry",
  "variant": 4,
  "cad_path": "printables/pendant-sorting-tray.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/pendant-sorting-tray.webp"
};
export function createPendantSortingTray() { return buildCommerceModel(assetMeta); }
