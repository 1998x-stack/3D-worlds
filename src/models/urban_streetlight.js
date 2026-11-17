import { buildRecipe } from './recipe_engine.js';

/** Urban Streetlight, original editable Three.js primitive composition. */
export function createUrbanStreetlight() {
  return buildRecipe({
  "title": "Urban Streetlight",
  "dimensions": [
    1.18,
    3.8,
    0.52
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "base",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.34,
        0.24,
        0.34
      ],
      "c": 6122611
    },
    {
      "t": "cylinder",
      "n": "pole",
      "p": [
        0,
        1.83,
        0
      ],
      "s": [
        0.095,
        3.42,
        0.095
      ],
      "c": 6122611
    },
    {
      "t": "rod",
      "n": "lamp-arm",
      "from": [
        0,
        3.55,
        0
      ],
      "to": [
        0.94,
        3.56,
        0
      ],
      "r": 0.05,
      "c": 6122611
    },
    {
      "t": "box",
      "n": "light-housing",
      "p": [
        0.94,
        3.55,
        0
      ],
      "s": [
        0.48,
        0.13,
        0.31
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "lens",
      "p": [
        0.94,
        3.48,
        0
      ],
      "s": [
        0.4,
        0.018,
        0.24
      ],
      "c": 15196112
    }
  ]
});
}
