import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Adaptive Bookend Clamp Desk; stylized visual prototype only. */
export const assetMeta = {
  "id": "furniture.adaptive-bookend-clamp-desk.001",
  "slug": "adaptive-bookend-clamp-desk",
  "title": "Adaptive Bookend Clamp Desk",
  "title_zh": "自适应书挡夹持台",
  "summary": "Original adaptive bookend clamp desk study with bookends and gauge assemblies and individually named functional details",
  "category": "furniture",
  "tags": [
    "adaptive",
    "bookend",
    "clamp",
    "desk",
    "furniture",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.32,
    0.19,
    0.18
  ],
  "generator": "createAdaptiveBookendClampDesk",
  "source_path": "src/models/adaptive_bookend_clamp_desk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/adaptive-bookend-clamp-desk.webp",
  "accent": "#e1bc86",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createAdaptiveBookendClampDesk() { return buildRecipe({
  "title": "Adaptive Bookend Clamp Desk",
  "dimensions": [
    0.32,
    0.19,
    0.18
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 10647644,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 14793862,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "bookends-0-bookend--1",
      "p": [
        -0.51,
        0.79,
        -0.02
      ],
      "s": [
        0.15,
        1.14,
        1.12
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "bookends-0-heel--1",
      "p": [
        -0.51,
        0.25,
        0.51
      ],
      "s": [
        0.33,
        0.17,
        0.22
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "bookends-0-screw--1",
      "from": [
        -0.64,
        0.4,
        -0.55
      ],
      "to": [
        -0.64,
        0.4,
        0.55
      ],
      "r": 0.035,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "bookends-0-knob--1",
      "p": [
        -0.64,
        0.4,
        0.59
      ],
      "s": [
        0.2,
        0.17,
        0.2
      ],
      "c": 14793862,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bookends-0-bookend-1",
      "p": [
        0.51,
        0.79,
        -0.02
      ],
      "s": [
        0.15,
        1.14,
        1.12
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "bookends-0-heel-1",
      "p": [
        0.51,
        0.25,
        0.51
      ],
      "s": [
        0.33,
        0.17,
        0.22
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "bookends-0-screw-1",
      "from": [
        0.64,
        0.4,
        -0.55
      ],
      "to": [
        0.64,
        0.4,
        0.55
      ],
      "r": 0.035,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "bookends-0-knob-1",
      "p": [
        0.64,
        0.4,
        0.59
      ],
      "s": [
        0.2,
        0.17,
        0.2
      ],
      "c": 14793862,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-rule",
      "p": [
        0,
        0.33,
        -0.38
      ],
      "s": [
        1.68,
        0.12,
        0.23
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-0",
      "p": [
        -0.77,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-1",
      "p": [
        -0.66,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-2",
      "p": [
        -0.55,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-3",
      "p": [
        -0.44,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-4",
      "p": [
        -0.33,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-5",
      "p": [
        -0.21999999999999997,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-6",
      "p": [
        -0.10999999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-7",
      "p": [
        0,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-8",
      "p": [
        0.10999999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-9",
      "p": [
        0.21999999999999997,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-10",
      "p": [
        0.33000000000000007,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.14,
        0.025
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-11",
      "p": [
        0.43999999999999995,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-12",
      "p": [
        0.55,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-13",
      "p": [
        0.6599999999999999,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "gauge-1-graduation-14",
      "p": [
        0.77,
        0.42,
        -0.26
      ],
      "s": [
        0.023,
        0.08,
        0.025
      ],
      "c": 15921126,
      "finish": "matte"
    }
  ]
}); }
