import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Camera Battery Organizer scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "print-commerce.camera-battery-organizer.001",
  "slug": "camera-battery-organizer",
  "title": "Camera Battery Organizer",
  "title_zh": "可调相机电池收纳盒",
  "summary": "Six-pocket unbranded camera-battery tray with visible polarity tags, tray lips and airflow slots",
  "category": "print-commerce",
  "tags": [
    "camera",
    "battery",
    "organizer",
    "print-commerce",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createCameraBatteryOrganizer",
  "source_path": "src/models/camera_battery_organizer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.15,
    0.022,
    0.096
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/camera-battery-organizer.webp",
  "cad_path": "printables/v15/camera-battery-organizer.scad",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. amazon is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createCameraBatteryOrganizer() { return buildV15MarketModel(assetMeta); }
