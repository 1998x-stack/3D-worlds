import { buildRecipe } from './recipe_engine.js';
/** Refrigerated Sushi Conveyor: original authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.refrigerated-sushi-conveyor.001",
  "slug": "refrigerated-sushi-conveyor",
  "title": "Refrigerated Sushi Conveyor",
  "title_zh": "寿司回转输送展示柜",
  "summary": "Compact sushi conveyor lane with glass sneeze guard, colorful dishes and cooling base",
  "category": "kitchen",
  "tags": [
    "sushi",
    "conveyor",
    "restaurant"
  ],
  "dimensions_m": [
    2.34,
    1.15,
    1.14
  ],
  "generator": "createRefrigeratedSushiConveyor",
  "source_path": "src/models/refrigerated_sushi_conveyor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/refrigerated-sushi-conveyor.webp"
};
export function createRefrigeratedSushiConveyor() { return buildRecipe({
  "title": "Refrigerated Sushi Conveyor",
  "dimensions": [
    2.34,
    1.15,
    1.14
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-cabinet",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        1,
        0.76,
        0.72
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "food-service-counter",
      "p": [
        0,
        0.83,
        0
      ],
      "s": [
        1.07,
        0.12,
        0.79
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "refrigerated-conveyor-base",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        2.31,
        0.91,
        1.11
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "transparent-glass-sneeze-guard",
      "p": [
        0,
        1,
        0
      ],
      "s": [
        2.3,
        0.22,
        0.95
      ],
      "c": 9943230
    },
    {
      "t": "box",
      "n": "conveyor-track",
      "p": [
        0,
        1.03,
        0.1
      ],
      "s": [
        2.25,
        0.075,
        0.78
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-0",
      "p": [
        -0.97,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 6461102
    },
    {
      "t": "sphere",
      "n": "sushi-topping-0",
      "p": [
        -0.97,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 14792579
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-1",
      "p": [
        -0.78,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-1",
      "p": [
        -0.78,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 12348255
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-2",
      "p": [
        -0.59,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-2",
      "p": [
        -0.59,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 14792579
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-3",
      "p": [
        -0.3999999999999999,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 6461102
    },
    {
      "t": "sphere",
      "n": "sushi-topping-3",
      "p": [
        -0.3999999999999999,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 12348255
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-4",
      "p": [
        -0.20999999999999996,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-4",
      "p": [
        -0.20999999999999996,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 14792579
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-5",
      "p": [
        -0.020000000000000018,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-5",
      "p": [
        -0.020000000000000018,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 12348255
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-6",
      "p": [
        0.17000000000000015,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 6461102
    },
    {
      "t": "sphere",
      "n": "sushi-topping-6",
      "p": [
        0.17000000000000015,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 14792579
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-7",
      "p": [
        0.3600000000000001,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-7",
      "p": [
        0.3600000000000001,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 12348255
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-8",
      "p": [
        0.55,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-8",
      "p": [
        0.55,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 14792579
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-9",
      "p": [
        0.74,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 6461102
    },
    {
      "t": "sphere",
      "n": "sushi-topping-9",
      "p": [
        0.74,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 12348255
    },
    {
      "t": "cylinder",
      "n": "sushi-dish-10",
      "p": [
        0.9299999999999999,
        1.09,
        0.13
      ],
      "s": [
        0.16,
        0.036,
        0.16
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "sushi-topping-10",
      "p": [
        0.9299999999999999,
        1.14,
        0.13
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 14792579
    },
    {
      "t": "box",
      "n": "glass-roof",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        2.3,
        0.06,
        0.99
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "compressor-vent-0",
      "p": [
        -0.93,
        0.38,
        0.57
      ],
      "s": [
        0.11,
        0.09,
        0.015
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "compressor-vent-1",
      "p": [
        -0.5800000000000001,
        0.38,
        0.57
      ],
      "s": [
        0.11,
        0.09,
        0.015
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "compressor-vent-2",
      "p": [
        -0.2300000000000001,
        0.38,
        0.57
      ],
      "s": [
        0.11,
        0.09,
        0.015
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "compressor-vent-3",
      "p": [
        0.11999999999999977,
        0.38,
        0.57
      ],
      "s": [
        0.11,
        0.09,
        0.015
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "compressor-vent-4",
      "p": [
        0.46999999999999986,
        0.38,
        0.57
      ],
      "s": [
        0.11,
        0.09,
        0.015
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "compressor-vent-5",
      "p": [
        0.82,
        0.38,
        0.57
      ],
      "s": [
        0.11,
        0.09,
        0.015
      ],
      "c": 10069413
    }
  ]
}); }
