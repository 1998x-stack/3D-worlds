import { buildRecipe } from './recipe_engine.js';
/** Electric Delivery Moped: source-backed custom geometry. */
export const assetMeta = {
  "id": "vehicles.electric-delivery-moped.001",
  "slug": "electric-delivery-moped",
  "title": "Electric Delivery Moped",
  "title_zh": "电动配送轻便摩托",
  "summary": "Electric food courier moped with cargo case, fork and steering grips",
  "category": "vehicles",
  "tags": [
    "delivery",
    "moped",
    "electric"
  ],
  "dimensions_m": [
    0.89,
    1.5,
    1.86
  ],
  "generator": "createElectricDeliveryMoped",
  "source_path": "src/models/electric_delivery_moped.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/electric-delivery-moped.webp"
};
export function createElectricDeliveryMoped() { return buildRecipe({
  "title": "Electric Delivery Moped",
  "dimensions": [
    0.89,
    1.5,
    1.86
  ],
  "parts": [
    {
      "t": "box",
      "n": "vehicle-frame",
      "p": [
        0,
        0.66,
        0
      ],
      "s": [
        0.34,
        0.4,
        1.42
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "battery-pack",
      "p": [
        0,
        0.72,
        0.02
      ],
      "s": [
        0.31,
        0.31,
        0.61
      ],
      "c": 6790322
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        1.03,
        -0.18
      ],
      "s": [
        0.33,
        0.14,
        0.44
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "rear-food-case",
      "p": [
        0,
        1.13,
        -0.59
      ],
      "s": [
        0.68,
        0.7,
        0.63
      ],
      "c": 13347175
    },
    {
      "t": "rod",
      "n": "front-fork",
      "from": [
        0,
        0.41,
        0.63
      ],
      "to": [
        0,
        1.28,
        0.63
      ],
      "r": 0.03,
      "c": 9807013
    },
    {
      "t": "rod",
      "n": "handlebar",
      "from": [
        -0.38,
        1.3,
        0.63
      ],
      "to": [
        0.38,
        1.3,
        0.63
      ],
      "r": 0.032,
      "c": 3490891
    },
    {
      "t": "torus",
      "n": "tire-0",
      "p": [
        0,
        0.4,
        0.65
      ],
      "s": [
        0.9,
        0.9,
        0.9
      ],
      "c": 3490891,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-0",
      "p": [
        0,
        0.4,
        0.65
      ],
      "s": [
        0.23,
        0.13,
        0.23
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "torus",
      "n": "tire-1",
      "p": [
        0,
        0.4,
        -0.65
      ],
      "s": [
        0.9,
        0.9,
        0.9
      ],
      "c": 3490891,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-1",
      "p": [
        0,
        0.4,
        -0.65
      ],
      "s": [
        0.23,
        0.13,
        0.23
      ],
      "c": 9807013,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    }
  ]
}); }
