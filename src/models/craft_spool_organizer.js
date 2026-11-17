import { buildCommerceModel } from './print_commerce_engine.js';
/** Craft Spool Organizer — original design, CAD source in printables/craft-spool-organizer.scad */
export const assetMeta = {
  "id": "print-commerce.craft-spool-organizer.001",
  "slug": "craft-spool-organizer",
  "title": "Craft Spool Organizer",
  "title_zh": "手工线轴整理架",
  "dimensions_m": [
    0.139,
    0.084,
    0.096
  ],
  "source_path": "src/models/craft_spool_organizer.js",
  "generator": "createCraftSpoolOrganizer",
  "collection": "v1.2",
  "commerce_family": "organizer",
  "variant": 4,
  "cad_path": "printables/craft-spool-organizer.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/craft-spool-organizer.webp"
};
export function createCraftSpoolOrganizer() { return buildCommerceModel(assetMeta); }
