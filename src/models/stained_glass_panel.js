import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "decor.stained-glass-panel.001",
  "slug": "stained-glass-panel",
  "title": "Stained Glass Panel",
  "title_zh": "彩色铅条玻璃屏",
  "summary": "Decorative colored leaded glass grid with central rosette",
  "category": "decor",
  "tags": [
    "stained-glass",
    "window",
    "art"
  ],
  "dimensions_m": [
    1.21,
    1.77,
    0.11
  ],
  "generator": "createStainedGlassPanel",
  "source_path": "src/models/stained_glass_panel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/stained-glass-panel.webp"
};
export function createStainedGlassPanel() { return buildRecipe({
  "title": "Stained Glass Panel",
  "dimensions": [
    1.21,
    1.77,
    0.11
  ],
  "parts": [
    {
      "t": "box",
      "n": "frame",
      "p": [
        0,
        0.89,
        0
      ],
      "s": [
        1.19,
        1.75,
        0.1
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "glass-back",
      "p": [
        0,
        0.89,
        0.058
      ],
      "s": [
        1.06,
        1.59,
        0.012
      ],
      "c": 8762553
    },
    {
      "t": "box",
      "n": "color-tile-0",
      "p": [
        -0.37,
        0.37,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 12154994
    },
    {
      "t": "box",
      "n": "color-tile-1",
      "p": [
        -0.12,
        0.37,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 7775386
    },
    {
      "t": "box",
      "n": "color-tile-2",
      "p": [
        0.13,
        0.37,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 14004602
    },
    {
      "t": "box",
      "n": "color-tile-3",
      "p": [
        0.38,
        0.37,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 7837113
    },
    {
      "t": "box",
      "n": "color-tile-4",
      "p": [
        -0.37,
        0.88,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 7775386
    },
    {
      "t": "box",
      "n": "color-tile-5",
      "p": [
        -0.12,
        0.88,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 14004602
    },
    {
      "t": "box",
      "n": "color-tile-6",
      "p": [
        0.13,
        0.88,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 7837113
    },
    {
      "t": "box",
      "n": "color-tile-7",
      "p": [
        0.38,
        0.88,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 12154994
    },
    {
      "t": "box",
      "n": "color-tile-8",
      "p": [
        -0.37,
        1.3900000000000001,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 14004602
    },
    {
      "t": "box",
      "n": "color-tile-9",
      "p": [
        -0.12,
        1.3900000000000001,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 7837113
    },
    {
      "t": "box",
      "n": "color-tile-10",
      "p": [
        0.13,
        1.3900000000000001,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 12154994
    },
    {
      "t": "box",
      "n": "color-tile-11",
      "p": [
        0.38,
        1.3900000000000001,
        0.069
      ],
      "s": [
        0.23,
        0.47,
        0.012
      ],
      "c": 7775386
    },
    {
      "t": "box",
      "n": "lead-vertical-0",
      "p": [
        -0.5,
        0.89,
        0.08
      ],
      "s": [
        0.023,
        1.61,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-vertical-1",
      "p": [
        -0.25,
        0.89,
        0.08
      ],
      "s": [
        0.023,
        1.61,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-vertical-2",
      "p": [
        0,
        0.89,
        0.08
      ],
      "s": [
        0.023,
        1.61,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-vertical-3",
      "p": [
        0.25,
        0.89,
        0.08
      ],
      "s": [
        0.023,
        1.61,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-vertical-4",
      "p": [
        0.5,
        0.89,
        0.08
      ],
      "s": [
        0.023,
        1.61,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-horizontal-0",
      "p": [
        0,
        0.13,
        0.08
      ],
      "s": [
        1.08,
        0.022,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-horizontal-1",
      "p": [
        0,
        0.64,
        0.08
      ],
      "s": [
        1.08,
        0.022,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-horizontal-2",
      "p": [
        0,
        1.15,
        0.08
      ],
      "s": [
        1.08,
        0.022,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "box",
      "n": "lead-horizontal-3",
      "p": [
        0,
        1.6600000000000001,
        0.08
      ],
      "s": [
        1.08,
        0.022,
        0.017
      ],
      "c": 3358791
    },
    {
      "t": "sphere",
      "n": "central-rose",
      "p": [
        0,
        0.9,
        0.088
      ],
      "s": [
        0.21,
        0.2,
        0.015
      ],
      "c": 13148857
    },
    {
      "t": "box",
      "n": "hanger",
      "p": [
        0,
        1.77,
        -0.025
      ],
      "s": [
        0.2,
        0.04,
        0.035
      ],
      "c": 9872292
    }
  ]
}); }
