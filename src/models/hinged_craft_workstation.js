import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Hinged Craft Workstation scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "furniture.hinged-craft-workstation.001",
  "slug": "hinged-craft-workstation",
  "title": "Hinged Craft Workstation",
  "title_zh": "折叠式手工工具工作台",
  "summary": "Angle-adjusted craft workstation with hinge barrels, measured work surface, tool sockets and removable-look tray",
  "category": "furniture",
  "tags": [
    "hinged",
    "craft",
    "workstation",
    "furniture",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createHingedCraftWorkstation",
  "source_path": "src/models/hinged_craft_workstation.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.34,
    0.31,
    0.24
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/hinged-craft-workstation.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createHingedCraftWorkstation() { return buildV15MarketModel(assetMeta); }
