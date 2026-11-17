import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Forest Fire Lookout Ranger / 森林火情瞭望员人物. */
export const assetMeta = {
  "id": "characters.forest-fire-lookout-ranger.001",
  "slug": "forest-fire-lookout-ranger",
  "title": "Forest Fire Lookout Ranger",
  "title_zh": "森林火情瞭望员人物",
  "summary": "Unrigged forest safety ranger with binoculars, high visibility vest and field radio",
  "category": "characters",
  "tags": [
    "forest",
    "fire",
    "lookout",
    "ranger",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.14,
    2.06,
    0.93
  ],
  "generator": "createForestFireLookoutRanger",
  "source_path": "src/models/forest_fire_lookout_ranger.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/forest-fire-lookout-ranger.webp",
  "accent": "#dbad85"
};
export function createForestFireLookoutRanger() { return buildRecipe({
  "title": "Forest Fire Lookout Ranger",
  "dimensions": [
    1.14,
    2.06,
    0.93
  ],
  "parts": [
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-specialist-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.49,
        0.71,
        0.31
      ],
      "c": 7050634
    },
    {
      "t": "sphere",
      "n": "forest-fire-lookout-ranger-specialist-face",
      "p": [
        0,
        1.79,
        0
      ],
      "s": [
        0.24,
        0.25,
        0.21
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "forest-fire-lookout-ranger-neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-work-arm-upper--1",
      "from": [
        -0.28,
        1.43,
        0
      ],
      "to": [
        -0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-work-forearm--1",
      "from": [
        -0.37,
        1.04,
        0.06
      ],
      "to": [
        -0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-trouser-upper-leg--1",
      "from": [
        -0.14,
        0.89,
        0
      ],
      "to": [
        -0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-trouser-lower-leg--1",
      "from": [
        -0.16,
        0.48,
        0.04
      ],
      "to": [
        -0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-work-safety-boot--1",
      "p": [
        -0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-work-arm-upper-1",
      "from": [
        0.28,
        1.43,
        0
      ],
      "to": [
        0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-work-forearm-1",
      "from": [
        0.37,
        1.04,
        0.06
      ],
      "to": [
        0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-trouser-upper-leg-1",
      "from": [
        0.14,
        0.89,
        0
      ],
      "to": [
        0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "forest-fire-lookout-ranger-trouser-lower-leg-1",
      "from": [
        0.16,
        0.48,
        0.04
      ],
      "to": [
        0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-work-safety-boot-1",
      "p": [
        0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "sphere",
      "n": "forest-fire-lookout-ranger-forest-ranger-hardhat",
      "p": [
        0,
        2,
        0
      ],
      "s": [
        0.49,
        0.14,
        0.44
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-ranger-protective-vest",
      "p": [
        0,
        1.2,
        0.18
      ],
      "s": [
        0.45,
        0.51,
        0.05
      ],
      "c": 15385181
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-forest-observation-binoculars",
      "p": [
        0.46,
        0.83,
        0.38
      ],
      "s": [
        0.29,
        0.17,
        0.19
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-forest-emergency-radio",
      "p": [
        0.35,
        1.4,
        0.2
      ],
      "s": [
        0.17,
        0.23,
        0.1
      ],
      "c": 14396805
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-reflective-fire-ranger-stripe-0",
      "p": [
        -0.19,
        1.2,
        0.216
      ],
      "s": [
        0.05,
        0.04,
        0.018
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-reflective-fire-ranger-stripe-1",
      "p": [
        -0.09,
        1.2,
        0.216
      ],
      "s": [
        0.05,
        0.04,
        0.018
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-reflective-fire-ranger-stripe-2",
      "p": [
        0.010000000000000009,
        1.2,
        0.216
      ],
      "s": [
        0.05,
        0.04,
        0.018
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-reflective-fire-ranger-stripe-3",
      "p": [
        0.11000000000000004,
        1.2,
        0.216
      ],
      "s": [
        0.05,
        0.04,
        0.018
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "forest-fire-lookout-ranger-reflective-fire-ranger-stripe-4",
      "p": [
        0.21000000000000002,
        1.2,
        0.216
      ],
      "s": [
        0.05,
        0.04,
        0.018
      ],
      "c": 3756393
    }
  ]
}); }
