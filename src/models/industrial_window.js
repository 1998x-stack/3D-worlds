import { buildRecipe } from './recipe_engine.js';

/** Industrial Window, original editable Three.js primitive composition. */
export function createIndustrialWindow() {
  return buildRecipe({
  "title": "Industrial Window",
  "dimensions": [
    1.35,
    1.25,
    0.13
  ],
  "parts": [
    {
      "t": "box",
      "n": "outer-frame",
      "p": [
        0,
        0.625,
        0
      ],
      "s": [
        1.35,
        1.25,
        0.12
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "glass",
      "p": [
        0,
        0.625,
        0.065
      ],
      "s": [
        1.2,
        1.1,
        0.018
      ],
      "c": 9090748
    },
    {
      "t": "box",
      "n": "mullion-vertical",
      "p": [
        0,
        0.625,
        0.085
      ],
      "s": [
        0.055,
        1.13,
        0.045
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "mullion-horizontal",
      "p": [
        0,
        0.625,
        0.085
      ],
      "s": [
        1.23,
        0.055,
        0.045
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "side-jamb--0.48",
      "p": [
        -0.48,
        0.625,
        0.085
      ],
      "s": [
        0.025,
        1.12,
        0.045
      ],
      "c": 11188666
    },
    {
      "t": "box",
      "n": "side-jamb-0.48",
      "p": [
        0.48,
        0.625,
        0.085
      ],
      "s": [
        0.025,
        1.12,
        0.045
      ],
      "c": 11188666
    }
  ]
});
}
