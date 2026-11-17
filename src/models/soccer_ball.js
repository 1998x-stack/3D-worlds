import { buildRecipe } from './recipe_engine.js';

/** Soccer Ball, original editable Three.js primitive composition. */
export function createSoccerBall() {
  return buildRecipe({
  "title": "Soccer Ball",
  "dimensions": [
    0.22,
    0.22,
    0.22
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "ball",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15196112
    },
    {
      "t": "sphere",
      "n": "patch-0",
      "p": [
        0.09,
        0.11,
        0
      ],
      "s": [
        0.052,
        0.045,
        0.032
      ],
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "patch-1",
      "p": [
        -0.09,
        0.11,
        0
      ],
      "s": [
        0.052,
        0.045,
        0.032
      ],
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "patch-2",
      "p": [
        0,
        0.19,
        0.04
      ],
      "s": [
        0.052,
        0.045,
        0.032
      ],
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "patch-3",
      "p": [
        0,
        0.035,
        0.06
      ],
      "s": [
        0.052,
        0.045,
        0.032
      ],
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "patch-4",
      "p": [
        0,
        0.11,
        0.095
      ],
      "s": [
        0.052,
        0.045,
        0.032
      ],
      "c": 3160899
    }
  ]
});
}
