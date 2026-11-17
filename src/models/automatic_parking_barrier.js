import { buildRecipe } from './recipe_engine.js';
/** Automatic Parking Barrier — source-backed original low-poly prop. */
export const assetMeta = {
  "id": "urban.automatic-parking-barrier.001",
  "slug": "automatic-parking-barrier",
  "title": "Automatic Parking Barrier",
  "title_zh": "停车场自动道闸",
  "summary": "Parking lot gate with hinged striped beam, control cabinet, infrared sensor and road anchors",
  "category": "urban",
  "tags": [
    "parking",
    "barrier",
    "gate"
  ],
  "dimensions_m": [
    3.38,
    1.14,
    0.51
  ],
  "generator": "createAutomaticParkingBarrier",
  "source_path": "src/models/automatic_parking_barrier.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/automatic-parking-barrier.webp"
};
export function createAutomaticParkingBarrier() { return buildRecipe({
  "title": "Automatic Parking Barrier",
  "dimensions": [
    3.38,
    1.14,
    0.51
  ],
  "parts": [
    {
      "t": "box",
      "n": "gate-control-cabinet",
      "p": [
        -1.42,
        0.5,
        0
      ],
      "s": [
        0.39,
        0.98,
        0.44
      ],
      "c": 15186041
    },
    {
      "t": "box",
      "n": "dark-lid",
      "p": [
        -1.42,
        1.02,
        0
      ],
      "s": [
        0.43,
        0.07,
        0.47
      ],
      "c": 3753034
    },
    {
      "t": "cylinder",
      "n": "pivot-hinge",
      "p": [
        -1.42,
        0.9,
        0.11
      ],
      "s": [
        0.22,
        0.06,
        0.22
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
      "n": "long-barrier-arm",
      "from": [
        -1.34,
        0.89,
        0.11
      ],
      "to": [
        1.72,
        0.89,
        0.11
      ],
      "r": 0.048,
      "c": 15328731
    },
    {
      "t": "box",
      "n": "red-reflector-0",
      "p": [
        -1.07,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "red-reflector-1",
      "p": [
        -0.74,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "red-reflector-2",
      "p": [
        -0.41000000000000003,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "red-reflector-3",
      "p": [
        -0.08000000000000007,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "red-reflector-4",
      "p": [
        0.25,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "red-reflector-5",
      "p": [
        0.5800000000000001,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "red-reflector-6",
      "p": [
        0.9099999999999999,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "red-reflector-7",
      "p": [
        1.24,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "red-reflector-8",
      "p": [
        1.57,
        0.89,
        0.161
      ],
      "s": [
        0.19,
        0.065,
        0.014
      ],
      "c": 15328731
    },
    {
      "t": "box",
      "n": "screen",
      "p": [
        -1.42,
        0.74,
        0.23
      ],
      "s": [
        0.27,
        0.17,
        0.015
      ],
      "c": 5539489
    },
    {
      "t": "sphere",
      "n": "status-key-0",
      "p": [
        -1.51,
        0.56,
        0.233
      ],
      "s": [
        0.019,
        0.019,
        0.013
      ],
      "c": 12548461
    },
    {
      "t": "sphere",
      "n": "status-key-1",
      "p": [
        -1.42,
        0.56,
        0.233
      ],
      "s": [
        0.019,
        0.019,
        0.013
      ],
      "c": 10274214
    },
    {
      "t": "sphere",
      "n": "status-key-2",
      "p": [
        -1.33,
        0.56,
        0.233
      ],
      "s": [
        0.019,
        0.019,
        0.013
      ],
      "c": 12548461
    },
    {
      "t": "box",
      "n": "cabinet-lock",
      "p": [
        -1.42,
        0.39,
        0.23
      ],
      "s": [
        0.09,
        0.1,
        0.018
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "beam-end-cap",
      "p": [
        1.73,
        0.89,
        0.11
      ],
      "s": [
        0.16,
        0.12,
        0.13
      ],
      "c": 3753034
    },
    {
      "t": "rod",
      "n": "beam-support",
      "from": [
        1.65,
        0.06,
        0.11
      ],
      "to": [
        1.65,
        0.9,
        0.11
      ],
      "r": 0.024,
      "c": 9413027
    },
    {
      "t": "box",
      "n": "support-foot",
      "p": [
        1.65,
        0.035,
        0.11
      ],
      "s": [
        0.18,
        0.07,
        0.27
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "base-anchor-0",
      "p": [
        -1.42,
        0.035,
        -0.16
      ],
      "s": [
        0.23,
        0.07,
        0.2
      ],
      "c": 9413027
    },
    {
      "t": "box",
      "n": "base-anchor-1",
      "p": [
        1.65,
        0.035,
        -0.16
      ],
      "s": [
        0.23,
        0.07,
        0.2
      ],
      "c": 9413027
    },
    {
      "t": "box",
      "n": "sensor-photocell",
      "p": [
        -1.2,
        0.82,
        0.28
      ],
      "s": [
        0.07,
        0.14,
        0.07
      ],
      "c": 3753034
    }
  ]
}); }
