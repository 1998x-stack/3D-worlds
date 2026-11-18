import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Folding Warehouse Dolly; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "vehicles.folding-warehouse-dolly.001",
  "slug": "folding-warehouse-dolly",
  "title": "Folding Warehouse Dolly",
  "title_zh": "可折叠仓储手推车",
  "summary": "Two-wheel foldaway hand truck with noseplate and locking braces",
  "category": "vehicles",
  "tags": [
    "folding",
    "warehouse",
    "dolly",
    "vehicles",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.34,
    0.3,
    0.19
  ],
  "generator": "createFoldingWarehouseDolly",
  "source_path": "src/models/folding_warehouse_dolly.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/folding-warehouse-dolly.webp",
  "accent": "#6587ad",
  "provenance_note": "Original procedural scene based on functional design research. Channel: ebay; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createFoldingWarehouseDolly() { return buildRecipe({
  "title": "Folding Warehouse Dolly",
  "dimensions": [
    0.34,
    0.3,
    0.19
  ],
  "parts": [
    {
      "t": "rod",
      "n": "upright--1",
      "from": [
        -0.58,
        0.28,
        -0.28
      ],
      "to": [
        -0.59,
        1.87,
        -0.28
      ],
      "r": 0.061,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "support-brace--1",
      "from": [
        -0.58,
        0.27,
        0.26
      ],
      "to": [
        -0.55,
        1.45,
        -0.28
      ],
      "r": 0.045,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rear-wheel--1",
      "p": [
        -0.76,
        0.31,
        -0.37
      ],
      "s": [
        0.53,
        0.15,
        0.53
      ],
      "c": 2372666,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub--1",
      "p": [
        -0.76,
        0.31,
        -0.37
      ],
      "s": [
        0.21,
        0.16,
        0.21
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge--1",
      "p": [
        -0.57,
        0.33,
        0.02
      ],
      "s": [
        0.22,
        0.15,
        0.22
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "upright-1",
      "from": [
        0.58,
        0.28,
        -0.28
      ],
      "to": [
        0.59,
        1.87,
        -0.28
      ],
      "r": 0.061,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "support-brace-1",
      "from": [
        0.58,
        0.27,
        0.26
      ],
      "to": [
        0.55,
        1.45,
        -0.28
      ],
      "r": 0.045,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "rear-wheel-1",
      "p": [
        0.76,
        0.31,
        -0.37
      ],
      "s": [
        0.53,
        0.15,
        0.53
      ],
      "c": 2372666,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "hub-1",
      "p": [
        0.76,
        0.31,
        -0.37
      ],
      "s": [
        0.21,
        0.16,
        0.21
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "hinge-1",
      "p": [
        0.57,
        0.33,
        0.02
      ],
      "s": [
        0.22,
        0.15,
        0.22
      ],
      "c": 15910009,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "top-handle",
      "from": [
        -0.59,
        1.91,
        -0.28
      ],
      "to": [
        0.59,
        1.91,
        -0.28
      ],
      "r": 0.064,
      "c": 2503997,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "folding-noseplate",
      "p": [
        0,
        0.16,
        0.44
      ],
      "s": [
        1.48,
        0.15,
        0.88
      ],
      "c": 12950109,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-0",
      "p": [
        -0.68,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-1",
      "p": [
        -0.568,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-2",
      "p": [
        -0.456,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-3",
      "p": [
        -0.344,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-4",
      "p": [
        -0.232,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-5",
      "p": [
        -0.12,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-6",
      "p": [
        -0.008,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-7",
      "p": [
        0.104,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-8",
      "p": [
        0.216,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-9",
      "p": [
        0.328,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-10",
      "p": [
        0.44,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-11",
      "p": [
        0.552,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "plate-grip-12",
      "p": [
        0.664,
        0.26,
        0.44
      ],
      "s": [
        0.052,
        0.035,
        0.73
      ],
      "c": 2372666,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "back-strap-0",
      "p": [
        0,
        0.46,
        -0.29
      ],
      "s": [
        1.21,
        0.055,
        0.065
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "back-strap-1",
      "p": [
        0,
        0.69,
        -0.29
      ],
      "s": [
        1.21,
        0.055,
        0.065
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "back-strap-2",
      "p": [
        0,
        0.92,
        -0.29
      ],
      "s": [
        1.21,
        0.055,
        0.065
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "back-strap-3",
      "p": [
        0,
        1.15,
        -0.29
      ],
      "s": [
        1.21,
        0.055,
        0.065
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "back-strap-4",
      "p": [
        0,
        1.38,
        -0.29
      ],
      "s": [
        1.21,
        0.055,
        0.065
      ],
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "back-strap-5",
      "p": [
        0,
        1.61,
        -0.29
      ],
      "s": [
        1.21,
        0.055,
        0.065
      ],
      "c": 12504530,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
