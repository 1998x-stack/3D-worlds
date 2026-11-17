import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Compact Seed Library Cart / 移动种子图书馆手推车. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "vehicles.compact-seed-library-cart.001",
  "slug": "compact-seed-library-cart",
  "title": "Compact Seed Library Cart",
  "title_zh": "移动种子图书馆手推车",
  "summary": "Wheeled community seed-sharing kiosk with pockets, canopy and handrail",
  "category": "vehicles",
  "tags": [
    "compact",
    "seed",
    "library",
    "cart",
    "vehicles",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.42,
    0.48,
    0.3
  ],
  "generator": "createCompactSeedLibraryCart",
  "source_path": "src/models/compact_seed_library_cart.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/compact-seed-library-cart.webp",
  "accent": "#df8468"
};
export function createCompactSeedLibraryCart() { return buildRecipe({
  "title": "Compact Seed Library Cart",
  "dimensions": [
    0.42,
    0.48,
    0.3
  ],
  "parts": [
    {
      "t": "box",
      "n": "cart-deck",
      "p": [
        0,
        0.67,
        0
      ],
      "s": [
        1.9,
        0.16,
        1.24
      ],
      "c": 12957346
    },
    {
      "t": "cylinder",
      "n": "cart-wheel-0",
      "p": [
        -0.91,
        0.31,
        -0.56
      ],
      "s": [
        0.39,
        0.16,
        0.39
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-wheel-1",
      "p": [
        0.91,
        0.31,
        -0.56
      ],
      "s": [
        0.39,
        0.16,
        0.39
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-wheel-2",
      "p": [
        -0.91,
        0.31,
        0.56
      ],
      "s": [
        0.39,
        0.16,
        0.39
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "cart-wheel-3",
      "p": [
        0.91,
        0.31,
        0.56
      ],
      "s": [
        0.39,
        0.16,
        0.39
      ],
      "c": 3229017,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "column-0",
      "p": [
        -0.83,
        1.47,
        0
      ],
      "s": [
        0.12,
        1.55,
        0.14
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "column-1",
      "p": [
        0.83,
        1.47,
        0
      ],
      "s": [
        0.12,
        1.55,
        0.14
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "seed-kiosk-case",
      "p": [
        0,
        1.51,
        0
      ],
      "s": [
        1.6,
        1.2,
        0.86
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "kiosk-canopy",
      "p": [
        0,
        2.29,
        0
      ],
      "s": [
        2.12,
        0.14,
        1.35
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "seed-pocket-0",
      "p": [
        -0.48,
        1.15,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "seed-pocket-1",
      "p": [
        0,
        1.15,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "seed-pocket-2",
      "p": [
        0.48,
        1.15,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "seed-pocket-3",
      "p": [
        -0.48,
        1.44,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "seed-pocket-4",
      "p": [
        0,
        1.44,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "seed-pocket-5",
      "p": [
        0.48,
        1.44,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "seed-pocket-6",
      "p": [
        -0.48,
        1.73,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "seed-pocket-7",
      "p": [
        0,
        1.73,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "seed-pocket-8",
      "p": [
        0.48,
        1.73,
        0.48
      ],
      "s": [
        0.42,
        0.22,
        0.12
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "canopy-stripe-0",
      "p": [
        -0.74,
        2.38,
        0
      ],
      "s": [
        0.13,
        0.04,
        1.3
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "canopy-stripe-1",
      "p": [
        -0.25,
        2.38,
        0
      ],
      "s": [
        0.13,
        0.04,
        1.3
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "canopy-stripe-2",
      "p": [
        0.24,
        2.38,
        0
      ],
      "s": [
        0.13,
        0.04,
        1.3
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "canopy-stripe-3",
      "p": [
        0.73,
        2.38,
        0
      ],
      "s": [
        0.13,
        0.04,
        1.3
      ],
      "c": 15853002
    },
    {
      "t": "rod",
      "n": "push-handle-a",
      "from": [
        -1.17,
        1,
        0
      ],
      "to": [
        -1.17,
        1.55,
        0
      ],
      "r": 0.07,
      "c": 4084325
    },
    {
      "t": "rod",
      "n": "push-handle-b",
      "from": [
        -1.17,
        1.55,
        -0.49
      ],
      "to": [
        -1.17,
        1.55,
        0.49
      ],
      "r": 0.07,
      "c": 4084325
    }
  ]
}); }
