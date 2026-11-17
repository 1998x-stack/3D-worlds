import { buildRecipe } from './recipe_engine.js';

/** Marble Dining Table, original editable Three.js primitive composition. */
export function createMarbleDiningTable() {
  return buildRecipe({
  "title": "Marble Dining Table",
  "dimensions": [
    1.8,
    0.8,
    0.96
  ],
  "parts": [
    {
      "t": "box",
      "n": "stone-top",
      "p": [
        0,
        0.76,
        0
      ],
      "s": [
        1.8,
        0.075,
        0.96
      ],
      "c": 14802647
    },
    {
      "t": "box",
      "n": "central-plinth",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        0.44,
        0.72,
        0.34
      ],
      "c": 5656397
    },
    {
      "t": "box",
      "n": "footplate",
      "p": [
        0,
        0.05,
        0
      ],
      "s": [
        0.85,
        0.1,
        0.58
      ],
      "c": 5721931
    },
    {
      "t": "box",
      "n": "inlay-left",
      "p": [
        -0.85,
        0.765,
        0
      ],
      "s": [
        0.018,
        0.08,
        0.93
      ],
      "c": 12036508
    },
    {
      "t": "box",
      "n": "inlay-right",
      "p": [
        0.85,
        0.765,
        0
      ],
      "s": [
        0.018,
        0.08,
        0.93
      ],
      "c": 12036508
    }
  ]
});
}
