import { buildCommerceModel } from './print_commerce_engine.js';
/** Cloud Whale Totem — original design, CAD source in printables/cloud-whale-totem.scad */
export const assetMeta = {
  "id": "print-commerce.cloud-whale-totem.001",
  "slug": "cloud-whale-totem",
  "title": "Cloud Whale Totem",
  "title_zh": "云鲸图腾摆件",
  "dimensions_m": [
    0.092,
    0.125,
    0.08
  ],
  "source_path": "src/models/cloud_whale_totem.js",
  "generator": "createCloudWhaleTotem",
  "collection": "v1.3",
  "commerce_family": "figurine",
  "variant": 1,
  "cad_path": "printables/cloud-whale-totem.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/cloud-whale-totem.webp"
};
export function createCloudWhaleTotem() { return buildCommerceModel(assetMeta); }
