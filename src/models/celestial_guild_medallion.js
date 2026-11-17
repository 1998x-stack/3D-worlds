import { buildCommerceModel } from './print_commerce_engine.js';
/** Celestial Guild Medallion — original design, CAD source in printables/celestial-guild-medallion.scad */
export const assetMeta = {
  "id": "print-commerce.celestial-guild-medallion.001",
  "slug": "celestial-guild-medallion",
  "title": "Celestial Guild Medallion",
  "title_zh": "星穹公会原创徽章",
  "dimensions_m": [
    0.075,
    0.085,
    0.02
  ],
  "source_path": "src/models/celestial_guild_medallion.js",
  "generator": "createCelestialGuildMedallion",
  "collection": "v1.2",
  "commerce_family": "cosplay",
  "variant": 1,
  "cad_path": "printables/celestial-guild-medallion.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#dfb77d",
  "preview_path": "public/thumbs/celestial-guild-medallion.webp"
};
export function createCelestialGuildMedallion() { return buildCommerceModel(assetMeta); }
