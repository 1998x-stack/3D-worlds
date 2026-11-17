import { buildRecipe } from './recipe_engine.js';

/** Digital Camera, original editable Three.js primitive composition. */
export function createDigitalCamera() {
  return buildRecipe({
  "title": "Digital Camera",
  "dimensions": [
    0.32,
    0.22,
    0.24
  ],
  "parts": [
    {
      "t": "box",
      "n": "body",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        0.32,
        0.2,
        0.13
      ],
      "c": 3160899
    },
    {
      "t": "cylinder",
      "n": "lens",
      "p": [
        0,
        0.11,
        0.11
      ],
      "s": [
        0.145,
        0.11,
        0.145
      ],
      "c": 6122611,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "lens-ring",
      "p": [
        0,
        0.11,
        0.18
      ],
      "s": [
        0.1,
        0.02,
        0.1
      ],
      "c": 11188666,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "shutter",
      "p": [
        0.11,
        0.215,
        -0.025
      ],
      "s": [
        0.055,
        0.01,
        0.055
      ],
      "c": 11188666
    },
    {
      "t": "box",
      "n": "top-hump",
      "p": [
        -0.065,
        0.2,
        -0.025
      ],
      "s": [
        0.11,
        0.04,
        0.08
      ],
      "c": 3160899
    }
  ]
});
}
