import { buildRecipe } from './recipe_engine.js';
/** Field Botanist Mannequin / 野外植物学家原型: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "characters.field-botanist-mannequin.001",
  "slug": "field-botanist-mannequin",
  "title": "Field Botanist Mannequin",
  "title_zh": "野外植物学家原型",
  "summary": "Unrigged botanist with brim hat, herbarium case, field notebook and walking boots",
  "category": "characters",
  "tags": [
    "botanist",
    "research",
    "character"
  ],
  "dimensions_m": [
    1.02,
    1.89,
    0.8
  ],
  "generator": "createFieldBotanistMannequin",
  "source_path": "src/models/field_botanist_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/field-botanist-mannequin.webp"
};
export function createFieldBotanistMannequin() { return buildRecipe({
  "title": "Field Botanist Mannequin",
  "dimensions": [
    1.02,
    1.89,
    0.8
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "field-shirt",
      "p": [
        0,
        1.12,
        0
      ],
      "s": [
        0.57,
        0.7,
        0.42
      ],
      "c": 12106633
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
        0.33,
        0.31,
        0.3
      ],
      "c": 13346187
    },
    {
      "t": "cylinder",
      "n": "sun-hat-crown",
      "p": [
        0,
        1.86,
        0
      ],
      "s": [
        0.38,
        0.19,
        0.38
      ],
      "c": 9924685
    },
    {
      "t": "cylinder",
      "n": "wide-brim",
      "p": [
        0,
        1.78,
        0
      ],
      "s": [
        0.61,
        0.04,
        0.54
      ],
      "c": 9924685
    },
    {
      "t": "rod",
      "n": "field-sleeve-0",
      "from": [
        -0.34,
        1.39,
        0
      ],
      "to": [
        -0.42,
        0.92,
        0
      ],
      "r": 0.105,
      "c": 12106633
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.43,
        0.86,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13346187
    },
    {
      "t": "rod",
      "n": "field-pant-0",
      "from": [
        -0.18,
        0.85,
        0
      ],
      "to": [
        -0.21,
        0.21,
        0
      ],
      "r": 0.14,
      "c": 6721137
    },
    {
      "t": "box",
      "n": "trail-boot-0",
      "p": [
        -0.21,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.22,
        0.34
      ],
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "field-sleeve-1",
      "from": [
        0.34,
        1.39,
        0
      ],
      "to": [
        0.42,
        0.92,
        0
      ],
      "r": 0.105,
      "c": 12106633
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.43,
        0.86,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13346187
    },
    {
      "t": "rod",
      "n": "field-pant-1",
      "from": [
        0.18,
        0.85,
        0
      ],
      "to": [
        0.21,
        0.21,
        0
      ],
      "r": 0.14,
      "c": 6721137
    },
    {
      "t": "box",
      "n": "trail-boot-1",
      "p": [
        0.21,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.22,
        0.34
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "herbarium-case",
      "p": [
        0.45,
        0.95,
        0.12
      ],
      "s": [
        0.28,
        0.35,
        0.23
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "field-notebook",
      "p": [
        -0.48,
        0.88,
        0.18
      ],
      "s": [
        0.25,
        0.23,
        0.045
      ],
      "c": 15328729
    },
    {
      "t": "box",
      "n": "notebook-line",
      "p": [
        -0.48,
        0.88,
        0.207
      ],
      "s": [
        0.17,
        0.021,
        0.007
      ],
      "c": 6458528
    },
    {
      "t": "rod",
      "n": "bag-cross-strap",
      "from": [
        -0.21,
        1.45,
        0.23
      ],
      "to": [
        0.44,
        0.95,
        0.16
      ],
      "r": 0.023,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "leaf-badge",
      "p": [
        0.14,
        1.35,
        0.226
      ],
      "s": [
        0.13,
        0.1,
        0.015
      ],
      "c": 6721137
    }
  ]
}); }
