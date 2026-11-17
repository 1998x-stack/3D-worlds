import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Industrial Tool Shadowboard Cabinet / 工业工具影子板柜. */
export const assetMeta = {
  "id": "furniture.industrial-tool-shadowboard-cabinet.001",
  "slug": "industrial-tool-shadowboard-cabinet",
  "title": "Industrial Tool Shadowboard Cabinet",
  "title_zh": "工业工具影子板柜",
  "summary": "Workshop cabinet with perforated pegboard, silhouettes, locking drawers and modular holders",
  "category": "furniture",
  "tags": [
    "industrial",
    "tool",
    "shadowboard",
    "cabinet",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.85,
    2.12,
    0.72
  ],
  "generator": "createIndustrialToolShadowboardCabinet",
  "source_path": "src/models/industrial_tool_shadowboard_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/industrial-tool-shadowboard-cabinet.webp",
  "accent": "#e5d0ae"
};
export function createIndustrialToolShadowboardCabinet() { return buildRecipe({
  "title": "Industrial Tool Shadowboard Cabinet",
  "dimensions": [
    1.85,
    2.12,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-workshop-tall-storage-cabinet",
      "p": [
        0,
        1.06,
        0
      ],
      "s": [
        1.72,
        2,
        0.58
      ],
      "c": 6059912
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-shadowboard-backplane",
      "p": [
        0,
        1.51,
        0.31
      ],
      "s": [
        1.55,
        0.87,
        0.055
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-0",
      "p": [
        -0.67,
        1.31,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-1",
      "p": [
        -0.4,
        1.31,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-2",
      "p": [
        -0.13,
        1.31,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-3",
      "p": [
        0.14,
        1.31,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-4",
      "p": [
        0.41000000000000003,
        1.31,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-5",
      "p": [
        0.68,
        1.31,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-6",
      "p": [
        -0.67,
        1.6,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-7",
      "p": [
        -0.4,
        1.6,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-8",
      "p": [
        -0.13,
        1.6,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-9",
      "p": [
        0.14,
        1.6,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-10",
      "p": [
        0.41000000000000003,
        1.6,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-tool-silhouette-slot-11",
      "p": [
        0.68,
        1.6,
        0.346
      ],
      "s": [
        0.2,
        0.19,
        0.016
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-lower-locking-drawer-0",
      "p": [
        -0.54,
        0.62,
        0.335
      ],
      "s": [
        0.46,
        0.23,
        0.042
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-lower-locking-drawer-1",
      "p": [
        0,
        0.62,
        0.335
      ],
      "s": [
        0.46,
        0.23,
        0.042
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-lower-locking-drawer-2",
      "p": [
        0.54,
        0.62,
        0.335
      ],
      "s": [
        0.46,
        0.23,
        0.042
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-lower-locking-drawer-3",
      "p": [
        -0.54,
        0.9199999999999999,
        0.335
      ],
      "s": [
        0.46,
        0.23,
        0.042
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-lower-locking-drawer-4",
      "p": [
        0,
        0.9199999999999999,
        0.335
      ],
      "s": [
        0.46,
        0.23,
        0.042
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "industrial-tool-shadowboard-cabinet-lower-locking-drawer-5",
      "p": [
        0.54,
        0.9199999999999999,
        0.335
      ],
      "s": [
        0.46,
        0.23,
        0.042
      ],
      "c": 15061166
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-0",
      "from": [
        -0.62,
        1.87,
        0.34
      ],
      "to": [
        -0.62,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-1",
      "from": [
        -0.42,
        1.87,
        0.34
      ],
      "to": [
        -0.42,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-2",
      "from": [
        -0.21999999999999997,
        1.87,
        0.34
      ],
      "to": [
        -0.21999999999999997,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-3",
      "from": [
        -0.019999999999999907,
        1.87,
        0.34
      ],
      "to": [
        -0.019999999999999907,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-4",
      "from": [
        0.18000000000000005,
        1.87,
        0.34
      ],
      "to": [
        0.18000000000000005,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-5",
      "from": [
        0.38,
        1.87,
        0.34
      ],
      "to": [
        0.38,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    },
    {
      "t": "rod",
      "n": "industrial-tool-shadowboard-cabinet-peg-tool-hook-6",
      "from": [
        0.5800000000000002,
        1.87,
        0.34
      ],
      "to": [
        0.5800000000000002,
        1.76,
        0.44
      ],
      "r": 0.014,
      "c": 4150112
    }
  ]
}); }
