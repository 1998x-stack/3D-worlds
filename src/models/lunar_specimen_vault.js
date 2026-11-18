import { buildV15MarketModel } from './v15_market_geometry.js';
/** Original V1.5 detailed Lunar Specimen Vault scene; visual-only, no physical validation. */
export const assetMeta = {
  "id": "scifi.lunar-specimen-vault.001",
  "slug": "lunar-specimen-vault",
  "title": "Lunar Specimen Vault",
  "title_zh": "月球标本恒温档案舱",
  "summary": "Peaceful lunar archive with translucent sample chambers, thermal ring and illuminated control array",
  "category": "scifi",
  "tags": [
    "lunar",
    "specimen",
    "vault",
    "scifi",
    "original",
    "market-inspired",
    "detailed",
    "v15"
  ],
  "generator": "createLunarSpecimenVault",
  "source_path": "src/models/lunar_specimen_vault.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "dimensions_m": [
    0.29,
    0.26,
    0.22
  ],
  "accent": "#c79d56",
  "style": "Original Refined Procedural",
  "collection": "v1.5",
  "preview_path": "public/thumbs/lunar-specimen-vault.webp",
  "geometry_revision": "1.5.0",
  "refinement": "part-specific geometry + PBR material variation",
  "provenance_note": "Original geometry. hacker-news is qualitative inspiration only, not source mesh or verified sales evidence."
};
export function createLunarSpecimenVault() { return buildV15MarketModel(assetMeta); }
