import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Street Tree Root Cell System / 街道树根保护单元. */
export const assetMeta = {
  "id": "urban.street-tree-root-cell-system.001",
  "slug": "street-tree-root-cell-system",
  "title": "Street Tree Root Cell System",
  "title_zh": "街道树根保护单元",
  "summary": "Urban tree root-cell below paving with open soil grid, tree trunk and root support",
  "category": "urban",
  "tags": [
    "street",
    "tree",
    "root",
    "cell",
    "system",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.85,
    2.65,
    2.35
  ],
  "generator": "createStreetTreeRootCellSystem",
  "source_path": "src/models/street_tree_root_cell_system.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/street-tree-root-cell-system.webp",
  "accent": "#384e5d"
};
export function createStreetTreeRootCellSystem() { return buildRecipe({
  "title": "Street Tree Root Cell System",
  "dimensions": [
    2.85,
    2.65,
    2.35
  ],
  "parts": [
    {
      "t": "box",
      "n": "underground-root-cell-planter",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        2.54,
        0.33,
        2.09
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-0-0",
      "p": [
        -1.02,
        0.41,
        -0.81
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-0-1",
      "p": [
        -1.02,
        0.41,
        -0.4000000000000001
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-0-2",
      "p": [
        -1.02,
        0.41,
        0.009999999999999898
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-0-3",
      "p": [
        -1.02,
        0.41,
        0.41999999999999993
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-0-4",
      "p": [
        -1.02,
        0.41,
        0.8299999999999998
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-1-0",
      "p": [
        -0.51,
        0.41,
        -0.81
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-1-1",
      "p": [
        -0.51,
        0.41,
        -0.4000000000000001
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-1-2",
      "p": [
        -0.51,
        0.41,
        0.009999999999999898
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-1-3",
      "p": [
        -0.51,
        0.41,
        0.41999999999999993
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-1-4",
      "p": [
        -0.51,
        0.41,
        0.8299999999999998
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-2-0",
      "p": [
        0,
        0.41,
        -0.81
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-2-1",
      "p": [
        0,
        0.41,
        -0.4000000000000001
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-2-2",
      "p": [
        0,
        0.41,
        0.009999999999999898
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-2-3",
      "p": [
        0,
        0.41,
        0.41999999999999993
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-2-4",
      "p": [
        0,
        0.41,
        0.8299999999999998
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-3-0",
      "p": [
        0.51,
        0.41,
        -0.81
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-3-1",
      "p": [
        0.51,
        0.41,
        -0.4000000000000001
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-3-2",
      "p": [
        0.51,
        0.41,
        0.009999999999999898
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-3-3",
      "p": [
        0.51,
        0.41,
        0.41999999999999993
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-3-4",
      "p": [
        0.51,
        0.41,
        0.8299999999999998
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-4-0",
      "p": [
        1.02,
        0.41,
        -0.81
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-4-1",
      "p": [
        1.02,
        0.41,
        -0.4000000000000001
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-4-2",
      "p": [
        1.02,
        0.41,
        0.009999999999999898
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-4-3",
      "p": [
        1.02,
        0.41,
        0.41999999999999993
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "supportive-root-cell-grid-4-4",
      "p": [
        1.02,
        0.41,
        0.8299999999999998
      ],
      "s": [
        0.43,
        0.14,
        0.08
      ],
      "c": 12503985
    },
    {
      "t": "cylinder",
      "n": "urban-tree-trunk",
      "p": [
        0,
        1.3,
        0
      ],
      "s": [
        0.31,
        2.22,
        0.31
      ],
      "c": 6717332
    },
    {
      "t": "rod",
      "n": "tree-lateral-root-0",
      "from": [
        0,
        0.42,
        0
      ],
      "to": [
        0.54,
        0.26,
        0
      ],
      "r": 0.05,
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "tree-canopy-branch-0",
      "p": [
        0.41040000000000004,
        2.17,
        0
      ],
      "s": [
        0.46,
        0.31,
        0.43
      ],
      "c": 15122282
    },
    {
      "t": "rod",
      "n": "tree-lateral-root-1",
      "from": [
        0,
        0.42,
        0
      ],
      "to": [
        0.2700000000000001,
        0.26,
        0.4676537180435969
      ],
      "r": 0.05,
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "tree-canopy-branch-1",
      "p": [
        0.20520000000000005,
        2.17,
        0.35541682571313366
      ],
      "s": [
        0.46,
        0.31,
        0.43
      ],
      "c": 15122282
    },
    {
      "t": "rod",
      "n": "tree-lateral-root-2",
      "from": [
        0,
        0.42,
        0
      ],
      "to": [
        -0.2699999999999999,
        0.26,
        0.46765371804359696
      ],
      "r": 0.05,
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "tree-canopy-branch-2",
      "p": [
        -0.20519999999999994,
        2.17,
        0.3554168257131337
      ],
      "s": [
        0.46,
        0.31,
        0.43
      ],
      "c": 15122282
    },
    {
      "t": "rod",
      "n": "tree-lateral-root-3",
      "from": [
        0,
        0.42,
        0
      ],
      "to": [
        -0.54,
        0.26,
        6.613092715395707e-17
      ],
      "r": 0.05,
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "tree-canopy-branch-3",
      "p": [
        -0.41040000000000004,
        2.17,
        5.025950463700738e-17
      ],
      "s": [
        0.46,
        0.31,
        0.43
      ],
      "c": 15122282
    },
    {
      "t": "rod",
      "n": "tree-lateral-root-4",
      "from": [
        0,
        0.42,
        0
      ],
      "to": [
        -0.27000000000000024,
        0.26,
        -0.46765371804359673
      ],
      "r": 0.05,
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "tree-canopy-branch-4",
      "p": [
        -0.2052000000000002,
        2.17,
        -0.35541682571313354
      ],
      "s": [
        0.46,
        0.31,
        0.43
      ],
      "c": 15122282
    },
    {
      "t": "rod",
      "n": "tree-lateral-root-5",
      "from": [
        0,
        0.42,
        0
      ],
      "to": [
        0.2700000000000001,
        0.26,
        -0.4676537180435969
      ],
      "r": 0.05,
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "tree-canopy-branch-5",
      "p": [
        0.20520000000000005,
        2.17,
        -0.35541682571313366
      ],
      "s": [
        0.46,
        0.31,
        0.43
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "paving-grate-cover-0",
      "p": [
        -1.13,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "paving-grate-cover-1",
      "p": [
        -0.7599999999999999,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "paving-grate-cover-2",
      "p": [
        -0.3899999999999999,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "paving-grate-cover-3",
      "p": [
        -0.020000000000000018,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "paving-grate-cover-4",
      "p": [
        0.3500000000000001,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "paving-grate-cover-5",
      "p": [
        0.7200000000000002,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    },
    {
      "t": "box",
      "n": "paving-grate-cover-6",
      "p": [
        1.0899999999999999,
        0.37,
        1.03
      ],
      "s": [
        0.27,
        0.03,
        0.15
      ],
      "c": 12503985
    }
  ]
}); }
