import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Shower Grout Detail Caddy; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "bathroom.shower-grout-detail-caddy.001",
  "slug": "shower-grout-detail-caddy",
  "title": "Shower Grout Detail Caddy",
  "title_zh": "浴室缝隙清洁工具挂架",
  "summary": "Ventilated shower organizer, brush racks and lower drainage",
  "category": "bathroom",
  "tags": [
    "shower",
    "grout",
    "detail",
    "caddy",
    "bathroom",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.2,
    0.27,
    0.16
  ],
  "generator": "createShowerGroutDetailCaddy",
  "source_path": "src/models/shower_grout_detail_caddy.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/shower-grout-detail-caddy.webp",
  "accent": "#4c8798",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createShowerGroutDetailCaddy() { return buildRecipe({
  "title": "Shower Grout Detail Caddy",
  "dimensions": [
    0.2,
    0.27,
    0.16
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "hanging-back",
      "p": [
        0,
        1,
        -0.5
      ],
      "s": [
        1.58,
        1.69,
        0.16
      ],
      "c": 8766903,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "wall-hook--1",
      "p": [
        -0.66,
        1.81,
        -0.3
      ],
      "s": [
        0.18,
        0.18,
        0.38
      ],
      "c": 5015448,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "wall-fastener--1",
      "p": [
        -0.6,
        1.52,
        -0.38
      ],
      "s": [
        0.15,
        0.08,
        0.15
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "wall-hook-1",
      "p": [
        0.66,
        1.81,
        -0.3
      ],
      "s": [
        0.18,
        0.18,
        0.38
      ],
      "c": 5015448,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "wall-fastener-1",
      "p": [
        0.6,
        1.52,
        -0.38
      ],
      "s": [
        0.15,
        0.08,
        0.15
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "cleaner-pocket-0",
      "p": [
        -0.62,
        0.88,
        0.22
      ],
      "s": [
        0.19,
        0.47,
        0.23
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "cleaner-handle-0",
      "from": [
        -0.62,
        1,
        0.22
      ],
      "to": [
        -0.62,
        1.63,
        0.22
      ],
      "r": 0.052,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "brush-head-0",
      "p": [
        -0.62,
        1.65,
        0.22
      ],
      "s": [
        0.15,
        0.16,
        0.14
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "cleaner-pocket-1",
      "p": [
        -0.31,
        0.88,
        0.22
      ],
      "s": [
        0.19,
        0.47,
        0.23
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "cleaner-handle-1",
      "from": [
        -0.31,
        1,
        0.22
      ],
      "to": [
        -0.31,
        1.63,
        0.22
      ],
      "r": 0.052,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "brush-head-1",
      "p": [
        -0.31,
        1.65,
        0.22
      ],
      "s": [
        0.15,
        0.16,
        0.14
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "cleaner-pocket-2",
      "p": [
        0,
        0.88,
        0.22
      ],
      "s": [
        0.19,
        0.47,
        0.23
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "cleaner-handle-2",
      "from": [
        0,
        1,
        0.22
      ],
      "to": [
        0,
        1.63,
        0.22
      ],
      "r": 0.052,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "brush-head-2",
      "p": [
        0,
        1.65,
        0.22
      ],
      "s": [
        0.15,
        0.16,
        0.14
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "cleaner-pocket-3",
      "p": [
        0.31,
        0.88,
        0.22
      ],
      "s": [
        0.19,
        0.47,
        0.23
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "cleaner-handle-3",
      "from": [
        0.31,
        1,
        0.22
      ],
      "to": [
        0.31,
        1.63,
        0.22
      ],
      "r": 0.052,
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "brush-head-3",
      "p": [
        0.31,
        1.65,
        0.22
      ],
      "s": [
        0.15,
        0.16,
        0.14
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "cleaner-pocket-4",
      "p": [
        0.62,
        0.88,
        0.22
      ],
      "s": [
        0.19,
        0.47,
        0.23
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "cleaner-handle-4",
      "from": [
        0.62,
        1,
        0.22
      ],
      "to": [
        0.62,
        1.63,
        0.22
      ],
      "r": 0.052,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "brush-head-4",
      "p": [
        0.62,
        1.65,
        0.22
      ],
      "s": [
        0.15,
        0.16,
        0.14
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "drain-platform",
      "p": [
        0,
        0.4,
        0.34
      ],
      "s": [
        1.56,
        0.12,
        1.06
      ],
      "c": 5015448,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-0",
      "p": [
        -0.72,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-1",
      "p": [
        -0.6,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-2",
      "p": [
        -0.48,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-3",
      "p": [
        -0.36,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-4",
      "p": [
        -0.24,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-5",
      "p": [
        -0.12,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-6",
      "p": [
        0,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-7",
      "p": [
        0.12,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-8",
      "p": [
        0.24,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-9",
      "p": [
        0.36,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-10",
      "p": [
        0.48,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-11",
      "p": [
        0.6,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5015448,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "drain-slot-12",
      "p": [
        0.72,
        0.47,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 8766903,
      "finish": "anodized"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
