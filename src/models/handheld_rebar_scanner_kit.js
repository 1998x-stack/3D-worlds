import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Handheld Rebar Scanner Kit / 手持钢筋探测仪套装. */
export const assetMeta = {
  "id": "tools.handheld-rebar-scanner-kit.001",
  "slug": "handheld-rebar-scanner-kit",
  "title": "Handheld Rebar Scanner Kit",
  "title_zh": "手持钢筋探测仪套装",
  "summary": "Civil engineering rebar detection scanner kit with handheld head, cable and protective carry case",
  "category": "tools",
  "tags": [
    "handheld",
    "rebar",
    "scanner",
    "kit",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    0.87,
    0.56,
    0.72
  ],
  "generator": "createHandheldRebarScannerKit",
  "source_path": "src/models/handheld_rebar_scanner_kit.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/handheld-rebar-scanner-kit.webp",
  "accent": "#30475a"
};
export function createHandheldRebarScannerKit() { return buildRecipe({
  "title": "Handheld Rebar Scanner Kit",
  "dimensions": [
    0.87,
    0.56,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-rebar-scanner-protective-equipment-case",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        0.79,
        0.28,
        0.57
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-hinged-scanner-case-lid",
      "p": [
        0,
        0.34,
        -0.18
      ],
      "s": [
        0.82,
        0.07,
        0.3
      ],
      "c": 8360601
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-rebar-hand-scanning-head",
      "p": [
        -0.18,
        0.37,
        0.14
      ],
      "s": [
        0.39,
        0.15,
        0.21
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-electromagnetic-rebar-indicator",
      "p": [
        0.28,
        0.42,
        0.13
      ],
      "s": [
        0.24,
        0.2,
        0.15
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-0",
      "p": [
        -0.31,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-1",
      "p": [
        -0.22999999999999998,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-2",
      "p": [
        -0.15,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-3",
      "p": [
        -0.07,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-4",
      "p": [
        0.010000000000000009,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-5",
      "p": [
        0.09000000000000002,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-6",
      "p": [
        0.16999999999999998,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "box",
      "n": "handheld-rebar-scanner-kit-steel-detector-signal-mark-7",
      "p": [
        0.25000000000000006,
        0.47,
        0.24
      ],
      "s": [
        0.052,
        0.023,
        0.015
      ],
      "c": 13543004
    },
    {
      "t": "rod",
      "n": "handheld-rebar-scanner-kit-metal-detection-probe-cable",
      "from": [
        0.28,
        0.37,
        0.13
      ],
      "to": [
        0.48,
        0.21,
        -0.14
      ],
      "r": 0.016,
      "c": 13751497
    },
    {
      "t": "cylinder",
      "n": "handheld-rebar-scanner-kit-rebar-calibration-guide-0",
      "p": [
        -0.3,
        0.18,
        -0.13
      ],
      "s": [
        0.065,
        0.09,
        0.065
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "handheld-rebar-scanner-kit-rebar-calibration-guide-1",
      "p": [
        -0.15,
        0.18,
        -0.13
      ],
      "s": [
        0.065,
        0.09,
        0.065
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "handheld-rebar-scanner-kit-rebar-calibration-guide-2",
      "p": [
        0,
        0.18,
        -0.13
      ],
      "s": [
        0.065,
        0.09,
        0.065
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "handheld-rebar-scanner-kit-rebar-calibration-guide-3",
      "p": [
        0.14999999999999997,
        0.18,
        -0.13
      ],
      "s": [
        0.065,
        0.09,
        0.065
      ],
      "c": 3163994
    },
    {
      "t": "cylinder",
      "n": "handheld-rebar-scanner-kit-rebar-calibration-guide-4",
      "p": [
        0.3,
        0.18,
        -0.13
      ],
      "s": [
        0.065,
        0.09,
        0.065
      ],
      "c": 3163994
    }
  ]
}); }
