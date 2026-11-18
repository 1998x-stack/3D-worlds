import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Micro-Mobility Parking Beacon scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "urban.micro-mobility-parking-beacon.001",
  "slug": "micro-mobility-parking-beacon",
  "title": "Micro-Mobility Parking Beacon",
  "title_zh": "微出行停放定位桩",
  "summary": "Triple micromobility parking arches with numbered bays and LED-like information beacon",
  "category": "urban",
  "tags": [
    "micro",
    "mobility",
    "parking",
    "beacon",
    "urban",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createMicroMobilityParkingBeacon",
  "source_path": "src/models/micro_mobility_parking_beacon.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.32,
    0.28,
    0.19
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/micro-mobility-parking-beacon.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createMicroMobilityParkingBeacon() { return buildV15MarketModel(assetMeta); }
