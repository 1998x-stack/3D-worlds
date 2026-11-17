import { buildCommerceModel } from './print_commerce_engine.js';
/** Custom Desk Nameplate — original design, CAD source in printables/custom-desk-nameplate.scad */
export const assetMeta = {
  "id": "print-commerce.custom-desk-nameplate.001",
  "slug": "custom-desk-nameplate",
  "title": "Custom Desk Nameplate",
  "title_zh": "定制桌面姓名牌",
  "dimensions_m": [
    0.135,
    0.009,
    0.067
  ],
  "source_path": "src/models/custom_desk_nameplate.js",
  "generator": "createCustomDeskNameplate",
  "collection": "v1.3",
  "commerce_family": "gift",
  "variant": 1,
  "cad_path": "printables/custom-desk-nameplate.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/custom-desk-nameplate.webp"
};
export function createCustomDeskNameplate() { return buildCommerceModel(assetMeta); }
