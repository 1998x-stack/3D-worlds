import { buildRecipe } from './recipe_engine.js';
/** Heated Wall Towel Rail / 壁挂式电热毛巾架: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "bathroom.heated-wall-towel-rail.001",
  "slug": "heated-wall-towel-rail",
  "title": "Heated Wall Towel Rail",
  "title_zh": "壁挂式电热毛巾架",
  "summary": "Stainless electric ladder-style towel heater with vertical pipes and towel drape",
  "category": "bathroom",
  "tags": [
    "towel",
    "heater",
    "bathroom"
  ],
  "dimensions_m": [
    0.77,
    1.22,
    0.19
  ],
  "generator": "createHeatedWallTowelRail",
  "source_path": "src/models/heated_wall_towel_rail.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/heated-wall-towel-rail.webp"
};
export function createHeatedWallTowelRail() { return buildRecipe({
  "title": "Heated Wall Towel Rail",
  "dimensions": [
    0.77,
    1.22,
    0.19
  ],
  "parts": [
    {
      "t": "rod",
      "n": "main-upright-0",
      "from": [
        -0.33,
        0.08,
        0
      ],
      "to": [
        -0.33,
        1.18,
        0
      ],
      "r": 0.025,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "main-upright-1",
      "from": [
        0.33,
        0.08,
        0
      ],
      "to": [
        0.33,
        1.18,
        0
      ],
      "r": 0.025,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-0",
      "from": [
        -0.32,
        0.16,
        0
      ],
      "to": [
        0.32,
        0.16,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-1",
      "from": [
        -0.32,
        0.275,
        0
      ],
      "to": [
        0.32,
        0.275,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-2",
      "from": [
        -0.32,
        0.39,
        0
      ],
      "to": [
        0.32,
        0.39,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-3",
      "from": [
        -0.32,
        0.505,
        0
      ],
      "to": [
        0.32,
        0.505,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-4",
      "from": [
        -0.32,
        0.62,
        0
      ],
      "to": [
        0.32,
        0.62,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-5",
      "from": [
        -0.32,
        0.7350000000000001,
        0
      ],
      "to": [
        0.32,
        0.7350000000000001,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-6",
      "from": [
        -0.32,
        0.8500000000000001,
        0
      ],
      "to": [
        0.32,
        0.8500000000000001,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-7",
      "from": [
        -0.32,
        0.9650000000000001,
        0
      ],
      "to": [
        0.32,
        0.9650000000000001,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "heated-rail-8",
      "from": [
        -0.32,
        1.08,
        0
      ],
      "to": [
        0.32,
        1.08,
        0
      ],
      "r": 0.02,
      "c": 9741736
    },
    {
      "t": "box",
      "n": "upper-wall-fix-0",
      "p": [
        -0.29,
        1.02,
        -0.075
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "lower-wall-fix-0",
      "p": [
        -0.29,
        0.19,
        -0.075
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "upper-wall-fix-1",
      "p": [
        0.29,
        1.02,
        -0.075
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "lower-wall-fix-1",
      "p": [
        0.29,
        0.19,
        -0.075
      ],
      "s": [
        0.1,
        0.09,
        0.11
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "draped-towel-front",
      "p": [
        0,
        0.69,
        0.065
      ],
      "s": [
        0.47,
        0.4,
        0.035
      ],
      "c": 12703180
    },
    {
      "t": "box",
      "n": "draped-towel-back",
      "p": [
        0,
        0.92,
        -0.028
      ],
      "s": [
        0.47,
        0.14,
        0.035
      ],
      "c": 11585464
    },
    {
      "t": "box",
      "n": "towel-stripe",
      "p": [
        0,
        0.52,
        0.087
      ],
      "s": [
        0.44,
        0.033,
        0.006
      ],
      "c": 6264977
    },
    {
      "t": "box",
      "n": "thermostat",
      "p": [
        -0.36,
        0.11,
        0.04
      ],
      "s": [
        0.12,
        0.13,
        0.08
      ],
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "power-indicator",
      "p": [
        -0.37,
        0.15,
        0.092
      ],
      "s": [
        0.02,
        0.02,
        0.014
      ],
      "c": 9095067
    }
  ]
}); }
