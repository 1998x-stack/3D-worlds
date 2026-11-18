import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Articulated Sketchbook Lectern; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "furniture.articulated-sketchbook-lectern.001",
  "slug": "articulated-sketchbook-lectern",
  "title": "Articulated Sketchbook Lectern",
  "title_zh": "可调式素描本阅读架",
  "summary": "Tilting drawing lectern, split hinges, page clips and angle ticks",
  "category": "furniture",
  "tags": [
    "articulated",
    "sketchbook",
    "lectern",
    "furniture",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.34,
    0.25,
    0.27
  ],
  "generator": "createArticulatedSketchbookLectern",
  "source_path": "src/models/articulated_sketchbook_lectern.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/articulated-sketchbook-lectern.webp",
  "accent": "#576e82",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createArticulatedSketchbookLectern() { return buildRecipe({
  "title": "Articulated Sketchbook Lectern",
  "dimensions": [
    0.34,
    0.25,
    0.27
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "inclined-board",
      "p": [
        0,
        1.17,
        -0.2
      ],
      "s": [
        1.68,
        0.13,
        1.35
      ],
      "c": 2503997,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "folio-lip",
      "p": [
        0,
        0.54,
        0.47
      ],
      "s": [
        1.57,
        0.13,
        0.17
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "support-leg--1",
      "from": [
        -0.65,
        0.1,
        0.57
      ],
      "to": [
        -0.63,
        1.25,
        -0.5
      ],
      "r": 0.06,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "angle-brace--1",
      "from": [
        -0.7,
        0.22,
        -0.48
      ],
      "to": [
        -0.63,
        1.2,
        -0.46
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge--1",
      "p": [
        -0.64,
        1.22,
        -0.48
      ],
      "s": [
        0.23,
        0.15,
        0.23
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "page-clip--1",
      "p": [
        -0.6,
        1.72,
        0.16
      ],
      "s": [
        0.22,
        0.13,
        0.26
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "support-leg-1",
      "from": [
        0.65,
        0.1,
        0.57
      ],
      "to": [
        0.63,
        1.25,
        -0.5
      ],
      "r": 0.06,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "angle-brace-1",
      "from": [
        0.7,
        0.22,
        -0.48
      ],
      "to": [
        0.63,
        1.2,
        -0.46
      ],
      "r": 0.044,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-1",
      "p": [
        0.64,
        1.22,
        -0.48
      ],
      "s": [
        0.23,
        0.15,
        0.23
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "page-clip-1",
      "p": [
        0.6,
        1.72,
        0.16
      ],
      "s": [
        0.22,
        0.13,
        0.26
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-0",
      "p": [
        -0.8,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-1",
      "p": [
        -0.655,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-2",
      "p": [
        -0.51,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-3",
      "p": [
        -0.365,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-4",
      "p": [
        -0.22,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-5",
      "p": [
        -0.075,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-6",
      "p": [
        0.07,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-7",
      "p": [
        0.215,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-8",
      "p": [
        0.36,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-9",
      "p": [
        0.505,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-10",
      "p": [
        0.65,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "backplane-vent-11",
      "p": [
        0.795,
        1.23,
        -0.27
      ],
      "s": [
        0.042,
        0.02,
        0.48
      ],
      "c": 12951668,
      "finish": "wood"
    },
    {
      "t": "rounded-box",
      "n": "tilt-index-0",
      "p": [
        -0.75,
        0.4,
        0.69
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
      "n": "tilt-index-1",
      "p": [
        -0.6,
        0.4,
        0.69
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
      "n": "tilt-index-2",
      "p": [
        -0.45,
        0.4,
        0.69
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
      "n": "tilt-index-3",
      "p": [
        -0.3,
        0.4,
        0.69
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
      "n": "tilt-index-4",
      "p": [
        -0.15,
        0.4,
        0.69
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
      "n": "tilt-index-5",
      "p": [
        0,
        0.4,
        0.69
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
      "n": "tilt-index-6",
      "p": [
        0.15,
        0.4,
        0.69
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
      "n": "tilt-index-7",
      "p": [
        0.3,
        0.4,
        0.69
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
      "n": "tilt-index-8",
      "p": [
        0.45,
        0.4,
        0.69
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
      "n": "tilt-index-9",
      "p": [
        0.6,
        0.4,
        0.69
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
      "n": "tilt-index-10",
      "p": [
        0.75,
        0.4,
        0.69
      ],
      "s": [
        0.024,
        0.1,
        0.024
      ],
      "c": 15910009,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
