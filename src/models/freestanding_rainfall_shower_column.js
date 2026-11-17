import { buildRecipe } from './recipe_engine.js';
/** Freestanding Rainfall Shower Column: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "bathroom.freestanding-rainfall-shower-column.001",
  "slug": "freestanding-rainfall-shower-column",
  "title": "Freestanding Rainfall Shower Column",
  "title_zh": "独立雨淋淋浴柱",
  "summary": "Tall shower column with overhead shower disk, removable handset, thermostat and tray",
  "category": "bathroom",
  "tags": [
    "shower",
    "rainfall",
    "column"
  ],
  "dimensions_m": [
    0.82,
    2.4,
    0.76
  ],
  "generator": "createFreestandingRainfallShowerColumn",
  "source_path": "src/models/freestanding_rainfall_shower_column.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/freestanding-rainfall-shower-column.webp"
};
export function createFreestandingRainfallShowerColumn() { return buildRecipe({
  "title": "Freestanding Rainfall Shower Column",
  "dimensions": [
    0.82,
    2.4,
    0.76
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "standing-base",
      "p": [
        0,
        0.065,
        0
      ],
      "s": [
        0.77,
        0.13,
        0.72
      ],
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "vertical-pipe",
      "p": [
        0,
        1.2,
        -0.21
      ],
      "s": [
        0.075,
        2.27,
        0.075
      ],
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "shower-upper-arm",
      "from": [
        0,
        2.31,
        -0.21
      ],
      "to": [
        0,
        2.37,
        0.1
      ],
      "r": 0.036,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "rainhead",
      "p": [
        0,
        2.32,
        0.12
      ],
      "s": [
        0.5,
        0.04,
        0.5
      ],
      "c": 9609892
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-0",
      "p": [
        0.16,
        2.295,
        0.12
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-1",
      "p": [
        -0.11797867142785853,
        2.295,
        0.22807882812150304
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-2",
      "p": [
        0.013987086398532505,
        2.295,
        -0.03938745689068507
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-3",
      "p": [
        0.09735144804728933,
        2.295,
        0.24697517695634816
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-4",
      "p": [
        -0.15755451767599984,
        2.295,
        0.09213292337034516
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-5",
      "p": [
        0.13499946036360458,
        2.295,
        0.034121331510464384
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-6",
      "p": [
        -0.04153369453869909,
        2.295,
        0.2745152167845162
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-7",
      "p": [
        -0.07374833409902681,
        2.295,
        -0.021990081405773992
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-8",
      "p": [
        0.1502928255014618,
        2.295,
        0.17488229771781744
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-9",
      "p": [
        -0.14789351437349119,
        2.295,
        0.18105332428507032
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-10",
      "p": [
        0.06781067873080553,
        2.295,
        -0.024919673785402524
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "sphere",
      "n": "spray-nozzle-11",
      "p": [
        0.04789084205746894,
        2.295,
        0.2726645579269352
      ],
      "s": [
        0.023,
        0.012,
        0.023
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "thermostat-box",
      "p": [
        0,
        1,
        -0.17
      ],
      "s": [
        0.35,
        0.23,
        0.17
      ],
      "c": 3620935
    },
    {
      "t": "cylinder",
      "n": "temperature-dial",
      "p": [
        0.17,
        1,
        -0.085
      ],
      "s": [
        0.15,
        0.05,
        0.15
      ],
      "c": 13149293,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "handset-holder",
      "from": [
        0,
        1.43,
        -0.19
      ],
      "to": [
        0.25,
        1.43,
        -0.19
      ],
      "r": 0.021,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "handset",
      "p": [
        0.25,
        1.55,
        -0.19
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 9609892
    },
    {
      "t": "rod",
      "n": "hose-a",
      "from": [
        0.25,
        1.44,
        -0.19
      ],
      "to": [
        0.37,
        0.7,
        -0.1
      ],
      "r": 0.016,
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "hose-b",
      "from": [
        0.37,
        0.7,
        -0.1
      ],
      "to": [
        0,
        0.66,
        -0.15
      ],
      "r": 0.016,
      "c": 3620935
    },
    {
      "t": "box",
      "n": "floor-drain",
      "p": [
        0,
        0.138,
        0.2
      ],
      "s": [
        0.15,
        0.018,
        0.15
      ],
      "c": 3620935
    },
    {
      "t": "box",
      "n": "non-slip-tape-0",
      "p": [
        -0.24,
        0.141,
        0.2
      ],
      "s": [
        0.11,
        0.01,
        0.34
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "non-slip-tape-1",
      "p": [
        0.24,
        0.141,
        0.2
      ],
      "s": [
        0.11,
        0.01,
        0.34
      ],
      "c": 15263198
    }
  ]
}); }
