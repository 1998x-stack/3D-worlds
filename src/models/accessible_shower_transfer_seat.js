import { buildRecipe } from './recipe_engine.js';
/** Accessible Shower Transfer Seat: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "bathroom.accessible-shower-transfer-seat.001",
  "slug": "accessible-shower-transfer-seat",
  "title": "Accessible Shower Transfer Seat",
  "title_zh": "无障碍淋浴转移座椅",
  "summary": "Accessible shower seat with foldable seat deck, drainage and grab rail",
  "category": "bathroom",
  "tags": [
    "accessible",
    "transfer",
    "bathroom"
  ],
  "dimensions_m": [
    0.92,
    1.18,
    0.68
  ],
  "generator": "createAccessibleShowerTransferSeat",
  "source_path": "src/models/accessible_shower_transfer_seat.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/accessible-shower-transfer-seat.webp"
};
export function createAccessibleShowerTransferSeat() { return buildRecipe({
  "title": "Accessible Shower Transfer Seat",
  "dimensions": [
    0.92,
    1.18,
    0.68
  ],
  "parts": [
    {
      "t": "box",
      "n": "wall-panel",
      "p": [
        0,
        0.59,
        -0.3
      ],
      "s": [
        0.92,
        1.18,
        0.12
      ],
      "c": 13224902
    },
    {
      "t": "box",
      "n": "folding-seat",
      "p": [
        0,
        0.52,
        0.08
      ],
      "s": [
        0.75,
        0.09,
        0.48
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "drainage-slot-0",
      "p": [
        -0.29,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-1",
      "p": [
        -0.20699999999999996,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-2",
      "p": [
        -0.12399999999999997,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-3",
      "p": [
        -0.04099999999999998,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-4",
      "p": [
        0.04200000000000004,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-5",
      "p": [
        0.12500000000000006,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-6",
      "p": [
        0.20800000000000002,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "drainage-slot-7",
      "p": [
        0.2910000000000001,
        0.57,
        0.09
      ],
      "s": [
        0.033,
        0.015,
        0.16
      ],
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "seat-leg-0",
      "from": [
        -0.3,
        0.08,
        0.26
      ],
      "to": [
        -0.3,
        0.49,
        0.26
      ],
      "r": 0.032,
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "seat-leg-1",
      "from": [
        0.3,
        0.08,
        0.26
      ],
      "to": [
        0.3,
        0.49,
        0.26
      ],
      "r": 0.032,
      "c": 9609892
    },
    {
      "t": "box",
      "n": "foot-pad-0",
      "p": [
        -0.3,
        0.04,
        0.26
      ],
      "s": [
        0.077,
        0.08,
        0.09
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "foot-pad-1",
      "p": [
        0.3,
        0.04,
        0.26
      ],
      "s": [
        0.077,
        0.08,
        0.09
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "folding-brace-0",
      "from": [
        -0.3,
        0.4,
        -0.27
      ],
      "to": [
        -0.3,
        0.54,
        0.27
      ],
      "r": 0.023,
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "folding-brace-1",
      "from": [
        0.3,
        0.4,
        -0.27
      ],
      "to": [
        0.3,
        0.54,
        0.27
      ],
      "r": 0.023,
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "wall-grab-rail",
      "from": [
        -0.37,
        0.95,
        -0.2
      ],
      "to": [
        0.37,
        0.95,
        -0.2
      ],
      "r": 0.034,
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "vertical-grab-rail",
      "from": [
        0.36,
        0.64,
        -0.2
      ],
      "to": [
        0.36,
        1.12,
        -0.2
      ],
      "r": 0.033,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "hinge-bar",
      "p": [
        0,
        0.54,
        -0.19
      ],
      "s": [
        0.72,
        0.04,
        0.07
      ],
      "c": 13149293
    },
    {
      "t": "box",
      "n": "warning-marker",
      "p": [
        -0.23,
        0.78,
        -0.231
      ],
      "s": [
        0.23,
        0.12,
        0.01
      ],
      "c": 6195618
    }
  ]
}); }
