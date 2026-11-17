import { buildRecipe } from './recipe_engine.js';

/** Butcher Block Island: original Three.js assembly, stable Y-up and meter coordinates. */
export function createButcherBlockIsland() {
  return buildRecipe({
  "title": "Butcher Block Island",
  "dimensions": [
    1.84,
    0.96,
    0.96
  ],
  "parts": [
    {
      "t": "box",
      "n": "island-cabinet",
      "p": [
        0,
        0.44,
        0
      ],
      "s": [
        1.67,
        0.83,
        0.85
      ],
      "c": 14144199
    },
    {
      "t": "box",
      "n": "wood-counter",
      "p": [
        0,
        0.905,
        0
      ],
      "s": [
        1.84,
        0.08,
        0.96
      ],
      "c": 12093790
    },
    {
      "t": "box",
      "n": "door-0",
      "p": [
        -0.53,
        0.51,
        0.44
      ],
      "s": [
        0.49,
        0.57,
        0.028
      ],
      "c": 12302507
    },
    {
      "t": "box",
      "n": "handle-0",
      "p": [
        -0.53,
        0.61,
        0.465
      ],
      "s": [
        0.16,
        0.02,
        0.03
      ],
      "c": 3159866
    },
    {
      "t": "box",
      "n": "door-1",
      "p": [
        0,
        0.51,
        0.44
      ],
      "s": [
        0.49,
        0.57,
        0.028
      ],
      "c": 12302507
    },
    {
      "t": "box",
      "n": "handle-1",
      "p": [
        0,
        0.61,
        0.465
      ],
      "s": [
        0.16,
        0.02,
        0.03
      ],
      "c": 3159866
    },
    {
      "t": "box",
      "n": "door-2",
      "p": [
        0.53,
        0.51,
        0.44
      ],
      "s": [
        0.49,
        0.57,
        0.028
      ],
      "c": 12302507
    },
    {
      "t": "box",
      "n": "handle-2",
      "p": [
        0.53,
        0.61,
        0.465
      ],
      "s": [
        0.16,
        0.02,
        0.03
      ],
      "c": 3159866
    },
    {
      "t": "box",
      "n": "island-foot-0-0",
      "p": [
        -0.7,
        0.035,
        -0.33
      ],
      "s": [
        0.09,
        0.07,
        0.09
      ],
      "c": 10779476
    },
    {
      "t": "box",
      "n": "island-foot-0-1",
      "p": [
        -0.7,
        0.035,
        0.33
      ],
      "s": [
        0.09,
        0.07,
        0.09
      ],
      "c": 10779476
    },
    {
      "t": "box",
      "n": "island-foot-1-0",
      "p": [
        0.7,
        0.035,
        -0.33
      ],
      "s": [
        0.09,
        0.07,
        0.09
      ],
      "c": 10779476
    },
    {
      "t": "box",
      "n": "island-foot-1-1",
      "p": [
        0.7,
        0.035,
        0.33
      ],
      "s": [
        0.09,
        0.07,
        0.09
      ],
      "c": 10779476
    },
    {
      "t": "cylinder",
      "n": "cutting-board-stack",
      "p": [
        0.4,
        0.958,
        -0.2
      ],
      "s": [
        0.32,
        0.025,
        0.24
      ],
      "c": 10779476
    },
    {
      "t": "box",
      "n": "induction-panel",
      "p": [
        -0.43,
        0.955,
        0
      ],
      "s": [
        0.52,
        0.013,
        0.43
      ],
      "c": 4474954
    }
  ]
});
}
