import { buildRecipe } from './recipe_engine.js';
/** Interactive Public Info Totem: original source-editable mesh scene. */
export const assetMeta = {
  "id": "urban.interactive-public-info-totem.001",
  "slug": "interactive-public-info-totem",
  "title": "Interactive Public Info Totem",
  "title_zh": "城市智能信息查询屏",
  "summary": "Interactive urban information kiosk with touch screen, speakers and emergency call button",
  "category": "urban",
  "tags": [
    "interactive",
    "totem",
    "information"
  ],
  "dimensions_m": [
    0.73,
    2.21,
    0.47
  ],
  "generator": "createInteractivePublicInfoTotem",
  "source_path": "src/models/interactive_public_info_totem.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/interactive-public-info-totem.webp"
};
export function createInteractivePublicInfoTotem() { return buildRecipe({
  "title": "Interactive Public Info Totem",
  "dimensions": [
    0.73,
    2.21,
    0.47
  ],
  "parts": [
    {
      "t": "box",
      "n": "reinforced-podium",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        0.71,
        0.35,
        0.43
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "vertical-information-shell",
      "p": [
        0,
        1.24,
        0
      ],
      "s": [
        0.61,
        1.95,
        0.37
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "touch-screen",
      "p": [
        0,
        1.39,
        0.195
      ],
      "s": [
        0.51,
        0.96,
        0.022
      ],
      "c": 6657707
    },
    {
      "t": "box",
      "n": "top-header",
      "p": [
        0,
        2.09,
        0.2
      ],
      "s": [
        0.55,
        0.19,
        0.018
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "display-info-row-0",
      "p": [
        0,
        1.71,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 6857136
    },
    {
      "t": "box",
      "n": "display-info-row-1",
      "p": [
        0,
        1.5899999999999999,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "display-info-row-2",
      "p": [
        0,
        1.47,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 6857136
    },
    {
      "t": "box",
      "n": "display-info-row-3",
      "p": [
        0,
        1.35,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "display-info-row-4",
      "p": [
        0,
        1.23,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 6857136
    },
    {
      "t": "box",
      "n": "display-info-row-5",
      "p": [
        0,
        1.1099999999999999,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 15197661
    },
    {
      "t": "box",
      "n": "display-info-row-6",
      "p": [
        0,
        0.99,
        0.213
      ],
      "s": [
        0.38,
        0.045,
        0.01
      ],
      "c": 6857136
    },
    {
      "t": "cylinder",
      "n": "assistance-button",
      "p": [
        0.17,
        0.7,
        0.211
      ],
      "s": [
        0.08,
        0.03,
        0.08
      ],
      "c": 12284766,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "speaker-slot-0",
      "p": [
        -0.17,
        0.6,
        0.211
      ],
      "s": [
        0.04,
        0.025,
        0.014
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "speaker-slot-1",
      "p": [
        -0.085,
        0.6,
        0.211
      ],
      "s": [
        0.04,
        0.025,
        0.014
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "speaker-slot-2",
      "p": [
        0,
        0.6,
        0.211
      ],
      "s": [
        0.04,
        0.025,
        0.014
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "speaker-slot-3",
      "p": [
        0.08499999999999999,
        0.6,
        0.211
      ],
      "s": [
        0.04,
        0.025,
        0.014
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "speaker-slot-4",
      "p": [
        0.17,
        0.6,
        0.211
      ],
      "s": [
        0.04,
        0.025,
        0.014
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "advertising-side-panel",
      "p": [
        0.32,
        1.24,
        0
      ],
      "s": [
        0.014,
        1.62,
        0.24
      ],
      "c": 3753293
    }
  ]
}); }
