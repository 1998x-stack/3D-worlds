import { buildRecipe } from './recipe_engine.js';

/** Alpine Pine Tree, original editable Three.js primitive composition. */
export function createAlpinePineTree() {
  return buildRecipe({
  "title": "Alpine Pine Tree",
  "dimensions": [
    1.67,
    3,
    1.67
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "trunk",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        0.24,
        2.25,
        0.24
      ],
      "c": 10910288
    },
    {
      "t": "cylinder",
      "n": "conifer-tier-0",
      "p": [
        0,
        1.35,
        0
      ],
      "s": [
        1.64,
        1.18,
        1.64
      ],
      "c": 4950111
    },
    {
      "t": "cylinder",
      "n": "conifer-tier-1",
      "p": [
        0,
        1.77,
        0
      ],
      "s": [
        1.3699999999999999,
        1.0499999999999998,
        1.3699999999999999
      ],
      "c": 3632203
    },
    {
      "t": "cylinder",
      "n": "conifer-tier-2",
      "p": [
        0,
        2.19,
        0
      ],
      "s": [
        1.0999999999999999,
        0.9199999999999999,
        1.0999999999999999
      ],
      "c": 4950111
    },
    {
      "t": "cylinder",
      "n": "conifer-tier-3",
      "p": [
        0,
        2.6100000000000003,
        0
      ],
      "s": [
        0.8299999999999998,
        0.7899999999999999,
        0.8299999999999998
      ],
      "c": 3632203
    }
  ]
});
}
