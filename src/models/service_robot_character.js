import { buildRecipe } from './recipe_engine.js';

/** Service Robot Character: original stylized scene prop, Y-up, grounded in meters. */
export function createServiceRobotCharacter() {
  return buildRecipe({
  "title": "Service Robot Character",
  "dimensions": [
    0.82,
    1.49,
    0.78
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "drive-base",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.68,
        0.24,
        0.7
      ],
      "c": 3488579
    },
    {
      "t": "cylinder",
      "n": "waist-post",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        0.22,
        0.47,
        0.22
      ],
      "c": 7899020
    },
    {
      "t": "box",
      "n": "torso-shell",
      "p": [
        0,
        0.81,
        0
      ],
      "s": [
        0.62,
        0.65,
        0.44
      ],
      "c": 13033440
    },
    {
      "t": "box",
      "n": "front-screen",
      "p": [
        0,
        0.89,
        0.236
      ],
      "s": [
        0.46,
        0.37,
        0.025
      ],
      "c": 2707298
    },
    {
      "t": "sphere",
      "n": "status-light",
      "p": [
        0,
        0.89,
        0.255
      ],
      "s": [
        0.12,
        0.12,
        0.018
      ],
      "c": 8111782
    },
    {
      "t": "cylinder",
      "n": "neck",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.16,
        0.15,
        0.16
      ],
      "c": 7899020
    },
    {
      "t": "sphere",
      "n": "head-casing",
      "p": [
        0,
        1.38,
        0
      ],
      "s": [
        0.45,
        0.3,
        0.4
      ],
      "c": 13818839
    },
    {
      "t": "sphere",
      "n": "eye-0",
      "p": [
        -0.13,
        1.41,
        0.32
      ],
      "s": [
        0.058,
        0.055,
        0.018
      ],
      "c": 4619661
    },
    {
      "t": "rod",
      "n": "arm-0",
      "from": [
        -0.34,
        1.02,
        0
      ],
      "to": [
        -0.41,
        0.64,
        0
      ],
      "r": 0.07,
      "c": 7899020
    },
    {
      "t": "sphere",
      "n": "gripper-0",
      "p": [
        -0.43,
        0.59,
        0.02
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 3488579
    },
    {
      "t": "cylinder",
      "n": "drive-wheel-0",
      "p": [
        -0.34,
        0.13,
        0
      ],
      "s": [
        0.23,
        0.11,
        0.23
      ],
      "c": 3028539,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "sphere",
      "n": "eye-1",
      "p": [
        0.13,
        1.41,
        0.32
      ],
      "s": [
        0.058,
        0.055,
        0.018
      ],
      "c": 4619661
    },
    {
      "t": "rod",
      "n": "arm-1",
      "from": [
        0.34,
        1.02,
        0
      ],
      "to": [
        0.41,
        0.64,
        0
      ],
      "r": 0.07,
      "c": 7899020
    },
    {
      "t": "sphere",
      "n": "gripper-1",
      "p": [
        0.43,
        0.59,
        0.02
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 3488579
    },
    {
      "t": "cylinder",
      "n": "drive-wheel-1",
      "p": [
        0.34,
        0.13,
        0
      ],
      "s": [
        0.23,
        0.11,
        0.23
      ],
      "c": 3028539,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "antenna",
      "p": [
        0,
        1.59,
        0
      ],
      "s": [
        0.024,
        0.14,
        0.024
      ],
      "c": 7899020
    }
  ]
});
}
