import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Adaptive Cycle Lane Bollard Node; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "urban.adaptive-cycle-lane-bollard-node.001",
  "slug": "adaptive-cycle-lane-bollard-node",
  "title": "Adaptive Cycle Lane Bollard Node",
  "title_zh": "自行车道弹性隔离节点",
  "summary": "Separated cycle path, reflective bollards and drainage curb",
  "category": "urban",
  "tags": [
    "adaptive",
    "cycle",
    "lane",
    "bollard",
    "node",
    "urban",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.42,
    0.18,
    0.3
  ],
  "generator": "createAdaptiveCycleLaneBollardNode",
  "source_path": "src/models/adaptive_cycle_lane_bollard_node.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/adaptive-cycle-lane-bollard-node.webp",
  "accent": "#e5bb72",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createAdaptiveCycleLaneBollardNode() { return buildRecipe({
  "title": "Adaptive Cycle Lane Bollard Node",
  "dimensions": [
    0.42,
    0.18,
    0.3
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "street-model",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.15,
        1.54
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycle-track",
      "p": [
        0,
        0.21,
        -0.32
      ],
      "s": [
        1.94,
        0.04,
        0.67
      ],
      "c": 5611639,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "marking-0",
      "p": [
        -0.85,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-0",
      "p": [
        -0.85,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-0",
      "p": [
        -0.85,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-0",
      "p": [
        -0.85,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-1",
      "p": [
        -0.66,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-1",
      "p": [
        -0.66,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-1",
      "p": [
        -0.66,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-1",
      "p": [
        -0.66,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-2",
      "p": [
        -0.47,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-2",
      "p": [
        -0.47,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-2",
      "p": [
        -0.47,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-2",
      "p": [
        -0.47,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-3",
      "p": [
        -0.28,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-3",
      "p": [
        -0.28,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-3",
      "p": [
        -0.28,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-3",
      "p": [
        -0.28,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-4",
      "p": [
        -0.09,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-4",
      "p": [
        -0.09,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-4",
      "p": [
        -0.09,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-4",
      "p": [
        -0.09,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-5",
      "p": [
        0.1,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-5",
      "p": [
        0.1,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-5",
      "p": [
        0.1,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-5",
      "p": [
        0.1,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-6",
      "p": [
        0.29,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-6",
      "p": [
        0.29,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-6",
      "p": [
        0.29,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-6",
      "p": [
        0.29,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-7",
      "p": [
        0.48,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-7",
      "p": [
        0.48,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-7",
      "p": [
        0.48,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-7",
      "p": [
        0.48,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-8",
      "p": [
        0.67,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-8",
      "p": [
        0.67,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-8",
      "p": [
        0.67,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-8",
      "p": [
        0.67,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "marking-9",
      "p": [
        0.86,
        0.25,
        0.04
      ],
      "s": [
        0.11,
        0.02,
        0.05
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "spring-bollard-9",
      "p": [
        0.86,
        0.53,
        0.13
      ],
      "s": [
        0.13,
        0.59,
        0.13
      ],
      "c": 15055730,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "retroreflective-strip-9",
      "p": [
        0.86,
        0.79,
        0.13
      ],
      "s": [
        0.14,
        0.11,
        0.14
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foot-socket-9",
      "p": [
        0.86,
        0.27,
        0.13
      ],
      "s": [
        0.24,
        0.09,
        0.24
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-0",
      "p": [
        -0.85,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-1",
      "p": [
        -0.66,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-2",
      "p": [
        -0.47,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-3",
      "p": [
        -0.28,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-4",
      "p": [
        -0.09,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-5",
      "p": [
        0.1,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-6",
      "p": [
        0.29,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-7",
      "p": [
        0.48,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-8",
      "p": [
        0.67,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cycling-chevron-9",
      "p": [
        0.86,
        0.25,
        -0.36
      ],
      "s": [
        0.12,
        0.019,
        0.17
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "raised-curb",
      "p": [
        0,
        0.36,
        0.65
      ],
      "s": [
        1.96,
        0.29,
        0.27
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-0",
      "p": [
        -0.8,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-1",
      "p": [
        -0.6,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-2",
      "p": [
        -0.4,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-3",
      "p": [
        -0.2,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-4",
      "p": [
        0,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-5",
      "p": [
        0.2,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-6",
      "p": [
        0.4,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-7",
      "p": [
        0.6,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "curb-weep-8",
      "p": [
        0.8,
        0.31,
        0.76
      ],
      "s": [
        0.07,
        0.04,
        0.09
      ],
      "c": 4233141,
      "finish": "glass"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
