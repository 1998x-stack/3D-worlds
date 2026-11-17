import { buildRecipe } from './recipe_engine.js';
/** Mobile Welding Tool Cart — source-backed original low-poly prop. */
export const assetMeta = {
  "id": "tools.mobile-welding-tool-cart.001",
  "slug": "mobile-welding-tool-cart",
  "title": "Mobile Welding Tool Cart",
  "title_zh": "移动焊接工具车",
  "summary": "Steel welding cart with gas cylinder cradle, hose reel, welding machine and pushbar",
  "category": "tools",
  "tags": [
    "welding",
    "cart",
    "workshop"
  ],
  "dimensions_m": [
    0.88,
    1.21,
    0.61
  ],
  "generator": "createMobileWeldingToolCart",
  "source_path": "src/models/mobile_welding_tool_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/mobile-welding-tool-cart.webp"
};
export function createMobileWeldingToolCart() { return buildRecipe({
  "title": "Mobile Welding Tool Cart",
  "dimensions": [
    0.88,
    1.21,
    0.61
  ],
  "parts": [
    {
      "t": "box",
      "n": "lower-deck",
      "p": [
        0,
        0.21,
        0
      ],
      "s": [
        0.81,
        0.09,
        0.58
      ],
      "c": 3753034
    },
    {
      "t": "box",
      "n": "upper-deck",
      "p": [
        0,
        0.88,
        0
      ],
      "s": [
        0.81,
        0.09,
        0.57
      ],
      "c": 9413027
    },
    {
      "t": "rod",
      "n": "upright-0-0",
      "from": [
        -0.35,
        0.12,
        -0.23
      ],
      "to": [
        -0.35,
        1.08,
        -0.23
      ],
      "r": 0.027,
      "c": 3753034
    },
    {
      "t": "rod",
      "n": "upright-0-1",
      "from": [
        -0.35,
        0.12,
        0.23
      ],
      "to": [
        -0.35,
        1.08,
        0.23
      ],
      "r": 0.027,
      "c": 3753034
    },
    {
      "t": "rod",
      "n": "upright-1-0",
      "from": [
        0.35,
        0.12,
        -0.23
      ],
      "to": [
        0.35,
        1.08,
        -0.23
      ],
      "r": 0.027,
      "c": 3753034
    },
    {
      "t": "rod",
      "n": "upright-1-1",
      "from": [
        0.35,
        0.12,
        0.23
      ],
      "to": [
        0.35,
        1.08,
        0.23
      ],
      "r": 0.027,
      "c": 3753034
    },
    {
      "t": "cylinder",
      "n": "cart-caster-0-0",
      "p": [
        -0.34,
        0.075,
        -0.22
      ],
      "s": [
        0.13,
        0.065,
        0.13
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-caster-0-1",
      "p": [
        -0.34,
        0.075,
        0.22
      ],
      "s": [
        0.13,
        0.065,
        0.13
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-caster-1-0",
      "p": [
        0.34,
        0.075,
        -0.22
      ],
      "s": [
        0.13,
        0.065,
        0.13
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-caster-1-1",
      "p": [
        0.34,
        0.075,
        0.22
      ],
      "s": [
        0.13,
        0.065,
        0.13
      ],
      "c": 3753034,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "gas-cylinder",
      "p": [
        0.2,
        0.55,
        -0.07
      ],
      "s": [
        0.22,
        0.75,
        0.22
      ],
      "c": 6721162
    },
    {
      "t": "cylinder",
      "n": "gas-cap",
      "p": [
        0.2,
        0.95,
        -0.07
      ],
      "s": [
        0.13,
        0.065,
        0.13
      ],
      "c": 12689765
    },
    {
      "t": "box",
      "n": "welding-inverter",
      "p": [
        -0.17,
        0.98,
        0.02
      ],
      "s": [
        0.37,
        0.22,
        0.34
      ],
      "c": 5539489
    },
    {
      "t": "box",
      "n": "inverter-display",
      "p": [
        -0.17,
        1.03,
        0.204
      ],
      "s": [
        0.21,
        0.09,
        0.012
      ],
      "c": 2971750
    },
    {
      "t": "torus",
      "n": "hose-reel",
      "p": [
        0.35,
        0.6,
        0.19
      ],
      "s": [
        0.35,
        0.35,
        0.35
      ],
      "c": 3753034,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "welding-torch",
      "from": [
        -0.37,
        0.72,
        0.2
      ],
      "to": [
        -0.48,
        0.38,
        0.3
      ],
      "r": 0.031,
      "c": 3753034
    },
    {
      "t": "rod",
      "n": "pushbar",
      "from": [
        -0.36,
        1.16,
        -0.26
      ],
      "to": [
        0.36,
        1.16,
        -0.26
      ],
      "r": 0.035,
      "c": 9413027
    },
    {
      "t": "box",
      "n": "safety-placard",
      "p": [
        0,
        0.43,
        0.3
      ],
      "s": [
        0.24,
        0.15,
        0.012
      ],
      "c": 13741419
    }
  ]
}); }
