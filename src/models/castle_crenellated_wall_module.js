import { buildRecipe } from './recipe_engine.js';
/** Castle Crenellated Wall Module — editable original procedural asset. */
export const assetMeta = {
  "id": "architecture.castle-crenellated-wall-module.001",
  "slug": "castle-crenellated-wall-module",
  "title": "Castle Crenellated Wall Module",
  "title_zh": "城堡垛口墙模块",
  "summary": "Medieval masonry battlement wall tile with merlons and arrow slit",
  "category": "architecture",
  "tags": [
    "castle",
    "fortress",
    "masonry"
  ],
  "dimensions_m": [
    3.2,
    2.76,
    0.81
  ],
  "generator": "createCastleCrenellatedWallModule",
  "source_path": "src/models/castle_crenellated_wall_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/castle-crenellated-wall-module.webp"
};
export function createCastleCrenellatedWallModule() { return buildRecipe({
  "title": "Castle Crenellated Wall Module",
  "dimensions": [
    3.2,
    2.76,
    0.81
  ],
  "parts": [
    {
      "t": "box",
      "n": "stone-wall",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        3.16,
        2.25,
        0.79
      ],
      "c": 10198677
    },
    {
      "t": "box",
      "n": "foundation",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        3.18,
        0.24,
        0.8
      ],
      "c": 8948353
    },
    {
      "t": "box",
      "n": "parapet-ledge",
      "p": [
        0,
        2.3,
        0
      ],
      "s": [
        3.2,
        0.17,
        0.82
      ],
      "c": 11644573
    },
    {
      "t": "box",
      "n": "merlon-0",
      "p": [
        -1.27,
        2.59,
        0
      ],
      "s": [
        0.39,
        0.36,
        0.77
      ],
      "c": 10921881
    },
    {
      "t": "box",
      "n": "merlon-1",
      "p": [
        -0.63,
        2.59,
        0
      ],
      "s": [
        0.39,
        0.36,
        0.77
      ],
      "c": 10921881
    },
    {
      "t": "box",
      "n": "merlon-2",
      "p": [
        0.010000000000000009,
        2.59,
        0
      ],
      "s": [
        0.39,
        0.36,
        0.77
      ],
      "c": 10921881
    },
    {
      "t": "box",
      "n": "merlon-3",
      "p": [
        0.6499999999999999,
        2.59,
        0
      ],
      "s": [
        0.39,
        0.36,
        0.77
      ],
      "c": 10921881
    },
    {
      "t": "box",
      "n": "merlon-4",
      "p": [
        1.29,
        2.59,
        0
      ],
      "s": [
        0.39,
        0.36,
        0.77
      ],
      "c": 10921881
    },
    {
      "t": "box",
      "n": "brick-course-0",
      "p": [
        0,
        0.37,
        0.416
      ],
      "s": [
        3.08,
        0.024,
        0.014
      ],
      "c": 7831160
    },
    {
      "t": "box",
      "n": "brick-course-1",
      "p": [
        0,
        0.6799999999999999,
        0.416
      ],
      "s": [
        3.08,
        0.024,
        0.014
      ],
      "c": 12499369
    },
    {
      "t": "box",
      "n": "brick-course-2",
      "p": [
        0,
        0.99,
        0.416
      ],
      "s": [
        3.08,
        0.024,
        0.014
      ],
      "c": 7831160
    },
    {
      "t": "box",
      "n": "brick-course-3",
      "p": [
        0,
        1.2999999999999998,
        0.416
      ],
      "s": [
        3.08,
        0.024,
        0.014
      ],
      "c": 12499369
    },
    {
      "t": "box",
      "n": "brick-course-4",
      "p": [
        0,
        1.6099999999999999,
        0.416
      ],
      "s": [
        3.08,
        0.024,
        0.014
      ],
      "c": 7831160
    },
    {
      "t": "box",
      "n": "brick-course-5",
      "p": [
        0,
        1.92,
        0.416
      ],
      "s": [
        3.08,
        0.024,
        0.014
      ],
      "c": 12499369
    },
    {
      "t": "box",
      "n": "vertical-mortar-0",
      "p": [
        -1.39,
        0.43,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-1",
      "p": [
        -0.47999999999999987,
        0.43,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-2",
      "p": [
        0.43000000000000016,
        0.43,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-3",
      "p": [
        1.34,
        0.43,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-4",
      "p": [
        -1.39,
        1.07,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-5",
      "p": [
        -0.47999999999999987,
        1.07,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-6",
      "p": [
        0.43000000000000016,
        1.07,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-7",
      "p": [
        1.34,
        1.07,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-8",
      "p": [
        -1.39,
        1.71,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-9",
      "p": [
        -0.47999999999999987,
        1.71,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-10",
      "p": [
        0.43000000000000016,
        1.71,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "vertical-mortar-11",
      "p": [
        1.34,
        1.71,
        0.425
      ],
      "s": [
        0.022,
        0.27,
        0.012
      ],
      "c": 13682868
    },
    {
      "t": "box",
      "n": "arrow-slit-top",
      "p": [
        0,
        1.65,
        0.415
      ],
      "s": [
        0.13,
        0.48,
        0.027
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "arrow-slit-stem",
      "p": [
        0,
        1.16,
        0.416
      ],
      "s": [
        0.079,
        0.53,
        0.028
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "buttress-0",
      "p": [
        -1.38,
        0.84,
        0.06
      ],
      "s": [
        0.37,
        1.68,
        0.86
      ],
      "c": 9278347
    },
    {
      "t": "box",
      "n": "buttress-1",
      "p": [
        1.38,
        0.84,
        0.06
      ],
      "s": [
        0.37,
        1.68,
        0.86
      ],
      "c": 9278347
    },
    {
      "t": "sphere",
      "n": "stone-detail-0",
      "p": [
        -0.98,
        0.82,
        0.427
      ],
      "s": [
        0.13,
        0.08,
        0.019
      ],
      "c": 12629668
    },
    {
      "t": "sphere",
      "n": "stone-detail-1",
      "p": [
        -0.32999999999999996,
        0.82,
        0.427
      ],
      "s": [
        0.13,
        0.08,
        0.019
      ],
      "c": 12629668
    },
    {
      "t": "sphere",
      "n": "stone-detail-2",
      "p": [
        0.32000000000000006,
        0.82,
        0.427
      ],
      "s": [
        0.13,
        0.08,
        0.019
      ],
      "c": 12629668
    },
    {
      "t": "sphere",
      "n": "stone-detail-3",
      "p": [
        0.9700000000000002,
        0.82,
        0.427
      ],
      "s": [
        0.13,
        0.08,
        0.019
      ],
      "c": 12629668
    }
  ]
}); }
