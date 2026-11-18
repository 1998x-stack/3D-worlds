import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Sponge Airlift Drain Bridge; stylized visual prototype only. */
export const assetMeta = {
  "id": "kitchen.sponge-airlift-drain-bridge.001",
  "slug": "sponge-airlift-drain-bridge",
  "title": "Sponge Airlift Drain Bridge",
  "title_zh": "悬浮海绵沥水桥",
  "summary": "Original sponge airlift drain bridge study with drain and tray assemblies and individually named functional details",
  "category": "kitchen",
  "tags": [
    "sponge",
    "airlift",
    "drain",
    "bridge",
    "kitchen",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.23,
    0.11,
    0.17
  ],
  "generator": "createSpongeAirliftDrainBridge",
  "source_path": "src/models/sponge_airlift_drain_bridge.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/sponge-airlift-drain-bridge.webp",
  "accent": "#74b5a7",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createSpongeAirliftDrainBridge() { return buildRecipe({
  "title": "Sponge Airlift Drain Bridge",
  "dimensions": [
    0.23,
    0.11,
    0.17
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
      "n": "drain-0-rail--1",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-rail-1",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-0",
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
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-1",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-2",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-3",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-4",
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
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-5",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-6",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-7",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-8",
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
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-9",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-10",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-11",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-12",
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
      "c": 7648679,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-0-slat-13",
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
      "c": 11772538,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "tray-1-tray-deck",
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
      "n": "tray-1-divider-0",
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
      "n": "tray-1-divider-1",
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
      "n": "tray-1-divider-2",
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
      "n": "tray-1-divider-3",
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
      "n": "tray-1-divider-4",
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
      "n": "tray-1-divider-5",
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
      "n": "tray-1-divider-6",
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
      "n": "tray-1-divider-7",
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
      "n": "tray-1-divider-8",
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
      "n": "tray-1-label-0",
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
      "n": "tray-1-label-1",
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
      "n": "tray-1-label-2",
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
      "n": "tray-1-label-3",
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
      "n": "tray-1-label-4",
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
      "n": "tray-1-label-5",
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
    }
  ]
}); }
