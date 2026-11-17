import { buildCommerceModel } from './print_commerce_engine.js';
/** Urban Street Corner — original design, CAD source in printables/urban-street-corner.scad */
export const assetMeta = {
  "id": "print-commerce.urban-street-corner.001",
  "slug": "urban-street-corner",
  "title": "Urban Street Corner",
  "title_zh": "城市街角微缩场景",
  "dimensions_m": [
    0.139,
    0.083,
    0.096
  ],
  "source_path": "src/models/urban_street_corner.js",
  "generator": "createUrbanStreetCorner",
  "collection": "v1.2",
  "commerce_family": "scenery",
  "variant": 4,
  "cad_path": "printables/urban-street-corner.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/urban-street-corner.webp"
};
export function createUrbanStreetCorner() { return buildCommerceModel(assetMeta); }
