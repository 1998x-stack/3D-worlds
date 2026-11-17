import { buildCommerceModel } from './print_commerce_engine.js';
/** Modular Pencil Caddy — original design, CAD source in printables/modular-pencil-caddy.scad */
export const assetMeta = {
  "id": "print-commerce.modular-pencil-caddy.001",
  "slug": "modular-pencil-caddy",
  "title": "Modular Pencil Caddy",
  "title_zh": "模块化笔筒",
  "dimensions_m": [
    0.13,
    0.072,
    0.087
  ],
  "source_path": "src/models/modular_pencil_caddy.js",
  "generator": "createModularPencilCaddy",
  "collection": "v1.3",
  "commerce_family": "organizer",
  "variant": 1,
  "cad_path": "printables/modular-pencil-caddy.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/modular-pencil-caddy.webp"
};
export function createModularPencilCaddy() { return buildCommerceModel(assetMeta); }
