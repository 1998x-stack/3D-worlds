import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Archaeological Field Surveyor / 考古测绘员人物. */
export const assetMeta = {
  "id": "characters.archaeological-field-surveyor.001",
  "slug": "archaeological-field-surveyor",
  "title": "Archaeological Field Surveyor",
  "title_zh": "考古测绘员人物",
  "summary": "Unrigged archaeology field worker with trowel, measuring rod and excavation satchel",
  "category": "characters",
  "tags": [
    "archaeological",
    "field",
    "surveyor",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.15,
    1.92,
    0.91
  ],
  "generator": "createArchaeologicalFieldSurveyor",
  "source_path": "src/models/archaeological_field_surveyor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/archaeological-field-surveyor.webp",
  "accent": "#e3b98d"
};
export function createArchaeologicalFieldSurveyor() { return buildRecipe({
  "title": "Archaeological Field Surveyor",
  "dimensions": [
    1.15,
    1.92,
    0.91
  ],
  "parts": [
    {
      "t": "box",
      "n": "workwear-torso",
      "p": [
        0,
        1.19,
        0
      ],
      "s": [
        0.53,
        0.69,
        0.31
      ],
      "c": 7511442
    },
    {
      "t": "sphere",
      "n": "face-and-skull",
      "p": [
        0,
        1.77,
        0
      ],
      "s": [
        0.22,
        0.24,
        0.21
      ],
      "c": 15784124
    },
    {
      "t": "cylinder",
      "n": "neck-joint",
      "p": [
        0,
        1.55,
        0
      ],
      "s": [
        0.12,
        0.15,
        0.12
      ],
      "c": 15784124
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.28,
        1.44,
        0
      ],
      "to": [
        -0.38,
        1.03,
        0.09
      ],
      "r": 0.075,
      "c": 7511442
    },
    {
      "t": "rod",
      "n": "forearm--1",
      "from": [
        -0.38,
        1.03,
        0.09
      ],
      "to": [
        -0.43,
        0.78,
        0.29
      ],
      "r": 0.066,
      "c": 15784124
    },
    {
      "t": "rod",
      "n": "upper-leg--1",
      "from": [
        -0.15,
        0.89,
        0
      ],
      "to": [
        -0.17,
        0.49,
        0.02
      ],
      "r": 0.103,
      "c": 14924173
    },
    {
      "t": "rod",
      "n": "lower-leg--1",
      "from": [
        -0.17,
        0.49,
        0.02
      ],
      "to": [
        -0.18,
        0.12,
        0.07
      ],
      "r": 0.082,
      "c": 14924173
    },
    {
      "t": "box",
      "n": "work-boot--1",
      "p": [
        -0.18,
        0.065,
        0.13
      ],
      "s": [
        0.21,
        0.13,
        0.33
      ],
      "c": 3953251
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.28,
        1.44,
        0
      ],
      "to": [
        0.38,
        1.03,
        0.09
      ],
      "r": 0.075,
      "c": 7511442
    },
    {
      "t": "rod",
      "n": "forearm-1",
      "from": [
        0.38,
        1.03,
        0.09
      ],
      "to": [
        0.43,
        0.78,
        0.29
      ],
      "r": 0.066,
      "c": 15784124
    },
    {
      "t": "rod",
      "n": "upper-leg-1",
      "from": [
        0.15,
        0.89,
        0
      ],
      "to": [
        0.17,
        0.49,
        0.02
      ],
      "r": 0.103,
      "c": 14924173
    },
    {
      "t": "rod",
      "n": "lower-leg-1",
      "from": [
        0.17,
        0.49,
        0.02
      ],
      "to": [
        0.18,
        0.12,
        0.07
      ],
      "r": 0.082,
      "c": 14924173
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.18,
        0.065,
        0.13
      ],
      "s": [
        0.21,
        0.13,
        0.33
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "badge-identifier",
      "p": [
        0.13,
        1.32,
        0.177
      ],
      "s": [
        0.15,
        0.1,
        0.024
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "sun-shield-field-hat",
      "p": [
        0,
        1.97,
        0
      ],
      "s": [
        0.54,
        0.08,
        0.54
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "artifact-transport-satchel",
      "p": [
        -0.38,
        0.77,
        0.29
      ],
      "s": [
        0.32,
        0.36,
        0.19
      ],
      "c": 3953251
    },
    {
      "t": "rod",
      "n": "archaeologist-measuring-pole",
      "from": [
        0.56,
        0.07,
        0.32
      ],
      "to": [
        0.56,
        1.46,
        0.32
      ],
      "r": 0.026,
      "c": 15784124
    },
    {
      "t": "box",
      "n": "excavation-hand-trowel",
      "p": [
        0.41,
        0.83,
        0.38
      ],
      "s": [
        0.1,
        0.35,
        0.05
      ],
      "c": 14924173
    },
    {
      "t": "box",
      "n": "measurement-tick-0",
      "p": [
        0.55,
        0.3,
        0.352
      ],
      "s": [
        0.05,
        0.017,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "measurement-tick-1",
      "p": [
        0.55,
        0.49,
        0.352
      ],
      "s": [
        0.05,
        0.017,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "measurement-tick-2",
      "p": [
        0.55,
        0.6799999999999999,
        0.352
      ],
      "s": [
        0.05,
        0.017,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "measurement-tick-3",
      "p": [
        0.55,
        0.8700000000000001,
        0.352
      ],
      "s": [
        0.05,
        0.017,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "measurement-tick-4",
      "p": [
        0.55,
        1.06,
        0.352
      ],
      "s": [
        0.05,
        0.017,
        0.013
      ],
      "c": 3953251
    },
    {
      "t": "box",
      "n": "surveyor-field-note",
      "p": [
        0.15,
        1.29,
        0.19
      ],
      "s": [
        0.2,
        0.16,
        0.021
      ],
      "c": 3953251
    }
  ]
}); }
