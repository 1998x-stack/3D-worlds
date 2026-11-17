import { buildRecipe } from './recipe_engine.js';

/** Floating Wall Shelf: original stylized scene prop, Y-up, grounded in meters. */
export function createFloatingWallShelf() {
  return buildRecipe({
  "title": "Floating Wall Shelf",
  "dimensions": [
    1.34,
    0.72,
    0.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "shelf-plank-0",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        1.34,
        0.05,
        0.25
      ],
      "c": 11370845
    },
    {
      "t": "box",
      "n": "shelf-plank-1",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        1.34,
        0.05,
        0.25
      ],
      "c": 11370845
    },
    {
      "t": "box",
      "n": "shelf-plank-2",
      "p": [
        0,
        0.68,
        0
      ],
      "s": [
        1.34,
        0.05,
        0.25
      ],
      "c": 11370845
    },
    {
      "t": "box",
      "n": "back-bracket-0",
      "p": [
        -0.58,
        0.39,
        -0.11
      ],
      "s": [
        0.06,
        0.66,
        0.045
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "support-rail-0",
      "p": [
        -0.58,
        0.12,
        0.015
      ],
      "s": [
        0.04,
        0.07,
        0.21
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "back-bracket-1",
      "p": [
        0.58,
        0.39,
        -0.11
      ],
      "s": [
        0.06,
        0.66,
        0.045
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "support-rail-1",
      "p": [
        0.58,
        0.12,
        0.015
      ],
      "s": [
        0.04,
        0.07,
        0.21
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "book-stack",
      "p": [
        -0.35,
        0.27,
        0.01
      ],
      "s": [
        0.18,
        0.23,
        0.13
      ],
      "c": 6589576
    },
    {
      "t": "cylinder",
      "n": "vase",
      "p": [
        0.35,
        0.28,
        0
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 14796718
    },
    {
      "t": "sphere",
      "n": "plant-display",
      "p": [
        0.35,
        0.48,
        0
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 7312739
    }
  ]
});
}
