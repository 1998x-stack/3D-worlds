import { buildRecipe } from './recipe_engine.js';
/** Terracotta Arcade Column Bay / 赤陶拱廊建筑模块: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "architecture.terracotta-arcade-column-bay.001",
  "slug": "terracotta-arcade-column-bay",
  "title": "Terracotta Arcade Column Bay",
  "title_zh": "赤陶拱廊建筑模块",
  "summary": "Architectural colonnade bay with twin masonry pillars, vaulted arch and cornice",
  "category": "architecture",
  "tags": [
    "terracotta",
    "arcade",
    "column",
    "bay",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.55,
    3.3,
    1.48
  ],
  "generator": "createTerracottaArcadeColumnBay",
  "source_path": "src/models/terracotta_arcade_column_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/terracotta-arcade-column-bay.webp",
  "accent": "#9a755c"
};
export function createTerracottaArcadeColumnBay() { return buildRecipe({
  "title": "Terracotta Arcade Column Bay",
  "dimensions": [
    3.55,
    3.3,
    1.48
  ],
  "parts": [
    {
      "t": "box",
      "n": "arcade-column--1",
      "p": [
        -1.1,
        1.25,
        0
      ],
      "s": [
        0.38,
        2.5,
        0.65
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "pillar-capital--1",
      "p": [
        -1.1,
        2.51,
        0
      ],
      "s": [
        0.58,
        0.16,
        0.8
      ],
      "c": 10997716
    },
    {
      "t": "box",
      "n": "arcade-column-1",
      "p": [
        1.1,
        1.25,
        0
      ],
      "s": [
        0.38,
        2.5,
        0.65
      ],
      "c": 12827301
    },
    {
      "t": "box",
      "n": "pillar-capital-1",
      "p": [
        1.1,
        2.51,
        0
      ],
      "s": [
        0.58,
        0.16,
        0.8
      ],
      "c": 10997716
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-0",
      "p": [
        -1.05,
        2.611743917503482,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 10122588
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-1",
      "p": [
        -0.79,
        2.75141779327068,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 12827301
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-2",
      "p": [
        -0.53,
        2.8265331951986075,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 10122588
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-3",
      "p": [
        -0.27,
        2.866666557017532,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 12827301
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-4",
      "p": [
        -0.010000000000000009,
        2.879981944130969,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 10122588
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-5",
      "p": [
        0.25,
        2.8685900990865716,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 12827301
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-6",
      "p": [
        0.51,
        2.8307005417460234,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 10122588
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-7",
      "p": [
        0.77,
        2.758831487668107,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 12827301
    },
    {
      "t": "sphere",
      "n": "arch-masonry-voussoir-8",
      "p": [
        1.03,
        2.626808087500277,
        0
      ],
      "s": [
        0.18,
        0.23,
        0.38
      ],
      "c": 10122588
    },
    {
      "t": "box",
      "n": "arcade-entablature",
      "p": [
        0,
        3.06,
        0
      ],
      "s": [
        3.07,
        0.26,
        0.81
      ],
      "c": 6650245
    },
    {
      "t": "box",
      "n": "cornice-block-0",
      "p": [
        -1.25,
        3.23,
        0
      ],
      "s": [
        0.35,
        0.11,
        0.7
      ],
      "c": 10997716
    },
    {
      "t": "box",
      "n": "cornice-block-1",
      "p": [
        -0.75,
        3.23,
        0
      ],
      "s": [
        0.35,
        0.11,
        0.7
      ],
      "c": 10997716
    },
    {
      "t": "box",
      "n": "cornice-block-2",
      "p": [
        -0.25,
        3.23,
        0
      ],
      "s": [
        0.35,
        0.11,
        0.7
      ],
      "c": 10997716
    },
    {
      "t": "box",
      "n": "cornice-block-3",
      "p": [
        0.25,
        3.23,
        0
      ],
      "s": [
        0.35,
        0.11,
        0.7
      ],
      "c": 10997716
    },
    {
      "t": "box",
      "n": "cornice-block-4",
      "p": [
        0.75,
        3.23,
        0
      ],
      "s": [
        0.35,
        0.11,
        0.7
      ],
      "c": 10997716
    },
    {
      "t": "box",
      "n": "cornice-block-5",
      "p": [
        1.25,
        3.23,
        0
      ],
      "s": [
        0.35,
        0.11,
        0.7
      ],
      "c": 10997716
    }
  ]
}); }
