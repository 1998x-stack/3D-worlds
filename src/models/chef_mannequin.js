import { buildRecipe } from './recipe_engine.js';

/** Original authored Chef Mannequin / 厨师人物原型; stylized, unrigged scene model. */
export const assetMeta = {
  "id": "characters.chef-mannequin.001",
  "slug": "chef-mannequin",
  "title": "Chef Mannequin",
  "title_zh": "厨师人物原型",
  "summary": "Unrigged culinary character with tall toque, double-button jacket and apron.",
  "category": "characters",
  "tags": [
    "chef",
    "culinary",
    "kitchen",
    "character"
  ],
  "dimensions_m": [
    0.96,
    1.94,
    0.65
  ],
  "generator": "createChefMannequin",
  "source_path": "src/models/chef_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/chef-mannequin.webp"
};
export function createChefMannequin() {
  return buildRecipe({
  "title": "Chef Mannequin",
  "dimensions": [
    0.96,
    1.94,
    0.65
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "chef-jacket",
      "p": [
        0,
        1.12,
        0
      ],
      "s": [
        0.6,
        0.74,
        0.43
      ],
      "c": 15263711
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
        0.31,
        0.29,
        0.29
      ],
      "c": 13345929
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
        0.37,
        0.09,
        0.36
      ],
      "c": 15263711
    },
    {
      "t": "cylinder",
      "n": "toque",
      "p": [
        0,
        2.02,
        0
      ],
      "s": [
        0.33,
        0.31,
        0.32
      ],
      "c": 15263711
    },
    {
      "t": "box",
      "n": "apron",
      "p": [
        0,
        0.96,
        0.245
      ],
      "s": [
        0.45,
        0.53,
        0.03
      ],
      "c": 13948615
    },
    {
      "t": "sphere",
      "n": "jacket-button-0-0",
      "p": [
        -0.13,
        1.39,
        0.26
      ],
      "s": [
        0.023,
        0.023,
        0.012
      ],
      "c": 3422268
    },
    {
      "t": "sphere",
      "n": "jacket-button-0-1",
      "p": [
        -0.13,
        1.25,
        0.26
      ],
      "s": [
        0.023,
        0.023,
        0.012
      ],
      "c": 3422268
    },
    {
      "t": "sphere",
      "n": "jacket-button-0-2",
      "p": [
        -0.13,
        1.1099999999999999,
        0.26
      ],
      "s": [
        0.023,
        0.023,
        0.012
      ],
      "c": 3422268
    },
    {
      "t": "sphere",
      "n": "jacket-button-1-0",
      "p": [
        0.13,
        1.39,
        0.26
      ],
      "s": [
        0.023,
        0.023,
        0.012
      ],
      "c": 3422268
    },
    {
      "t": "sphere",
      "n": "jacket-button-1-1",
      "p": [
        0.13,
        1.25,
        0.26
      ],
      "s": [
        0.023,
        0.023,
        0.012
      ],
      "c": 3422268
    },
    {
      "t": "sphere",
      "n": "jacket-button-1-2",
      "p": [
        0.13,
        1.1099999999999999,
        0.26
      ],
      "s": [
        0.023,
        0.023,
        0.012
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.34,
        1.37,
        0
      ],
      "to": [
        -0.41,
        0.92,
        0.03
      ],
      "r": 0.12,
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.42,
        0.87,
        0.04
      ],
      "s": [
        0.12,
        0.115,
        0.12
      ],
      "c": 13345929
    },
    {
      "t": "rod",
      "n": "trouser-0",
      "from": [
        -0.17,
        0.82,
        0
      ],
      "to": [
        -0.19,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3422268
    },
    {
      "t": "box",
      "n": "shoe-0",
      "p": [
        -0.19,
        0.105,
        0.14
      ],
      "s": [
        0.26,
        0.21,
        0.33
      ],
      "c": 3422268
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.34,
        1.37,
        0
      ],
      "to": [
        0.41,
        0.92,
        0.03
      ],
      "r": 0.12,
      "c": 15263711
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.42,
        0.87,
        0.04
      ],
      "s": [
        0.12,
        0.115,
        0.12
      ],
      "c": 13345929
    },
    {
      "t": "rod",
      "n": "trouser-1",
      "from": [
        0.17,
        0.82,
        0
      ],
      "to": [
        0.19,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3422268
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.19,
        0.105,
        0.14
      ],
      "s": [
        0.26,
        0.21,
        0.33
      ],
      "c": 3422268
    },
    {
      "t": "box",
      "n": "neck-scarf",
      "p": [
        0,
        1.47,
        0.23
      ],
      "s": [
        0.2,
        0.12,
        0.045
      ],
      "c": 5400440
    }
  ]
});
}
