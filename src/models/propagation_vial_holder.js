import { buildCommerceModel } from './print_commerce_engine.js';
/** Propagation Vial Holder — original design, CAD source in printables/propagation-vial-holder.scad */
export const assetMeta = {
  "id": "print-commerce.propagation-vial-holder.001",
  "slug": "propagation-vial-holder",
  "title": "Propagation Vial Holder",
  "title_zh": "水培试管支架",
  "dimensions_m": [
    0.113,
    0.108,
    0.113
  ],
  "source_path": "src/models/propagation_vial_holder.js",
  "generator": "createPropagationVialHolder",
  "collection": "v1.2",
  "commerce_family": "planter",
  "variant": 3,
  "cad_path": "printables/propagation-vial-holder.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/propagation-vial-holder.webp"
};
export function createPropagationVialHolder() { return buildCommerceModel(assetMeta); }
