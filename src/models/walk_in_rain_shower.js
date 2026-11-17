import { buildRecipe } from './recipe_engine.js';

/** Walk-in Rain Shower: original stylized scene prop, Y-up, grounded in meters. */
export function createWalkInRainShower() {
  return buildRecipe({
  "title": "Walk-in Rain Shower",
  "dimensions": [
    1.13,
    2.22,
    1.04
  ],
  "parts": [
    {
      "t": "box",
      "n": "stone-tray",
      "p": [
        0,
        0.06,
        0
      ],
      "s": [
        1.13,
        0.12,
        1.04
      ],
      "c": 14014676
    },
    {
      "t": "box",
      "n": "back-panel",
      "p": [
        0,
        1.1,
        -0.49
      ],
      "s": [
        1.08,
        2.13,
        0.06
      ],
      "c": 12109768
    },
    {
      "t": "box",
      "n": "glass-screen",
      "p": [
        -0.47,
        1.12,
        0.03
      ],
      "s": [
        0.018,
        2.18,
        0.93
      ],
      "c": 10143696
    },
    {
      "t": "box",
      "n": "glass-rail",
      "p": [
        -0.46,
        2.18,
        0.03
      ],
      "s": [
        0.045,
        0.035,
        0.94
      ],
      "c": 7899020
    },
    {
      "t": "rod",
      "n": "shower-riser",
      "from": [
        0.2,
        0.62,
        -0.46
      ],
      "to": [
        0.2,
        1.96,
        -0.46
      ],
      "r": 0.025,
      "c": 7899020
    },
    {
      "t": "rod",
      "n": "ceiling-arm",
      "from": [
        0.2,
        1.95,
        -0.46
      ],
      "to": [
        0.2,
        1.95,
        -0.03
      ],
      "r": 0.025,
      "c": 7899020
    },
    {
      "t": "cylinder",
      "n": "rain-head",
      "p": [
        0.2,
        1.93,
        -0.03
      ],
      "s": [
        0.34,
        0.025,
        0.34
      ],
      "c": 3488579
    },
    {
      "t": "cylinder",
      "n": "mixer",
      "p": [
        0.2,
        1.14,
        -0.42
      ],
      "s": [
        0.17,
        0.09,
        0.17
      ],
      "c": 7899020,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "water-drop-0",
      "p": [
        0.12,
        1.51,
        -0.03
      ],
      "s": [
        0.015,
        0.045,
        0.015
      ],
      "c": 8634320
    },
    {
      "t": "sphere",
      "n": "water-drop-1",
      "p": [
        0.175,
        1.29,
        -0.03
      ],
      "s": [
        0.015,
        0.045,
        0.015
      ],
      "c": 8634320
    },
    {
      "t": "sphere",
      "n": "water-drop-2",
      "p": [
        0.22999999999999998,
        1.51,
        -0.03
      ],
      "s": [
        0.015,
        0.045,
        0.015
      ],
      "c": 8634320
    },
    {
      "t": "sphere",
      "n": "water-drop-3",
      "p": [
        0.28500000000000003,
        1.29,
        -0.03
      ],
      "s": [
        0.015,
        0.045,
        0.015
      ],
      "c": 8634320
    }
  ]
});
}
