import { buildCommerceModel } from './print_commerce_engine.js';
/** Tabletop Dice Tray — original design, CAD source in printables/tabletop-dice-tray.scad */
export const assetMeta = {
  "id": "print-commerce.tabletop-dice-tray.001",
  "slug": "tabletop-dice-tray",
  "title": "Tabletop Dice Tray",
  "title_zh": "桌游骰子托盘",
  "dimensions_m": [
    0.141,
    0.082,
    0.106
  ],
  "source_path": "src/models/tabletop_dice_tray.js",
  "generator": "createTabletopDiceTray",
  "collection": "v1.3",
  "commerce_family": "gaming",
  "variant": 3,
  "cad_path": "printables/tabletop-dice-tray.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#baa3d4",
  "preview_path": "public/thumbs/tabletop-dice-tray.webp"
};
export function createTabletopDiceTray() { return buildCommerceModel(assetMeta); }
