import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Penrose Tile Kaleidoscope; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "decor.penrose-tile-kaleidoscope.001",
  "slug": "penrose-tile-kaleidoscope",
  "title": "Penrose Tile Kaleidoscope",
  "title_zh": "彭罗斯拼花几何展台",
  "summary": "Aperiodic rhombus field with hovering optical arcs",
  "category": "decor",
  "tags": [
    "penrose",
    "tile",
    "kaleidoscope",
    "decor",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.28,
    0.27,
    0.25
  ],
  "generator": "createPenroseTileKaleidoscope",
  "source_path": "src/models/penrose_tile_kaleidoscope.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/penrose-tile-kaleidoscope.webp",
  "accent": "#f0c58b",
  "provenance_note": "Original procedural scene based on functional design research. Channel: hacker-news; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createPenroseTileKaleidoscope() { return buildRecipe({
  "title": "Penrose Tile Kaleidoscope",
  "dimensions": [
    0.28,
    0.27,
    0.25
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "exhibit-disk",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        1.64,
        0.17,
        1.62
      ],
      "c": 2503997,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-0",
      "p": [
        0.2,
        0.32,
        0
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-1",
      "p": [
        0.1618,
        0.32,
        0.1176
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-2",
      "p": [
        0.0618,
        0.32,
        0.1902
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-3",
      "p": [
        -0.0618,
        0.32,
        0.1902
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-4",
      "p": [
        -0.1618,
        0.32,
        0.1176
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-5",
      "p": [
        -0.2,
        0.32,
        0
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-6",
      "p": [
        -0.1618,
        0.32,
        -0.1176
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-7",
      "p": [
        -0.0618,
        0.32,
        -0.1902
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-8",
      "p": [
        0.0618,
        0.32,
        -0.1902
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-0-9",
      "p": [
        0.1618,
        0.32,
        -0.1176
      ],
      "s": [
        0.18,
        0.065,
        0.11
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-0",
      "p": [
        0.4714,
        0.332,
        0.0907
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-1",
      "p": [
        0.3281,
        0.332,
        0.3504
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-2",
      "p": [
        0.0594,
        0.332,
        0.4763
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-3",
      "p": [
        -0.2319,
        0.332,
        0.4203
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-4",
      "p": [
        -0.4346,
        0.332,
        0.2037
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-5",
      "p": [
        -0.4714,
        0.332,
        -0.0907
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-6",
      "p": [
        -0.3281,
        0.332,
        -0.3504
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-7",
      "p": [
        -0.0594,
        0.332,
        -0.4763
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-8",
      "p": [
        0.2319,
        0.332,
        -0.4203
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-1-9",
      "p": [
        0.4346,
        0.332,
        -0.2037
      ],
      "s": [
        0.235,
        0.065,
        0.127
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-0",
      "p": [
        0.7058,
        0.344,
        0.2819
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-1",
      "p": [
        0.4053,
        0.344,
        0.6429
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-2",
      "p": [
        -0.05,
        0.344,
        0.7584
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-3",
      "p": [
        -0.4862,
        0.344,
        0.5841
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-4",
      "p": [
        -0.7367,
        0.344,
        0.1868
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-5",
      "p": [
        -0.7058,
        0.344,
        -0.2819
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-6",
      "p": [
        -0.4053,
        0.344,
        -0.6429
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-7",
      "p": [
        0.05,
        0.344,
        -0.7584
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-8",
      "p": [
        0.4862,
        0.344,
        -0.5841
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 11112380,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "nonperiodic-rhombus-2-9",
      "p": [
        0.7367,
        0.344,
        -0.1868
      ],
      "s": [
        0.29,
        0.065,
        0.144
      ],
      "c": 15779211,
      "finish": "ceramic"
    },
    {
      "t": "torus",
      "n": "outer-lens-ring",
      "p": [
        0,
        1.51,
        0
      ],
      "s": [
        1.32,
        1.32,
        0.12
      ],
      "c": 15779211,
      "finish": "metal",
      "rot": [
        0,
        0.2,
        0
      ]
    },
    {
      "t": "torus",
      "n": "inner-lens-ring",
      "p": [
        0,
        1.51,
        0.06
      ],
      "s": [
        0.75,
        0.75,
        0.11
      ],
      "c": 12504530,
      "finish": "metal",
      "rot": [
        0.2,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "radial-ray-0",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0.61,
        1.51,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-1",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0.5283,
        1.815,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-2",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0.305,
        2.0383,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-3",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0,
        2.12,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-4",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        -0.305,
        2.0383,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-5",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        -0.5283,
        1.815,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-6",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        -0.61,
        1.51,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-7",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        -0.5283,
        1.205,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-8",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        -0.305,
        0.9817,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-9",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0,
        0.9,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-10",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0.305,
        0.9817,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "radial-ray-11",
      "from": [
        0,
        1.51,
        0
      ],
      "to": [
        0.5283,
        1.205,
        0
      ],
      "r": 0.019,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "support-fork--1",
      "from": [
        -0.58,
        0.28,
        -0.53
      ],
      "to": [
        -0.58,
        1.54,
        0
      ],
      "r": 0.055,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "support-fork-1",
      "from": [
        0.58,
        0.28,
        -0.53
      ],
      "to": [
        0.58,
        1.54,
        0
      ],
      "r": 0.055,
      "c": 12504530,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
