import { buildCommerceModel } from './print_commerce_engine.js';
/** Retro Station Platform — original design, CAD source in printables/retro-station-platform.scad */
export const assetMeta = {
  "id": "print-commerce.retro-station-platform.001",
  "slug": "retro-station-platform",
  "title": "Retro Station Platform",
  "title_zh": "复古站台微缩场景",
  "dimensions_m": [
    0.142,
    0.087,
    0.099
  ],
  "source_path": "src/models/retro_station_platform.js",
  "generator": "createRetroStationPlatform",
  "collection": "v1.3",
  "commerce_family": "scenery",
  "variant": 5,
  "cad_path": "printables/retro-station-platform.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/retro-station-platform.webp"
};
export function createRetroStationPlatform() { return buildCommerceModel(assetMeta); }
