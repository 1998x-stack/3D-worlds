import { buildCommerceModel } from './print_commerce_engine.js';
/** Cable Sort Desk Hub — original design, CAD source in printables/cable-sort-desk-hub.scad */
export const assetMeta = {
  "id": "print-commerce.cable-sort-desk-hub.001",
  "slug": "cable-sort-desk-hub",
  "title": "Cable Sort Desk Hub",
  "title_zh": "桌面线材分拣座",
  "dimensions_m": [
    0.133,
    0.076,
    0.09
  ],
  "source_path": "src/models/cable_sort_desk_hub.js",
  "generator": "createCableSortDeskHub",
  "collection": "v1.3",
  "commerce_family": "organizer",
  "variant": 2,
  "cad_path": "printables/cable-sort-desk-hub.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/cable-sort-desk-hub.webp"
};
export function createCableSortDeskHub() { return buildCommerceModel(assetMeta); }
