import { buildRecipe } from './recipe_engine.js';

/** Oak Wardrobe, original editable Three.js primitive composition. */
export function createOakWardrobe() {
  return buildRecipe({
  "title": "Oak Wardrobe",
  "dimensions": [
    1.35,
    2.06,
    0.58
  ],
  "parts": [
    {
      "t": "box",
      "n": "cabinet",
      "p": [
        0,
        1.03,
        0
      ],
      "s": [
        1.35,
        2.06,
        0.58
      ],
      "c": 10910288
    },
    {
      "t": "box",
      "n": "left-door",
      "p": [
        -0.326,
        1.06,
        0.302
      ],
      "s": [
        0.64,
        1.94,
        0.025
      ],
      "c": 11963492
    },
    {
      "t": "box",
      "n": "right-door",
      "p": [
        0.326,
        1.06,
        0.302
      ],
      "s": [
        0.64,
        1.94,
        0.025
      ],
      "c": 12292970
    },
    {
      "t": "box",
      "n": "handle-left",
      "p": [
        -0.075,
        1.02,
        0.323
      ],
      "s": [
        0.025,
        0.27,
        0.032
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "handle-right",
      "p": [
        0.075,
        1.02,
        0.323
      ],
      "s": [
        0.025,
        0.27,
        0.032
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "top-edge",
      "p": [
        0,
        2.035,
        0
      ],
      "s": [
        1.36,
        0.05,
        0.61
      ],
      "c": 8411967
    }
  ]
});
}
