import { buildRecipe } from './recipe_engine.js';
/** Museum Display Plinth: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "furniture.museum-display-plinth.001",
  "slug": "museum-display-plinth",
  "title": "Museum Display Plinth",
  "title_zh": "博物馆展陈基座",
  "summary": "Glass-topped museum showcase with artifact, plinth and information plate",
  "category": "furniture",
  "tags": [
    "museum",
    "artifact",
    "display"
  ],
  "dimensions_m": [
    0.78,
    1.68,
    0.72
  ],
  "generator": "createMuseumDisplayPlinth",
  "source_path": "src/models/museum_display_plinth.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/museum-display-plinth.webp"
};
export function createMuseumDisplayPlinth() { return buildRecipe({
  "title": "Museum Display Plinth",
  "dimensions": [
    0.78,
    1.68,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "plinth-body",
      "p": [
        0,
        0.52,
        0
      ],
      "s": [
        0.75,
        1.04,
        0.69
      ],
      "c": 11053989
    },
    {
      "t": "box",
      "n": "plinth-trim",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        0.78,
        0.18,
        0.71
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "vitrine-bottom",
      "p": [
        0,
        1.07,
        0
      ],
      "s": [
        0.77,
        0.06,
        0.7
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "glass-cabinet",
      "p": [
        0,
        1.37,
        0
      ],
      "s": [
        0.71,
        0.55,
        0.65
      ],
      "c": 9813440
    },
    {
      "t": "box",
      "n": "glass-top",
      "p": [
        0,
        1.65,
        0
      ],
      "s": [
        0.75,
        0.05,
        0.7
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "vitrine-corner-0-0",
      "p": [
        -0.33,
        1.38,
        -0.29
      ],
      "s": [
        0.024,
        0.51,
        0.024
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "vitrine-corner-0-1",
      "p": [
        -0.33,
        1.38,
        0.29
      ],
      "s": [
        0.024,
        0.51,
        0.024
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "vitrine-corner-1-0",
      "p": [
        0.33,
        1.38,
        -0.29
      ],
      "s": [
        0.024,
        0.51,
        0.024
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "vitrine-corner-1-1",
      "p": [
        0.33,
        1.38,
        0.29
      ],
      "s": [
        0.024,
        0.51,
        0.024
      ],
      "c": 3620935
    },
    {
      "t": "cylinder",
      "n": "relic-base",
      "p": [
        0,
        1.21,
        0
      ],
      "s": [
        0.28,
        0.2,
        0.27
      ],
      "c": 13149293
    },
    {
      "t": "sphere",
      "n": "sculptural-relic",
      "p": [
        0,
        1.41,
        0
      ],
      "s": [
        0.28,
        0.25,
        0.23
      ],
      "c": 12026717
    },
    {
      "t": "box",
      "n": "info-plaque",
      "p": [
        0,
        0.75,
        0.358
      ],
      "s": [
        0.55,
        0.26,
        0.02
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "caption-line-0",
      "p": [
        0,
        0.84,
        0.375
      ],
      "s": [
        0.41,
        0.012,
        0.006
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "caption-line-1",
      "p": [
        0,
        0.7999999999999999,
        0.375
      ],
      "s": [
        0.41,
        0.012,
        0.006
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "caption-line-2",
      "p": [
        0,
        0.76,
        0.375
      ],
      "s": [
        0.41,
        0.012,
        0.006
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "caption-line-3",
      "p": [
        0,
        0.72,
        0.375
      ],
      "s": [
        0.41,
        0.012,
        0.006
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "caption-line-4",
      "p": [
        0,
        0.6799999999999999,
        0.375
      ],
      "s": [
        0.41,
        0.012,
        0.006
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "cabinet-lock",
      "p": [
        0.3,
        1.31,
        0.345
      ],
      "s": [
        0.025,
        0.034,
        0.015
      ],
      "c": 13149293
    }
  ]
}); }
