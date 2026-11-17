import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Modular Indoor Bonsai Wall / 模块化室内盆景墙. */
export const assetMeta = {
  "id": "decor.modular-indoor-bonsai-wall.001",
  "slug": "modular-indoor-bonsai-wall",
  "title": "Modular Indoor Bonsai Wall",
  "title_zh": "模块化室内盆景墙",
  "summary": "Staggered interior shelves supporting tiny sculptural bonsai trees",
  "category": "decor",
  "tags": [
    "modular",
    "indoor",
    "bonsai",
    "wall",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.95,
    2.35,
    0.82
  ],
  "generator": "createModularIndoorBonsaiWall",
  "source_path": "src/models/modular_indoor_bonsai_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/modular-indoor-bonsai-wall.webp",
  "accent": "#516b74"
};
export function createModularIndoorBonsaiWall() { return buildRecipe({
  "title": "Modular Indoor Bonsai Wall",
  "dimensions": [
    1.95,
    2.35,
    0.82
  ],
  "parts": [
    {
      "t": "box",
      "n": "indoor-bonsai-panel",
      "p": [
        0,
        1.13,
        -0.22
      ],
      "s": [
        1.81,
        2.22,
        0.14
      ],
      "c": 5335924
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-0-0",
      "p": [
        -0.62,
        0.32,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-0-0",
      "p": [
        -0.62,
        0.47,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-0-0",
      "from": [
        -0.62,
        0.52,
        0.07
      ],
      "to": [
        -0.675,
        0.77,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-0-0",
      "p": [
        -0.675,
        0.8200000000000001,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-0-1",
      "p": [
        0,
        0.32,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-0-1",
      "p": [
        0,
        0.47,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-0-1",
      "from": [
        0,
        0.52,
        0.07
      ],
      "to": [
        0,
        0.77,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-0-1",
      "p": [
        0,
        0.8200000000000001,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-0-2",
      "p": [
        0.62,
        0.32,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-0-2",
      "p": [
        0.62,
        0.47,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-0-2",
      "from": [
        0.62,
        0.52,
        0.07
      ],
      "to": [
        0.675,
        0.77,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-0-2",
      "p": [
        0.675,
        0.8200000000000001,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-1-0",
      "p": [
        -0.62,
        0.8500000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-1-0",
      "p": [
        -0.62,
        1,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-1-0",
      "from": [
        -0.62,
        1.05,
        0.07
      ],
      "to": [
        -0.675,
        1.3,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-1-0",
      "p": [
        -0.675,
        1.35,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-1-1",
      "p": [
        0,
        0.8500000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-1-1",
      "p": [
        0,
        1,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-1-1",
      "from": [
        0,
        1.05,
        0.07
      ],
      "to": [
        0,
        1.3,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-1-1",
      "p": [
        0,
        1.35,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-1-2",
      "p": [
        0.62,
        0.8500000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-1-2",
      "p": [
        0.62,
        1,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-1-2",
      "from": [
        0.62,
        1.05,
        0.07
      ],
      "to": [
        0.675,
        1.3,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-1-2",
      "p": [
        0.675,
        1.35,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-2-0",
      "p": [
        -0.62,
        1.3800000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-2-0",
      "p": [
        -0.62,
        1.53,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-2-0",
      "from": [
        -0.62,
        1.58,
        0.07
      ],
      "to": [
        -0.675,
        1.83,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-2-0",
      "p": [
        -0.675,
        1.8800000000000001,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-2-1",
      "p": [
        0,
        1.3800000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-2-1",
      "p": [
        0,
        1.53,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-2-1",
      "from": [
        0,
        1.58,
        0.07
      ],
      "to": [
        0,
        1.83,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-2-1",
      "p": [
        0,
        1.8800000000000001,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-2-2",
      "p": [
        0.62,
        1.3800000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-2-2",
      "p": [
        0.62,
        1.53,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-2-2",
      "from": [
        0.62,
        1.58,
        0.07
      ],
      "to": [
        0.675,
        1.83,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-2-2",
      "p": [
        0.675,
        1.8800000000000001,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-3-0",
      "p": [
        -0.62,
        1.9100000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-3-0",
      "p": [
        -0.62,
        2.06,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-3-0",
      "from": [
        -0.62,
        2.1100000000000003,
        0.07
      ],
      "to": [
        -0.675,
        2.3600000000000003,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-3-0",
      "p": [
        -0.675,
        2.41,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-3-1",
      "p": [
        0,
        1.9100000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-3-1",
      "p": [
        0,
        2.06,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-3-1",
      "from": [
        0,
        2.1100000000000003,
        0.07
      ],
      "to": [
        0,
        2.3600000000000003,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-3-1",
      "p": [
        0,
        2.41,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "bonsai-display-shelf-3-2",
      "p": [
        0.62,
        1.9100000000000001,
        0.01
      ],
      "s": [
        0.51,
        0.06,
        0.39
      ],
      "c": 13018498
    },
    {
      "t": "sphere",
      "n": "bonsai-ceramic-bowl-3-2",
      "p": [
        0.62,
        2.06,
        0.07
      ],
      "s": [
        0.2,
        0.14,
        0.18
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "miniature-tree-stem-3-2",
      "from": [
        0.62,
        2.1100000000000003,
        0.07
      ],
      "to": [
        0.675,
        2.3600000000000003,
        0.05
      ],
      "r": 0.026,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "canopy-foliage-3-2",
      "p": [
        0.675,
        2.41,
        0.05
      ],
      "s": [
        0.3,
        0.2,
        0.25
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "hidden-watering-line",
      "p": [
        0.85,
        1.12,
        0.02
      ],
      "s": [
        0.04,
        1.77,
        0.045
      ],
      "c": 15191480
    }
  ]
}); }
