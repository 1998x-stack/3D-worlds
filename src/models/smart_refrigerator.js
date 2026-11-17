import { buildRecipe } from './recipe_engine.js';

/** Smart Refrigerator, original editable Three.js primitive composition. */
export function createSmartRefrigerator() {
  return buildRecipe({
  "title": "Smart Refrigerator",
  "dimensions": [
    0.92,
    1.87,
    0.74
  ],
  "parts": [
    {
      "t": "box",
      "n": "body",
      "p": [
        0,
        0.935,
        0
      ],
      "s": [
        0.92,
        1.87,
        0.74
      ],
      "c": 11385277
    },
    {
      "t": "box",
      "n": "upper-door",
      "p": [
        0,
        1.31,
        0.385
      ],
      "s": [
        0.86,
        1.04,
        0.035
      ],
      "c": 13030100
    },
    {
      "t": "box",
      "n": "lower-door",
      "p": [
        0,
        0.38,
        0.385
      ],
      "s": [
        0.86,
        0.72,
        0.035
      ],
      "c": 12503756
    },
    {
      "t": "box",
      "n": "upper-handle",
      "p": [
        0.36,
        1.31,
        0.41
      ],
      "s": [
        0.028,
        0.43,
        0.045
      ],
      "c": 6122611
    },
    {
      "t": "box",
      "n": "lower-handle",
      "p": [
        0.36,
        0.4,
        0.41
      ],
      "s": [
        0.028,
        0.3,
        0.045
      ],
      "c": 6122611
    },
    {
      "t": "box",
      "n": "screen",
      "p": [
        -0.2,
        1.49,
        0.408
      ],
      "s": [
        0.24,
        0.2,
        0.009
      ],
      "c": 3296600
    }
  ]
});
}
