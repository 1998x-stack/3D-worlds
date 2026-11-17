import { buildRecipe } from './recipe_engine.js';

/** Claw Hammer, original editable Three.js primitive composition. */
export function createClawHammer() {
  return buildRecipe({
  "title": "Claw Hammer",
  "dimensions": [
    0.36,
    0.47,
    0.18
  ],
  "parts": [
    {
      "t": "rod",
      "n": "wood-handle",
      "from": [
        0,
        0.02,
        0
      ],
      "to": [
        0,
        0.45,
        0
      ],
      "r": 0.041,
      "c": 10910288
    },
    {
      "t": "box",
      "n": "steel-head",
      "p": [
        0,
        0.438,
        0
      ],
      "s": [
        0.36,
        0.09,
        0.12
      ],
      "c": 6122611
    },
    {
      "t": "sphere",
      "n": "peen-end",
      "p": [
        0.17,
        0.438,
        0
      ],
      "s": [
        0.055,
        0.1,
        0.13
      ],
      "c": 11188666
    },
    {
      "t": "box",
      "n": "grip",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.085,
        0.14,
        0.09
      ],
      "c": 4998720
    }
  ]
});
}
