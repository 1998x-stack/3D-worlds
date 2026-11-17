import { buildRecipe } from './recipe_engine.js';

/** Porcelain Kitchen Sink, original editable Three.js primitive composition. */
export function createPorcelainKitchenSink() {
  return buildRecipe({
  "title": "Porcelain Kitchen Sink",
  "dimensions": [
    1.1,
    1.05,
    0.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "base",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        1.1,
        0.8,
        0.65
      ],
      "c": 10845273
    },
    {
      "t": "box",
      "n": "counter",
      "p": [
        0,
        0.83,
        0
      ],
      "s": [
        1.1,
        0.06,
        0.65
      ],
      "c": 15000541
    },
    {
      "t": "box",
      "n": "sink-rim",
      "p": [
        -0.19,
        0.867,
        0.025
      ],
      "s": [
        0.54,
        0.037,
        0.42
      ],
      "c": 15659501
    },
    {
      "t": "box",
      "n": "basin",
      "p": [
        -0.19,
        0.89,
        0.025
      ],
      "s": [
        0.42,
        0.016,
        0.29
      ],
      "c": 10861760
    },
    {
      "t": "rod",
      "n": "spout-neck",
      "from": [
        0.19,
        0.87,
        -0.24
      ],
      "to": [
        0.19,
        1.05,
        -0.24
      ],
      "r": 0.02,
      "c": 11188666
    },
    {
      "t": "rod",
      "n": "spout-bend",
      "from": [
        0.19,
        1.05,
        -0.24
      ],
      "to": [
        0.19,
        1.05,
        0.015
      ],
      "r": 0.021,
      "c": 11188666
    },
    {
      "t": "box",
      "n": "cabinet-handle",
      "p": [
        0.33,
        0.55,
        0.344
      ],
      "s": [
        0.16,
        0.022,
        0.025
      ],
      "c": 3160899
    }
  ]
});
}
