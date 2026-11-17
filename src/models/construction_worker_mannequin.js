import { buildRecipe } from './recipe_engine.js';

/** Original authored Construction Worker Mannequin / 建筑工人人物原型; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "characters.construction-worker-mannequin.001",
  "slug": "construction-worker-mannequin",
  "title": "Construction Worker Mannequin",
  "title_zh": "建筑工人人物原型",
  "summary": "Unrigged worker with hardhat, reflective vest, utility belt and protective boots.",
  "category": "characters",
  "tags": [
    "worker",
    "construction",
    "helmet",
    "character"
  ],
  "dimensions_m": [
    0.92,
    1.93,
    0.64
  ],
  "generator": "createConstructionWorkerMannequin",
  "source_path": "src/models/construction_worker_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/construction-worker-mannequin.webp"
};
export function createConstructionWorkerMannequin() {
  return buildRecipe({
  "title": "Construction Worker Mannequin",
  "dimensions": [
    0.92,
    1.93,
    0.64
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "body",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        0.55,
        0.7,
        0.39
      ],
      "c": 5400440
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.7,
        0
      ],
      "s": [
        0.33,
        0.33,
        0.29
      ],
      "c": 13413003
    },
    {
      "t": "cylinder",
      "n": "hardhat-dome",
      "p": [
        0,
        1.88,
        0
      ],
      "s": [
        0.43,
        0.17,
        0.43
      ],
      "c": 15055184
    },
    {
      "t": "cylinder",
      "n": "hardhat-brim",
      "p": [
        0,
        1.82,
        0
      ],
      "s": [
        0.51,
        0.04,
        0.45
      ],
      "c": 13805122
    },
    {
      "t": "box",
      "n": "safety-vest",
      "p": [
        0,
        1.2,
        0.21
      ],
      "s": [
        0.49,
        0.58,
        0.065
      ],
      "c": 14920278
    },
    {
      "t": "box",
      "n": "reflective-strip-0",
      "p": [
        -0.17,
        1.2,
        0.25
      ],
      "s": [
        0.06,
        0.45,
        0.017
      ],
      "c": 16116153
    },
    {
      "t": "box",
      "n": "reflective-strip-1",
      "p": [
        0.17,
        1.2,
        0.25
      ],
      "s": [
        0.06,
        0.45,
        0.017
      ],
      "c": 16116153
    },
    {
      "t": "box",
      "n": "tool-belt",
      "p": [
        0,
        0.89,
        0.03
      ],
      "s": [
        0.58,
        0.13,
        0.44
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "arm-0",
      "from": [
        -0.35,
        1.35,
        0
      ],
      "to": [
        -0.41,
        0.92,
        0.01
      ],
      "r": 0.112,
      "c": 5400440
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.42,
        0.86,
        0.02
      ],
      "s": [
        0.12,
        0.1,
        0.12
      ],
      "c": 13346699
    },
    {
      "t": "rod",
      "n": "trouser-0",
      "from": [
        -0.17,
        0.83,
        0
      ],
      "to": [
        -0.2,
        0.19,
        0.02
      ],
      "r": 0.14,
      "c": 6716031
    },
    {
      "t": "box",
      "n": "boot-0",
      "p": [
        -0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.3
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "arm-1",
      "from": [
        0.35,
        1.35,
        0
      ],
      "to": [
        0.41,
        0.92,
        0.01
      ],
      "r": 0.112,
      "c": 5400440
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.42,
        0.86,
        0.02
      ],
      "s": [
        0.12,
        0.1,
        0.12
      ],
      "c": 13346699
    },
    {
      "t": "rod",
      "n": "trouser-1",
      "from": [
        0.17,
        0.83,
        0
      ],
      "to": [
        0.2,
        0.19,
        0.02
      ],
      "r": 0.14,
      "c": 6716031
    },
    {
      "t": "box",
      "n": "boot-1",
      "p": [
        0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.3
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "utility-pouch",
      "p": [
        0.3,
        0.83,
        0.15
      ],
      "s": [
        0.15,
        0.21,
        0.17
      ],
      "c": 10318932
    }
  ]
});
}
