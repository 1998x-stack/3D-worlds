import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Under-Desk Modular Cassette; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "furniture.under-desk-modular-cassette.001",
  "slug": "under-desk-modular-cassette",
  "title": "Under-Desk Modular Cassette",
  "title_zh": "桌下模块化抽屉盒",
  "summary": "Underslung cassette with bearing rails and removable dividers",
  "category": "furniture",
  "tags": [
    "under",
    "desk",
    "modular",
    "cassette",
    "furniture",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.3,
    0.16,
    0.28
  ],
  "generator": "createUnderDeskModularCassette",
  "source_path": "src/models/under_desk_modular_cassette.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/under-desk-modular-cassette.webp",
  "accent": "#576e82",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createUnderDeskModularCassette() { return buildRecipe({
  "title": "Under-Desk Modular Cassette",
  "dimensions": [
    0.3,
    0.16,
    0.28
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "upper-fixing-plate",
      "p": [
        0,
        1.54,
        -0.07
      ],
      "s": [
        1.82,
        0.17,
        1.36
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "drawer-floor",
      "p": [
        0,
        0.7,
        0.11
      ],
      "s": [
        1.48,
        0.15,
        1.11
      ],
      "c": 12951668,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "runner--1",
      "p": [
        -0.72,
        1.14,
        0
      ],
      "s": [
        0.14,
        0.18,
        1.4
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "runner-stop--1",
      "p": [
        -0.72,
        1.07,
        -0.54
      ],
      "s": [
        0.18,
        0.16,
        0.18
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "runner-1",
      "p": [
        0.72,
        1.14,
        0
      ],
      "s": [
        0.14,
        0.18,
        1.4
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "runner-stop-1",
      "p": [
        0.72,
        1.07,
        -0.54
      ],
      "s": [
        0.18,
        0.16,
        0.18
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "insert-wall-0",
      "p": [
        -0.65,
        0.86,
        0.09
      ],
      "s": [
        0.065,
        0.32,
        1.02
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "index-handle-0",
      "p": [
        -0.65,
        1.04,
        0.5
      ],
      "s": [
        0.15,
        0.07,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "insert-wall-1",
      "p": [
        -0.4,
        0.86,
        0.09
      ],
      "s": [
        0.065,
        0.32,
        1.02
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "index-handle-1",
      "p": [
        -0.4,
        1.04,
        0.5
      ],
      "s": [
        0.15,
        0.07,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "insert-wall-2",
      "p": [
        -0.15,
        0.86,
        0.09
      ],
      "s": [
        0.065,
        0.32,
        1.02
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "index-handle-2",
      "p": [
        -0.15,
        1.04,
        0.5
      ],
      "s": [
        0.15,
        0.07,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "insert-wall-3",
      "p": [
        0.1,
        0.86,
        0.09
      ],
      "s": [
        0.065,
        0.32,
        1.02
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "index-handle-3",
      "p": [
        0.1,
        1.04,
        0.5
      ],
      "s": [
        0.15,
        0.07,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "insert-wall-4",
      "p": [
        0.35,
        0.86,
        0.09
      ],
      "s": [
        0.065,
        0.32,
        1.02
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "index-handle-4",
      "p": [
        0.35,
        1.04,
        0.5
      ],
      "s": [
        0.15,
        0.07,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "insert-wall-5",
      "p": [
        0.6,
        0.86,
        0.09
      ],
      "s": [
        0.065,
        0.32,
        1.02
      ],
      "c": 5729922,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "index-handle-5",
      "p": [
        0.6,
        1.04,
        0.5
      ],
      "s": [
        0.15,
        0.07,
        0.1
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "front-pull",
      "p": [
        0,
        0.86,
        0.72
      ],
      "s": [
        1.5,
        0.37,
        0.16
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-0",
      "p": [
        -0.64,
        0.81,
        -0.31
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-1",
      "p": [
        -0.32,
        0.81,
        -0.31
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-2",
      "p": [
        0,
        0.81,
        -0.31
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-3",
      "p": [
        0.32,
        0.81,
        -0.31
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-4",
      "p": [
        0.64,
        0.81,
        -0.31
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-5",
      "p": [
        -0.64,
        0.81,
        0.17
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-6",
      "p": [
        -0.32,
        0.81,
        0.17
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-7",
      "p": [
        0,
        0.81,
        0.17
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-8",
      "p": [
        0.32,
        0.81,
        0.17
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "bottom-mat-9",
      "p": [
        0.64,
        0.81,
        0.17
      ],
      "s": [
        0.15,
        0.05,
        0.18
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "rail-bolts-0",
      "p": [
        -0.69,
        1.6,
        -0.28
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rail-bolts-1",
      "p": [
        -0.41,
        1.6,
        -0.28
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rail-bolts-2",
      "p": [
        -0.13,
        1.6,
        -0.28
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rail-bolts-3",
      "p": [
        0.15,
        1.6,
        -0.28
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rail-bolts-4",
      "p": [
        0.43,
        1.6,
        -0.28
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rail-bolts-5",
      "p": [
        0.71,
        1.6,
        -0.28
      ],
      "s": [
        0.075,
        0.03,
        0.075
      ],
      "c": 12504530,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
