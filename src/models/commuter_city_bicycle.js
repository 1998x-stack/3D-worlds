import { buildRecipe } from './recipe_engine.js';

/** Commuter City Bicycle: original stylized asset; canonical dimensions in meters. */
export function createCommuterCityBicycle() {
  return buildRecipe({
  "title": "Commuter City Bicycle",
  "dimensions": [
    0.72,
    1.28,
    1.78
  ],
  "parts": [
    {
      "t": "torus",
      "n": "tire-0",
      "p": [
        0,
        0.39,
        -0.6
      ],
      "s": [
        1,
        1,
        1
      ],
      "c": 3160899,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-0",
      "p": [
        0,
        0.39,
        -0.6
      ],
      "s": [
        0.1,
        0.1,
        0.1
      ],
      "c": 9411998,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "tire-1",
      "p": [
        0,
        0.39,
        0.6
      ],
      "s": [
        1,
        1,
        1
      ],
      "c": 3160899,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1",
      "p": [
        0,
        0.39,
        0.6
      ],
      "s": [
        0.1,
        0.1,
        0.1
      ],
      "c": 9411998,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "frame-top",
      "from": [
        0,
        0.93,
        -0.36
      ],
      "to": [
        0,
        0.95,
        0.12
      ],
      "r": 0.04,
      "c": 5868934
    },
    {
      "t": "rod",
      "n": "frame-diagonal",
      "from": [
        0,
        0.95,
        0.12
      ],
      "to": [
        0,
        0.4,
        -0.12
      ],
      "r": 0.039,
      "c": 5868934
    },
    {
      "t": "rod",
      "n": "frame-rear",
      "from": [
        0,
        0.4,
        -0.12
      ],
      "to": [
        0,
        0.39,
        -0.6
      ],
      "r": 0.04,
      "c": 5868934
    },
    {
      "t": "rod",
      "n": "frame-front",
      "from": [
        0,
        0.95,
        0.12
      ],
      "to": [
        0,
        0.4,
        0.6
      ],
      "r": 0.045,
      "c": 5868934
    },
    {
      "t": "rod",
      "n": "frame-seat",
      "from": [
        0,
        0.96,
        -0.34
      ],
      "to": [
        0,
        0.4,
        -0.12
      ],
      "r": 0.04,
      "c": 5868934
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        1.06,
        -0.32
      ],
      "s": [
        0.27,
        0.045,
        0.35
      ],
      "c": 3160899
    },
    {
      "t": "rod",
      "n": "seat-post",
      "from": [
        0,
        0.91,
        -0.34
      ],
      "to": [
        0,
        1.06,
        -0.34
      ],
      "r": 0.027,
      "c": 9411998
    },
    {
      "t": "rod",
      "n": "handlebar-stem",
      "from": [
        0,
        0.92,
        0.47
      ],
      "to": [
        0,
        1.17,
        0.53
      ],
      "r": 0.032,
      "c": 9411998
    },
    {
      "t": "rod",
      "n": "handlebar",
      "from": [
        -0.32,
        1.17,
        0.53
      ],
      "to": [
        0.32,
        1.17,
        0.53
      ],
      "r": 0.035,
      "c": 3160899
    },
    {
      "t": "cylinder",
      "n": "crank",
      "p": [
        0,
        0.4,
        -0.12
      ],
      "s": [
        0.2,
        0.08,
        0.2
      ],
      "c": 9411998,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "rear-basket",
      "p": [
        0,
        1.03,
        -0.58
      ],
      "s": [
        0.46,
        0.2,
        0.39
      ],
      "c": 9727564
    }
  ]
});
}
