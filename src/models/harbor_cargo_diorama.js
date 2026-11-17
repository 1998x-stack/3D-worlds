import { buildCommerceModel } from './print_commerce_engine.js';
/** Harbor Cargo Diorama — original design, CAD source in printables/harbor-cargo-diorama.scad */
export const assetMeta = {
  "id": "print-commerce.harbor-cargo-diorama.001",
  "slug": "harbor-cargo-diorama",
  "title": "Harbor Cargo Diorama",
  "title_zh": "港口集装箱微景观",
  "dimensions_m": [
    0.13,
    0.071,
    0.087
  ],
  "source_path": "src/models/harbor_cargo_diorama.js",
  "generator": "createHarborCargoDiorama",
  "collection": "v1.2",
  "commerce_family": "scenery",
  "variant": 1,
  "cad_path": "printables/harbor-cargo-diorama.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/harbor-cargo-diorama.webp"
};
export function createHarborCargoDiorama() { return buildCommerceModel(assetMeta); }
