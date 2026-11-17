import { buildRecipe } from './recipe_engine.js';
/** Kinetic Water Wall Fountain: original authored procedural geometry. */
export const assetMeta = {
  "id": "decor.kinetic-water-wall-fountain.001",
  "slug": "kinetic-water-wall-fountain",
  "title": "Kinetic Water Wall Fountain",
  "title_zh": "室内动态水幕装饰墙",
  "summary": "Indoor water wall with illuminated waterfall panel, stone basin and stepping ripple jets",
  "category": "decor",
  "tags": [
    "waterwall",
    "fountain",
    "decor"
  ],
  "dimensions_m": [
    1.42,
    2.14,
    0.56
  ],
  "generator": "createKineticWaterWallFountain",
  "source_path": "src/models/kinetic_water_wall_fountain.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/kinetic-water-wall-fountain.webp"
};
export function createKineticWaterWallFountain() { return buildRecipe({
  "title": "Kinetic Water Wall Fountain",
  "dimensions": [
    1.42,
    2.14,
    0.56
  ],
  "parts": [
    {
      "t": "box",
      "n": "display-base",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.19,
        0.18,
        0.61
      ],
      "c": 9924945
    },
    {
      "t": "box",
      "n": "stone-panel",
      "p": [
        0,
        1.07,
        -0.11
      ],
      "s": [
        1.39,
        2.04,
        0.33
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "waterfall-face",
      "p": [
        0,
        1.13,
        0.075
      ],
      "s": [
        1.13,
        1.79,
        0.025
      ],
      "c": 6461102
    },
    {
      "t": "box",
      "n": "catchment-trough",
      "p": [
        0,
        0.16,
        0.22
      ],
      "s": [
        1.39,
        0.27,
        0.5
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "water-stream-0",
      "p": [
        -0.52,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-1",
      "p": [
        -0.44,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "box",
      "n": "water-stream-2",
      "p": [
        -0.36,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-3",
      "p": [
        -0.28,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "box",
      "n": "water-stream-4",
      "p": [
        -0.2,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-5",
      "p": [
        -0.12,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "box",
      "n": "water-stream-6",
      "p": [
        -0.040000000000000036,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-7",
      "p": [
        0.040000000000000036,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "box",
      "n": "water-stream-8",
      "p": [
        0.12,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-9",
      "p": [
        0.19999999999999996,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "box",
      "n": "water-stream-10",
      "p": [
        0.28,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-11",
      "p": [
        0.36,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "box",
      "n": "water-stream-12",
      "p": [
        0.43999999999999995,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 12835550
    },
    {
      "t": "box",
      "n": "water-stream-13",
      "p": [
        0.52,
        1.13,
        0.1
      ],
      "s": [
        0.036,
        1.7,
        0.015
      ],
      "c": 11127763
    },
    {
      "t": "sphere",
      "n": "water-splash-0",
      "p": [
        -0.46,
        0.32,
        0.24
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "water-splash-1",
      "p": [
        -0.28,
        0.32,
        0.24
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "water-splash-2",
      "p": [
        -0.10000000000000003,
        0.32,
        0.24
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "water-splash-3",
      "p": [
        0.08000000000000002,
        0.32,
        0.24
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "water-splash-4",
      "p": [
        0.25999999999999995,
        0.32,
        0.24
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "water-splash-5",
      "p": [
        0.4399999999999999,
        0.32,
        0.24
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 15262938
    }
  ]
}); }
