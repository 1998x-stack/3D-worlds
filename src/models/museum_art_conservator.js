import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Museum Art Conservator / 博物馆文物修复师人物. */
export const assetMeta = {
  "id": "characters.museum-art-conservator.001",
  "slug": "museum-art-conservator",
  "title": "Museum Art Conservator",
  "title_zh": "博物馆文物修复师人物",
  "summary": "Unrigged conservator with brush, cotton gloves and restoration clipboard",
  "category": "characters",
  "tags": [
    "museum",
    "art",
    "conservator",
    "characters",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.07,
    1.9,
    0.89
  ],
  "generator": "createMuseumArtConservator",
  "source_path": "src/models/museum_art_conservator.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/museum-art-conservator.webp",
  "accent": "#e9d7b9"
};
export function createMuseumArtConservator() { return buildRecipe({
  "title": "Museum Art Conservator",
  "dimensions": [
    1.07,
    1.9,
    0.89
  ],
  "parts": [
    {
      "t": "box",
      "n": "museum-art-conservator-specialist-torso",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        0.49,
        0.71,
        0.31
      ],
      "c": 7050634
    },
    {
      "t": "sphere",
      "n": "museum-art-conservator-specialist-face",
      "p": [
        0,
        1.79,
        0
      ],
      "s": [
        0.24,
        0.25,
        0.21
      ],
      "c": 15325113
    },
    {
      "t": "cylinder",
      "n": "museum-art-conservator-neck-joint",
      "p": [
        0,
        1.56,
        0
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-work-arm-upper--1",
      "from": [
        -0.28,
        1.43,
        0
      ],
      "to": [
        -0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-work-forearm--1",
      "from": [
        -0.37,
        1.04,
        0.06
      ],
      "to": [
        -0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-trouser-upper-leg--1",
      "from": [
        -0.14,
        0.89,
        0
      ],
      "to": [
        -0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-trouser-lower-leg--1",
      "from": [
        -0.16,
        0.48,
        0.04
      ],
      "to": [
        -0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "museum-art-conservator-work-safety-boot--1",
      "p": [
        -0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-work-arm-upper-1",
      "from": [
        0.28,
        1.43,
        0
      ],
      "to": [
        0.37,
        1.04,
        0.06
      ],
      "r": 0.079,
      "c": 7050634
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-work-forearm-1",
      "from": [
        0.37,
        1.04,
        0.06
      ],
      "to": [
        0.41,
        0.76,
        0.27
      ],
      "r": 0.062,
      "c": 15325113
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-trouser-upper-leg-1",
      "from": [
        0.14,
        0.89,
        0
      ],
      "to": [
        0.16,
        0.48,
        0.04
      ],
      "r": 0.1,
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-trouser-lower-leg-1",
      "from": [
        0.16,
        0.48,
        0.04
      ],
      "to": [
        0.18,
        0.12,
        0.1
      ],
      "r": 0.08,
      "c": 14396805
    },
    {
      "t": "box",
      "n": "museum-art-conservator-work-safety-boot-1",
      "p": [
        0.18,
        0.073,
        0.14
      ],
      "s": [
        0.24,
        0.14,
        0.31
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "museum-art-conservator-art-restoration-whitecoat",
      "p": [
        0,
        1.2,
        0.19
      ],
      "s": [
        0.46,
        0.61,
        0.05
      ],
      "c": 15066334
    },
    {
      "t": "box",
      "n": "museum-art-conservator-restoration-catalogue-board",
      "p": [
        0.42,
        0.94,
        0.34
      ],
      "s": [
        0.29,
        0.37,
        0.05
      ],
      "c": 14396805
    },
    {
      "t": "rod",
      "n": "museum-art-conservator-conservator-fine-restoration-brush",
      "from": [
        0.54,
        0.79,
        0.33
      ],
      "to": [
        0.66,
        1.18,
        0.28
      ],
      "r": 0.015,
      "c": 15325113
    },
    {
      "t": "box",
      "n": "museum-art-conservator-archival-face-mask",
      "p": [
        0,
        1.72,
        0.19
      ],
      "s": [
        0.31,
        0.13,
        0.06
      ],
      "c": 3756393
    },
    {
      "t": "box",
      "n": "museum-art-conservator-protective-coat-button-0",
      "p": [
        0,
        1.01,
        0.23
      ],
      "s": [
        0.026,
        0.028,
        0.014
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "museum-art-conservator-protective-coat-button-1",
      "p": [
        0,
        1.125,
        0.23
      ],
      "s": [
        0.026,
        0.028,
        0.014
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "museum-art-conservator-protective-coat-button-2",
      "p": [
        0,
        1.24,
        0.23
      ],
      "s": [
        0.026,
        0.028,
        0.014
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "museum-art-conservator-protective-coat-button-3",
      "p": [
        0,
        1.355,
        0.23
      ],
      "s": [
        0.026,
        0.028,
        0.014
      ],
      "c": 15325113
    },
    {
      "t": "box",
      "n": "museum-art-conservator-protective-coat-button-4",
      "p": [
        0,
        1.47,
        0.23
      ],
      "s": [
        0.026,
        0.028,
        0.014
      ],
      "c": 15325113
    }
  ]
}); }
