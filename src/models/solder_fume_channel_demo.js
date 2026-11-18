import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Solder Fume Channel Demo; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "tools.solder-fume-channel-demo.001",
  "slug": "solder-fume-channel-demo",
  "title": "Solder Fume Channel Demo",
  "title_zh": "焊接排烟流道结构展示",
  "summary": "Illustrative fume extraction geometry with hood, ducts and filter",
  "category": "tools",
  "tags": [
    "solder",
    "fume",
    "channel",
    "demo",
    "tools",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.3,
    0.24,
    0.22
  ],
  "generator": "createSolderFumeChannelDemo",
  "source_path": "src/models/solder_fume_channel_demo.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/solder-fume-channel-demo.webp",
  "accent": "#587b8d",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createSolderFumeChannelDemo() { return buildRecipe({
  "title": "Solder Fume Channel Demo",
  "dimensions": [
    0.3,
    0.24,
    0.22
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "vent-foot",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.82,
        0.18,
        1.42
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "collection-hood",
      "p": [
        0,
        1.35,
        0.44
      ],
      "s": [
        1.24,
        0.54,
        0.32
      ],
      "c": 14199396,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "capture-lip",
      "p": [
        0,
        1.17,
        0.65
      ],
      "s": [
        1.4,
        0.14,
        0.19
      ],
      "c": 5798797,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "exhaust-duct--1",
      "from": [
        -0.43,
        1.44,
        0.23
      ],
      "to": [
        -0.51,
        0.8,
        -0.3
      ],
      "r": 0.086,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "curved-duct-cover--1",
      "p": [
        -0.51,
        1.05,
        -0.25
      ],
      "s": [
        0.16,
        0.54,
        0.47
      ],
      "c": 5798797,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "exhaust-duct-1",
      "from": [
        0.43,
        1.44,
        0.23
      ],
      "to": [
        0.51,
        0.8,
        -0.3
      ],
      "r": 0.086,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "curved-duct-cover-1",
      "p": [
        0.51,
        1.05,
        -0.25
      ],
      "s": [
        0.16,
        0.54,
        0.47
      ],
      "c": 5798797,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "pleated-filter-case",
      "p": [
        0,
        0.66,
        -0.3
      ],
      "s": [
        1.17,
        0.55,
        0.24
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-0",
      "p": [
        -0.54,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-1",
      "p": [
        -0.473,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-2",
      "p": [
        -0.406,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-3",
      "p": [
        -0.339,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-4",
      "p": [
        -0.272,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-5",
      "p": [
        -0.205,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-6",
      "p": [
        -0.138,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-7",
      "p": [
        -0.071,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-8",
      "p": [
        -0.004,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-9",
      "p": [
        0.063,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-10",
      "p": [
        0.13,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-11",
      "p": [
        0.197,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-12",
      "p": [
        0.264,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-13",
      "p": [
        0.331,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-14",
      "p": [
        0.398,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-15",
      "p": [
        0.465,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "filter-pleat-16",
      "p": [
        0.532,
        0.72,
        -0.16
      ],
      "s": [
        0.035,
        0.38,
        0.056
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-0",
      "from": [
        -0.61,
        1.12,
        0.65
      ],
      "to": [
        -0.427,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-1",
      "from": [
        -0.474,
        1.12,
        0.65
      ],
      "to": [
        -0.3318,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-2",
      "from": [
        -0.338,
        1.12,
        0.65
      ],
      "to": [
        -0.2366,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-3",
      "from": [
        -0.202,
        1.12,
        0.65
      ],
      "to": [
        -0.1414,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-4",
      "from": [
        -0.066,
        1.12,
        0.65
      ],
      "to": [
        -0.0462,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-5",
      "from": [
        0.07,
        1.12,
        0.65
      ],
      "to": [
        0.049,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-6",
      "from": [
        0.206,
        1.12,
        0.65
      ],
      "to": [
        0.1442,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-7",
      "from": [
        0.342,
        1.12,
        0.65
      ],
      "to": [
        0.2394,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-8",
      "from": [
        0.478,
        1.12,
        0.65
      ],
      "to": [
        0.3346,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "visible-flowline-9",
      "from": [
        0.614,
        1.12,
        0.65
      ],
      "to": [
        0.4298,
        0.76,
        -0.25
      ],
      "r": 0.018,
      "c": 4233141,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "inspection-panel",
      "p": [
        0,
        0.46,
        -0.61
      ],
      "s": [
        0.91,
        0.31,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-0",
      "p": [
        -0.72,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14199396,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-1",
      "p": [
        -0.5891,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5798797,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-2",
      "p": [
        -0.4582,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14199396,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-3",
      "p": [
        -0.3273,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5798797,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-4",
      "p": [
        -0.1964,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14199396,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-5",
      "p": [
        -0.0655,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5798797,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-6",
      "p": [
        0.0655,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14199396,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-7",
      "p": [
        0.1964,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5798797,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-8",
      "p": [
        0.3273,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14199396,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-9",
      "p": [
        0.4582,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5798797,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-10",
      "p": [
        0.5891,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 14199396,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "air-inlet-11",
      "p": [
        0.72,
        0.28,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 5798797,
      "finish": "anodized"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
