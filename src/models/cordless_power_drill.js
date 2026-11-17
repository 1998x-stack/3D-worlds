import { buildRecipe } from './recipe_engine.js';

/** Cordless Power Drill: source-editable 3D Worlds asset, Y-up, meters. */
export function createCordlessPowerDrill() {
  return buildRecipe({
  "title": "Cordless Power Drill",
  "dimensions": [
    0.26,
    0.37,
    0.43
  ],
  "parts": [
    {
      "t": "box",
      "n": "motor-body",
      "p": [
        0,
        0.235,
        0.01
      ],
      "s": [
        0.23,
        0.18,
        0.31
      ],
      "c": 14263356
    },
    {
      "t": "box",
      "n": "handle",
      "p": [
        0,
        0.09,
        -0.065
      ],
      "s": [
        0.12,
        0.19,
        0.1
      ],
      "c": 3423557
    },
    {
      "t": "box",
      "n": "battery",
      "p": [
        0,
        0.035,
        -0.065
      ],
      "s": [
        0.22,
        0.075,
        0.16
      ],
      "c": 5461595
    },
    {
      "t": "cylinder",
      "n": "chuck",
      "p": [
        0,
        0.245,
        0.193
      ],
      "s": [
        0.12,
        0.1,
        0.12
      ],
      "c": 8623002,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "drill-bit",
      "from": [
        0,
        0.245,
        0.25
      ],
      "to": [
        0,
        0.245,
        0.43
      ],
      "r": 0.018,
      "c": 10725287
    },
    {
      "t": "box",
      "n": "trigger",
      "p": [
        0,
        0.175,
        0.085
      ],
      "s": [
        0.08,
        0.045,
        0.045
      ],
      "c": 3423557
    },
    {
      "t": "box",
      "n": "top-vent",
      "p": [
        0,
        0.345,
        0.035
      ],
      "s": [
        0.14,
        0.015,
        0.15
      ],
      "c": 3423557
    },
    {
      "t": "box",
      "n": "grip-ridge-0",
      "p": [
        -0.035,
        0.092,
        -0.001
      ],
      "s": [
        0.019,
        0.11,
        0.016
      ],
      "c": 6778736
    },
    {
      "t": "box",
      "n": "grip-ridge-1",
      "p": [
        0.035,
        0.092,
        -0.001
      ],
      "s": [
        0.019,
        0.11,
        0.016
      ],
      "c": 6778736
    }
  ]
});
}
