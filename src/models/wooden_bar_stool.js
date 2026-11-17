import { buildRecipe } from './recipe_engine.js';

/** Wooden Bar Stool, original editable Three.js primitive composition. */
export function createWoodenBarStool() {
  return buildRecipe({
  "title": "Wooden Bar Stool",
  "dimensions": [
    0.48,
    0.78,
    0.48
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "round-seat",
      "p": [
        0,
        0.745,
        0
      ],
      "s": [
        0.48,
        0.07,
        0.48
      ],
      "c": 10910288
    },
    {
      "t": "box",
      "n": "leg--0.16--0.16",
      "p": [
        -0.16,
        0.37,
        -0.16
      ],
      "s": [
        0.065,
        0.74,
        0.065
      ],
      "c": 7754813
    },
    {
      "t": "box",
      "n": "leg--0.16-0.16",
      "p": [
        -0.16,
        0.37,
        0.16
      ],
      "s": [
        0.065,
        0.74,
        0.065
      ],
      "c": 7754813
    },
    {
      "t": "box",
      "n": "leg-0.16--0.16",
      "p": [
        0.16,
        0.37,
        -0.16
      ],
      "s": [
        0.065,
        0.74,
        0.065
      ],
      "c": 7754813
    },
    {
      "t": "box",
      "n": "leg-0.16-0.16",
      "p": [
        0.16,
        0.37,
        0.16
      ],
      "s": [
        0.065,
        0.74,
        0.065
      ],
      "c": 7754813
    },
    {
      "t": "box",
      "n": "cross-brace-a",
      "p": [
        0,
        0.23,
        0
      ],
      "s": [
        0.38,
        0.035,
        0.045
      ],
      "c": 7754813
    },
    {
      "t": "box",
      "n": "cross-brace-b",
      "p": [
        0,
        0.23,
        0
      ],
      "s": [
        0.045,
        0.035,
        0.38
      ],
      "c": 7754813
    }
  ]
});
}
