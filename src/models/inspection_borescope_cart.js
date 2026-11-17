import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Inspection Borescope Cart / 工业内窥镜移动检测车. */
export const assetMeta = {
  "id": "tools.inspection-borescope-cart.001",
  "slug": "inspection-borescope-cart",
  "title": "Inspection Borescope Cart",
  "title_zh": "工业内窥镜移动检测车",
  "summary": "Mobile inspection cart with flexible probe camera, display and cable reel",
  "category": "tools",
  "tags": [
    "inspection",
    "borescope",
    "cart",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.15,
    1.58,
    0.82
  ],
  "generator": "createInspectionBorescopeCart",
  "source_path": "src/models/inspection_borescope_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/inspection-borescope-cart.webp",
  "accent": "#e2a956"
};
export function createInspectionBorescopeCart() { return buildRecipe({
  "title": "Inspection Borescope Cart",
  "dimensions": [
    1.15,
    1.58,
    0.82
  ],
  "parts": [
    {
      "t": "box",
      "n": "mobile-borescope-utility-cart",
      "p": [
        0,
        0.6,
        0
      ],
      "s": [
        0.85,
        1.08,
        0.64
      ],
      "c": 6979987
    },
    {
      "t": "cylinder",
      "n": "inspection-wheel--0.36--0.27",
      "p": [
        -0.36,
        0.1,
        -0.27
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 2769748,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "inspection-wheel--0.36-0.27",
      "p": [
        -0.36,
        0.1,
        0.27
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 2769748,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "inspection-wheel-0.36--0.27",
      "p": [
        0.36,
        0.1,
        -0.27
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 2769748,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "inspection-wheel-0.36-0.27",
      "p": [
        0.36,
        0.1,
        0.27
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 2769748,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "inspection-lcd-screen",
      "p": [
        0,
        1.25,
        -0.19
      ],
      "s": [
        0.64,
        0.41,
        0.07
      ],
      "c": 14854486
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-0",
      "p": [
        0.45,
        0.6,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-1",
      "p": [
        0.45,
        0.667,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-2",
      "p": [
        0.45,
        0.734,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-3",
      "p": [
        0.45,
        0.8009999999999999,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-4",
      "p": [
        0.45,
        0.868,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-5",
      "p": [
        0.45,
        0.935,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-6",
      "p": [
        0.45,
        1.002,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-7",
      "p": [
        0.45,
        1.069,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "torus",
      "n": "coiled-probe-winding-8",
      "p": [
        0.45,
        1.1360000000000001,
        0.11
      ],
      "s": [
        0.3,
        0.06,
        0.3
      ],
      "c": 12765126,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "rod",
      "n": "flexible-borescope-cable",
      "from": [
        0.41,
        0.65,
        0.17
      ],
      "to": [
        0.75,
        1,
        0.35
      ],
      "r": 0.021,
      "c": 2769748
    },
    {
      "t": "sphere",
      "n": "camera-probe-tip",
      "p": [
        0.75,
        1,
        0.35
      ],
      "s": [
        0.085,
        0.07,
        0.09
      ],
      "c": 14854486
    },
    {
      "t": "box",
      "n": "worklight-module",
      "p": [
        0,
        0.83,
        0.32
      ],
      "s": [
        0.48,
        0.18,
        0.08
      ],
      "c": 12765126
    }
  ]
}); }
