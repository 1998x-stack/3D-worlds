import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: E-Paper Ambient Dashboard; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "electronics.e-paper-ambient-dashboard.001",
  "slug": "e-paper-ambient-dashboard",
  "title": "E-Paper Ambient Dashboard",
  "title_zh": "电子墨水桌面信息站",
  "summary": "Angled e-ink console with structured data display and selector",
  "category": "electronics",
  "tags": [
    "paper",
    "ambient",
    "dashboard",
    "electronics",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.27,
    0.19,
    0.17
  ],
  "generator": "createEPaperAmbientDashboard",
  "source_path": "src/models/e_paper_ambient_dashboard.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/e-paper-ambient-dashboard.webp",
  "accent": "#60c9bb",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createEPaperAmbientDashboard() { return buildRecipe({
  "title": "E-Paper Ambient Dashboard",
  "dimensions": [
    0.27,
    0.19,
    0.17
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "angled-monitor",
      "p": [
        0,
        0.8,
        -0.11
      ],
      "s": [
        1.83,
        0.87,
        0.32
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paper-display",
      "p": [
        0,
        0.87,
        0.1
      ],
      "s": [
        1.54,
        0.62,
        0.025
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-0",
      "p": [
        -0.63,
        0.68,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-1",
      "p": [
        -0.39,
        0.68,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-2",
      "p": [
        -0.15,
        0.68,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-3",
      "p": [
        0.09,
        0.68,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-4",
      "p": [
        0.33,
        0.68,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-5",
      "p": [
        0.57,
        0.68,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-6",
      "p": [
        -0.63,
        0.96,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-7",
      "p": [
        -0.39,
        0.96,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-8",
      "p": [
        -0.15,
        0.96,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-9",
      "p": [
        0.09,
        0.96,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-10",
      "p": [
        0.33,
        0.96,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "dashboard-tile-11",
      "p": [
        0.57,
        0.96,
        0.13
      ],
      "s": [
        0.18,
        0.14,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-0",
      "p": [
        -0.59,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.04,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-1",
      "p": [
        -0.46,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.063,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-2",
      "p": [
        -0.33,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.086,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-3",
      "p": [
        -0.2,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.109,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-4",
      "p": [
        -0.07,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.04,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-5",
      "p": [
        0.06,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.063,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-6",
      "p": [
        0.19,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.086,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-7",
      "p": [
        0.32,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.109,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-8",
      "p": [
        0.45,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.04,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "telemetry-bar-9",
      "p": [
        0.58,
        0.84,
        0.16
      ],
      "s": [
        0.061,
        0.063,
        0.018
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "dial-ring",
      "p": [
        0.77,
        0.5,
        0.38
      ],
      "s": [
        0.29,
        0.21,
        0.29
      ],
      "c": 12504530,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "selection-dial",
      "p": [
        0.77,
        0.52,
        0.5
      ],
      "s": [
        0.21,
        0.22,
        0.21
      ],
      "c": 15910009,
      "finish": "anodized",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-0",
      "p": [
        -0.78,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-1",
      "p": [
        -0.64,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-2",
      "p": [
        -0.5,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-3",
      "p": [
        -0.36,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-4",
      "p": [
        -0.22,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-5",
      "p": [
        -0.08,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-6",
      "p": [
        0.06,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-7",
      "p": [
        0.2,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-8",
      "p": [
        0.34,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-9",
      "p": [
        0.48,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-10",
      "p": [
        0.62,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-air-slot-11",
      "p": [
        0.76,
        0.51,
        -0.37
      ],
      "s": [
        0.063,
        0.034,
        0.05
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "stand--1",
      "from": [
        -0.68,
        0.38,
        -0.32
      ],
      "to": [
        -0.82,
        0.14,
        0.36
      ],
      "r": 0.052,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "stand-1",
      "from": [
        0.68,
        0.38,
        -0.32
      ],
      "to": [
        0.82,
        0.14,
        0.36
      ],
      "r": 0.052,
      "c": 12504530,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
