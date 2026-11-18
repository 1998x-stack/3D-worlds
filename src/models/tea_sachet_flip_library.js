import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Tea Sachet Flip Library; stylized visual prototype only. */
export const assetMeta = {
  "id": "kitchen.tea-sachet-flip-library.001",
  "slug": "tea-sachet-flip-library",
  "title": "Tea Sachet Flip Library",
  "title_zh": "翻页茶包收纳柜",
  "summary": "Original tea sachet flip library study with tray and panel assemblies and individually named functional details",
  "category": "kitchen",
  "tags": [
    "tea",
    "sachet",
    "flip",
    "library",
    "kitchen",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.28,
    0.18,
    0.2
  ],
  "generator": "createTeaSachetFlipLibrary",
  "source_path": "src/models/tea_sachet_flip_library.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/tea-sachet-flip-library.webp",
  "accent": "#74b5a7",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createTeaSachetFlipLibrary() { return buildRecipe({
  "title": "Tea Sachet Flip Library",
  "dimensions": [
    0.28,
    0.18,
    0.2
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
      "c": 11772538,
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
      "c": 7648679,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-tray-deck",
      "p": [
        0,
        0.37,
        0.15
      ],
      "s": [
        1.7,
        0.16,
        1.19
      ],
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-0",
      "p": [
        -0.72,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-1",
      "p": [
        -0.54,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-2",
      "p": [
        -0.36,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-3",
      "p": [
        -0.17999999999999994,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-4",
      "p": [
        0,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-5",
      "p": [
        0.17999999999999994,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-6",
      "p": [
        0.3600000000000001,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-7",
      "p": [
        0.54,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-divider-8",
      "p": [
        0.72,
        0.54,
        0.17
      ],
      "s": [
        0.048,
        0.3,
        1.02
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-0",
      "p": [
        -0.59,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-1",
      "p": [
        -0.36,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-2",
      "p": [
        -0.12999999999999995,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-3",
      "p": [
        0.10000000000000009,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-4",
      "p": [
        0.33000000000000007,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-0-label-5",
      "p": [
        0.5600000000000002,
        0.72,
        0.62
      ],
      "s": [
        0.16,
        0.055,
        0.08
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-0",
      "p": [
        -0.76,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-1",
      "p": [
        -0.62,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-2",
      "p": [
        -0.48,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-3",
      "p": [
        -0.33999999999999997,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-4",
      "p": [
        -0.19999999999999996,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-5",
      "p": [
        -0.05999999999999994,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-6",
      "p": [
        0.08000000000000007,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-7",
      "p": [
        0.22000000000000008,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-8",
      "p": [
        0.3600000000000001,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-9",
      "p": [
        0.5000000000000002,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-10",
      "p": [
        0.6400000000000001,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-louver-11",
      "p": [
        0.78,
        1.03,
        -0.2
      ],
      "s": [
        0.084,
        1.35,
        0.34
      ],
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-lintel",
      "p": [
        0,
        1.79,
        -0.2
      ],
      "s": [
        1.78,
        0.14,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-1-sill",
      "p": [
        0,
        0.28,
        -0.2
      ],
      "s": [
        1.78,
        0.14,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    }
  ]
}); }
