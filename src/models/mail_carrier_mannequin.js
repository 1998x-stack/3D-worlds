import { buildRecipe } from './recipe_engine.js';
/** Mail Carrier Mannequin — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "characters.mail-carrier-mannequin.001",
  "slug": "mail-carrier-mannequin",
  "title": "Mail Carrier Mannequin",
  "title_zh": "邮政投递员原型",
  "summary": "Unrigged delivery worker with satchel, uniform cap, envelope and walking shoes",
  "category": "characters",
  "tags": [
    "courier",
    "postal",
    "character"
  ],
  "dimensions_m": [
    0.99,
    1.88,
    0.68
  ],
  "generator": "createMailCarrierMannequin",
  "source_path": "src/models/mail_carrier_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/mail-carrier-mannequin.webp"
};
export function createMailCarrierMannequin() { return buildRecipe({
  "title": "Mail Carrier Mannequin",
  "dimensions": [
    0.99,
    1.88,
    0.68
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "postal-jacket",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        0.58,
        0.7,
        0.4
      ],
      "c": 5799065
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.65,
        0
      ],
      "s": [
        0.32,
        0.31,
        0.29
      ],
      "c": 12885378
    },
    {
      "t": "cylinder",
      "n": "postal-cap",
      "p": [
        0,
        1.85,
        0
      ],
      "s": [
        0.4,
        0.16,
        0.39
      ],
      "c": 5407899
    },
    {
      "t": "box",
      "n": "visor",
      "p": [
        0,
        1.79,
        0.28
      ],
      "s": [
        0.33,
        0.025,
        0.16
      ],
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "jacket-sleeve-0",
      "from": [
        -0.35,
        1.36,
        0
      ],
      "to": [
        -0.43,
        0.91,
        0
      ],
      "r": 0.112,
      "c": 5407899
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.44,
        0.86,
        0.02
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 12885378
    },
    {
      "t": "rod",
      "n": "uniform-trouser-0",
      "from": [
        -0.17,
        0.83,
        0
      ],
      "to": [
        -0.21,
        0.22,
        0
      ],
      "r": 0.14,
      "c": 4545907
    },
    {
      "t": "box",
      "n": "walking-shoe-0",
      "p": [
        -0.21,
        0.11,
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
      "n": "jacket-sleeve-1",
      "from": [
        0.35,
        1.36,
        0
      ],
      "to": [
        0.43,
        0.91,
        0
      ],
      "r": 0.112,
      "c": 5407899
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.44,
        0.86,
        0.02
      ],
      "s": [
        0.11,
        0.11,
        0.11
      ],
      "c": 12885378
    },
    {
      "t": "rod",
      "n": "uniform-trouser-1",
      "from": [
        0.17,
        0.83,
        0
      ],
      "to": [
        0.21,
        0.22,
        0
      ],
      "r": 0.14,
      "c": 4545907
    },
    {
      "t": "box",
      "n": "walking-shoe-1",
      "p": [
        0.21,
        0.11,
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
      "n": "letter-satchel",
      "p": [
        0.4,
        0.95,
        0.14
      ],
      "s": [
        0.25,
        0.42,
        0.23
      ],
      "c": 9989443
    },
    {
      "t": "rod",
      "n": "satchel-strap",
      "from": [
        -0.21,
        1.42,
        0.23
      ],
      "to": [
        0.41,
        0.92,
        0.17
      ],
      "r": 0.023,
      "c": 9989443
    },
    {
      "t": "box",
      "n": "envelope",
      "p": [
        -0.51,
        0.89,
        0.21
      ],
      "s": [
        0.2,
        0.12,
        0.025
      ],
      "c": 15263196
    },
    {
      "t": "box",
      "n": "uniform-logo",
      "p": [
        0,
        1.35,
        0.23
      ],
      "s": [
        0.18,
        0.15,
        0.013
      ],
      "c": 12755572
    }
  ]
}); }
