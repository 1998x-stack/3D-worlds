import { buildRecipe } from './recipe_engine.js';
/** Nesting Side Table Set — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "furniture.nesting-side-table-set.001",
  "slug": "nesting-side-table-set",
  "title": "Nesting Side Table Set",
  "title_zh": "套叠边几组合",
  "summary": "Three-height steel nesting side tables with rounded stone-like tops",
  "category": "furniture",
  "tags": [
    "table",
    "nesting",
    "living"
  ],
  "dimensions_m": [
    1.24,
    0.69,
    0.47
  ],
  "generator": "createNestingSideTableSet",
  "source_path": "src/models/nesting_side_table_set.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/nesting-side-table-set.webp"
};
export function createNestingSideTableSet() { return buildRecipe({
  "title": "Nesting Side Table Set",
  "dimensions": [
    1.24,
    0.69,
    0.47
  ],
  "parts": [
    {
      "t": "box",
      "n": "tabletop-0",
      "p": [
        -0.42,
        0.66,
        0
      ],
      "s": [
        0.42,
        0.045,
        0.47
      ],
      "c": 13352873
    },
    {
      "t": "rod",
      "n": "leg-0-0-0",
      "from": [
        -0.58,
        0.07,
        -0.17
      ],
      "to": [
        -0.58,
        0.62,
        -0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-0-0-1",
      "from": [
        -0.58,
        0.07,
        0.17
      ],
      "to": [
        -0.58,
        0.62,
        0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-0-1-0",
      "from": [
        -0.26,
        0.07,
        -0.17
      ],
      "to": [
        -0.26,
        0.62,
        -0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-0-1-1",
      "from": [
        -0.26,
        0.07,
        0.17
      ],
      "to": [
        -0.26,
        0.62,
        0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "box",
      "n": "underbrace-0",
      "p": [
        -0.42,
        0.25,
        0
      ],
      "s": [
        0.34,
        0.025,
        0.026
      ],
      "c": 9149339
    },
    {
      "t": "box",
      "n": "tabletop-1",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.42,
        0.045,
        0.47
      ],
      "c": 10399403
    },
    {
      "t": "rod",
      "n": "leg-1-0-0",
      "from": [
        -0.16,
        0.07,
        -0.17
      ],
      "to": [
        -0.16,
        0.49,
        -0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-1-0-1",
      "from": [
        -0.16,
        0.07,
        0.17
      ],
      "to": [
        -0.16,
        0.49,
        0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-1-1-0",
      "from": [
        0.16,
        0.07,
        -0.17
      ],
      "to": [
        0.16,
        0.49,
        -0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-1-1-1",
      "from": [
        0.16,
        0.07,
        0.17
      ],
      "to": [
        0.16,
        0.49,
        0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "box",
      "n": "underbrace-1",
      "p": [
        0,
        0.25,
        0
      ],
      "s": [
        0.34,
        0.025,
        0.026
      ],
      "c": 9149339
    },
    {
      "t": "box",
      "n": "tabletop-2",
      "p": [
        0.42,
        0.4,
        0
      ],
      "s": [
        0.42,
        0.045,
        0.47
      ],
      "c": 12491133
    },
    {
      "t": "rod",
      "n": "leg-2-0-0",
      "from": [
        0.26,
        0.07,
        -0.17
      ],
      "to": [
        0.26,
        0.36,
        -0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-2-0-1",
      "from": [
        0.26,
        0.07,
        0.17
      ],
      "to": [
        0.26,
        0.36,
        0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-2-1-0",
      "from": [
        0.58,
        0.07,
        -0.17
      ],
      "to": [
        0.58,
        0.36,
        -0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "rod",
      "n": "leg-2-1-1",
      "from": [
        0.58,
        0.07,
        0.17
      ],
      "to": [
        0.58,
        0.36,
        0.17
      ],
      "r": 0.016,
      "c": 3357765
    },
    {
      "t": "box",
      "n": "underbrace-2",
      "p": [
        0.42,
        0.25,
        0
      ],
      "s": [
        0.34,
        0.025,
        0.026
      ],
      "c": 9149339
    },
    {
      "t": "box",
      "n": "lower-rail",
      "p": [
        0,
        0.045,
        -0.2
      ],
      "s": [
        1.21,
        0.015,
        0.02
      ],
      "c": 12755572
    }
  ]
}); }
