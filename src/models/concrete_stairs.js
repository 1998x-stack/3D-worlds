import { buildRecipe } from './recipe_engine.js';

/** Concrete Stairs, original editable Three.js primitive composition. */
export function createConcreteStairs() {
  return buildRecipe({
  "title": "Concrete Stairs",
  "dimensions": [
    1.4,
    1.2,
    2
  ],
  "parts": [
    {
      "t": "box",
      "n": "step-0",
      "p": [
        0,
        0.1,
        0.83
      ],
      "s": [
        1.4,
        0.2,
        0.34
      ],
      "c": 11053735
    },
    {
      "t": "box",
      "n": "step-1",
      "p": [
        0,
        0.30000000000000004,
        0.49999999999999994
      ],
      "s": [
        1.4,
        0.6000000000000001,
        0.34
      ],
      "c": 11053735
    },
    {
      "t": "box",
      "n": "step-2",
      "p": [
        0,
        0.5,
        0.16999999999999993
      ],
      "s": [
        1.4,
        1,
        0.34
      ],
      "c": 11053735
    },
    {
      "t": "box",
      "n": "step-3",
      "p": [
        0,
        0.7000000000000001,
        -0.16000000000000003
      ],
      "s": [
        1.4,
        1.4000000000000001,
        0.34
      ],
      "c": 11053735
    },
    {
      "t": "box",
      "n": "step-4",
      "p": [
        0,
        0.9,
        -0.4900000000000001
      ],
      "s": [
        1.4,
        1.8,
        0.34
      ],
      "c": 11053735
    },
    {
      "t": "box",
      "n": "step-5",
      "p": [
        0,
        1.1,
        -0.8200000000000002
      ],
      "s": [
        1.4,
        2.2,
        0.34
      ],
      "c": 11053735
    }
  ]
});
}
