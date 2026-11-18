import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Vertical Controller Valet; stylized visual prototype only. */
export const assetMeta = {
  "id": "furniture.vertical-controller-valet.001",
  "slug": "vertical-controller-valet",
  "title": "Vertical Controller Valet",
  "title_zh": "竖置手柄收纳站",
  "summary": "Original vertical controller valet study with cradle and console assemblies and individually named functional details",
  "category": "furniture",
  "tags": [
    "vertical",
    "controller",
    "valet",
    "furniture",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.22,
    0.29,
    0.16
  ],
  "generator": "createVerticalControllerValet",
  "source_path": "src/models/vertical_controller_valet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/vertical-controller-valet.webp",
  "accent": "#e1bc86",
  "provenance_note": "Original procedural visual design; ebay is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createVerticalControllerValet() { return buildRecipe({
  "title": "Vertical Controller Valet",
  "dimensions": [
    0.22,
    0.29,
    0.16
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
      "n": "cradle-0-support--1",
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
      "c": 10647644,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-0-saddle--1",
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
      "n": "cradle-0-hinge--1",
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
      "c": 14793862,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-0-hanger--1",
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
      "n": "cradle-0-support-1",
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
      "c": 10647644,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cradle-0-saddle-1",
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
      "n": "cradle-0-hinge-1",
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
      "c": 14793862,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "cradle-0-hanger-1",
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
    },
    {
      "t": "rounded-box",
      "n": "console-1-console-body",
      "p": [
        0,
        0.65,
        0.08
      ],
      "s": [
        1.65,
        0.58,
        1.04
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-0",
      "p": [
        -0.62,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-1",
      "p": [
        -0.21000000000000002,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-2",
      "p": [
        0.19999999999999996,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-3",
      "p": [
        0.61,
        1.02,
        -0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-4",
      "p": [
        -0.62,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-5",
      "p": [
        -0.21000000000000002,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-6",
      "p": [
        0.19999999999999996,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-7",
      "p": [
        0.61,
        1.02,
        0
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-8",
      "p": [
        -0.62,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-9",
      "p": [
        -0.21000000000000002,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-10",
      "p": [
        0.19999999999999996,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "console-1-button-11",
      "p": [
        0.61,
        1.02,
        0.27
      ],
      "s": [
        0.29,
        0.1,
        0.2
      ],
      "c": 15921126,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "console-1-encoder",
      "p": [
        0.75,
        1.07,
        0.43
      ],
      "s": [
        0.28,
        0.18,
        0.28
      ],
      "c": 14793862,
      "finish": "metal"
    }
  ]
}); }
