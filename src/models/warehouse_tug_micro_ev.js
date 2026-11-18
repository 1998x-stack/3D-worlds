import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Warehouse Tug Micro EV; stylized visual prototype only. */
export const assetMeta = {
  "id": "vehicles.warehouse-tug-micro-ev.001",
  "slug": "warehouse-tug-micro-ev",
  "title": "Warehouse Tug Micro EV",
  "title_zh": "仓储牵引微型车",
  "summary": "Original warehouse tug micro ev study with wheels and cab assemblies and individually named functional details",
  "category": "vehicles",
  "tags": [
    "warehouse",
    "tug",
    "micro",
    "vehicles",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.41,
    0.22,
    0.24
  ],
  "generator": "createWarehouseTugMicroEv",
  "source_path": "src/models/warehouse_tug_micro_ev.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/warehouse-tug-micro-ev.webp",
  "accent": "#e1ad60",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createWarehouseTugMicroEv() { return buildRecipe({
  "title": "Warehouse Tug Micro EV",
  "dimensions": [
    0.41,
    0.22,
    0.24
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 6850734,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 14789984,
      "finish": "anodized"
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-0",
      "p": [
        -0.62,
        0.39,
        0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-0",
      "p": [
        -0.62,
        0.39,
        0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-1",
      "p": [
        -0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-1",
      "p": [
        -0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-2",
      "p": [
        0.62,
        0.39,
        0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-2",
      "p": [
        0.62,
        0.39,
        0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-tire-3",
      "p": [
        0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.48,
        0.14,
        0.48
      ],
      "c": 2437178,
      "finish": "rubber",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "wheels-0-hub-3",
      "p": [
        0.62,
        0.39,
        -0.59
      ],
      "s": [
        0.18,
        0.15,
        0.18
      ],
      "c": 11847118,
      "finish": "metal",
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rounded-box",
      "n": "wheels-0-chassis",
      "p": [
        0,
        0.61,
        0
      ],
      "s": [
        1.79,
        0.26,
        0.95
      ],
      "c": 6850734,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-cabin",
      "p": [
        -0.31,
        1.05,
        0
      ],
      "s": [
        0.87,
        0.7,
        0.82
      ],
      "c": 14789984,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-windshield",
      "p": [
        -0.76,
        1.09,
        0
      ],
      "s": [
        0.05,
        0.39,
        0.66
      ],
      "c": 7522523,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-0",
      "p": [
        0.57,
        0.82,
        -0.45
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-1",
      "p": [
        0.57,
        0.82,
        -0.33
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-2",
      "p": [
        0.57,
        0.82,
        -0.21000000000000002
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-3",
      "p": [
        0.57,
        0.82,
        -0.09000000000000002
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-4",
      "p": [
        0.57,
        0.82,
        0.02999999999999997
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-5",
      "p": [
        0.57,
        0.82,
        0.14999999999999997
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-6",
      "p": [
        0.57,
        0.82,
        0.26999999999999996
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "cab-1-rear-grille-7",
      "p": [
        0.57,
        0.82,
        0.38999999999999996
      ],
      "s": [
        0.42,
        0.044,
        0.045
      ],
      "c": 2569280,
      "finish": "matte"
    }
  ]
}); }
