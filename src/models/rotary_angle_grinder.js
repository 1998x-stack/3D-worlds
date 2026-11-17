import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "tools.rotary-angle-grinder.001",
  "slug": "rotary-angle-grinder",
  "title": "Rotary Angle Grinder",
  "title_zh": "手持角磨机",
  "summary": "Workshop angle grinder with metal cutoff wheel, protective cover and side grip",
  "category": "tools",
  "tags": [
    "grinder",
    "workshop",
    "rotary"
  ],
  "dimensions_m": [
    0.4,
    0.21,
    0.55
  ],
  "generator": "createRotaryAngleGrinder",
  "source_path": "src/models/rotary_angle_grinder.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/rotary-angle-grinder.webp"
};
export function createRotaryAngleGrinder() { return buildRecipe({
  "title": "Rotary Angle Grinder",
  "dimensions": [
    0.4,
    0.21,
    0.55
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "motor-shell",
      "p": [
        0,
        0.12,
        -0.17
      ],
      "s": [
        0.18,
        0.37,
        0.18
      ],
      "c": 6324634,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "main-handle",
      "p": [
        0,
        0.13,
        -0.38
      ],
      "s": [
        0.14,
        0.17,
        0.25
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "on-switch",
      "p": [
        0,
        0.22,
        -0.29
      ],
      "s": [
        0.1,
        0.023,
        0.14
      ],
      "c": 5540513
    },
    {
      "t": "cylinder",
      "n": "cutting-disc",
      "p": [
        0,
        0.13,
        0.19
      ],
      "s": [
        0.38,
        0.018,
        0.38
      ],
      "c": 3490634,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "disc-hub",
      "p": [
        0,
        0.13,
        0.195
      ],
      "s": [
        0.14,
        0.025,
        0.14
      ],
      "c": 9741221,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "wheel-guard",
      "p": [
        0,
        0.13,
        0.15
      ],
      "s": [
        0.53,
        0.53,
        0.53
      ],
      "c": 9741221,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "aux-grip-shaft",
      "from": [
        0.13,
        0.15,
        -0.07
      ],
      "to": [
        0.36,
        0.18,
        -0.06
      ],
      "r": 0.036,
      "c": 9741221
    },
    {
      "t": "cylinder",
      "n": "side-handle",
      "p": [
        0.32,
        0.18,
        -0.06
      ],
      "s": [
        0.09,
        0.2,
        0.09
      ],
      "c": 3490634,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "cooling-slot-0",
      "p": [
        -0.067,
        0.2,
        -0.13
      ],
      "s": [
        0.022,
        0.016,
        0.1
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "cooling-slot-1",
      "p": [
        -0.023000000000000007,
        0.2,
        -0.13
      ],
      "s": [
        0.022,
        0.016,
        0.1
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "cooling-slot-2",
      "p": [
        0.02099999999999999,
        0.2,
        -0.13
      ],
      "s": [
        0.022,
        0.016,
        0.1
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "cooling-slot-3",
      "p": [
        0.065,
        0.2,
        -0.13
      ],
      "s": [
        0.022,
        0.016,
        0.1
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "trigger-guard",
      "p": [
        0,
        0.04,
        -0.38
      ],
      "s": [
        0.18,
        0.045,
        0.16
      ],
      "c": 9741221
    }
  ]
}); }
