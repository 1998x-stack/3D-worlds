import { buildRecipe } from './recipe_engine.js';
/** Interactive Sign Language Kiosk / 手语交互服务终端: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "electronics.interactive-sign-language-kiosk.001",
  "slug": "interactive-sign-language-kiosk",
  "title": "Interactive Sign Language Kiosk",
  "title_zh": "手语交互服务终端",
  "summary": "Public accessibility kiosk with depth camera, display and height-adjustable control pad",
  "category": "electronics",
  "tags": [
    "interactive",
    "sign",
    "language",
    "kiosk",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.98,
    1.95,
    0.72
  ],
  "generator": "createInteractiveSignLanguageKiosk",
  "source_path": "src/models/interactive_sign_language_kiosk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/interactive-sign-language-kiosk.webp",
  "accent": "#dde6eb"
};
export function createInteractiveSignLanguageKiosk() { return buildRecipe({
  "title": "Interactive Sign Language Kiosk",
  "dimensions": [
    0.98,
    1.95,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "accessible-kiosk-pedestal",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        0.28,
        1.38,
        0.27
      ],
      "c": 4610669
    },
    {
      "t": "box",
      "n": "touchscreen-housing",
      "p": [
        0,
        1.5,
        -0.02
      ],
      "s": [
        0.81,
        0.72,
        0.13
      ],
      "c": 4610669
    },
    {
      "t": "box",
      "n": "sign-language-display",
      "p": [
        0,
        1.51,
        0.065
      ],
      "s": [
        0.69,
        0.57,
        0.02
      ],
      "c": 1976370
    },
    {
      "t": "sphere",
      "n": "depth-camera",
      "p": [
        0,
        1.92,
        0.09
      ],
      "s": [
        0.14,
        0.07,
        0.07
      ],
      "c": 9160635
    },
    {
      "t": "box",
      "n": "adjustable-keypad",
      "p": [
        0,
        0.86,
        0.24
      ],
      "s": [
        0.62,
        0.09,
        0.36
      ],
      "c": 14542571
    },
    {
      "t": "box",
      "n": "tactile-key-0",
      "p": [
        -0.22,
        0.92,
        0.32
      ],
      "s": [
        0.05,
        0.016,
        0.05
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "tactile-key-1",
      "p": [
        -0.13,
        0.92,
        0.32
      ],
      "s": [
        0.05,
        0.016,
        0.05
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "tactile-key-2",
      "p": [
        -0.04000000000000001,
        0.92,
        0.32
      ],
      "s": [
        0.05,
        0.016,
        0.05
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "tactile-key-3",
      "p": [
        0.05000000000000002,
        0.92,
        0.32
      ],
      "s": [
        0.05,
        0.016,
        0.05
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "tactile-key-4",
      "p": [
        0.13999999999999999,
        0.92,
        0.32
      ],
      "s": [
        0.05,
        0.016,
        0.05
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "tactile-key-5",
      "p": [
        0.22999999999999995,
        0.92,
        0.32
      ],
      "s": [
        0.05,
        0.016,
        0.05
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "wheelchair-clearance-base",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        0.68,
        0.16,
        0.57
      ],
      "c": 4610669
    }
  ]
}); }
