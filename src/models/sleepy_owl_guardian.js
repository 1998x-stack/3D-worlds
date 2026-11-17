import { buildCommerceModel } from './print_commerce_engine.js';
/** Sleepy Owl Guardian — original design, CAD source in printables/sleepy-owl-guardian.scad */
export const assetMeta = {
  "id": "print-commerce.sleepy-owl-guardian.001",
  "slug": "sleepy-owl-guardian",
  "title": "Sleepy Owl Guardian",
  "title_zh": "沉睡猫头鹰守护雕像",
  "dimensions_m": [
    0.095,
    0.129,
    0.083
  ],
  "source_path": "src/models/sleepy_owl_guardian.js",
  "generator": "createSleepyOwlGuardian",
  "collection": "v1.2",
  "commerce_family": "figurine",
  "variant": 2,
  "cad_path": "printables/sleepy-owl-guardian.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/sleepy-owl-guardian.webp"
};
export function createSleepyOwlGuardian() { return buildCommerceModel(assetMeta); }
