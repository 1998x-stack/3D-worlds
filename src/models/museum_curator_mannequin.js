import { buildRecipe } from './recipe_engine.js';
/** Museum Curator Mannequin: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "characters.museum-curator-mannequin.001",
  "slug": "museum-curator-mannequin",
  "title": "Museum Curator Mannequin",
  "title_zh": "博物馆策展人原型",
  "summary": "Unrigged museum curator in blazer, badge, tablet and folded exhibition pamphlet",
  "category": "characters",
  "tags": [
    "curator",
    "museum",
    "character"
  ],
  "dimensions_m": [
    0.96,
    1.91,
    0.72
  ],
  "generator": "createMuseumCuratorMannequin",
  "source_path": "src/models/museum_curator_mannequin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/museum-curator-mannequin.webp"
};
export function createMuseumCuratorMannequin() { return buildRecipe({
  "title": "Museum Curator Mannequin",
  "dimensions": [
    0.96,
    1.91,
    0.72
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "torso",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        0.6,
        0.75,
        0.42
      ],
      "c": 7569527
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.7,
        0
      ],
      "s": [
        0.33,
        0.32,
        0.3
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "sleeve-0",
      "from": [
        -0.34,
        1.4,
        0
      ],
      "to": [
        -0.42,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 7569527
    },
    {
      "t": "sphere",
      "n": "hand-0",
      "p": [
        -0.43,
        0.88,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "leg-0",
      "from": [
        -0.18,
        0.85,
        0
      ],
      "to": [
        -0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shoe-0",
      "p": [
        -0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.34
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "sleeve-1",
      "from": [
        0.34,
        1.4,
        0
      ],
      "to": [
        0.42,
        0.94,
        0.02
      ],
      "r": 0.11,
      "c": 7569527
    },
    {
      "t": "sphere",
      "n": "hand-1",
      "p": [
        0.43,
        0.88,
        0.02
      ],
      "s": [
        0.12,
        0.11,
        0.11
      ],
      "c": 13149579
    },
    {
      "t": "rod",
      "n": "leg-1",
      "from": [
        0.18,
        0.85,
        0
      ],
      "to": [
        0.2,
        0.2,
        0
      ],
      "r": 0.14,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "shoe-1",
      "p": [
        0.2,
        0.11,
        0.12
      ],
      "s": [
        0.28,
        0.21,
        0.34
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "hair",
      "p": [
        0,
        1.87,
        -0.02
      ],
      "s": [
        0.34,
        0.14,
        0.32
      ],
      "c": 5260600
    },
    {
      "t": "box",
      "n": "shirt",
      "p": [
        0,
        1.34,
        0.23
      ],
      "s": [
        0.24,
        0.25,
        0.017
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "curator-badge",
      "p": [
        0.19,
        1.37,
        0.237
      ],
      "s": [
        0.15,
        0.14,
        0.016
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "tablet",
      "p": [
        0.45,
        0.99,
        0.2
      ],
      "s": [
        0.048,
        0.38,
        0.26
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "tablet-screen",
      "p": [
        0.48,
        0.99,
        0.2
      ],
      "s": [
        0.017,
        0.29,
        0.19
      ],
      "c": 6195618
    },
    {
      "t": "box",
      "n": "brochure",
      "p": [
        -0.45,
        0.91,
        0.16
      ],
      "s": [
        0.23,
        0.22,
        0.033
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "brochure-line-0",
      "p": [
        -0.45,
        1,
        0.19
      ],
      "s": [
        0.16,
        0.011,
        0.009
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "brochure-line-1",
      "p": [
        -0.45,
        0.965,
        0.19
      ],
      "s": [
        0.16,
        0.011,
        0.009
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "brochure-line-2",
      "p": [
        -0.45,
        0.9299999999999999,
        0.19
      ],
      "s": [
        0.16,
        0.011,
        0.009
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "brochure-line-3",
      "p": [
        -0.45,
        0.895,
        0.19
      ],
      "s": [
        0.16,
        0.011,
        0.009
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "brochure-line-4",
      "p": [
        -0.45,
        0.86,
        0.19
      ],
      "s": [
        0.16,
        0.011,
        0.009
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "jacket-button",
      "p": [
        0,
        1.16,
        0.246
      ],
      "s": [
        0.035,
        0.035,
        0.016
      ],
      "c": 13149293
    },
    {
      "t": "rod",
      "n": "tablet-stylus",
      "from": [
        0.5,
        0.88,
        0.36
      ],
      "to": [
        0.5,
        1.12,
        0.36
      ],
      "r": 0.009,
      "c": 9609892
    },
    {
      "t": "box",
      "n": "scarf",
      "p": [
        0,
        1.51,
        0.2
      ],
      "s": [
        0.28,
        0.09,
        0.035
      ],
      "c": 12892576
    }
  ]
}); }
