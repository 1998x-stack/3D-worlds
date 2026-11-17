import { buildRecipe } from './recipe_engine.js';

/** Compact Microwave, original editable Three.js primitive composition. */
export function createCompactMicrowave() {
  return buildRecipe({
  "title": "Compact Microwave",
  "dimensions": [
    0.5,
    0.31,
    0.36
  ],
  "parts": [
    {
      "t": "box",
      "n": "housing",
      "p": [
        0,
        0.155,
        0
      ],
      "s": [
        0.5,
        0.31,
        0.36
      ],
      "c": 11976126
    },
    {
      "t": "box",
      "n": "glass-door",
      "p": [
        -0.055,
        0.162,
        0.191
      ],
      "s": [
        0.35,
        0.235,
        0.02
      ],
      "c": 3296601
    },
    {
      "t": "box",
      "n": "control-panel",
      "p": [
        0.2,
        0.16,
        0.193
      ],
      "s": [
        0.07,
        0.24,
        0.019
      ],
      "c": 6912382
    },
    {
      "t": "cylinder",
      "n": "dial-0",
      "p": [
        0.2,
        0.24,
        0.21
      ],
      "s": [
        0.025,
        0.014,
        0.025
      ],
      "c": 11188666,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "dial-1",
      "p": [
        0.2,
        0.16999999999999998,
        0.21
      ],
      "s": [
        0.025,
        0.014,
        0.025
      ],
      "c": 11188666,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "dial-2",
      "p": [
        0.2,
        0.09999999999999998,
        0.21
      ],
      "s": [
        0.025,
        0.014,
        0.025
      ],
      "c": 11188666,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ]
});
}
