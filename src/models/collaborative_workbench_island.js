import { buildRecipe } from './recipe_engine.js';
/** Collaborative Workbench Island / 共享协作工作台: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "furniture.collaborative-workbench-island.001",
  "slug": "collaborative-workbench-island",
  "title": "Collaborative Workbench Island",
  "title_zh": "共享协作工作台",
  "summary": "Large collaborative maker table with tool rail, storage drawers and power channel",
  "category": "furniture",
  "tags": [
    "collaborative",
    "workbench",
    "island",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.45,
    1.18,
    1.42
  ],
  "generator": "createCollaborativeWorkbenchIsland",
  "source_path": "src/models/collaborative_workbench_island.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/collaborative-workbench-island.webp",
  "accent": "#556b74"
};
export function createCollaborativeWorkbenchIsland() { return buildRecipe({
  "title": "Collaborative Workbench Island",
  "dimensions": [
    2.45,
    1.18,
    1.42
  ],
  "parts": [
    {
      "t": "box",
      "n": "maker-work-surface",
      "p": [
        0,
        1,
        0
      ],
      "s": [
        2.2,
        0.16,
        1.15
      ],
      "c": 12165758
    },
    {
      "t": "box",
      "n": "support-leg--1.02--0.45",
      "p": [
        -1.02,
        0.47,
        -0.45
      ],
      "s": [
        0.09,
        0.94,
        0.09
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "support-leg--1.02-0.45",
      "p": [
        -1.02,
        0.47,
        0.45
      ],
      "s": [
        0.09,
        0.94,
        0.09
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "support-leg-1.02--0.45",
      "p": [
        1.02,
        0.47,
        -0.45
      ],
      "s": [
        0.09,
        0.94,
        0.09
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "support-leg-1.02-0.45",
      "p": [
        1.02,
        0.47,
        0.45
      ],
      "s": [
        0.09,
        0.94,
        0.09
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "power-rail",
      "p": [
        0,
        1.09,
        -0.47
      ],
      "s": [
        1.85,
        0.12,
        0.1
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "power-outlet-0",
      "p": [
        -0.75,
        1.17,
        -0.48
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "power-outlet-1",
      "p": [
        -0.46,
        1.17,
        -0.48
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "power-outlet-2",
      "p": [
        -0.17000000000000004,
        1.17,
        -0.48
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "power-outlet-3",
      "p": [
        0.11999999999999988,
        1.17,
        -0.48
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "power-outlet-4",
      "p": [
        0.4099999999999999,
        1.17,
        -0.48
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "power-outlet-5",
      "p": [
        0.7,
        1.17,
        -0.48
      ],
      "s": [
        0.08,
        0.04,
        0.08
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "drawer-face-0",
      "p": [
        -0.73,
        0.68,
        0.54
      ],
      "s": [
        0.41,
        0.24,
        0.04
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "drawer-face-1",
      "p": [
        -0.25,
        0.68,
        0.54
      ],
      "s": [
        0.41,
        0.24,
        0.04
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "drawer-face-2",
      "p": [
        0.22999999999999998,
        0.68,
        0.54
      ],
      "s": [
        0.41,
        0.24,
        0.04
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "drawer-face-3",
      "p": [
        0.71,
        0.68,
        0.54
      ],
      "s": [
        0.41,
        0.24,
        0.04
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "central-tool-tray",
      "p": [
        0,
        1.16,
        0.17
      ],
      "s": [
        0.8,
        0.12,
        0.25
      ],
      "c": 15062968
    }
  ]
}); }
