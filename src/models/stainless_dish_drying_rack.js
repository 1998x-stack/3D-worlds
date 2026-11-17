import { buildRecipe } from './recipe_engine.js';
/** Stainless Dish Drying Rack: individually authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.stainless-dish-drying-rack.001",
  "slug": "stainless-dish-drying-rack",
  "title": "Stainless Dish Drying Rack",
  "title_zh": "不锈钢沥水碗碟架",
  "summary": "Dish drying rack with perforated drip tray, vertical plate dividers and utensil basket.",
  "category": "kitchen",
  "tags": [
    "dish",
    "drying",
    "rack",
    "kitchen"
  ],
  "dimensions_m": [
    0.57,
    0.35,
    0.41
  ],
  "generator": "createStainlessDishDryingRack",
  "source_path": "src/models/stainless_dish_drying_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/stainless-dish-drying-rack.webp"
};
export function createStainlessDishDryingRack() {
 return buildRecipe({
  "title": "Stainless Dish Drying Rack",
  "dimensions": [
    0.57,
    0.35,
    0.41
  ],
  "parts": [
    {
      "t": "box",
      "n": "drip-tray",
      "p": [
        0,
        0.045,
        0
      ],
      "s": [
        0.57,
        0.065,
        0.41
      ],
      "c": 12043717
    },
    {
      "t": "rod",
      "n": "side-rail-0",
      "from": [
        -0.255,
        0.11,
        -0.17
      ],
      "to": [
        -0.255,
        0.3,
        0.17
      ],
      "r": 0.015,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "side-rail-1",
      "from": [
        0.255,
        0.11,
        -0.17
      ],
      "to": [
        0.255,
        0.3,
        0.17
      ],
      "r": 0.015,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-0",
      "from": [
        -0.22,
        0.11,
        -0.14
      ],
      "to": [
        -0.22,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-1",
      "from": [
        -0.168,
        0.11,
        -0.14
      ],
      "to": [
        -0.168,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-2",
      "from": [
        -0.116,
        0.11,
        -0.14
      ],
      "to": [
        -0.116,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-3",
      "from": [
        -0.064,
        0.11,
        -0.14
      ],
      "to": [
        -0.064,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-4",
      "from": [
        -0.01200000000000001,
        0.11,
        -0.14
      ],
      "to": [
        -0.01200000000000001,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-5",
      "from": [
        0.04000000000000001,
        0.11,
        -0.14
      ],
      "to": [
        0.04000000000000001,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-6",
      "from": [
        0.092,
        0.11,
        -0.14
      ],
      "to": [
        0.092,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-7",
      "from": [
        0.144,
        0.11,
        -0.14
      ],
      "to": [
        0.144,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "plate-rack-8",
      "from": [
        0.19599999999999998,
        0.11,
        -0.14
      ],
      "to": [
        0.19599999999999998,
        0.3,
        0.13
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "cylinder",
      "n": "plate-0",
      "p": [
        -0.15,
        0.19,
        -0.01
      ],
      "s": [
        0.21,
        0.015,
        0.21
      ],
      "c": 12966104,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "plate-1",
      "p": [
        0.02,
        0.19,
        -0.01
      ],
      "s": [
        0.21,
        0.015,
        0.21
      ],
      "c": 14804961,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "plate-2",
      "p": [
        0.2,
        0.19,
        -0.01
      ],
      "s": [
        0.21,
        0.015,
        0.21
      ],
      "c": 12966104,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "utensil-bucket",
      "p": [
        0.22,
        0.18,
        0.11
      ],
      "s": [
        0.1,
        0.24,
        0.13
      ],
      "c": 7114131
    },
    {
      "t": "rod",
      "n": "fork-0",
      "from": [
        0.2,
        0.16,
        0.12
      ],
      "to": [
        0.2,
        0.35,
        0.12
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "fork-1",
      "from": [
        0.223,
        0.16,
        0.12
      ],
      "to": [
        0.223,
        0.35,
        0.12
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "fork-2",
      "from": [
        0.246,
        0.16,
        0.12
      ],
      "to": [
        0.246,
        0.35,
        0.12
      ],
      "r": 0.009,
      "c": 8886427
    },
    {
      "t": "box",
      "n": "rack-foot-0",
      "p": [
        -0.22,
        0.02,
        0
      ],
      "s": [
        0.065,
        0.04,
        0.11
      ],
      "c": 3160900
    },
    {
      "t": "box",
      "n": "rack-foot-1",
      "p": [
        0.22,
        0.02,
        0
      ],
      "s": [
        0.065,
        0.04,
        0.11
      ],
      "c": 3160900
    }
  ]
});
}
