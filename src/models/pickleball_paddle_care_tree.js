import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Pickleball Paddle Care Tree; stylized visual prototype only. */
export const assetMeta = {
  "id": "sports.pickleball-paddle-care-tree.001",
  "slug": "pickleball-paddle-care-tree",
  "title": "Pickleball Paddle Care Tree",
  "title_zh": "匹克球拍保养挂架",
  "summary": "Original pickleball paddle care tree study with paddle and cradle assemblies and individually named functional details",
  "category": "sports",
  "tags": [
    "pickleball",
    "paddle",
    "care",
    "tree",
    "sports",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.26,
    0.29,
    0.2
  ],
  "generator": "createPickleballPaddleCareTree",
  "source_path": "src/models/pickleball_paddle_care_tree.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/pickleball-paddle-care-tree.webp",
  "accent": "#ebbc70",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createPickleballPaddleCareTree() { return buildRecipe({
  "title": "Pickleball Paddle Care Tree",
  "dimensions": [
    0.26,
    0.29,
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
      "c": 7576493,
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
      "c": 15449200,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-bat--1",
      "p": [
        -0.45,
        1.28,
        0
      ],
      "s": [
        0.52,
        0.72,
        0.16
      ],
      "c": 15449200,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "paddle-0-grip--1",
      "from": [
        -0.45,
        0.85,
        0
      ],
      "to": [
        -0.45,
        0.37,
        0
      ],
      "r": 0.073,
      "c": 2437178,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-saddle--1",
      "p": [
        -0.45,
        0.32,
        0.15
      ],
      "s": [
        0.53,
        0.1,
        0.33
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-bat-1",
      "p": [
        0.45,
        1.28,
        0
      ],
      "s": [
        0.52,
        0.72,
        0.16
      ],
      "c": 15449200,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "paddle-0-grip-1",
      "from": [
        0.45,
        0.85,
        0
      ],
      "to": [
        0.45,
        0.37,
        0
      ],
      "r": 0.073,
      "c": 2437178,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-saddle-1",
      "p": [
        0.45,
        0.32,
        0.15
      ],
      "s": [
        0.53,
        0.1,
        0.33
      ],
      "c": 2437178,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-0",
      "p": [
        -0.56,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-1",
      "p": [
        -0.4,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-2",
      "p": [
        -0.24000000000000005,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-3",
      "p": [
        -0.08000000000000007,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-4",
      "p": [
        0.07999999999999996,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-5",
      "p": [
        0.24,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-6",
      "p": [
        0.3999999999999999,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "paddle-0-foam-pad-7",
      "p": [
        0.56,
        0.3,
        0.49
      ],
      "s": [
        0.08,
        0.04,
        0.18
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-support--1",
      "p": [
        -0.53,
        0.62,
        0
      ],
      "s": [
        0.2,
        0.75,
        1.12
      ],
      "c": 7576493,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-saddle--1",
      "p": [
        -0.43,
        0.93,
        0.36
      ],
      "s": [
        0.47,
        0.13,
        0.3
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "cradle-1-hinge--1",
      "p": [
        -0.55,
        0.34,
        -0.52
      ],
      "s": [
        0.21,
        0.21,
        0.21
      ],
      "c": 15449200,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-1-hanger--1",
      "from": [
        -0.73,
        0.4,
        0.1
      ],
      "to": [
        -0.75,
        1.35,
        0.15
      ],
      "r": 0.034,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-support-1",
      "p": [
        0.53,
        0.62,
        0
      ],
      "s": [
        0.2,
        0.75,
        1.12
      ],
      "c": 7576493,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-1-saddle-1",
      "p": [
        0.43,
        0.93,
        0.36
      ],
      "s": [
        0.47,
        0.13,
        0.3
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "cradle-1-hinge-1",
      "p": [
        0.55,
        0.34,
        -0.52
      ],
      "s": [
        0.21,
        0.21,
        0.21
      ],
      "c": 15449200,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-1-hanger-1",
      "from": [
        0.73,
        0.4,
        0.1
      ],
      "to": [
        0.75,
        1.35,
        0.15
      ],
      "r": 0.034,
      "c": 11847118,
      "finish": "metal"
    }
  ]
}); }
