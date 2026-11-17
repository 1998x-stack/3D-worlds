import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Stackable Mini Drawer Tower / 可叠放迷你抽屉塔. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "furniture.stackable-mini-drawer-tower.001",
  "slug": "stackable-mini-drawer-tower",
  "title": "Stackable Mini Drawer Tower",
  "title_zh": "可叠放迷你抽屉塔",
  "summary": "Compact stacked organizer with staggered color drawers, handles and locking corner pegs",
  "category": "furniture",
  "tags": [
    "stackable",
    "mini",
    "drawer",
    "tower",
    "furniture",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.24,
    0.34,
    0.19
  ],
  "generator": "createStackableMiniDrawerTower",
  "source_path": "src/models/stackable_mini_drawer_tower.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/stackable-mini-drawer-tower.webp",
  "accent": "#c5b6a2"
};
export function createStackableMiniDrawerTower() { return buildRecipe({
  "title": "Stackable Mini Drawer Tower",
  "dimensions": [
    0.24,
    0.34,
    0.19
  ],
  "parts": [
    {
      "t": "box",
      "n": "base-foot",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        1.7,
        0.16,
        1.25
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "drawer-shell-0",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        1.7,
        0.43,
        1.25
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "drawer-front-0",
      "p": [
        0,
        0.43,
        0.655
      ],
      "s": [
        1.5,
        0.32,
        0.065
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "drawer-pull-0",
      "p": [
        0,
        0.43,
        0.72
      ],
      "s": [
        0.32,
        0.09,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "drawer-track-0-0",
      "p": [
        -0.5,
        0.38,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-0-1",
      "p": [
        0,
        0.38,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-0-2",
      "p": [
        0.5,
        0.38,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-shell-1",
      "p": [
        0,
        0.85,
        0
      ],
      "s": [
        1.7,
        0.43,
        1.25
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "drawer-front-1",
      "p": [
        0,
        0.86,
        0.655
      ],
      "s": [
        1.5,
        0.32,
        0.065
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "drawer-pull-1",
      "p": [
        0,
        0.86,
        0.72
      ],
      "s": [
        0.32,
        0.09,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "drawer-track-1-0",
      "p": [
        -0.5,
        0.81,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-1-1",
      "p": [
        0,
        0.81,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-1-2",
      "p": [
        0.5,
        0.81,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-shell-2",
      "p": [
        0,
        1.28,
        0
      ],
      "s": [
        1.7,
        0.43,
        1.25
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "drawer-front-2",
      "p": [
        0,
        1.29,
        0.655
      ],
      "s": [
        1.5,
        0.32,
        0.065
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "drawer-pull-2",
      "p": [
        0,
        1.29,
        0.72
      ],
      "s": [
        0.32,
        0.09,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "drawer-track-2-0",
      "p": [
        -0.5,
        1.24,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-2-1",
      "p": [
        0,
        1.24,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-2-2",
      "p": [
        0.5,
        1.24,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-shell-3",
      "p": [
        0,
        1.71,
        0
      ],
      "s": [
        1.7,
        0.43,
        1.25
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "drawer-front-3",
      "p": [
        0,
        1.72,
        0.655
      ],
      "s": [
        1.5,
        0.32,
        0.065
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "drawer-pull-3",
      "p": [
        0,
        1.72,
        0.72
      ],
      "s": [
        0.32,
        0.09,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "drawer-track-3-0",
      "p": [
        -0.5,
        1.67,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-3-1",
      "p": [
        0,
        1.67,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "drawer-track-3-2",
      "p": [
        0.5,
        1.67,
        -0.56
      ],
      "s": [
        0.035,
        0.2,
        0.035
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "top-lock-peg-0",
      "p": [
        -0.69,
        2.21,
        -0.46
      ],
      "s": [
        0.1,
        0.15,
        0.1
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "top-lock-peg-1",
      "p": [
        0.69,
        2.21,
        -0.46
      ],
      "s": [
        0.1,
        0.15,
        0.1
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "top-lock-peg-2",
      "p": [
        -0.69,
        2.21,
        0.46
      ],
      "s": [
        0.1,
        0.15,
        0.1
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "top-lock-peg-3",
      "p": [
        0.69,
        2.21,
        0.46
      ],
      "s": [
        0.1,
        0.15,
        0.1
      ],
      "c": 15776881
    }
  ]
}); }
