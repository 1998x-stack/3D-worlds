import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Laboratory FPGA Dev Station / FPGA 实验开发工作台. */
export const assetMeta = {
  "id": "electronics.laboratory-fpga-dev-station.001",
  "slug": "laboratory-fpga-dev-station",
  "title": "Laboratory FPGA Dev Station",
  "title_zh": "FPGA 实验开发工作台",
  "summary": "Programmable logic lab bench with circuit board, probes, oscilloscope and breadboard",
  "category": "electronics",
  "tags": [
    "laboratory",
    "fpga",
    "dev",
    "station",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.26,
    0.92,
    0.84
  ],
  "generator": "createLaboratoryFpgaDevStation",
  "source_path": "src/models/laboratory_fpga_dev_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/laboratory-fpga-dev-station.webp",
  "accent": "#b7c3ce"
};
export function createLaboratoryFpgaDevStation() { return buildRecipe({
  "title": "Laboratory FPGA Dev Station",
  "dimensions": [
    1.26,
    0.92,
    0.84
  ],
  "parts": [
    {
      "t": "box",
      "n": "fpga-laboratory-worktop",
      "p": [
        0,
        0.48,
        0
      ],
      "s": [
        1.09,
        0.16,
        0.69
      ],
      "c": 3952998
    },
    {
      "t": "box",
      "n": "fpga-bench-leg--1",
      "p": [
        -0.48,
        0.22,
        0
      ],
      "s": [
        0.1,
        0.43,
        0.5
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "fpga-bench-leg-1",
      "p": [
        0.48,
        0.22,
        0
      ],
      "s": [
        0.1,
        0.43,
        0.5
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "fpga-evaluation-board",
      "p": [
        -0.19,
        0.64,
        0
      ],
      "s": [
        0.5,
        0.05,
        0.38
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "logic-chip-0",
      "p": [
        -0.4,
        0.689,
        -0.13
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-1",
      "p": [
        -0.26,
        0.689,
        -0.13
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-2",
      "p": [
        -0.12,
        0.689,
        -0.13
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-3",
      "p": [
        0.020000000000000018,
        0.689,
        -0.13
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-4",
      "p": [
        -0.4,
        0.689,
        0.010000000000000009
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-5",
      "p": [
        -0.26,
        0.689,
        0.010000000000000009
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-6",
      "p": [
        -0.12,
        0.689,
        0.010000000000000009
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-7",
      "p": [
        0.020000000000000018,
        0.689,
        0.010000000000000009
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-8",
      "p": [
        -0.4,
        0.689,
        0.15000000000000002
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-9",
      "p": [
        -0.26,
        0.689,
        0.15000000000000002
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-10",
      "p": [
        -0.12,
        0.689,
        0.15000000000000002
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "logic-chip-11",
      "p": [
        0.020000000000000018,
        0.689,
        0.15000000000000002
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 12043214
    },
    {
      "t": "box",
      "n": "rf-oscilloscope",
      "p": [
        0.31,
        0.83,
        -0.2
      ],
      "s": [
        0.34,
        0.37,
        0.26
      ],
      "c": 10933453
    },
    {
      "t": "box",
      "n": "oscilloscope-signal-screen",
      "p": [
        0.31,
        0.87,
        -0.057
      ],
      "s": [
        0.28,
        0.17,
        0.02
      ],
      "c": 1518391
    },
    {
      "t": "box",
      "n": "development-breadboard",
      "p": [
        0.33,
        0.63,
        0.25
      ],
      "s": [
        0.41,
        0.05,
        0.16
      ],
      "c": 12043214
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-0",
      "from": [
        -0.25,
        0.71,
        0.15
      ],
      "to": [
        0.13,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 1518391
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-1",
      "from": [
        -0.20600000000000002,
        0.71,
        0.15
      ],
      "to": [
        0.15,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 10933453
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-2",
      "from": [
        -0.162,
        0.71,
        0.15
      ],
      "to": [
        0.17,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 1518391
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-3",
      "from": [
        -0.118,
        0.71,
        0.15
      ],
      "to": [
        0.19,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 10933453
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-4",
      "from": [
        -0.07400000000000001,
        0.71,
        0.15
      ],
      "to": [
        0.21000000000000002,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 1518391
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-5",
      "from": [
        -0.030000000000000027,
        0.71,
        0.15
      ],
      "to": [
        0.23,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 10933453
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-6",
      "from": [
        0.014000000000000012,
        0.71,
        0.15
      ],
      "to": [
        0.25,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 1518391
    },
    {
      "t": "rod",
      "n": "fpga-jumper-wire-7",
      "from": [
        0.057999999999999996,
        0.71,
        0.15
      ],
      "to": [
        0.27,
        0.69,
        0.28
      ],
      "r": 0.008,
      "c": 10933453
    }
  ]
}); }
