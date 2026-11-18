import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Kinetic Privacy Facade; stylized visual prototype only. */
export const assetMeta = {
  "id": "architecture.kinetic-privacy-facade.001",
  "slug": "kinetic-privacy-facade",
  "title": "Kinetic Privacy Facade",
  "title_zh": "动态隐私立面",
  "summary": "Original kinetic privacy facade study with panel and frame assemblies and individually named functional details",
  "category": "architecture",
  "tags": [
    "kinetic",
    "privacy",
    "facade",
    "architecture",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.32,
    0.34,
    0.13
  ],
  "generator": "createKineticPrivacyFacade",
  "source_path": "src/models/kinetic_privacy_facade.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/kinetic-privacy-facade.webp",
  "accent": "#d5a56d",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createKineticPrivacyFacade() { return buildRecipe({
  "title": "Kinetic Privacy Facade",
  "dimensions": [
    0.32,
    0.34,
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
      "c": 10005410,
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
      "c": 14001517,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-0",
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
      "c": 14001517,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-1",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-2",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-3",
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
      "c": 14001517,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-4",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-5",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-6",
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
      "c": 14001517,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-7",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-8",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-9",
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
      "c": 14001517,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-10",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-louver-11",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "panel-0-lintel",
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
      "n": "panel-0-sill",
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
    },
    {
      "t": "rounded-box",
      "n": "frame-1-post--1",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "frame-1-runner--1",
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
      "n": "frame-1-post-1",
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
      "c": 10005410,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "frame-1-runner-1",
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
      "n": "frame-1-top-bridge",
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
      "c": 14001517,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "frame-1-lower-rail",
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
    }
  ]
}); }
