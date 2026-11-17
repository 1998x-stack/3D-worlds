import { buildRecipe } from './recipe_engine.js';

/** Red Fire Hydrant, original editable Three.js primitive composition. */
export function createRedFireHydrant() {
  return buildRecipe({
  "title": "Red Fire Hydrant",
  "dimensions": [
    0.66,
    0.93,
    0.63
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "main-body",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        0.33,
        0.7,
        0.33
      ],
      "c": 11942710
    },
    {
      "t": "cylinder",
      "n": "top-cap",
      "p": [
        0,
        0.78,
        0
      ],
      "s": [
        0.44,
        0.16,
        0.44
      ],
      "c": 13192514
    },
    {
      "t": "cylinder",
      "n": "pedestal",
      "p": [
        0,
        0.065,
        0
      ],
      "s": [
        0.53,
        0.13,
        0.53
      ],
      "c": 9190454
    },
    {
      "t": "cylinder",
      "n": "left-valve",
      "p": [
        -0.25,
        0.45,
        0
      ],
      "s": [
        0.31,
        0.12,
        0.31
      ],
      "c": 13126462,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "right-valve",
      "p": [
        0.25,
        0.45,
        0
      ],
      "s": [
        0.31,
        0.12,
        0.31
      ],
      "c": 13126462,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "sphere",
      "n": "top-nut",
      "p": [
        0,
        0.9,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.16
      ],
      "c": 11188666
    }
  ]
});
}
