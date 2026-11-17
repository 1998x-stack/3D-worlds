import { buildCommerceModel } from './print_commerce_engine.js';
/** Minimal Arch Nightlight — original design, CAD source in printables/minimal-arch-nightlight.scad */
export const assetMeta = {
  "id": "print-commerce.minimal-arch-nightlight.001",
  "slug": "minimal-arch-nightlight",
  "title": "Minimal Arch Nightlight",
  "title_zh": "拱形氛围灯罩",
  "dimensions_m": [
    0.096,
    0.124,
    0.096
  ],
  "source_path": "src/models/minimal_arch_nightlight.js",
  "generator": "createMinimalArchNightlight",
  "collection": "v1.3",
  "commerce_family": "lantern",
  "variant": 5,
  "cad_path": "printables/minimal-arch-nightlight.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/minimal-arch-nightlight.webp"
};
export function createMinimalArchNightlight() { return buildCommerceModel(assetMeta); }
