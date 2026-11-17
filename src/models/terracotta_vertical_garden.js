import { buildRecipe } from './recipe_engine.js';
/** Terracotta Vertical Garden / 赤陶垂直花园挂墙: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "decor.terracotta-vertical-garden.001",
  "slug": "terracotta-vertical-garden",
  "title": "Terracotta Vertical Garden",
  "title_zh": "赤陶垂直花园挂墙",
  "summary": "Modular vertical clay wall planters with trailing greenery and drip irrigation",
  "category": "decor",
  "tags": [
    "terracotta",
    "vertical",
    "garden",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.8,
    2.3,
    0.74
  ],
  "generator": "createTerracottaVerticalGarden",
  "source_path": "src/models/terracotta_vertical_garden.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/terracotta-vertical-garden.webp",
  "accent": "#b4bd8b"
};
export function createTerracottaVerticalGarden() { return buildRecipe({
  "title": "Terracotta Vertical Garden",
  "dimensions": [
    1.8,
    2.3,
    0.74
  ],
  "parts": [
    {
      "t": "box",
      "n": "vertical-terracotta-wall",
      "p": [
        0,
        1.1,
        -0.2
      ],
      "s": [
        1.55,
        2.15,
        0.22
      ],
      "c": 10186585
    },
    {
      "t": "sphere",
      "n": "planter-pot-0-0",
      "p": [
        -0.5,
        0.34,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-0-0",
      "p": [
        -0.5,
        0.6000000000000001,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-0-0",
      "from": [
        -0.5,
        0.34,
        0.06
      ],
      "to": [
        -0.5,
        0.71,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-0-1",
      "p": [
        0,
        0.34,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-0-1",
      "p": [
        0,
        0.6000000000000001,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-0-1",
      "from": [
        0,
        0.34,
        0.06
      ],
      "to": [
        0,
        0.71,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-0-2",
      "p": [
        0.5,
        0.34,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-0-2",
      "p": [
        0.5,
        0.6000000000000001,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-0-2",
      "from": [
        0.5,
        0.34,
        0.06
      ],
      "to": [
        0.5,
        0.71,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-1-0",
      "p": [
        -0.5,
        0.79,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-1-0",
      "p": [
        -0.5,
        1.05,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-1-0",
      "from": [
        -0.5,
        0.79,
        0.06
      ],
      "to": [
        -0.5,
        1.1600000000000001,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-1-1",
      "p": [
        0,
        0.79,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-1-1",
      "p": [
        0,
        1.05,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-1-1",
      "from": [
        0,
        0.79,
        0.06
      ],
      "to": [
        0,
        1.1600000000000001,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-1-2",
      "p": [
        0.5,
        0.79,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-1-2",
      "p": [
        0.5,
        1.05,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-1-2",
      "from": [
        0.5,
        0.79,
        0.06
      ],
      "to": [
        0.5,
        1.1600000000000001,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-2-0",
      "p": [
        -0.5,
        1.24,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-2-0",
      "p": [
        -0.5,
        1.5,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-2-0",
      "from": [
        -0.5,
        1.24,
        0.06
      ],
      "to": [
        -0.5,
        1.6099999999999999,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-2-1",
      "p": [
        0,
        1.24,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-2-1",
      "p": [
        0,
        1.5,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-2-1",
      "from": [
        0,
        1.24,
        0.06
      ],
      "to": [
        0,
        1.6099999999999999,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-2-2",
      "p": [
        0.5,
        1.24,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-2-2",
      "p": [
        0.5,
        1.5,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-2-2",
      "from": [
        0.5,
        1.24,
        0.06
      ],
      "to": [
        0.5,
        1.6099999999999999,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-3-0",
      "p": [
        -0.5,
        1.6900000000000002,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-3-0",
      "p": [
        -0.5,
        1.9500000000000002,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-3-0",
      "from": [
        -0.5,
        1.6900000000000002,
        0.06
      ],
      "to": [
        -0.5,
        2.06,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-3-1",
      "p": [
        0,
        1.6900000000000002,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-3-1",
      "p": [
        0,
        1.9500000000000002,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-3-1",
      "from": [
        0,
        1.6900000000000002,
        0.06
      ],
      "to": [
        0,
        2.06,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "planter-pot-3-2",
      "p": [
        0.5,
        1.6900000000000002,
        0.05
      ],
      "s": [
        0.2,
        0.16,
        0.16
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "plant-foliage-3-2",
      "p": [
        0.5,
        1.9500000000000002,
        0.07
      ],
      "s": [
        0.22,
        0.23,
        0.19
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "plant-stem-3-2",
      "from": [
        0.5,
        1.6900000000000002,
        0.06
      ],
      "to": [
        0.5,
        2.06,
        0.06
      ],
      "r": 0.012,
      "c": 3562593
    },
    {
      "t": "rod",
      "n": "irrigation-top-pipe",
      "from": [
        -0.71,
        2.19,
        0.08
      ],
      "to": [
        0.71,
        2.19,
        0.08
      ],
      "r": 0.029,
      "c": 3562593
    }
  ]
}); }
