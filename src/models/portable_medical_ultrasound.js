import { buildRecipe } from './recipe_engine.js';
/** Portable Medical Ultrasound: source-backed custom geometry. */
export const assetMeta = {
  "id": "electronics.portable-medical-ultrasound.001",
  "slug": "portable-medical-ultrasound",
  "title": "Portable Medical Ultrasound",
  "title_zh": "便携医学超声仪",
  "summary": "Portable clinical ultrasound diagnostic console and sensor probe",
  "category": "electronics",
  "tags": [
    "ultrasound",
    "medical",
    "diagnostic"
  ],
  "dimensions_m": [
    0.54,
    0.65,
    0.46
  ],
  "generator": "createPortableMedicalUltrasound",
  "source_path": "src/models/portable_medical_ultrasound.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/portable-medical-ultrasound.webp"
};
export function createPortableMedicalUltrasound() { return buildRecipe({
  "title": "Portable Medical Ultrasound",
  "dimensions": [
    0.54,
    0.65,
    0.46
  ],
  "parts": [
    {
      "t": "box",
      "n": "equipment-housing",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        0.53,
        0.27,
        0.46
      ],
      "c": 3490891
    },
    {
      "t": "box",
      "n": "operation-display",
      "p": [
        0,
        0.31,
        0.24
      ],
      "s": [
        0.36,
        0.24,
        0.019
      ],
      "c": 6790322
    },
    {
      "t": "box",
      "n": "keypad-button-0",
      "p": [
        -0.24,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-1",
      "p": [
        -0.148,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-2",
      "p": [
        -0.055999999999999994,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-3",
      "p": [
        0.03600000000000003,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-4",
      "p": [
        0.128,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-5",
      "p": [
        0.21999999999999997,
        0.285,
        -0.12
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-6",
      "p": [
        -0.24,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-7",
      "p": [
        -0.148,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-8",
      "p": [
        -0.055999999999999994,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-9",
      "p": [
        0.03600000000000003,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keypad-button-10",
      "p": [
        0.128,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 14936037
    },
    {
      "t": "box",
      "n": "keypad-button-11",
      "p": [
        0.21999999999999997,
        0.285,
        0.04000000000000001
      ],
      "s": [
        0.04,
        0.022,
        0.016
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "folding-lcd",
      "p": [
        0,
        0.52,
        -0.18
      ],
      "s": [
        0.47,
        0.36,
        0.04
      ],
      "c": 3490891,
      "rot": [
        -0.1,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "sonogram-image",
      "p": [
        0,
        0.54,
        -0.151
      ],
      "s": [
        0.36,
        0.27,
        0.015
      ],
      "c": 6790322,
      "rot": [
        -0.1,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "hand-probe",
      "p": [
        0.32,
        0.39,
        0.13
      ],
      "s": [
        0.11,
        0.2,
        0.11
      ],
      "c": 14936037
    },
    {
      "t": "rod",
      "n": "probe-lead",
      "from": [
        0.32,
        0.29,
        0.13
      ],
      "to": [
        0.16,
        0.1,
        0.24
      ],
      "r": 0.015,
      "c": 3490891
    },
    {
      "t": "box",
      "n": "keyboard-key-0",
      "p": [
        -0.19,
        0.35,
        -0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-1",
      "p": [
        -0.06,
        0.35,
        -0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-2",
      "p": [
        0.07,
        0.35,
        -0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-3",
      "p": [
        0.2,
        0.35,
        -0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-4",
      "p": [
        -0.19,
        0.35,
        0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-5",
      "p": [
        -0.06,
        0.35,
        0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-6",
      "p": [
        0.07,
        0.35,
        0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    },
    {
      "t": "box",
      "n": "keyboard-key-7",
      "p": [
        0.2,
        0.35,
        0.05
      ],
      "s": [
        0.09,
        0.015,
        0.06
      ],
      "c": 9807013
    }
  ]
}); }
