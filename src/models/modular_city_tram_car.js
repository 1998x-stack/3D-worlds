import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Modular City Tram Car / 模块化城市有轨电车车厢. */
export const assetMeta = {
  "id": "vehicles.modular-city-tram-car.001",
  "slug": "modular-city-tram-car",
  "title": "Modular City Tram Car",
  "title_zh": "模块化城市有轨电车车厢",
  "summary": "Low-floor articulated city tram segment with panoramic glazing and passenger doors",
  "category": "vehicles",
  "tags": [
    "modular",
    "city",
    "tram",
    "car",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.66,
    3.05,
    5.74
  ],
  "generator": "createModularCityTramCar",
  "source_path": "src/models/modular_city_tram_car.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/modular-city-tram-car.webp",
  "accent": "#2b3e50"
};
export function createModularCityTramCar() { return buildRecipe({
  "title": "Modular City Tram Car",
  "dimensions": [
    2.66,
    3.05,
    5.74
  ],
  "parts": [
    {
      "t": "box",
      "n": "modular-city-tram-car-low-floor-city-tram-body",
      "p": [
        0,
        1.55,
        0
      ],
      "s": [
        2.32,
        2.46,
        4.82
      ],
      "c": 7446440
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-panoramic-tram-roof",
      "p": [
        0,
        2.82,
        0
      ],
      "s": [
        2.24,
        0.17,
        4.85
      ],
      "c": 3757672
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-low-floor-transit-deck",
      "p": [
        0,
        0.51,
        0
      ],
      "s": [
        2.15,
        0.15,
        4.71
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-0",
      "p": [
        -1.18,
        1.99,
        -2.05
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-1",
      "p": [
        -1.18,
        1.99,
        -1.38
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-2",
      "p": [
        -1.18,
        1.99,
        -0.7099999999999997
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-3",
      "p": [
        -1.18,
        1.99,
        -0.03999999999999959
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-4",
      "p": [
        -1.18,
        1.99,
        0.6300000000000003
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-5",
      "p": [
        -1.18,
        1.99,
        1.3000000000000003
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window--1-6",
      "p": [
        -1.18,
        1.99,
        1.9700000000000006
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-accessible-tram-door--1",
      "p": [
        -1.2,
        1.25,
        0.41
      ],
      "s": [
        0.048,
        1.79,
        0.74
      ],
      "c": 2834000
    },
    {
      "t": "cylinder",
      "n": "modular-city-tram-car-tram-bogie-wheel--1--1.57",
      "p": [
        -0.87,
        0.28,
        -1.57
      ],
      "s": [
        0.49,
        0.15,
        0.49
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
      "n": "modular-city-tram-car-tram-bogie-wheel--1-1.57",
      "p": [
        -0.87,
        0.28,
        1.57
      ],
      "s": [
        0.49,
        0.15,
        0.49
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-0",
      "p": [
        1.18,
        1.99,
        -2.05
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-1",
      "p": [
        1.18,
        1.99,
        -1.38
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-2",
      "p": [
        1.18,
        1.99,
        -0.7099999999999997
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-3",
      "p": [
        1.18,
        1.99,
        -0.03999999999999959
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-4",
      "p": [
        1.18,
        1.99,
        0.6300000000000003
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-5",
      "p": [
        1.18,
        1.99,
        1.3000000000000003
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-side-window-1-6",
      "p": [
        1.18,
        1.99,
        1.9700000000000006
      ],
      "s": [
        0.041,
        0.78,
        0.54
      ],
      "c": 13874536
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-accessible-tram-door-1",
      "p": [
        1.2,
        1.25,
        0.41
      ],
      "s": [
        0.048,
        1.79,
        0.74
      ],
      "c": 2834000
    },
    {
      "t": "cylinder",
      "n": "modular-city-tram-car-tram-bogie-wheel-1--1.57",
      "p": [
        0.87,
        0.28,
        -1.57
      ],
      "s": [
        0.49,
        0.15,
        0.49
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
      "n": "modular-city-tram-car-tram-bogie-wheel-1-1.57",
      "p": [
        0.87,
        0.28,
        1.57
      ],
      "s": [
        0.49,
        0.15,
        0.49
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-tram-articulation-gasket",
      "p": [
        0,
        1.56,
        -2.42
      ],
      "s": [
        2.2,
        2.3,
        0.19
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "modular-city-tram-car-transit-route-display",
      "p": [
        0,
        2.42,
        2.44
      ],
      "s": [
        1.33,
        0.23,
        0.037
      ],
      "c": 3757672
    }
  ]
}); }
