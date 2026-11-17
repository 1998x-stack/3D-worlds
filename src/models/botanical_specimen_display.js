import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Botanical Specimen Display / 植物标本展示玻璃柜. */
export const assetMeta = {
  "id": "decor.botanical-specimen-display.001",
  "slug": "botanical-specimen-display",
  "title": "Botanical Specimen Display",
  "title_zh": "植物标本展示玻璃柜",
  "summary": "Museum plant specimens in glass display case with herbarium labels",
  "category": "decor",
  "tags": [
    "botanical",
    "specimen",
    "display",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.14,
    1.9,
    0.75
  ],
  "generator": "createBotanicalSpecimenDisplay",
  "source_path": "src/models/botanical_specimen_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/botanical-specimen-display.webp",
  "accent": "#c6a582"
};
export function createBotanicalSpecimenDisplay() { return buildRecipe({
  "title": "Botanical Specimen Display",
  "dimensions": [
    1.14,
    1.9,
    0.75
  ],
  "parts": [
    {
      "t": "box",
      "n": "exhibit-pedestal",
      "p": [
        0,
        0.34,
        0
      ],
      "s": [
        1,
        0.67,
        0.63
      ],
      "c": 13018498
    },
    {
      "t": "rod",
      "n": "showcase-glass-vertical--0.47--0.27",
      "from": [
        -0.47,
        0.68,
        -0.27
      ],
      "to": [
        -0.47,
        1.81,
        -0.27
      ],
      "r": 0.019,
      "c": 5335924
    },
    {
      "t": "rod",
      "n": "showcase-glass-vertical--0.47-0.27",
      "from": [
        -0.47,
        0.68,
        0.27
      ],
      "to": [
        -0.47,
        1.81,
        0.27
      ],
      "r": 0.019,
      "c": 5335924
    },
    {
      "t": "rod",
      "n": "showcase-glass-vertical-0.47--0.27",
      "from": [
        0.47,
        0.68,
        -0.27
      ],
      "to": [
        0.47,
        1.81,
        -0.27
      ],
      "r": 0.019,
      "c": 5335924
    },
    {
      "t": "rod",
      "n": "showcase-glass-vertical-0.47-0.27",
      "from": [
        0.47,
        0.68,
        0.27
      ],
      "to": [
        0.47,
        1.81,
        0.27
      ],
      "r": 0.019,
      "c": 5335924
    },
    {
      "t": "box",
      "n": "specimen-glass-cover",
      "p": [
        0,
        1.83,
        0
      ],
      "s": [
        1.02,
        0.07,
        0.64
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "preserved-stem-0",
      "from": [
        -0.25,
        0.8,
        0
      ],
      "to": [
        -0.25,
        1.45,
        0
      ],
      "r": 0.021,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "pressed-leaf-0--1",
      "p": [
        -0.37,
        1.17,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.12
      ],
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "pressed-leaf-0-1",
      "p": [
        -0.13,
        1.17,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.12
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "herbarium-tag-0",
      "p": [
        -0.25,
        0.79,
        0.34
      ],
      "s": [
        0.23,
        0.1,
        0.021
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "preserved-stem-1",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        0,
        1.45,
        0
      ],
      "r": 0.021,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "pressed-leaf-1--1",
      "p": [
        -0.12,
        1.17,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.12
      ],
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "pressed-leaf-1-1",
      "p": [
        0.12,
        1.17,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.12
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "herbarium-tag-1",
      "p": [
        0,
        0.79,
        0.34
      ],
      "s": [
        0.23,
        0.1,
        0.021
      ],
      "c": 15191480
    },
    {
      "t": "rod",
      "n": "preserved-stem-2",
      "from": [
        0.25,
        0.8,
        0
      ],
      "to": [
        0.25,
        1.45,
        0
      ],
      "r": 0.021,
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "pressed-leaf-2--1",
      "p": [
        0.13,
        1.17,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.12
      ],
      "c": 8626552
    },
    {
      "t": "sphere",
      "n": "pressed-leaf-2-1",
      "p": [
        0.37,
        1.17,
        0
      ],
      "s": [
        0.16,
        0.07,
        0.12
      ],
      "c": 8626552
    },
    {
      "t": "box",
      "n": "herbarium-tag-2",
      "p": [
        0.25,
        0.79,
        0.34
      ],
      "s": [
        0.23,
        0.1,
        0.021
      ],
      "c": 15191480
    },
    {
      "t": "box",
      "n": "museum-provenance-plaque",
      "p": [
        0,
        0.37,
        0.35
      ],
      "s": [
        0.52,
        0.18,
        0.023
      ],
      "c": 5335924
    }
  ]
}); }
