import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "scifi.holographic-command-console.001",
  "slug": "holographic-command-console",
  "title": "Holographic Command Console",
  "title_zh": "全息指挥控制台",
  "summary": "Sci-fi holographic workbench with six-by-six light grid, controls and flank modules.",
  "category": "scifi",
  "tags": [
    "hologram",
    "console",
    "command",
    "sci-fi"
  ],
  "dimensions_m": [
    1.76,
    1.49,
    1
  ],
  "generator": "createHolographicCommandConsole",
  "source_path": "src/models/holographic_command_console.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/holographic-command-console.webp"
};
export function createHolographicCommandConsole() {return buildRecipe({
  "title": "Holographic Command Console",
  "dimensions": [
    1.76,
    1.49,
    1
  ],
  "parts": [
    {
      "t": "box",
      "n": "base",
      "p": [
        0,
        0.38,
        0
      ],
      "s": [
        1.68,
        0.76,
        0.92
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "control-deck",
      "p": [
        0,
        0.79,
        0.1
      ],
      "s": [
        1.76,
        0.13,
        0.91
      ],
      "c": 5467768,
      "rot": [
        0.1,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "screen",
      "p": [
        0,
        1.14,
        -0.3
      ],
      "s": [
        1.22,
        0.62,
        0.08
      ],
      "c": 3830665,
      "rot": [
        -0.3,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "hologram-field",
      "p": [
        0,
        1.4,
        -0.06
      ],
      "s": [
        0.92,
        0.025,
        0.56
      ],
      "c": 7192268
    },
    {
      "t": "box",
      "n": "reactor-panel",
      "p": [
        0,
        0.45,
        0.49
      ],
      "s": [
        0.46,
        0.18,
        0.03
      ],
      "c": 8240579
    },
    {
      "t": "box",
      "n": "cable-trunk",
      "p": [
        0,
        0.15,
        -0.4
      ],
      "s": [
        0.27,
        0.26,
        0.2
      ],
      "c": 3424586
    },
    {
      "t": "box",
      "n": "grid-east-west-0",
      "p": [
        0,
        1.425,
        -0.29
      ],
      "s": [
        0.87,
        0.006,
        0.008
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-north-south-0",
      "p": [
        -0.4,
        1.425,
        -0.02
      ],
      "s": [
        0.008,
        0.006,
        0.52
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-east-west-1",
      "p": [
        0,
        1.425,
        -0.19999999999999998
      ],
      "s": [
        0.87,
        0.006,
        0.008
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-north-south-1",
      "p": [
        -0.24000000000000002,
        1.425,
        -0.02
      ],
      "s": [
        0.008,
        0.006,
        0.52
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-east-west-2",
      "p": [
        0,
        1.425,
        -0.10999999999999999
      ],
      "s": [
        0.87,
        0.006,
        0.008
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-north-south-2",
      "p": [
        -0.08000000000000002,
        1.425,
        -0.02
      ],
      "s": [
        0.008,
        0.006,
        0.52
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-east-west-3",
      "p": [
        0,
        1.425,
        -0.019999999999999962
      ],
      "s": [
        0.87,
        0.006,
        0.008
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-north-south-3",
      "p": [
        0.07999999999999996,
        1.425,
        -0.02
      ],
      "s": [
        0.008,
        0.006,
        0.52
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-east-west-4",
      "p": [
        0,
        1.425,
        0.07
      ],
      "s": [
        0.87,
        0.006,
        0.008
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-north-south-4",
      "p": [
        0.24,
        1.425,
        -0.02
      ],
      "s": [
        0.008,
        0.006,
        0.52
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-east-west-5",
      "p": [
        0,
        1.425,
        0.15999999999999998
      ],
      "s": [
        0.87,
        0.006,
        0.008
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "grid-north-south-5",
      "p": [
        0.4,
        1.425,
        -0.02
      ],
      "s": [
        0.008,
        0.006,
        0.52
      ],
      "c": 10409939
    },
    {
      "t": "box",
      "n": "side-module-0",
      "p": [
        -0.69,
        0.97,
        0.07
      ],
      "s": [
        0.31,
        0.32,
        0.7
      ],
      "c": 7968417
    },
    {
      "t": "box",
      "n": "status-display-0",
      "p": [
        -0.69,
        1.15,
        0.12
      ],
      "s": [
        0.23,
        0.026,
        0.34
      ],
      "c": 3500925
    },
    {
      "t": "box",
      "n": "side-module-1",
      "p": [
        0.69,
        0.97,
        0.07
      ],
      "s": [
        0.31,
        0.32,
        0.7
      ],
      "c": 7968417
    },
    {
      "t": "box",
      "n": "status-display-1",
      "p": [
        0.69,
        1.15,
        0.12
      ],
      "s": [
        0.23,
        0.026,
        0.34
      ],
      "c": 3500925
    },
    {
      "t": "sphere",
      "n": "control-key-0",
      "p": [
        -0.56,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 8832436
    },
    {
      "t": "sphere",
      "n": "control-key-1",
      "p": [
        -0.4,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 14992249
    },
    {
      "t": "sphere",
      "n": "control-key-2",
      "p": [
        -0.24000000000000005,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 7776457
    },
    {
      "t": "sphere",
      "n": "control-key-3",
      "p": [
        -0.08000000000000007,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 8832436
    },
    {
      "t": "sphere",
      "n": "control-key-4",
      "p": [
        0.07999999999999996,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 14992249
    },
    {
      "t": "sphere",
      "n": "control-key-5",
      "p": [
        0.24,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 7776457
    },
    {
      "t": "sphere",
      "n": "control-key-6",
      "p": [
        0.3999999999999999,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 8832436
    },
    {
      "t": "sphere",
      "n": "control-key-7",
      "p": [
        0.56,
        0.856,
        0.39
      ],
      "s": [
        0.04,
        0.014,
        0.04
      ],
      "c": 14992249
    }
  ]
});}
