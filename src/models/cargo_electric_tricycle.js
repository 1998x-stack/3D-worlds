import { buildRecipe } from './recipe_engine.js';
/** Cargo Electric Tricycle: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "vehicles.cargo-electric-tricycle.001",
  "slug": "cargo-electric-tricycle",
  "title": "Cargo Electric Tricycle",
  "title_zh": "电动货运三轮车",
  "summary": "Three-wheel cargo tricycle with front fork, electric battery and wooden flatbed.",
  "category": "vehicles",
  "tags": [
    "tricycle",
    "cargo",
    "delivery",
    "electric"
  ],
  "dimensions_m": [
    1.26,
    1.43,
    2.6
  ],
  "generator": "createCargoElectricTricycle",
  "source_path": "src/models/cargo_electric_tricycle.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/cargo-electric-tricycle.webp"
};
export function createCargoElectricTricycle() {
  return buildRecipe({
  "title": "Cargo Electric Tricycle",
  "dimensions": [
    1.26,
    1.43,
    2.6
  ],
  "parts": [
    {
      "t": "box",
      "n": "flatbed",
      "p": [
        0,
        0.78,
        -0.39
      ],
      "s": [
        1.19,
        0.12,
        1.67
      ],
      "c": 9531474
    },
    {
      "t": "box",
      "n": "sideboard-0",
      "p": [
        -0.53,
        0.96,
        -0.39
      ],
      "s": [
        0.083,
        0.36,
        1.67
      ],
      "c": 9333322
    },
    {
      "t": "box",
      "n": "sideboard-1",
      "p": [
        0.53,
        0.96,
        -0.39
      ],
      "s": [
        0.083,
        0.36,
        1.67
      ],
      "c": 9333322
    },
    {
      "t": "box",
      "n": "rear-board",
      "p": [
        0,
        0.96,
        -1.19
      ],
      "s": [
        1.14,
        0.36,
        0.08
      ],
      "c": 9333322
    },
    {
      "t": "box",
      "n": "bike-frame",
      "p": [
        0,
        0.62,
        0.7
      ],
      "s": [
        0.18,
        0.18,
        0.83
      ],
      "c": 5147272
    },
    {
      "t": "cylinder",
      "n": "rear-tyre-0",
      "p": [
        -0.5,
        0.34,
        -0.85
      ],
      "s": [
        0.66,
        0.13,
        0.66
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "rear-hub-0",
      "p": [
        -0.51,
        0.34,
        -0.85
      ],
      "s": [
        0.27,
        0.14,
        0.27
      ],
      "c": 8820381,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "rear-tyre-1",
      "p": [
        0.5,
        0.34,
        -0.85
      ],
      "s": [
        0.66,
        0.13,
        0.66
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "rear-hub-1",
      "p": [
        0.51,
        0.34,
        -0.85
      ],
      "s": [
        0.27,
        0.14,
        0.27
      ],
      "c": 8820381,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "front-tyre",
      "p": [
        0,
        0.35,
        1.02
      ],
      "s": [
        0.73,
        0.16,
        0.73
      ],
      "c": 3291196,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "fork",
      "from": [
        0,
        0.39,
        1.02
      ],
      "to": [
        0,
        1.16,
        0.86
      ],
      "r": 0.043,
      "c": 8820381
    },
    {
      "t": "rod",
      "n": "handlebar",
      "from": [
        -0.34,
        1.23,
        0.87
      ],
      "to": [
        0.34,
        1.23,
        0.87
      ],
      "r": 0.032,
      "c": 3291196
    },
    {
      "t": "box",
      "n": "saddle",
      "p": [
        0,
        0.96,
        0.32
      ],
      "s": [
        0.35,
        0.052,
        0.36
      ],
      "c": 3291196
    },
    {
      "t": "box",
      "n": "battery",
      "p": [
        0,
        0.44,
        0.17
      ],
      "s": [
        0.39,
        0.28,
        0.36
      ],
      "c": 6848387
    },
    {
      "t": "box",
      "n": "front-lamp",
      "p": [
        0,
        1.1,
        1.08
      ],
      "s": [
        0.18,
        0.16,
        0.1
      ],
      "c": 15197657
    }
  ]
});
}
