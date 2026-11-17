import { buildRecipe } from './recipe_engine.js';

/** Basketball Hoop, original editable Three.js primitive composition. */
export function createBasketballHoop() {
  return buildRecipe({
  "title": "Basketball Hoop",
  "dimensions": [
    1.18,
    3.06,
    1.27
  ],
  "parts": [
    {
      "t": "box",
      "n": "backboard",
      "p": [
        0,
        2.6,
        -0.37
      ],
      "s": [
        1.18,
        0.79,
        0.07
      ],
      "c": 15196112
    },
    {
      "t": "box",
      "n": "target-box",
      "p": [
        0,
        2.54,
        -0.323
      ],
      "s": [
        0.48,
        0.27,
        0.018
      ],
      "c": 12417621
    },
    {
      "t": "cylinder",
      "n": "pole",
      "p": [
        0,
        1.39,
        -0.6
      ],
      "s": [
        0.12,
        2.78,
        0.12
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "support",
      "p": [
        0,
        2.79,
        -0.27
      ],
      "s": [
        0.07,
        0.08,
        0.67
      ],
      "c": 6122611
    },
    {
      "t": "torus",
      "n": "rim",
      "p": [
        0,
        2.32,
        0.03
      ],
      "s": [
        0.5,
        0.5,
        0.12
      ],
      "c": 13398088,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "base",
      "p": [
        0,
        0.08,
        -0.54
      ],
      "s": [
        0.74,
        0.16,
        0.72
      ],
      "c": 3160899
    }
  ]
});
}
