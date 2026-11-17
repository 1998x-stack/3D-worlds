import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Fractal Bookshelf Sculpture / 分形书架艺术装置. */
export const assetMeta = {
  "id": "decor.fractal-bookshelf-sculpture.001",
  "slug": "fractal-bookshelf-sculpture",
  "title": "Fractal Bookshelf Sculpture",
  "title_zh": "分形书架艺术装置",
  "summary": "Tree-like asymmetric sculptural shelving system with fractal branches and books",
  "category": "decor",
  "tags": [
    "fractal",
    "bookshelf",
    "sculpture",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.16,
    2.2,
    0.85
  ],
  "generator": "createFractalBookshelfSculpture",
  "source_path": "src/models/fractal_bookshelf_sculpture.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/fractal-bookshelf-sculpture.webp",
  "accent": "#88a58a"
};
export function createFractalBookshelfSculpture() { return buildRecipe({
  "title": "Fractal Bookshelf Sculpture",
  "dimensions": [
    2.16,
    2.2,
    0.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-fractal-bookcase-sculptural-foot",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        1.87,
        0.18,
        0.61
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-central-fractal-trunk",
      "from": [
        0,
        0.18,
        0
      ],
      "to": [
        0,
        1.85,
        0
      ],
      "r": 0.09,
      "c": 8955274
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-0-0",
      "from": [
        0,
        0.32999999999999996,
        0
      ],
      "to": [
        -0.41,
        0.49,
        -0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-0-0",
      "p": [
        -0.41,
        0.49,
        -0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-0-0",
      "p": [
        -0.5599999999999999,
        0.6799999999999999,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-0-1",
      "p": [
        -0.4099999999999999,
        0.6799999999999999,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-0-2",
      "p": [
        -0.25999999999999995,
        0.6799999999999999,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-0-1",
      "from": [
        0,
        0.32999999999999996,
        0
      ],
      "to": [
        0,
        0.49,
        0
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-0-1",
      "p": [
        0,
        0.49,
        0
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-1-0",
      "p": [
        -0.15,
        0.6799999999999999,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-1-1",
      "p": [
        0,
        0.6799999999999999,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-1-2",
      "p": [
        0.15,
        0.6799999999999999,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-0-2",
      "from": [
        0,
        0.32999999999999996,
        0
      ],
      "to": [
        0.41,
        0.49,
        0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-0-2",
      "p": [
        0.41,
        0.49,
        0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-2-0",
      "p": [
        0.26,
        0.6799999999999999,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-2-1",
      "p": [
        0.41000000000000003,
        0.6799999999999999,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-0-2-2",
      "p": [
        0.56,
        0.6799999999999999,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-1-0",
      "from": [
        0,
        0.7699999999999999,
        0
      ],
      "to": [
        -0.44499999999999995,
        0.9299999999999999,
        -0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-1-0",
      "p": [
        -0.44499999999999995,
        0.9299999999999999,
        -0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-0-0",
      "p": [
        -0.595,
        1.1199999999999999,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-0-1",
      "p": [
        -0.44499999999999995,
        1.1199999999999999,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-0-2",
      "p": [
        -0.295,
        1.1199999999999999,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-1-1",
      "from": [
        0,
        0.7699999999999999,
        0
      ],
      "to": [
        0,
        0.9299999999999999,
        0
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-1-1",
      "p": [
        0,
        0.9299999999999999,
        0
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-1-0",
      "p": [
        -0.15,
        1.1199999999999999,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-1-1",
      "p": [
        0,
        1.1199999999999999,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-1-2",
      "p": [
        0.15,
        1.1199999999999999,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-1-2",
      "from": [
        0,
        0.7699999999999999,
        0
      ],
      "to": [
        0.44499999999999995,
        0.9299999999999999,
        0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-1-2",
      "p": [
        0.44499999999999995,
        0.9299999999999999,
        0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-2-0",
      "p": [
        0.29499999999999993,
        1.1199999999999999,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-2-1",
      "p": [
        0.44499999999999995,
        1.1199999999999999,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-1-2-2",
      "p": [
        0.595,
        1.1199999999999999,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-2-0",
      "from": [
        0,
        1.2100000000000002,
        0
      ],
      "to": [
        -0.48,
        1.37,
        -0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-2-0",
      "p": [
        -0.48,
        1.37,
        -0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-0-0",
      "p": [
        -0.63,
        1.56,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-0-1",
      "p": [
        -0.48,
        1.56,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-0-2",
      "p": [
        -0.33,
        1.56,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-2-1",
      "from": [
        0,
        1.2100000000000002,
        0
      ],
      "to": [
        0,
        1.37,
        0
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-2-1",
      "p": [
        0,
        1.37,
        0
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-1-0",
      "p": [
        -0.15,
        1.56,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-1-1",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-1-2",
      "p": [
        0.15,
        1.56,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-2-2",
      "from": [
        0,
        1.2100000000000002,
        0
      ],
      "to": [
        0.48,
        1.37,
        0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-2-2",
      "p": [
        0.48,
        1.37,
        0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-2-0",
      "p": [
        0.32999999999999996,
        1.56,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-2-1",
      "p": [
        0.48,
        1.56,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-2-2-2",
      "p": [
        0.6299999999999999,
        1.56,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-3-0",
      "from": [
        0,
        1.6500000000000001,
        0
      ],
      "to": [
        -0.515,
        1.81,
        -0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-3-0",
      "p": [
        -0.515,
        1.81,
        -0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-0-0",
      "p": [
        -0.665,
        2,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-0-1",
      "p": [
        -0.515,
        2,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-0-2",
      "p": [
        -0.36500000000000005,
        2,
        -0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-3-1",
      "from": [
        0,
        1.6500000000000001,
        0
      ],
      "to": [
        0,
        1.81,
        0
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-3-1",
      "p": [
        0,
        1.81,
        0
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-1-0",
      "p": [
        -0.15,
        2,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-1-1",
      "p": [
        0,
        2,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-1-2",
      "p": [
        0.15,
        2,
        0
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "fractal-bookshelf-sculpture-lateral-branch-3-2",
      "from": [
        0,
        1.6500000000000001,
        0
      ],
      "to": [
        0.515,
        1.81,
        0.12
      ],
      "r": 0.049,
      "c": 8955274
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-sculptural-asymmetric-shelf-3-2",
      "p": [
        0.515,
        1.81,
        0.12
      ],
      "s": [
        0.53,
        0.084,
        0.35
      ],
      "c": 12225652
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-2-0",
      "p": [
        0.365,
        2,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-2-1",
      "p": [
        0.515,
        2,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 15387547
    },
    {
      "t": "box",
      "n": "fractal-bookshelf-sculpture-gallery-hardcover-3-2-2",
      "p": [
        0.665,
        2,
        0.13
      ],
      "s": [
        0.11,
        0.3,
        0.21
      ],
      "c": 5073272
    }
  ]
}); }
