import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.steel-garden-wheelbarrow.001",
  "slug": "steel-garden-wheelbarrow",
  "title": "Steel Garden Wheelbarrow",
  "title_zh": "园艺独轮手推车",
  "summary": "Outdoor single wheelbarrow with steel tray, handles and kickstand.",
  "category": "tools",
  "tags": [
    "wheelbarrow",
    "garden",
    "construction"
  ],
  "dimensions_m": [
    0.8,
    0.81,
    1.57
  ],
  "generator": "createSteelGardenWheelbarrow",
  "source_path": "src/models/steel_garden_wheelbarrow.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/steel-garden-wheelbarrow.webp"
};
export function createSteelGardenWheelbarrow() {
 return buildRecipe({
  "title": "Steel Garden Wheelbarrow",
  "dimensions": [
    0.8,
    0.81,
    1.57
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "metal-tray",
      "p": [
        0,
        0.58,
        0.09
      ],
      "s": [
        0.72,
        0.39,
        1.03
      ],
      "c": 8033681
    },
    {
      "t": "box",
      "n": "tray-floor",
      "p": [
        0,
        0.44,
        0.09
      ],
      "s": [
        0.66,
        0.08,
        0.94
      ],
      "c": 9218723
    },
    {
      "t": "cylinder",
      "n": "front-tyre",
      "p": [
        0,
        0.25,
        0.7
      ],
      "s": [
        0.5,
        0.15,
        0.5
      ],
      "c": 3161155,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub",
      "p": [
        0,
        0.25,
        0.71
      ],
      "s": [
        0.23,
        0.16,
        0.23
      ],
      "c": 9018268,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "fork-left",
      "from": [
        -0.24,
        0.39,
        0.4
      ],
      "to": [
        -0.1,
        0.25,
        0.7
      ],
      "r": 0.029,
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "fork-right",
      "from": [
        0.24,
        0.39,
        0.4
      ],
      "to": [
        0.1,
        0.25,
        0.7
      ],
      "r": 0.029,
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "handle-0",
      "from": [
        -0.26,
        0.51,
        0.33
      ],
      "to": [
        -0.26,
        0.78,
        -0.65
      ],
      "r": 0.038,
      "c": 9728853
    },
    {
      "t": "rod",
      "n": "support-0",
      "from": [
        -0.26,
        0.46,
        -0.21
      ],
      "to": [
        -0.26,
        0.08,
        -0.38
      ],
      "r": 0.034,
      "c": 3161155
    },
    {
      "t": "box",
      "n": "grip-0",
      "p": [
        -0.26,
        0.77,
        -0.64
      ],
      "s": [
        0.095,
        0.04,
        0.26
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "rear-foot-0",
      "p": [
        -0.26,
        0.05,
        -0.38
      ],
      "s": [
        0.12,
        0.1,
        0.15
      ],
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "handle-1",
      "from": [
        0.26,
        0.51,
        0.33
      ],
      "to": [
        0.26,
        0.78,
        -0.65
      ],
      "r": 0.038,
      "c": 9728853
    },
    {
      "t": "rod",
      "n": "support-1",
      "from": [
        0.26,
        0.46,
        -0.21
      ],
      "to": [
        0.26,
        0.08,
        -0.38
      ],
      "r": 0.034,
      "c": 3161155
    },
    {
      "t": "box",
      "n": "grip-1",
      "p": [
        0.26,
        0.77,
        -0.64
      ],
      "s": [
        0.095,
        0.04,
        0.26
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "rear-foot-1",
      "p": [
        0.26,
        0.05,
        -0.38
      ],
      "s": [
        0.12,
        0.1,
        0.15
      ],
      "c": 3161155
    }
  ]
});
}
