import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Museum Modular Bench Island / 博物馆组合式休息座岛. */
export const assetMeta = {
  "id": "furniture.museum-modular-bench-island.001",
  "slug": "museum-modular-bench-island",
  "title": "Museum Modular Bench Island",
  "title_zh": "博物馆组合式休息座岛",
  "summary": "Public seating island with radial wooden benches, central planter and foot pads",
  "category": "furniture",
  "tags": [
    "museum",
    "modular",
    "bench",
    "island",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.42,
    0.95,
    1.62
  ],
  "generator": "createMuseumModularBenchIsland",
  "source_path": "src/models/museum_modular_bench_island.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/museum-modular-bench-island.webp",
  "accent": "#3f5360"
};
export function createMuseumModularBenchIsland() { return buildRecipe({
  "title": "Museum Modular Bench Island",
  "dimensions": [
    2.42,
    0.95,
    1.62
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "museum-modular-bench-island-seating-island-broad-plinth",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        1.84,
        0.25,
        1.32
      ],
      "c": 4150112
    },
    {
      "t": "cylinder",
      "n": "museum-modular-bench-island-indoor-planter-core",
      "p": [
        0,
        0.57,
        0
      ],
      "s": [
        0.66,
        0.63,
        0.66
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-0",
      "p": [
        0.69,
        0.44,
        0
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 15061166,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-0",
      "p": [
        0.3105,
        1.03,
        0
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-1",
      "p": [
        0.4879036790187178,
        0.44,
        0.48790367901871773
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 12950901,
      "rot": [
        0,
        0.7853981633974483,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-1",
      "p": [
        0.21955665555842302,
        1.03,
        0.219556655558423
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-2",
      "p": [
        4.2250314570583685e-17,
        0.44,
        0.69
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 15061166,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-2",
      "p": [
        1.901264155676266e-17,
        1.03,
        0.3105
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-3",
      "p": [
        -0.48790367901871773,
        0.44,
        0.4879036790187178
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 12950901,
      "rot": [
        0,
        2.356194490192345,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-3",
      "p": [
        -0.219556655558423,
        1.03,
        0.21955665555842302
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-4",
      "p": [
        -0.69,
        0.44,
        8.450062914116737e-17
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 15061166,
      "rot": [
        0,
        3.141592653589793,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-4",
      "p": [
        -0.3105,
        1.03,
        3.802528311352532e-17
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-5",
      "p": [
        -0.48790367901871784,
        0.44,
        -0.48790367901871773
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 12950901,
      "rot": [
        0,
        3.9269908169872414,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-5",
      "p": [
        -0.21955665555842302,
        1.03,
        -0.219556655558423
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-6",
      "p": [
        -1.2675094371175104e-16,
        0.44,
        -0.69
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 15061166,
      "rot": [
        0,
        4.71238898038469,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-6",
      "p": [
        -5.703792467028797e-17,
        1.03,
        -0.3105
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    },
    {
      "t": "box",
      "n": "museum-modular-bench-island-radial-bench-facet-7",
      "p": [
        0.4879036790187176,
        0.44,
        -0.48790367901871784
      ],
      "s": [
        0.51,
        0.14,
        0.36
      ],
      "c": 12950901,
      "rot": [
        0,
        5.497787143782138,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "museum-modular-bench-island-greenery-leaf-cluster-7",
      "p": [
        0.21955665555842294,
        1.03,
        -0.21955665555842302
      ],
      "s": [
        0.26,
        0.21,
        0.23
      ],
      "c": 6855280
    }
  ]
}); }
