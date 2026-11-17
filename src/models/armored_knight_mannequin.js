import { buildRecipe } from './recipe_engine.js';

/** Armored Knight Mannequin: original stylized scene prop, Y-up, grounded in meters. */
export function createArmoredKnightMannequin() {
  return buildRecipe({
  "title": "Armored Knight Mannequin",
  "dimensions": [
    0.88,
    1.89,
    0.5
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "torso-armor",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        0.55,
        0.72,
        0.36
      ],
      "c": 9148058
    },
    {
      "t": "sphere",
      "n": "helmet",
      "p": [
        0,
        1.67,
        0
      ],
      "s": [
        0.39,
        0.37,
        0.34
      ],
      "c": 12107712
    },
    {
      "t": "box",
      "n": "visor-slit",
      "p": [
        0,
        1.65,
        0.32
      ],
      "s": [
        0.3,
        0.055,
        0.022
      ],
      "c": 3488579
    },
    {
      "t": "box",
      "n": "chest-crest",
      "p": [
        0,
        1.22,
        0.205
      ],
      "s": [
        0.24,
        0.3,
        0.035
      ],
      "c": 13149804
    },
    {
      "t": "sphere",
      "n": "pauldron-0",
      "p": [
        -0.34,
        1.39,
        0
      ],
      "s": [
        0.29,
        0.2,
        0.28
      ],
      "c": 11187639
    },
    {
      "t": "rod",
      "n": "gauntlet-arm-0",
      "from": [
        -0.38,
        1.28,
        0
      ],
      "to": [
        -0.37,
        0.81,
        0
      ],
      "r": 0.095,
      "c": 9608610
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.38,
        0.75,
        0
      ],
      "s": [
        0.11,
        0.11,
        0.1
      ],
      "c": 12042177
    },
    {
      "t": "rod",
      "n": "greave-0",
      "from": [
        -0.17,
        0.81,
        0
      ],
      "to": [
        -0.18,
        0.21,
        0
      ],
      "r": 0.12,
      "c": 10201257
    },
    {
      "t": "box",
      "n": "sabaton-0",
      "p": [
        -0.18,
        0.105,
        0.12
      ],
      "s": [
        0.27,
        0.2,
        0.33
      ],
      "c": 7306880
    },
    {
      "t": "sphere",
      "n": "pauldron-1",
      "p": [
        0.34,
        1.39,
        0
      ],
      "s": [
        0.29,
        0.2,
        0.28
      ],
      "c": 11187639
    },
    {
      "t": "rod",
      "n": "gauntlet-arm-1",
      "from": [
        0.38,
        1.28,
        0
      ],
      "to": [
        0.37,
        0.81,
        0
      ],
      "r": 0.095,
      "c": 9608610
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.38,
        0.75,
        0
      ],
      "s": [
        0.11,
        0.11,
        0.1
      ],
      "c": 12042177
    },
    {
      "t": "rod",
      "n": "greave-1",
      "from": [
        0.17,
        0.81,
        0
      ],
      "to": [
        0.18,
        0.21,
        0
      ],
      "r": 0.12,
      "c": 10201257
    },
    {
      "t": "box",
      "n": "sabaton-1",
      "p": [
        0.18,
        0.105,
        0.12
      ],
      "s": [
        0.27,
        0.2,
        0.33
      ],
      "c": 7306880
    },
    {
      "t": "box",
      "n": "waist-belt",
      "p": [
        0,
        0.91,
        0.01
      ],
      "s": [
        0.56,
        0.12,
        0.38
      ],
      "c": 6840150
    },
    {
      "t": "box",
      "n": "belt-buckle",
      "p": [
        0,
        0.92,
        0.215
      ],
      "s": [
        0.12,
        0.09,
        0.025
      ],
      "c": 14727800
    }
  ]
});
}
