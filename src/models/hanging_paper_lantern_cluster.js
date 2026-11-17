import { buildRecipe } from './recipe_engine.js';
/** Hanging Paper Lantern Cluster: original authored procedural geometry. */
export const assetMeta = {
  "id": "decor.hanging-paper-lantern-cluster.001",
  "slug": "hanging-paper-lantern-cluster",
  "title": "Hanging Paper Lantern Cluster",
  "title_zh": "中式纸灯笼悬挂组合",
  "summary": "Cluster of lanterns hanging from beam with tassels, ribs and warm shades",
  "category": "decor",
  "tags": [
    "lantern",
    "paper",
    "decor"
  ],
  "dimensions_m": [
    1.64,
    2.47,
    1.31
  ],
  "generator": "createHangingPaperLanternCluster",
  "source_path": "src/models/hanging_paper_lantern_cluster.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/hanging-paper-lantern-cluster.webp"
};
export function createHangingPaperLanternCluster() { return buildRecipe({
  "title": "Hanging Paper Lantern Cluster",
  "dimensions": [
    1.64,
    2.47,
    1.31
  ],
  "parts": [
    {
      "t": "box",
      "n": "display-base",
      "p": [
        0,
        0.09,
        0
      ],
      "s": [
        1.19,
        0.18,
        0.61
      ],
      "c": 9924945
    },
    {
      "t": "rod",
      "n": "upper-suspension-beam",
      "from": [
        -0.77,
        2.39,
        0
      ],
      "to": [
        0.77,
        2.39,
        0
      ],
      "r": 0.045,
      "c": 9924945
    },
    {
      "t": "rod",
      "n": "hanging-cord-0",
      "from": [
        -0.65,
        2.39,
        0
      ],
      "to": [
        -0.65,
        1.67,
        0
      ],
      "r": 0.014,
      "c": 3752778
    },
    {
      "t": "sphere",
      "n": "paper-lantern-0",
      "p": [
        -0.65,
        1.4,
        0
      ],
      "s": [
        0.35,
        0.45,
        0.34
      ],
      "c": 12808037
    },
    {
      "t": "cylinder",
      "n": "lantern-top-0",
      "p": [
        -0.65,
        1.69,
        0
      ],
      "s": [
        0.17,
        0.04,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "cylinder",
      "n": "lantern-bottom-0",
      "p": [
        -0.65,
        1.13,
        0
      ],
      "s": [
        0.17,
        0.05,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "rod",
      "n": "tassel-0",
      "from": [
        -0.65,
        1.1199999999999999,
        0
      ],
      "to": [
        -0.65,
        0.7199999999999999,
        0
      ],
      "r": 0.015,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "hanging-cord-1",
      "from": [
        -0.33,
        2.39,
        0
      ],
      "to": [
        -0.33,
        1.8499999999999999,
        0
      ],
      "r": 0.014,
      "c": 3752778
    },
    {
      "t": "sphere",
      "n": "paper-lantern-1",
      "p": [
        -0.33,
        1.5799999999999998,
        0
      ],
      "s": [
        0.35,
        0.45,
        0.34
      ],
      "c": 13738334
    },
    {
      "t": "cylinder",
      "n": "lantern-top-1",
      "p": [
        -0.33,
        1.8699999999999999,
        0
      ],
      "s": [
        0.17,
        0.04,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "cylinder",
      "n": "lantern-bottom-1",
      "p": [
        -0.33,
        1.3099999999999998,
        0
      ],
      "s": [
        0.17,
        0.05,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "rod",
      "n": "tassel-1",
      "from": [
        -0.33,
        1.2999999999999998,
        0
      ],
      "to": [
        -0.33,
        0.8999999999999998,
        0
      ],
      "r": 0.015,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "hanging-cord-2",
      "from": [
        -0.010000000000000009,
        2.39,
        0
      ],
      "to": [
        -0.010000000000000009,
        2.03,
        0
      ],
      "r": 0.014,
      "c": 3752778
    },
    {
      "t": "sphere",
      "n": "paper-lantern-2",
      "p": [
        -0.010000000000000009,
        1.7599999999999998,
        0
      ],
      "s": [
        0.35,
        0.45,
        0.34
      ],
      "c": 12808037
    },
    {
      "t": "cylinder",
      "n": "lantern-top-2",
      "p": [
        -0.010000000000000009,
        2.05,
        0
      ],
      "s": [
        0.17,
        0.04,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "cylinder",
      "n": "lantern-bottom-2",
      "p": [
        -0.010000000000000009,
        1.4899999999999998,
        0
      ],
      "s": [
        0.17,
        0.05,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "rod",
      "n": "tassel-2",
      "from": [
        -0.010000000000000009,
        1.4799999999999998,
        0
      ],
      "to": [
        -0.010000000000000009,
        1.0799999999999996,
        0
      ],
      "r": 0.015,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "hanging-cord-3",
      "from": [
        0.30999999999999994,
        2.39,
        0
      ],
      "to": [
        0.30999999999999994,
        1.67,
        0
      ],
      "r": 0.014,
      "c": 3752778
    },
    {
      "t": "sphere",
      "n": "paper-lantern-3",
      "p": [
        0.30999999999999994,
        1.4,
        0
      ],
      "s": [
        0.35,
        0.45,
        0.34
      ],
      "c": 13738334
    },
    {
      "t": "cylinder",
      "n": "lantern-top-3",
      "p": [
        0.30999999999999994,
        1.69,
        0
      ],
      "s": [
        0.17,
        0.04,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "cylinder",
      "n": "lantern-bottom-3",
      "p": [
        0.30999999999999994,
        1.13,
        0
      ],
      "s": [
        0.17,
        0.05,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "rod",
      "n": "tassel-3",
      "from": [
        0.30999999999999994,
        1.1199999999999999,
        0
      ],
      "to": [
        0.30999999999999994,
        0.7199999999999999,
        0
      ],
      "r": 0.015,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "hanging-cord-4",
      "from": [
        0.63,
        2.39,
        0
      ],
      "to": [
        0.63,
        1.8499999999999999,
        0
      ],
      "r": 0.014,
      "c": 3752778
    },
    {
      "t": "sphere",
      "n": "paper-lantern-4",
      "p": [
        0.63,
        1.5799999999999998,
        0
      ],
      "s": [
        0.35,
        0.45,
        0.34
      ],
      "c": 12808037
    },
    {
      "t": "cylinder",
      "n": "lantern-top-4",
      "p": [
        0.63,
        1.8699999999999999,
        0
      ],
      "s": [
        0.17,
        0.04,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "cylinder",
      "n": "lantern-bottom-4",
      "p": [
        0.63,
        1.3099999999999998,
        0
      ],
      "s": [
        0.17,
        0.05,
        0.17
      ],
      "c": 13149548
    },
    {
      "t": "rod",
      "n": "tassel-4",
      "from": [
        0.63,
        1.2999999999999998,
        0
      ],
      "to": [
        0.63,
        0.8999999999999998,
        0
      ],
      "r": 0.015,
      "c": 12348255
    },
    {
      "t": "box",
      "n": "suspension-ceiling",
      "p": [
        0,
        2.45,
        0
      ],
      "s": [
        1.59,
        0.1,
        1.29
      ],
      "c": 10069413
    }
  ]
}); }
