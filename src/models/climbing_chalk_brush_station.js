import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Climbing Chalk Brush Station; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "sports.climbing-chalk-brush-station.001",
  "slug": "climbing-chalk-brush-station",
  "title": "Climbing Chalk Brush Station",
  "title_zh": "攀岩镁粉刷具工作站",
  "summary": "Bouldering brush rack and chalk-bag cradle",
  "category": "sports",
  "tags": [
    "climbing",
    "chalk",
    "brush",
    "station",
    "sports",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.25,
    0.27,
    0.2
  ],
  "generator": "createClimbingChalkBrushStation",
  "source_path": "src/models/climbing_chalk_brush_station.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/climbing-chalk-brush-station.webp",
  "accent": "#e4bf7d",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createClimbingChalkBrushStation() { return buildRecipe({
  "title": "Climbing Chalk Brush Station",
  "dimensions": [
    0.25,
    0.27,
    0.2
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "brush-collection-plinth",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.66,
        0.18,
        1.3
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rear-hanging-spine",
      "p": [
        0,
        1.01,
        -0.46
      ],
      "s": [
        0.23,
        1.64,
        0.2
      ],
      "c": 7708835,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "bag-saddle",
      "p": [
        0,
        0.35,
        0.17
      ],
      "s": [
        0.72,
        0.23,
        0.72
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "cloth-chalkbag",
      "p": [
        0,
        0.62,
        0.2
      ],
      "s": [
        0.56,
        0.42,
        0.48
      ],
      "c": 14991229,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-0",
      "from": [
        -0.67,
        0.68,
        -0.16
      ],
      "to": [
        -0.67,
        1.02,
        0.08
      ],
      "r": 0.042,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-0",
      "p": [
        -0.67,
        1.08,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-1",
      "from": [
        -0.48,
        0.68,
        -0.16
      ],
      "to": [
        -0.48,
        1.22,
        0.08
      ],
      "r": 0.042,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-1",
      "p": [
        -0.48,
        1.28,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-2",
      "from": [
        -0.29,
        0.68,
        -0.16
      ],
      "to": [
        -0.29,
        1.42,
        0.08
      ],
      "r": 0.042,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-2",
      "p": [
        -0.29,
        1.48,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-3",
      "from": [
        -0.1,
        0.68,
        -0.16
      ],
      "to": [
        -0.1,
        1.02,
        0.08
      ],
      "r": 0.042,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-3",
      "p": [
        -0.1,
        1.08,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-4",
      "from": [
        0.09,
        0.68,
        -0.16
      ],
      "to": [
        0.09,
        1.22,
        0.08
      ],
      "r": 0.042,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-4",
      "p": [
        0.09,
        1.28,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-5",
      "from": [
        0.28,
        0.68,
        -0.16
      ],
      "to": [
        0.28,
        1.42,
        0.08
      ],
      "r": 0.042,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-5",
      "p": [
        0.28,
        1.48,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-6",
      "from": [
        0.47,
        0.68,
        -0.16
      ],
      "to": [
        0.47,
        1.02,
        0.08
      ],
      "r": 0.042,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-6",
      "p": [
        0.47,
        1.08,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rod",
      "n": "brush-stick-7",
      "from": [
        0.66,
        0.68,
        -0.16
      ],
      "to": [
        0.66,
        1.22,
        0.08
      ],
      "r": 0.042,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bristle-head-7",
      "p": [
        0.66,
        1.28,
        0.11
      ],
      "s": [
        0.14,
        0.19,
        0.17
      ],
      "c": 7560529,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-0",
      "p": [
        -0.74,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-1",
      "p": [
        -0.595,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-2",
      "p": [
        -0.45,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-3",
      "p": [
        -0.305,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-4",
      "p": [
        -0.16,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-5",
      "p": [
        -0.015,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-6",
      "p": [
        0.13,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-7",
      "p": [
        0.275,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-8",
      "p": [
        0.42,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-9",
      "p": [
        0.565,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-hook-10",
      "p": [
        0.71,
        1.68,
        -0.35
      ],
      "s": [
        0.09,
        0.18,
        0.3
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-0",
      "p": [
        -0.72,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 7708835,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-1",
      "p": [
        -0.56,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14991229,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-2",
      "p": [
        -0.4,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 7708835,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-3",
      "p": [
        -0.24,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14991229,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-4",
      "p": [
        -0.08,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 7708835,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-5",
      "p": [
        0.08,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14991229,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-6",
      "p": [
        0.24,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 7708835,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-7",
      "p": [
        0.4,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14991229,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-8",
      "p": [
        0.56,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 7708835,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "grip-care-pad-9",
      "p": [
        0.72,
        0.26,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14991229,
      "finish": "anodized"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
