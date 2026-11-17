import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Automatic Bubble Tea Sealer / 自动珍珠奶茶封口机. */
export const assetMeta = {
  "id": "kitchen.automatic-bubble-tea-sealer.001",
  "slug": "automatic-bubble-tea-sealer",
  "title": "Automatic Bubble Tea Sealer",
  "title_zh": "自动珍珠奶茶封口机",
  "summary": "Countertop cup-sealing machine with film roll, touch controls and sample beverages",
  "category": "kitchen",
  "tags": [
    "automatic",
    "bubble",
    "tea",
    "sealer",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.72,
    1.02,
    0.63
  ],
  "generator": "createAutomaticBubbleTeaSealer",
  "source_path": "src/models/automatic_bubble_tea_sealer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/automatic-bubble-tea-sealer.webp",
  "accent": "#eaaf64"
};
export function createAutomaticBubbleTeaSealer() { return buildRecipe({
  "title": "Automatic Bubble Tea Sealer",
  "dimensions": [
    0.72,
    1.02,
    0.63
  ],
  "parts": [
    {
      "t": "box",
      "n": "bubble-tea-sealer-main-case",
      "p": [
        0,
        0.46,
        0
      ],
      "s": [
        0.58,
        0.82,
        0.45
      ],
      "c": 13878441
    },
    {
      "t": "box",
      "n": "cup-holder-platform",
      "p": [
        0,
        0.19,
        0.29
      ],
      "s": [
        0.39,
        0.07,
        0.27
      ],
      "c": 6652044
    },
    {
      "t": "cylinder",
      "n": "plastic-film-roll",
      "p": [
        0,
        0.79,
        -0.14
      ],
      "s": [
        0.41,
        0.18,
        0.41
      ],
      "c": 3426904,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "heat-sealing-ring-head",
      "p": [
        0,
        0.64,
        0.25
      ],
      "s": [
        0.43,
        0.09,
        0.39
      ],
      "c": 6652044
    },
    {
      "t": "cylinder",
      "n": "drink-cup",
      "p": [
        0,
        0.22,
        0.4
      ],
      "s": [
        0.2,
        0.34,
        0.2
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dark-tapioca-pearls",
      "p": [
        0,
        0.13,
        0.4
      ],
      "s": [
        0.13,
        0.06,
        0.13
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "operator-touchscreen",
      "p": [
        0.23,
        0.61,
        0.232
      ],
      "s": [
        0.17,
        0.21,
        0.025
      ],
      "c": 15380324
    },
    {
      "t": "box",
      "n": "machine-airvent-0",
      "p": [
        -0.2,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "machine-airvent-1",
      "p": [
        -0.133,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "machine-airvent-2",
      "p": [
        -0.066,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "machine-airvent-3",
      "p": [
        0.0010000000000000009,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "machine-airvent-4",
      "p": [
        0.068,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "machine-airvent-5",
      "p": [
        0.135,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "machine-airvent-6",
      "p": [
        0.202,
        0.49,
        0.235
      ],
      "s": [
        0.035,
        0.08,
        0.01
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "bench-anchoring-foot--1",
      "p": [
        -0.25,
        0.06,
        -0.16
      ],
      "s": [
        0.15,
        0.1,
        0.24
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "bench-anchoring-foot-1",
      "p": [
        0.25,
        0.06,
        -0.16
      ],
      "s": [
        0.15,
        0.1,
        0.24
      ],
      "c": 6652044
    }
  ]
}); }
