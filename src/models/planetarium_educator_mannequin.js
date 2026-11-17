import { buildRecipe } from './recipe_engine.js';
/** Planetarium Educator Mannequin / 天文馆讲解员人物原型: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "characters.planetarium-educator-mannequin.001",
  "slug": "planetarium-educator-mannequin",
  "title": "Planetarium Educator Mannequin",
  "title_zh": "天文馆讲解员人物原型",
  "summary": "Unrigged science educator with pointer, star chart and lecture badge",
  "category": "characters",
  "tags": [
    "planetarium",
    "educator",
    "mannequin",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.04,
    1.95,
    0.76
  ],
  "generator": "createPlanetariumEducatorMannequin",
  "source_path": "src/models/planetarium_educator_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/planetarium-educator-mannequin.webp",
  "accent": "#e6d6c7"
};
export function createPlanetariumEducatorMannequin() { return buildRecipe({
  "title": "Planetarium Educator Mannequin",
  "dimensions": [
    1.04,
    1.95,
    0.76
  ],
  "parts": [
    {
      "t": "box",
      "n": "body-torso",
      "p": [
        0,
        1.18,
        0
      ],
      "s": [
        0.51,
        0.63,
        0.3
      ],
      "c": 7115909
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.77,
        0
      ],
      "s": [
        0.19,
        0.21,
        0.18
      ],
      "c": 15128263
    },
    {
      "t": "cylinder",
      "n": "neck",
      "p": [
        0,
        1.57,
        0
      ],
      "s": [
        0.11,
        0.18,
        0.11
      ],
      "c": 15128263
    },
    {
      "t": "rod",
      "n": "upper-arm--1",
      "from": [
        -0.28,
        1.42,
        0
      ],
      "to": [
        -0.36,
        0.94,
        0.1
      ],
      "r": 0.083,
      "c": 7115909
    },
    {
      "t": "rod",
      "n": "lower-arm--1",
      "from": [
        -0.36,
        0.94,
        0.1
      ],
      "to": [
        -0.39,
        0.77,
        0.3
      ],
      "r": 0.06,
      "c": 15128263
    },
    {
      "t": "rod",
      "n": "thigh--1",
      "from": [
        -0.16,
        0.89,
        0
      ],
      "to": [
        -0.16,
        0.5,
        0
      ],
      "r": 0.11,
      "c": 15317624
    },
    {
      "t": "rod",
      "n": "shin--1",
      "from": [
        -0.16,
        0.5,
        0
      ],
      "to": [
        -0.19,
        0.11,
        0.07
      ],
      "r": 0.085,
      "c": 15317624
    },
    {
      "t": "box",
      "n": "shoe--1",
      "p": [
        -0.19,
        0.075,
        0.14
      ],
      "s": [
        0.2,
        0.11,
        0.36
      ],
      "c": 3490907
    },
    {
      "t": "rod",
      "n": "upper-arm-1",
      "from": [
        0.28,
        1.42,
        0
      ],
      "to": [
        0.36,
        0.94,
        0.1
      ],
      "r": 0.083,
      "c": 7115909
    },
    {
      "t": "rod",
      "n": "lower-arm-1",
      "from": [
        0.36,
        0.94,
        0.1
      ],
      "to": [
        0.39,
        0.77,
        0.3
      ],
      "r": 0.06,
      "c": 15128263
    },
    {
      "t": "rod",
      "n": "thigh-1",
      "from": [
        0.16,
        0.89,
        0
      ],
      "to": [
        0.16,
        0.5,
        0
      ],
      "r": 0.11,
      "c": 15317624
    },
    {
      "t": "rod",
      "n": "shin-1",
      "from": [
        0.16,
        0.5,
        0
      ],
      "to": [
        0.19,
        0.11,
        0.07
      ],
      "r": 0.085,
      "c": 15317624
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.19,
        0.075,
        0.14
      ],
      "s": [
        0.2,
        0.11,
        0.36
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "field-vest-badge",
      "p": [
        0.13,
        1.28,
        0.171
      ],
      "s": [
        0.16,
        0.09,
        0.022
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "vest-pocket-0",
      "p": [
        -0.17,
        1.12,
        0.18
      ],
      "s": [
        0.12,
        0.13,
        0.036
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "vest-pocket-1",
      "p": [
        0,
        1.12,
        0.18
      ],
      "s": [
        0.12,
        0.13,
        0.036
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "vest-pocket-2",
      "p": [
        0.17,
        1.12,
        0.18
      ],
      "s": [
        0.12,
        0.13,
        0.036
      ],
      "c": 3490907
    },
    {
      "t": "rod",
      "n": "laser-pointer",
      "from": [
        0.45,
        0.83,
        0.31
      ],
      "to": [
        0.75,
        1.37,
        0.5
      ],
      "r": 0.02,
      "c": 3490907
    },
    {
      "t": "box",
      "n": "star-chart-card",
      "p": [
        -0.39,
        0.92,
        0.33
      ],
      "s": [
        0.41,
        0.26,
        0.03
      ],
      "c": 15317624
    },
    {
      "t": "sphere",
      "n": "constellation-dot-0",
      "p": [
        -0.55,
        0.97,
        0.351
      ],
      "s": [
        0.015,
        0.015,
        0.014
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "constellation-dot-1",
      "p": [
        -0.49000000000000005,
        1.03,
        0.351
      ],
      "s": [
        0.015,
        0.015,
        0.014
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "constellation-dot-2",
      "p": [
        -0.43000000000000005,
        1.0899999999999999,
        0.351
      ],
      "s": [
        0.015,
        0.015,
        0.014
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "constellation-dot-3",
      "p": [
        -0.37000000000000005,
        0.97,
        0.351
      ],
      "s": [
        0.015,
        0.015,
        0.014
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "constellation-dot-4",
      "p": [
        -0.31000000000000005,
        1.03,
        0.351
      ],
      "s": [
        0.015,
        0.015,
        0.014
      ],
      "c": 3490907
    },
    {
      "t": "sphere",
      "n": "constellation-dot-5",
      "p": [
        -0.25000000000000006,
        1.0899999999999999,
        0.351
      ],
      "s": [
        0.015,
        0.015,
        0.014
      ],
      "c": 3490907
    },
    {
      "t": "box",
      "n": "lanyard",
      "p": [
        0,
        1.37,
        0.192
      ],
      "s": [
        0.075,
        0.25,
        0.015
      ],
      "c": 15128263
    },
    {
      "t": "sphere",
      "n": "planetarium-cap",
      "p": [
        0,
        1.96,
        0
      ],
      "s": [
        0.22,
        0.05,
        0.2
      ],
      "c": 15317624
    }
  ]
}); }
