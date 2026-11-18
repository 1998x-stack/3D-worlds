import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Slide Track Accessory Riser; stylized visual prototype only. */
export const assetMeta = {
  "id": "furniture.slide-track-accessory-riser.001",
  "slug": "slide-track-accessory-riser",
  "title": "Slide Track Accessory Riser",
  "title_zh": "滑轨桌面配件台",
  "summary": "Original slide track accessory riser study with frame and tray assemblies and individually named functional details",
  "category": "furniture",
  "tags": [
    "slide",
    "track",
    "accessory",
    "riser",
    "furniture",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.35,
    0.15,
    0.26
  ],
  "generator": "createSlideTrackAccessoryRiser",
  "source_path": "src/models/slide_track_accessory_riser.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/slide-track-accessory-riser.webp",
  "accent": "#e1bc86",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createSlideTrackAccessoryRiser() { return buildRecipe({
  "title": "Slide Track Accessory Riser",
  "dimensions": [
    0.35,
    0.15,
    0.26
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
      "n": "frame-0-post--1",
      "p": [
        -0.8,
        0.86,
        -0.4
      ],
      "s": [
        0.15,
        1.38,
        0.18
      ],
      "c": 10647644,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "frame-0-runner--1",
      "p": [
        -0.74,
        0.41,
        0.06
      ],
      "s": [
        0.14,
        0.13,
        1.18
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "frame-0-post-1",
      "p": [
        0.8,
        0.86,
        -0.4
      ],
      "s": [
        0.15,
        1.38,
        0.18
      ],
      "c": 10647644,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "frame-0-runner-1",
      "p": [
        0.74,
        0.41,
        0.06
      ],
      "s": [
        0.14,
        0.13,
        1.18
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "frame-0-top-bridge",
      "p": [
        0,
        1.52,
        -0.4
      ],
      "s": [
        1.75,
        0.13,
        0.18
      ],
      "c": 14793862,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "frame-0-lower-rail",
      "p": [
        0,
        0.35,
        -0.43
      ],
      "s": [
        1.68,
        0.14,
        0.17
      ],
      "c": 2569280,
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
      "c": 14793862,
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
      "c": 10647644,
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
      "c": 10647644,
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
      "c": 10647644,
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
      "c": 10647644,
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
