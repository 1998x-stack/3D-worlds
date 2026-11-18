import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Arrow Fletching Alignment Jig; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "sports.arrow-fletching-alignment-jig.001",
  "slug": "arrow-fletching-alignment-jig",
  "title": "Arrow Fletching Alignment Jig",
  "title_zh": "箭羽定位装配治具",
  "summary": "Shaft alignment jig with fin clamps and index scale",
  "category": "sports",
  "tags": [
    "arrow",
    "fletching",
    "alignment",
    "jig",
    "sports",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.35,
    0.17,
    0.15
  ],
  "generator": "createArrowFletchingAlignmentJig",
  "source_path": "src/models/arrow_fletching_alignment_jig.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/arrow-fletching-alignment-jig.webp",
  "accent": "#e4bf7d",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createArrowFletchingAlignmentJig() { return buildRecipe({
  "title": "Arrow Fletching Alignment Jig",
  "dimensions": [
    0.35,
    0.17,
    0.15
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "arrow-workbed",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.95,
        0.18,
        1.06
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "arrow-reference",
      "from": [
        -0.9,
        0.58,
        0
      ],
      "to": [
        0.9,
        0.58,
        0
      ],
      "r": 0.041,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "vee-bench--1",
      "p": [
        -0.57,
        0.35,
        0
      ],
      "s": [
        0.24,
        0.23,
        0.24
      ],
      "c": 14991229,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "shaft-v-rest--1",
      "p": [
        -0.57,
        0.48,
        0.12
      ],
      "s": [
        0.25,
        0.12,
        0.34
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "angle-clamp--1",
      "from": [
        -0.57,
        0.55,
        -0.27
      ],
      "to": [
        -0.57,
        0.93,
        0.16
      ],
      "r": 0.036,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "fletch-wing--1",
      "p": [
        -0.57,
        0.77,
        0.33
      ],
      "s": [
        0.12,
        0.21,
        0.34
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "cylinder",
      "n": "vee-bench-0",
      "p": [
        0,
        0.35,
        0
      ],
      "s": [
        0.24,
        0.23,
        0.24
      ],
      "c": 14991229,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "shaft-v-rest-0",
      "p": [
        0,
        0.48,
        0.12
      ],
      "s": [
        0.25,
        0.12,
        0.34
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "angle-clamp-0",
      "from": [
        0,
        0.55,
        -0.27
      ],
      "to": [
        0,
        0.93,
        0.16
      ],
      "r": 0.036,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "fletch-wing-0",
      "p": [
        0,
        0.77,
        0.33
      ],
      "s": [
        0.12,
        0.21,
        0.34
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "cylinder",
      "n": "vee-bench-1",
      "p": [
        0.57,
        0.35,
        0
      ],
      "s": [
        0.24,
        0.23,
        0.24
      ],
      "c": 14991229,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "shaft-v-rest-1",
      "p": [
        0.57,
        0.48,
        0.12
      ],
      "s": [
        0.25,
        0.12,
        0.34
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "angle-clamp-1",
      "from": [
        0.57,
        0.55,
        -0.27
      ],
      "to": [
        0.57,
        0.93,
        0.16
      ],
      "r": 0.036,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "fletch-wing-1",
      "p": [
        0.57,
        0.77,
        0.33
      ],
      "s": [
        0.12,
        0.21,
        0.34
      ],
      "c": 15910009,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-0",
      "p": [
        -0.82,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 13657955,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-1",
      "p": [
        -0.717,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-2",
      "p": [
        -0.614,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-3",
      "p": [
        -0.511,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-4",
      "p": [
        -0.408,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-5",
      "p": [
        -0.305,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 13657955,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-6",
      "p": [
        -0.202,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-7",
      "p": [
        -0.099,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-8",
      "p": [
        0.004,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-9",
      "p": [
        0.107,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-10",
      "p": [
        0.21,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 13657955,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-11",
      "p": [
        0.313,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-12",
      "p": [
        0.416,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-13",
      "p": [
        0.519,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-14",
      "p": [
        0.622,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-15",
      "p": [
        0.725,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 13657955,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "arrow-phase-mark-16",
      "p": [
        0.828,
        0.63,
        0.03
      ],
      "s": [
        0.014,
        0.025,
        0.13
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "fletch-length-scale-0",
      "p": [
        -0.75,
        0.29,
        0.52
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
      "n": "fletch-length-scale-1",
      "p": [
        -0.6136,
        0.29,
        0.52
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
      "n": "fletch-length-scale-2",
      "p": [
        -0.4773,
        0.29,
        0.52
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
      "n": "fletch-length-scale-3",
      "p": [
        -0.3409,
        0.29,
        0.52
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
      "n": "fletch-length-scale-4",
      "p": [
        -0.2045,
        0.29,
        0.52
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
      "n": "fletch-length-scale-5",
      "p": [
        -0.0682,
        0.29,
        0.52
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
      "n": "fletch-length-scale-6",
      "p": [
        0.0682,
        0.29,
        0.52
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
      "n": "fletch-length-scale-7",
      "p": [
        0.2045,
        0.29,
        0.52
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
      "n": "fletch-length-scale-8",
      "p": [
        0.3409,
        0.29,
        0.52
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
      "n": "fletch-length-scale-9",
      "p": [
        0.4773,
        0.29,
        0.52
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
      "n": "fletch-length-scale-10",
      "p": [
        0.6136,
        0.29,
        0.52
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
      "n": "fletch-length-scale-11",
      "p": [
        0.75,
        0.29,
        0.52
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
      "n": "nock-support",
      "p": [
        0.84,
        0.48,
        -0.24
      ],
      "s": [
        0.24,
        0.24,
        0.15
      ],
      "c": 7708835,
      "finish": "matte"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
