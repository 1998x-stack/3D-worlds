import { buildRecipe } from './recipe_engine.js';

/** Retro Arcade Cabinet: original stylized asset; canonical dimensions in meters. */
export function createRetroArcadeCabinet() {
  return buildRecipe({
  "title": "Retro Arcade Cabinet",
  "dimensions": [
    0.74,
    1.76,
    0.82
  ],
  "parts": [
    {
      "t": "box",
      "n": "main-shell",
      "p": [
        0,
        0.87,
        0
      ],
      "s": [
        0.73,
        1.74,
        0.77
      ],
      "c": 7159400
    },
    {
      "t": "box",
      "n": "upper-marquee",
      "p": [
        0,
        1.62,
        0.4
      ],
      "s": [
        0.69,
        0.2,
        0.05
      ],
      "c": 13068436
    },
    {
      "t": "box",
      "n": "screen-bezel",
      "p": [
        0,
        1.18,
        0.415
      ],
      "s": [
        0.59,
        0.56,
        0.03
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "display",
      "p": [
        0,
        1.18,
        0.438
      ],
      "s": [
        0.48,
        0.45,
        0.018
      ],
      "c": 4951458
    },
    {
      "t": "box",
      "n": "control-panel",
      "p": [
        0,
        0.81,
        0.43
      ],
      "s": [
        0.66,
        0.16,
        0.18
      ],
      "c": 3749953,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "arcade-button-0",
      "p": [
        -0.19,
        0.89,
        0.52
      ],
      "s": [
        0.047,
        0.018,
        0.047
      ],
      "c": 14922843
    },
    {
      "t": "sphere",
      "n": "arcade-button-1",
      "p": [
        -0.05,
        0.89,
        0.52
      ],
      "s": [
        0.047,
        0.018,
        0.047
      ],
      "c": 9289628
    },
    {
      "t": "sphere",
      "n": "arcade-button-2",
      "p": [
        0.12,
        0.89,
        0.52
      ],
      "s": [
        0.047,
        0.018,
        0.047
      ],
      "c": 12544890
    },
    {
      "t": "rod",
      "n": "joystick",
      "from": [
        0.24,
        0.86,
        0.5
      ],
      "to": [
        0.24,
        1.01,
        0.5
      ],
      "r": 0.022,
      "c": 3160899
    },
    {
      "t": "sphere",
      "n": "joystick-top",
      "p": [
        0.24,
        1.03,
        0.5
      ],
      "s": [
        0.06,
        0.06,
        0.06
      ],
      "c": 15316065
    },
    {
      "t": "box",
      "n": "coin-door",
      "p": [
        0,
        0.34,
        0.395
      ],
      "s": [
        0.32,
        0.31,
        0.026
      ],
      "c": 3160899
    },
    {
      "t": "box",
      "n": "slot",
      "p": [
        0,
        0.43,
        0.413
      ],
      "s": [
        0.18,
        0.016,
        0.015
      ],
      "c": 9411998
    }
  ]
});
}
