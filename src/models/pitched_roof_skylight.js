import { buildRecipe } from './recipe_engine.js';

/** Pitched Roof Skylight: original Three.js assembly, stable Y-up and meter coordinates. */
export function createPitchedRoofSkylight() {
  return buildRecipe({
  "title": "Pitched Roof Skylight",
  "dimensions": [
    1.4,
    0.47,
    1.03
  ],
  "parts": [
    {
      "t": "box",
      "n": "roof-curb",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        1.4,
        0.2,
        1.03
      ],
      "c": 6385008
    },
    {
      "t": "box",
      "n": "left-pane",
      "p": [
        -0.32,
        0.35,
        0
      ],
      "s": [
        0.69,
        0.04,
        0.97
      ],
      "c": 9878209,
      "rot": [
        0,
        0,
        -0.27
      ]
    },
    {
      "t": "box",
      "n": "right-pane",
      "p": [
        0.32,
        0.35,
        0
      ],
      "s": [
        0.69,
        0.04,
        0.97
      ],
      "c": 9878209,
      "rot": [
        0,
        0,
        0.27
      ]
    },
    {
      "t": "box",
      "n": "ridge",
      "p": [
        0,
        0.46,
        0
      ],
      "s": [
        0.06,
        0.035,
        1.02
      ],
      "c": 3159866
    },
    {
      "t": "rod",
      "n": "end-mullion-0",
      "from": [
        -0.66,
        0.18,
        -0.47
      ],
      "to": [
        0,
        0.45,
        -0.47
      ],
      "r": 0.025,
      "c": 3159866
    },
    {
      "t": "rod",
      "n": "end-mullion-1",
      "from": [
        0.66,
        0.18,
        -0.47
      ],
      "to": [
        0,
        0.45,
        -0.47
      ],
      "r": 0.025,
      "c": 3159866
    },
    {
      "t": "box",
      "n": "glass-crossbar-0",
      "p": [
        0,
        0.33,
        -0.4
      ],
      "s": [
        1.24,
        0.03,
        0.035
      ],
      "c": 9411999
    },
    {
      "t": "box",
      "n": "glass-crossbar-1",
      "p": [
        0,
        0.33,
        0.4
      ],
      "s": [
        1.24,
        0.03,
        0.035
      ],
      "c": 9411999
    },
    {
      "t": "box",
      "n": "hinge",
      "p": [
        0,
        0.08,
        -0.5
      ],
      "s": [
        0.62,
        0.08,
        0.08
      ],
      "c": 3159866
    }
  ]
});
}
