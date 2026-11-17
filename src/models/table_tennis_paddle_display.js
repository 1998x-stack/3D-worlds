import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Table Tennis Paddle Display / 乒乓球拍双位展示架. Visual model only; not print-certified or a functional product. */
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
  "collection": "v1.4",
  "preview_path": "public/thumbs/table-tennis-paddle-display.webp",
  "accent": "#df8468",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      ],
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
      "c": 2570315,
      "finish": "rubber"
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
      "c": 13938523,
      "finish": "rubber"
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
      "c": 13938523,
      "finish": "rubber"
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
      "c": 13938523,
      "finish": "rubber"
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
      ],
      "finish": "rubber"
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
      "c": 14648424,
      "finish": "rubber"
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
      "c": 2570315,
      "finish": "rubber"
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
      "c": 13938523,
      "finish": "rubber"
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
      "c": 13938523,
      "finish": "rubber"
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
      "c": 13938523,
      "finish": "rubber"
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
    },
    {
      "t": "arc",
      "n": "paddle-edge-trim-0",
      "p": [
        -0.55,
        0.98,
        0.1
      ],
      "s": [
        0.99,
        1.01,
        1
      ],
      "c": 14989405,
      "finish": "metal",
      "start": 0,
      "sweep": 6.188937527571892,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-0-0",
      "p": [
        -0.55,
        0.29,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-0-1",
      "p": [
        -0.55,
        0.39499999999999996,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 9332813,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-0-2",
      "p": [
        -0.55,
        0.5,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-0-3",
      "p": [
        -0.55,
        0.605,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 9332813,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-0-4",
      "p": [
        -0.55,
        0.71,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-0-5",
      "p": [
        -0.55,
        0.815,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 9332813,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "display-paddle-lock-0",
      "p": [
        -0.55,
        0.24,
        0.27
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "arc",
      "n": "paddle-edge-trim-1",
      "p": [
        0.55,
        0.98,
        0.1
      ],
      "s": [
        0.99,
        1.01,
        1
      ],
      "c": 14989405,
      "finish": "metal",
      "start": 0,
      "sweep": 6.188937527571892,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-1-0",
      "p": [
        0.55,
        0.29,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-1-1",
      "p": [
        0.55,
        0.39499999999999996,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 9332813,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-1-2",
      "p": [
        0.55,
        0.5,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-1-3",
      "p": [
        0.55,
        0.605,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 9332813,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-1-4",
      "p": [
        0.55,
        0.71,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "rubber-grip-texture-1-5",
      "p": [
        0.55,
        0.815,
        0.22
      ],
      "s": [
        0.16,
        0.029,
        0.027
      ],
      "c": 9332813,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "display-paddle-lock-1",
      "p": [
        0.55,
        0.24,
        0.27
      ],
      "s": [
        0.19,
        0.13,
        0.19
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "ball-seat-0",
      "p": [
        -0.72,
        0.19,
        -0.39
      ],
      "s": [
        0.24,
        0.05,
        0.25
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "ball-seat-1",
      "p": [
        0,
        0.19,
        -0.39
      ],
      "s": [
        0.24,
        0.05,
        0.25
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "ball-seat-2",
      "p": [
        0.72,
        0.19,
        -0.39
      ],
      "s": [
        0.24,
        0.05,
        0.25
      ],
      "c": 3162970,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "net-court-line-0",
      "p": [
        -0.87,
        0.23,
        -0.03
      ],
      "s": [
        0.02,
        0.018,
        0.7
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "net-court-line-1",
      "p": [
        -0.43,
        0.23,
        -0.03
      ],
      "s": [
        0.02,
        0.018,
        0.7
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "net-court-line-2",
      "p": [
        0.010000000000000009,
        0.23,
        -0.03
      ],
      "s": [
        0.02,
        0.018,
        0.7
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "net-court-line-3",
      "p": [
        0.45000000000000007,
        0.23,
        -0.03
      ],
      "s": [
        0.02,
        0.018,
        0.7
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "net-court-line-4",
      "p": [
        0.89,
        0.23,
        -0.03
      ],
      "s": [
        0.02,
        0.018,
        0.7
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "scoring-marker",
      "p": [
        0,
        0.22,
        0.45
      ],
      "s": [
        0.42,
        0.12,
        0.035
      ],
      "c": 7981487,
      "finish": "glow"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
