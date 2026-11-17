import { buildRecipe } from './recipe_engine.js';
/** Bench Belt Sander — source-backed original low-poly prop. */
export const assetMeta = {
  "id": "tools.bench-belt-sander.001",
  "slug": "bench-belt-sander",
  "title": "Bench Belt Sander",
  "title_zh": "台式砂带打磨机",
  "summary": "Stationary belt sander with abrasive loop, motor, work rest and dust exhaust port",
  "category": "tools",
  "tags": [
    "sander",
    "abrasive",
    "workshop"
  ],
  "dimensions_m": [
    0.58,
    0.63,
    0.81
  ],
  "generator": "createBenchBeltSander",
  "source_path": "src/models/bench_belt_sander.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/bench-belt-sander.webp"
};
export function createBenchBeltSander() { return buildRecipe({
  "title": "Bench Belt Sander",
  "dimensions": [
    0.58,
    0.63,
    0.81
  ],
  "parts": [
    {
      "t": "box",
      "n": "base-housing",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        0.57,
        0.31,
        0.77
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "vertical-motor",
      "p": [
        0,
        0.41,
        -0.25
      ],
      "s": [
        0.29,
        0.33,
        0.22
      ],
      "c": 5539489
    },
    {
      "t": "cylinder",
      "n": "abrasive-wheel-0",
      "p": [
        0,
        0.46,
        -0.26
      ],
      "s": [
        0.3,
        0.12,
        0.3
      ],
      "c": 9413027,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "abrasive-wheel-1",
      "p": [
        0,
        0.46,
        0.26
      ],
      "s": [
        0.3,
        0.12,
        0.3
      ],
      "c": 9413027,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "sanding-belt-surface",
      "p": [
        0,
        0.62,
        0
      ],
      "s": [
        0.31,
        0.065,
        0.63
      ],
      "c": 9664344
    },
    {
      "t": "box",
      "n": "sanding-belt-side-left",
      "p": [
        -0.16,
        0.47,
        0
      ],
      "s": [
        0.024,
        0.28,
        0.63
      ],
      "c": 9270620
    },
    {
      "t": "box",
      "n": "sanding-belt-side-right",
      "p": [
        0.16,
        0.47,
        0
      ],
      "s": [
        0.024,
        0.28,
        0.63
      ],
      "c": 9270620
    },
    {
      "t": "box",
      "n": "front-workrest",
      "p": [
        0,
        0.37,
        0.38
      ],
      "s": [
        0.5,
        0.055,
        0.26
      ],
      "c": 9413027
    },
    {
      "t": "box",
      "n": "front-workrest-edge",
      "p": [
        0,
        0.39,
        0.53
      ],
      "s": [
        0.46,
        0.035,
        0.06
      ],
      "c": 3753034
    },
    {
      "t": "cylinder",
      "n": "power-switch",
      "p": [
        -0.23,
        0.16,
        0.26
      ],
      "s": [
        0.06,
        0.023,
        0.06
      ],
      "c": 12548461,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "dust-port",
      "p": [
        0.22,
        0.21,
        -0.32
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "motor-vent-0",
      "p": [
        -0.13,
        0.53,
        -0.25
      ],
      "s": [
        0.026,
        0.008,
        0.14
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "motor-vent-1",
      "p": [
        -0.065,
        0.53,
        -0.25
      ],
      "s": [
        0.026,
        0.008,
        0.14
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "motor-vent-2",
      "p": [
        0,
        0.53,
        -0.25
      ],
      "s": [
        0.026,
        0.008,
        0.14
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "motor-vent-3",
      "p": [
        0.065,
        0.53,
        -0.25
      ],
      "s": [
        0.026,
        0.008,
        0.14
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "motor-vent-4",
      "p": [
        0.13,
        0.53,
        -0.25
      ],
      "s": [
        0.026,
        0.008,
        0.14
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "rubber-foot-0",
      "p": [
        -0.21,
        0.033,
        -0.29
      ],
      "s": [
        0.08,
        0.065,
        0.14
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "rubber-foot-1",
      "p": [
        0.21,
        0.033,
        -0.29
      ],
      "s": [
        0.08,
        0.065,
        0.14
      ],
      "c": 3753034
    }
  ]
}); }
