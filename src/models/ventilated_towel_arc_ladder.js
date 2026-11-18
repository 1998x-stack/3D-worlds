import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Ventilated Towel Arc Ladder; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "bathroom.ventilated-towel-arc-ladder.001",
  "slug": "ventilated-towel-arc-ladder",
  "title": "Ventilated Towel Arc Ladder",
  "title_zh": "弧形通风毛巾梯架",
  "summary": "Air gap towel drying ladder with offset arced rungs",
  "category": "bathroom",
  "tags": [
    "ventilated",
    "towel",
    "arc",
    "ladder",
    "bathroom",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.27,
    0.36,
    0.17
  ],
  "generator": "createVentilatedTowelArcLadder",
  "source_path": "src/models/ventilated_towel_arc_ladder.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/ventilated-towel-arc-ladder.webp",
  "accent": "#4c8798",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createVentilatedTowelArcLadder() { return buildRecipe({
  "title": "Ventilated Towel Arc Ladder",
  "dimensions": [
    0.27,
    0.36,
    0.17
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "feet-deck",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        1.75,
        0.17,
        1.18
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "arched-side--1-0",
      "from": [
        -0.7,
        0.22,
        -0.39
      ],
      "to": [
        -0.69,
        0.45,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side--1-1",
      "from": [
        -0.7,
        0.22,
        -0.39
      ],
      "to": [
        -0.6,
        0.8,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side--1-2",
      "from": [
        -0.7,
        0.22,
        -0.39
      ],
      "to": [
        -0.51,
        1.15,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side--1-3",
      "from": [
        -0.7,
        0.22,
        -0.39
      ],
      "to": [
        -0.42,
        1.5,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side--1-4",
      "from": [
        -0.7,
        0.22,
        -0.39
      ],
      "to": [
        -0.33,
        1.85,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side-1-0",
      "from": [
        0.7,
        0.22,
        -0.39
      ],
      "to": [
        0.69,
        0.45,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side-1-1",
      "from": [
        0.7,
        0.22,
        -0.39
      ],
      "to": [
        0.6,
        0.8,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side-1-2",
      "from": [
        0.7,
        0.22,
        -0.39
      ],
      "to": [
        0.51,
        1.15,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side-1-3",
      "from": [
        0.7,
        0.22,
        -0.39
      ],
      "to": [
        0.42,
        1.5,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "arched-side-1-4",
      "from": [
        0.7,
        0.22,
        -0.39
      ],
      "to": [
        0.33,
        1.85,
        0.36
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "air-rung-0",
      "from": [
        -0.65,
        0.41,
        0.23
      ],
      "to": [
        0.65,
        0.41,
        -0.16
      ],
      "r": 0.048,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-0",
      "p": [
        0,
        0.33,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "air-rung-1",
      "from": [
        -0.63,
        0.69,
        0.23
      ],
      "to": [
        0.63,
        0.69,
        -0.16
      ],
      "r": 0.048,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-1",
      "p": [
        0,
        0.61,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "air-rung-2",
      "from": [
        -0.61,
        0.97,
        0.23
      ],
      "to": [
        0.61,
        0.97,
        -0.16
      ],
      "r": 0.048,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-2",
      "p": [
        0,
        0.89,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "air-rung-3",
      "from": [
        -0.59,
        1.25,
        0.23
      ],
      "to": [
        0.59,
        1.25,
        -0.16
      ],
      "r": 0.048,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-3",
      "p": [
        0,
        1.17,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "air-rung-4",
      "from": [
        -0.57,
        1.53,
        0.23
      ],
      "to": [
        0.57,
        1.53,
        -0.16
      ],
      "r": 0.048,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-4",
      "p": [
        0,
        1.45,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "air-rung-5",
      "from": [
        -0.55,
        1.81,
        0.23
      ],
      "to": [
        0.55,
        1.81,
        -0.16
      ],
      "r": 0.048,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-5",
      "p": [
        0,
        1.73,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "air-rung-6",
      "from": [
        -0.53,
        2.09,
        0.23
      ],
      "to": [
        0.53,
        2.09,
        -0.16
      ],
      "r": 0.048,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rung-brace-6",
      "p": [
        0,
        2.01,
        0.08
      ],
      "s": [
        0.18,
        0.06,
        0.2
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-0",
      "p": [
        -0.72,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-1",
      "p": [
        -0.56,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-2",
      "p": [
        -0.4,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-3",
      "p": [
        -0.24,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-4",
      "p": [
        -0.08,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-5",
      "p": [
        0.08,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-6",
      "p": [
        0.24,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-7",
      "p": [
        0.4,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-8",
      "p": [
        0.56,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bottom-weep-9",
      "p": [
        0.72,
        0.22,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
