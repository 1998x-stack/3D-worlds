import { buildRecipe } from './recipe_engine.js';

/** Original authored Beekeeper Mannequin / 养蜂人防护服原型; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "characters.beekeeper-mannequin.001",
  "slug": "beekeeper-mannequin",
  "title": "Beekeeper Mannequin",
  "title_zh": "养蜂人防护服原型",
  "summary": "Unrigged beekeeper in pale coveralls with broad mesh veil, gloves and boots.",
  "category": "characters",
  "tags": [
    "beekeeper",
    "protective",
    "agriculture",
    "character"
  ],
  "dimensions_m": [
    0.97,
    1.89,
    0.73
  ],
  "generator": "createBeekeeperMannequin",
  "source_path": "src/models/beekeeper_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/beekeeper-mannequin.webp"
};
export function createBeekeeperMannequin() {
  return buildRecipe({
  "title": "Beekeeper Mannequin",
  "dimensions": [
    0.97,
    1.89,
    0.73
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "coverall-torso",
      "p": [
        0,
        1.1,
        0
      ],
      "s": [
        0.57,
        0.76,
        0.45
      ],
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "protective-head",
      "p": [
        0,
        1.66,
        0
      ],
      "s": [
        0.35,
        0.33,
        0.32
      ],
      "c": 14997700
    },
    {
      "t": "cylinder",
      "n": "wide-hat",
      "p": [
        0,
        1.85,
        0
      ],
      "s": [
        0.62,
        0.075,
        0.59
      ],
      "c": 14735534
    },
    {
      "t": "cylinder",
      "n": "veil-collar",
      "p": [
        0,
        1.49,
        0
      ],
      "s": [
        0.43,
        0.09,
        0.41
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "mesh-front",
      "p": [
        0,
        1.65,
        0.32
      ],
      "s": [
        0.46,
        0.32,
        0.035
      ],
      "c": 6716538
    },
    {
      "t": "box",
      "n": "veil-net-line-0",
      "p": [
        -0.2,
        1.65,
        0.345
      ],
      "s": [
        0.006,
        0.29,
        0.007
      ],
      "c": 10927283
    },
    {
      "t": "box",
      "n": "veil-net-line-1",
      "p": [
        -0.1,
        1.65,
        0.345
      ],
      "s": [
        0.006,
        0.29,
        0.007
      ],
      "c": 10927283
    },
    {
      "t": "box",
      "n": "veil-net-line-2",
      "p": [
        0,
        1.65,
        0.345
      ],
      "s": [
        0.006,
        0.29,
        0.007
      ],
      "c": 10927283
    },
    {
      "t": "box",
      "n": "veil-net-line-3",
      "p": [
        0.10000000000000003,
        1.65,
        0.345
      ],
      "s": [
        0.006,
        0.29,
        0.007
      ],
      "c": 10927283
    },
    {
      "t": "box",
      "n": "veil-net-line-4",
      "p": [
        0.2,
        1.65,
        0.345
      ],
      "s": [
        0.006,
        0.29,
        0.007
      ],
      "c": 10927283
    },
    {
      "t": "rod",
      "n": "long-sleeve-0",
      "from": [
        -0.33,
        1.36,
        0
      ],
      "to": [
        -0.43,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "glove-0",
      "p": [
        -0.44,
        0.89,
        0.03
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 14405019
    },
    {
      "t": "rod",
      "n": "overall-leg-0",
      "from": [
        -0.18,
        0.84,
        0
      ],
      "to": [
        -0.21,
        0.22,
        0
      ],
      "r": 0.15,
      "c": 15263711
    },
    {
      "t": "box",
      "n": "work-boot-0",
      "p": [
        -0.21,
        0.12,
        0.12
      ],
      "s": [
        0.26,
        0.22,
        0.31
      ],
      "c": 11641208
    },
    {
      "t": "rod",
      "n": "long-sleeve-1",
      "from": [
        0.33,
        1.36,
        0
      ],
      "to": [
        0.43,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "glove-1",
      "p": [
        0.44,
        0.89,
        0.03
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 14405019
    },
    {
      "t": "rod",
      "n": "overall-leg-1",
      "from": [
        0.18,
        0.84,
        0
      ],
      "to": [
        0.21,
        0.22,
        0
      ],
      "r": 0.15,
      "c": 15263711
    },
    {
      "t": "box",
      "n": "work-boot-1",
      "p": [
        0.21,
        0.12,
        0.12
      ],
      "s": [
        0.26,
        0.22,
        0.31
      ],
      "c": 11641208
    },
    {
      "t": "box",
      "n": "suit-zipper",
      "p": [
        0,
        1.17,
        0.231
      ],
      "s": [
        0.018,
        0.48,
        0.008
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "bee-symbol",
      "p": [
        0.19,
        1.36,
        0.237
      ],
      "s": [
        0.12,
        0.09,
        0.018
      ],
      "c": 13939807
    }
  ]
});
}
