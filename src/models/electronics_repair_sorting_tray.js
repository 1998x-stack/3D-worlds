import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Electronics Repair Sorting Tray; stylized visual prototype only. */
export const assetMeta = {
  "id": "electronics.electronics-repair-sorting-tray.001",
  "slug": "electronics-repair-sorting-tray",
  "title": "Electronics Repair Sorting Tray",
  "title_zh": "电子维修分区托盘",
  "summary": "Original electronics repair sorting tray study with tray and grid assemblies and individually named functional details",
  "category": "electronics",
  "tags": [
    "electronics",
    "repair",
    "sorting",
    "tray",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.31,
    0.075,
    0.22
  ],
  "generator": "createElectronicsRepairSortingTray",
  "source_path": "src/models/electronics_repair_sorting_tray.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/electronics-repair-sorting-tray.webp",
  "accent": "#66d9ce",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createElectronicsRepairSortingTray() { return buildRecipe({
  "title": "Electronics Repair Sorting Tray",
  "dimensions": [
    0.31,
    0.075,
    0.22
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 6740430,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-tray-deck",
      "p": [
        0,
        0.37,
        0.15
      ],
      "s": [
        1.7,
        0.16,
        1.19
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-0",
      "p": [
        -0.72,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-1",
      "p": [
        -0.54,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-2",
      "p": [
        -0.36,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-3",
      "p": [
        -0.17999999999999994,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-4",
      "p": [
        0,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-5",
      "p": [
        0.17999999999999994,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-6",
      "p": [
        0.3600000000000001,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-7",
      "p": [
        0.54,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-8",
      "p": [
        0.72,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-0",
      "p": [
        -0.59,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-1",
      "p": [
        -0.36,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-2",
      "p": [
        -0.12999999999999995,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-3",
      "p": [
        0.10000000000000009,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-4",
      "p": [
        0.33000000000000007,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-5",
      "p": [
        0.5600000000000002,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-grid-plate",
      "p": [
        0,
        0.47,
        0.02
      ],
      "s": [
        1.61,
        0.24,
        1.15
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-0",
      "p": [
        -0.61,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-1",
      "p": [
        -0.20999999999999996,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-2",
      "p": [
        0.19000000000000006,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-3",
      "p": [
        0.5900000000000002,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-4",
      "p": [
        -0.61,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-5",
      "p": [
        -0.20999999999999996,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-6",
      "p": [
        0.19000000000000006,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-7",
      "p": [
        0.5900000000000002,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-8",
      "p": [
        -0.61,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-9",
      "p": [
        -0.20999999999999996,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-10",
      "p": [
        0.19000000000000006,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-11",
      "p": [
        0.5900000000000002,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-12",
      "p": [
        -0.61,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-13",
      "p": [
        -0.20999999999999996,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-14",
      "p": [
        0.19000000000000006,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-15",
      "p": [
        0.5900000000000002,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    }
  ]
}); }
