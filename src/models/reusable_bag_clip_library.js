import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Reusable Bag Clip Library; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "kitchen.reusable-bag-clip-library.001",
  "slug": "reusable-bag-clip-library",
  "title": "Reusable Bag Clip Library",
  "title_zh": "可重复使用封袋夹收纳架",
  "summary": "Library of graduated snap clips with visible jaws and hinge stops",
  "category": "kitchen",
  "tags": [
    "reusable",
    "bag",
    "clip",
    "library",
    "kitchen",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.28,
    0.16,
    0.18
  ],
  "generator": "createReusableBagClipLibrary",
  "source_path": "src/models/reusable_bag_clip_library.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/reusable-bag-clip-library.webp",
  "accent": "#64a08f",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createReusableBagClipLibrary() { return buildRecipe({
  "title": "Reusable Bag Clip Library",
  "dimensions": [
    0.28,
    0.16,
    0.18
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "clip-library-bed",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.92,
        0.19,
        1.33
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "label-back",
      "p": [
        0,
        0.55,
        -0.38
      ],
      "s": [
        1.84,
        0.8,
        0.18
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-0",
      "p": [
        -0.76,
        0.66,
        0.22
      ],
      "s": [
        0.12,
        0.08,
        0.77
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-0",
      "p": [
        -0.76,
        0.47,
        0.22
      ],
      "s": [
        0.12,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-0",
      "p": [
        -0.76,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-0",
      "p": [
        -0.76,
        0.74,
        0.48
      ],
      "s": [
        0.096,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-0",
      "p": [
        -0.76,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-1",
      "p": [
        -0.57,
        0.66,
        0.22
      ],
      "s": [
        0.135,
        0.08,
        0.77
      ],
      "c": 6594703,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-1",
      "p": [
        -0.57,
        0.47,
        0.22
      ],
      "s": [
        0.135,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-1",
      "p": [
        -0.57,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-1",
      "p": [
        -0.57,
        0.74,
        0.48
      ],
      "s": [
        0.108,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-1",
      "p": [
        -0.57,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-2",
      "p": [
        -0.38,
        0.66,
        0.22
      ],
      "s": [
        0.15,
        0.08,
        0.77
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-2",
      "p": [
        -0.38,
        0.47,
        0.22
      ],
      "s": [
        0.15,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-2",
      "p": [
        -0.38,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-2",
      "p": [
        -0.38,
        0.74,
        0.48
      ],
      "s": [
        0.12,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-2",
      "p": [
        -0.38,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-3",
      "p": [
        -0.19,
        0.66,
        0.22
      ],
      "s": [
        0.165,
        0.08,
        0.77
      ],
      "c": 6594703,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-3",
      "p": [
        -0.19,
        0.47,
        0.22
      ],
      "s": [
        0.165,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-3",
      "p": [
        -0.19,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-3",
      "p": [
        -0.19,
        0.74,
        0.48
      ],
      "s": [
        0.132,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-3",
      "p": [
        -0.19,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-4",
      "p": [
        0,
        0.66,
        0.22
      ],
      "s": [
        0.18,
        0.08,
        0.77
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-4",
      "p": [
        0,
        0.47,
        0.22
      ],
      "s": [
        0.18,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-4",
      "p": [
        0,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-4",
      "p": [
        0,
        0.74,
        0.48
      ],
      "s": [
        0.144,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-4",
      "p": [
        0,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-5",
      "p": [
        0.19,
        0.66,
        0.22
      ],
      "s": [
        0.195,
        0.08,
        0.77
      ],
      "c": 6594703,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-5",
      "p": [
        0.19,
        0.47,
        0.22
      ],
      "s": [
        0.195,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-5",
      "p": [
        0.19,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-5",
      "p": [
        0.19,
        0.74,
        0.48
      ],
      "s": [
        0.156,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-5",
      "p": [
        0.19,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-6",
      "p": [
        0.38,
        0.66,
        0.22
      ],
      "s": [
        0.21,
        0.08,
        0.77
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-6",
      "p": [
        0.38,
        0.47,
        0.22
      ],
      "s": [
        0.21,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-6",
      "p": [
        0.38,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-6",
      "p": [
        0.38,
        0.74,
        0.48
      ],
      "s": [
        0.168,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-6",
      "p": [
        0.38,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-7",
      "p": [
        0.57,
        0.66,
        0.22
      ],
      "s": [
        0.225,
        0.08,
        0.77
      ],
      "c": 6594703,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-7",
      "p": [
        0.57,
        0.47,
        0.22
      ],
      "s": [
        0.225,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-7",
      "p": [
        0.57,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-7",
      "p": [
        0.57,
        0.74,
        0.48
      ],
      "s": [
        0.18,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-7",
      "p": [
        0.57,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "upper-jaw-8",
      "p": [
        0.76,
        0.66,
        0.22
      ],
      "s": [
        0.24,
        0.08,
        0.77
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "lower-jaw-8",
      "p": [
        0.76,
        0.47,
        0.22
      ],
      "s": [
        0.24,
        0.08,
        0.77
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "hinge-pin-8",
      "p": [
        0.76,
        0.56,
        -0.21
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "grip-tooth-8",
      "p": [
        0.76,
        0.74,
        0.48
      ],
      "s": [
        0.192,
        0.04,
        0.17
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "clip-size-tab-8",
      "p": [
        0.76,
        0.95,
        -0.31
      ],
      "s": [
        0.14,
        0.13,
        0.1
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-0",
      "p": [
        -0.75,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-1",
      "p": [
        -0.6136,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-2",
      "p": [
        -0.4773,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-3",
      "p": [
        -0.3409,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-4",
      "p": [
        -0.2045,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-5",
      "p": [
        -0.0682,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-6",
      "p": [
        0.0682,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-7",
      "p": [
        0.2045,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-8",
      "p": [
        0.3409,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-9",
      "p": [
        0.4773,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-10",
      "p": [
        0.6136,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "clip-length-scale-11",
      "p": [
        0.75,
        0.27,
        0.64
      ],
      "s": [
        0.024,
        0.055,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
