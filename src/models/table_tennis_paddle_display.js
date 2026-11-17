import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Table Tennis Paddle Display / 乒乓球拍双位展示架. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "sports.table-tennis-paddle-display.001",
  "slug": "table-tennis-paddle-display",
  "title": "Table Tennis Paddle Display",
  "title_zh": "乒乓球拍双位展示架",
  "summary": "Two-paddle desk display with balls, court markings and an original sculpted cradle",
  "category": "sports",
  "tags": [
    "table",
    "tennis",
    "paddle",
    "display",
    "sports",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.29,
    0.27,
    0.19
  ],
  "generator": "createTableTennisPaddleDisplay",
  "source_path": "src/models/table_tennis_paddle_display.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/table-tennis-paddle-display.webp",
  "accent": "#df8468"
};
export function createTableTennisPaddleDisplay() { return buildRecipe({
  "title": "Table Tennis Paddle Display",
  "dimensions": [
    0.29,
    0.27,
    0.19
  ],
  "parts": [
    {
      "t": "box",
      "n": "court-base",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        2.18,
        0.2,
        1.24
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "paddle-handle-0",
      "p": [
        -0.55,
        0.51,
        0.1
      ],
      "s": [
        0.17,
        0.77,
        0.16
      ],
      "c": 12957346,
      "rot": [
        0,
        0,
        -0.3
      ]
    },
    {
      "t": "sphere",
      "n": "rubber-face-0",
      "p": [
        -0.55,
        0.98,
        -0.01
      ],
      "s": [
        0.67,
        0.69,
        0.13
      ],
      "c": 7915949
    },
    {
      "t": "sphere",
      "n": "paddle-back-0",
      "p": [
        -0.55,
        0.98,
        0.1
      ],
      "s": [
        0.69,
        0.72,
        0.12
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "retaining-clamp-0",
      "p": [
        -0.55,
        0.22,
        0.17
      ],
      "s": [
        0.37,
        0.2,
        0.29
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "handle-grip-0-0",
      "p": [
        -0.55,
        0.26,
        0.21
      ],
      "s": [
        0.12,
        0.06,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "handle-grip-0-1",
      "p": [
        -0.55,
        0.41000000000000003,
        0.21
      ],
      "s": [
        0.12,
        0.06,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "handle-grip-0-2",
      "p": [
        -0.55,
        0.56,
        0.21
      ],
      "s": [
        0.12,
        0.06,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "paddle-handle-1",
      "p": [
        0.55,
        0.51,
        0.1
      ],
      "s": [
        0.17,
        0.77,
        0.16
      ],
      "c": 12957346,
      "rot": [
        0,
        0,
        0.3
      ]
    },
    {
      "t": "sphere",
      "n": "rubber-face-1",
      "p": [
        0.55,
        0.98,
        -0.01
      ],
      "s": [
        0.67,
        0.69,
        0.13
      ],
      "c": 14648424
    },
    {
      "t": "sphere",
      "n": "paddle-back-1",
      "p": [
        0.55,
        0.98,
        0.1
      ],
      "s": [
        0.69,
        0.72,
        0.12
      ],
      "c": 2570315
    },
    {
      "t": "box",
      "n": "retaining-clamp-1",
      "p": [
        0.55,
        0.22,
        0.17
      ],
      "s": [
        0.37,
        0.2,
        0.29
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "handle-grip-1-0",
      "p": [
        0.55,
        0.26,
        0.21
      ],
      "s": [
        0.12,
        0.06,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "handle-grip-1-1",
      "p": [
        0.55,
        0.41000000000000003,
        0.21
      ],
      "s": [
        0.12,
        0.06,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "handle-grip-1-2",
      "p": [
        0.55,
        0.56,
        0.21
      ],
      "s": [
        0.12,
        0.06,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "practice-ball-0",
      "p": [
        -0.72,
        0.27,
        -0.39
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15853002
    },
    {
      "t": "sphere",
      "n": "practice-ball-1",
      "p": [
        0,
        0.27,
        -0.39
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15853002
    },
    {
      "t": "sphere",
      "n": "practice-ball-2",
      "p": [
        0.72,
        0.27,
        -0.39
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "court-marking-0",
      "p": [
        -0.78,
        0.22,
        -0.54
      ],
      "s": [
        0.05,
        0.02,
        0.11
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "court-marking-1",
      "p": [
        -0.26,
        0.22,
        -0.54
      ],
      "s": [
        0.05,
        0.02,
        0.11
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "court-marking-2",
      "p": [
        0.26,
        0.22,
        -0.54
      ],
      "s": [
        0.05,
        0.02,
        0.11
      ],
      "c": 15001563
    },
    {
      "t": "box",
      "n": "court-marking-3",
      "p": [
        0.78,
        0.22,
        -0.54
      ],
      "s": [
        0.05,
        0.02,
        0.11
      ],
      "c": 15001563
    }
  ]
}); }
