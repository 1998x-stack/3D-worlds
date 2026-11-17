import { buildRecipe } from './recipe_engine.js';
/** Smart Bidet Control Panel / 智能坐便器控制模块: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "bathroom.smart-bidet-control-panel.001",
  "slug": "smart-bidet-control-panel",
  "title": "Smart Bidet Control Panel",
  "title_zh": "智能坐便器控制模块",
  "summary": "Electronic bidet seat, side-control keypad, heated lid and wash nozzle",
  "category": "bathroom",
  "tags": [
    "smart",
    "bidet",
    "control",
    "panel",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.82,
    1.02,
    1.04
  ],
  "generator": "createSmartBidetControlPanel",
  "source_path": "src/models/smart_bidet_control_panel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/smart-bidet-control-panel.webp",
  "accent": "#333a47"
};
export function createSmartBidetControlPanel() { return buildRecipe({
  "title": "Smart Bidet Control Panel",
  "dimensions": [
    0.82,
    1.02,
    1.04
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "bidet-bowl",
      "p": [
        0,
        0.47,
        0
      ],
      "s": [
        0.54,
        0.37,
        0.47
      ],
      "c": 14148581
    },
    {
      "t": "sphere",
      "n": "seat-lid",
      "p": [
        0,
        0.72,
        -0.12
      ],
      "s": [
        0.52,
        0.06,
        0.42
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "rear-tank",
      "p": [
        0,
        0.77,
        -0.42
      ],
      "s": [
        0.71,
        0.35,
        0.24
      ],
      "c": 14148581
    },
    {
      "t": "box",
      "n": "side-controller",
      "p": [
        0.46,
        0.62,
        -0.2
      ],
      "s": [
        0.22,
        0.09,
        0.43
      ],
      "c": 7309460
    },
    {
      "t": "box",
      "n": "side-button-0",
      "p": [
        0.57,
        0.69,
        -0.36
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "side-button-1",
      "p": [
        0.57,
        0.69,
        -0.315
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "side-button-2",
      "p": [
        0.57,
        0.69,
        -0.27
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "side-button-3",
      "p": [
        0.57,
        0.69,
        -0.22499999999999998
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "side-button-4",
      "p": [
        0.57,
        0.69,
        -0.18
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "side-button-5",
      "p": [
        0.57,
        0.69,
        -0.135
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 3357255
    },
    {
      "t": "box",
      "n": "side-button-6",
      "p": [
        0.57,
        0.69,
        -0.08999999999999997
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 14072227
    },
    {
      "t": "box",
      "n": "side-button-7",
      "p": [
        0.57,
        0.69,
        -0.044999999999999984
      ],
      "s": [
        0.05,
        0.014,
        0.025
      ],
      "c": 3357255
    },
    {
      "t": "rod",
      "n": "wash-nozzle",
      "from": [
        0,
        0.41,
        -0.2
      ],
      "to": [
        0,
        0.47,
        0.18
      ],
      "r": 0.018,
      "c": 7309460
    },
    {
      "t": "box",
      "n": "floor-mount--0.31",
      "p": [
        -0.31,
        0.1,
        -0.22
      ],
      "s": [
        0.08,
        0.14,
        0.09
      ],
      "c": 7309460
    },
    {
      "t": "box",
      "n": "floor-mount-0.31",
      "p": [
        0.31,
        0.1,
        -0.22
      ],
      "s": [
        0.08,
        0.14,
        0.09
      ],
      "c": 7309460
    }
  ]
}); }
