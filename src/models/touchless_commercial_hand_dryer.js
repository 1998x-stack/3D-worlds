import { buildRecipe } from './recipe_engine.js';
/** Touchless Commercial Hand Dryer: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "bathroom.touchless-commercial-hand-dryer.001",
  "slug": "touchless-commercial-hand-dryer",
  "title": "Touchless Commercial Hand Dryer",
  "title_zh": "商用感应干手机",
  "summary": "Commercial hand dryer with air slots, motion sensor, status LEDs and wall mounting",
  "category": "bathroom",
  "tags": [
    "dryer",
    "touchless",
    "washroom"
  ],
  "dimensions_m": [
    0.4,
    0.56,
    0.32
  ],
  "generator": "createTouchlessCommercialHandDryer",
  "source_path": "src/models/touchless_commercial_hand_dryer.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/touchless-commercial-hand-dryer.webp"
};
export function createTouchlessCommercialHandDryer() { return buildRecipe({
  "title": "Touchless Commercial Hand Dryer",
  "dimensions": [
    0.4,
    0.56,
    0.32
  ],
  "parts": [
    {
      "t": "box",
      "n": "rear-wall-frame",
      "p": [
        0,
        0.28,
        -0.13
      ],
      "s": [
        0.37,
        0.54,
        0.07
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "shell",
      "p": [
        0,
        0.3,
        0.02
      ],
      "s": [
        0.39,
        0.49,
        0.26
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "top-cap",
      "p": [
        0,
        0.54,
        0.03
      ],
      "s": [
        0.4,
        0.06,
        0.29
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-0",
      "p": [
        -0.155,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-1",
      "p": [
        -0.12,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-2",
      "p": [
        -0.08499999999999999,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-3",
      "p": [
        -0.04999999999999999,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-4",
      "p": [
        -0.014999999999999986,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-5",
      "p": [
        0.020000000000000018,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-6",
      "p": [
        0.05500000000000002,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-7",
      "p": [
        0.09000000000000002,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-8",
      "p": [
        0.12500000000000003,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "air-vent-9",
      "p": [
        0.16000000000000006,
        0.21,
        0.158
      ],
      "s": [
        0.023,
        0.1,
        0.014
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "infrared-detector",
      "p": [
        0,
        0.39,
        0.166
      ],
      "s": [
        0.056,
        0.048,
        0.016
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "blow-outlet",
      "p": [
        0,
        0.135,
        0.166
      ],
      "s": [
        0.25,
        0.031,
        0.036
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "indicator-plate",
      "p": [
        0,
        0.47,
        0.166
      ],
      "s": [
        0.2,
        0.06,
        0.011
      ],
      "c": 6195618
    },
    {
      "t": "sphere",
      "n": "led-0",
      "p": [
        -0.07,
        0.47,
        0.178
      ],
      "s": [
        0.014,
        0.01,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "led-1",
      "p": [
        -0.024000000000000007,
        0.47,
        0.178
      ],
      "s": [
        0.014,
        0.01,
        0.009
      ],
      "c": 7445116
    },
    {
      "t": "sphere",
      "n": "led-2",
      "p": [
        0.021999999999999992,
        0.47,
        0.178
      ],
      "s": [
        0.014,
        0.01,
        0.009
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "led-3",
      "p": [
        0.068,
        0.47,
        0.178
      ],
      "s": [
        0.014,
        0.01,
        0.009
      ],
      "c": 7445116
    },
    {
      "t": "box",
      "n": "drip-tray",
      "p": [
        0,
        0.044,
        0.12
      ],
      "s": [
        0.29,
        0.07,
        0.18
      ],
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "screw-0",
      "p": [
        -0.12,
        0.42,
        -0.19
      ],
      "s": [
        0.051,
        0.025,
        0.051
      ],
      "c": 3620935,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "screw-1",
      "p": [
        0.12,
        0.42,
        -0.19
      ],
      "s": [
        0.051,
        0.025,
        0.051
      ],
      "c": 3620935,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "power-hatch",
      "p": [
        0,
        0.09,
        -0.13
      ],
      "s": [
        0.14,
        0.12,
        0.024
      ],
      "c": 3620935
    }
  ]
}); }
