import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Split Keyboard Cable Nest scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "electronics.split-keyboard-cable-nest.001",
  "slug": "split-keyboard-cable-nest",
  "title": "Split Keyboard Cable Nest",
  "title_zh": "分体键盘线材桌面坞",
  "summary": "Split key clusters, wrist rests and centered USB routing in a detailed desk mockup",
  "category": "electronics",
  "tags": [
    "split",
    "keyboard",
    "cable",
    "nest",
    "electronics",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createSplitKeyboardCableNest",
  "source_path": "src/models/split_keyboard_cable_nest.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.32,
    0.09,
    0.23
  ],
  "accent": "#79b8a3",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/split-keyboard-cable-nest.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createSplitKeyboardCableNest() { return buildV15MarketModel(assetMeta); }
