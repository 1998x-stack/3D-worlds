import { buildRecipe } from './recipe_engine.js';

/** Patrol Spacecraft, original editable Three.js primitive composition. */
export function createPatrolSpacecraft() {
  return buildRecipe({
  "title": "Patrol Spacecraft",
  "dimensions": [
    2.8,
    0.84,
    3.25
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "fuselage",
      "p": [
        0,
        0.4,
        0
      ],
      "s": [
        1.08,
        0.73,
        2.55
      ],
      "c": 8297636
    },
    {
      "t": "box",
      "n": "left-wing",
      "p": [
        -0.96,
        0.32,
        -0.12
      ],
      "s": [
        1.18,
        0.1,
        1.62
      ],
      "c": 5993861,
      "rot": [
        0,
        0.14,
        0.11
      ]
    },
    {
      "t": "box",
      "n": "right-wing",
      "p": [
        0.96,
        0.32,
        -0.12
      ],
      "s": [
        1.18,
        0.1,
        1.62
      ],
      "c": 5993861,
      "rot": [
        0,
        -0.14,
        -0.11
      ]
    },
    {
      "t": "sphere",
      "n": "cockpit",
      "p": [
        0,
        0.61,
        0.7
      ],
      "s": [
        0.68,
        0.28,
        1.03
      ],
      "c": 3428714
    },
    {
      "t": "cylinder",
      "n": "engine-left",
      "p": [
        -0.38,
        0.38,
        -1.42
      ],
      "s": [
        0.28,
        0.31,
        0.28
      ],
      "c": 4873316,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "engine-right",
      "p": [
        0.38,
        0.38,
        -1.42
      ],
      "s": [
        0.28,
        0.31,
        0.28
      ],
      "c": 4873316,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "nose",
      "p": [
        0,
        0.36,
        1.4
      ],
      "s": [
        0.4,
        0.29,
        0.46
      ],
      "c": 12045009
    }
  ]
});
}
