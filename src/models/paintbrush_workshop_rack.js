import { buildCommerceModel } from './print_commerce_engine.js';
/** Paintbrush Workshop Rack — original design, CAD source in printables/paintbrush-workshop-rack.scad */
export const assetMeta = {
  "id": "print-commerce.paintbrush-workshop-rack.001",
  "slug": "paintbrush-workshop-rack",
  "title": "Paintbrush Workshop Rack",
  "title_zh": "手工画笔整理架",
  "dimensions_m": [
    0.136,
    0.08,
    0.093
  ],
  "source_path": "src/models/paintbrush_workshop_rack.js",
  "generator": "createPaintbrushWorkshopRack",
  "collection": "v1.2",
  "commerce_family": "organizer",
  "variant": 3,
  "cad_path": "printables/paintbrush-workshop-rack.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/paintbrush-workshop-rack.webp"
};
export function createPaintbrushWorkshopRack() { return buildCommerceModel(assetMeta); }
