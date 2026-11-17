import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "sports.archery-practice-target.001",
  "slug": "archery-practice-target",
  "title": "Archery Practice Target",
  "title_zh": "射箭练习靶架",
  "summary": "Freestanding sport target butt with concentric colored scoring rings and A-frame supports; no bow or arrows",
  "category": "sports",
  "tags": [
    "archery",
    "target",
    "practice"
  ],
  "dimensions_m": [
    1.15,
    1.68,
    0.76
  ],
  "generator": "createArcheryPracticeTarget",
  "source_path": "src/models/archery_practice_target.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/archery-practice-target.webp"
};
export function createArcheryPracticeTarget() { return buildRecipe({
  "title": "Archery Practice Target",
  "dimensions": [
    1.15,
    1.68,
    0.76
  ],
  "parts": [
    {
      "t": "rod",
      "n": "A-stand-0",
      "from": [
        -0.38,
        0.1,
        0.28
      ],
      "to": [
        -0.2774,
        1.47,
        -0.17
      ],
      "r": 0.037,
      "c": 9596753
    },
    {
      "t": "rod",
      "n": "A-stand-1",
      "from": [
        0.38,
        0.1,
        0.28
      ],
      "to": [
        0.2774,
        1.47,
        -0.17
      ],
      "r": 0.037,
      "c": 9596753
    },
    {
      "t": "rod",
      "n": "crossbrace",
      "from": [
        -0.45,
        0.54,
        0.04
      ],
      "to": [
        0.45,
        0.54,
        0.04
      ],
      "r": 0.031,
      "c": 9741221
    },
    {
      "t": "cylinder",
      "n": "target-back",
      "p": [
        0,
        1.07,
        0.13
      ],
      "s": [
        0.89,
        0.12,
        0.89
      ],
      "c": 13744530,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "ring-black",
      "p": [
        0,
        1.07,
        0.205
      ],
      "s": [
        0.76,
        0.013,
        0.76
      ],
      "c": 3490634,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "ring-blue",
      "p": [
        0,
        1.07,
        0.223
      ],
      "s": [
        0.58,
        0.012,
        0.58
      ],
      "c": 6590124,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "ring-red",
      "p": [
        0,
        1.07,
        0.24
      ],
      "s": [
        0.4,
        0.011,
        0.4
      ],
      "c": 12148566,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "bullseye",
      "p": [
        0,
        1.07,
        0.252
      ],
      "s": [
        0.18,
        0.011,
        0.18
      ],
      "c": 15058538,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "anchor-foot-0",
      "p": [
        -0.4,
        0.06,
        -0.23
      ],
      "s": [
        0.17,
        0.12,
        0.36
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "anchor-foot-1",
      "p": [
        0.4,
        0.06,
        -0.23
      ],
      "s": [
        0.17,
        0.12,
        0.36
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "score-mark-0",
      "p": [
        -0.26,
        0.76,
        0.225
      ],
      "s": [
        0.024,
        0.025,
        0.011
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "score-mark-1",
      "p": [
        0,
        0.76,
        0.225
      ],
      "s": [
        0.024,
        0.025,
        0.011
      ],
      "c": 15133152
    },
    {
      "t": "box",
      "n": "score-mark-2",
      "p": [
        0.26,
        0.76,
        0.225
      ],
      "s": [
        0.024,
        0.025,
        0.011
      ],
      "c": 15133152
    }
  ]
}); }
