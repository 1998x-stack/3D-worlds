import { buildRecipe } from './recipe_engine.js';
/** Wrought Iron Garden Swing / 铁艺花园双人秋千: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "furniture.wrought-iron-garden-swing.001",
  "slug": "wrought-iron-garden-swing",
  "title": "Wrought Iron Garden Swing",
  "title_zh": "铁艺花园双人秋千",
  "summary": "Outdoor A-frame two-person swing with chained bench, curved armrests and cushion slats",
  "category": "furniture",
  "tags": [
    "garden",
    "swing",
    "outdoor"
  ],
  "dimensions_m": [
    2.28,
    2.12,
    1.5
  ],
  "generator": "createWroughtIronGardenSwing",
  "source_path": "src/models/wrought_iron_garden_swing.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/wrought-iron-garden-swing.webp"
};
export function createWroughtIronGardenSwing() { return buildRecipe({
  "title": "Wrought Iron Garden Swing",
  "dimensions": [
    2.28,
    2.12,
    1.5
  ],
  "parts": [
    {
      "t": "rod",
      "n": "A-leg-front-0",
      "from": [
        -1.01,
        0.06,
        0.63
      ],
      "to": [
        -1.01,
        2.06,
        0
      ],
      "r": 0.042,
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "A-leg-back-0",
      "from": [
        -1.01,
        0.06,
        -0.63
      ],
      "to": [
        -1.01,
        2.06,
        0
      ],
      "r": 0.042,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "ground-anchor-0",
      "p": [
        -1.01,
        0.045,
        0.61
      ],
      "s": [
        0.18,
        0.09,
        0.24
      ],
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "A-leg-front-1",
      "from": [
        1.01,
        0.06,
        0.63
      ],
      "to": [
        1.01,
        2.06,
        0
      ],
      "r": 0.042,
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "A-leg-back-1",
      "from": [
        1.01,
        0.06,
        -0.63
      ],
      "to": [
        1.01,
        2.06,
        0
      ],
      "r": 0.042,
      "c": 3490120
    },
    {
      "t": "box",
      "n": "ground-anchor-1",
      "p": [
        1.01,
        0.045,
        0.61
      ],
      "s": [
        0.18,
        0.09,
        0.24
      ],
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "top-beam",
      "from": [
        -1.06,
        2.06,
        0
      ],
      "to": [
        1.06,
        2.06,
        0
      ],
      "r": 0.055,
      "c": 3490120
    },
    {
      "t": "rod",
      "n": "suspension-front-0",
      "from": [
        -0.83,
        1.97,
        0.06
      ],
      "to": [
        -0.83,
        0.62,
        0.35
      ],
      "r": 0.018,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "suspension-rear-0",
      "from": [
        -0.83,
        1.97,
        -0.06
      ],
      "to": [
        -0.83,
        0.95,
        -0.29
      ],
      "r": 0.018,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "suspension-front-1",
      "from": [
        0.83,
        1.97,
        0.06
      ],
      "to": [
        0.83,
        0.62,
        0.35
      ],
      "r": 0.018,
      "c": 9741736
    },
    {
      "t": "rod",
      "n": "suspension-rear-1",
      "from": [
        0.83,
        1.97,
        -0.06
      ],
      "to": [
        0.83,
        0.95,
        -0.29
      ],
      "r": 0.018,
      "c": 9741736
    },
    {
      "t": "box",
      "n": "seat-base",
      "p": [
        0,
        0.55,
        0.02
      ],
      "s": [
        1.82,
        0.14,
        0.82
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "seat-back",
      "p": [
        0,
        0.88,
        -0.38
      ],
      "s": [
        1.84,
        0.72,
        0.09
      ],
      "c": 9924685,
      "rot": [
        -0.1,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "seat-slat-0",
      "p": [
        -0.77,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-1",
      "p": [
        -0.55,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-2",
      "p": [
        -0.33,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-3",
      "p": [
        -0.10999999999999999,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-4",
      "p": [
        0.10999999999999999,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-5",
      "p": [
        0.33000000000000007,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-6",
      "p": [
        0.55,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "seat-slat-7",
      "p": [
        0.77,
        0.65,
        0.04
      ],
      "s": [
        0.16,
        0.025,
        0.72
      ],
      "c": 12886379
    },
    {
      "t": "box",
      "n": "armrest-0",
      "p": [
        -0.91,
        0.73,
        0
      ],
      "s": [
        0.07,
        0.08,
        0.68
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "armrest-1",
      "p": [
        0.91,
        0.73,
        0
      ],
      "s": [
        0.07,
        0.08,
        0.68
      ],
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "swing-pillow",
      "p": [
        0,
        0.71,
        -0.21
      ],
      "s": [
        0.56,
        0.16,
        0.18
      ],
      "c": 12629664
    }
  ]
}); }
