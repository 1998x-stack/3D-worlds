import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Modular Rail Maintenance Cart. 轨距车轮、检修平台、线卷和警示条. Not physically print-tested. */
export const assetMeta = {
  "id": "vehicles.modular-rail-maintenance-cart.001",
  "slug": "modular-rail-maintenance-cart",
  "title": "Modular Rail Maintenance Cart",
  "title_zh": "模块化轨道检修车",
  "summary": "Compact maintenance rail cart with removable tool pod and coil cable reel",
  "category": "vehicles",
  "tags": [
    "modular",
    "rail",
    "maintenance",
    "cart",
    "vehicles",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.39,
    0.28,
    0.26
  ],
  "generator": "createModularRailMaintenanceCart",
  "source_path": "src/models/modular_rail_maintenance_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/modular-rail-maintenance-cart.webp",
  "accent": "#d4a27a",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createModularRailMaintenanceCart() {
  return buildMarketV15({
  "title": "Modular Rail Maintenance Cart",
  "dimensions": [
    0.39,
    0.28,
    0.26
  ],
  "accent": "#d4a27a",
  "body": [
    [
      "box",
      "body",
      [
        0,
        0.63,
        0
      ],
      [
        1.8,
        0.29,
        0.99
      ],
      "primary",
      "matte",
      null
    ],
    [
      "box",
      "base-frame",
      [
        0,
        0.42,
        0
      ],
      [
        2.1,
        0.15,
        1.1
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "front-wheel-axle",
      [
        -0.74,
        0.19,
        0
      ],
      [
        0.36,
        0.35,
        1
      ],
      "dark",
      "metal",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "cylinder",
      "rear-wheel-axle",
      [
        0.73,
        0.19,
        0
      ],
      [
        0.36,
        0.35,
        1
      ],
      "dark",
      "metal",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "box",
      "tool-cabinet",
      [
        -0.38,
        1.08,
        0
      ],
      [
        0.86,
        0.72,
        0.8
      ],
      "secondary",
      "matte",
      null
    ],
    [
      "cylinder",
      "cable-reel",
      [
        0.64,
        1.24,
        0
      ],
      [
        0.69,
        0.23,
        0.7
      ],
      "wood",
      "rubber",
      [
        1.5707963267948966,
        0,
        0
      ]
    ],
    [
      "box",
      "warning-cap",
      [
        0,
        1.65,
        0
      ],
      [
        1.74,
        0.12,
        0.82
      ],
      "contrast",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "line",
      "n": "tool-door",
      "t": "box",
      "count": 6,
      "o": [
        -0.76,
        1,
        0.41
      ],
      "d": [
        0.15,
        0,
        0
      ],
      "s": [
        0.12,
        0.42,
        0.05
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "radial",
      "n": "coil-detail",
      "t": "torus",
      "count": 8,
      "o": [
        0.64,
        1.24,
        0
      ],
      "r": 0.21,
      "s": [
        0.65,
        0.09,
        0.65
      ],
      "c": "light",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "hazard-stripe",
      "t": "box",
      "count": 7,
      "o": [
        -0.77,
        1.69,
        0.19
      ],
      "d": [
        0.26,
        0,
        0
      ],
      "s": [
        0.13,
        0.012,
        0.33
      ],
      "c": "dark",
      "f": "matte"
    }
  ]
});
}
