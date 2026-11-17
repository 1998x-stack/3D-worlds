import { buildRecipe } from './recipe_engine.js';
/** Framed Mountain Landscape: individually authored procedural geometry. */
export const assetMeta = {
  "id": "decor.framed-mountain-landscape.001",
  "slug": "framed-mountain-landscape",
  "title": "Framed Mountain Landscape",
  "title_zh": "山水风景装饰画",
  "summary": "Wall art with timber frame, layered geometric mountain landscape and sun disc.",
  "category": "decor",
  "tags": [
    "painting",
    "landscape",
    "wall",
    "decor"
  ],
  "dimensions_m": [
    1.15,
    0.78,
    0.064
  ],
  "generator": "createFramedMountainLandscape",
  "source_path": "src/models/framed_mountain_landscape.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/framed-mountain-landscape.webp"
};
export function createFramedMountainLandscape() {
 return buildRecipe({
  "title": "Framed Mountain Landscape",
  "dimensions": [
    1.15,
    0.78,
    0.064
  ],
  "parts": [
    {
      "t": "box",
      "n": "art-board",
      "p": [
        0,
        0.39,
        0
      ],
      "s": [
        1.15,
        0.78,
        0.06
      ],
      "c": 11042392
    },
    {
      "t": "box",
      "n": "canvas",
      "p": [
        0,
        0.39,
        0.036
      ],
      "s": [
        1.02,
        0.66,
        0.01
      ],
      "c": 10993602
    },
    {
      "t": "box",
      "n": "sky-strip",
      "p": [
        0,
        0.59,
        0.043
      ],
      "s": [
        0.98,
        0.18,
        0.008
      ],
      "c": 8366013
    },
    {
      "t": "box",
      "n": "far-mountain",
      "p": [
        -0.27,
        0.39,
        0.05
      ],
      "s": [
        0.59,
        0.28,
        0.01
      ],
      "c": 6785428,
      "rot": [
        0,
        0,
        -0.18
      ]
    },
    {
      "t": "box",
      "n": "near-mountain",
      "p": [
        0.22,
        0.26,
        0.052
      ],
      "s": [
        0.65,
        0.28,
        0.01
      ],
      "c": 4415336,
      "rot": [
        0,
        0,
        0.2
      ]
    },
    {
      "t": "box",
      "n": "lake",
      "p": [
        0,
        0.14,
        0.059
      ],
      "s": [
        0.96,
        0.12,
        0.01
      ],
      "c": 10405826
    },
    {
      "t": "cylinder",
      "n": "setting-sun",
      "p": [
        0.25,
        0.55,
        0.056
      ],
      "s": [
        0.14,
        0.015,
        0.14
      ],
      "c": 14265202,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "frame-vertical-0",
      "p": [
        -0.55,
        0.39,
        0.058
      ],
      "s": [
        0.049,
        0.76,
        0.019
      ],
      "c": 6966583
    },
    {
      "t": "box",
      "n": "frame-vertical-1",
      "p": [
        0.55,
        0.39,
        0.058
      ],
      "s": [
        0.049,
        0.76,
        0.019
      ],
      "c": 6966583
    },
    {
      "t": "box",
      "n": "frame-horizontal-0",
      "p": [
        0,
        0.030000000000000027,
        0.058
      ],
      "s": [
        1.14,
        0.046,
        0.019
      ],
      "c": 6966583
    },
    {
      "t": "box",
      "n": "frame-horizontal-1",
      "p": [
        0,
        0.75,
        0.058
      ],
      "s": [
        1.14,
        0.046,
        0.019
      ],
      "c": 6966583
    }
  ]
});
}
