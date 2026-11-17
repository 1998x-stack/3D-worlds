import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Parcel Pickup Locker Wall / 社区智能快递柜墙. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "urban.parcel-pickup-locker-wall.001",
  "slug": "parcel-pickup-locker-wall",
  "title": "Parcel Pickup Locker Wall",
  "title_zh": "社区智能快递柜墙",
  "summary": "Parcel station with mixed-size locker doors, keypad and receipt area",
  "category": "urban",
  "tags": [
    "parcel",
    "pickup",
    "locker",
    "wall",
    "urban",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.43,
    0.52,
    0.18
  ],
  "generator": "createParcelPickupLockerWall",
  "source_path": "src/models/parcel_pickup_locker_wall.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/parcel-pickup-locker-wall.webp",
  "accent": "#78c9ad"
};
export function createParcelPickupLockerWall() { return buildRecipe({
  "title": "Parcel Pickup Locker Wall",
  "dimensions": [
    0.43,
    0.52,
    0.18
  ],
  "parts": [
    {
      "t": "box",
      "n": "locker-cabinet",
      "p": [
        0,
        1.52,
        0
      ],
      "s": [
        2.66,
        2.96,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "locker-door-0-0",
      "p": [
        -0.95,
        0.47,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "slot-handle-0-0",
      "p": [
        -0.76,
        0.47,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-0-1",
      "p": [
        -0.95,
        1.43,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "slot-handle-0-1",
      "p": [
        -0.76,
        1.43,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-0-2",
      "p": [
        -0.95,
        2.3899999999999997,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "slot-handle-0-2",
      "p": [
        -0.76,
        2.3899999999999997,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-1-0",
      "p": [
        -0.31999999999999995,
        0.47,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "slot-handle-1-0",
      "p": [
        -0.12999999999999995,
        0.47,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-1-1",
      "p": [
        -0.31999999999999995,
        1.43,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "slot-handle-1-1",
      "p": [
        -0.12999999999999995,
        1.43,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-1-2",
      "p": [
        -0.31999999999999995,
        2.3899999999999997,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "slot-handle-1-2",
      "p": [
        -0.12999999999999995,
        2.3899999999999997,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-2-0",
      "p": [
        0.31000000000000005,
        0.47,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "slot-handle-2-0",
      "p": [
        0.5,
        0.47,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-2-1",
      "p": [
        0.31000000000000005,
        1.43,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "slot-handle-2-1",
      "p": [
        0.5,
        1.43,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-2-2",
      "p": [
        0.31000000000000005,
        2.3899999999999997,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "slot-handle-2-2",
      "p": [
        0.5,
        2.3899999999999997,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-3-0",
      "p": [
        0.9400000000000002,
        0.47,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "slot-handle-3-0",
      "p": [
        1.1300000000000001,
        0.47,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-3-1",
      "p": [
        0.9400000000000002,
        1.43,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 12957346
    },
    {
      "t": "box",
      "n": "slot-handle-3-1",
      "p": [
        1.1300000000000001,
        1.43,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "locker-door-3-2",
      "p": [
        0.9400000000000002,
        2.3899999999999997,
        0.47
      ],
      "s": [
        0.56,
        0.86,
        0.055
      ],
      "c": 10143185
    },
    {
      "t": "box",
      "n": "slot-handle-3-2",
      "p": [
        1.1300000000000001,
        2.3899999999999997,
        0.52
      ],
      "s": [
        0.06,
        0.2,
        0.04
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "keypad-panel",
      "p": [
        1.52,
        1.62,
        0.37
      ],
      "s": [
        0.42,
        1.2,
        0.2
      ],
      "c": 4084325
    },
    {
      "t": "cylinder",
      "n": "keypad-key-0",
      "p": [
        1.38,
        1.19,
        0.51
      ],
      "s": [
        0.085,
        0.06,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "keypad-key-1",
      "p": [
        1.52,
        1.19,
        0.51
      ],
      "s": [
        0.085,
        0.06,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "keypad-key-2",
      "p": [
        1.38,
        1.38,
        0.51
      ],
      "s": [
        0.085,
        0.06,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "keypad-key-3",
      "p": [
        1.52,
        1.38,
        0.51
      ],
      "s": [
        0.085,
        0.06,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "keypad-key-4",
      "p": [
        1.38,
        1.5699999999999998,
        0.51
      ],
      "s": [
        0.085,
        0.06,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "keypad-key-5",
      "p": [
        1.52,
        1.5699999999999998,
        0.51
      ],
      "s": [
        0.085,
        0.06,
        0.09
      ],
      "c": 7915949
    },
    {
      "t": "box",
      "n": "receipt-slot",
      "p": [
        1.53,
        0.7,
        0.5
      ],
      "s": [
        0.24,
        0.07,
        0.06
      ],
      "c": 15776881
    }
  ]
}); }
