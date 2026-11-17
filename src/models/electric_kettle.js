import { buildRecipe } from './recipe_engine.js';

/** Electric Kettle, original editable Three.js primitive composition. */
export function createElectricKettle() {
  return buildRecipe({
  "title": "Electric Kettle",
  "dimensions": [
    0.32,
    0.34,
    0.27
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "kettle-body",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        0.22,
        0.29,
        0.22
      ],
      "c": 10925755
    },
    {
      "t": "cylinder",
      "n": "lid",
      "p": [
        0,
        0.315,
        0
      ],
      "s": [
        0.17,
        0.025,
        0.17
      ],
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "lid-knob",
      "p": [
        0,
        0.335,
        0
      ],
      "s": [
        0.055,
        0.026,
        0.055
      ],
      "c": 11188666
    },
    {
      "t": "rod",
      "n": "spout",
      "from": [
        0.1,
        0.245,
        0
      ],
      "to": [
        0.17,
        0.3,
        0.01
      ],
      "r": 0.035,
      "c": 11188666
    },
    {
      "t": "torus",
      "n": "handle",
      "p": [
        -0.1,
        0.2,
        0
      ],
      "s": [
        0.15,
        0.22,
        0.1
      ],
      "c": 3160899
    }
  ]
});
}
