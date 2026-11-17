import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Climbing Route Setting Ladder Cart / 攀岩线路布置梯车. */
export const assetMeta = {
  "id": "sports.climbing-route-setting-ladder-cart.001",
  "slug": "climbing-route-setting-ladder-cart",
  "title": "Climbing Route Setting Ladder Cart",
  "title_zh": "攀岩线路布置梯车",
  "summary": "Climbing gym mobile ladder cart with color-coded holds, storage bins and wheel locks",
  "category": "sports",
  "tags": [
    "climbing",
    "route",
    "setting",
    "ladder",
    "cart",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.48,
    2.46,
    1.2
  ],
  "generator": "createClimbingRouteSettingLadderCart",
  "source_path": "src/models/climbing_route_setting_ladder_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/climbing-route-setting-ladder-cart.webp",
  "accent": "#e4b46b"
};
export function createClimbingRouteSettingLadderCart() { return buildRecipe({
  "title": "Climbing Route Setting Ladder Cart",
  "dimensions": [
    1.48,
    2.46,
    1.2
  ],
  "parts": [
    {
      "t": "box",
      "n": "climbing-route-setting-ladder-cart-indoor-climbing-route-ladder-cart",
      "p": [
        0,
        0.67,
        0
      ],
      "s": [
        1.09,
        1.02,
        0.72
      ],
      "c": 6658986
    },
    {
      "t": "cylinder",
      "n": "climbing-route-setting-ladder-cart-locking-climbing-cart-wheel--1--0.27",
      "p": [
        -0.48,
        0.12,
        -0.27
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 14147292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "climbing-route-setting-ladder-cart-locking-climbing-cart-wheel--1-0.27",
      "p": [
        -0.48,
        0.12,
        0.27
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 14147292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "climbing-route-setting-ladder-cart-locking-climbing-cart-wheel-1--0.27",
      "p": [
        0.48,
        0.12,
        -0.27
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 14147292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "climbing-route-setting-ladder-cart-locking-climbing-cart-wheel-1-0.27",
      "p": [
        0.48,
        0.12,
        0.27
      ],
      "s": [
        0.17,
        0.12,
        0.17
      ],
      "c": 14147292,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-route-setting-ladder-side--1",
      "from": [
        -0.35,
        0.77,
        -0.23
      ],
      "to": [
        -0.35,
        2.25,
        -0.23
      ],
      "r": 0.044,
      "c": 14988395
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-route-setting-ladder-side-1",
      "from": [
        0.35,
        0.77,
        -0.23
      ],
      "to": [
        0.35,
        2.25,
        -0.23
      ],
      "r": 0.044,
      "c": 14988395
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-0",
      "from": [
        -0.35,
        1,
        -0.23
      ],
      "to": [
        0.35,
        1,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-1",
      "from": [
        -0.35,
        1.19,
        -0.23
      ],
      "to": [
        0.35,
        1.19,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-2",
      "from": [
        -0.35,
        1.38,
        -0.23
      ],
      "to": [
        0.35,
        1.38,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-3",
      "from": [
        -0.35,
        1.57,
        -0.23
      ],
      "to": [
        0.35,
        1.57,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-4",
      "from": [
        -0.35,
        1.76,
        -0.23
      ],
      "to": [
        0.35,
        1.76,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-5",
      "from": [
        -0.35,
        1.95,
        -0.23
      ],
      "to": [
        0.35,
        1.95,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "rod",
      "n": "climbing-route-setting-ladder-cart-ladder-climbing-rung-6",
      "from": [
        -0.35,
        2.14,
        -0.23
      ],
      "to": [
        0.35,
        2.14,
        -0.23
      ],
      "r": 0.026,
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-0",
      "p": [
        -0.46,
        0.88,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 14988395
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-1",
      "p": [
        -0.28,
        0.88,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-2",
      "p": [
        -0.10000000000000003,
        0.88,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-3",
      "p": [
        0.08000000000000002,
        0.88,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 14988395
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-4",
      "p": [
        0.25999999999999995,
        0.88,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-5",
      "p": [
        0.4399999999999999,
        0.88,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-6",
      "p": [
        -0.46,
        1.1400000000000001,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 14988395
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-7",
      "p": [
        -0.28,
        1.1400000000000001,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-8",
      "p": [
        -0.10000000000000003,
        1.1400000000000001,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-9",
      "p": [
        0.08000000000000002,
        1.1400000000000001,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 14988395
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-10",
      "p": [
        0.25999999999999995,
        1.1400000000000001,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "sphere",
      "n": "climbing-route-setting-ladder-cart-stored-colorful-climbing-hold-11",
      "p": [
        0.4399999999999999,
        1.1400000000000001,
        0.36
      ],
      "s": [
        0.11,
        0.09,
        0.08
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "climbing-route-setting-ladder-cart-climber-bolt-tool-box",
      "p": [
        0,
        0.57,
        0.29
      ],
      "s": [
        0.72,
        0.23,
        0.28
      ],
      "c": 14988395
    }
  ]
}); }
