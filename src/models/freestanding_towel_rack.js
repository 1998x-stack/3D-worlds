import { buildRecipe } from './recipe_engine.js';

/** Freestanding Towel Rack: original stylized scene prop, Y-up, grounded in meters. */
export function createFreestandingTowelRack() {
  return buildRecipe({
  "title": "Freestanding Towel Rack",
  "dimensions": [
    0.86,
    1.26,
    0.36
  ],
  "parts": [
    {
      "t": "rod",
      "n": "vertical-post-0",
      "from": [
        -0.37,
        0.04,
        0
      ],
      "to": [
        -0.37,
        1.26,
        0
      ],
      "r": 0.022,
      "c": 7899020
    },
    {
      "t": "rod",
      "n": "vertical-post-1",
      "from": [
        0.37,
        0.04,
        0
      ],
      "to": [
        0.37,
        1.26,
        0
      ],
      "r": 0.022,
      "c": 7899020
    },
    {
      "t": "rod",
      "n": "crossbar-0",
      "from": [
        -0.38,
        0.52,
        0
      ],
      "to": [
        0.38,
        0.52,
        0
      ],
      "r": 0.024,
      "c": 3488579
    },
    {
      "t": "rod",
      "n": "crossbar-1",
      "from": [
        -0.38,
        0.8600000000000001,
        0
      ],
      "to": [
        0.38,
        0.8600000000000001,
        0
      ],
      "r": 0.024,
      "c": 3488579
    },
    {
      "t": "rod",
      "n": "crossbar-2",
      "from": [
        -0.38,
        1.2000000000000002,
        0
      ],
      "to": [
        0.38,
        1.2000000000000002,
        0
      ],
      "r": 0.024,
      "c": 3488579
    },
    {
      "t": "box",
      "n": "base-foot-0",
      "p": [
        -0.37,
        0.04,
        0
      ],
      "s": [
        0.11,
        0.08,
        0.36
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "base-foot-1",
      "p": [
        0.37,
        0.04,
        0
      ],
      "s": [
        0.11,
        0.08,
        0.36
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "hanging-towel",
      "p": [
        0.02,
        0.83,
        0.04
      ],
      "s": [
        0.55,
        0.55,
        0.025
      ],
      "c": 13220775
    },
    {
      "t": "box",
      "n": "towel-stripe",
      "p": [
        0.02,
        0.63,
        0.059
      ],
      "s": [
        0.55,
        0.025,
        0.012
      ],
      "c": 11641227
    }
  ]
});
}
