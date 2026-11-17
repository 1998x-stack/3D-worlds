import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "kitchen.wood-fired-pizza-oven.001",
  "slug": "wood-fired-pizza-oven",
  "title": "Wood Fired Pizza Oven",
  "title_zh": "柴火石砌披萨炉",
  "summary": "Outdoor pizzeria masonry oven with domed hearth, brick apron, chimney and bread peel",
  "category": "kitchen",
  "tags": [
    "pizza",
    "oven",
    "wood-fired"
  ],
  "dimensions_m": [
    1.45,
    1.36,
    1.29
  ],
  "generator": "createWoodFiredPizzaOven",
  "source_path": "src/models/wood_fired_pizza_oven.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/wood-fired-pizza-oven.webp"
};
export function createWoodFiredPizzaOven() { return buildRecipe({
  "title": "Wood Fired Pizza Oven",
  "dimensions": [
    1.45,
    1.36,
    1.29
  ],
  "parts": [
    {
      "t": "box",
      "n": "hearth-base",
      "p": [
        0,
        0.23,
        0
      ],
      "s": [
        1.38,
        0.46,
        1.25
      ],
      "c": 12037532
    },
    {
      "t": "sphere",
      "n": "brick-dome",
      "p": [
        0,
        0.88,
        -0.08
      ],
      "s": [
        1.38,
        0.9,
        1.18
      ],
      "c": 12090715
    },
    {
      "t": "box",
      "n": "oven-mouth",
      "p": [
        0,
        0.73,
        0.535
      ],
      "s": [
        0.73,
        0.52,
        0.045
      ],
      "c": 3687241
    },
    {
      "t": "sphere",
      "n": "mouth-arch",
      "p": [
        0,
        1.01,
        0.535
      ],
      "s": [
        0.84,
        0.15,
        0.12
      ],
      "c": 11236435
    },
    {
      "t": "box",
      "n": "stone-baking-deck",
      "p": [
        0,
        0.54,
        0.42
      ],
      "s": [
        0.93,
        0.09,
        0.41
      ],
      "c": 13813160
    },
    {
      "t": "cylinder",
      "n": "roof-chimney",
      "p": [
        0.37,
        1.32,
        -0.36
      ],
      "s": [
        0.19,
        0.44,
        0.19
      ],
      "c": 10972236
    },
    {
      "t": "cylinder",
      "n": "flue-hood",
      "p": [
        0.37,
        1.51,
        -0.36
      ],
      "s": [
        0.27,
        0.075,
        0.27
      ],
      "c": 3687241
    },
    {
      "t": "box",
      "n": "decorative-brick-0",
      "p": [
        -0.59,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 13473142
    },
    {
      "t": "box",
      "n": "decorative-brick-1",
      "p": [
        -0.38999999999999996,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 11628116
    },
    {
      "t": "box",
      "n": "decorative-brick-2",
      "p": [
        -0.18999999999999995,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 13473142
    },
    {
      "t": "box",
      "n": "decorative-brick-3",
      "p": [
        0.01000000000000012,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 11628116
    },
    {
      "t": "box",
      "n": "decorative-brick-4",
      "p": [
        0.21000000000000008,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 13473142
    },
    {
      "t": "box",
      "n": "decorative-brick-5",
      "p": [
        0.41000000000000003,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 11628116
    },
    {
      "t": "box",
      "n": "decorative-brick-6",
      "p": [
        0.6100000000000002,
        0.44,
        0.64
      ],
      "s": [
        0.17,
        0.11,
        0.017
      ],
      "c": 13473142
    },
    {
      "t": "box",
      "n": "wooden-peel-plate",
      "p": [
        0.6,
        0.09,
        0.57
      ],
      "s": [
        0.23,
        0.025,
        0.31
      ],
      "c": 9661257
    },
    {
      "t": "rod",
      "n": "peel-handle",
      "from": [
        0.6,
        0.11,
        0.7
      ],
      "to": [
        0.6,
        0.15,
        1.05
      ],
      "r": 0.024,
      "c": 9661257
    },
    {
      "t": "sphere",
      "n": "simulated-fire",
      "p": [
        0,
        0.66,
        0.55
      ],
      "s": [
        0.22,
        0.13,
        0.05
      ],
      "c": 14790243
    },
    {
      "t": "box",
      "n": "foundation-foot-0",
      "p": [
        -0.47,
        0.045,
        -0.31
      ],
      "s": [
        0.16,
        0.09,
        0.17
      ],
      "c": 3687241
    },
    {
      "t": "box",
      "n": "foundation-foot-1",
      "p": [
        0.47,
        0.045,
        -0.31
      ],
      "s": [
        0.16,
        0.09,
        0.17
      ],
      "c": 3687241
    }
  ]
}); }
