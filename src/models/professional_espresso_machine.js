import { buildRecipe } from './recipe_engine.js';

/** Professional Espresso Machine: original Three.js assembly, stable Y-up and meter coordinates. */
export function createProfessionalEspressoMachine() {
  return buildRecipe({
  "title": "Professional Espresso Machine",
  "dimensions": [
    0.65,
    0.49,
    0.53
  ],
  "parts": [
    {
      "t": "box",
      "n": "chassis",
      "p": [
        0,
        0.235,
        0
      ],
      "s": [
        0.65,
        0.47,
        0.52
      ],
      "c": 9411999
    },
    {
      "t": "box",
      "n": "front-face",
      "p": [
        0,
        0.265,
        0.266
      ],
      "s": [
        0.6,
        0.36,
        0.022
      ],
      "c": 3950927
    },
    {
      "t": "box",
      "n": "drip-tray",
      "p": [
        0,
        0.059,
        0.312
      ],
      "s": [
        0.51,
        0.035,
        0.15
      ],
      "c": 3159866
    },
    {
      "t": "cylinder",
      "n": "grouphead-0",
      "p": [
        -0.17,
        0.34,
        0.289
      ],
      "s": [
        0.14,
        0.12,
        0.14
      ],
      "c": 10794427,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "portafilter-0",
      "from": [
        -0.17,
        0.29,
        0.29
      ],
      "to": [
        -0.17,
        0.23,
        0.42
      ],
      "r": 0.027,
      "c": 3159866
    },
    {
      "t": "sphere",
      "n": "shot-button-0",
      "p": [
        -0.17,
        0.43,
        0.284
      ],
      "s": [
        0.037,
        0.036,
        0.016
      ],
      "c": 7189658
    },
    {
      "t": "cylinder",
      "n": "grouphead-1",
      "p": [
        0.17,
        0.34,
        0.289
      ],
      "s": [
        0.14,
        0.12,
        0.14
      ],
      "c": 10794427,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "portafilter-1",
      "from": [
        0.17,
        0.29,
        0.29
      ],
      "to": [
        0.17,
        0.23,
        0.42
      ],
      "r": 0.027,
      "c": 3159866
    },
    {
      "t": "sphere",
      "n": "shot-button-1",
      "p": [
        0.17,
        0.43,
        0.284
      ],
      "s": [
        0.037,
        0.036,
        0.016
      ],
      "c": 7189658
    },
    {
      "t": "rod",
      "n": "steam-wand",
      "from": [
        0.26,
        0.29,
        0.26
      ],
      "to": [
        0.29,
        0.11,
        0.38
      ],
      "r": 0.021,
      "c": 9411999
    },
    {
      "t": "box",
      "n": "top-warming-tray",
      "p": [
        0,
        0.472,
        0
      ],
      "s": [
        0.62,
        0.025,
        0.5
      ],
      "c": 3159866
    },
    {
      "t": "cylinder",
      "n": "cup-left",
      "p": [
        -0.15,
        0.06,
        0.32
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 15724003
    }
  ]
});
}
