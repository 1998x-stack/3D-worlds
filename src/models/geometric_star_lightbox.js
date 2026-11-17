import { buildCommerceModel } from './print_commerce_engine.js';
/** Geometric Star Lightbox — original design, CAD source in printables/geometric-star-lightbox.scad */
export const assetMeta = {
  "id": "print-commerce.geometric-star-lightbox.001",
  "slug": "geometric-star-lightbox",
  "title": "Geometric Star Lightbox",
  "title_zh": "几何星光灯罩",
  "dimensions_m": [
    0.09,
    0.116,
    0.09
  ],
  "source_path": "src/models/geometric_star_lightbox.js",
  "generator": "createGeometricStarLightbox",
  "collection": "v1.3",
  "commerce_family": "lantern",
  "variant": 3,
  "cad_path": "printables/geometric-star-lightbox.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/geometric-star-lightbox.webp"
};
export function createGeometricStarLightbox() { return buildCommerceModel(assetMeta); }
