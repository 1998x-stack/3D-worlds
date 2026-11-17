import { buildRecipe } from './recipe_engine.js';
/** Countertop Food Processor — editable original procedural asset. */
export const assetMeta = {
  "id": "kitchen.countertop-food-processor.001",
  "slug": "countertop-food-processor",
  "title": "Countertop Food Processor",
  "title_zh": "台式多功能料理机",
  "summary": "Transparent blender processor with chopping blades, feed tube and LCD control",
  "category": "kitchen",
  "tags": [
    "processor",
    "food-prep",
    "appliance"
  ],
  "dimensions_m": [
    0.32,
    0.58,
    0.37
  ],
  "generator": "createCountertopFoodProcessor",
  "source_path": "src/models/countertop_food_processor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/countertop-food-processor.webp"
};
export function createCountertopFoodProcessor() { return buildRecipe({
  "title": "Countertop Food Processor",
  "dimensions": [
    0.32,
    0.58,
    0.37
  ],
  "parts": [
    {
      "t": "box",
      "n": "motor-base",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        0.3,
        0.26,
        0.34
      ],
      "c": 3687756
    },
    {
      "t": "cylinder",
      "n": "mixing-bowl",
      "p": [
        0,
        0.37,
        0
      ],
      "s": [
        0.26,
        0.31,
        0.27
      ],
      "c": 10207944
    },
    {
      "t": "cylinder",
      "n": "sealed-lid",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.31,
        0.053,
        0.32
      ],
      "c": 6716806
    },
    {
      "t": "cylinder",
      "n": "ingredient-feed-tube",
      "p": [
        0.05,
        0.58,
        -0.06
      ],
      "s": [
        0.115,
        0.13,
        0.12
      ],
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "blade-spindle",
      "from": [
        0,
        0.29,
        0
      ],
      "to": [
        0,
        0.5,
        0
      ],
      "r": 0.019,
      "c": 3687756
    },
    {
      "t": "box",
      "n": "chopping-blade-0",
      "p": [
        -0.08,
        0.34,
        0
      ],
      "s": [
        0.15,
        0.017,
        0.032
      ],
      "c": 9544355,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "chopping-blade-1",
      "p": [
        0.08,
        0.34,
        0
      ],
      "s": [
        0.15,
        0.017,
        0.032
      ],
      "c": 9544355,
      "rot": [
        0,
        0.84,
        0
      ]
    },
    {
      "t": "box",
      "n": "bowl-handle",
      "p": [
        0.15,
        0.34,
        0.04
      ],
      "s": [
        0.11,
        0.19,
        0.08
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "lcd-control",
      "p": [
        0,
        0.17,
        0.176
      ],
      "s": [
        0.19,
        0.085,
        0.014
      ],
      "c": 5803422
    },
    {
      "t": "sphere",
      "n": "function-key-0",
      "p": [
        -0.09,
        0.072,
        0.178
      ],
      "s": [
        0.024,
        0.017,
        0.014
      ],
      "c": 14999505
    },
    {
      "t": "sphere",
      "n": "function-key-1",
      "p": [
        0,
        0.072,
        0.178
      ],
      "s": [
        0.024,
        0.017,
        0.014
      ],
      "c": 14999505
    },
    {
      "t": "sphere",
      "n": "function-key-2",
      "p": [
        0.09,
        0.072,
        0.178
      ],
      "s": [
        0.024,
        0.017,
        0.014
      ],
      "c": 14999505
    },
    {
      "t": "box",
      "n": "anti-slip-foot-0",
      "p": [
        -0.11,
        0.026,
        -0.1
      ],
      "s": [
        0.06,
        0.052,
        0.09
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "anti-slip-foot-1",
      "p": [
        0.11,
        0.026,
        -0.1
      ],
      "s": [
        0.06,
        0.052,
        0.09
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "lid-latch",
      "p": [
        0,
        0.54,
        0.17
      ],
      "s": [
        0.1,
        0.05,
        0.039
      ],
      "c": 13017709
    }
  ]
}); }
