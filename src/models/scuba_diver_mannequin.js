import { buildRecipe } from './recipe_engine.js';
/** Scuba Diver Mannequin — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "characters.scuba-diver-mannequin.001",
  "slug": "scuba-diver-mannequin",
  "title": "Scuba Diver Mannequin",
  "title_zh": "潜水员人物原型",
  "summary": "Unrigged scuba diver with mask, tank, flippers, weighted belt and air hoses",
  "category": "characters",
  "tags": [
    "diver",
    "marine",
    "character"
  ],
  "dimensions_m": [
    1.2,
    1.92,
    0.72
  ],
  "generator": "createScubaDiverMannequin",
  "source_path": "src/models/scuba_diver_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/scuba-diver-mannequin.webp"
};
export function createScubaDiverMannequin() { return buildRecipe({
  "title": "Scuba Diver Mannequin",
  "dimensions": [
    1.2,
    1.92,
    0.72
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "wetsuit-torso",
      "p": [
        0,
        1.16,
        0
      ],
      "s": [
        0.55,
        0.68,
        0.4
      ],
      "c": 4283757
    },
    {
      "t": "sphere",
      "n": "hood",
      "p": [
        0,
        1.66,
        0
      ],
      "s": [
        0.35,
        0.35,
        0.32
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "mask-glass",
      "p": [
        0,
        1.67,
        0.318
      ],
      "s": [
        0.42,
        0.2,
        0.045
      ],
      "c": 6789547
    },
    {
      "t": "cylinder",
      "n": "oxygen-bottle",
      "p": [
        0,
        1.12,
        -0.32
      ],
      "s": [
        0.28,
        0.81,
        0.26
      ],
      "c": 9149339
    },
    {
      "t": "rod",
      "n": "breathing-hose",
      "from": [
        0.15,
        1.49,
        -0.25
      ],
      "to": [
        0.23,
        1.58,
        0.28
      ],
      "r": 0.02,
      "c": 3357765
    },
    {
      "t": "box",
      "n": "weight-belt",
      "p": [
        0,
        0.9,
        0
      ],
      "s": [
        0.57,
        0.12,
        0.43
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "suit-arm-0",
      "from": [
        -0.32,
        1.38,
        0
      ],
      "to": [
        -0.43,
        0.91,
        0.02
      ],
      "r": 0.115,
      "c": 4283757
    },
    {
      "t": "sphere",
      "n": "dive-glove-0",
      "p": [
        -0.45,
        0.85,
        0.04
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "suit-leg-0",
      "from": [
        -0.18,
        0.83,
        0
      ],
      "to": [
        -0.2,
        0.23,
        0
      ],
      "r": 0.135,
      "c": 4283757
    },
    {
      "t": "box",
      "n": "flipper-0",
      "p": [
        -0.2,
        0.065,
        0.2
      ],
      "s": [
        0.27,
        0.13,
        0.59
      ],
      "c": 2981524
    },
    {
      "t": "rod",
      "n": "suit-arm-1",
      "from": [
        0.32,
        1.38,
        0
      ],
      "to": [
        0.43,
        0.91,
        0.02
      ],
      "r": 0.115,
      "c": 4283757
    },
    {
      "t": "sphere",
      "n": "dive-glove-1",
      "p": [
        0.45,
        0.85,
        0.04
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "suit-leg-1",
      "from": [
        0.18,
        0.83,
        0
      ],
      "to": [
        0.2,
        0.23,
        0
      ],
      "r": 0.135,
      "c": 4283757
    },
    {
      "t": "box",
      "n": "flipper-1",
      "p": [
        0.2,
        0.065,
        0.2
      ],
      "s": [
        0.27,
        0.13,
        0.59
      ],
      "c": 2981524
    },
    {
      "t": "box",
      "n": "pressure-gauge",
      "p": [
        0.36,
        1.03,
        0.17
      ],
      "s": [
        0.11,
        0.11,
        0.05
      ],
      "c": 9149339
    }
  ]
}); }
