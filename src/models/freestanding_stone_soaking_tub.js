import { buildRecipe } from './recipe_engine.js';
/** Freestanding Stone Soaking Tub / 独立石材泡浴桶: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "bathroom.freestanding-stone-soaking-tub.001",
  "slug": "freestanding-stone-soaking-tub",
  "title": "Freestanding Stone Soaking Tub",
  "title_zh": "独立石材泡浴桶",
  "summary": "Oval stone immersion bathtub with rim, step and floor-mounted tap",
  "category": "bathroom",
  "tags": [
    "freestanding",
    "stone",
    "soaking",
    "tub",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.9,
    1.06,
    1.42
  ],
  "generator": "createFreestandingStoneSoakingTub",
  "source_path": "src/models/freestanding_stone_soaking_tub.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/freestanding-stone-soaking-tub.webp",
  "accent": "#d6b9a3"
};
export function createFreestandingStoneSoakingTub() { return buildRecipe({
  "title": "Freestanding Stone Soaking Tub",
  "dimensions": [
    1.9,
    1.06,
    1.42
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "stone-tub-shell",
      "p": [
        0,
        0.56,
        0
      ],
      "s": [
        0.9,
        0.44,
        0.65
      ],
      "c": 14148581
    },
    {
      "t": "sphere",
      "n": "stone-tub-inner",
      "p": [
        0,
        0.73,
        0
      ],
      "s": [
        0.75,
        0.11,
        0.53
      ],
      "c": 3357255
    },
    {
      "t": "torus",
      "n": "rim-inlay",
      "p": [
        0,
        0.84,
        0
      ],
      "s": [
        2.23,
        0.1,
        1.55
      ],
      "c": 7309460,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "wood-entry-step",
      "p": [
        1,
        0.14,
        0.1
      ],
      "s": [
        0.48,
        0.24,
        0.64
      ],
      "c": 14072227
    },
    {
      "t": "rod",
      "n": "filler-stand",
      "from": [
        0.78,
        0.08,
        -0.45
      ],
      "to": [
        0.78,
        1,
        -0.45
      ],
      "r": 0.032,
      "c": 7309460
    },
    {
      "t": "rod",
      "n": "filler-spout",
      "from": [
        0.78,
        1,
        -0.45
      ],
      "to": [
        0.34,
        1,
        -0.45
      ],
      "r": 0.027,
      "c": 7309460
    },
    {
      "t": "sphere",
      "n": "stone-foot--0.62--0.45",
      "p": [
        -0.62,
        0.15,
        -0.45
      ],
      "s": [
        0.16,
        0.11,
        0.18
      ],
      "c": 14148581
    },
    {
      "t": "sphere",
      "n": "stone-foot--0.62-0.45",
      "p": [
        -0.62,
        0.15,
        0.45
      ],
      "s": [
        0.16,
        0.11,
        0.18
      ],
      "c": 14148581
    },
    {
      "t": "sphere",
      "n": "stone-foot-0.62--0.45",
      "p": [
        0.62,
        0.15,
        -0.45
      ],
      "s": [
        0.16,
        0.11,
        0.18
      ],
      "c": 14148581
    },
    {
      "t": "sphere",
      "n": "stone-foot-0.62-0.45",
      "p": [
        0.62,
        0.15,
        0.45
      ],
      "s": [
        0.16,
        0.11,
        0.18
      ],
      "c": 14148581
    },
    {
      "t": "cylinder",
      "n": "plug-fitting",
      "p": [
        0,
        0.78,
        0.12
      ],
      "s": [
        0.1,
        0.025,
        0.1
      ],
      "c": 7309460
    }
  ]
}); }
