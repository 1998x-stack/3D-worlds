import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Label-Forward Pantry Bin Rail; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "kitchen.label-forward-pantry-bin-rail.001",
  "slug": "label-forward-pantry-bin-rail",
  "title": "Label-Forward Pantry Bin Rail",
  "title_zh": "前置标签食品收纳轨道",
  "summary": "Modular pantry compartments with protruding label faces",
  "category": "kitchen",
  "tags": [
    "label",
    "forward",
    "pantry",
    "bin",
    "rail",
    "kitchen",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.32,
    0.16,
    0.24
  ],
  "generator": "createLabelForwardPantryBinRail",
  "source_path": "src/models/label_forward_pantry_bin_rail.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/label-forward-pantry-bin-rail.webp",
  "accent": "#64a08f",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createLabelForwardPantryBinRail() { return buildRecipe({
  "title": "Label-Forward Pantry Bin Rail",
  "dimensions": [
    0.32,
    0.16,
    0.24
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "pantry-track",
      "p": [
        0,
        0.14,
        0
      ],
      "s": [
        1.95,
        0.17,
        1.36
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "bin-floor-0",
      "p": [
        -0.75,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.13,
        1.04
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "left-wall-0",
      "p": [
        -0.89,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "right-wall-0",
      "p": [
        -0.61,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-label-0",
      "p": [
        -0.75,
        0.51,
        0.58
      ],
      "s": [
        0.28,
        0.26,
        0.12
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "label-text-plate-0",
      "p": [
        -0.75,
        0.58,
        0.66
      ],
      "s": [
        0.22,
        0.1,
        0.025
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scoop-bay-0",
      "p": [
        -0.75,
        0.77,
        -0.26
      ],
      "s": [
        0.22,
        0.08,
        0.38
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bin-floor-1",
      "p": [
        -0.38,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.13,
        1.04
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "left-wall-1",
      "p": [
        -0.52,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "right-wall-1",
      "p": [
        -0.24,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-label-1",
      "p": [
        -0.38,
        0.51,
        0.58
      ],
      "s": [
        0.28,
        0.26,
        0.12
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "label-text-plate-1",
      "p": [
        -0.38,
        0.58,
        0.66
      ],
      "s": [
        0.22,
        0.1,
        0.025
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scoop-bay-1",
      "p": [
        -0.38,
        0.77,
        -0.26
      ],
      "s": [
        0.22,
        0.08,
        0.38
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bin-floor-2",
      "p": [
        -0.01,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.13,
        1.04
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "left-wall-2",
      "p": [
        -0.15,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "right-wall-2",
      "p": [
        0.13,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-label-2",
      "p": [
        -0.01,
        0.51,
        0.58
      ],
      "s": [
        0.28,
        0.26,
        0.12
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "label-text-plate-2",
      "p": [
        -0.01,
        0.58,
        0.66
      ],
      "s": [
        0.22,
        0.1,
        0.025
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scoop-bay-2",
      "p": [
        -0.01,
        0.77,
        -0.26
      ],
      "s": [
        0.22,
        0.08,
        0.38
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bin-floor-3",
      "p": [
        0.36,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.13,
        1.04
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "left-wall-3",
      "p": [
        0.22,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "right-wall-3",
      "p": [
        0.5,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-label-3",
      "p": [
        0.36,
        0.51,
        0.58
      ],
      "s": [
        0.28,
        0.26,
        0.12
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "label-text-plate-3",
      "p": [
        0.36,
        0.58,
        0.66
      ],
      "s": [
        0.22,
        0.1,
        0.025
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scoop-bay-3",
      "p": [
        0.36,
        0.77,
        -0.26
      ],
      "s": [
        0.22,
        0.08,
        0.38
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "bin-floor-4",
      "p": [
        0.73,
        0.38,
        0
      ],
      "s": [
        0.32,
        0.13,
        1.04
      ],
      "c": 13349258,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "left-wall-4",
      "p": [
        0.59,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "right-wall-4",
      "p": [
        0.87,
        0.57,
        0
      ],
      "s": [
        0.055,
        0.3,
        1.02
      ],
      "c": 6594703,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-label-4",
      "p": [
        0.73,
        0.51,
        0.58
      ],
      "s": [
        0.28,
        0.26,
        0.12
      ],
      "c": 15910009,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "label-text-plate-4",
      "p": [
        0.73,
        0.58,
        0.66
      ],
      "s": [
        0.22,
        0.1,
        0.025
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "scoop-bay-4",
      "p": [
        0.73,
        0.77,
        -0.26
      ],
      "s": [
        0.22,
        0.08,
        0.38
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-0",
      "p": [
        -0.78,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-1",
      "p": [
        -0.61,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-2",
      "p": [
        -0.44,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-3",
      "p": [
        -0.27,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-4",
      "p": [
        -0.1,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-5",
      "p": [
        0.07,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-6",
      "p": [
        0.24,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-7",
      "p": [
        0.41,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-8",
      "p": [
        0.58,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rear-rack-slot-9",
      "p": [
        0.75,
        0.27,
        -0.54
      ],
      "s": [
        0.05,
        0.08,
        0.09
      ],
      "c": 2372666,
      "finish": "rubber"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
