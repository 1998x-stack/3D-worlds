import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Suspended Glass Skybridge Bay / 悬挂式玻璃连廊模块. */
export const assetMeta = {
  "id": "architecture.suspended-glass-skybridge-bay.001",
  "slug": "suspended-glass-skybridge-bay",
  "title": "Suspended Glass Skybridge Bay",
  "title_zh": "悬挂式玻璃连廊模块",
  "summary": "Building-to-building enclosed glass skybridge with trusses, deck and ceiling supports",
  "category": "architecture",
  "tags": [
    "suspended",
    "glass",
    "skybridge",
    "bay",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.85,
    2.6,
    2.65
  ],
  "generator": "createSuspendedGlassSkybridgeBay",
  "source_path": "src/models/suspended_glass_skybridge_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/suspended-glass-skybridge-bay.webp",
  "accent": "#6e5e50"
};
export function createSuspendedGlassSkybridgeBay() { return buildRecipe({
  "title": "Suspended Glass Skybridge Bay",
  "dimensions": [
    3.85,
    2.6,
    2.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "suspended-skybridge-deck",
      "p": [
        0,
        0.33,
        0
      ],
      "s": [
        3.45,
        0.18,
        2.06
      ],
      "c": 12823949
    },
    {
      "t": "box",
      "n": "glass-skybridge-roof",
      "p": [
        0,
        2.35,
        0
      ],
      "s": [
        3.42,
        0.11,
        2.06
      ],
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "truss-vertical--1-0",
      "from": [
        -1.51,
        0.38,
        -0.94
      ],
      "to": [
        -1.51,
        2.32,
        -0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane--1-0",
      "p": [
        -1.51,
        0.94,
        -0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical--1-1",
      "from": [
        -0.9,
        0.38,
        -0.94
      ],
      "to": [
        -0.9,
        2.32,
        -0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane--1-1",
      "p": [
        -0.9,
        0.94,
        -0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical--1-2",
      "from": [
        -0.29000000000000004,
        0.38,
        -0.94
      ],
      "to": [
        -0.29000000000000004,
        2.32,
        -0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane--1-2",
      "p": [
        -0.29000000000000004,
        0.94,
        -0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical--1-3",
      "from": [
        0.32000000000000006,
        0.38,
        -0.94
      ],
      "to": [
        0.32000000000000006,
        2.32,
        -0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane--1-3",
      "p": [
        0.32000000000000006,
        0.94,
        -0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical--1-4",
      "from": [
        0.9299999999999999,
        0.38,
        -0.94
      ],
      "to": [
        0.9299999999999999,
        2.32,
        -0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane--1-4",
      "p": [
        0.9299999999999999,
        0.94,
        -0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical--1-5",
      "from": [
        1.5399999999999998,
        0.38,
        -0.94
      ],
      "to": [
        1.5399999999999998,
        2.32,
        -0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane--1-5",
      "p": [
        1.5399999999999998,
        0.94,
        -0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical-1-0",
      "from": [
        -1.51,
        0.38,
        0.94
      ],
      "to": [
        -1.51,
        2.32,
        0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane-1-0",
      "p": [
        -1.51,
        0.94,
        0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical-1-1",
      "from": [
        -0.9,
        0.38,
        0.94
      ],
      "to": [
        -0.9,
        2.32,
        0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane-1-1",
      "p": [
        -0.9,
        0.94,
        0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical-1-2",
      "from": [
        -0.29000000000000004,
        0.38,
        0.94
      ],
      "to": [
        -0.29000000000000004,
        2.32,
        0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane-1-2",
      "p": [
        -0.29000000000000004,
        0.94,
        0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical-1-3",
      "from": [
        0.32000000000000006,
        0.38,
        0.94
      ],
      "to": [
        0.32000000000000006,
        2.32,
        0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane-1-3",
      "p": [
        0.32000000000000006,
        0.94,
        0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical-1-4",
      "from": [
        0.9299999999999999,
        0.38,
        0.94
      ],
      "to": [
        0.9299999999999999,
        2.32,
        0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane-1-4",
      "p": [
        0.9299999999999999,
        0.94,
        0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "truss-vertical-1-5",
      "from": [
        1.5399999999999998,
        0.38,
        0.94
      ],
      "to": [
        1.5399999999999998,
        2.32,
        0.94
      ],
      "r": 0.045,
      "c": 6059910
    },
    {
      "t": "box",
      "n": "glass-wall-pane-1-5",
      "p": [
        1.5399999999999998,
        0.94,
        0.98
      ],
      "s": [
        0.53,
        1.07,
        0.045
      ],
      "c": 10208710
    },
    {
      "t": "rod",
      "n": "skybridge-lower-truss--1",
      "from": [
        -1.62,
        0.45,
        -0.95
      ],
      "to": [
        1.62,
        0.45,
        -0.95
      ],
      "r": 0.058,
      "c": 7233104
    },
    {
      "t": "rod",
      "n": "skybridge-upper-truss--1",
      "from": [
        -1.62,
        2.31,
        -0.95
      ],
      "to": [
        1.62,
        2.31,
        -0.95
      ],
      "r": 0.058,
      "c": 7233104
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal--1-0",
      "from": [
        -1.5,
        0.5,
        -0.95
      ],
      "to": [
        -0.89,
        2.27,
        -0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal--1-1",
      "from": [
        -0.89,
        0.5,
        -0.95
      ],
      "to": [
        -0.28,
        2.27,
        -0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal--1-2",
      "from": [
        -0.28,
        0.5,
        -0.95
      ],
      "to": [
        0.32999999999999996,
        2.27,
        -0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal--1-3",
      "from": [
        0.33000000000000007,
        0.5,
        -0.95
      ],
      "to": [
        0.9400000000000001,
        2.27,
        -0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal--1-4",
      "from": [
        0.94,
        0.5,
        -0.95
      ],
      "to": [
        1.5499999999999998,
        2.27,
        -0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-lower-truss-1",
      "from": [
        -1.62,
        0.45,
        0.95
      ],
      "to": [
        1.62,
        0.45,
        0.95
      ],
      "r": 0.058,
      "c": 7233104
    },
    {
      "t": "rod",
      "n": "skybridge-upper-truss-1",
      "from": [
        -1.62,
        2.31,
        0.95
      ],
      "to": [
        1.62,
        2.31,
        0.95
      ],
      "r": 0.058,
      "c": 7233104
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal-1-0",
      "from": [
        -1.5,
        0.5,
        0.95
      ],
      "to": [
        -0.89,
        2.27,
        0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal-1-1",
      "from": [
        -0.89,
        0.5,
        0.95
      ],
      "to": [
        -0.28,
        2.27,
        0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal-1-2",
      "from": [
        -0.28,
        0.5,
        0.95
      ],
      "to": [
        0.32999999999999996,
        2.27,
        0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal-1-3",
      "from": [
        0.33000000000000007,
        0.5,
        0.95
      ],
      "to": [
        0.9400000000000001,
        2.27,
        0.95
      ],
      "r": 0.023,
      "c": 6059910
    },
    {
      "t": "rod",
      "n": "skybridge-diagonal-1-4",
      "from": [
        0.94,
        0.5,
        0.95
      ],
      "to": [
        1.5499999999999998,
        2.27,
        0.95
      ],
      "r": 0.023,
      "c": 6059910
    }
  ]
}); }
