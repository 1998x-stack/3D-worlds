import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.electric-vehicle-charging-pillar.001",
  "slug": "electric-vehicle-charging-pillar",
  "title": "Electric Vehicle Charging Pillar",
  "title_zh": "电动车公共充电桩",
  "summary": "Outdoor EV charger with touch display, payment terminal, cable loop and plug",
  "category": "urban",
  "tags": [
    "ev",
    "charger",
    "infrastructure"
  ],
  "dimensions_m": [
    0.58,
    1.78,
    0.47
  ],
  "generator": "createElectricVehicleChargingPillar",
  "source_path": "src/models/electric_vehicle_charging_pillar.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/electric-vehicle-charging-pillar.webp"
};
export function createElectricVehicleChargingPillar() { return buildRecipe({
  "title": "Electric Vehicle Charging Pillar",
  "dimensions": [
    0.58,
    1.78,
    0.47
  ],
  "parts": [
    {
      "t": "box",
      "n": "bollard-base",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        0.55,
        0.2,
        0.45
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "charging-post",
      "p": [
        0,
        0.85,
        0
      ],
      "s": [
        0.43,
        1.49,
        0.38
      ],
      "c": 8953761
    },
    {
      "t": "box",
      "n": "top-charger-cap",
      "p": [
        0,
        1.66,
        0
      ],
      "s": [
        0.53,
        0.19,
        0.42
      ],
      "c": 5540513
    },
    {
      "t": "box",
      "n": "color-display",
      "p": [
        0,
        1.33,
        0.203
      ],
      "s": [
        0.32,
        0.33,
        0.026
      ],
      "c": 2973038
    },
    {
      "t": "box",
      "n": "terminal-pad",
      "p": [
        0,
        1.01,
        0.204
      ],
      "s": [
        0.24,
        0.15,
        0.019
      ],
      "c": 3490634
    },
    {
      "t": "sphere",
      "n": "status-light-0",
      "p": [
        -0.08,
        1.59,
        0.225
      ],
      "s": [
        0.021,
        0.022,
        0.014
      ],
      "c": 7978148
    },
    {
      "t": "sphere",
      "n": "status-light-1",
      "p": [
        0,
        1.59,
        0.225
      ],
      "s": [
        0.021,
        0.022,
        0.014
      ],
      "c": 15123308
    },
    {
      "t": "sphere",
      "n": "status-light-2",
      "p": [
        0.08,
        1.59,
        0.225
      ],
      "s": [
        0.021,
        0.022,
        0.014
      ],
      "c": 8101567
    },
    {
      "t": "rod",
      "n": "charging-cable-a",
      "from": [
        0.16,
        0.83,
        0.05
      ],
      "to": [
        0.28,
        0.5,
        0.25
      ],
      "r": 0.034,
      "c": 3490634
    },
    {
      "t": "rod",
      "n": "charging-cable-b",
      "from": [
        0.28,
        0.5,
        0.25
      ],
      "to": [
        0.35,
        0.67,
        0.25
      ],
      "r": 0.034,
      "c": 3490634
    },
    {
      "t": "rod",
      "n": "charging-cable-c",
      "from": [
        0.35,
        0.67,
        0.25
      ],
      "to": [
        0.32,
        1.08,
        0.17
      ],
      "r": 0.034,
      "c": 3490634
    },
    {
      "t": "box",
      "n": "charging-plug",
      "p": [
        0.31,
        1.11,
        0.18
      ],
      "s": [
        0.1,
        0.19,
        0.07
      ],
      "c": 5203824
    },
    {
      "t": "box",
      "n": "plug-nozzle",
      "p": [
        0.31,
        1.23,
        0.18
      ],
      "s": [
        0.08,
        0.07,
        0.05
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "side-cable-hook",
      "p": [
        0.22,
        1.07,
        -0.04
      ],
      "s": [
        0.09,
        0.13,
        0.21
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "safety-label",
      "p": [
        0,
        0.56,
        0.2
      ],
      "s": [
        0.23,
        0.22,
        0.011
      ],
      "c": 15133152
    }
  ]
}); }
