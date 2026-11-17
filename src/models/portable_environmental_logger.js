import { buildRecipe } from './recipe_engine.js';
/** Portable Environmental Logger / 便携环境数据记录仪: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "electronics.portable-environmental-logger.001",
  "slug": "portable-environmental-logger",
  "title": "Portable Environmental Logger",
  "title_zh": "便携环境数据记录仪",
  "summary": "Field sensor logger with LCD display, probes, battery and external antenna",
  "category": "electronics",
  "tags": [
    "portable",
    "environmental",
    "logger",
    "electronics",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.56,
    0.65,
    0.42
  ],
  "generator": "createPortableEnvironmentalLogger",
  "source_path": "src/models/portable_environmental_logger.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/portable-environmental-logger.webp",
  "accent": "#8bc7bb"
};
export function createPortableEnvironmentalLogger() { return buildRecipe({
  "title": "Portable Environmental Logger",
  "dimensions": [
    0.56,
    0.65,
    0.42
  ],
  "parts": [
    {
      "t": "box",
      "n": "sensor-logger-case",
      "p": [
        0,
        0.22,
        0
      ],
      "s": [
        0.5,
        0.35,
        0.37
      ],
      "c": 4610669
    },
    {
      "t": "box",
      "n": "lcd-diagnostic-display",
      "p": [
        0,
        0.28,
        0.2
      ],
      "s": [
        0.33,
        0.14,
        0.016
      ],
      "c": 1976370
    },
    {
      "t": "box",
      "n": "logger-key-0",
      "p": [
        -0.17,
        0.16,
        0.19
      ],
      "s": [
        0.043,
        0.024,
        0.03
      ],
      "c": 14542571
    },
    {
      "t": "box",
      "n": "logger-key-1",
      "p": [
        -0.10200000000000001,
        0.16,
        0.19
      ],
      "s": [
        0.043,
        0.024,
        0.03
      ],
      "c": 14542571
    },
    {
      "t": "box",
      "n": "logger-key-2",
      "p": [
        -0.034,
        0.16,
        0.19
      ],
      "s": [
        0.043,
        0.024,
        0.03
      ],
      "c": 14542571
    },
    {
      "t": "box",
      "n": "logger-key-3",
      "p": [
        0.034,
        0.16,
        0.19
      ],
      "s": [
        0.043,
        0.024,
        0.03
      ],
      "c": 14542571
    },
    {
      "t": "box",
      "n": "logger-key-4",
      "p": [
        0.10200000000000001,
        0.16,
        0.19
      ],
      "s": [
        0.043,
        0.024,
        0.03
      ],
      "c": 14542571
    },
    {
      "t": "box",
      "n": "logger-key-5",
      "p": [
        0.17,
        0.16,
        0.19
      ],
      "s": [
        0.043,
        0.024,
        0.03
      ],
      "c": 14542571
    },
    {
      "t": "rod",
      "n": "antenna",
      "from": [
        0.2,
        0.35,
        -0.12
      ],
      "to": [
        0.25,
        0.78,
        -0.16
      ],
      "r": 0.022,
      "c": 9160635
    },
    {
      "t": "rod",
      "n": "remote-probe-lead-0",
      "from": [
        -0.18,
        0.19,
        -0.17
      ],
      "to": [
        -0.42,
        0.14,
        -0.48
      ],
      "r": 0.012,
      "c": 9160635
    },
    {
      "t": "rod",
      "n": "remote-probe-lead-1",
      "from": [
        -0.04999999999999999,
        0.19,
        -0.17
      ],
      "to": [
        -0.09999999999999998,
        0.14,
        -0.48
      ],
      "r": 0.012,
      "c": 9160635
    },
    {
      "t": "rod",
      "n": "remote-probe-lead-2",
      "from": [
        0.08000000000000002,
        0.19,
        -0.17
      ],
      "to": [
        0.22000000000000003,
        0.14,
        -0.48
      ],
      "r": 0.012,
      "c": 9160635
    },
    {
      "t": "sphere",
      "n": "external-probe-0",
      "p": [
        -0.42,
        0.14,
        -0.48
      ],
      "s": [
        0.053,
        0.04,
        0.06
      ],
      "c": 1976370
    },
    {
      "t": "sphere",
      "n": "external-probe-1",
      "p": [
        -0.09999999999999998,
        0.14,
        -0.48
      ],
      "s": [
        0.053,
        0.04,
        0.06
      ],
      "c": 1976370
    },
    {
      "t": "sphere",
      "n": "external-probe-2",
      "p": [
        0.22000000000000003,
        0.14,
        -0.48
      ],
      "s": [
        0.053,
        0.04,
        0.06
      ],
      "c": 1976370
    }
  ]
}); }
