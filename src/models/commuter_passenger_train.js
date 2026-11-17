import { buildRecipe } from './recipe_engine.js';
/** Commuter Passenger Train — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "vehicles.commuter-passenger-train.001",
  "slug": "commuter-passenger-train",
  "title": "Commuter Passenger Train",
  "title_zh": "城市通勤轨道列车",
  "summary": "One stylized commuter rail car with multiple passenger windows, bogies and roof pantograph",
  "category": "vehicles",
  "tags": [
    "train",
    "rail",
    "transit"
  ],
  "dimensions_m": [
    2.68,
    3.1,
    7.25
  ],
  "generator": "createCommuterPassengerTrain",
  "source_path": "src/models/commuter_passenger_train.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/commuter-passenger-train.webp"
};
export function createCommuterPassengerTrain() { return buildRecipe({
  "title": "Commuter Passenger Train",
  "dimensions": [
    2.68,
    3.1,
    7.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "train-car-body",
      "p": [
        0,
        1.75,
        0
      ],
      "s": [
        2.58,
        2.4,
        7.14
      ],
      "c": 12768210
    },
    {
      "t": "box",
      "n": "roof",
      "p": [
        0,
        2.98,
        0
      ],
      "s": [
        2.68,
        0.24,
        7.25
      ],
      "c": 9414053
    },
    {
      "t": "box",
      "n": "blue-side-band",
      "p": [
        0,
        1.14,
        0
      ],
      "s": [
        2.62,
        0.22,
        6.95
      ],
      "c": 5605787
    },
    {
      "t": "box",
      "n": "window-0-0",
      "p": [
        -1.31,
        2.24,
        -2.69
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-0-1",
      "p": [
        -1.31,
        2.24,
        -1.64
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-0-2",
      "p": [
        -1.31,
        2.24,
        -0.5899999999999999
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-0-3",
      "p": [
        -1.31,
        2.24,
        0.4600000000000004
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-0-4",
      "p": [
        -1.31,
        2.24,
        1.5100000000000002
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-0-5",
      "p": [
        -1.31,
        2.24,
        2.56
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "cylinder",
      "n": "bogie-wheel-0-0",
      "p": [
        -1.02,
        0.43,
        -2.24
      ],
      "s": [
        0.67,
        0.22,
        0.67
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "axle-cap-0-0",
      "p": [
        -1.15,
        0.43,
        -2.24
      ],
      "s": [
        0.3,
        0.23,
        0.3
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "bogie-wheel-0-1",
      "p": [
        -1.02,
        0.43,
        2.24
      ],
      "s": [
        0.67,
        0.22,
        0.67
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "axle-cap-0-1",
      "p": [
        -1.15,
        0.43,
        2.24
      ],
      "s": [
        0.3,
        0.23,
        0.3
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "window-1-0",
      "p": [
        1.31,
        2.24,
        -2.69
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-1-1",
      "p": [
        1.31,
        2.24,
        -1.64
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-1-2",
      "p": [
        1.31,
        2.24,
        -0.5899999999999999
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-1-3",
      "p": [
        1.31,
        2.24,
        0.4600000000000004
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-1-4",
      "p": [
        1.31,
        2.24,
        1.5100000000000002
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "box",
      "n": "window-1-5",
      "p": [
        1.31,
        2.24,
        2.56
      ],
      "s": [
        0.032,
        0.83,
        0.74
      ],
      "c": 4487052
    },
    {
      "t": "cylinder",
      "n": "bogie-wheel-1-0",
      "p": [
        1.02,
        0.43,
        -2.24
      ],
      "s": [
        0.67,
        0.22,
        0.67
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "axle-cap-1-0",
      "p": [
        1.15,
        0.43,
        -2.24
      ],
      "s": [
        0.3,
        0.23,
        0.3
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "bogie-wheel-1-1",
      "p": [
        1.02,
        0.43,
        2.24
      ],
      "s": [
        0.67,
        0.22,
        0.67
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "cylinder",
      "n": "axle-cap-1-1",
      "p": [
        1.15,
        0.43,
        2.24
      ],
      "s": [
        0.3,
        0.23,
        0.3
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "front-cab-glass",
      "p": [
        0,
        2.16,
        3.58
      ],
      "s": [
        2.18,
        1.02,
        0.04
      ],
      "c": 3631490
    },
    {
      "t": "box",
      "n": "rear-cab-glass",
      "p": [
        0,
        2.16,
        -3.58
      ],
      "s": [
        2.18,
        1.02,
        0.04
      ],
      "c": 3631490
    },
    {
      "t": "box",
      "n": "headlight-0",
      "p": [
        -0.84,
        1.03,
        3.59
      ],
      "s": [
        0.26,
        0.17,
        0.045
      ],
      "c": 15132125
    },
    {
      "t": "box",
      "n": "headlight-1",
      "p": [
        0.84,
        1.03,
        3.59
      ],
      "s": [
        0.26,
        0.17,
        0.045
      ],
      "c": 15132125
    },
    {
      "t": "rod",
      "n": "pantograph-base",
      "from": [
        -0.45,
        3.09,
        -0.26
      ],
      "to": [
        0.45,
        3.09,
        -0.26
      ],
      "r": 0.045,
      "c": 3424584
    },
    {
      "t": "rod",
      "n": "pantograph-arm-left",
      "from": [
        -0.38,
        3.09,
        -0.26
      ],
      "to": [
        0,
        3.52,
        -0.26
      ],
      "r": 0.033,
      "c": 9414053
    },
    {
      "t": "rod",
      "n": "pantograph-arm-right",
      "from": [
        0.38,
        3.09,
        -0.26
      ],
      "to": [
        0,
        3.52,
        -0.26
      ],
      "r": 0.033,
      "c": 9414053
    },
    {
      "t": "rod",
      "n": "pantograph-collector",
      "from": [
        -0.58,
        3.53,
        -0.26
      ],
      "to": [
        0.58,
        3.53,
        -0.26
      ],
      "r": 0.027,
      "c": 3424584
    }
  ]
}); }
