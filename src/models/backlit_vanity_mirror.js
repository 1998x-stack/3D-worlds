import { buildRecipe } from './recipe_engine.js';

/** Backlit Vanity Mirror: original stylized scene prop, Y-up, grounded in meters. */
export function createBacklitVanityMirror() {
  return buildRecipe({
  "title": "Backlit Vanity Mirror",
  "dimensions": [
    0.79,
    1.04,
    0.12
  ],
  "parts": [
    {
      "t": "box",
      "n": "back-panel",
      "p": [
        0,
        0.52,
        -0.015
      ],
      "s": [
        0.79,
        1.04,
        0.08
      ],
      "c": 3488579
    },
    {
      "t": "sphere",
      "n": "rounded-back",
      "p": [
        0,
        0.52,
        -0.005
      ],
      "s": [
        0.79,
        0.94,
        0.08
      ],
      "c": 12896972
    },
    {
      "t": "box",
      "n": "reflective-face",
      "p": [
        0,
        0.53,
        0.044
      ],
      "s": [
        0.68,
        0.88,
        0.012
      ],
      "c": 9091263
    },
    {
      "t": "box",
      "n": "led-strip-left",
      "p": [
        -0.36,
        0.53,
        0.06
      ],
      "s": [
        0.014,
        0.9,
        0.014
      ],
      "c": 16769463
    },
    {
      "t": "box",
      "n": "led-strip-right",
      "p": [
        0.36,
        0.53,
        0.06
      ],
      "s": [
        0.014,
        0.9,
        0.014
      ],
      "c": 16769463
    },
    {
      "t": "box",
      "n": "led-strip-top",
      "p": [
        0,
        0.97,
        0.06
      ],
      "s": [
        0.7,
        0.014,
        0.014
      ],
      "c": 16769463
    },
    {
      "t": "box",
      "n": "led-strip-bottom",
      "p": [
        0,
        0.1,
        0.06
      ],
      "s": [
        0.7,
        0.014,
        0.014
      ],
      "c": 16769463
    },
    {
      "t": "sphere",
      "n": "sensor",
      "p": [
        0,
        0.08,
        0.068
      ],
      "s": [
        0.022,
        0.022,
        0.012
      ],
      "c": 7181210
    }
  ]
});
}
