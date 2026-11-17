import { buildRecipe } from './recipe_engine.js';

/** Arched Wood Door, original editable Three.js primitive composition. */
export function createArchedWoodDoor() {
  return buildRecipe({
  "title": "Arched Wood Door",
  "dimensions": [
    1.06,
    2.25,
    0.18
  ],
  "parts": [
    {
      "t": "box",
      "n": "jamb-left",
      "p": [
        -0.49,
        1.07,
        0
      ],
      "s": [
        0.09,
        2.14,
        0.18
      ],
      "c": 7557689
    },
    {
      "t": "box",
      "n": "jamb-right",
      "p": [
        0.49,
        1.07,
        0
      ],
      "s": [
        0.09,
        2.14,
        0.18
      ],
      "c": 7557689
    },
    {
      "t": "box",
      "n": "door-slab",
      "p": [
        0,
        1.04,
        0
      ],
      "s": [
        0.9,
        2.08,
        0.11
      ],
      "c": 10581067
    },
    {
      "t": "sphere",
      "n": "arched-top",
      "p": [
        0,
        2.04,
        0
      ],
      "s": [
        0.9,
        0.42,
        0.12
      ],
      "c": 10054214
    },
    {
      "t": "box",
      "n": "left-panel",
      "p": [
        -0.22,
        1.17,
        0.065
      ],
      "s": [
        0.3,
        1.25,
        0.016
      ],
      "c": 8739905
    },
    {
      "t": "box",
      "n": "right-panel",
      "p": [
        0.22,
        1.17,
        0.065
      ],
      "s": [
        0.3,
        1.25,
        0.016
      ],
      "c": 8739905
    },
    {
      "t": "sphere",
      "n": "door-knob",
      "p": [
        0.35,
        0.97,
        0.1
      ],
      "s": [
        0.065,
        0.065,
        0.04
      ],
      "c": 12362605
    }
  ]
});
}
