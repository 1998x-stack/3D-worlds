import { buildCommerceModel } from './print_commerce_engine.js';
/** Retro Cartridge Rack — original design, CAD source in printables/retro-cartridge-rack.scad */
export const assetMeta = {
  "id": "print-commerce.retro-cartridge-rack.001",
  "slug": "retro-cartridge-rack",
  "title": "Retro Cartridge Rack",
  "title_zh": "复古游戏卡带架",
  "dimensions_m": [
    0.138,
    0.078,
    0.103
  ],
  "source_path": "src/models/retro_cartridge_rack.js",
  "generator": "createRetroCartridgeRack",
  "collection": "v1.3",
  "commerce_family": "gaming",
  "variant": 2,
  "cad_path": "printables/retro-cartridge-rack.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#9eafbd",
  "preview_path": "public/thumbs/retro-cartridge-rack.webp"
};
export function createRetroCartridgeRack() { return buildCommerceModel(assetMeta); }
