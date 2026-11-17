import { buildCommerceModel } from './print_commerce_engine.js';
/** Space Explorer Insignia — original design, CAD source in printables/space-explorer-insignia.scad */
export const assetMeta = {
  "id": "print-commerce.space-explorer-insignia.001",
  "slug": "space-explorer-insignia",
  "title": "Space Explorer Insignia",
  "title_zh": "太空探索徽记",
  "dimensions_m": [
    0.081,
    0.011,
    0.081
  ],
  "source_path": "src/models/space_explorer_insignia.js",
  "generator": "createSpaceExplorerInsignia",
  "collection": "v1.2",
  "commerce_family": "cosplay",
  "variant": 3,
  "cad_path": "printables/space-explorer-insignia.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/space-explorer-insignia.webp"
};
export function createSpaceExplorerInsignia() { return buildCommerceModel(assetMeta); }
