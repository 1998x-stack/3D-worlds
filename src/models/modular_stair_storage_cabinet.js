import { buildRecipe } from './recipe_engine.js';
/** Modular Stair Storage Cabinet / 阶梯式组合储物柜: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "furniture.modular-stair-storage-cabinet.001",
  "slug": "modular-stair-storage-cabinet",
  "title": "Modular Stair Storage Cabinet",
  "title_zh": "阶梯式组合储物柜",
  "summary": "Three-level stepped storage cabinet with cubbies, drawer pulls and contrasting stair tread",
  "category": "furniture",
  "tags": [
    "storage",
    "modular",
    "stair"
  ],
  "dimensions_m": [
    1.65,
    1.56,
    0.49
  ],
  "generator": "createModularStairStorageCabinet",
  "source_path": "src/models/modular_stair_storage_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/modular-stair-storage-cabinet.webp"
};
export function createModularStairStorageCabinet() { return buildRecipe({
  "title": "Modular Stair Storage Cabinet",
  "dimensions": [
    1.65,
    1.56,
    0.49
  ],
  "parts": [
    {
      "t": "box",
      "n": "step-module-0",
      "p": [
        -0.52,
        0.28,
        0
      ],
      "s": [
        0.51,
        0.53,
        0.47
      ],
      "c": 12296580
    },
    {
      "t": "box",
      "n": "step-module-1",
      "p": [
        0,
        0.54,
        0
      ],
      "s": [
        0.51,
        1.05,
        0.47
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "step-module-2",
      "p": [
        0.52,
        0.8,
        0
      ],
      "s": [
        0.51,
        1.57,
        0.47
      ],
      "c": 12296580
    },
    {
      "t": "box",
      "n": "stair-top-0",
      "p": [
        -0.52,
        0.54,
        0
      ],
      "s": [
        0.52,
        0.055,
        0.49
      ],
      "c": 13943200
    },
    {
      "t": "box",
      "n": "stair-top-1",
      "p": [
        0,
        1.06,
        0
      ],
      "s": [
        0.52,
        0.055,
        0.49
      ],
      "c": 13943200
    },
    {
      "t": "box",
      "n": "stair-top-2",
      "p": [
        0.52,
        1.58,
        0
      ],
      "s": [
        0.52,
        0.055,
        0.49
      ],
      "c": 13943200
    },
    {
      "t": "box",
      "n": "drawer-face-0",
      "p": [
        -0.52,
        0.28,
        0.246
      ],
      "s": [
        0.42,
        0.38,
        0.021
      ],
      "c": 7177086
    },
    {
      "t": "box",
      "n": "drawer-face-1",
      "p": [
        0,
        0.54,
        0.246
      ],
      "s": [
        0.42,
        0.38,
        0.021
      ],
      "c": 7177086
    },
    {
      "t": "box",
      "n": "drawer-face-2",
      "p": [
        0.52,
        0.8,
        0.246
      ],
      "s": [
        0.42,
        0.38,
        0.021
      ],
      "c": 7177086
    },
    {
      "t": "box",
      "n": "drawer-pull-0",
      "p": [
        -0.52,
        0.28,
        0.267
      ],
      "s": [
        0.17,
        0.027,
        0.036
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "drawer-pull-1",
      "p": [
        0,
        0.54,
        0.267
      ],
      "s": [
        0.17,
        0.027,
        0.036
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "drawer-pull-2",
      "p": [
        0.52,
        0.8,
        0.267
      ],
      "s": [
        0.17,
        0.027,
        0.036
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "interior-cubby-0",
      "p": [
        -0.52,
        0.68,
        0.243
      ],
      "s": [
        0.38,
        0.17,
        0.017
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "interior-cubby-1",
      "p": [
        0,
        0.92,
        0.243
      ],
      "s": [
        0.38,
        0.17,
        0.017
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "interior-cubby-2",
      "p": [
        0.52,
        1.1600000000000001,
        0.243
      ],
      "s": [
        0.38,
        0.17,
        0.017
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "front-floor-pad-0",
      "p": [
        -0.72,
        0.025,
        0.2
      ],
      "s": [
        0.17,
        0.05,
        0.14
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "front-floor-pad-1",
      "p": [
        0.71,
        0.025,
        0.2
      ],
      "s": [
        0.17,
        0.05,
        0.14
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "handrail-wall",
      "from": [
        -0.72,
        1.02,
        -0.24
      ],
      "to": [
        0.72,
        1.51,
        -0.24
      ],
      "r": 0.032,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "rail-support-0",
      "from": [
        -0.62,
        0.71,
        -0.24
      ],
      "to": [
        -0.62,
        1.07,
        -0.24
      ],
      "r": 0.016,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "rail-support-1",
      "from": [
        -0.2,
        0.8899999999999999,
        -0.24
      ],
      "to": [
        -0.2,
        1.25,
        -0.24
      ],
      "r": 0.016,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "rail-support-2",
      "from": [
        0.21999999999999997,
        1.0699999999999998,
        -0.24
      ],
      "to": [
        0.21999999999999997,
        1.4300000000000002,
        -0.24
      ],
      "r": 0.016,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "rail-support-3",
      "from": [
        0.64,
        1.25,
        -0.24
      ],
      "to": [
        0.64,
        1.61,
        -0.24
      ],
      "r": 0.016,
      "c": 9741736
    }
  ]
}); }
