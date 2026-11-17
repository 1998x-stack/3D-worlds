import { buildRecipe } from './recipe_engine.js';
/** Modular Salad Prep Counter / 模块化沙拉操作台: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "kitchen.modular-salad-prep-counter.001",
  "slug": "modular-salad-prep-counter",
  "title": "Modular Salad Prep Counter",
  "title_zh": "模块化沙拉操作台",
  "summary": "Refrigerated salad service station with ingredient bins, sneeze guard and drain",
  "category": "kitchen",
  "tags": [
    "modular",
    "salad",
    "prep",
    "counter",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.92,
    1.28,
    0.94
  ],
  "generator": "createModularSaladPrepCounter",
  "source_path": "src/models/modular_salad_prep_counter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/modular-salad-prep-counter.webp",
  "accent": "#dce3e1"
};
export function createModularSaladPrepCounter() { return buildRecipe({
  "title": "Modular Salad Prep Counter",
  "dimensions": [
    1.92,
    1.28,
    0.94
  ],
  "parts": [
    {
      "t": "box",
      "n": "salad-service-base",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        1.7,
        0.95,
        0.8
      ],
      "c": 11716041
    },
    {
      "t": "box",
      "n": "countertop",
      "p": [
        0,
        1.08,
        0
      ],
      "s": [
        1.82,
        0.12,
        0.86
      ],
      "c": 4213849
    },
    {
      "t": "box",
      "n": "ingredient-well-0",
      "p": [
        -0.69,
        1.16,
        0.03
      ],
      "s": [
        0.23,
        0.07,
        0.45
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "colorful-vegetable-0",
      "p": [
        -0.69,
        1.21,
        0.03
      ],
      "s": [
        0.1,
        0.08,
        0.2
      ],
      "c": 6723172
    },
    {
      "t": "box",
      "n": "ingredient-well-1",
      "p": [
        -0.4099999999999999,
        1.16,
        0.03
      ],
      "s": [
        0.23,
        0.07,
        0.45
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "colorful-vegetable-1",
      "p": [
        -0.4099999999999999,
        1.21,
        0.03
      ],
      "s": [
        0.1,
        0.08,
        0.2
      ],
      "c": 12807759
    },
    {
      "t": "box",
      "n": "ingredient-well-2",
      "p": [
        -0.1299999999999999,
        1.16,
        0.03
      ],
      "s": [
        0.23,
        0.07,
        0.45
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "colorful-vegetable-2",
      "p": [
        -0.1299999999999999,
        1.21,
        0.03
      ],
      "s": [
        0.1,
        0.08,
        0.2
      ],
      "c": 6723172
    },
    {
      "t": "box",
      "n": "ingredient-well-3",
      "p": [
        0.15000000000000013,
        1.16,
        0.03
      ],
      "s": [
        0.23,
        0.07,
        0.45
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "colorful-vegetable-3",
      "p": [
        0.15000000000000013,
        1.21,
        0.03
      ],
      "s": [
        0.1,
        0.08,
        0.2
      ],
      "c": 12807759
    },
    {
      "t": "box",
      "n": "ingredient-well-4",
      "p": [
        0.43000000000000016,
        1.16,
        0.03
      ],
      "s": [
        0.23,
        0.07,
        0.45
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "colorful-vegetable-4",
      "p": [
        0.43000000000000016,
        1.21,
        0.03
      ],
      "s": [
        0.1,
        0.08,
        0.2
      ],
      "c": 6723172
    },
    {
      "t": "box",
      "n": "ingredient-well-5",
      "p": [
        0.7100000000000002,
        1.16,
        0.03
      ],
      "s": [
        0.23,
        0.07,
        0.45
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "colorful-vegetable-5",
      "p": [
        0.7100000000000002,
        1.21,
        0.03
      ],
      "s": [
        0.1,
        0.08,
        0.2
      ],
      "c": 12807759
    },
    {
      "t": "box",
      "n": "sneeze-guard-glass",
      "p": [
        0,
        1.5,
        0.38
      ],
      "s": [
        1.7,
        0.66,
        0.04
      ],
      "c": 14476257
    },
    {
      "t": "rod",
      "n": "guard-post--1",
      "from": [
        -0.79,
        1.11,
        0.38
      ],
      "to": [
        -0.79,
        1.8,
        0.38
      ],
      "r": 0.032,
      "c": 4213849
    },
    {
      "t": "rod",
      "n": "guard-post-1",
      "from": [
        0.79,
        1.11,
        0.38
      ],
      "to": [
        0.79,
        1.8,
        0.38
      ],
      "r": 0.032,
      "c": 4213849
    },
    {
      "t": "box",
      "n": "counter-door-0",
      "p": [
        -0.53,
        0.55,
        0.42
      ],
      "s": [
        0.48,
        0.57,
        0.04
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "counter-door-1",
      "p": [
        0,
        0.55,
        0.42
      ],
      "s": [
        0.48,
        0.57,
        0.04
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "counter-door-2",
      "p": [
        0.53,
        0.55,
        0.42
      ],
      "s": [
        0.48,
        0.57,
        0.04
      ],
      "c": 14198889
    }
  ]
}); }
