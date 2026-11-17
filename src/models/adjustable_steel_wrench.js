import { buildRecipe } from './recipe_engine.js';

/** Adjustable Steel Wrench: source-editable 3D Worlds asset, Y-up, meters. */
export function createAdjustableSteelWrench() {
  return buildRecipe({
  "title": "Adjustable Steel Wrench",
  "dimensions": [
    0.25,
    0.58,
    0.08
  ],
  "parts": [
    {
      "t": "box",
      "n": "handle",
      "p": [
        0,
        0.24,
        0
      ],
      "s": [
        0.07,
        0.46,
        0.055
      ],
      "c": 8623002
    },
    {
      "t": "sphere",
      "n": "grip-base",
      "p": [
        0,
        0.058,
        0
      ],
      "s": [
        0.11,
        0.11,
        0.07
      ],
      "c": 7965329
    },
    {
      "t": "box",
      "n": "wrench-neck",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.06
      ],
      "c": 8623002
    },
    {
      "t": "box",
      "n": "fixed-jaw",
      "p": [
        -0.075,
        0.56,
        0
      ],
      "s": [
        0.07,
        0.13,
        0.06
      ],
      "c": 8030608
    },
    {
      "t": "box",
      "n": "movable-jaw",
      "p": [
        0.083,
        0.53,
        0
      ],
      "s": [
        0.07,
        0.18,
        0.06
      ],
      "c": 8030608
    },
    {
      "t": "box",
      "n": "jaw-carriage",
      "p": [
        0.057,
        0.47,
        0
      ],
      "s": [
        0.11,
        0.045,
        0.06
      ],
      "c": 3423557
    },
    {
      "t": "cylinder",
      "n": "adjuster-wheel",
      "p": [
        0.04,
        0.43,
        0.038
      ],
      "s": [
        0.075,
        0.035,
        0.075
      ],
      "c": 8623002,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "lanyard-hole",
      "p": [
        0,
        0.05,
        0.06
      ],
      "s": [
        0.025,
        0.025,
        0.014
      ],
      "c": 3423557
    }
  ]
});
}
