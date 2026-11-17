import { buildRecipe } from './recipe_engine.js';

/** Steel Toolbox, original editable Three.js primitive composition. */
export function createSteelToolbox() {
  return buildRecipe({
  "title": "Steel Toolbox",
  "dimensions": [
    0.51,
    0.31,
    0.27
  ],
  "parts": [
    {
      "t": "box",
      "n": "toolbox-body",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        0.51,
        0.22,
        0.27
      ],
      "c": 12407616
    },
    {
      "t": "box",
      "n": "lid",
      "p": [
        0,
        0.242,
        0
      ],
      "s": [
        0.51,
        0.06,
        0.27
      ],
      "c": 13263440
    },
    {
      "t": "box",
      "n": "handle",
      "p": [
        0,
        0.3,
        0
      ],
      "s": [
        0.17,
        0.025,
        0.04
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "latch",
      "p": [
        0,
        0.2,
        0.145
      ],
      "s": [
        0.07,
        0.05,
        0.02
      ],
      "c": 11188666
    },
    {
      "t": "box",
      "n": "lower-trim",
      "p": [
        0,
        0.025,
        0
      ],
      "s": [
        0.5,
        0.04,
        0.26
      ],
      "c": 10240824
    }
  ]
});
}
