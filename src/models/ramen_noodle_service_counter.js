import { buildRecipe } from './recipe_engine.js';
/** Ramen Noodle Service Counter: original authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.ramen-noodle-service-counter.001",
  "slug": "ramen-noodle-service-counter",
  "title": "Ramen Noodle Service Counter",
  "title_zh": "日式拉面出餐台",
  "summary": "Ramen serving counter with bowls, noodle strainer baskets, toppings and menu board",
  "category": "kitchen",
  "tags": [
    "ramen",
    "noodle",
    "counter"
  ],
  "dimensions_m": [
    1.68,
    1.53,
    0.79
  ],
  "generator": "createRamenNoodleServiceCounter",
  "source_path": "src/models/ramen_noodle_service_counter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/ramen-noodle-service-counter.webp"
};
export function createRamenNoodleServiceCounter() { return buildRecipe({
  "title": "Ramen Noodle Service Counter",
  "dimensions": [
    1.68,
    1.53,
    0.79
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
      "n": "service-backsplash",
      "p": [
        0,
        1.15,
        -0.35
      ],
      "s": [
        1.62,
        0.69,
        0.12
      ],
      "c": 9924945
    },
    {
      "t": "box",
      "n": "service-shelf",
      "p": [
        0,
        0.89,
        0
      ],
      "s": [
        1.61,
        0.08,
        0.78
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "ramen-bowl-0",
      "p": [
        -0.62,
        0.99,
        0.18
      ],
      "s": [
        0.26,
        0.16,
        0.25
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "noodle-nest-0",
      "p": [
        -0.62,
        1.09,
        0.18
      ],
      "s": [
        0.18,
        0.07,
        0.17
      ],
      "c": 15124373
    },
    {
      "t": "sphere",
      "n": "garnish-0",
      "p": [
        -0.55,
        1.14,
        0.19
      ],
      "s": [
        0.08,
        0.04,
        0.06
      ],
      "c": 6722675
    },
    {
      "t": "cylinder",
      "n": "ramen-bowl-1",
      "p": [
        -0.31,
        0.99,
        0.18
      ],
      "s": [
        0.26,
        0.16,
        0.25
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "noodle-nest-1",
      "p": [
        -0.31,
        1.09,
        0.18
      ],
      "s": [
        0.18,
        0.07,
        0.17
      ],
      "c": 15124373
    },
    {
      "t": "sphere",
      "n": "garnish-1",
      "p": [
        -0.24,
        1.14,
        0.19
      ],
      "s": [
        0.08,
        0.04,
        0.06
      ],
      "c": 6722675
    },
    {
      "t": "cylinder",
      "n": "ramen-bowl-2",
      "p": [
        0,
        0.99,
        0.18
      ],
      "s": [
        0.26,
        0.16,
        0.25
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "noodle-nest-2",
      "p": [
        0,
        1.09,
        0.18
      ],
      "s": [
        0.18,
        0.07,
        0.17
      ],
      "c": 15124373
    },
    {
      "t": "sphere",
      "n": "garnish-2",
      "p": [
        0.07,
        1.14,
        0.19
      ],
      "s": [
        0.08,
        0.04,
        0.06
      ],
      "c": 6722675
    },
    {
      "t": "cylinder",
      "n": "ramen-bowl-3",
      "p": [
        0.30999999999999994,
        0.99,
        0.18
      ],
      "s": [
        0.26,
        0.16,
        0.25
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "noodle-nest-3",
      "p": [
        0.30999999999999994,
        1.09,
        0.18
      ],
      "s": [
        0.18,
        0.07,
        0.17
      ],
      "c": 15124373
    },
    {
      "t": "sphere",
      "n": "garnish-3",
      "p": [
        0.37999999999999995,
        1.14,
        0.19
      ],
      "s": [
        0.08,
        0.04,
        0.06
      ],
      "c": 6722675
    },
    {
      "t": "cylinder",
      "n": "ramen-bowl-4",
      "p": [
        0.62,
        0.99,
        0.18
      ],
      "s": [
        0.26,
        0.16,
        0.25
      ],
      "c": 15262938
    },
    {
      "t": "sphere",
      "n": "noodle-nest-4",
      "p": [
        0.62,
        1.09,
        0.18
      ],
      "s": [
        0.18,
        0.07,
        0.17
      ],
      "c": 15124373
    },
    {
      "t": "sphere",
      "n": "garnish-4",
      "p": [
        0.69,
        1.14,
        0.19
      ],
      "s": [
        0.08,
        0.04,
        0.06
      ],
      "c": 6722675
    },
    {
      "t": "cylinder",
      "n": "ingredient-pot-0",
      "p": [
        -0.57,
        1.21,
        -0.33
      ],
      "s": [
        0.15,
        0.23,
        0.14
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "ingredient-pot-1",
      "p": [
        -0.2899999999999999,
        1.21,
        -0.33
      ],
      "s": [
        0.15,
        0.23,
        0.14
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "ingredient-pot-2",
      "p": [
        -0.009999999999999898,
        1.21,
        -0.33
      ],
      "s": [
        0.15,
        0.23,
        0.14
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "ingredient-pot-3",
      "p": [
        0.27000000000000013,
        1.21,
        -0.33
      ],
      "s": [
        0.15,
        0.23,
        0.14
      ],
      "c": 10069413
    },
    {
      "t": "cylinder",
      "n": "ingredient-pot-4",
      "p": [
        0.5500000000000002,
        1.21,
        -0.33
      ],
      "s": [
        0.15,
        0.23,
        0.14
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "menu-board",
      "p": [
        0,
        1.45,
        -0.35
      ],
      "s": [
        0.81,
        0.26,
        0.02
      ],
      "c": 3752778
    }
  ]
}); }
