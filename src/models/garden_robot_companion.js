import { buildCommerceModel } from './print_commerce_engine.js';
/** Garden Robot Companion — original design, CAD source in printables/garden-robot-companion.scad */
export const assetMeta = {
  "id": "print-commerce.garden-robot-companion.001",
  "slug": "garden-robot-companion",
  "title": "Garden Robot Companion",
  "title_zh": "园艺机器人摆件",
  "dimensions_m": [
    0.101,
    0.137,
    0.089
  ],
  "source_path": "src/models/garden_robot_companion.js",
  "generator": "createGardenRobotCompanion",
  "collection": "v1.3",
  "commerce_family": "figurine",
  "variant": 4,
  "cad_path": "printables/garden-robot-companion.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#85b3a1",
  "preview_path": "public/thumbs/garden-robot-companion.webp"
};
export function createGardenRobotCompanion() { return buildCommerceModel(assetMeta); }
