import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "decor.antique-grandfather-clock.001",
  "slug": "antique-grandfather-clock",
  "title": "Antique Grandfather Clock",
  "title_zh": "复古落地摆钟",
  "summary": "Grandfather clock with decorated dial and weighted pendulum",
  "category": "decor",
  "tags": [
    "clock",
    "antique",
    "interior"
  ],
  "dimensions_m": [
    0.64,
    2.18,
    0.39
  ],
  "generator": "createAntiqueGrandfatherClock",
  "source_path": "src/models/antique_grandfather_clock.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/antique-grandfather-clock.webp"
};
export function createAntiqueGrandfatherClock() { return buildRecipe({
  "title": "Antique Grandfather Clock",
  "dimensions": [
    0.64,
    2.18,
    0.39
  ],
  "parts": [
    {
      "t": "box",
      "n": "tall-case",
      "p": [
        0,
        1.09,
        0
      ],
      "s": [
        0.6,
        2.15,
        0.37
      ],
      "c": 9595208
    },
    {
      "t": "box",
      "n": "clock-head",
      "p": [
        0,
        1.78,
        0.02
      ],
      "s": [
        0.64,
        0.68,
        0.39
      ],
      "c": 7886653
    },
    {
      "t": "cylinder",
      "n": "round-dial",
      "p": [
        0,
        1.82,
        0.224
      ],
      "s": [
        0.45,
        0.025,
        0.45
      ],
      "c": 15262939,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hour-dot-0",
      "p": [
        0,
        1.99,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-1",
      "p": [
        0.08499999999999999,
        1.9672243186433547,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-2",
      "p": [
        0.14722431864335458,
        1.905,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-3",
      "p": [
        0.17,
        1.82,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-4",
      "p": [
        0.14722431864335458,
        1.735,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-5",
      "p": [
        0.08499999999999999,
        1.6727756813566454,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-6",
      "p": [
        2.0818995585505005e-17,
        1.6500000000000001,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-7",
      "p": [
        -0.08499999999999996,
        1.6727756813566454,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-8",
      "p": [
        -0.14722431864335453,
        1.7349999999999999,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-9",
      "p": [
        -0.17,
        1.82,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-10",
      "p": [
        -0.14722431864335458,
        1.905,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "hour-dot-11",
      "p": [
        -0.08500000000000008,
        1.9672243186433547,
        0.245
      ],
      "s": [
        0.025,
        0.027,
        0.011
      ],
      "c": 3358791
    },
    {
      "t": "rod",
      "n": "hour-hand",
      "from": [
        0,
        1.82,
        0.26
      ],
      "to": [
        -0.065,
        1.88,
        0.26
      ],
      "r": 0.012,
      "c": 3358791
    },
    {
      "t": "rod",
      "n": "minute-hand",
      "from": [
        0,
        1.82,
        0.265
      ],
      "to": [
        0.07,
        1.95,
        0.265
      ],
      "r": 0.008,
      "c": 3358791
    },
    {
      "t": "box",
      "n": "pendulum-glass",
      "p": [
        0,
        0.81,
        0.2
      ],
      "s": [
        0.43,
        1.18,
        0.021
      ],
      "c": 9218990
    },
    {
      "t": "rod",
      "n": "pendulum-shaft",
      "from": [
        0,
        1.32,
        0.24
      ],
      "to": [
        0,
        0.59,
        0.24
      ],
      "r": 0.018,
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "pendulum-weight",
      "p": [
        0,
        0.52,
        0.24
      ],
      "s": [
        0.2,
        0.025,
        0.2
      ],
      "c": 13280111,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "chain-weight-0",
      "p": [
        -0.12,
        0.83,
        0.25
      ],
      "s": [
        0.065,
        0.27,
        0.06
      ],
      "c": 13280111
    },
    {
      "t": "cylinder",
      "n": "chain-weight-1",
      "p": [
        0.12,
        0.83,
        0.25
      ],
      "s": [
        0.065,
        0.27,
        0.06
      ],
      "c": 13280111
    },
    {
      "t": "box",
      "n": "cabinet-foot",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.61,
        0.16,
        0.39
      ],
      "c": 7755321
    },
    {
      "t": "box",
      "n": "carved-crown",
      "p": [
        0,
        2.16,
        0
      ],
      "s": [
        0.69,
        0.045,
        0.4
      ],
      "c": 13280111
    }
  ]
}); }
