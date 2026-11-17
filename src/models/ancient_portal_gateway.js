import { buildRecipe } from './recipe_engine.js';

/** Ancient Portal Gateway: source-editable 3D Worlds asset, Y-up, meters. */
export function createAncientPortalGateway() {
  return buildRecipe({
  "title": "Ancient Portal Gateway",
  "dimensions": [
    2.58,
    3.64,
    0.71
  ],
  "parts": [
    {
      "t": "box",
      "n": "stone-foundation",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        2.58,
        0.32,
        0.7
      ],
      "c": 5924983
    },
    {
      "t": "box",
      "n": "standing-pillar-0",
      "p": [
        -1.05,
        1.73,
        0
      ],
      "s": [
        0.38,
        3.15,
        0.57
      ],
      "c": 5465715
    },
    {
      "t": "box",
      "n": "standing-pillar-1",
      "p": [
        1.05,
        1.73,
        0
      ],
      "s": [
        0.38,
        3.15,
        0.57
      ],
      "c": 5465715
    },
    {
      "t": "box",
      "n": "top-capstone",
      "p": [
        0,
        3.42,
        0
      ],
      "s": [
        2.58,
        0.43,
        0.71
      ],
      "c": 5924983
    },
    {
      "t": "torus",
      "n": "power-ring",
      "p": [
        0,
        1.82,
        0
      ],
      "s": [
        2.9,
        3.65,
        0.22
      ],
      "c": 5680057
    },
    {
      "t": "sphere",
      "n": "portal-surface",
      "p": [
        0,
        1.81,
        0
      ],
      "s": [
        0.92,
        1.37,
        0.054
      ],
      "c": 3308433
    },
    {
      "t": "torus",
      "n": "inner-trim",
      "p": [
        0,
        1.82,
        0.1
      ],
      "s": [
        2.56,
        3.3,
        0.19
      ],
      "c": 8636353
    },
    {
      "t": "box",
      "n": "lower-rune-0",
      "p": [
        -0.77,
        0.53,
        0.39
      ],
      "s": [
        0.12,
        0.29,
        0.012
      ],
      "c": 10601913
    },
    {
      "t": "box",
      "n": "lower-rune-1",
      "p": [
        0.77,
        0.53,
        0.39
      ],
      "s": [
        0.12,
        0.29,
        0.012
      ],
      "c": 10601913
    },
    {
      "t": "sphere",
      "n": "portal-particle-0",
      "p": [
        -0.45,
        1.47,
        0.076
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9165772
    },
    {
      "t": "sphere",
      "n": "portal-particle-1",
      "p": [
        -0.19,
        1.94,
        0.076
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9165772
    },
    {
      "t": "sphere",
      "n": "portal-particle-2",
      "p": [
        0.07,
        1.47,
        0.076
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9165772
    },
    {
      "t": "sphere",
      "n": "portal-particle-3",
      "p": [
        0.33,
        1.94,
        0.076
      ],
      "s": [
        0.06,
        0.1,
        0.012
      ],
      "c": 9165772
    }
  ]
});
}
