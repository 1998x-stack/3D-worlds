import { buildMarketV15 } from './market_v15_builder.js';
/** V1.6 original visual design: Precision Bit Calibration Tray. 多规格夹槽、编号区、挡边、抓取凹位. Not physically print-tested. */
export const assetMeta = {
  "id": "tools.precision-bit-calibration-tray.001",
  "slug": "precision-bit-calibration-tray",
  "title": "Precision Bit Calibration Tray",
  "title_zh": "精密批头分度托盘",
  "summary": "Bit storage gauge mockup with graded channels and individual index tabs",
  "category": "tools",
  "tags": [
    "precision",
    "bit",
    "calibration",
    "tray",
    "tools",
    "original",
    "v16",
    "market-inspired"
  ],
  "dimensions_m": [
    0.26,
    0.09,
    0.16
  ],
  "generator": "createPrecisionBitCalibrationTray",
  "source_path": "src/models/precision_bit_calibration_tray.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.6",
  "preview_path": "public/thumbs/precision-bit-calibration-tray.webp",
  "accent": "#8ca7c5",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createPrecisionBitCalibrationTray() {
  return buildMarketV15({
  "title": "Precision Bit Calibration Tray",
  "dimensions": [
    0.26,
    0.09,
    0.16
  ],
  "accent": "#8ca7c5",
  "body": [
    [
      "box",
      "tray",
      [
        0,
        0.25,
        0
      ],
      [
        2.04,
        0.42,
        1.3
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "rear-lip",
      [
        0,
        0.5,
        -0.59
      ],
      [
        2.1,
        0.22,
        0.12
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "front-grip",
      [
        0,
        0.14,
        0.65
      ],
      [
        0.76,
        0.21,
        0.16
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "left-rail",
      [
        -1,
        0.32,
        0
      ],
      [
        0.12,
        0.45,
        1.26
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "right-rail",
      [
        1,
        0.32,
        0
      ],
      [
        0.12,
        0.45,
        1.26
      ],
      "metal",
      "matte",
      null
    ],
    [
      "box",
      "legend",
      [
        0,
        0.49,
        0.45
      ],
      [
        1.68,
        0.1,
        0.24
      ],
      "light",
      "matte",
      null
    ],
    [
      "box",
      "side-ruler",
      [
        -0.89,
        0.51,
        0.1
      ],
      [
        0.12,
        0.05,
        0.75
      ],
      "secondary",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "bit-pocket",
      "t": "cylinder",
      "count": 10,
      "o": [
        -0.81,
        0.49,
        -0.18
      ],
      "d": [
        0.18,
        0,
        0
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": "dark",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "size-label",
      "t": "box",
      "count": 10,
      "o": [
        -0.81,
        0.53,
        0.43
      ],
      "d": [
        0.18,
        0,
        0
      ],
      "s": [
        0.09,
        0.025,
        0.07
      ],
      "c": "contrast",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "ruler-tick",
      "t": "box",
      "count": 12,
      "o": [
        -0.95,
        0.54,
        -0.46
      ],
      "d": [
        0,
        0,
        0.08
      ],
      "s": [
        0.14,
        0.02,
        0.025
      ],
      "c": "light",
      "f": "matte"
    }
  ]
});
}
