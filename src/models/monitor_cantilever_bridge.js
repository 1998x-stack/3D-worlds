import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Monitor Cantilever Bridge scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "furniture.monitor-cantilever-bridge.001",
  "slug": "monitor-cantilever-bridge",
  "title": "Monitor Cantilever Bridge",
  "title_zh": "悬臂式显示器桌面桥",
  "summary": "Elevated monitor platform with cantilever gussets, ventilation, phone landing and cable runway",
  "category": "furniture",
  "tags": [
    "monitor",
    "cantilever",
    "bridge",
    "furniture",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createMonitorCantileverBridge",
  "source_path": "src/models/monitor_cantilever_bridge.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.48,
    0.2,
    0.22
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/monitor-cantilever-bridge.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createMonitorCantileverBridge() { return buildV15MarketModel(assetMeta); }
