import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Cross Laminate Joint Study; stylized visual prototype only. */
export const assetMeta = {
  "id": "architecture.cross-laminate-joint-study.001",
  "slug": "cross-laminate-joint-study",
  "title": "Cross Laminate Joint Study",
  "title_zh": "交错层板榫接研究",
  "summary": "Original cross laminate joint study study with frame and joinery assemblies and individually named functional details",
  "category": "architecture",
  "tags": [
    "cross",
    "laminate",
    "joint",
    "study",
    "architecture",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.32,
    0.26,
    0.23
  ],
  "generator": "createCrossLaminateJointStudy",
  "source_path": "src/models/cross_laminate_joint_study.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/cross-laminate-joint-study.webp",
  "accent": "#d5a56d",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createCrossLaminateJointStudy() { return buildRecipe({
  "title": "Cross Laminate Joint Study",
  "dimensions": [
    0.32,
    0.26,
    0.23
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
      "c": 10005410,
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
      "c": 10005410,
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
      "c": 14001517,
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
      "n": "joinery-1-cross-grain-0",
      "p": [
        0,
        0.48,
        -0.21
      ],
      "s": [
        1.46,
        0.15,
        0.31
      ],
      "c": 10005410,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-long-grain-0",
      "p": [
        -0.21,
        0.56,
        0
      ],
      "s": [
        0.32,
        0.14,
        1.12
      ],
      "c": 14001517,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-cross-grain-1",
      "p": [
        0,
        0.72,
        -0.21
      ],
      "s": [
        1.46,
        0.15,
        0.31
      ],
      "c": 14001517,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-long-grain-1",
      "p": [
        -0.21,
        0.8,
        0
      ],
      "s": [
        0.32,
        0.14,
        1.12
      ],
      "c": 10005410,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-cross-grain-2",
      "p": [
        0,
        0.96,
        -0.21
      ],
      "s": [
        1.46,
        0.15,
        0.31
      ],
      "c": 10005410,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-long-grain-2",
      "p": [
        -0.21,
        1.04,
        0
      ],
      "s": [
        0.32,
        0.14,
        1.12
      ],
      "c": 14001517,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-cross-grain-3",
      "p": [
        0,
        1.2,
        -0.21
      ],
      "s": [
        1.46,
        0.15,
        0.31
      ],
      "c": 14001517,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-long-grain-3",
      "p": [
        -0.21,
        1.28,
        0
      ],
      "s": [
        0.32,
        0.14,
        1.12
      ],
      "c": 10005410,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-cross-grain-4",
      "p": [
        0,
        1.44,
        -0.21
      ],
      "s": [
        1.46,
        0.15,
        0.31
      ],
      "c": 10005410,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-long-grain-4",
      "p": [
        -0.21,
        1.52,
        0
      ],
      "s": [
        0.32,
        0.14,
        1.12
      ],
      "c": 14001517,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-cross-grain-5",
      "p": [
        0,
        1.68,
        -0.21
      ],
      "s": [
        1.46,
        0.15,
        0.31
      ],
      "c": 14001517,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "joinery-1-long-grain-5",
      "p": [
        -0.21,
        1.76,
        0
      ],
      "s": [
        0.32,
        0.14,
        1.12
      ],
      "c": 10005410,
      "finish": "wood"
    }
  ]
}); }
