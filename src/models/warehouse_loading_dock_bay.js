import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Warehouse Loading Dock Bay / 仓储装卸月台模块. */
export const assetMeta = {
  "id": "architecture.warehouse-loading-dock-bay.001",
  "slug": "warehouse-loading-dock-bay",
  "title": "Warehouse Loading Dock Bay",
  "title_zh": "仓储装卸月台模块",
  "summary": "Industrial loading dock with roller gate, bumper pads, ramp and dock leveler",
  "category": "architecture",
  "tags": [
    "warehouse",
    "loading",
    "dock",
    "bay",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.74,
    3.25,
    3.1
  ],
  "generator": "createWarehouseLoadingDockBay",
  "source_path": "src/models/warehouse_loading_dock_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/warehouse-loading-dock-bay.webp",
  "accent": "#b5cdd0"
};
export function createWarehouseLoadingDockBay() { return buildRecipe({
  "title": "Warehouse Loading Dock Bay",
  "dimensions": [
    3.74,
    3.25,
    3.1
  ],
  "parts": [
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-industrial-loading-dock-floor",
      "p": [
        0,
        0.18,
        0
      ],
      "s": [
        3.42,
        0.31,
        2.87
      ],
      "c": 6520458
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-large-warehouse-concrete-backwall",
      "p": [
        0,
        1.65,
        -1.24
      ],
      "s": [
        3.39,
        2.83,
        0.21
      ],
      "c": 12363651
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-steel-rollup-warehouse-door",
      "p": [
        0,
        1.42,
        -1.13
      ],
      "s": [
        2.06,
        2.18,
        0.1
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-0",
      "p": [
        0,
        0.35,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-1",
      "p": [
        0,
        0.53,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-2",
      "p": [
        0,
        0.71,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-3",
      "p": [
        0,
        0.89,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-4",
      "p": [
        0,
        1.0699999999999998,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-5",
      "p": [
        0,
        1.25,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-6",
      "p": [
        0,
        1.4300000000000002,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-7",
      "p": [
        0,
        1.6099999999999999,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-8",
      "p": [
        0,
        1.79,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-9",
      "p": [
        0,
        1.9699999999999998,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-10",
      "p": [
        0,
        2.15,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-11",
      "p": [
        0,
        2.33,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-rolling-door-louver-12",
      "p": [
        0,
        2.5100000000000002,
        -1.065
      ],
      "s": [
        1.94,
        0.046,
        0.03
      ],
      "c": 6445127
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-truck-unloading-leveler-plate",
      "p": [
        0,
        0.4,
        0.31
      ],
      "s": [
        1.67,
        0.12,
        1.21
      ],
      "c": 6520458,
      "rot": [
        0.05,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-truck-protection-bumper--1",
      "p": [
        -1.15,
        0.63,
        -1.04
      ],
      "s": [
        0.26,
        0.48,
        0.2
      ],
      "c": 6445127
    },
    {
      "t": "rod",
      "n": "warehouse-loading-dock-bay-loading-handrail--1",
      "from": [
        -1.51,
        0.42,
        0.43
      ],
      "to": [
        -1.51,
        1.53,
        0.43
      ],
      "r": 0.045,
      "c": 6520458
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-truck-protection-bumper-1",
      "p": [
        1.15,
        0.63,
        -1.04
      ],
      "s": [
        0.26,
        0.48,
        0.2
      ],
      "c": 6445127
    },
    {
      "t": "rod",
      "n": "warehouse-loading-dock-bay-loading-handrail-1",
      "from": [
        1.51,
        0.42,
        0.43
      ],
      "to": [
        1.51,
        1.53,
        0.43
      ],
      "r": 0.045,
      "c": 6520458
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-pallet-dock-warning-chevron-0",
      "p": [
        -1.2,
        0.35,
        1.23
      ],
      "s": [
        0.18,
        0.02,
        0.27
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-pallet-dock-warning-chevron-1",
      "p": [
        -0.72,
        0.35,
        1.23
      ],
      "s": [
        0.18,
        0.02,
        0.27
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-pallet-dock-warning-chevron-2",
      "p": [
        -0.24,
        0.35,
        1.23
      ],
      "s": [
        0.18,
        0.02,
        0.27
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-pallet-dock-warning-chevron-3",
      "p": [
        0.24,
        0.35,
        1.23
      ],
      "s": [
        0.18,
        0.02,
        0.27
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-pallet-dock-warning-chevron-4",
      "p": [
        0.72,
        0.35,
        1.23
      ],
      "s": [
        0.18,
        0.02,
        0.27
      ],
      "c": 11914704
    },
    {
      "t": "box",
      "n": "warehouse-loading-dock-bay-pallet-dock-warning-chevron-5",
      "p": [
        1.2,
        0.35,
        1.23
      ],
      "s": [
        0.18,
        0.02,
        0.27
      ],
      "c": 11914704
    }
  ]
}); }
