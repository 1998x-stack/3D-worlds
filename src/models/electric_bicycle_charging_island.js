import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Electric Bicycle Charging Island / 电动自行车充电岛. */
export const assetMeta = {
  "id": "urban.electric-bicycle-charging-island.001",
  "slug": "electric-bicycle-charging-island",
  "title": "Electric Bicycle Charging Island",
  "title_zh": "电动自行车充电岛",
  "summary": "Public e-bike charging canopy with parking bays, smart chargers and photovoltaic roof",
  "category": "urban",
  "tags": [
    "electric",
    "bicycle",
    "charging",
    "island",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.2,
    2.65,
    1.85
  ],
  "generator": "createElectricBicycleChargingIsland",
  "source_path": "src/models/electric_bicycle_charging_island.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/electric-bicycle-charging-island.webp",
  "accent": "#becbb1"
};
export function createElectricBicycleChargingIsland() { return buildRecipe({
  "title": "Electric Bicycle Charging Island",
  "dimensions": [
    3.2,
    2.65,
    1.85
  ],
  "parts": [
    {
      "t": "box",
      "n": "charging-island-paved-footprint",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        2.9,
        0.23,
        1.52
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "photovoltaic-shelter-roof",
      "p": [
        0,
        2.35,
        0
      ],
      "s": [
        2.91,
        0.13,
        1.39
      ],
      "c": 6717332
    },
    {
      "t": "rod",
      "n": "island-shelter-post--1.31--0.56",
      "from": [
        -1.31,
        0.2,
        -0.56
      ],
      "to": [
        -1.31,
        2.34,
        -0.56
      ],
      "r": 0.06,
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "island-shelter-post--1.31-0.56",
      "from": [
        -1.31,
        0.2,
        0.56
      ],
      "to": [
        -1.31,
        2.34,
        0.56
      ],
      "r": 0.06,
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "island-shelter-post-1.31--0.56",
      "from": [
        1.31,
        0.2,
        -0.56
      ],
      "to": [
        1.31,
        2.34,
        -0.56
      ],
      "r": 0.06,
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "island-shelter-post-1.31-0.56",
      "from": [
        1.31,
        0.2,
        0.56
      ],
      "to": [
        1.31,
        2.34,
        0.56
      ],
      "r": 0.06,
      "c": 12503985
    },
    {
      "t": "box",
      "n": "solar-roof-cell-0",
      "p": [
        -1.15,
        2.43,
        0
      ],
      "s": [
        0.39,
        0.035,
        1.1
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "solar-roof-cell-1",
      "p": [
        -0.69,
        2.43,
        0
      ],
      "s": [
        0.39,
        0.035,
        1.1
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "solar-roof-cell-2",
      "p": [
        -0.22999999999999987,
        2.43,
        0
      ],
      "s": [
        0.39,
        0.035,
        1.1
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "solar-roof-cell-3",
      "p": [
        0.2300000000000002,
        2.43,
        0
      ],
      "s": [
        0.39,
        0.035,
        1.1
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "solar-roof-cell-4",
      "p": [
        0.6900000000000002,
        2.43,
        0
      ],
      "s": [
        0.39,
        0.035,
        1.1
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "solar-roof-cell-5",
      "p": [
        1.1500000000000004,
        2.43,
        0
      ],
      "s": [
        0.39,
        0.035,
        1.1
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "ebike-charging-point-0",
      "p": [
        -1.08,
        1.05,
        -0.63
      ],
      "s": [
        0.2,
        0.82,
        0.19
      ],
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "charging-cable-0",
      "from": [
        -1.08,
        0.91,
        -0.55
      ],
      "to": [
        -0.92,
        0.38,
        0.48
      ],
      "r": 0.014,
      "c": 3690077
    },
    {
      "t": "box",
      "n": "marked-bike-bay-0",
      "p": [
        -1.08,
        0.26,
        0.16
      ],
      "s": [
        0.53,
        0.016,
        1.04
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "ebike-charging-point-1",
      "p": [
        -0.3600000000000001,
        1.05,
        -0.63
      ],
      "s": [
        0.2,
        0.82,
        0.19
      ],
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "charging-cable-1",
      "from": [
        -0.3600000000000001,
        0.91,
        -0.55
      ],
      "to": [
        -0.2000000000000001,
        0.38,
        0.48
      ],
      "r": 0.014,
      "c": 3690077
    },
    {
      "t": "box",
      "n": "marked-bike-bay-1",
      "p": [
        -0.3600000000000001,
        0.26,
        0.16
      ],
      "s": [
        0.53,
        0.016,
        1.04
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "ebike-charging-point-2",
      "p": [
        0.3599999999999999,
        1.05,
        -0.63
      ],
      "s": [
        0.2,
        0.82,
        0.19
      ],
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "charging-cable-2",
      "from": [
        0.3599999999999999,
        0.91,
        -0.55
      ],
      "to": [
        0.5199999999999999,
        0.38,
        0.48
      ],
      "r": 0.014,
      "c": 3690077
    },
    {
      "t": "box",
      "n": "marked-bike-bay-2",
      "p": [
        0.3599999999999999,
        0.26,
        0.16
      ],
      "s": [
        0.53,
        0.016,
        1.04
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "ebike-charging-point-3",
      "p": [
        1.08,
        1.05,
        -0.63
      ],
      "s": [
        0.2,
        0.82,
        0.19
      ],
      "c": 12503985
    },
    {
      "t": "rod",
      "n": "charging-cable-3",
      "from": [
        1.08,
        0.91,
        -0.55
      ],
      "to": [
        1.24,
        0.38,
        0.48
      ],
      "r": 0.014,
      "c": 3690077
    },
    {
      "t": "box",
      "n": "marked-bike-bay-3",
      "p": [
        1.08,
        0.26,
        0.16
      ],
      "s": [
        0.53,
        0.016,
        1.04
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "grid-distribution-utility-box",
      "p": [
        1.3,
        0.75,
        0.23
      ],
      "s": [
        0.39,
        0.83,
        0.37
      ],
      "c": 6717332
    }
  ]
}); }
