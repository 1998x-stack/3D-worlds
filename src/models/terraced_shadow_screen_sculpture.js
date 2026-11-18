import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Terraced Shadow Screen Sculpture; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "decor.terraced-shadow-screen-sculpture.001",
  "slug": "terraced-shadow-screen-sculpture",
  "title": "Terraced Shadow Screen Sculpture",
  "title_zh": "阶梯式光影屏风摆件",
  "summary": "Five staggered light-shadow louver screens",
  "category": "decor",
  "tags": [
    "terraced",
    "shadow",
    "screen",
    "sculpture",
    "decor",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.29,
    0.34,
    0.2
  ],
  "generator": "createTerracedShadowScreenSculpture",
  "source_path": "src/models/terraced_shadow_screen_sculpture.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/terraced-shadow-screen-sculpture.webp",
  "accent": "#f0c58b",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createTerracedShadowScreenSculpture() { return buildRecipe({
  "title": "Terraced Shadow Screen Sculpture",
  "dimensions": [
    0.29,
    0.34,
    0.2
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "screen-base",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.82,
        0.17,
        1.3
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-0",
      "p": [
        -0.61,
        0.35,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-1",
      "p": [
        -0.61,
        0.49,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-2",
      "p": [
        -0.61,
        0.63,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-3",
      "p": [
        -0.61,
        0.77,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-4",
      "p": [
        -0.61,
        0.91,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-5",
      "p": [
        -0.61,
        1.05,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-6",
      "p": [
        -0.61,
        1.19,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-7",
      "p": [
        -0.61,
        1.33,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-8",
      "p": [
        -0.61,
        1.47,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-9",
      "p": [
        -0.61,
        1.61,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-10",
      "p": [
        -0.61,
        1.75,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-0-11",
      "p": [
        -0.61,
        1.89,
        -0.43
      ],
      "s": [
        0.15,
        0.062,
        0.47
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "lintel-0",
      "p": [
        -0.61,
        2,
        -0.43
      ],
      "s": [
        0.2,
        0.12,
        0.54
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "base-rail-0",
      "p": [
        -0.61,
        0.26,
        -0.43
      ],
      "s": [
        0.2,
        0.11,
        0.54
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-0",
      "p": [
        -0.3,
        0.35,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-1",
      "p": [
        -0.3,
        0.49,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-2",
      "p": [
        -0.3,
        0.63,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-3",
      "p": [
        -0.3,
        0.77,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-4",
      "p": [
        -0.3,
        0.91,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-5",
      "p": [
        -0.3,
        1.05,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-6",
      "p": [
        -0.3,
        1.19,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-7",
      "p": [
        -0.3,
        1.33,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-8",
      "p": [
        -0.3,
        1.47,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-9",
      "p": [
        -0.3,
        1.61,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-10",
      "p": [
        -0.3,
        1.75,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-1-11",
      "p": [
        -0.3,
        1.89,
        -0.26
      ],
      "s": [
        0.15,
        0.062,
        0.59
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "lintel-1",
      "p": [
        -0.3,
        2,
        -0.26
      ],
      "s": [
        0.2,
        0.12,
        0.66
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "base-rail-1",
      "p": [
        -0.3,
        0.26,
        -0.26
      ],
      "s": [
        0.2,
        0.11,
        0.66
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-0",
      "p": [
        0.01,
        0.35,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-1",
      "p": [
        0.01,
        0.49,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-2",
      "p": [
        0.01,
        0.63,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-3",
      "p": [
        0.01,
        0.77,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-4",
      "p": [
        0.01,
        0.91,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-5",
      "p": [
        0.01,
        1.05,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-6",
      "p": [
        0.01,
        1.19,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-7",
      "p": [
        0.01,
        1.33,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-8",
      "p": [
        0.01,
        1.47,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-9",
      "p": [
        0.01,
        1.61,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-10",
      "p": [
        0.01,
        1.75,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-2-11",
      "p": [
        0.01,
        1.89,
        -0.09
      ],
      "s": [
        0.15,
        0.062,
        0.71
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "lintel-2",
      "p": [
        0.01,
        2,
        -0.09
      ],
      "s": [
        0.2,
        0.12,
        0.78
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "base-rail-2",
      "p": [
        0.01,
        0.26,
        -0.09
      ],
      "s": [
        0.2,
        0.11,
        0.78
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-0",
      "p": [
        0.32,
        0.35,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-1",
      "p": [
        0.32,
        0.49,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-2",
      "p": [
        0.32,
        0.63,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-3",
      "p": [
        0.32,
        0.77,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-4",
      "p": [
        0.32,
        0.91,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-5",
      "p": [
        0.32,
        1.05,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-6",
      "p": [
        0.32,
        1.19,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-7",
      "p": [
        0.32,
        1.33,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-8",
      "p": [
        0.32,
        1.47,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-9",
      "p": [
        0.32,
        1.61,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-10",
      "p": [
        0.32,
        1.75,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-3-11",
      "p": [
        0.32,
        1.89,
        0.08
      ],
      "s": [
        0.15,
        0.062,
        0.83
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "lintel-3",
      "p": [
        0.32,
        2,
        0.08
      ],
      "s": [
        0.2,
        0.12,
        0.9
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "base-rail-3",
      "p": [
        0.32,
        0.26,
        0.08
      ],
      "s": [
        0.2,
        0.11,
        0.9
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-0",
      "p": [
        0.63,
        0.35,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-1",
      "p": [
        0.63,
        0.49,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-2",
      "p": [
        0.63,
        0.63,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-3",
      "p": [
        0.63,
        0.77,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-4",
      "p": [
        0.63,
        0.91,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-5",
      "p": [
        0.63,
        1.05,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-6",
      "p": [
        0.63,
        1.19,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-7",
      "p": [
        0.63,
        1.33,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-8",
      "p": [
        0.63,
        1.47,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-9",
      "p": [
        0.63,
        1.61,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-10",
      "p": [
        0.63,
        1.75,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "louver-4-11",
      "p": [
        0.63,
        1.89,
        0.25
      ],
      "s": [
        0.15,
        0.062,
        0.95
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "lintel-4",
      "p": [
        0.63,
        2,
        0.25
      ],
      "s": [
        0.2,
        0.12,
        1.02
      ],
      "c": 15910009,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "base-rail-4",
      "p": [
        0.63,
        0.26,
        0.25
      ],
      "s": [
        0.2,
        0.11,
        1.02
      ],
      "c": 12504530,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "viewing-port-0",
      "p": [
        -0.77,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-1",
      "p": [
        -0.58,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-2",
      "p": [
        -0.39,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-3",
      "p": [
        -0.2,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-4",
      "p": [
        -0.01,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-5",
      "p": [
        0.18,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-6",
      "p": [
        0.37,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-7",
      "p": [
        0.56,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "viewing-port-8",
      "p": [
        0.75,
        1.26,
        0.45
      ],
      "s": [
        0.13,
        0.1,
        0.13
      ],
      "c": 15910009,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    }
  ],
  "geometry_revision": "1.6.0"
}); }
