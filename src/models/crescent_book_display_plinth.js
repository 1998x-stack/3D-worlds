import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Crescent Book Display Plinth; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "furniture.crescent-book-display-plinth.001",
  "slug": "crescent-book-display-plinth",
  "title": "Crescent Book Display Plinth",
  "title_zh": "新月弧形书籍陈列台",
  "summary": "Open book pedestal with graduated crescent slats and leaf stays",
  "category": "furniture",
  "tags": [
    "crescent",
    "book",
    "display",
    "plinth",
    "furniture",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.33,
    0.21,
    0.22
  ],
  "generator": "createCrescentBookDisplayPlinth",
  "source_path": "src/models/crescent_book_display_plinth.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/crescent-book-display-plinth.webp",
  "accent": "#576e82",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createCrescentBookDisplayPlinth() { return buildRecipe({
  "title": "Crescent Book Display Plinth",
  "dimensions": [
    0.33,
    0.21,
    0.22
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "base-plinth",
      "p": [
        0,
        0.16,
        0
      ],
      "s": [
        1.85,
        0.23,
        1.26
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "book-shelf",
      "p": [
        0,
        0.43,
        0.29
      ],
      "s": [
        1.58,
        0.14,
        0.55
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-0",
      "p": [
        -0.713,
        0.7839,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-1",
      "p": [
        -0.6771,
        0.8722,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-2",
      "p": [
        -0.6271,
        0.9551,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-3",
      "p": [
        -0.564,
        1.0308,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-4",
      "p": [
        -0.4892,
        1.0977,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-5",
      "p": [
        -0.4042,
        1.1545,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-6",
      "p": [
        -0.3107,
        1.1999,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-7",
      "p": [
        -0.2108,
        1.2331,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-8",
      "p": [
        -0.1065,
        1.2532,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-9",
      "p": [
        0,
        1.26,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-10",
      "p": [
        0.1065,
        1.2532,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-11",
      "p": [
        0.2108,
        1.2331,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-12",
      "p": [
        0.3107,
        1.1999,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-13",
      "p": [
        0.4042,
        1.1545,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-14",
      "p": [
        0.4892,
        1.0977,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-15",
      "p": [
        0.564,
        1.0308,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-16",
      "p": [
        0.6271,
        0.9551,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-17",
      "p": [
        0.6771,
        0.8722,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "curved-spine-18",
      "p": [
        0.713,
        0.7839,
        -0.43
      ],
      "s": [
        0.13,
        0.14,
        0.27
      ],
      "c": 5729922,
      "finish": "wood"
    },
    {
      "t": "rod",
      "n": "page-stay--1",
      "from": [
        -0.62,
        0.48,
        0.14
      ],
      "to": [
        -0.53,
        1.1,
        -0.1
      ],
      "r": 0.05,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-stopper--1",
      "p": [
        -0.74,
        0.53,
        0.48
      ],
      "s": [
        0.14,
        0.24,
        0.24
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "page-stay-1",
      "from": [
        0.62,
        0.48,
        0.14
      ],
      "to": [
        0.53,
        1.1,
        -0.1
      ],
      "r": 0.05,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-stopper-1",
      "p": [
        0.74,
        0.53,
        0.48
      ],
      "s": [
        0.14,
        0.24,
        0.24
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-0",
      "p": [
        -0.75,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-1",
      "p": [
        -0.6,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-2",
      "p": [
        -0.45,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-3",
      "p": [
        -0.3,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-4",
      "p": [
        -0.15,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-5",
      "p": [
        0,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-6",
      "p": [
        0.15,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-7",
      "p": [
        0.3,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-8",
      "p": [
        0.45,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-9",
      "p": [
        0.6,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "book-labels-10",
      "p": [
        0.75,
        0.31,
        0.67
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
