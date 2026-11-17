import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Gallery Illuminated Art Frame / 美术馆背光画框. */
export const assetMeta = {
  "id": "decor.gallery-illuminated-art-frame.001",
  "slug": "gallery-illuminated-art-frame",
  "title": "Gallery Illuminated Art Frame",
  "title_zh": "美术馆背光画框",
  "summary": "Museum artwork display with backlit canvas, layered frame, spotlights and label",
  "category": "decor",
  "tags": [
    "gallery",
    "illuminated",
    "art",
    "frame",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.8,
    2.35,
    0.55
  ],
  "generator": "createGalleryIlluminatedArtFrame",
  "source_path": "src/models/gallery_illuminated_art_frame.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/gallery-illuminated-art-frame.webp",
  "accent": "#435868"
};
export function createGalleryIlluminatedArtFrame() { return buildRecipe({
  "title": "Gallery Illuminated Art Frame",
  "dimensions": [
    1.8,
    2.35,
    0.55
  ],
  "parts": [
    {
      "t": "box",
      "n": "gallery-frame-backwall",
      "p": [
        0,
        1.14,
        -0.14
      ],
      "s": [
        1.65,
        2.18,
        0.18
      ],
      "c": 9479818
    },
    {
      "t": "box",
      "n": "gallery-lightbox-outer-frame",
      "p": [
        0,
        1.15,
        0.006
      ],
      "s": [
        1.46,
        1.65,
        0.14
      ],
      "c": 12818301
    },
    {
      "t": "box",
      "n": "luminous-painting-canvas",
      "p": [
        0,
        1.15,
        0.084
      ],
      "s": [
        1.28,
        1.43,
        0.015
      ],
      "c": 15389351
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-0",
      "p": [
        -0.48,
        0.85,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 4413544
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-1",
      "p": [
        -0.31999999999999995,
        1.02,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 12818301
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-2",
      "p": [
        -0.15999999999999998,
        1.19,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 4413544
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-3",
      "p": [
        0,
        1.3599999999999999,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 12818301
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-4",
      "p": [
        0.16000000000000003,
        0.85,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 4413544
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-5",
      "p": [
        0.32000000000000006,
        1.02,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 12818301
    },
    {
      "t": "box",
      "n": "abstract-painted-panel-6",
      "p": [
        0.48,
        1.19,
        0.098
      ],
      "s": [
        0.18,
        0.33,
        0.007
      ],
      "c": 4413544
    },
    {
      "t": "rod",
      "n": "gallery-sconce-support--1",
      "from": [
        -0.5,
        2.13,
        -0.02
      ],
      "to": [
        -0.5,
        2.22,
        0.27
      ],
      "r": 0.03,
      "c": 4413544
    },
    {
      "t": "cylinder",
      "n": "gallery-spotlight--1",
      "p": [
        -0.5,
        2.18,
        0.31
      ],
      "s": [
        0.15,
        0.18,
        0.15
      ],
      "c": 15389351,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "gallery-sconce-support-1",
      "from": [
        0.5,
        2.13,
        -0.02
      ],
      "to": [
        0.5,
        2.22,
        0.27
      ],
      "r": 0.03,
      "c": 4413544
    },
    {
      "t": "cylinder",
      "n": "gallery-spotlight-1",
      "p": [
        0.5,
        2.18,
        0.31
      ],
      "s": [
        0.15,
        0.18,
        0.15
      ],
      "c": 15389351,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "curation-label",
      "p": [
        0,
        0.17,
        0.07
      ],
      "s": [
        0.59,
        0.18,
        0.04
      ],
      "c": 12818301
    }
  ]
}); }
