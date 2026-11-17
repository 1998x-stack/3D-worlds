import { buildRecipe } from './recipe_engine.js';
/** Public Library Book Return / 公共图书馆自助还书箱: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "urban.public-library-book-return.001",
  "slug": "public-library-book-return",
  "title": "Public Library Book Return",
  "title_zh": "公共图书馆自助还书箱",
  "summary": "Weatherproof municipal book deposit station with slot, bin and instruction placard",
  "category": "urban",
  "tags": [
    "public",
    "library",
    "book",
    "return",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.45,
    1.55,
    0.85
  ],
  "generator": "createPublicLibraryBookReturn",
  "source_path": "src/models/public_library_book_return.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/public-library-book-return.webp",
  "accent": "#e7c76e"
};
export function createPublicLibraryBookReturn() { return buildRecipe({
  "title": "Public Library Book Return",
  "dimensions": [
    1.45,
    1.55,
    0.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "outdoor-return-housing",
      "p": [
        0,
        0.74,
        0
      ],
      "s": [
        1.2,
        1.48,
        0.72
      ],
      "c": 6981785
    },
    {
      "t": "box",
      "n": "book-return-slot",
      "p": [
        0,
        1.16,
        0.39
      ],
      "s": [
        0.75,
        0.1,
        0.04
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "deposit-chute",
      "p": [
        0,
        0.91,
        0.36
      ],
      "s": [
        0.86,
        0.42,
        0.06
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "digital-instruction-screen",
      "p": [
        0,
        1.36,
        0.39
      ],
      "s": [
        0.73,
        0.22,
        0.016
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "book-spine-0",
      "p": [
        -0.38,
        0.24,
        0.25
      ],
      "s": [
        0.12,
        0.32,
        0.2
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "book-spine-1",
      "p": [
        -0.23,
        0.24,
        0.25
      ],
      "s": [
        0.12,
        0.32,
        0.2
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "book-spine-2",
      "p": [
        -0.08000000000000002,
        0.24,
        0.25
      ],
      "s": [
        0.12,
        0.32,
        0.2
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "book-spine-3",
      "p": [
        0.06999999999999995,
        0.24,
        0.25
      ],
      "s": [
        0.12,
        0.32,
        0.2
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "book-spine-4",
      "p": [
        0.21999999999999997,
        0.24,
        0.25
      ],
      "s": [
        0.12,
        0.32,
        0.2
      ],
      "c": 5332324
    },
    {
      "t": "box",
      "n": "book-spine-5",
      "p": [
        0.37,
        0.24,
        0.25
      ],
      "s": [
        0.12,
        0.32,
        0.2
      ],
      "c": 15189870
    },
    {
      "t": "box",
      "n": "roof-weather-shield",
      "p": [
        0,
        1.54,
        0
      ],
      "s": [
        1.34,
        0.1,
        0.82
      ],
      "c": 8430715
    },
    {
      "t": "cylinder",
      "n": "anchoring-foot-0",
      "p": [
        -0.43,
        0.06,
        -0.285
      ],
      "s": [
        0.09,
        0.12,
        0.09
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "anchoring-foot-1",
      "p": [
        0.43,
        0.06,
        -0.285
      ],
      "s": [
        0.09,
        0.12,
        0.09
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "anchoring-foot-2",
      "p": [
        -0.43,
        0.06,
        0.285
      ],
      "s": [
        0.09,
        0.12,
        0.09
      ],
      "c": 5332324
    },
    {
      "t": "cylinder",
      "n": "anchoring-foot-3",
      "p": [
        0.43,
        0.06,
        0.285
      ],
      "s": [
        0.09,
        0.12,
        0.09
      ],
      "c": 5332324
    }
  ]
}); }
