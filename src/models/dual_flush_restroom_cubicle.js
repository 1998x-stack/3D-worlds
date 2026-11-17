import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Dual Flush Restroom Cubicle / 双冲水卫生间隔间. */
export const assetMeta = {
  "id": "bathroom.dual-flush-restroom-cubicle.001",
  "slug": "dual-flush-restroom-cubicle",
  "title": "Dual Flush Restroom Cubicle",
  "title_zh": "双冲水卫生间隔间",
  "summary": "Modular privacy toilet cubicle with low-water dual flush, doors and ventilation",
  "category": "bathroom",
  "tags": [
    "dual",
    "flush",
    "restroom",
    "cubicle",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.35,
    2.35,
    1.75
  ],
  "generator": "createDualFlushRestroomCubicle",
  "source_path": "src/models/dual_flush_restroom_cubicle.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/dual-flush-restroom-cubicle.webp",
  "accent": "#6d8897"
};
export function createDualFlushRestroomCubicle() { return buildRecipe({
  "title": "Dual Flush Restroom Cubicle",
  "dimensions": [
    1.35,
    2.35,
    1.75
  ],
  "parts": [
    {
      "t": "box",
      "n": "restroom-cubicle-floor",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        1.19,
        0.16,
        1.5
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "privacy-partition--1",
      "p": [
        -0.58,
        1.18,
        0
      ],
      "s": [
        0.068,
        2.3,
        1.53
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "privacy-partition-1",
      "p": [
        0.58,
        1.18,
        0
      ],
      "s": [
        0.068,
        2.3,
        1.53
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "restroom-rear-panel",
      "p": [
        0,
        1.2,
        -0.74
      ],
      "s": [
        1.21,
        2.3,
        0.07
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "swinging-privacy-door",
      "p": [
        0,
        1.17,
        0.72
      ],
      "s": [
        0.96,
        2.06,
        0.065
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "door-latch",
      "p": [
        0.36,
        1.05,
        0.764
      ],
      "s": [
        0.13,
        0.065,
        0.04
      ],
      "c": 3954279
    },
    {
      "t": "cylinder",
      "n": "sanitary-bowl",
      "p": [
        0,
        0.48,
        -0.28
      ],
      "s": [
        0.52,
        0.54,
        0.49
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "low-flow-flush-cistern",
      "p": [
        0,
        0.83,
        -0.58
      ],
      "s": [
        0.62,
        0.42,
        0.27
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "dual-flush-keypanel",
      "p": [
        0,
        1.03,
        -0.42
      ],
      "s": [
        0.32,
        0.07,
        0.025
      ],
      "c": 3954279
    },
    {
      "t": "cylinder",
      "n": "flush-button-0",
      "p": [
        -0.09,
        1.08,
        -0.414
      ],
      "s": [
        0.095,
        0.017,
        0.095
      ],
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "flush-button-1",
      "p": [
        0.09,
        1.08,
        -0.414
      ],
      "s": [
        0.095,
        0.017,
        0.095
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "vent-perforation-0",
      "p": [
        -0.33,
        2.14,
        -0.705
      ],
      "s": [
        0.095,
        0.047,
        0.02
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "vent-perforation-1",
      "p": [
        -0.165,
        2.14,
        -0.705
      ],
      "s": [
        0.095,
        0.047,
        0.02
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "vent-perforation-2",
      "p": [
        0,
        2.14,
        -0.705
      ],
      "s": [
        0.095,
        0.047,
        0.02
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "vent-perforation-3",
      "p": [
        0.16499999999999998,
        2.14,
        -0.705
      ],
      "s": [
        0.095,
        0.047,
        0.02
      ],
      "c": 3954279
    },
    {
      "t": "box",
      "n": "vent-perforation-4",
      "p": [
        0.33,
        2.14,
        -0.705
      ],
      "s": [
        0.095,
        0.047,
        0.02
      ],
      "c": 3954279
    }
  ]
}); }
