import { buildRecipe } from './recipe_engine.js';
/** Digital Multimeter Kit — source-backed original low-poly prop. */
export const assetMeta = {
  "id": "tools.digital-multimeter-kit.001",
  "slug": "digital-multimeter-kit",
  "title": "Digital Multimeter Kit",
  "title_zh": "数字万用表检测套装",
  "summary": "Handheld electrical multimeter with LCD, rotary range switch and pair of probe leads",
  "category": "tools",
  "tags": [
    "multimeter",
    "measurement",
    "electronics"
  ],
  "dimensions_m": [
    0.24,
    0.51,
    0.23
  ],
  "generator": "createDigitalMultimeterKit",
  "source_path": "src/models/digital_multimeter_kit.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/digital-multimeter-kit.webp"
};
export function createDigitalMultimeterKit() { return buildRecipe({
  "title": "Digital Multimeter Kit",
  "dimensions": [
    0.24,
    0.51,
    0.23
  ],
  "parts": [
    {
      "t": "box",
      "n": "meter-body",
      "p": [
        0,
        0.21,
        0
      ],
      "s": [
        0.23,
        0.42,
        0.13
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "rubber-bumper",
      "p": [
        0,
        0.21,
        -0.03
      ],
      "s": [
        0.24,
        0.45,
        0.1
      ],
      "c": 7959149
    },
    {
      "t": "box",
      "n": "lcd-screen",
      "p": [
        0,
        0.32,
        0.073
      ],
      "s": [
        0.17,
        0.08,
        0.012
      ],
      "c": 9094074
    },
    {
      "t": "box",
      "n": "digit-segment-0",
      "p": [
        -0.065,
        0.32,
        0.084
      ],
      "s": [
        0.021,
        0.035,
        0.006
      ],
      "c": 3366242
    },
    {
      "t": "box",
      "n": "digit-segment-1",
      "p": [
        -0.033,
        0.32,
        0.084
      ],
      "s": [
        0.021,
        0.035,
        0.006
      ],
      "c": 3366242
    },
    {
      "t": "box",
      "n": "digit-segment-2",
      "p": [
        -0.0010000000000000009,
        0.32,
        0.084
      ],
      "s": [
        0.021,
        0.035,
        0.006
      ],
      "c": 3366242
    },
    {
      "t": "box",
      "n": "digit-segment-3",
      "p": [
        0.031,
        0.32,
        0.084
      ],
      "s": [
        0.021,
        0.035,
        0.006
      ],
      "c": 3366242
    },
    {
      "t": "box",
      "n": "digit-segment-4",
      "p": [
        0.063,
        0.32,
        0.084
      ],
      "s": [
        0.021,
        0.035,
        0.006
      ],
      "c": 3366242
    },
    {
      "t": "cylinder",
      "n": "range-dial",
      "p": [
        0,
        0.19,
        0.078
      ],
      "s": [
        0.13,
        0.027,
        0.13
      ],
      "c": 9413027,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dial-indicator",
      "from": [
        0,
        0.19,
        0.095
      ],
      "to": [
        0.05,
        0.22,
        0.095
      ],
      "r": 0.008,
      "c": 3753034
    },
    {
      "t": "cylinder",
      "n": "terminal-port-0",
      "p": [
        -0.078,
        0.065,
        0.079
      ],
      "s": [
        0.034,
        0.025,
        0.034
      ],
      "c": 3753034,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "terminal-port-1",
      "p": [
        -0.026000000000000002,
        0.065,
        0.079
      ],
      "s": [
        0.034,
        0.025,
        0.034
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
      "n": "terminal-port-2",
      "p": [
        0.025999999999999995,
        0.065,
        0.079
      ],
      "s": [
        0.034,
        0.025,
        0.034
      ],
      "c": 3753034,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "terminal-port-3",
      "p": [
        0.078,
        0.065,
        0.079
      ],
      "s": [
        0.034,
        0.025,
        0.034
      ],
      "c": 12548461,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "red-probe-cable",
      "from": [
        -0.06,
        0.075,
        0.095
      ],
      "to": [
        -0.16,
        0.19,
        0.22
      ],
      "r": 0.011,
      "c": 12548461
    },
    {
      "t": "rod",
      "n": "black-probe-cable",
      "from": [
        0.07,
        0.075,
        0.095
      ],
      "to": [
        0.16,
        0.19,
        0.22
      ],
      "r": 0.011,
      "c": 3753034
    },
    {
      "t": "box",
      "n": "red-probe",
      "p": [
        -0.16,
        0.26,
        0.22
      ],
      "s": [
        0.045,
        0.15,
        0.045
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "black-probe",
      "p": [
        0.16,
        0.26,
        0.22
      ],
      "s": [
        0.045,
        0.15,
        0.045
      ],
      "c": 3753034
    },
    {
      "t": "rod",
      "n": "red-metal-tip",
      "from": [
        -0.16,
        0.33,
        0.22
      ],
      "to": [
        -0.16,
        0.49,
        0.22
      ],
      "r": 0.008,
      "c": 9413027
    },
    {
      "t": "rod",
      "n": "black-metal-tip",
      "from": [
        0.16,
        0.33,
        0.22
      ],
      "to": [
        0.16,
        0.49,
        0.22
      ],
      "r": 0.008,
      "c": 9413027
    },
    {
      "t": "box",
      "n": "kickstand",
      "p": [
        0,
        0.065,
        -0.1
      ],
      "s": [
        0.08,
        0.17,
        0.035
      ],
      "c": 9413027
    }
  ]
}); }
