import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "architecture.masonry-brick-chimney.001",
  "slug": "masonry-brick-chimney",
  "title": "Masonry Brick Chimney",
  "title_zh": "砖砌屋顶烟囱",
  "summary": "Brickwork flue with mortar pattern, cap supports and metal rain cover",
  "category": "architecture",
  "tags": [
    "chimney",
    "brick",
    "roof"
  ],
  "dimensions_m": [
    0.85,
    2.31,
    0.82
  ],
  "generator": "createMasonryBrickChimney",
  "source_path": "src/models/masonry_brick_chimney.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/masonry-brick-chimney.webp"
};
export function createMasonryBrickChimney() { return buildRecipe({
  "title": "Masonry Brick Chimney",
  "dimensions": [
    0.85,
    2.31,
    0.82
  ],
  "parts": [
    {
      "t": "box",
      "n": "brick-shaft",
      "p": [
        0,
        1.04,
        0
      ],
      "s": [
        0.73,
        2.08,
        0.7
      ],
      "c": 11036493
    },
    {
      "t": "box",
      "n": "course-0",
      "p": [
        0,
        0.23,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 8016195
    },
    {
      "t": "box",
      "n": "course-1",
      "p": [
        0,
        0.45,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 14726037
    },
    {
      "t": "box",
      "n": "course-2",
      "p": [
        0,
        0.67,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 8016195
    },
    {
      "t": "box",
      "n": "course-3",
      "p": [
        0,
        0.89,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 14726037
    },
    {
      "t": "box",
      "n": "course-4",
      "p": [
        0,
        1.11,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 8016195
    },
    {
      "t": "box",
      "n": "course-5",
      "p": [
        0,
        1.33,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 14726037
    },
    {
      "t": "box",
      "n": "course-6",
      "p": [
        0,
        1.55,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 8016195
    },
    {
      "t": "box",
      "n": "course-7",
      "p": [
        0,
        1.77,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 14726037
    },
    {
      "t": "box",
      "n": "course-8",
      "p": [
        0,
        1.99,
        0.361
      ],
      "s": [
        0.72,
        0.025,
        0.018
      ],
      "c": 8016195
    },
    {
      "t": "box",
      "n": "joint-0-0",
      "p": [
        -0.35,
        0.24,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-0-1",
      "p": [
        -0.35,
        0.6599999999999999,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-0-2",
      "p": [
        -0.35,
        1.08,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-0-3",
      "p": [
        -0.35,
        1.5,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-0-4",
      "p": [
        -0.35,
        1.92,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-1-0",
      "p": [
        0.35,
        0.24,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-1-1",
      "p": [
        0.35,
        0.6599999999999999,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-1-2",
      "p": [
        0.35,
        1.08,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-1-3",
      "p": [
        0.35,
        1.5,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "joint-1-4",
      "p": [
        0.35,
        1.92,
        0.367
      ],
      "s": [
        0.019,
        0.2,
        0.014
      ],
      "c": 14532262
    },
    {
      "t": "box",
      "n": "corbel",
      "p": [
        0,
        2.08,
        0
      ],
      "s": [
        0.83,
        0.19,
        0.81
      ],
      "c": 9986380
    },
    {
      "t": "box",
      "n": "terracotta-top",
      "p": [
        0,
        2.2,
        0
      ],
      "s": [
        0.85,
        0.19,
        0.82
      ],
      "c": 10121045
    },
    {
      "t": "box",
      "n": "flue",
      "p": [
        0,
        2.3,
        0
      ],
      "s": [
        0.4,
        0.023,
        0.39
      ],
      "c": 3555399
    },
    {
      "t": "box",
      "n": "rain-hood",
      "p": [
        0,
        2.43,
        0
      ],
      "s": [
        0.69,
        0.065,
        0.65
      ],
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "cap-support-0-0",
      "from": [
        -0.25,
        2.24,
        -0.23
      ],
      "to": [
        -0.25,
        2.43,
        -0.23
      ],
      "r": 0.021,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "cap-support-0-1",
      "from": [
        -0.25,
        2.24,
        0.23
      ],
      "to": [
        -0.25,
        2.43,
        0.23
      ],
      "r": 0.021,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "cap-support-1-0",
      "from": [
        0.25,
        2.24,
        -0.23
      ],
      "to": [
        0.25,
        2.43,
        -0.23
      ],
      "r": 0.021,
      "c": 9872549
    },
    {
      "t": "rod",
      "n": "cap-support-1-1",
      "from": [
        0.25,
        2.24,
        0.23
      ],
      "to": [
        0.25,
        2.43,
        0.23
      ],
      "r": 0.021,
      "c": 9872549
    },
    {
      "t": "sphere",
      "n": "soot-mark",
      "p": [
        0,
        2.35,
        -0.04
      ],
      "s": [
        0.27,
        0.015,
        0.27
      ],
      "c": 5461073
    }
  ]
}); }
