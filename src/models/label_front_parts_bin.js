import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Label Front Parts Bin scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "print-commerce.label-front-parts-bin.001",
  "slug": "label-front-parts-bin",
  "title": "Label Front Parts Bin",
  "title_zh": "前置标签模块化零件盒",
  "summary": "Triple-compartment modular parts drawer with raised edges, label pockets and guide representation",
  "category": "print-commerce",
  "tags": [
    "label",
    "front",
    "parts",
    "bin",
    "print-commerce",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createLabelFrontPartsBin",
  "source_path": "src/models/label_front_parts_bin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.124,
    0.036,
    0.084
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/label-front-parts-bin.webp",
  "cad_path": "printables/v15/label-front-parts-bin.scad",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. ebay is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createLabelFrontPartsBin() { return buildV15MarketModel(assetMeta); }
