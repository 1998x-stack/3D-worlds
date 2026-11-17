import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Limestone Karst Spire Cluster / 喀斯特石柱群. */
export const assetMeta = {
  "id": "nature.limestone-karst-spire-cluster.001",
  "slug": "limestone-karst-spire-cluster",
  "title": "Limestone Karst Spire Cluster",
  "title_zh": "喀斯特石柱群",
  "summary": "Limestone karst towers with layered cliff strata and loose scree",
  "category": "nature",
  "tags": [
    "limestone",
    "karst",
    "spire",
    "cluster",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.1,
    3.45,
    2.66
  ],
  "generator": "createLimestoneKarstSpireCluster",
  "source_path": "src/models/limestone_karst_spire_cluster.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/limestone-karst-spire-cluster.webp",
  "accent": "#77986b"
};
export function createLimestoneKarstSpireCluster() { return buildRecipe({
  "title": "Limestone Karst Spire Cluster",
  "dimensions": [
    3.1,
    3.45,
    2.66
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "karst-land-pedestal",
      "p": [
        0,
        0.17,
        0
      ],
      "s": [
        2.82,
        0.26,
        2.21
      ],
      "c": 10259062
    },
    {
      "t": "cone",
      "n": "limestone-spire-0",
      "p": [
        0,
        0.8696,
        0.85
      ],
      "s": [
        0.48,
        1.23,
        0.48
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-0-0",
      "p": [
        0,
        0.46,
        0.85
      ],
      "s": [
        0.36,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-0-1",
      "p": [
        0,
        0.7552,
        0.85
      ],
      "s": [
        0.313,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-0-2",
      "p": [
        0,
        1.0504,
        0.85
      ],
      "s": [
        0.266,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "cone",
      "n": "limestone-spire-1",
      "p": [
        0.970422228060165,
        1.1400000000000001,
        -0.2178642719933943
      ],
      "s": [
        0.48,
        1.75,
        0.48
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-1-0",
      "p": [
        0.970422228060165,
        0.46,
        -0.2178642719933943
      ],
      "s": [
        0.36,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-1-1",
      "p": [
        0.970422228060165,
        0.88,
        -0.2178642719933943
      ],
      "s": [
        0.313,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-1-2",
      "p": [
        0.970422228060165,
        1.3,
        -0.2178642719933943
      ],
      "s": [
        0.266,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "cone",
      "n": "limestone-spire-2",
      "p": [
        -0.384071408762313,
        1.4104,
        -0.73831802115009
      ],
      "s": [
        0.48,
        2.27,
        0.48
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-2-0",
      "p": [
        -0.384071408762313,
        0.46,
        -0.73831802115009
      ],
      "s": [
        0.36,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-2-1",
      "p": [
        -0.384071408762313,
        1.0048,
        -0.73831802115009
      ],
      "s": [
        0.313,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-2-2",
      "p": [
        -0.384071408762313,
        1.5495999999999999,
        -0.73831802115009
      ],
      "s": [
        0.266,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "cone",
      "n": "limestone-spire-3",
      "p": [
        -0.8184153564497153,
        0.8696,
        0.5963421971168481
      ],
      "s": [
        0.48,
        1.23,
        0.48
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-3-0",
      "p": [
        -0.8184153564497153,
        0.46,
        0.5963421971168481
      ],
      "s": [
        0.36,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-3-1",
      "p": [
        -0.8184153564497153,
        0.7552,
        0.5963421971168481
      ],
      "s": [
        0.313,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-3-2",
      "p": [
        -0.8184153564497153,
        1.0504,
        0.5963421971168481
      ],
      "s": [
        0.266,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "cone",
      "n": "limestone-spire-4",
      "p": [
        0.7079818982537642,
        1.1400000000000001,
        0.43262000083525864
      ],
      "s": [
        0.48,
        1.75,
        0.48
      ],
      "c": 7837803
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-4-0",
      "p": [
        0.7079818982537642,
        0.46,
        0.43262000083525864
      ],
      "s": [
        0.36,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-4-1",
      "p": [
        0.7079818982537642,
        0.88,
        0.43262000083525864
      ],
      "s": [
        0.313,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-4-2",
      "p": [
        0.7079818982537642,
        1.3,
        0.43262000083525864
      ],
      "s": [
        0.266,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "cone",
      "n": "limestone-spire-5",
      "p": [
        0.5382119592294274,
        1.4104,
        -0.8181126477798017
      ],
      "s": [
        0.48,
        2.27,
        0.48
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-5-0",
      "p": [
        0.5382119592294274,
        0.46,
        -0.8181126477798017
      ],
      "s": [
        0.36,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-5-1",
      "p": [
        0.5382119592294274,
        1.0048,
        -0.8181126477798017
      ],
      "s": [
        0.313,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "karst-rock-stratum-5-2",
      "p": [
        0.5382119592294274,
        1.5495999999999999,
        -0.8181126477798017
      ],
      "s": [
        0.266,
        0.11,
        0.31
      ],
      "c": 10259062
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-0",
      "p": [
        -1.2,
        0.12,
        -0.77
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-1",
      "p": [
        -0.8099999999999999,
        0.12,
        0.92
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-2",
      "p": [
        -0.41999999999999993,
        0.12,
        -0.77
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-3",
      "p": [
        -0.030000000000000027,
        0.12,
        0.92
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-4",
      "p": [
        0.3600000000000001,
        0.12,
        -0.77
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-5",
      "p": [
        0.7500000000000002,
        0.12,
        0.92
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    },
    {
      "t": "sphere",
      "n": "eroded-scree-rock-6",
      "p": [
        1.14,
        0.12,
        -0.77
      ],
      "s": [
        0.25,
        0.16,
        0.18
      ],
      "c": 12955786
    }
  ]
}); }
