import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Pediatric Reading Sofa / 儿童图书馆阅读沙发. */
export const assetMeta = {
  "id": "furniture.pediatric-reading-sofa.001",
  "slug": "pediatric-reading-sofa",
  "title": "Pediatric Reading Sofa",
  "title_zh": "儿童图书馆阅读沙发",
  "summary": "Child-safe reading couch with curved armrests and illustrated book pockets",
  "category": "furniture",
  "tags": [
    "pediatric",
    "reading",
    "sofa",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.72,
    1.05,
    0.95
  ],
  "generator": "createPediatricReadingSofa",
  "source_path": "src/models/pediatric_reading_sofa.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/pediatric-reading-sofa.webp",
  "accent": "#e1ca9c"
};
export function createPediatricReadingSofa() { return buildRecipe({
  "title": "Pediatric Reading Sofa",
  "dimensions": [
    1.72,
    1.05,
    0.95
  ],
  "parts": [
    {
      "t": "box",
      "n": "rounded-sofa-base",
      "p": [
        0,
        0.35,
        0
      ],
      "s": [
        1.51,
        0.5,
        0.74
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "sofa-comfort-cushion-0",
      "p": [
        -0.43,
        0.65,
        0.1
      ],
      "s": [
        0.41,
        0.15,
        0.57
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "sofa-comfort-cushion-1",
      "p": [
        0,
        0.65,
        0.1
      ],
      "s": [
        0.41,
        0.15,
        0.57
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "sofa-comfort-cushion-2",
      "p": [
        0.43,
        0.65,
        0.1
      ],
      "s": [
        0.41,
        0.15,
        0.57
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "soft-sofa-back",
      "p": [
        0,
        0.9,
        -0.31
      ],
      "s": [
        1.45,
        0.66,
        0.18
      ],
      "c": 5928329
    },
    {
      "t": "sphere",
      "n": "soft-armrest--1",
      "p": [
        -0.75,
        0.74,
        0
      ],
      "s": [
        0.31,
        0.45,
        0.72
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "reading-book-pocket--1",
      "p": [
        -0.8,
        0.55,
        0.4
      ],
      "s": [
        0.19,
        0.22,
        0.04
      ],
      "c": 4541272
    },
    {
      "t": "sphere",
      "n": "soft-armrest-1",
      "p": [
        0.75,
        0.74,
        0
      ],
      "s": [
        0.31,
        0.45,
        0.72
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "reading-book-pocket-1",
      "p": [
        0.8,
        0.55,
        0.4
      ],
      "s": [
        0.19,
        0.22,
        0.04
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "sofa-foot--0.63--0.27",
      "p": [
        -0.63,
        0.085,
        -0.27
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "sofa-foot--0.63-0.27",
      "p": [
        -0.63,
        0.085,
        0.27
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "sofa-foot-0.63--0.27",
      "p": [
        0.63,
        0.085,
        -0.27
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "sofa-foot-0.63-0.27",
      "p": [
        0.63,
        0.085,
        0.27
      ],
      "s": [
        0.1,
        0.17,
        0.1
      ],
      "c": 5928329
    }
  ]
}); }
