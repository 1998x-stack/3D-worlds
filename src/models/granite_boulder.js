import { buildRecipe } from './recipe_engine.js';

/** Granite Boulder, original editable Three.js primitive composition. */
export function createGraniteBoulder() {
  return buildRecipe({
  "title": "Granite Boulder",
  "dimensions": [
    1.3,
    0.84,
    1.1
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "core",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        1.3,
        0.84,
        1.1
      ],
      "c": 8949132
    },
    {
      "t": "sphere",
      "n": "ridge-left",
      "p": [
        -0.36,
        0.48,
        0.08
      ],
      "s": [
        0.61,
        0.56,
        0.68
      ],
      "c": 10462626
    },
    {
      "t": "sphere",
      "n": "ridge-right",
      "p": [
        0.29,
        0.39,
        -0.12
      ],
      "s": [
        0.7,
        0.62,
        0.6
      ],
      "c": 7962495
    }
  ]
});
}
