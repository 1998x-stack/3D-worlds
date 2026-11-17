import { buildRecipe } from './recipe_engine.js';

/** Studio Monitor, original editable Three.js primitive composition. */
export function createStudioMonitor() {
  return buildRecipe({
  "title": "Studio Monitor",
  "dimensions": [
    0.7,
    0.56,
    0.19
  ],
  "parts": [
    {
      "t": "box",
      "n": "display-shell",
      "p": [
        0,
        0.35,
        0
      ],
      "s": [
        0.7,
        0.42,
        0.055
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "display-panel",
      "p": [
        0,
        0.35,
        0.032
      ],
      "s": [
        0.65,
        0.37,
        0.012
      ],
      "c": 4484998
    },
    {
      "t": "cylinder",
      "n": "neck",
      "p": [
        0,
        0.095,
        -0.005
      ],
      "s": [
        0.045,
        0.2,
        0.045
      ],
      "c": 6122611
    },
    {
      "t": "box",
      "n": "foot",
      "p": [
        0,
        0.025,
        0
      ],
      "s": [
        0.32,
        0.05,
        0.19
      ],
      "c": 6122611
    },
    {
      "t": "box",
      "n": "status-strip",
      "p": [
        0,
        0.19,
        0.042
      ],
      "s": [
        0.19,
        0.018,
        0.004
      ],
      "c": 8173736
    }
  ]
});
}
