import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Field Repair Cargo Trike scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "vehicles.field-repair-cargo-trike.001",
  "slug": "field-repair-cargo-trike",
  "title": "Field Repair Cargo Trike",
  "title_zh": "野外维修货运三轮车",
  "summary": "Original utility trike miniature with three spoke hubs, cargo lattice and service roll",
  "category": "vehicles",
  "tags": [
    "field",
    "repair",
    "cargo",
    "trike",
    "vehicles",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createFieldRepairCargoTrike",
  "source_path": "src/models/field_repair_cargo_trike.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.42,
    0.26,
    0.22
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/field-repair-cargo-trike.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createFieldRepairCargoTrike() { return buildV15MarketModel(assetMeta); }
