import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Alpine Snowmelt Watershed Slice; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "nature.alpine-snowmelt-watershed-slice.001",
  "slug": "alpine-snowmelt-watershed-slice",
  "title": "Alpine Snowmelt Watershed Slice",
  "title_zh": "高山融雪分水岭剖面",
  "summary": "Mountain hydrology slice: peaks, snow and runoff readings",
  "category": "nature",
  "tags": [
    "alpine",
    "snowmelt",
    "watershed",
    "slice",
    "nature",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.39,
    0.27,
    0.28
  ],
  "generator": "createAlpineSnowmeltWatershedSlice",
  "source_path": "src/models/alpine_snowmelt_watershed_slice.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/alpine-snowmelt-watershed-slice.webp",
  "accent": "#9d9172",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createAlpineSnowmeltWatershedSlice() { return buildRecipe({
  "title": "Alpine Snowmelt Watershed Slice",
  "dimensions": [
    0.39,
    0.27,
    0.28
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "geology-base",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.96,
        0.17,
        1.48
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-0",
      "p": [
        -0.88,
        0.4382,
        -0.32
      ],
      "s": [
        0.175,
        0.4564,
        0.8
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-0",
      "p": [
        -0.88,
        0.6764,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-1",
      "p": [
        -0.704,
        0.5456,
        -0.32
      ],
      "s": [
        0.175,
        0.6711,
        0.8
      ],
      "c": 8037514,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-1",
      "p": [
        -0.704,
        0.8911,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-2",
      "p": [
        -0.528,
        0.6529,
        -0.32
      ],
      "s": [
        0.175,
        0.8858,
        0.8
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-2",
      "p": [
        -0.528,
        1.1058,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-3",
      "p": [
        -0.352,
        0.7603,
        -0.32
      ],
      "s": [
        0.175,
        1.1006,
        0.8
      ],
      "c": 8037514,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-3",
      "p": [
        -0.352,
        1.3206,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-4",
      "p": [
        -0.176,
        0.8676,
        -0.32
      ],
      "s": [
        0.175,
        1.3153,
        0.8
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-4",
      "p": [
        -0.176,
        1.5353,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-5",
      "p": [
        0,
        0.975,
        -0.32
      ],
      "s": [
        0.175,
        1.53,
        0.8
      ],
      "c": 8037514,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-5",
      "p": [
        0,
        1.75,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-6",
      "p": [
        0.176,
        0.8676,
        -0.32
      ],
      "s": [
        0.175,
        1.3153,
        0.8
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-6",
      "p": [
        0.176,
        1.5353,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-7",
      "p": [
        0.352,
        0.7603,
        -0.32
      ],
      "s": [
        0.175,
        1.1006,
        0.8
      ],
      "c": 8037514,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-7",
      "p": [
        0.352,
        1.3206,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-8",
      "p": [
        0.528,
        0.6529,
        -0.32
      ],
      "s": [
        0.175,
        0.8858,
        0.8
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-8",
      "p": [
        0.528,
        1.1058,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-9",
      "p": [
        0.704,
        0.5456,
        -0.32
      ],
      "s": [
        0.175,
        0.6711,
        0.8
      ],
      "c": 8037514,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-9",
      "p": [
        0.704,
        0.8911,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rock-layer-10",
      "p": [
        0.88,
        0.4382,
        -0.32
      ],
      "s": [
        0.175,
        0.4564,
        0.8
      ],
      "c": 7560529,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "snowcap-10",
      "p": [
        0.88,
        0.6764,
        -0.32
      ],
      "s": [
        0.17,
        0.1,
        0.75
      ],
      "c": 15789541,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "runoff-line-0",
      "from": [
        -0.8,
        1.68,
        -0.14
      ],
      "to": [
        -0.77,
        1.51,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-1",
      "from": [
        -0.68,
        1.585,
        -0.14
      ],
      "to": [
        -0.65,
        1.415,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-2",
      "from": [
        -0.56,
        1.49,
        -0.14
      ],
      "to": [
        -0.53,
        1.32,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-3",
      "from": [
        -0.44,
        1.395,
        -0.14
      ],
      "to": [
        -0.41,
        1.225,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-4",
      "from": [
        -0.32,
        1.3,
        -0.14
      ],
      "to": [
        -0.29,
        1.13,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-5",
      "from": [
        -0.2,
        1.205,
        -0.14
      ],
      "to": [
        -0.17,
        1.035,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-6",
      "from": [
        -0.08,
        1.11,
        -0.14
      ],
      "to": [
        -0.05,
        0.94,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-7",
      "from": [
        0.04,
        1.015,
        -0.14
      ],
      "to": [
        0.07,
        0.845,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-8",
      "from": [
        0.16,
        0.92,
        -0.14
      ],
      "to": [
        0.19,
        0.75,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-9",
      "from": [
        0.28,
        0.825,
        -0.14
      ],
      "to": [
        0.31,
        0.655,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-10",
      "from": [
        0.4,
        0.73,
        -0.14
      ],
      "to": [
        0.43,
        0.56,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-11",
      "from": [
        0.52,
        0.635,
        -0.14
      ],
      "to": [
        0.55,
        0.465,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-12",
      "from": [
        0.64,
        0.54,
        -0.14
      ],
      "to": [
        0.67,
        0.37,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "runoff-line-13",
      "from": [
        0.76,
        0.445,
        -0.14
      ],
      "to": [
        0.79,
        0.275,
        0.3
      ],
      "r": 0.03,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-0",
      "p": [
        -0.74,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-1",
      "p": [
        -0.53,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 10326386,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-2",
      "p": [
        -0.32,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-3",
      "p": [
        -0.11,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 10326386,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-4",
      "p": [
        0.1,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-5",
      "p": [
        0.31,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 10326386,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-6",
      "p": [
        0.52,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "alluvial-sediment-7",
      "p": [
        0.73,
        0.27,
        0.45
      ],
      "s": [
        0.15,
        0.11,
        0.64
      ],
      "c": 10326386,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "water-level-marker-0",
      "from": [
        -0.71,
        0.3,
        0.63
      ],
      "to": [
        -0.71,
        0.82,
        0.63
      ],
      "r": 0.026,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "water-level-marker-1",
      "from": [
        -0.45,
        0.3,
        0.63
      ],
      "to": [
        -0.45,
        0.82,
        0.63
      ],
      "r": 0.026,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "water-level-marker-2",
      "from": [
        -0.19,
        0.3,
        0.63
      ],
      "to": [
        -0.19,
        0.82,
        0.63
      ],
      "r": 0.026,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "water-level-marker-3",
      "from": [
        0.07,
        0.3,
        0.63
      ],
      "to": [
        0.07,
        0.82,
        0.63
      ],
      "r": 0.026,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "water-level-marker-4",
      "from": [
        0.33,
        0.3,
        0.63
      ],
      "to": [
        0.33,
        0.82,
        0.63
      ],
      "r": 0.026,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "water-level-marker-5",
      "from": [
        0.59,
        0.3,
        0.63
      ],
      "to": [
        0.59,
        0.82,
        0.63
      ],
      "r": 0.026,
      "c": 12504530,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
