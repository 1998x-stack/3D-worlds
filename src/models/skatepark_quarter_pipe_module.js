import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Skatepark Quarter Pipe Module / 滑板公园弧形坡道模块. */
export const assetMeta = {
  "id": "sports.skatepark-quarter-pipe-module.001",
  "slug": "skatepark-quarter-pipe-module",
  "title": "Skatepark Quarter Pipe Module",
  "title_zh": "滑板公园弧形坡道模块",
  "summary": "Skateboard quarter-pipe ramp with curved deck ribs, coping and safety rails",
  "category": "sports",
  "tags": [
    "skatepark",
    "quarter",
    "pipe",
    "module",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.35,
    1.78,
    2.65
  ],
  "generator": "createSkateparkQuarterPipeModule",
  "source_path": "src/models/skatepark_quarter_pipe_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/skatepark-quarter-pipe-module.webp",
  "accent": "#5d9cab"
};
export function createSkateparkQuarterPipeModule() { return buildRecipe({
  "title": "Skatepark Quarter Pipe Module",
  "dimensions": [
    3.35,
    1.78,
    2.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "skatepark-quarter-pipe-foundation",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        2.98,
        0.22,
        2.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-0",
      "p": [
        0,
        0.22,
        -0.86
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 15385725
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-1",
      "p": [
        0,
        0.235,
        -0.6699999999999999
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-2",
      "p": [
        0,
        0.28,
        -0.48
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 15385725
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-3",
      "p": [
        0,
        0.355,
        -0.2899999999999999
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-4",
      "p": [
        0,
        0.45999999999999996,
        -0.09999999999999998
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 15385725
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-5",
      "p": [
        0,
        0.595,
        0.08999999999999997
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-6",
      "p": [
        0,
        0.76,
        0.28000000000000014
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 15385725
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-7",
      "p": [
        0,
        0.955,
        0.4700000000000001
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 3954800
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-8",
      "p": [
        0,
        1.18,
        0.66
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 15385725
    },
    {
      "t": "box",
      "n": "curved-ramp-deck-9",
      "p": [
        0,
        1.435,
        0.85
      ],
      "s": [
        2.95,
        0.068,
        0.2
      ],
      "c": 3954800
    },
    {
      "t": "rod",
      "n": "coping-steel-edge",
      "from": [
        -1.49,
        1.7,
        0.86
      ],
      "to": [
        1.49,
        1.7,
        0.86
      ],
      "r": 0.055,
      "c": 14213084
    },
    {
      "t": "rod",
      "n": "quarter-pipe-side-rail--1",
      "from": [
        -1.46,
        0.22,
        -0.88
      ],
      "to": [
        -1.46,
        1.7,
        0.87
      ],
      "r": 0.045,
      "c": 14213084
    },
    {
      "t": "box",
      "n": "ramp-structural-rib--1-0",
      "p": [
        -1.43,
        0.25,
        -0.81
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib--1-1",
      "p": [
        -1.43,
        0.47,
        -0.51
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib--1-2",
      "p": [
        -1.43,
        0.69,
        -0.21000000000000008
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib--1-3",
      "p": [
        -1.43,
        0.91,
        0.08999999999999986
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib--1-4",
      "p": [
        -1.43,
        1.13,
        0.3899999999999999
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib--1-5",
      "p": [
        -1.43,
        1.35,
        0.69
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "rod",
      "n": "quarter-pipe-side-rail-1",
      "from": [
        1.46,
        0.22,
        -0.88
      ],
      "to": [
        1.46,
        1.7,
        0.87
      ],
      "r": 0.045,
      "c": 14213084
    },
    {
      "t": "box",
      "n": "ramp-structural-rib-1-0",
      "p": [
        1.43,
        0.25,
        -0.81
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib-1-1",
      "p": [
        1.43,
        0.47,
        -0.51
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib-1-2",
      "p": [
        1.43,
        0.69,
        -0.21000000000000008
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib-1-3",
      "p": [
        1.43,
        0.91,
        0.08999999999999986
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib-1-4",
      "p": [
        1.43,
        1.13,
        0.3899999999999999
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "ramp-structural-rib-1-5",
      "p": [
        1.43,
        1.35,
        0.69
      ],
      "s": [
        0.07,
        0.3,
        0.13
      ],
      "c": 6134955
    },
    {
      "t": "box",
      "n": "skater-deck-platform",
      "p": [
        0,
        1.71,
        0.85
      ],
      "s": [
        2.95,
        0.11,
        0.41
      ],
      "c": 15385725
    }
  ]
}); }
