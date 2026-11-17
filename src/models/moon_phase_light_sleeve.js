import { buildCommerceModel } from './print_commerce_engine.js';
/** Moon Phase Light Sleeve — original design, CAD source in printables/moon-phase-light-sleeve.scad */
export const assetMeta = {
  "id": "print-commerce.moon-phase-light-sleeve.001",
  "slug": "moon-phase-light-sleeve",
  "title": "Moon Phase Light Sleeve",
  "title_zh": "月相镂空灯罩",
  "dimensions_m": [
    0.084,
    0.108,
    0.084
  ],
  "source_path": "src/models/moon_phase_light_sleeve.js",
  "generator": "createMoonPhaseLightSleeve",
  "collection": "v1.2",
  "commerce_family": "lantern",
  "variant": 1,
  "cad_path": "printables/moon-phase-light-sleeve.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/moon-phase-light-sleeve.webp"
};
export function createMoonPhaseLightSleeve() { return buildCommerceModel(assetMeta); }
