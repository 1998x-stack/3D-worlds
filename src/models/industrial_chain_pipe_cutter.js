import { buildRecipe } from './recipe_engine.js';
/** Industrial Chain Pipe Cutter: original source-editable mesh scene. */
export const assetMeta = {
  "id": "tools.industrial-chain-pipe-cutter.001",
  "slug": "industrial-chain-pipe-cutter",
  "title": "Industrial Chain Pipe Cutter",
  "title_zh": "工业管道链式切割器",
  "summary": "Industrial manual chain-style pipe cutter with adjustable jaw, wheel and crank handle",
  "category": "tools",
  "tags": [
    "pipe",
    "cutter",
    "industrial"
  ],
  "dimensions_m": [
    0.51,
    0.48,
    0.77
  ],
  "generator": "createIndustrialChainPipeCutter",
  "source_path": "src/models/industrial_chain_pipe_cutter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/industrial-chain-pipe-cutter.webp"
};
export function createIndustrialChainPipeCutter() { return buildRecipe({
  "title": "Industrial Chain Pipe Cutter",
  "dimensions": [
    0.51,
    0.48,
    0.77
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.56,
        0.15,
        0.57
      ],
      "c": 3753293
    },
    {
      "t": "torus",
      "n": "cutting-chain",
      "p": [
        0,
        0.29,
        0.12
      ],
      "s": [
        0.81,
        0.81,
        0.81
      ],
      "c": 9872548,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "cutting-frame",
      "p": [
        0,
        0.32,
        -0.14
      ],
      "s": [
        0.38,
        0.29,
        0.48
      ],
      "c": 3753293
    },
    {
      "t": "rod",
      "n": "screw-drive",
      "from": [
        0,
        0.32,
        -0.34
      ],
      "to": [
        0,
        0.32,
        0.36
      ],
      "r": 0.035,
      "c": 9872548
    },
    {
      "t": "cylinder",
      "n": "ratchet-wheel",
      "p": [
        0,
        0.32,
        -0.4
      ],
      "s": [
        0.15,
        0.1,
        0.15
      ],
      "c": 12952430,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "chain-link-0",
      "p": [
        0,
        0.44999999999999996,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-1",
      "p": [
        0.09296562568596882,
        0.42022055306600536,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-2",
      "p": [
        0.15132543991192624,
        0.34196740551020416,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-3",
      "p": [
        0.15335540529262628,
        0.24436975052079668,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-4",
      "p": [
        0.09829988124891388,
        0.163757640443275,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-5",
      "p": [
        0.006652905989326479,
        0.13013837595627525,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-6",
      "p": [
        -0.0874705675310859,
        0.15602649584417913,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-7",
      "p": [
        -0.1490337270005188,
        0.23178532645170263,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-8",
      "p": [
        -0.1551201119126094,
        0.3292141668306179,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "chain-link-9",
      "p": [
        -0.10346410756098935,
        0.41204580470711816,
        0.29
      ],
      "s": [
        0.075,
        0.045,
        0.035
      ],
      "c": 9872548
    },
    {
      "t": "rod",
      "n": "ratchet-handle",
      "from": [
        -0.25,
        0.32,
        -0.4
      ],
      "to": [
        0.25,
        0.32,
        -0.4
      ],
      "r": 0.028,
      "c": 3753293
    }
  ]
}); }
