import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Thread Gauge Swatch Rack scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "tools.thread-gauge-swatch-rack.001",
  "slug": "thread-gauge-swatch-rack",
  "title": "Thread Gauge Swatch Rack",
  "title_zh": "螺纹牙距样片收纳架",
  "summary": "Twelve differentiated sample coupons with tooth pattern and size reference rail; not calibrated",
  "category": "tools",
  "tags": [
    "thread",
    "gauge",
    "swatch",
    "rack",
    "tools",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createThreadGaugeSwatchRack",
  "source_path": "src/models/thread_gauge_swatch_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.23,
    0.14,
    0.15
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/thread-gauge-swatch-rack.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createThreadGaugeSwatchRack() { return buildV15MarketModel(assetMeta); }
