import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Vented Router Suspension Bracket; stylized visual prototype only. */
export const assetMeta = {
  "id": "electronics.vented-router-suspension-bracket.001",
  "slug": "vented-router-suspension-bracket",
  "title": "Vented Router Suspension Bracket",
  "title_zh": "通风路由器悬挂架",
  "summary": "Original vented router suspension bracket study with frame and drain assemblies and individually named functional details",
  "category": "electronics",
  "tags": [
    "vented",
    "router",
    "suspension",
    "bracket",
    "electronics",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.27,
    0.19,
    0.17
  ],
  "generator": "createVentedRouterSuspensionBracket",
  "source_path": "src/models/vented_router_suspension_bracket.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/vented-router-suspension-bracket.webp",
  "accent": "#66d9ce",
  "provenance_note": "Original procedural visual design; amazon is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createVentedRouterSuspensionBracket() { return buildRecipe({
  "title": "Vented Router Suspension Bracket",
  "dimensions": [
    0.27,
    0.19,
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
      "c": 5336199,
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
      "c": 6740430,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 6740430,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 6740430,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 6740430,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 6740430,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 5336199,
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
      "c": 6740430,
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
      "c": 5336199,
      "finish": "matte"
    }
  ]
}); }
