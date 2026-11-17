import { buildCommerceModel } from './print_commerce_engine.js';
/** Aurora Wave Lantern — original design, CAD source in printables/aurora-wave-lantern.scad */
export const assetMeta = {
  "id": "print-commerce.aurora-wave-lantern.001",
  "slug": "aurora-wave-lantern",
  "title": "Aurora Wave Lantern",
  "title_zh": "极光波纹灯罩",
  "dimensions_m": [
    0.087,
    0.112,
    0.087
  ],
  "source_path": "src/models/aurora_wave_lantern.js",
  "generator": "createAuroraWaveLantern",
  "collection": "v1.2",
  "commerce_family": "lantern",
  "variant": 2,
  "cad_path": "printables/aurora-wave-lantern.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/aurora-wave-lantern.webp"
};
export function createAuroraWaveLantern() { return buildCommerceModel(assetMeta); }
