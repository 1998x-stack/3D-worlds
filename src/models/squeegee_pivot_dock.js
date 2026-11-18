import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Squeegee Pivot Dock; stylized visual prototype only. */
export const assetMeta = {
  "id": "bathroom.squeegee-pivot-dock.001",
  "slug": "squeegee-pivot-dock",
  "title": "Squeegee Pivot Dock",
  "title_zh": "刮水器旋转停靠座",
  "summary": "Original squeegee pivot dock study with hinge and drain assemblies and individually named functional details",
  "category": "bathroom",
  "tags": [
    "squeegee",
    "pivot",
    "dock",
    "bathroom",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.18,
    0.24,
    0.13
  ],
  "generator": "createSqueegeePivotDock",
  "source_path": "src/models/squeegee_pivot_dock.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/squeegee-pivot-dock.webp",
  "accent": "#43899b",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createSqueegeePivotDock() { return buildRecipe({
  "title": "Squeegee Pivot Dock",
  "dimensions": [
    0.18,
    0.24,
    0.13
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
      "c": 8700858,
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
      "c": 4426139,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "hinge-0-wall-back",
      "p": [
        0,
        1,
        -0.55
      ],
      "s": [
        1.45,
        1.65,
        0.15
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-boss",
      "p": [
        0,
        1.41,
        -0.4
      ],
      "s": [
        0.38,
        0.2,
        0.38
      ],
      "c": 4426139,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "hinge-0-swivel-arm",
      "from": [
        0,
        1.37,
        -0.4
      ],
      "to": [
        0.69,
        1.2,
        0.2
      ],
      "r": 0.064,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "hinge-0-tool-handle",
      "p": [
        0.7,
        0.98,
        0.24
      ],
      "s": [
        0.13,
        0.89,
        0.12
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-0",
      "p": [
        -0.62,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-1",
      "p": [
        -0.47,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-2",
      "p": [
        -0.32,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-3",
      "p": [
        -0.17000000000000004,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-4",
      "p": [
        -0.020000000000000018,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-5",
      "p": [
        0.13,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-6",
      "p": [
        0.2799999999999999,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-7",
      "p": [
        0.43000000000000005,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-0-hinge-pin-8",
      "p": [
        0.58,
        0.42,
        -0.43
      ],
      "s": [
        0.06,
        0.08,
        0.06
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-rail--1",
      "p": [
        -0.72,
        0.54,
        0
      ],
      "s": [
        0.12,
        0.62,
        1.28
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-rail-1",
      "p": [
        0.72,
        0.54,
        0
      ],
      "s": [
        0.12,
        0.62,
        1.28
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-0",
      "p": [
        -0.68,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-1",
      "p": [
        -0.5750000000000001,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-2",
      "p": [
        -0.4700000000000001,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-3",
      "p": [
        -0.36500000000000005,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-4",
      "p": [
        -0.26000000000000006,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-5",
      "p": [
        -0.15500000000000003,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-6",
      "p": [
        -0.050000000000000044,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-7",
      "p": [
        0.05499999999999994,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-8",
      "p": [
        0.15999999999999992,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-9",
      "p": [
        0.2649999999999999,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-10",
      "p": [
        0.37,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-11",
      "p": [
        0.475,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-12",
      "p": [
        0.58,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 4426139,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-1-slat-13",
      "p": [
        0.6849999999999999,
        0.89,
        0
      ],
      "s": [
        0.061,
        0.055,
        1.03
      ],
      "c": 8700858,
      "finish": "matte"
    }
  ]
}); }
