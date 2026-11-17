import { buildRecipe } from './recipe_engine.js';
/** Park Ranger Mannequin — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "characters.park-ranger-mannequin.001",
  "slug": "park-ranger-mannequin",
  "title": "Park Ranger Mannequin",
  "title_zh": "国家公园护林员原型",
  "summary": "Unrigged forest ranger with brimmed hat, radio, khaki uniform and hiking boots",
  "category": "characters",
  "tags": [
    "ranger",
    "outdoor",
    "character"
  ],
  "dimensions_m": [
    0.96,
    1.91,
    0.68
  ],
  "generator": "createParkRangerMannequin",
  "source_path": "src/models/park_ranger_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/park-ranger-mannequin.webp"
};
export function createParkRangerMannequin() { return buildRecipe({
  "title": "Park Ranger Mannequin",
  "dimensions": [
    0.96,
    1.91,
    0.68
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "uniform-torso",
      "p": [
        0,
        1.16,
        0
      ],
      "s": [
        0.55,
        0.71,
        0.39
      ],
      "c": 8819824
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.68,
        0
      ],
      "s": [
        0.32,
        0.32,
        0.29
      ],
      "c": 12162423
    },
    {
      "t": "cylinder",
      "n": "hat-brim",
      "p": [
        0,
        1.82,
        0
      ],
      "s": [
        0.57,
        0.044,
        0.51
      ],
      "c": 9989443
    },
    {
      "t": "cylinder",
      "n": "hat-crown",
      "p": [
        0,
        1.91,
        0
      ],
      "s": [
        0.36,
        0.18,
        0.35
      ],
      "c": 9989443
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.34,
        1.38,
        0
      ],
      "to": [
        -0.41,
        0.94,
        0.02
      ],
      "r": 0.105,
      "c": 8556904
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.42,
        0.88,
        0.02
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 12162423
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
        -0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 7240028
    },
    {
      "t": "box",
      "n": "boot-0",
      "p": [
        -0.2,
        0.115,
        0.12
      ],
      "s": [
        0.27,
        0.22,
        0.33
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.34,
        1.38,
        0
      ],
      "to": [
        0.41,
        0.94,
        0.02
      ],
      "r": 0.105,
      "c": 8556904
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.42,
        0.88,
        0.02
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 12162423
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
        0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 7240028
    },
    {
      "t": "box",
      "n": "boot-1",
      "p": [
        0.2,
        0.115,
        0.12
      ],
      "s": [
        0.27,
        0.22,
        0.33
      ],
      "c": 3357765
    },
    {
      "t": "box",
      "n": "utility-belt",
      "p": [
        0,
        0.89,
        0.01
      ],
      "s": [
        0.58,
        0.12,
        0.42
      ],
      "c": 6708039
    },
    {
      "t": "box",
      "n": "badge",
      "p": [
        0.17,
        1.34,
        0.214
      ],
      "s": [
        0.1,
        0.11,
        0.015
      ],
      "c": 12755572
    },
    {
      "t": "box",
      "n": "chest-radio",
      "p": [
        -0.2,
        1.29,
        0.21
      ],
      "s": [
        0.12,
        0.2,
        0.08
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "radio-antenna",
      "from": [
        -0.2,
        1.4,
        0.22
      ],
      "to": [
        -0.21,
        1.57,
        0.22
      ],
      "r": 0.01,
      "c": 3357765
    },
    {
      "t": "box",
      "n": "field-bag",
      "p": [
        0.4,
        0.83,
        -0.14
      ],
      "s": [
        0.18,
        0.34,
        0.22
      ],
      "c": 9989443
    }
  ]
}); }
