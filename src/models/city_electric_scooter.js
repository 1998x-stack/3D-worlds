import { buildRecipe } from './recipe_engine.js';
/** City Electric Scooter — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "vehicles.city-electric-scooter.001",
  "slug": "city-electric-scooter",
  "title": "City Electric Scooter",
  "title_zh": "城市电动滑板车",
  "summary": "Standing commuter scooter with split forks, platform battery, handlebars and brake",
  "category": "vehicles",
  "tags": [
    "scooter",
    "commute",
    "electric"
  ],
  "dimensions_m": [
    0.64,
    1.19,
    1.25
  ],
  "generator": "createCityElectricScooter",
  "source_path": "src/models/city_electric_scooter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/city-electric-scooter.webp"
};
export function createCityElectricScooter() { return buildRecipe({
  "title": "City Electric Scooter",
  "dimensions": [
    0.64,
    1.19,
    1.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "standing-deck",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        0.24,
        0.1,
        0.76
      ],
      "c": 3424584
    },
    {
      "t": "box",
      "n": "battery-panel",
      "p": [
        0,
        0.26,
        0
      ],
      "s": [
        0.21,
        0.02,
        0.58
      ],
      "c": 5935762
    },
    {
      "t": "torus",
      "n": "rubber-wheel-0",
      "p": [
        0,
        0.17,
        -0.43
      ],
      "s": [
        0.58,
        0.58,
        0.58
      ],
      "c": 3424584,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-0",
      "p": [
        0,
        0.17,
        -0.43
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 9414053,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "torus",
      "n": "rubber-wheel-1",
      "p": [
        0,
        0.17,
        0.42
      ],
      "s": [
        0.58,
        0.58,
        0.58
      ],
      "c": 3424584,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1",
      "p": [
        0,
        0.17,
        0.42
      ],
      "s": [
        0.16,
        0.1,
        0.16
      ],
      "c": 9414053,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "front-fork",
      "from": [
        0,
        0.21,
        0.43
      ],
      "to": [
        0,
        1.11,
        0.48
      ],
      "r": 0.033,
      "c": 9414053
    },
    {
      "t": "rod",
      "n": "handlebar",
      "from": [
        -0.32,
        1.11,
        0.48
      ],
      "to": [
        0.32,
        1.11,
        0.48
      ],
      "r": 0.034,
      "c": 3424584
    },
    {
      "t": "cylinder",
      "n": "grip-0",
      "p": [
        -0.29,
        1.11,
        0.48
      ],
      "s": [
        0.12,
        0.055,
        0.055
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
      "n": "grip-1",
      "p": [
        0.29,
        1.11,
        0.48
      ],
      "s": [
        0.12,
        0.055,
        0.055
      ],
      "c": 3424584,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "brake-cable",
      "from": [
        0.22,
        1.11,
        0.48
      ],
      "to": [
        0.03,
        0.47,
        0.43
      ],
      "r": 0.011,
      "c": 3424584
    },
    {
      "t": "box",
      "n": "dashboard",
      "p": [
        0,
        1.17,
        0.48
      ],
      "s": [
        0.15,
        0.045,
        0.1
      ],
      "c": 5605787
    },
    {
      "t": "box",
      "n": "kickstand",
      "p": [
        0.16,
        0.095,
        -0.12
      ],
      "s": [
        0.035,
        0.18,
        0.04
      ],
      "c": 9414053,
      "rot": [
        0,
        0,
        -0.5
      ]
    }
  ]
}); }
