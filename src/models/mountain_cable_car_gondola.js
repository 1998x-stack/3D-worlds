import { buildRecipe } from './recipe_engine.js';
/** Mountain Cable Car Gondola / 山地缆车吊厢: original authored procedural scene prop. */
export const assetMeta = {
  "id": "vehicles.mountain-cable-car-gondola.001",
  "slug": "mountain-cable-car-gondola",
  "title": "Mountain Cable Car Gondola",
  "title_zh": "山地缆车吊厢",
  "summary": "Suspended passenger gondola with panoramic glass, overhead hanger and cable clamp",
  "category": "vehicles",
  "tags": [
    "gondola",
    "mountain",
    "transit"
  ],
  "dimensions_m": [
    1.82,
    2.53,
    1.98
  ],
  "generator": "createMountainCableCarGondola",
  "source_path": "src/models/mountain_cable_car_gondola.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/mountain-cable-car-gondola.webp"
};
export function createMountainCableCarGondola() { return buildRecipe({
  "title": "Mountain Cable Car Gondola",
  "dimensions": [
    1.82,
    2.53,
    1.98
  ],
  "parts": [
    {
      "t": "box",
      "n": "gondola-cabin",
      "p": [
        0,
        0.96,
        0
      ],
      "s": [
        1.72,
        1.79,
        1.88
      ],
      "c": 7442324
    },
    {
      "t": "box",
      "n": "cab-front-glass",
      "p": [
        0,
        1.12,
        0.963
      ],
      "s": [
        1.44,
        1.18,
        0.032
      ],
      "c": 7976382
    },
    {
      "t": "box",
      "n": "cab-rear-glass",
      "p": [
        0,
        1.12,
        -0.963
      ],
      "s": [
        1.44,
        1.18,
        0.032
      ],
      "c": 6528169
    },
    {
      "t": "box",
      "n": "side-glass-0",
      "p": [
        -0.87,
        1.14,
        0
      ],
      "s": [
        0.028,
        1.11,
        1.5
      ],
      "c": 6135209
    },
    {
      "t": "box",
      "n": "bench-seat-0",
      "p": [
        -0.45,
        0.65,
        0
      ],
      "s": [
        0.39,
        0.08,
        1.38
      ],
      "c": 9597265
    },
    {
      "t": "rod",
      "n": "window-brace-0",
      "from": [
        -0.85,
        0.5,
        -0.78
      ],
      "to": [
        -0.85,
        1.81,
        0.78
      ],
      "r": 0.025,
      "c": 3753552
    },
    {
      "t": "box",
      "n": "side-glass-1",
      "p": [
        0.87,
        1.14,
        0
      ],
      "s": [
        0.028,
        1.11,
        1.5
      ],
      "c": 6135209
    },
    {
      "t": "box",
      "n": "bench-seat-1",
      "p": [
        0.45,
        0.65,
        0
      ],
      "s": [
        0.39,
        0.08,
        1.38
      ],
      "c": 9597265
    },
    {
      "t": "rod",
      "n": "window-brace-1",
      "from": [
        0.85,
        0.5,
        -0.78
      ],
      "to": [
        0.85,
        1.81,
        0.78
      ],
      "r": 0.025,
      "c": 3753552
    },
    {
      "t": "box",
      "n": "base-skirt",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        1.76,
        0.35,
        1.89
      ],
      "c": 3753552
    },
    {
      "t": "box",
      "n": "roof-shell",
      "p": [
        0,
        1.91,
        0
      ],
      "s": [
        1.81,
        0.17,
        1.96
      ],
      "c": 15197659
    },
    {
      "t": "rod",
      "n": "hanger-post",
      "from": [
        0,
        1.93,
        0
      ],
      "to": [
        0,
        2.48,
        0
      ],
      "r": 0.048,
      "c": 3753552
    },
    {
      "t": "torus",
      "n": "roof-mount-ring",
      "p": [
        0,
        2.48,
        0
      ],
      "s": [
        0.46,
        0.46,
        0.46
      ],
      "c": 9215136,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "cable-short",
      "from": [
        -0.99,
        2.53,
        0
      ],
      "to": [
        0.99,
        2.53,
        0
      ],
      "r": 0.051,
      "c": 3753552
    },
    {
      "t": "box",
      "n": "entry-door",
      "p": [
        0.88,
        0.98,
        0.22
      ],
      "s": [
        0.035,
        1.52,
        0.72
      ],
      "c": 4944772
    },
    {
      "t": "box",
      "n": "door-handle",
      "p": [
        0.915,
        0.95,
        0.34
      ],
      "s": [
        0.023,
        0.21,
        0.035
      ],
      "c": 12427115
    }
  ]
}); }
