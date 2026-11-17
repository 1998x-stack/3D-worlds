import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Beach Volleyball Referee Stand / 沙滩排球裁判高台. */
export const assetMeta = {
  "id": "sports.beach-volleyball-referee-stand.001",
  "slug": "beach-volleyball-referee-stand",
  "title": "Beach Volleyball Referee Stand",
  "title_zh": "沙滩排球裁判高台",
  "summary": "Elevated referee stand beside volleyball net with ladder, seat and score placards",
  "category": "sports",
  "tags": [
    "beach",
    "volleyball",
    "referee",
    "stand",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    2.75,
    1.45
  ],
  "generator": "createBeachVolleyballRefereeStand",
  "source_path": "src/models/beach_volleyball_referee_stand.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/beach-volleyball-referee-stand.webp",
  "accent": "#eac47d"
};
export function createBeachVolleyballRefereeStand() { return buildRecipe({
  "title": "Beach Volleyball Referee Stand",
  "dimensions": [
    1.65,
    2.75,
    1.45
  ],
  "parts": [
    {
      "t": "box",
      "n": "volleyball-referee-platform",
      "p": [
        0,
        1.77,
        0
      ],
      "s": [
        1.15,
        0.16,
        0.85
      ],
      "c": 6134955
    },
    {
      "t": "rod",
      "n": "referee-stand-leg--1--0.34",
      "from": [
        -0.49,
        0.05,
        -0.34
      ],
      "to": [
        -0.49,
        1.77,
        -0.34
      ],
      "r": 0.056,
      "c": 15385725
    },
    {
      "t": "rod",
      "n": "referee-stand-leg--1-0.34",
      "from": [
        -0.49,
        0.05,
        0.34
      ],
      "to": [
        -0.49,
        1.77,
        0.34
      ],
      "r": 0.056,
      "c": 15385725
    },
    {
      "t": "rod",
      "n": "referee-stand-leg-1--0.34",
      "from": [
        0.49,
        0.05,
        -0.34
      ],
      "to": [
        0.49,
        1.77,
        -0.34
      ],
      "r": 0.056,
      "c": 15385725
    },
    {
      "t": "rod",
      "n": "referee-stand-leg-1-0.34",
      "from": [
        0.49,
        0.05,
        0.34
      ],
      "to": [
        0.49,
        1.77,
        0.34
      ],
      "r": 0.056,
      "c": 15385725
    },
    {
      "t": "box",
      "n": "referee-high-seat",
      "p": [
        0,
        2.13,
        -0.2
      ],
      "s": [
        0.54,
        0.17,
        0.43
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "seat-back-support",
      "p": [
        0,
        2.47,
        -0.43
      ],
      "s": [
        0.54,
        0.46,
        0.09
      ],
      "c": 15385725
    },
    {
      "t": "box",
      "n": "referee-access-step-0",
      "p": [
        0.58,
        0.27,
        0.41
      ],
      "s": [
        0.43,
        0.06,
        0.17
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "referee-access-step-1",
      "p": [
        0.58,
        0.52,
        0.41
      ],
      "s": [
        0.43,
        0.06,
        0.17
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "referee-access-step-2",
      "p": [
        0.58,
        0.77,
        0.41
      ],
      "s": [
        0.43,
        0.06,
        0.17
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "referee-access-step-3",
      "p": [
        0.58,
        1.02,
        0.41
      ],
      "s": [
        0.43,
        0.06,
        0.17
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "referee-access-step-4",
      "p": [
        0.58,
        1.27,
        0.41
      ],
      "s": [
        0.43,
        0.06,
        0.17
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "referee-access-step-5",
      "p": [
        0.58,
        1.52,
        0.41
      ],
      "s": [
        0.43,
        0.06,
        0.17
      ],
      "c": 3954800
    },
    {
      "t": "rod",
      "n": "referee-side-handrail--1",
      "from": [
        -0.58,
        1.77,
        -0.48
      ],
      "to": [
        -0.58,
        2.58,
        0.36
      ],
      "r": 0.034,
      "c": 14213084
    },
    {
      "t": "rod",
      "n": "referee-side-handrail-1",
      "from": [
        0.58,
        1.77,
        -0.48
      ],
      "to": [
        0.58,
        2.58,
        0.36
      ],
      "r": 0.034,
      "c": 14213084
    },
    {
      "t": "box",
      "n": "neutral-scoreboard",
      "p": [
        0,
        2.27,
        0.44
      ],
      "s": [
        0.7,
        0.29,
        0.04
      ],
      "c": 14213084
    },
    {
      "t": "box",
      "n": "score-digit-0",
      "p": [
        -0.23,
        2.27,
        0.467
      ],
      "s": [
        0.075,
        0.17,
        0.015
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "score-digit-1",
      "p": [
        -0.08000000000000002,
        2.27,
        0.467
      ],
      "s": [
        0.075,
        0.17,
        0.015
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "score-digit-2",
      "p": [
        0.06999999999999998,
        2.27,
        0.467
      ],
      "s": [
        0.075,
        0.17,
        0.015
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "score-digit-3",
      "p": [
        0.21999999999999995,
        2.27,
        0.467
      ],
      "s": [
        0.075,
        0.17,
        0.015
      ],
      "c": 3954800
    }
  ]
}); }
