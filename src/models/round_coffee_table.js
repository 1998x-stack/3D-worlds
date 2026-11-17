import { buildRecipe } from './recipe_engine.js';

/** Round Coffee Table, original editable Three.js primitive composition. */
export function createRoundCoffeeTable() {
  return buildRecipe({
  "title": "Round Coffee Table",
  "dimensions": [
    0.95,
    0.49,
    0.95
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "oak-top",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        0.95,
        0.09,
        0.95
      ],
      "c": 10910288
    },
    {
      "t": "cylinder",
      "n": "pedestal",
      "p": [
        0,
        0.24,
        0
      ],
      "s": [
        0.22,
        0.38,
        0.22
      ],
      "c": 6122611
    },
    {
      "t": "cylinder",
      "n": "disc-base",
      "p": [
        0,
        0.045,
        0
      ],
      "s": [
        0.54,
        0.09,
        0.54
      ],
      "c": 6122611
    },
    {
      "t": "torus",
      "n": "top-trim",
      "p": [
        0,
        0.5,
        0
      ],
      "s": [
        0.88,
        0.03,
        0.88
      ],
      "c": 12687970,
      "rot": [
        -1.5707963267948966,
        0,
        0
      ]
    }
  ]
});
}
