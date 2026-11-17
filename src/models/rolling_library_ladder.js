import { buildRecipe } from './recipe_engine.js';
/** Rolling Library Ladder — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "furniture.rolling-library-ladder.001",
  "slug": "rolling-library-ladder",
  "title": "Rolling Library Ladder",
  "title_zh": "图书馆滑轨木梯",
  "summary": "Angled walnut step ladder with sliding rail hooks and eight treads",
  "category": "furniture",
  "tags": [
    "library",
    "ladder",
    "bookcase"
  ],
  "dimensions_m": [
    0.69,
    2.52,
    0.86
  ],
  "generator": "createRollingLibraryLadder",
  "source_path": "src/models/rolling_library_ladder.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/rolling-library-ladder.webp"
};
export function createRollingLibraryLadder() { return buildRecipe({
  "title": "Rolling Library Ladder",
  "dimensions": [
    0.69,
    2.52,
    0.86
  ],
  "parts": [
    {
      "t": "rod",
      "n": "ladder-side-0",
      "from": [
        -0.26,
        0.08,
        0.35
      ],
      "to": [
        -0.26,
        2.43,
        -0.36
      ],
      "r": 0.046,
      "c": 9989443
    },
    {
      "t": "rod",
      "n": "back-support-0",
      "from": [
        -0.26,
        0.1,
        -0.4
      ],
      "to": [
        -0.26,
        2.43,
        -0.36
      ],
      "r": 0.027,
      "c": 9149339
    },
    {
      "t": "rod",
      "n": "ladder-side-1",
      "from": [
        0.26,
        0.08,
        0.35
      ],
      "to": [
        0.26,
        2.43,
        -0.36
      ],
      "r": 0.046,
      "c": 9989443
    },
    {
      "t": "rod",
      "n": "back-support-1",
      "from": [
        0.26,
        0.1,
        -0.4
      ],
      "to": [
        0.26,
        2.43,
        -0.36
      ],
      "r": 0.027,
      "c": 9149339
    },
    {
      "t": "box",
      "n": "ladder-step-0",
      "p": [
        0,
        0.34,
        0.23
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-1",
      "p": [
        0,
        0.6000000000000001,
        0.15700000000000003
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-2",
      "p": [
        0,
        0.8600000000000001,
        0.08400000000000002
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-3",
      "p": [
        0,
        1.12,
        0.011000000000000038
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-4",
      "p": [
        0,
        1.3800000000000001,
        -0.06199999999999997
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-5",
      "p": [
        0,
        1.6400000000000001,
        -0.13499999999999998
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-6",
      "p": [
        0,
        1.9000000000000001,
        -0.20799999999999993
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "box",
      "n": "ladder-step-7",
      "p": [
        0,
        2.16,
        -0.281
      ],
      "s": [
        0.57,
        0.06,
        0.2
      ],
      "c": 9989443
    },
    {
      "t": "rod",
      "n": "rolling-top-rail",
      "from": [
        -0.36,
        2.43,
        -0.39
      ],
      "to": [
        0.36,
        2.43,
        -0.39
      ],
      "r": 0.037,
      "c": 9149339
    },
    {
      "t": "cylinder",
      "n": "upper-caster-0",
      "p": [
        -0.25,
        2.48,
        -0.38
      ],
      "s": [
        0.13,
        0.055,
        0.13
      ],
      "c": 3357765,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "upper-caster-1",
      "p": [
        0.25,
        2.48,
        -0.38
      ],
      "s": [
        0.13,
        0.055,
        0.13
      ],
      "c": 3357765,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "non-slip-foot-0",
      "p": [
        -0.23,
        0.035,
        0.34
      ],
      "s": [
        0.09,
        0.07,
        0.12
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "non-slip-foot-1",
      "p": [
        0.23,
        0.035,
        0.34
      ],
      "s": [
        0.09,
        0.07,
        0.12
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "top-crest",
      "p": [
        0,
        2.44,
        -0.36
      ],
      "s": [
        0.65,
        0.08,
        0.09
      ],
      "c": 12755572
    }
  ]
}); }
