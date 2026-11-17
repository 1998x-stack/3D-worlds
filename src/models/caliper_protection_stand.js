import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Caliper Protection Stand / 游标卡尺保护收纳架. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "tools.caliper-protection-stand.001",
  "slug": "caliper-protection-stand",
  "title": "Caliper Protection Stand",
  "title_zh": "游标卡尺保护收纳架",
  "summary": "Angled desktop measuring-tool rest with calibrated-looking jaw supports and spare pen slots",
  "category": "tools",
  "tags": [
    "caliper",
    "protection",
    "stand",
    "tools",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.27,
    0.18,
    0.16
  ],
  "generator": "createCaliperProtectionStand",
  "source_path": "src/models/caliper_protection_stand.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/caliper-protection-stand.webp",
  "accent": "#6d8394"
};
export function createCaliperProtectionStand() { return buildRecipe({
  "title": "Caliper Protection Stand",
  "dimensions": [
    0.27,
    0.18,
    0.16
  ],
  "parts": [
    {
      "t": "box",
      "n": "plinth",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.95,
        0.18,
        1.12
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "angled-backrest",
      "p": [
        0,
        0.64,
        -0.35
      ],
      "s": [
        1.74,
        0.13,
        0.54
      ],
      "c": 4084325,
      "rot": [
        -0.23,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "caliper-rail-a",
      "from": [
        -0.75,
        0.98,
        -0.26
      ],
      "to": [
        0.75,
        0.98,
        -0.26
      ],
      "r": 0.06,
      "c": 7915949
    },
    {
      "t": "rod",
      "n": "caliper-rail-b",
      "from": [
        -0.75,
        0.71,
        -0.17
      ],
      "to": [
        0.75,
        0.71,
        -0.17
      ],
      "r": 0.035,
      "c": 7177108
    },
    {
      "t": "box",
      "n": "measurement-index-0",
      "p": [
        -0.7,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-1",
      "p": [
        -0.49999999999999994,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-2",
      "p": [
        -0.29999999999999993,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-3",
      "p": [
        -0.09999999999999987,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-4",
      "p": [
        0.10000000000000009,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-5",
      "p": [
        0.30000000000000004,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-6",
      "p": [
        0.5000000000000002,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "measurement-index-7",
      "p": [
        0.7000000000000002,
        1.04,
        -0.2
      ],
      "s": [
        0.023,
        0.09,
        0.03
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "tool-rest-0",
      "p": [
        -0.64,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-0",
      "p": [
        -0.64,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tool-rest-1",
      "p": [
        -0.22000000000000003,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-1",
      "p": [
        -0.22000000000000003,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tool-rest-2",
      "p": [
        0.19999999999999996,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-2",
      "p": [
        0.19999999999999996,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "tool-rest-3",
      "p": [
        0.62,
        0.26,
        0.32
      ],
      "s": [
        0.24,
        0.16,
        0.47
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "rubber-seat-3",
      "p": [
        0.62,
        0.36,
        0.31
      ],
      "s": [
        0.12,
        0.06,
        0.14
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "side-stop0",
      "p": [
        -0.84,
        0.58,
        -0.3
      ],
      "s": [
        0.12,
        0.65,
        0.28
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "side-stop1",
      "p": [
        0.84,
        0.58,
        -0.3
      ],
      "s": [
        0.12,
        0.65,
        0.28
      ],
      "c": 15776881
    }
  ]
}); }
