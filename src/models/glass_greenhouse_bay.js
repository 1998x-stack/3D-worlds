import { buildRecipe } from './recipe_engine.js';
/** Glass Greenhouse Bay — editable original procedural asset. */
export const assetMeta = {
  "id": "architecture.glass-greenhouse-bay.001",
  "slug": "glass-greenhouse-bay",
  "title": "Glass Greenhouse Bay",
  "title_zh": "玻璃温室单元",
  "summary": "Modular greenhouse with glass roof, irrigated planters and door",
  "category": "architecture",
  "tags": [
    "greenhouse",
    "architecture",
    "modular"
  ],
  "dimensions_m": [
    2.41,
    2.63,
    2.13
  ],
  "generator": "createGlassGreenhouseBay",
  "source_path": "src/models/glass_greenhouse_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/glass-greenhouse-bay.webp"
};
export function createGlassGreenhouseBay() { return buildRecipe({
  "title": "Glass Greenhouse Bay",
  "dimensions": [
    2.41,
    2.63,
    2.13
  ],
  "parts": [
    {
      "t": "box",
      "n": "floor",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        2.39,
        0.16,
        2.1
      ],
      "c": 10264205
    },
    {
      "t": "rod",
      "n": "post-0-0",
      "from": [
        -1.13,
        0.16,
        -0.98
      ],
      "to": [
        -1.13,
        2.07,
        -0.98
      ],
      "r": 0.04,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "post-0-1",
      "from": [
        -1.13,
        0.16,
        0.98
      ],
      "to": [
        -1.13,
        2.07,
        0.98
      ],
      "r": 0.04,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "post-1-0",
      "from": [
        1.13,
        0.16,
        -0.98
      ],
      "to": [
        1.13,
        2.07,
        -0.98
      ],
      "r": 0.04,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "post-1-1",
      "from": [
        1.13,
        0.16,
        0.98
      ],
      "to": [
        1.13,
        2.07,
        0.98
      ],
      "r": 0.04,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "ridge-beam",
      "from": [
        0,
        2.62,
        -0.98
      ],
      "to": [
        0,
        2.62,
        0.98
      ],
      "r": 0.034,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "roof-rafter-front-0",
      "from": [
        -1.13,
        2.07,
        0.98
      ],
      "to": [
        0,
        2.62,
        0.98
      ],
      "r": 0.037,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "roof-rafter-rear-0",
      "from": [
        -1.13,
        2.07,
        -0.98
      ],
      "to": [
        0,
        2.62,
        -0.98
      ],
      "r": 0.037,
      "c": 9544355
    },
    {
      "t": "box",
      "n": "roof-glass-0",
      "p": [
        -0.56,
        2.37,
        0
      ],
      "s": [
        1.23,
        0.026,
        2
      ],
      "c": 10731975,
      "rot": [
        0,
        0,
        -0.45
      ]
    },
    {
      "t": "box",
      "n": "side-window-0",
      "p": [
        -1.14,
        1.21,
        0
      ],
      "s": [
        0.032,
        1.57,
        1.88
      ],
      "c": 8825776
    },
    {
      "t": "rod",
      "n": "roof-rafter-front-1",
      "from": [
        1.13,
        2.07,
        0.98
      ],
      "to": [
        0,
        2.62,
        0.98
      ],
      "r": 0.037,
      "c": 9544355
    },
    {
      "t": "rod",
      "n": "roof-rafter-rear-1",
      "from": [
        1.13,
        2.07,
        -0.98
      ],
      "to": [
        0,
        2.62,
        -0.98
      ],
      "r": 0.037,
      "c": 9544355
    },
    {
      "t": "box",
      "n": "roof-glass-1",
      "p": [
        0.56,
        2.37,
        0
      ],
      "s": [
        1.23,
        0.026,
        2
      ],
      "c": 10731975,
      "rot": [
        0,
        0,
        0.45
      ]
    },
    {
      "t": "box",
      "n": "side-window-1",
      "p": [
        1.14,
        1.21,
        0
      ],
      "s": [
        0.032,
        1.57,
        1.88
      ],
      "c": 8825776
    },
    {
      "t": "box",
      "n": "rear-glass",
      "p": [
        0,
        1.17,
        -1
      ],
      "s": [
        2.12,
        1.72,
        0.027
      ],
      "c": 8365738
    },
    {
      "t": "box",
      "n": "hinged-front-door",
      "p": [
        0,
        1.13,
        1.01
      ],
      "s": [
        0.94,
        1.74,
        0.035
      ],
      "c": 7973552
    },
    {
      "t": "box",
      "n": "entry-handle",
      "p": [
        0.34,
        1.05,
        1.049
      ],
      "s": [
        0.037,
        0.2,
        0.042
      ],
      "c": 3687756
    },
    {
      "t": "box",
      "n": "plant-trough-0",
      "p": [
        -0.78,
        0.37,
        0
      ],
      "s": [
        0.4,
        0.35,
        1.45
      ],
      "c": 9792843
    },
    {
      "t": "box",
      "n": "plant-trough-1",
      "p": [
        0.78,
        0.37,
        0
      ],
      "s": [
        0.4,
        0.35,
        1.45
      ],
      "c": 9792843
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-0",
      "p": [
        -0.78,
        0.57,
        -0.54
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 7972214
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-1",
      "p": [
        0.78,
        0.57,
        -0.54
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 5213030
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-2",
      "p": [
        -0.78,
        0.57,
        -0.19000000000000006
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 7972214
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-3",
      "p": [
        0.78,
        0.57,
        -0.19000000000000006
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 5213030
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-4",
      "p": [
        -0.78,
        0.57,
        0.15999999999999992
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 7972214
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-5",
      "p": [
        0.78,
        0.57,
        0.15999999999999992
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 5213030
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-6",
      "p": [
        -0.78,
        0.57,
        0.5099999999999998
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 7972214
    },
    {
      "t": "sphere",
      "n": "greenhouse-plant-7",
      "p": [
        0.78,
        0.57,
        0.5099999999999998
      ],
      "s": [
        0.19,
        0.19,
        0.18
      ],
      "c": 5213030
    },
    {
      "t": "rod",
      "n": "irrigation-pipe",
      "from": [
        -0.96,
        1.09,
        -0.79
      ],
      "to": [
        0.96,
        1.09,
        -0.79
      ],
      "r": 0.018,
      "c": 5803422
    }
  ]
}); }
