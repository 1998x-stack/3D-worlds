import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Collet Size Inspection Carousel; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "tools.collet-size-inspection-carousel.001",
  "slug": "collet-size-inspection-carousel",
  "title": "Collet Size Inspection Carousel",
  "title_zh": "夹头规格检验转盘",
  "summary": "Circular machine collet library and graded bore identifiers",
  "category": "tools",
  "tags": [
    "collet",
    "size",
    "inspection",
    "carousel",
    "tools",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.26,
    0.19,
    0.24
  ],
  "generator": "createColletSizeInspectionCarousel",
  "source_path": "src/models/collet_size_inspection_carousel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/collet-size-inspection-carousel.webp",
  "accent": "#587b8d",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createColletSizeInspectionCarousel() { return buildRecipe({
  "title": "Collet Size Inspection Carousel",
  "dimensions": [
    0.26,
    0.19,
    0.24
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "index-platter",
      "p": [
        0,
        0.22,
        0
      ],
      "s": [
        1.73,
        0.23,
        1.73
      ],
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "central-post",
      "p": [
        0,
        0.64,
        0
      ],
      "s": [
        0.32,
        0.83,
        0.32
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "collet-0",
      "p": [
        0.61,
        0.6,
        0
      ],
      "s": [
        0.12,
        0.44,
        0.12
      ],
      "c": 5798797,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-0",
      "p": [
        0.61,
        0.85,
        0
      ],
      "s": [
        0.0816,
        0.06,
        0.0816
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-0",
      "p": [
        0.85,
        0.31,
        0
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-1",
      "p": [
        0.5283,
        0.6,
        0.305
      ],
      "s": [
        0.146,
        0.44,
        0.146
      ],
      "c": 14199396,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-1",
      "p": [
        0.5283,
        0.85,
        0.305
      ],
      "s": [
        0.0993,
        0.06,
        0.0993
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-1",
      "p": [
        0.7361,
        0.31,
        0.425
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-2",
      "p": [
        0.305,
        0.6,
        0.5283
      ],
      "s": [
        0.172,
        0.44,
        0.172
      ],
      "c": 5798797,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-2",
      "p": [
        0.305,
        0.85,
        0.5283
      ],
      "s": [
        0.117,
        0.06,
        0.117
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-2",
      "p": [
        0.425,
        0.31,
        0.7361
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-3",
      "p": [
        0,
        0.6,
        0.61
      ],
      "s": [
        0.198,
        0.44,
        0.198
      ],
      "c": 14199396,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-3",
      "p": [
        0,
        0.85,
        0.61
      ],
      "s": [
        0.1346,
        0.06,
        0.1346
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-3",
      "p": [
        0,
        0.31,
        0.85
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-4",
      "p": [
        -0.305,
        0.6,
        0.5283
      ],
      "s": [
        0.12,
        0.44,
        0.12
      ],
      "c": 5798797,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-4",
      "p": [
        -0.305,
        0.85,
        0.5283
      ],
      "s": [
        0.0816,
        0.06,
        0.0816
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-4",
      "p": [
        -0.425,
        0.31,
        0.7361
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-5",
      "p": [
        -0.5283,
        0.6,
        0.305
      ],
      "s": [
        0.146,
        0.44,
        0.146
      ],
      "c": 14199396,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-5",
      "p": [
        -0.5283,
        0.85,
        0.305
      ],
      "s": [
        0.0993,
        0.06,
        0.0993
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-5",
      "p": [
        -0.7361,
        0.31,
        0.425
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-6",
      "p": [
        -0.61,
        0.6,
        0
      ],
      "s": [
        0.172,
        0.44,
        0.172
      ],
      "c": 5798797,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-6",
      "p": [
        -0.61,
        0.85,
        0
      ],
      "s": [
        0.117,
        0.06,
        0.117
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-6",
      "p": [
        -0.85,
        0.31,
        0
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-7",
      "p": [
        -0.5283,
        0.6,
        -0.305
      ],
      "s": [
        0.198,
        0.44,
        0.198
      ],
      "c": 14199396,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-7",
      "p": [
        -0.5283,
        0.85,
        -0.305
      ],
      "s": [
        0.1346,
        0.06,
        0.1346
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-7",
      "p": [
        -0.7361,
        0.31,
        -0.425
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-8",
      "p": [
        -0.305,
        0.6,
        -0.5283
      ],
      "s": [
        0.12,
        0.44,
        0.12
      ],
      "c": 5798797,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-8",
      "p": [
        -0.305,
        0.85,
        -0.5283
      ],
      "s": [
        0.0816,
        0.06,
        0.0816
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-8",
      "p": [
        -0.425,
        0.31,
        -0.7361
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-9",
      "p": [
        0,
        0.6,
        -0.61
      ],
      "s": [
        0.146,
        0.44,
        0.146
      ],
      "c": 14199396,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-9",
      "p": [
        0,
        0.85,
        -0.61
      ],
      "s": [
        0.0993,
        0.06,
        0.0993
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-9",
      "p": [
        0,
        0.31,
        -0.85
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-10",
      "p": [
        0.305,
        0.6,
        -0.5283
      ],
      "s": [
        0.172,
        0.44,
        0.172
      ],
      "c": 5798797,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-10",
      "p": [
        0.305,
        0.85,
        -0.5283
      ],
      "s": [
        0.117,
        0.06,
        0.117
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-10",
      "p": [
        0.425,
        0.31,
        -0.7361
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "collet-11",
      "p": [
        0.5283,
        0.6,
        -0.305
      ],
      "s": [
        0.198,
        0.44,
        0.198
      ],
      "c": 14199396,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "open-mouth-rim-11",
      "p": [
        0.5283,
        0.85,
        -0.305
      ],
      "s": [
        0.1346,
        0.06,
        0.1346
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "radial-index-11",
      "p": [
        0.7361,
        0.31,
        -0.425
      ],
      "s": [
        0.1,
        0.07,
        0.12
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-0",
      "p": [
        0.94,
        0.22,
        0
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-1",
      "p": [
        0.8684,
        0.22,
        0.3597
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-2",
      "p": [
        0.6647,
        0.22,
        0.6647
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-3",
      "p": [
        0.3597,
        0.22,
        0.8684
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-4",
      "p": [
        0,
        0.22,
        0.94
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-5",
      "p": [
        -0.3597,
        0.22,
        0.8684
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-6",
      "p": [
        -0.6647,
        0.22,
        0.6647
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-7",
      "p": [
        -0.8684,
        0.22,
        0.3597
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-8",
      "p": [
        -0.94,
        0.22,
        0
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-9",
      "p": [
        -0.8684,
        0.22,
        -0.3597
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-10",
      "p": [
        -0.6647,
        0.22,
        -0.6647
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-11",
      "p": [
        -0.3597,
        0.22,
        -0.8684
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-12",
      "p": [
        0,
        0.22,
        -0.94
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-13",
      "p": [
        0.3597,
        0.22,
        -0.8684
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-14",
      "p": [
        0.6647,
        0.22,
        -0.6647
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "outer-index-dot-15",
      "p": [
        0.8684,
        0.22,
        -0.3597
      ],
      "s": [
        0.058,
        0.06,
        0.08
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "torus",
      "n": "spindle-ring",
      "p": [
        0,
        1.05,
        0
      ],
      "s": [
        0.36,
        0.36,
        0.09
      ],
      "c": 12504530,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    }
  ],
  "geometry_revision": "1.6.0"
}); }
