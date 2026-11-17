import { buildRecipe } from './recipe_engine.js';
/** Wall Hung Toilet — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "bathroom.wall-hung-toilet.001",
  "slug": "wall-hung-toilet",
  "title": "Wall Hung Toilet",
  "title_zh": "壁挂式马桶",
  "summary": "Wall-mounted tankless ceramic toilet with floating bowl, flush panel and hinges",
  "category": "bathroom",
  "tags": [
    "toilet",
    "bathroom",
    "ceramic"
  ],
  "dimensions_m": [
    0.39,
    0.78,
    0.64
  ],
  "generator": "createWallHungToilet",
  "source_path": "src/models/wall_hung_toilet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/wall-hung-toilet.webp"
};
export function createWallHungToilet() { return buildRecipe({
  "title": "Wall Hung Toilet",
  "dimensions": [
    0.39,
    0.78,
    0.64
  ],
  "parts": [
    {
      "t": "box",
      "n": "concealed-wall",
      "p": [
        0,
        0.39,
        -0.29
      ],
      "s": [
        0.43,
        0.78,
        0.1
      ],
      "c": 13161940
    },
    {
      "t": "sphere",
      "n": "bowl-exterior",
      "p": [
        0,
        0.36,
        0.15
      ],
      "s": [
        0.37,
        0.28,
        0.57
      ],
      "c": 15263196
    },
    {
      "t": "sphere",
      "n": "seat-ring",
      "p": [
        0,
        0.49,
        0.18
      ],
      "s": [
        0.36,
        0.065,
        0.47
      ],
      "c": 15065817
    },
    {
      "t": "sphere",
      "n": "bowl-opening",
      "p": [
        0,
        0.515,
        0.18
      ],
      "s": [
        0.25,
        0.016,
        0.28
      ],
      "c": 9746877
    },
    {
      "t": "box",
      "n": "lid",
      "p": [
        0,
        0.6,
        -0.08
      ],
      "s": [
        0.34,
        0.26,
        0.055
      ],
      "c": 15263196,
      "rot": [
        0.24,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "hinge-0",
      "p": [
        -0.12,
        0.51,
        -0.12
      ],
      "s": [
        0.05,
        0.075,
        0.05
      ],
      "c": 9149339
    },
    {
      "t": "cylinder",
      "n": "hinge-1",
      "p": [
        0.12,
        0.51,
        -0.12
      ],
      "s": [
        0.05,
        0.075,
        0.05
      ],
      "c": 9149339
    },
    {
      "t": "box",
      "n": "flush-panel",
      "p": [
        0,
        0.62,
        -0.22
      ],
      "s": [
        0.27,
        0.16,
        0.025
      ],
      "c": 9149339
    },
    {
      "t": "cylinder",
      "n": "flush-key-0",
      "p": [
        -0.075,
        0.62,
        -0.199
      ],
      "s": [
        0.07,
        0.03,
        0.07
      ],
      "c": 3357765,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "flush-key-1",
      "p": [
        0.075,
        0.62,
        -0.199
      ],
      "s": [
        0.07,
        0.03,
        0.07
      ],
      "c": 3357765,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "under-support",
      "p": [
        0,
        0.28,
        -0.14
      ],
      "s": [
        0.18,
        0.2,
        0.17
      ],
      "c": 9149339
    },
    {
      "t": "sphere",
      "n": "drain-indicator",
      "p": [
        0,
        0.4,
        0.15
      ],
      "s": [
        0.042,
        0.015,
        0.04
      ],
      "c": 9149339
    }
  ]
}); }
