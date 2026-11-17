import { buildRecipe } from './recipe_engine.js';
/** Mobile Kitchen Service Cart: individually authored procedural geometry. */
export const assetMeta = {
  "id": "kitchen.mobile-kitchen-service-cart.001",
  "slug": "mobile-kitchen-service-cart",
  "title": "Mobile Kitchen Service Cart",
  "title_zh": "厨房移动餐车",
  "summary": "Rolling two-tier service cart with handle, casters, stainless frame and utensils.",
  "category": "kitchen",
  "tags": [
    "cart",
    "kitchen",
    "service",
    "storage"
  ],
  "dimensions_m": [
    0.94,
    1.01,
    0.58
  ],
  "generator": "createMobileKitchenServiceCart",
  "source_path": "src/models/mobile_kitchen_service_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/mobile-kitchen-service-cart.webp"
};
export function createMobileKitchenServiceCart() {
 return buildRecipe({
  "title": "Mobile Kitchen Service Cart",
  "dimensions": [
    0.94,
    1.01,
    0.58
  ],
  "parts": [
    {
      "t": "box",
      "n": "upper-tray",
      "p": [
        0,
        0.89,
        0
      ],
      "s": [
        0.88,
        0.065,
        0.56
      ],
      "c": 11844280
    },
    {
      "t": "box",
      "n": "lower-tray",
      "p": [
        0,
        0.37,
        0
      ],
      "s": [
        0.82,
        0.055,
        0.53
      ],
      "c": 11844280
    },
    {
      "t": "rod",
      "n": "upright-0-0",
      "from": [
        -0.37,
        0.15,
        -0.23
      ],
      "to": [
        -0.37,
        0.94,
        -0.23
      ],
      "r": 0.022,
      "c": 8886427
    },
    {
      "t": "cylinder",
      "n": "caster-0-0",
      "p": [
        -0.37,
        0.11,
        -0.23
      ],
      "s": [
        0.14,
        0.065,
        0.14
      ],
      "c": 3160900,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "upright-0-1",
      "from": [
        -0.37,
        0.15,
        0.23
      ],
      "to": [
        -0.37,
        0.94,
        0.23
      ],
      "r": 0.022,
      "c": 8886427
    },
    {
      "t": "cylinder",
      "n": "caster-0-1",
      "p": [
        -0.37,
        0.11,
        0.23
      ],
      "s": [
        0.14,
        0.065,
        0.14
      ],
      "c": 3160900,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "upright-1-0",
      "from": [
        0.37,
        0.15,
        -0.23
      ],
      "to": [
        0.37,
        0.94,
        -0.23
      ],
      "r": 0.022,
      "c": 8886427
    },
    {
      "t": "cylinder",
      "n": "caster-1-0",
      "p": [
        0.37,
        0.11,
        -0.23
      ],
      "s": [
        0.14,
        0.065,
        0.14
      ],
      "c": 3160900,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "upright-1-1",
      "from": [
        0.37,
        0.15,
        0.23
      ],
      "to": [
        0.37,
        0.94,
        0.23
      ],
      "r": 0.022,
      "c": 8886427
    },
    {
      "t": "cylinder",
      "n": "caster-1-1",
      "p": [
        0.37,
        0.11,
        0.23
      ],
      "s": [
        0.14,
        0.065,
        0.14
      ],
      "c": 3160900,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "push-handle-left",
      "from": [
        -0.37,
        0.97,
        -0.23
      ],
      "to": [
        -0.37,
        1.04,
        -0.43
      ],
      "r": 0.023,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "push-handle-right",
      "from": [
        0.37,
        0.97,
        -0.23
      ],
      "to": [
        0.37,
        1.04,
        -0.43
      ],
      "r": 0.023,
      "c": 8886427
    },
    {
      "t": "rod",
      "n": "pushbar",
      "from": [
        -0.39,
        1.04,
        -0.43
      ],
      "to": [
        0.39,
        1.04,
        -0.43
      ],
      "r": 0.024,
      "c": 3160900
    },
    {
      "t": "box",
      "n": "cutting-tray",
      "p": [
        0.17,
        0.935,
        0
      ],
      "s": [
        0.26,
        0.018,
        0.24
      ],
      "c": 11042392
    },
    {
      "t": "cylinder",
      "n": "bowl",
      "p": [
        -0.22,
        0.95,
        0
      ],
      "s": [
        0.2,
        0.065,
        0.2
      ],
      "c": 15065040
    },
    {
      "t": "box",
      "n": "towel",
      "p": [
        0,
        0.46,
        0.18
      ],
      "s": [
        0.26,
        0.13,
        0.014
      ],
      "c": 13750463
    }
  ]
});
}
