import { buildCommerceModel } from './print_commerce_engine.js';
/** Boardgame Token Sorter — original design, CAD source in printables/boardgame-token-sorter.scad */
export const assetMeta = {
  "id": "print-commerce.boardgame-token-sorter.001",
  "slug": "boardgame-token-sorter",
  "title": "Boardgame Token Sorter",
  "title_zh": "桌游代币整理座",
  "dimensions_m": [
    0.144,
    0.086,
    0.109
  ],
  "source_path": "src/models/boardgame_token_sorter.js",
  "generator": "createBoardgameTokenSorter",
  "collection": "v1.3",
  "commerce_family": "gaming",
  "variant": 4,
  "cad_path": "printables/boardgame-token-sorter.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/boardgame-token-sorter.webp"
};
export function createBoardgameTokenSorter() { return buildCommerceModel(assetMeta); }
