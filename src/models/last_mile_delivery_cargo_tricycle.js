import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Last Mile Delivery Cargo Tricycle / 末端物流载货三轮车. */
export const assetMeta = {
  "id": "vehicles.last-mile-delivery-cargo-tricycle.001",
  "slug": "last-mile-delivery-cargo-tricycle",
  "title": "Last Mile Delivery Cargo Tricycle",
  "title_zh": "末端物流载货三轮车",
  "summary": "Electric cargo tricycle with front steering wheel, boxy rear loading compartment and canopy",
  "category": "vehicles",
  "tags": [
    "last",
    "mile",
    "delivery",
    "cargo",
    "tricycle",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.08,
    1.98,
    3.45
  ],
  "generator": "createLastMileDeliveryCargoTricycle",
  "source_path": "src/models/last_mile_delivery_cargo_tricycle.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/last-mile-delivery-cargo-tricycle.webp",
  "accent": "#719fa8"
};
export function createLastMileDeliveryCargoTricycle() { return buildRecipe({
  "title": "Last Mile Delivery Cargo Tricycle",
  "dimensions": [
    2.08,
    1.98,
    3.45
  ],
  "parts": [
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-delivery-trike-utility-chassis",
      "p": [
        0,
        0.6,
        0
      ],
      "s": [
        1.59,
        0.4,
        2.6
      ],
      "c": 3757672
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-last-mile-rear-cargo-box",
      "p": [
        0,
        1.22,
        -0.54
      ],
      "s": [
        1.52,
        1.27,
        1.24
      ],
      "c": 7446440
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-cargo-protection-canopy",
      "p": [
        0,
        1.92,
        -0.53
      ],
      "s": [
        1.55,
        0.13,
        1.27
      ],
      "c": 13874536
    },
    {
      "t": "cylinder",
      "n": "last-mile-delivery-cargo-tricycle-single-front-steering-wheel",
      "p": [
        0,
        0.35,
        1.22
      ],
      "s": [
        0.52,
        0.16,
        0.52
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "last-mile-delivery-cargo-tricycle-delivery-rear-wheel--1",
      "p": [
        -0.79,
        0.34,
        -0.87
      ],
      "s": [
        0.55,
        0.17,
        0.55
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "last-mile-delivery-cargo-tricycle-delivery-rear-wheel-1",
      "p": [
        0.79,
        0.34,
        -0.87
      ],
      "s": [
        0.55,
        0.17,
        0.55
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "last-mile-delivery-cargo-tricycle-courier-steering-column",
      "from": [
        0,
        0.44,
        1.23
      ],
      "to": [
        0,
        1.36,
        0.91
      ],
      "r": 0.053,
      "c": 3757672
    },
    {
      "t": "rod",
      "n": "last-mile-delivery-cargo-tricycle-cargo-bike-handlebar",
      "from": [
        -0.45,
        1.39,
        0.91
      ],
      "to": [
        0.45,
        1.39,
        0.91
      ],
      "r": 0.033,
      "c": 2834000
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-tricycle-courier-seat",
      "p": [
        0,
        0.97,
        0.45
      ],
      "s": [
        0.43,
        0.14,
        0.38
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-parcel-marking-0",
      "p": [
        -0.54,
        1.17,
        -1.17
      ],
      "s": [
        0.12,
        0.18,
        0.024
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-parcel-marking-1",
      "p": [
        -0.33000000000000007,
        1.17,
        -1.17
      ],
      "s": [
        0.12,
        0.18,
        0.024
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-parcel-marking-2",
      "p": [
        -0.12000000000000005,
        1.17,
        -1.17
      ],
      "s": [
        0.12,
        0.18,
        0.024
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-parcel-marking-3",
      "p": [
        0.08999999999999997,
        1.17,
        -1.17
      ],
      "s": [
        0.12,
        0.18,
        0.024
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-parcel-marking-4",
      "p": [
        0.29999999999999993,
        1.17,
        -1.17
      ],
      "s": [
        0.12,
        0.18,
        0.024
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-parcel-marking-5",
      "p": [
        0.51,
        1.17,
        -1.17
      ],
      "s": [
        0.12,
        0.18,
        0.024
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-structural-fitting-0",
      "p": [
        -0.4,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-structural-fitting-1",
      "p": [
        -0.33,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "last-mile-delivery-cargo-tricycle-structural-fitting-2",
      "p": [
        -0.26,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    }
  ]
}); }
