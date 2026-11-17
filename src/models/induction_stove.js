import { buildRecipe } from './recipe_engine.js';

/** Induction Stove, original editable Three.js primitive composition. */
export function createInductionStove() {
  return buildRecipe({
  "title": "Induction Stove",
  "dimensions": [
    0.84,
    0.93,
    0.7
  ],
  "parts": [
    {
      "t": "box",
      "n": "cabinet",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        0.84,
        0.88,
        0.7
      ],
      "c": 15196112
    },
    {
      "t": "box",
      "n": "black-hob",
      "p": [
        0,
        0.89,
        0
      ],
      "s": [
        0.84,
        0.055,
        0.7
      ],
      "c": 3160899
    },
    {
      "t": "cylinder",
      "n": "burner--0.2--0.16",
      "p": [
        -0.2,
        0.924,
        -0.16
      ],
      "s": [
        0.22,
        0.008,
        0.22
      ],
      "c": 6385012
    },
    {
      "t": "cylinder",
      "n": "burner--0.2-0.16",
      "p": [
        -0.2,
        0.924,
        0.16
      ],
      "s": [
        0.22,
        0.008,
        0.22
      ],
      "c": 6385012
    },
    {
      "t": "cylinder",
      "n": "burner-0.2--0.16",
      "p": [
        0.2,
        0.924,
        -0.16
      ],
      "s": [
        0.22,
        0.008,
        0.22
      ],
      "c": 6385012
    },
    {
      "t": "cylinder",
      "n": "burner-0.2-0.16",
      "p": [
        0.2,
        0.924,
        0.16
      ],
      "s": [
        0.22,
        0.008,
        0.22
      ],
      "c": 6385012
    },
    {
      "t": "box",
      "n": "oven-door",
      "p": [
        0,
        0.45,
        0.363
      ],
      "s": [
        0.71,
        0.53,
        0.017
      ],
      "c": 5988964
    },
    {
      "t": "box",
      "n": "oven-glass",
      "p": [
        0,
        0.47,
        0.38
      ],
      "s": [
        0.53,
        0.32,
        0.006
      ],
      "c": 2306363
    },
    {
      "t": "box",
      "n": "oven-handle",
      "p": [
        0,
        0.73,
        0.395
      ],
      "s": [
        0.44,
        0.025,
        0.036
      ],
      "c": 11188666
    }
  ]
});
}
