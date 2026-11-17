import { buildRecipe } from './recipe_engine.js';

/** Traffic Signal, original editable Three.js primitive composition. */
export function createTrafficSignal() {
  return buildRecipe({
  "title": "Traffic Signal",
  "dimensions": [
    0.55,
    3.08,
    0.56
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "pole",
      "p": [
        0,
        1.32,
        0
      ],
      "s": [
        0.1,
        2.64,
        0.1
      ],
      "c": 6122611
    },
    {
      "t": "cylinder",
      "n": "base",
      "p": [
        0,
        0.075,
        0
      ],
      "s": [
        0.39,
        0.15,
        0.39
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "signal-box",
      "p": [
        0,
        2.69,
        0
      ],
      "s": [
        0.42,
        0.78,
        0.34
      ],
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "signal-0",
      "p": [
        0,
        2.93,
        0.186
      ],
      "s": [
        0.23,
        0.2,
        0.045
      ],
      "c": 13191224
    },
    {
      "t": "sphere",
      "n": "signal-1",
      "p": [
        0,
        2.69,
        0.186
      ],
      "s": [
        0.23,
        0.2,
        0.045
      ],
      "c": 14199883
    },
    {
      "t": "sphere",
      "n": "signal-2",
      "p": [
        0,
        2.45,
        0.186
      ],
      "s": [
        0.23,
        0.2,
        0.045
      ],
      "c": 6926200
    }
  ]
});
}
