import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Mobile Induction Food Cart / 移动电磁烹饪餐车. */
export const assetMeta = {
  "id": "kitchen.mobile-induction-food-cart.001",
  "slug": "mobile-induction-food-cart",
  "title": "Mobile Induction Food Cart",
  "title_zh": "移动电磁烹饪餐车",
  "summary": "Street-food cart with induction cooktop, vent hood, side shelves and storage",
  "category": "kitchen",
  "tags": [
    "mobile",
    "induction",
    "food",
    "cart",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.85,
    1.73,
    1
  ],
  "generator": "createMobileInductionFoodCart",
  "source_path": "src/models/mobile_induction_food_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/mobile-induction-food-cart.webp",
  "accent": "#65808c"
};
export function createMobileInductionFoodCart() { return buildRecipe({
  "title": "Mobile Induction Food Cart",
  "dimensions": [
    1.85,
    1.73,
    1
  ],
  "parts": [
    {
      "t": "box",
      "n": "street-food-cart-countertop",
      "p": [
        0,
        0.98,
        0
      ],
      "s": [
        1.54,
        0.13,
        0.86
      ],
      "c": 13878441
    },
    {
      "t": "box",
      "n": "mobile-food-cart-base",
      "p": [
        0,
        0.55,
        0
      ],
      "s": [
        1.43,
        0.74,
        0.78
      ],
      "c": 6652044
    },
    {
      "t": "cylinder",
      "n": "cart-caster--0.61--0.34",
      "p": [
        -0.61,
        0.14,
        -0.34
      ],
      "s": [
        0.2,
        0.14,
        0.2
      ],
      "c": 3426904,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-caster--0.61-0.34",
      "p": [
        -0.61,
        0.14,
        0.34
      ],
      "s": [
        0.2,
        0.14,
        0.2
      ],
      "c": 3426904,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-caster-0.61--0.34",
      "p": [
        0.61,
        0.14,
        -0.34
      ],
      "s": [
        0.2,
        0.14,
        0.2
      ],
      "c": 3426904,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-caster-0.61-0.34",
      "p": [
        0.61,
        0.14,
        0.34
      ],
      "s": [
        0.2,
        0.14,
        0.2
      ],
      "c": 3426904,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "induction-burner-left",
      "p": [
        -0.39,
        1.08,
        -0.09
      ],
      "s": [
        0.38,
        0.06,
        0.38
      ],
      "c": 15380324
    },
    {
      "t": "cylinder",
      "n": "induction-burner-right",
      "p": [
        0.38,
        1.08,
        -0.09
      ],
      "s": [
        0.38,
        0.06,
        0.38
      ],
      "c": 15380324
    },
    {
      "t": "rod",
      "n": "vent-hood-strut--1",
      "from": [
        -0.58,
        1.08,
        -0.34
      ],
      "to": [
        -0.58,
        1.61,
        -0.34
      ],
      "r": 0.035,
      "c": 6652044
    },
    {
      "t": "rod",
      "n": "vent-hood-strut-1",
      "from": [
        0.58,
        1.08,
        -0.34
      ],
      "to": [
        0.58,
        1.61,
        -0.34
      ],
      "r": 0.035,
      "c": 6652044
    },
    {
      "t": "box",
      "n": "food-cart-steam-extractor",
      "p": [
        0,
        1.63,
        -0.24
      ],
      "s": [
        1.33,
        0.15,
        0.56
      ],
      "c": 3426904
    },
    {
      "t": "box",
      "n": "foldout-customer-counter",
      "p": [
        0,
        0.97,
        0.53
      ],
      "s": [
        1.24,
        0.08,
        0.27
      ],
      "c": 13878441
    },
    {
      "t": "box",
      "n": "cart-control-dial-0",
      "p": [
        -0.42,
        0.83,
        0.413
      ],
      "s": [
        0.14,
        0.055,
        0.03
      ],
      "c": 15380324
    },
    {
      "t": "box",
      "n": "cart-control-dial-1",
      "p": [
        -0.14999999999999997,
        0.83,
        0.413
      ],
      "s": [
        0.14,
        0.055,
        0.03
      ],
      "c": 15380324
    },
    {
      "t": "box",
      "n": "cart-control-dial-2",
      "p": [
        0.12000000000000005,
        0.83,
        0.413
      ],
      "s": [
        0.14,
        0.055,
        0.03
      ],
      "c": 15380324
    },
    {
      "t": "box",
      "n": "cart-control-dial-3",
      "p": [
        0.39000000000000007,
        0.83,
        0.413
      ],
      "s": [
        0.14,
        0.055,
        0.03
      ],
      "c": 15380324
    }
  ]
}); }
