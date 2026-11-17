import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Induction Fondue Sharing Set / 电磁锅共享火锅套件. */
export const assetMeta = {
  "id": "kitchen.induction-fondue-sharing-set.001",
  "slug": "induction-fondue-sharing-set",
  "title": "Induction Fondue Sharing Set",
  "title_zh": "电磁锅共享火锅套件",
  "summary": "Communal induction cooking table with central simmering pot and dipping bowls",
  "category": "kitchen",
  "tags": [
    "induction",
    "fondue",
    "sharing",
    "set",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.16,
    0.87,
    1
  ],
  "generator": "createInductionFondueSharingSet",
  "source_path": "src/models/induction_fondue_sharing_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/induction-fondue-sharing-set.webp",
  "accent": "#b38e62"
};
export function createInductionFondueSharingSet() { return buildRecipe({
  "title": "Induction Fondue Sharing Set",
  "dimensions": [
    1.16,
    0.87,
    1
  ],
  "parts": [
    {
      "t": "box",
      "n": "fondue-tabletop",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        1,
        0.15,
        0.88
      ],
      "c": 13225148
    },
    {
      "t": "box",
      "n": "short-fondue-table-leg--0.39--0.32",
      "p": [
        -0.39,
        0.23,
        -0.32
      ],
      "s": [
        0.085,
        0.45,
        0.08
      ],
      "c": 6520451
    },
    {
      "t": "box",
      "n": "short-fondue-table-leg--0.39-0.32",
      "p": [
        -0.39,
        0.23,
        0.32
      ],
      "s": [
        0.085,
        0.45,
        0.08
      ],
      "c": 6520451
    },
    {
      "t": "box",
      "n": "short-fondue-table-leg-0.39--0.32",
      "p": [
        0.39,
        0.23,
        -0.32
      ],
      "s": [
        0.085,
        0.45,
        0.08
      ],
      "c": 6520451
    },
    {
      "t": "box",
      "n": "short-fondue-table-leg-0.39-0.32",
      "p": [
        0.39,
        0.23,
        0.32
      ],
      "s": [
        0.085,
        0.45,
        0.08
      ],
      "c": 6520451
    },
    {
      "t": "cylinder",
      "n": "central-induction-hob",
      "p": [
        0,
        0.65,
        0
      ],
      "s": [
        0.48,
        0.08,
        0.48
      ],
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "shared-fondue-pot",
      "p": [
        0,
        0.81,
        0
      ],
      "s": [
        0.5,
        0.28,
        0.5
      ],
      "c": 11767394
    },
    {
      "t": "torus",
      "n": "pot-heating-rim",
      "p": [
        0,
        0.96,
        0
      ],
      "s": [
        0.62,
        0.045,
        0.62
      ],
      "c": 6520451,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "dipping-bowl-0",
      "p": [
        0.42,
        0.7,
        0
      ],
      "s": [
        0.19,
        0.12,
        0.19
      ],
      "c": 6520451
    },
    {
      "t": "rod",
      "n": "fondue-skewer-0",
      "from": [
        0.22,
        1,
        0
      ],
      "to": [
        0.58,
        1.17,
        0
      ],
      "r": 0.012,
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "dipping-bowl-1",
      "p": [
        0.21000000000000005,
        0.7,
        0.3031088913245535
      ],
      "s": [
        0.19,
        0.12,
        0.19
      ],
      "c": 6520451
    },
    {
      "t": "rod",
      "n": "fondue-skewer-1",
      "from": [
        0.11000000000000003,
        1,
        0.16454482671904333
      ],
      "to": [
        0.29000000000000004,
        1.17,
        0.4243524478543749
      ],
      "r": 0.012,
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "dipping-bowl-2",
      "p": [
        -0.2099999999999999,
        0.7,
        0.30310889132455354
      ],
      "s": [
        0.19,
        0.12,
        0.19
      ],
      "c": 6520451
    },
    {
      "t": "rod",
      "n": "fondue-skewer-2",
      "from": [
        -0.10999999999999995,
        1,
        0.16454482671904336
      ],
      "to": [
        -0.28999999999999987,
        1.17,
        0.424352447854375
      ],
      "r": 0.012,
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "dipping-bowl-3",
      "p": [
        -0.42,
        0.7,
        4.286263797015736e-17
      ],
      "s": [
        0.19,
        0.12,
        0.19
      ],
      "c": 6520451
    },
    {
      "t": "rod",
      "n": "fondue-skewer-3",
      "from": [
        -0.22,
        1,
        2.3268289183799712e-17
      ],
      "to": [
        -0.58,
        1.17,
        6.000769315822031e-17
      ],
      "r": 0.012,
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "dipping-bowl-4",
      "p": [
        -0.2100000000000002,
        0.7,
        -0.30310889132455343
      ],
      "s": [
        0.19,
        0.12,
        0.19
      ],
      "c": 6520451
    },
    {
      "t": "rod",
      "n": "fondue-skewer-4",
      "from": [
        -0.1100000000000001,
        1,
        -0.1645448267190433
      ],
      "to": [
        -0.29000000000000026,
        1.17,
        -0.4243524478543748
      ],
      "r": 0.012,
      "c": 14136923
    },
    {
      "t": "cylinder",
      "n": "dipping-bowl-5",
      "p": [
        0.21000000000000005,
        0.7,
        -0.3031088913245535
      ],
      "s": [
        0.19,
        0.12,
        0.19
      ],
      "c": 6520451
    },
    {
      "t": "rod",
      "n": "fondue-skewer-5",
      "from": [
        0.11000000000000003,
        1,
        -0.16454482671904333
      ],
      "to": [
        0.29000000000000004,
        1.17,
        -0.4243524478543749
      ],
      "r": 0.012,
      "c": 14136923
    }
  ]
}); }
