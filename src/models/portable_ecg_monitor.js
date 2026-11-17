import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Portable ECG Monitor / 便携心电监护仪. */
export const assetMeta = {
  "id": "electronics.portable-ecg-monitor.001",
  "slug": "portable-ecg-monitor",
  "title": "Portable ECG Monitor",
  "title_zh": "便携心电监护仪",
  "summary": "Portable electrocardiogram monitor with wave display and patient leads",
  "category": "electronics",
  "tags": [
    "portable",
    "ecg",
    "monitor",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.65,
    0.65,
    0.46
  ],
  "generator": "createPortableEcgMonitor",
  "source_path": "src/models/portable_ecg_monitor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/portable-ecg-monitor.webp",
  "accent": "#152936"
};
export function createPortableEcgMonitor() { return buildRecipe({
  "title": "Portable ECG Monitor",
  "dimensions": [
    0.65,
    0.65,
    0.46
  ],
  "parts": [
    {
      "t": "box",
      "n": "ecg-electronics-case",
      "p": [
        0,
        0.28,
        0
      ],
      "s": [
        0.52,
        0.44,
        0.35
      ],
      "c": 3688798
    },
    {
      "t": "box",
      "n": "cardio-wave-display",
      "p": [
        0,
        0.35,
        0.187
      ],
      "s": [
        0.4,
        0.24,
        0.017
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-0",
      "p": [
        -0.17,
        0.35,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-1",
      "p": [
        -0.14100000000000001,
        0.3990164048033789,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-2",
      "p": [
        -0.11200000000000002,
        0.3944673022100774,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-3",
      "p": [
        -0.083,
        0.3413239868221213,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-4",
      "p": [
        -0.054000000000000006,
        0.2976618859360766,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-5",
      "p": [
        -0.024999999999999994,
        0.3111952820936284,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-6",
      "p": [
        0.0040000000000000036,
        0.3671347749932358,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-7",
      "p": [
        0.033,
        0.404349252863235,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-8",
      "p": [
        0.062,
        0.3821704456090469,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-9",
      "p": [
        0.091,
        0.3248355258423573,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-10",
      "p": [
        0.12000000000000002,
        0.29500053863971126,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-11",
      "p": [
        0.149,
        0.32526938945059697,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-wave-pixel-12",
      "p": [
        0.17800000000000002,
        0.3825640433088973,
        0.2
      ],
      "s": [
        0.022,
        0.012,
        0.01
      ],
      "c": 9552063
    },
    {
      "t": "box",
      "n": "ecg-keypad-0",
      "p": [
        -0.18,
        0.13,
        0.18
      ],
      "s": [
        0.05,
        0.034,
        0.02
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "ecg-keypad-1",
      "p": [
        -0.11499999999999999,
        0.13,
        0.18
      ],
      "s": [
        0.05,
        0.034,
        0.02
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "ecg-keypad-2",
      "p": [
        -0.04999999999999999,
        0.13,
        0.18
      ],
      "s": [
        0.05,
        0.034,
        0.02
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "ecg-keypad-3",
      "p": [
        0.015000000000000013,
        0.13,
        0.18
      ],
      "s": [
        0.05,
        0.034,
        0.02
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "ecg-keypad-4",
      "p": [
        0.08000000000000002,
        0.13,
        0.18
      ],
      "s": [
        0.05,
        0.034,
        0.02
      ],
      "c": 10925757
    },
    {
      "t": "box",
      "n": "ecg-keypad-5",
      "p": [
        0.14500000000000002,
        0.13,
        0.18
      ],
      "s": [
        0.05,
        0.034,
        0.02
      ],
      "c": 10925757
    },
    {
      "t": "rod",
      "n": "patient-lead-0",
      "from": [
        0.22,
        0.16,
        -0.11
      ],
      "to": [
        0.5,
        0.06,
        -0.35
      ],
      "r": 0.013,
      "c": 9552063
    },
    {
      "t": "sphere",
      "n": "ecg-electrode-0",
      "p": [
        0.5,
        0.06,
        -0.35
      ],
      "s": [
        0.04,
        0.025,
        0.04
      ],
      "c": 1386806
    },
    {
      "t": "rod",
      "n": "patient-lead-1",
      "from": [
        0.22,
        0.16,
        -0.11
      ],
      "to": [
        0.5,
        0.126,
        -0.35
      ],
      "r": 0.013,
      "c": 9552063
    },
    {
      "t": "sphere",
      "n": "ecg-electrode-1",
      "p": [
        0.5,
        0.126,
        -0.35
      ],
      "s": [
        0.04,
        0.025,
        0.04
      ],
      "c": 1386806
    },
    {
      "t": "rod",
      "n": "patient-lead-2",
      "from": [
        0.22,
        0.16,
        -0.11
      ],
      "to": [
        0.5,
        0.192,
        -0.35
      ],
      "r": 0.013,
      "c": 9552063
    },
    {
      "t": "sphere",
      "n": "ecg-electrode-2",
      "p": [
        0.5,
        0.192,
        -0.35
      ],
      "s": [
        0.04,
        0.025,
        0.04
      ],
      "c": 1386806
    },
    {
      "t": "rod",
      "n": "patient-lead-3",
      "from": [
        0.22,
        0.16,
        -0.11
      ],
      "to": [
        0.5,
        0.258,
        -0.35
      ],
      "r": 0.013,
      "c": 9552063
    },
    {
      "t": "sphere",
      "n": "ecg-electrode-3",
      "p": [
        0.5,
        0.258,
        -0.35
      ],
      "s": [
        0.04,
        0.025,
        0.04
      ],
      "c": 1386806
    },
    {
      "t": "box",
      "n": "portable-carry-handle",
      "p": [
        0,
        0.56,
        -0.05
      ],
      "s": [
        0.28,
        0.09,
        0.11
      ],
      "c": 10925757
    }
  ]
}); }
