import { buildCommerceModel } from './print_commerce_engine.js';
/** Desert Roadway Diorama — original design, CAD source in printables/desert-roadway-diorama.scad */
export const assetMeta = {
  "id": "print-commerce.desert-roadway-diorama.001",
  "slug": "desert-roadway-diorama",
  "title": "Desert Roadway Diorama",
  "title_zh": "沙漠公路微景观",
  "dimensions_m": [
    0.133,
    0.075,
    0.09
  ],
  "source_path": "src/models/desert_roadway_diorama.js",
  "generator": "createDesertRoadwayDiorama",
  "collection": "v1.3",
  "commerce_family": "scenery",
  "variant": 2,
  "cad_path": "printables/desert-roadway-diorama.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/desert-roadway-diorama.webp"
};
export function createDesertRoadwayDiorama() { return buildCommerceModel(assetMeta); }
