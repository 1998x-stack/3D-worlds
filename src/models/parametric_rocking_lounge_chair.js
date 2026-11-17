import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Parametric Rocking Lounge Chair / 参数化摇椅. */
export const assetMeta = {
  "id": "furniture.parametric-rocking-lounge-chair.001",
  "slug": "parametric-rocking-lounge-chair",
  "title": "Parametric Rocking Lounge Chair",
  "title_zh": "参数化摇椅",
  "summary": "Sculptural curved rocking chair with lamellar ribs and upholstered seat insert",
  "category": "furniture",
  "tags": [
    "parametric",
    "rocking",
    "lounge",
    "chair",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.08,
    1.26,
    1.48
  ],
  "generator": "createParametricRockingLoungeChair",
  "source_path": "src/models/parametric_rocking_lounge_chair.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/parametric-rocking-lounge-chair.webp",
  "accent": "#5c7788"
};
export function createParametricRockingLoungeChair() { return buildRecipe({
  "title": "Parametric Rocking Lounge Chair",
  "dimensions": [
    1.08,
    1.26,
    1.48
  ],
  "parts": [
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-0",
      "p": [
        0,
        0.56,
        -0.55
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-1",
      "p": [
        0,
        0.6215636257986205,
        -0.42000000000000004
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-2",
      "p": [
        0,
        0.6757017697435771,
        -0.29000000000000004
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-3",
      "p": [
        0,
        0.715884572681199,
        -0.16000000000000003
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-4",
      "p": [
        0,
        0.7372653955421975,
        -0.030000000000000027
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-5",
      "p": [
        0,
        0.7372653955421975,
        0.09999999999999998
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-6",
      "p": [
        0,
        0.715884572681199,
        0.22999999999999998
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-7",
      "p": [
        0,
        0.6757017697435772,
        0.36
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-8",
      "p": [
        0,
        0.6215636257986205,
        0.49
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-lamella-seat-9",
      "p": [
        0,
        0.56,
        0.6199999999999999
      ],
      "s": [
        0.7,
        0.06,
        0.12
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-0",
      "p": [
        -0.48,
        0.21187499999999998,
        -0.7
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        -0.12,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-1",
      "p": [
        -0.48,
        0.1775,
        -0.49999999999999994
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        -0.08,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-2",
      "p": [
        -0.48,
        0.156875,
        -0.29999999999999993
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        -0.04,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-3",
      "p": [
        -0.48,
        0.15,
        -0.09999999999999987
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-4",
      "p": [
        -0.48,
        0.156875,
        0.10000000000000009
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.04,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-5",
      "p": [
        -0.48,
        0.1775,
        0.30000000000000004
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.08,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-6",
      "p": [
        -0.48,
        0.21187499999999998,
        0.5000000000000002
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.12,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc--1-7",
      "p": [
        -0.48,
        0.26,
        0.7000000000000002
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.16,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "parametric-rocking-lounge-chair-rocking-armrest--1",
      "from": [
        -0.46,
        0.48,
        0.41
      ],
      "to": [
        -0.46,
        0.97,
        -0.29
      ],
      "r": 0.056,
      "c": 6059912
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-0",
      "p": [
        0.48,
        0.21187499999999998,
        -0.7
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        -0.12,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-1",
      "p": [
        0.48,
        0.1775,
        -0.49999999999999994
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        -0.08,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-2",
      "p": [
        0.48,
        0.156875,
        -0.29999999999999993
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        -0.04,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-3",
      "p": [
        0.48,
        0.15,
        -0.09999999999999987
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-4",
      "p": [
        0.48,
        0.156875,
        0.10000000000000009
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.04,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-5",
      "p": [
        0.48,
        0.1775,
        0.30000000000000004
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.08,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-6",
      "p": [
        0.48,
        0.21187499999999998,
        0.5000000000000002
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.12,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "parametric-rocking-lounge-chair-rocker-arc-1-7",
      "p": [
        0.48,
        0.26,
        0.7000000000000002
      ],
      "s": [
        0.074,
        0.11,
        0.21
      ],
      "c": 4150112,
      "rot": [
        0.16,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "parametric-rocking-lounge-chair-rocking-armrest-1",
      "from": [
        0.46,
        0.48,
        0.41
      ],
      "to": [
        0.46,
        0.97,
        -0.29
      ],
      "r": 0.056,
      "c": 6059912
    },
    {
      "t": "sphere",
      "n": "parametric-rocking-lounge-chair-soft-rocking-chair-cushion",
      "p": [
        0,
        0.71,
        0.05
      ],
      "s": [
        0.76,
        0.13,
        0.65
      ],
      "c": 15061166
    }
  ]
}); }
