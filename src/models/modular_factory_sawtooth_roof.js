import { buildRecipe } from './recipe_engine.js';
/** Modular Factory Sawtooth Roof: original authored procedural geometry. */
export const assetMeta = {
  "id": "architecture.modular-factory-sawtooth-roof.001",
  "slug": "modular-factory-sawtooth-roof",
  "title": "Modular Factory Sawtooth Roof",
  "title_zh": "工业厂房锯齿形屋顶模块",
  "summary": "Modular industrial roof structure with repeated sawtooth skylights and steel trusses",
  "category": "architecture",
  "tags": [
    "factory",
    "roof",
    "sawtooth"
  ],
  "dimensions_m": [
    3.54,
    2.04,
    2.64
  ],
  "generator": "createModularFactorySawtoothRoof",
  "source_path": "src/models/modular_factory_sawtooth_roof.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/modular-factory-sawtooth-roof.webp"
};
export function createModularFactorySawtoothRoof() { return buildRecipe({
  "title": "Modular Factory Sawtooth Roof",
  "dimensions": [
    3.54,
    2.04,
    2.64
  ],
  "parts": [
    {
      "t": "box",
      "n": "factory-roof-base",
      "p": [
        0,
        0.29,
        0
      ],
      "s": [
        3.52,
        0.14,
        2.6
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "sawtooth-panel-0",
      "p": [
        -1.45,
        1.64,
        0
      ],
      "s": [
        0.54,
        0.09,
        2.51
      ],
      "c": 10069413,
      "rot": [
        0,
        0,
        -0.38
      ]
    },
    {
      "t": "box",
      "n": "north-facing-skylight-0",
      "p": [
        -1.45,
        1.61,
        0.03
      ],
      "s": [
        0.52,
        0.48,
        0.035
      ],
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "roof-rafter-0",
      "from": [
        -1.45,
        0.36,
        -1.2
      ],
      "to": [
        -1.45,
        1.85,
        -1.2
      ],
      "r": 0.037,
      "c": 3752778
    },
    {
      "t": "box",
      "n": "sawtooth-panel-1",
      "p": [
        -0.8899999999999999,
        1.64,
        0
      ],
      "s": [
        0.54,
        0.09,
        2.51
      ],
      "c": 10069413,
      "rot": [
        0,
        0,
        0.37
      ]
    },
    {
      "t": "box",
      "n": "north-facing-skylight-1",
      "p": [
        -0.8899999999999999,
        1.61,
        0.03
      ],
      "s": [
        0.52,
        0.48,
        0.035
      ],
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "roof-rafter-1",
      "from": [
        -0.8899999999999999,
        0.36,
        -1.2
      ],
      "to": [
        -0.8899999999999999,
        1.85,
        -1.2
      ],
      "r": 0.037,
      "c": 3752778
    },
    {
      "t": "box",
      "n": "sawtooth-panel-2",
      "p": [
        -0.32999999999999985,
        1.64,
        0
      ],
      "s": [
        0.54,
        0.09,
        2.51
      ],
      "c": 10069413,
      "rot": [
        0,
        0,
        -0.38
      ]
    },
    {
      "t": "box",
      "n": "north-facing-skylight-2",
      "p": [
        -0.32999999999999985,
        1.61,
        0.03
      ],
      "s": [
        0.52,
        0.48,
        0.035
      ],
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "roof-rafter-2",
      "from": [
        -0.32999999999999985,
        0.36,
        -1.2
      ],
      "to": [
        -0.32999999999999985,
        1.85,
        -1.2
      ],
      "r": 0.037,
      "c": 3752778
    },
    {
      "t": "box",
      "n": "sawtooth-panel-3",
      "p": [
        0.2300000000000002,
        1.64,
        0
      ],
      "s": [
        0.54,
        0.09,
        2.51
      ],
      "c": 10069413,
      "rot": [
        0,
        0,
        0.37
      ]
    },
    {
      "t": "box",
      "n": "north-facing-skylight-3",
      "p": [
        0.2300000000000002,
        1.61,
        0.03
      ],
      "s": [
        0.52,
        0.48,
        0.035
      ],
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "roof-rafter-3",
      "from": [
        0.2300000000000002,
        0.36,
        -1.2
      ],
      "to": [
        0.2300000000000002,
        1.85,
        -1.2
      ],
      "r": 0.037,
      "c": 3752778
    },
    {
      "t": "box",
      "n": "sawtooth-panel-4",
      "p": [
        0.7900000000000003,
        1.64,
        0
      ],
      "s": [
        0.54,
        0.09,
        2.51
      ],
      "c": 10069413,
      "rot": [
        0,
        0,
        -0.38
      ]
    },
    {
      "t": "box",
      "n": "north-facing-skylight-4",
      "p": [
        0.7900000000000003,
        1.61,
        0.03
      ],
      "s": [
        0.52,
        0.48,
        0.035
      ],
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "roof-rafter-4",
      "from": [
        0.7900000000000003,
        0.36,
        -1.2
      ],
      "to": [
        0.7900000000000003,
        1.85,
        -1.2
      ],
      "r": 0.037,
      "c": 3752778
    },
    {
      "t": "box",
      "n": "sawtooth-panel-5",
      "p": [
        1.3500000000000003,
        1.64,
        0
      ],
      "s": [
        0.54,
        0.09,
        2.51
      ],
      "c": 10069413,
      "rot": [
        0,
        0,
        0.37
      ]
    },
    {
      "t": "box",
      "n": "north-facing-skylight-5",
      "p": [
        1.3500000000000003,
        1.61,
        0.03
      ],
      "s": [
        0.52,
        0.48,
        0.035
      ],
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "roof-rafter-5",
      "from": [
        1.3500000000000003,
        0.36,
        -1.2
      ],
      "to": [
        1.3500000000000003,
        1.85,
        -1.2
      ],
      "r": 0.037,
      "c": 3752778
    },
    {
      "t": "rod",
      "n": "ridge-beam",
      "from": [
        -1.73,
        1.92,
        0
      ],
      "to": [
        1.73,
        1.92,
        0
      ],
      "r": 0.054,
      "c": 9924945
    }
  ]
}); }
