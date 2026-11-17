import { buildRecipe } from './recipe_engine.js';

/** Coastal Sailboat: original stylized asset; canonical dimensions in meters. */
export function createCoastalSailboat() {
  return buildRecipe({
  "title": "Coastal Sailboat",
  "dimensions": [
    1.42,
    4.15,
    3.64
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "hull",
      "p": [
        0,
        0.31,
        0
      ],
      "s": [
        0.68,
        0.34,
        1.72
      ],
      "c": 14739167
    },
    {
      "t": "box",
      "n": "deck",
      "p": [
        0,
        0.52,
        0
      ],
      "s": [
        1.24,
        0.09,
        3.2
      ],
      "c": 9727564
    },
    {
      "t": "rod",
      "n": "mast",
      "from": [
        0,
        0.53,
        -0.18
      ],
      "to": [
        0,
        4.15,
        -0.18
      ],
      "r": 0.05,
      "c": 3160899
    },
    {
      "t": "triangle",
      "n": "main-sail",
      "p": [
        0,
        0,
        0
      ],
      "vertices": [
        [
          0,
          3.9,
          -0.1
        ],
        [
          0,
          0.85,
          -0.1
        ],
        [
          0,
          0.85,
          1.44
        ]
      ],
      "c": 16051680
    },
    {
      "t": "triangle",
      "n": "jib-sail",
      "p": [
        0,
        0,
        0
      ],
      "vertices": [
        [
          0,
          3.08,
          -0.3
        ],
        [
          0,
          0.94,
          -1.3
        ],
        [
          0,
          0.94,
          -0.3
        ]
      ],
      "c": 12113115
    },
    {
      "t": "rod",
      "n": "boom",
      "from": [
        0,
        0.85,
        -0.14
      ],
      "to": [
        0,
        0.85,
        1.46
      ],
      "r": 0.033,
      "c": 9727564
    },
    {
      "t": "box",
      "n": "cabin",
      "p": [
        0,
        0.76,
        -0.48
      ],
      "s": [
        0.88,
        0.36,
        0.8
      ],
      "c": 9615037
    },
    {
      "t": "sphere",
      "n": "porthole-0",
      "p": [
        -0.32,
        0.78,
        -0.15
      ],
      "s": [
        0.13,
        0.12,
        0.022
      ],
      "c": 3761527
    },
    {
      "t": "sphere",
      "n": "porthole-1",
      "p": [
        0.32,
        0.78,
        -0.15
      ],
      "s": [
        0.13,
        0.12,
        0.022
      ],
      "c": 3761527
    },
    {
      "t": "box",
      "n": "rudder",
      "p": [
        0,
        0.26,
        -1.62
      ],
      "s": [
        0.14,
        0.34,
        0.32
      ],
      "c": 3160899
    }
  ]
});
}
