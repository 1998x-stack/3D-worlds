import { buildRecipe } from './recipe_engine.js';

/** Desert Cactus, original editable Three.js primitive composition. */
export function createDesertCactus() {
  return buildRecipe({
  "title": "Desert Cactus",
  "dimensions": [
    0.85,
    1.68,
    0.57
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "main-stem",
      "p": [
        0,
        0.8,
        0
      ],
      "s": [
        0.31,
        1.59,
        0.31
      ],
      "c": 4687453
    },
    {
      "t": "rod",
      "n": "left-arm",
      "from": [
        -0.08,
        0.83,
        0
      ],
      "to": [
        -0.36,
        1.09,
        0
      ],
      "r": 0.11,
      "c": 4687453
    },
    {
      "t": "rod",
      "n": "right-arm",
      "from": [
        0.08,
        1.1,
        0
      ],
      "to": [
        0.33,
        1.38,
        0
      ],
      "r": 0.1,
      "c": 4687453
    },
    {
      "t": "cylinder",
      "n": "ground",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        0.85,
        0.14,
        0.57
      ],
      "c": 12887422
    }
  ]
});
}
