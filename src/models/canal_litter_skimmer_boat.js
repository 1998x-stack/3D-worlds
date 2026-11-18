import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Canal Litter Skimmer Boat; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "vehicles.canal-litter-skimmer-boat.001",
  "slug": "canal-litter-skimmer-boat",
  "title": "Canal Litter Skimmer Boat",
  "title_zh": "运河漂浮垃圾清理船",
  "summary": "Twin hull trash skimmer with front rake and service deck",
  "category": "vehicles",
  "tags": [
    "canal",
    "litter",
    "skimmer",
    "boat",
    "vehicles",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.43,
    0.24,
    0.26
  ],
  "generator": "createCanalLitterSkimmerBoat",
  "source_path": "src/models/canal_litter_skimmer_boat.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/canal-litter-skimmer-boat.webp",
  "accent": "#6587ad",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createCanalLitterSkimmerBoat() { return buildRecipe({
  "title": "Canal Litter Skimmer Boat",
  "dimensions": [
    0.43,
    0.24,
    0.26
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "float-hull--1",
      "p": [
        0,
        0.36,
        -0.61
      ],
      "s": [
        1.92,
        0.37,
        0.39
      ],
      "c": 12950109,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-bow--1",
      "p": [
        -0.87,
        0.43,
        -0.61
      ],
      "s": [
        0.31,
        0.23,
        0.4
      ],
      "c": 6653869,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-0",
      "p": [
        -0.75,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-1",
      "p": [
        -0.49,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-2",
      "p": [
        -0.23,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-3",
      "p": [
        0.03,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-4",
      "p": [
        0.29,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-5",
      "p": [
        0.55,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender--1-6",
      "p": [
        0.81,
        0.29,
        -0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "float-hull-1",
      "p": [
        0,
        0.36,
        0.61
      ],
      "s": [
        1.92,
        0.37,
        0.39
      ],
      "c": 12950109,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-bow-1",
      "p": [
        -0.87,
        0.43,
        0.61
      ],
      "s": [
        0.31,
        0.23,
        0.4
      ],
      "c": 6653869,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-0",
      "p": [
        -0.75,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-1",
      "p": [
        -0.49,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-2",
      "p": [
        -0.23,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-3",
      "p": [
        0.03,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-4",
      "p": [
        0.29,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-5",
      "p": [
        0.55,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "rubber-fender-1-6",
      "p": [
        0.81,
        0.29,
        0.81
      ],
      "s": [
        0.11,
        0.16,
        0.1
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "middle-workdeck",
      "p": [
        0.31,
        0.66,
        0
      ],
      "s": [
        1.16,
        0.14,
        0.95
      ],
      "c": 6653869,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "equipment-bay",
      "p": [
        0.54,
        1.02,
        0
      ],
      "s": [
        0.63,
        0.55,
        0.67
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "collecting-crossbar",
      "from": [
        -1.02,
        0.28,
        -0.66
      ],
      "to": [
        -1.02,
        0.28,
        0.66
      ],
      "r": 0.051,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-0",
      "from": [
        -1.03,
        0.3,
        -0.64
      ],
      "to": [
        -0.76,
        0.15,
        -0.64
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-1",
      "from": [
        -1.03,
        0.3,
        -0.543
      ],
      "to": [
        -0.76,
        0.15,
        -0.543
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-2",
      "from": [
        -1.03,
        0.3,
        -0.446
      ],
      "to": [
        -0.76,
        0.15,
        -0.446
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-3",
      "from": [
        -1.03,
        0.3,
        -0.349
      ],
      "to": [
        -0.76,
        0.15,
        -0.349
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-4",
      "from": [
        -1.03,
        0.3,
        -0.252
      ],
      "to": [
        -0.76,
        0.15,
        -0.252
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-5",
      "from": [
        -1.03,
        0.3,
        -0.155
      ],
      "to": [
        -0.76,
        0.15,
        -0.155
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-6",
      "from": [
        -1.03,
        0.3,
        -0.058
      ],
      "to": [
        -0.76,
        0.15,
        -0.058
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-7",
      "from": [
        -1.03,
        0.3,
        0.039
      ],
      "to": [
        -0.76,
        0.15,
        0.039
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-8",
      "from": [
        -1.03,
        0.3,
        0.136
      ],
      "to": [
        -0.76,
        0.15,
        0.136
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-9",
      "from": [
        -1.03,
        0.3,
        0.233
      ],
      "to": [
        -0.76,
        0.15,
        0.233
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-10",
      "from": [
        -1.03,
        0.3,
        0.33
      ],
      "to": [
        -0.76,
        0.15,
        0.33
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-11",
      "from": [
        -1.03,
        0.3,
        0.427
      ],
      "to": [
        -0.76,
        0.15,
        0.427
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-12",
      "from": [
        -1.03,
        0.3,
        0.524
      ],
      "to": [
        -0.76,
        0.15,
        0.524
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "capture-rake-tooth-13",
      "from": [
        -1.03,
        0.3,
        0.621
      ],
      "to": [
        -0.76,
        0.15,
        0.621
      ],
      "r": 0.024,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-0",
      "p": [
        -0.74,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 2372666,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-1",
      "p": [
        -0.61,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-2",
      "p": [
        -0.48,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 2372666,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-3",
      "p": [
        -0.35,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-4",
      "p": [
        -0.22,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 2372666,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-5",
      "p": [
        -0.09,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-6",
      "p": [
        0.04,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 2372666,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-7",
      "p": [
        0.17,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-8",
      "p": [
        0.3,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 2372666,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "belt-cleat-9",
      "p": [
        0.43,
        0.69,
        0
      ],
      "s": [
        0.07,
        0.07,
        0.69
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "control-key-0",
      "p": [
        0.37,
        1.33,
        0.35
      ],
      "s": [
        0.07,
        0.11,
        0.03
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "control-key-1",
      "p": [
        0.47,
        1.33,
        0.35
      ],
      "s": [
        0.07,
        0.11,
        0.03
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "control-key-2",
      "p": [
        0.57,
        1.33,
        0.35
      ],
      "s": [
        0.07,
        0.11,
        0.03
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "control-key-3",
      "p": [
        0.67,
        1.33,
        0.35
      ],
      "s": [
        0.07,
        0.11,
        0.03
      ],
      "c": 7141333,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "control-key-4",
      "p": [
        0.77,
        1.33,
        0.35
      ],
      "s": [
        0.07,
        0.11,
        0.03
      ],
      "c": 7141333,
      "finish": "glow"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
