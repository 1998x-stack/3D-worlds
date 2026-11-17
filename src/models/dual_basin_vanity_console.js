import { buildRecipe } from './recipe_engine.js';
/** Dual Basin Vanity Console: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "bathroom.dual-basin-vanity-console.001",
  "slug": "dual-basin-vanity-console",
  "title": "Dual Basin Vanity Console",
  "title_zh": "双盆浴室洗漱台",
  "summary": "Double vanity unit with symmetric ceramic basins, faucets, mirrored splashback and cabinet",
  "category": "bathroom",
  "tags": [
    "vanity",
    "sink",
    "storage"
  ],
  "dimensions_m": [
    1.73,
    1.22,
    0.61
  ],
  "generator": "createDualBasinVanityConsole",
  "source_path": "src/models/dual_basin_vanity_console.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/dual-basin-vanity-console.webp"
};
export function createDualBasinVanityConsole() { return buildRecipe({
  "title": "Dual Basin Vanity Console",
  "dimensions": [
    1.73,
    1.22,
    0.61
  ],
  "parts": [
    {
      "t": "box",
      "n": "vanity-cabinet",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        1.7,
        0.81,
        0.58
      ],
      "c": 9990996
    },
    {
      "t": "box",
      "n": "stone-countertop",
      "p": [
        0,
        0.99,
        0
      ],
      "s": [
        1.73,
        0.07,
        0.6
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "floor-plinth",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.72,
        0.18,
        0.58
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "recessed-sink-0",
      "p": [
        -0.47,
        1.02,
        0.08
      ],
      "s": [
        0.54,
        0.072,
        0.37
      ],
      "c": 10338244
    },
    {
      "t": "cylinder",
      "n": "sink-drain-0",
      "p": [
        -0.47,
        1.048,
        0.08
      ],
      "s": [
        0.075,
        0.015,
        0.075
      ],
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "faucet-upright-0",
      "from": [
        -0.47,
        1.04,
        -0.18
      ],
      "to": [
        -0.47,
        1.22,
        -0.18
      ],
      "r": 0.026,
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "faucet-spout-0",
      "from": [
        -0.47,
        1.22,
        -0.18
      ],
      "to": [
        -0.47,
        1.16,
        0.06
      ],
      "r": 0.024,
      "c": 9609892
    },
    {
      "t": "box",
      "n": "mirror-panel-0",
      "p": [
        -0.47,
        0.84,
        -0.31
      ],
      "s": [
        0.66,
        0.63,
        0.025
      ],
      "c": 6195618
    },
    {
      "t": "box",
      "n": "cabinet-front-0",
      "p": [
        -0.47,
        0.57,
        0.31
      ],
      "s": [
        0.77,
        0.65,
        0.025
      ],
      "c": 11841957
    },
    {
      "t": "box",
      "n": "pull-handle-0",
      "p": [
        -0.47,
        0.69,
        0.335
      ],
      "s": [
        0.31,
        0.025,
        0.028
      ],
      "c": 13149293
    },
    {
      "t": "cylinder",
      "n": "tap-knob-0",
      "p": [
        -0.26999999999999996,
        1.04,
        -0.17
      ],
      "s": [
        0.07,
        0.03,
        0.07
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "recessed-sink-1",
      "p": [
        0.47,
        1.02,
        0.08
      ],
      "s": [
        0.54,
        0.072,
        0.37
      ],
      "c": 10338244
    },
    {
      "t": "cylinder",
      "n": "sink-drain-1",
      "p": [
        0.47,
        1.048,
        0.08
      ],
      "s": [
        0.075,
        0.015,
        0.075
      ],
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "faucet-upright-1",
      "from": [
        0.47,
        1.04,
        -0.18
      ],
      "to": [
        0.47,
        1.22,
        -0.18
      ],
      "r": 0.026,
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "faucet-spout-1",
      "from": [
        0.47,
        1.22,
        -0.18
      ],
      "to": [
        0.47,
        1.16,
        0.06
      ],
      "r": 0.024,
      "c": 9609892
    },
    {
      "t": "box",
      "n": "mirror-panel-1",
      "p": [
        0.47,
        0.84,
        -0.31
      ],
      "s": [
        0.66,
        0.63,
        0.025
      ],
      "c": 6195618
    },
    {
      "t": "box",
      "n": "cabinet-front-1",
      "p": [
        0.47,
        0.57,
        0.31
      ],
      "s": [
        0.77,
        0.65,
        0.025
      ],
      "c": 11841957
    },
    {
      "t": "box",
      "n": "pull-handle-1",
      "p": [
        0.47,
        0.69,
        0.335
      ],
      "s": [
        0.31,
        0.025,
        0.028
      ],
      "c": 13149293
    },
    {
      "t": "cylinder",
      "n": "tap-knob-1",
      "p": [
        0.6699999999999999,
        1.04,
        -0.17
      ],
      "s": [
        0.07,
        0.03,
        0.07
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "vanity-foot-0",
      "p": [
        -0.75,
        0.075,
        0.2
      ],
      "s": [
        0.1,
        0.15,
        0.1
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "vanity-foot-1",
      "p": [
        0.75,
        0.075,
        0.2
      ],
      "s": [
        0.1,
        0.15,
        0.1
      ],
      "c": 9609892
    }
  ]
}); }
