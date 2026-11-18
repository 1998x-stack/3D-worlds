import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Compact Microscope Focus Stage; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "electronics.compact-microscope-focus-stage.001",
  "slug": "compact-microscope-focus-stage",
  "title": "Compact Microscope Focus Stage",
  "title_zh": "显微镜精密调焦平台",
  "summary": "Focus stage with vertical guide rails, twin knobs and glass slide",
  "category": "electronics",
  "tags": [
    "compact",
    "microscope",
    "focus",
    "stage",
    "electronics",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.25,
    0.28,
    0.22
  ],
  "generator": "createCompactMicroscopeFocusStage",
  "source_path": "src/models/compact_microscope_focus_stage.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/compact-microscope-focus-stage.webp",
  "accent": "#60c9bb",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createCompactMicroscopeFocusStage() { return buildRecipe({
  "title": "Compact Microscope Focus Stage",
  "dimensions": [
    0.25,
    0.28,
    0.22
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "microscope-table",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.67,
        0.16,
        1.35
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "focus-column--1",
      "from": [
        -0.66,
        0.22,
        -0.42
      ],
      "to": [
        -0.66,
        1.74,
        -0.42
      ],
      "r": 0.055,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "focus-wheel--1",
      "p": [
        -0.79,
        0.9,
        -0.22
      ],
      "s": [
        0.44,
        0.16,
        0.44
      ],
      "c": 6343099,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-0",
      "p": [
        -0.78,
        0.59,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-1",
      "p": [
        -0.78,
        0.659,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-2",
      "p": [
        -0.78,
        0.728,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-3",
      "p": [
        -0.78,
        0.797,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-4",
      "p": [
        -0.78,
        0.866,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-5",
      "p": [
        -0.78,
        0.935,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-6",
      "p": [
        -0.78,
        1.004,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-7",
      "p": [
        -0.78,
        1.073,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-8",
      "p": [
        -0.78,
        1.142,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step--1-9",
      "p": [
        -0.78,
        1.211,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "focus-column-1",
      "from": [
        0.66,
        0.22,
        -0.42
      ],
      "to": [
        0.66,
        1.74,
        -0.42
      ],
      "r": 0.055,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "focus-wheel-1",
      "p": [
        0.79,
        0.9,
        -0.22
      ],
      "s": [
        0.44,
        0.16,
        0.44
      ],
      "c": 6343099,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-0",
      "p": [
        0.78,
        0.59,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-1",
      "p": [
        0.78,
        0.659,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-2",
      "p": [
        0.78,
        0.728,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-3",
      "p": [
        0.78,
        0.797,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-4",
      "p": [
        0.78,
        0.866,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-5",
      "p": [
        0.78,
        0.935,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-6",
      "p": [
        0.78,
        1.004,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-7",
      "p": [
        0.78,
        1.073,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-8",
      "p": [
        0.78,
        1.142,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "knurled-step-1-9",
      "p": [
        0.78,
        1.211,
        -0.05
      ],
      "s": [
        0.05,
        0.033,
        0.031
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "glass-carrier",
      "p": [
        0,
        0.85,
        0.14
      ],
      "s": [
        1.25,
        0.11,
        0.86
      ],
      "c": 5599108,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "specimen-slide",
      "p": [
        0,
        0.94,
        0.14
      ],
      "s": [
        0.71,
        0.036,
        0.43
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "sample-clamp--1",
      "p": [
        -0.47,
        1.02,
        0.13
      ],
      "s": [
        0.14,
        0.14,
        0.6
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "return-spring--1",
      "from": [
        -0.54,
        1.16,
        -0.15
      ],
      "to": [
        -0.49,
        1.16,
        0.35
      ],
      "r": 0.025,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "sample-clamp-1",
      "p": [
        0.47,
        1.02,
        0.13
      ],
      "s": [
        0.14,
        0.14,
        0.6
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "return-spring-1",
      "from": [
        0.54,
        1.16,
        -0.15
      ],
      "to": [
        0.49,
        1.16,
        0.35
      ],
      "r": 0.025,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "objective-pole",
      "from": [
        0,
        0.95,
        -0.46
      ],
      "to": [
        0,
        1.67,
        -0.46
      ],
      "r": 0.066,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "objective-glass",
      "p": [
        0,
        1.69,
        -0.36
      ],
      "s": [
        0.34,
        0.19,
        0.34
      ],
      "c": 7847888,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "sample-ruler-0",
      "p": [
        -0.75,
        0.99,
        0.54
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
      "n": "sample-ruler-1",
      "p": [
        -0.5357,
        0.99,
        0.54
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
      "n": "sample-ruler-2",
      "p": [
        -0.3214,
        0.99,
        0.54
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
      "n": "sample-ruler-3",
      "p": [
        -0.1071,
        0.99,
        0.54
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
      "n": "sample-ruler-4",
      "p": [
        0.1071,
        0.99,
        0.54
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
      "n": "sample-ruler-5",
      "p": [
        0.3214,
        0.99,
        0.54
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
      "n": "sample-ruler-6",
      "p": [
        0.5357,
        0.99,
        0.54
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
      "n": "sample-ruler-7",
      "p": [
        0.75,
        0.99,
        0.54
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
