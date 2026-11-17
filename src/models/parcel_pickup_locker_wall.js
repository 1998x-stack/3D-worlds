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
  "accent": "#78c9ad",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
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
      "c": 4084325,
      "finish": "metal"
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
      "c": 4084325,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "rubber"
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
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-0-0",
      "p": [
        -1.2,
        0.72,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-0-0",
      "p": [
        -1.02,
        0.73,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-0-0",
      "p": [
        -0.74,
        0.74,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-0-1",
      "p": [
        -1.2,
        1.68,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-0-1",
      "p": [
        -1.02,
        1.69,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-0-1",
      "p": [
        -0.74,
        1.7,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-0-2",
      "p": [
        -1.2,
        2.6399999999999997,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-0-2",
      "p": [
        -1.02,
        2.6499999999999995,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-0-2",
      "p": [
        -0.74,
        2.6599999999999997,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-1-0",
      "p": [
        -0.57,
        0.72,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-1-0",
      "p": [
        -0.38999999999999996,
        0.73,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-1-0",
      "p": [
        -0.10999999999999996,
        0.74,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-1-1",
      "p": [
        -0.57,
        1.68,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-1-1",
      "p": [
        -0.38999999999999996,
        1.69,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-1-1",
      "p": [
        -0.10999999999999996,
        1.7,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-1-2",
      "p": [
        -0.57,
        2.6399999999999997,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-1-2",
      "p": [
        -0.38999999999999996,
        2.6499999999999995,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-1-2",
      "p": [
        -0.10999999999999996,
        2.6599999999999997,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-2-0",
      "p": [
        0.06000000000000005,
        0.72,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-2-0",
      "p": [
        0.24000000000000005,
        0.73,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-2-0",
      "p": [
        0.52,
        0.74,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-2-1",
      "p": [
        0.06000000000000005,
        1.68,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-2-1",
      "p": [
        0.24000000000000005,
        1.69,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-2-1",
      "p": [
        0.52,
        1.7,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-2-2",
      "p": [
        0.06000000000000005,
        2.6399999999999997,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-2-2",
      "p": [
        0.24000000000000005,
        2.6499999999999995,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-2-2",
      "p": [
        0.52,
        2.6599999999999997,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-3-0",
      "p": [
        0.6900000000000002,
        0.72,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-3-0",
      "p": [
        0.8700000000000001,
        0.73,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-3-0",
      "p": [
        1.1500000000000001,
        0.74,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-3-1",
      "p": [
        0.6900000000000002,
        1.68,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-3-1",
      "p": [
        0.8700000000000001,
        1.69,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-3-1",
      "p": [
        1.1500000000000001,
        1.7,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "locker-door-hinge-3-2",
      "p": [
        0.6900000000000002,
        2.6399999999999997,
        0.52
      ],
      "s": [
        0.055,
        0.13,
        0.055
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "locker-id-plaque-3-2",
      "p": [
        0.8700000000000001,
        2.6499999999999995,
        0.52
      ],
      "s": [
        0.22,
        0.1,
        0.019
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "locker-availability-pip-3-2",
      "p": [
        1.1500000000000001,
        2.6599999999999997,
        0.56
      ],
      "s": [
        0.065,
        0.055,
        0.047
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "locker-door-weatherstrip-0",
      "p": [
        -1.28,
        1.52,
        0.49
      ],
      "s": [
        0.028,
        2.62,
        0.025
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "locker-door-weatherstrip-1",
      "p": [
        -0.65,
        1.52,
        0.49
      ],
      "s": [
        0.028,
        2.62,
        0.025
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "locker-door-weatherstrip-2",
      "p": [
        -0.020000000000000018,
        1.52,
        0.49
      ],
      "s": [
        0.028,
        2.62,
        0.025
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "locker-door-weatherstrip-3",
      "p": [
        0.6100000000000001,
        1.52,
        0.49
      ],
      "s": [
        0.028,
        2.62,
        0.025
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-0",
      "p": [
        1.4,
        2.01,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 2570573,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-1",
      "p": [
        1.51,
        2.01,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 16381934,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-2",
      "p": [
        1.6199999999999999,
        2.01,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 2570573,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-3",
      "p": [
        1.4,
        1.8999999999999997,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 16381934,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-4",
      "p": [
        1.51,
        1.8999999999999997,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 2570573,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-5",
      "p": [
        1.6199999999999999,
        1.8999999999999997,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 16381934,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-6",
      "p": [
        1.4,
        1.7899999999999998,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 2570573,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-7",
      "p": [
        1.51,
        1.7899999999999998,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 16381934,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "qr-like-screen-cell-8",
      "p": [
        1.6199999999999999,
        1.7899999999999998,
        0.5
      ],
      "s": [
        0.06,
        0.062,
        0.02
      ],
      "c": 2570573,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "accessible-keypad-frame",
      "p": [
        1.53,
        1.62,
        0.51
      ],
      "s": [
        0.49,
        1.26,
        0.06
      ],
      "c": 14989405,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
