import { buildCommerceModel } from './print_commerce_engine.js';
/** Desktop Herb Planter — original design, CAD source in printables/desktop-herb-planter.scad */
export const assetMeta = {
  "id": "print-commerce.desktop-herb-planter.001",
  "slug": "desktop-herb-planter",
  "title": "Desktop Herb Planter",
  "title_zh": "桌面香草盆",
  "dimensions_m": [
    0.119,
    0.116,
    0.119
  ],
  "source_path": "src/models/desktop_herb_planter.js",
  "generator": "createDesktopHerbPlanter",
  "collection": "v1.2",
  "commerce_family": "planter",
  "variant": 5,
  "cad_path": "printables/desktop-herb-planter.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/desktop-herb-planter.webp"
};
export function createDesktopHerbPlanter() { return buildCommerceModel(assetMeta); }
