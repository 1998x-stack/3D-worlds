import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Macro Pad Command Deck; stylized visual prototype only. */
export const assetMeta = {
  "id": "electronics.macro-pad-command-deck.001",
  "slug": "macro-pad-command-deck",
  "title": "Macro Pad Command Deck",
  "title_zh": "宏键指令控制台",
  "summary": "Original macro pad command deck study with console and grid assemblies and individually named functional details",
  "category": "electronics",
  "tags": [
    "macro",
    "pad",
    "command",
    "deck",
    "electronics",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.24,
    0.09,
    0.18
  ],
  "generator": "createMacroPadCommandDeck",
  "source_path": "src/models/macro_pad_command_deck.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/macro-pad-command-deck.webp",
  "accent": "#66d9ce",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createMacroPadCommandDeck() { return buildRecipe({
  "title": "Macro Pad Command Deck",
  "dimensions": [
    0.24,
    0.09,
    0.18
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 6740430,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "console-0-console-body",
      "p": [
        0,
        0.65,
        0.08
      ],
      "s": [
        1.65,
        0.58,
        1.04
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-0",
      "p": [
        -0.62,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-1",
      "p": [
        -0.21000000000000002,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-2",
      "p": [
        0.19999999999999996,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-3",
      "p": [
        0.61,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-4",
      "p": [
        -0.62,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-5",
      "p": [
        -0.21000000000000002,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-6",
      "p": [
        0.19999999999999996,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-7",
      "p": [
        0.61,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-8",
      "p": [
        -0.62,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-9",
      "p": [
        -0.21000000000000002,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-10",
      "p": [
        0.19999999999999996,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-0-button-11",
      "p": [
        0.61,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "console-0-encoder",
      "p": [
        0.75,
        1.07,
        0.43
      ],
      "s": [
        0.28,
        0.18,
        0.28
      ],
      "c": 6740430,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-grid-plate",
      "p": [
        0,
        0.47,
        0.02
      ],
      "s": [
        1.61,
        0.24,
        1.15
      ],
      "c": 5336199,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-0",
      "p": [
        -0.61,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-1",
      "p": [
        -0.20999999999999996,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-2",
      "p": [
        0.19000000000000006,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-3",
      "p": [
        0.5900000000000002,
        0.63,
        -0.38
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-4",
      "p": [
        -0.61,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-5",
      "p": [
        -0.20999999999999996,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-6",
      "p": [
        0.19000000000000006,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-7",
      "p": [
        0.5900000000000002,
        0.63,
        -0.10999999999999999
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-8",
      "p": [
        -0.61,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-9",
      "p": [
        -0.20999999999999996,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-10",
      "p": [
        0.19000000000000006,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-11",
      "p": [
        0.5900000000000002,
        0.63,
        0.16000000000000003
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-12",
      "p": [
        -0.61,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-13",
      "p": [
        -0.20999999999999996,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-14",
      "p": [
        0.19000000000000006,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grid-1-bay-15",
      "p": [
        0.5900000000000002,
        0.63,
        0.43000000000000005
      ],
      "s": [
        0.31,
        0.12,
        0.18
      ],
      "c": 6740430,
      "finish": "matte"
    }
  ]
}); }
