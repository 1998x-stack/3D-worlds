import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Solar Herb Dehydrator Cabinet / 太阳能香草烘干柜. */
export const assetMeta = {
  "id": "kitchen.solar-herb-dehydrator-cabinet.001",
  "slug": "solar-herb-dehydrator-cabinet",
  "title": "Solar Herb Dehydrator Cabinet",
  "title_zh": "太阳能香草烘干柜",
  "summary": "Solar-powered herb drying cabinet with stacked mesh trays, exhaust chimney and panel",
  "category": "kitchen",
  "tags": [
    "solar",
    "herb",
    "dehydrator",
    "cabinet",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.24,
    1.88,
    1.02
  ],
  "generator": "createSolarHerbDehydratorCabinet",
  "source_path": "src/models/solar_herb_dehydrator_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/solar-herb-dehydrator-cabinet.webp",
  "accent": "#344a58"
};
export function createSolarHerbDehydratorCabinet() { return buildRecipe({
  "title": "Solar Herb Dehydrator Cabinet",
  "dimensions": [
    1.24,
    1.88,
    1.02
  ],
  "parts": [
    {
      "t": "box",
      "n": "solar-food-dehydrator-frame",
      "p": [
        0,
        0.92,
        0
      ],
      "s": [
        1.06,
        1.75,
        0.85
      ],
      "c": 13878441
    },
    {
      "t": "box",
      "n": "mesh-drying-tray-0",
      "p": [
        0,
        0.28,
        0.06
      ],
      "s": [
        0.95,
        0.035,
        0.66
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-0-0",
      "p": [
        -0.29,
        0.35,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-0-1",
      "p": [
        0,
        0.35,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-0-2",
      "p": [
        0.29,
        0.35,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "mesh-drying-tray-1",
      "p": [
        0,
        0.51,
        0.06
      ],
      "s": [
        0.95,
        0.035,
        0.66
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-1-0",
      "p": [
        -0.29,
        0.58,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-1-1",
      "p": [
        0,
        0.58,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-1-2",
      "p": [
        0.29,
        0.58,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "mesh-drying-tray-2",
      "p": [
        0,
        0.74,
        0.06
      ],
      "s": [
        0.95,
        0.035,
        0.66
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-2-0",
      "p": [
        -0.29,
        0.81,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-2-1",
      "p": [
        0,
        0.81,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-2-2",
      "p": [
        0.29,
        0.81,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "mesh-drying-tray-3",
      "p": [
        0,
        0.9700000000000001,
        0.06
      ],
      "s": [
        0.95,
        0.035,
        0.66
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-3-0",
      "p": [
        -0.29,
        1.04,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-3-1",
      "p": [
        0,
        1.04,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-3-2",
      "p": [
        0.29,
        1.04,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "mesh-drying-tray-4",
      "p": [
        0,
        1.2000000000000002,
        0.06
      ],
      "s": [
        0.95,
        0.035,
        0.66
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-4-0",
      "p": [
        -0.29,
        1.27,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-4-1",
      "p": [
        0,
        1.27,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-4-2",
      "p": [
        0.29,
        1.27,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "mesh-drying-tray-5",
      "p": [
        0,
        1.4300000000000002,
        0.06
      ],
      "s": [
        0.95,
        0.035,
        0.66
      ],
      "c": 15380324
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-5-0",
      "p": [
        -0.29,
        1.5,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-5-1",
      "p": [
        0,
        1.5,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "sphere",
      "n": "dry-herb-cluster-5-2",
      "p": [
        0.29,
        1.5,
        0.08
      ],
      "s": [
        0.15,
        0.06,
        0.14
      ],
      "c": 6652044
    },
    {
      "t": "box",
      "n": "protective-door-window",
      "p": [
        0,
        1.01,
        0.45
      ],
      "s": [
        0.82,
        1.32,
        0.03
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "solar-pv-panel",
      "p": [
        0,
        1.91,
        -0.05
      ],
      "s": [
        0.9,
        0.08,
        0.6
      ],
      "c": 6652044,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-pv-cell-0",
      "p": [
        -0.3,
        2,
        -0.13
      ],
      "s": [
        0.26,
        0.027,
        0.2
      ],
      "c": 15380324,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-pv-cell-1",
      "p": [
        0,
        2,
        -0.13
      ],
      "s": [
        0.26,
        0.027,
        0.2
      ],
      "c": 15380324,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-pv-cell-2",
      "p": [
        0.3,
        2,
        -0.13
      ],
      "s": [
        0.26,
        0.027,
        0.2
      ],
      "c": 15380324,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-pv-cell-3",
      "p": [
        -0.3,
        2,
        0.13
      ],
      "s": [
        0.26,
        0.027,
        0.2
      ],
      "c": 15380324,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-pv-cell-4",
      "p": [
        0,
        2,
        0.13
      ],
      "s": [
        0.26,
        0.027,
        0.2
      ],
      "c": 15380324,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-pv-cell-5",
      "p": [
        0.3,
        2,
        0.13
      ],
      "s": [
        0.26,
        0.027,
        0.2
      ],
      "c": 15380324,
      "rot": [
        0.35,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "moisture-exhaust-chimney",
      "p": [
        0.4,
        1.79,
        -0.32
      ],
      "s": [
        0.17,
        0.27,
        0.17
      ],
      "c": 3426904
    }
  ]
}); }
