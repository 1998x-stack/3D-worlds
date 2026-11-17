import { buildCommerceModel } from './print_commerce_engine.js';
/** Studio Tool Bin — original design, CAD source in printables/studio-tool-bin.scad */
export const assetMeta = {
  "id": "print-commerce.studio-tool-bin.001",
  "slug": "studio-tool-bin",
  "title": "Studio Tool Bin",
  "title_zh": "工作室多格工具盒",
  "dimensions_m": [
    0.142,
    0.088,
    0.099
  ],
  "source_path": "src/models/studio_tool_bin.js",
  "generator": "createStudioToolBin",
  "collection": "v1.3",
  "commerce_family": "organizer",
  "variant": 5,
  "cad_path": "printables/studio-tool-bin.scad",
  "stage": "prototype_unverified",
  "evidence": "category_level",
  "sales_status": "not_measured",
  "print_notes": "FDM design concept; requires mesh, fit, material and regulatory verification",
  "kind": "procedural",
  "category": "print-commerce",
  "license": "MIT",
  "author": "3D Worlds",
  "accent": "#d9a5a4",
  "preview_path": "public/thumbs/studio-tool-bin.webp"
};
export function createStudioToolBin() { return buildCommerceModel(assetMeta); }
