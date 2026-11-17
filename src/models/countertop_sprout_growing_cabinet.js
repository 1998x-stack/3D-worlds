import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Countertop Sprout Growing Cabinet / 台式芽苗种植柜. */
export const assetMeta = {
  "id": "kitchen.countertop-sprout-growing-cabinet.001",
  "slug": "countertop-sprout-growing-cabinet",
  "title": "Countertop Sprout Growing Cabinet",
  "title_zh": "台式芽苗种植柜",
  "summary": "Kitchen hydroponic sprouts cabinet with tiered seed trays, water pump and grow lights",
  "category": "kitchen",
  "tags": [
    "countertop",
    "sprout",
    "growing",
    "cabinet",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.12,
    1.35,
    0.92
  ],
  "generator": "createCountertopSproutGrowingCabinet",
  "source_path": "src/models/countertop_sprout_growing_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/countertop-sprout-growing-cabinet.webp",
  "accent": "#364b56"
};
export function createCountertopSproutGrowingCabinet() { return buildRecipe({
  "title": "Countertop Sprout Growing Cabinet",
  "dimensions": [
    1.12,
    1.35,
    0.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-countertop-sprout-growing-frame",
      "p": [
        0,
        0.69,
        0
      ],
      "s": [
        0.99,
        1.3,
        0.75
      ],
      "c": 13024688
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-hydroponic-sprout-tray-0",
      "p": [
        0,
        0.29,
        0
      ],
      "s": [
        0.84,
        0.07,
        0.52
      ],
      "c": 3558230
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-0",
      "from": [
        -0.32,
        0.33,
        0.01
      ],
      "to": [
        -0.32,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-0",
      "p": [
        -0.32,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-1",
      "from": [
        -0.21000000000000002,
        0.33,
        0.01
      ],
      "to": [
        -0.21000000000000002,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-1",
      "p": [
        -0.21000000000000002,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-2",
      "from": [
        -0.1,
        0.33,
        0.01
      ],
      "to": [
        -0.1,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-2",
      "p": [
        -0.1,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-3",
      "from": [
        0.010000000000000009,
        0.33,
        0.01
      ],
      "to": [
        0.010000000000000009,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-3",
      "p": [
        0.010000000000000009,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-4",
      "from": [
        0.12,
        0.33,
        0.01
      ],
      "to": [
        0.12,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-4",
      "p": [
        0.12,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-5",
      "from": [
        0.23000000000000004,
        0.33,
        0.01
      ],
      "to": [
        0.23000000000000004,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-5",
      "p": [
        0.23000000000000004,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-0-6",
      "from": [
        0.34,
        0.33,
        0.01
      ],
      "to": [
        0.34,
        0.49,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-0-6",
      "p": [
        0.34,
        0.51,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-growlight-strip-0",
      "p": [
        0,
        0.5,
        -0.16
      ],
      "s": [
        0.76,
        0.039,
        0.06
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-hydroponic-sprout-tray-1",
      "p": [
        0,
        0.5700000000000001,
        0
      ],
      "s": [
        0.84,
        0.07,
        0.52
      ],
      "c": 3558230
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-0",
      "from": [
        -0.32,
        0.6100000000000001,
        0.01
      ],
      "to": [
        -0.32,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-0",
      "p": [
        -0.32,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-1",
      "from": [
        -0.21000000000000002,
        0.6100000000000001,
        0.01
      ],
      "to": [
        -0.21000000000000002,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-1",
      "p": [
        -0.21000000000000002,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-2",
      "from": [
        -0.1,
        0.6100000000000001,
        0.01
      ],
      "to": [
        -0.1,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-2",
      "p": [
        -0.1,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-3",
      "from": [
        0.010000000000000009,
        0.6100000000000001,
        0.01
      ],
      "to": [
        0.010000000000000009,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-3",
      "p": [
        0.010000000000000009,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-4",
      "from": [
        0.12,
        0.6100000000000001,
        0.01
      ],
      "to": [
        0.12,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-4",
      "p": [
        0.12,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-5",
      "from": [
        0.23000000000000004,
        0.6100000000000001,
        0.01
      ],
      "to": [
        0.23000000000000004,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-5",
      "p": [
        0.23000000000000004,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-1-6",
      "from": [
        0.34,
        0.6100000000000001,
        0.01
      ],
      "to": [
        0.34,
        0.77,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-1-6",
      "p": [
        0.34,
        0.79,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-growlight-strip-1",
      "p": [
        0,
        0.78,
        -0.16
      ],
      "s": [
        0.76,
        0.039,
        0.06
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-hydroponic-sprout-tray-2",
      "p": [
        0,
        0.8500000000000001,
        0
      ],
      "s": [
        0.84,
        0.07,
        0.52
      ],
      "c": 3558230
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-0",
      "from": [
        -0.32,
        0.8900000000000001,
        0.01
      ],
      "to": [
        -0.32,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-0",
      "p": [
        -0.32,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-1",
      "from": [
        -0.21000000000000002,
        0.8900000000000001,
        0.01
      ],
      "to": [
        -0.21000000000000002,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-1",
      "p": [
        -0.21000000000000002,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-2",
      "from": [
        -0.1,
        0.8900000000000001,
        0.01
      ],
      "to": [
        -0.1,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-2",
      "p": [
        -0.1,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-3",
      "from": [
        0.010000000000000009,
        0.8900000000000001,
        0.01
      ],
      "to": [
        0.010000000000000009,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-3",
      "p": [
        0.010000000000000009,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-4",
      "from": [
        0.12,
        0.8900000000000001,
        0.01
      ],
      "to": [
        0.12,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-4",
      "p": [
        0.12,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-5",
      "from": [
        0.23000000000000004,
        0.8900000000000001,
        0.01
      ],
      "to": [
        0.23000000000000004,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-5",
      "p": [
        0.23000000000000004,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-2-6",
      "from": [
        0.34,
        0.8900000000000001,
        0.01
      ],
      "to": [
        0.34,
        1.05,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-2-6",
      "p": [
        0.34,
        1.07,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-growlight-strip-2",
      "p": [
        0,
        1.06,
        -0.16
      ],
      "s": [
        0.76,
        0.039,
        0.06
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-hydroponic-sprout-tray-3",
      "p": [
        0,
        1.1300000000000001,
        0
      ],
      "s": [
        0.84,
        0.07,
        0.52
      ],
      "c": 3558230
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-0",
      "from": [
        -0.32,
        1.1700000000000002,
        0.01
      ],
      "to": [
        -0.32,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-0",
      "p": [
        -0.32,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-1",
      "from": [
        -0.21000000000000002,
        1.1700000000000002,
        0.01
      ],
      "to": [
        -0.21000000000000002,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-1",
      "p": [
        -0.21000000000000002,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-2",
      "from": [
        -0.1,
        1.1700000000000002,
        0.01
      ],
      "to": [
        -0.1,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-2",
      "p": [
        -0.1,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-3",
      "from": [
        0.010000000000000009,
        1.1700000000000002,
        0.01
      ],
      "to": [
        0.010000000000000009,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-3",
      "p": [
        0.010000000000000009,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-4",
      "from": [
        0.12,
        1.1700000000000002,
        0.01
      ],
      "to": [
        0.12,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-4",
      "p": [
        0.12,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-5",
      "from": [
        0.23000000000000004,
        1.1700000000000002,
        0.01
      ],
      "to": [
        0.23000000000000004,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-5",
      "p": [
        0.23000000000000004,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "rod",
      "n": "countertop-sprout-growing-cabinet-seedling-shoot-3-6",
      "from": [
        0.34,
        1.1700000000000002,
        0.01
      ],
      "to": [
        0.34,
        1.33,
        0.01
      ],
      "r": 0.014,
      "c": 7178896
    },
    {
      "t": "sphere",
      "n": "countertop-sprout-growing-cabinet-sprout-leafy-top-3-6",
      "p": [
        0.34,
        1.35,
        0.01
      ],
      "s": [
        0.088,
        0.053,
        0.09
      ],
      "c": 8498031
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-growlight-strip-3",
      "p": [
        0,
        1.34,
        -0.16
      ],
      "s": [
        0.76,
        0.039,
        0.06
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-hydroponic-water-circulation-pump",
      "p": [
        0,
        0.17,
        0.29
      ],
      "s": [
        0.33,
        0.17,
        0.22
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "countertop-sprout-growing-cabinet-sprout-display-glass-window",
      "p": [
        0,
        0.75,
        0.38
      ],
      "s": [
        0.84,
        0.95,
        0.035
      ],
      "c": 14726765
    }
  ]
}); }
