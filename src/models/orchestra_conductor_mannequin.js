import { buildRecipe } from './recipe_engine.js';
/** Orchestra Conductor Mannequin / 交响乐团指挥人物原型: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "characters.orchestra-conductor-mannequin.001",
  "slug": "orchestra-conductor-mannequin",
  "title": "Orchestra Conductor Mannequin",
  "title_zh": "交响乐团指挥人物原型",
  "summary": "Unrigged stage conductor in tailcoat carrying baton and pocket square",
  "category": "characters",
  "tags": [
    "conductor",
    "music",
    "character"
  ],
  "dimensions_m": [
    1.08,
    1.95,
    0.69
  ],
  "generator": "createOrchestraConductorMannequin",
  "source_path": "src/models/orchestra_conductor_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/orchestra-conductor-mannequin.webp"
};
export function createOrchestraConductorMannequin() { return buildRecipe({
  "title": "Orchestra Conductor Mannequin",
  "dimensions": [
    1.08,
    1.95,
    0.69
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "tuxedo-torso",
      "p": [
        0,
        1.14,
        0
      ],
      "s": [
        0.55,
        0.72,
        0.42
      ],
      "c": 3490120
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
        0.32,
        0.31
      ],
      "c": 12819584
    },
    {
      "t": "sphere",
      "n": "hair",
      "p": [
        0,
        1.88,
        -0.04
      ],
      "s": [
        0.34,
        0.16,
        0.34
      ],
      "c": 4930616
    },
    {
      "t": "box",
      "n": "shirtfront",
      "p": [
        0,
        1.27,
        0.231
      ],
      "s": [
        0.23,
        0.4,
        0.024
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "bowtie",
      "p": [
        0,
        1.53,
        0.256
      ],
      "s": [
        0.24,
        0.085,
        0.025
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "formal-sleeve-0",
      "from": [
        -0.33,
        1.41,
        0
      ],
      "to": [
        -0.43,
        0.93,
        0
      ],
      "r": 0.102,
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.44,
        0.88,
        0.02
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 12819584
    },
    {
      "t": "rod",
      "n": "trouser-0",
      "from": [
        -0.17,
        0.85,
        0
      ],
      "to": [
        -0.19,
        0.22,
        0
      ],
      "r": 0.138,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "dress-shoe-0",
      "p": [
        -0.19,
        0.115,
        0.12
      ],
      "s": [
        0.27,
        0.23,
        0.32
      ],
      "c": 2304042
    },
    {
      "t": "rod",
      "n": "formal-sleeve-1",
      "from": [
        0.33,
        1.41,
        0
      ],
      "to": [
        0.43,
        0.93,
        0
      ],
      "r": 0.102,
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.44,
        0.88,
        0.02
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 12819584
    },
    {
      "t": "rod",
      "n": "trouser-1",
      "from": [
        0.17,
        0.85,
        0
      ],
      "to": [
        0.19,
        0.22,
        0
      ],
      "r": 0.138,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "dress-shoe-1",
      "p": [
        0.19,
        0.115,
        0.12
      ],
      "s": [
        0.27,
        0.23,
        0.32
      ],
      "c": 2304042
    },
    {
      "t": "box",
      "n": "tailcoat-tail-0",
      "p": [
        -0.16,
        0.83,
        -0.23
      ],
      "s": [
        0.22,
        0.52,
        0.13
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "tailcoat-tail-1",
      "p": [
        0.16,
        0.83,
        -0.23
      ],
      "s": [
        0.22,
        0.52,
        0.13
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "baton",
      "from": [
        0.43,
        0.91,
        0.03
      ],
      "to": [
        0.54,
        1.44,
        0.2
      ],
      "r": 0.009,
      "c": 15328729
    },
    {
      "t": "sphere",
      "n": "baton-grip",
      "p": [
        0.43,
        0.91,
        0.03
      ],
      "s": [
        0.033,
        0.037,
        0.032
      ],
      "c": 12754796
    },
    {
      "t": "box",
      "n": "pocket-square",
      "p": [
        0.19,
        1.38,
        0.245
      ],
      "s": [
        0.1,
        0.072,
        0.015
      ],
      "c": 12084313
    },
    {
      "t": "sphere",
      "n": "jacket-button-0",
      "p": [
        -0.06,
        1.21,
        0.259
      ],
      "s": [
        0.019,
        0.018,
        0.012
      ],
      "c": 12754796
    },
    {
      "t": "sphere",
      "n": "jacket-button-1",
      "p": [
        0.06,
        1.21,
        0.259
      ],
      "s": [
        0.019,
        0.018,
        0.012
      ],
      "c": 12754796
    },
    {
      "t": "sphere",
      "n": "jacket-button-2",
      "p": [
        -0.06,
        1.08,
        0.259
      ],
      "s": [
        0.019,
        0.018,
        0.012
      ],
      "c": 12754796
    },
    {
      "t": "sphere",
      "n": "jacket-button-3",
      "p": [
        0.06,
        1.08,
        0.259
      ],
      "s": [
        0.019,
        0.018,
        0.012
      ],
      "c": 12754796
    }
  ]
}); }
