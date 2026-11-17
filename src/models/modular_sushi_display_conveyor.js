import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Modular Sushi Display Conveyor / 模块化回转寿司展示台. */
export const assetMeta = {
  "id": "kitchen.modular-sushi-display-conveyor.001",
  "slug": "modular-sushi-display-conveyor",
  "title": "Modular Sushi Display Conveyor",
  "title_zh": "模块化回转寿司展示台",
  "summary": "Miniature conveyor-belt sushi service with dish plates, glass guard and LED counter",
  "category": "kitchen",
  "tags": [
    "modular",
    "sushi",
    "display",
    "conveyor",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.28,
    1.28,
    1.12
  ],
  "generator": "createModularSushiDisplayConveyor",
  "source_path": "src/models/modular_sushi_display_conveyor.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/modular-sushi-display-conveyor.webp",
  "accent": "#6d8a90"
};
export function createModularSushiDisplayConveyor() { return buildRecipe({
  "title": "Modular Sushi Display Conveyor",
  "dimensions": [
    2.28,
    1.28,
    1.12
  ],
  "parts": [
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-conveyor-main-counter",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        2.06,
        0.85,
        0.82
      ],
      "c": 13024688
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-moving-sushi-conveyor-track",
      "p": [
        0,
        1.14,
        0
      ],
      "s": [
        1.91,
        0.085,
        0.62
      ],
      "c": 7178896
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-0",
      "p": [
        -0.89,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-0",
      "p": [
        -0.89,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 15835524
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-1",
      "p": [
        -0.73,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-1",
      "p": [
        -0.73,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 14726765
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-2",
      "p": [
        -0.5700000000000001,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-2",
      "p": [
        -0.5700000000000001,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 15835524
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-3",
      "p": [
        -0.41000000000000003,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-3",
      "p": [
        -0.41000000000000003,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 14726765
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-4",
      "p": [
        -0.25,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-4",
      "p": [
        -0.25,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 15835524
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-5",
      "p": [
        -0.08999999999999997,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-5",
      "p": [
        -0.08999999999999997,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 14726765
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-6",
      "p": [
        0.06999999999999995,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-6",
      "p": [
        0.06999999999999995,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 15835524
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-7",
      "p": [
        0.2300000000000001,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-7",
      "p": [
        0.2300000000000001,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 14726765
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-8",
      "p": [
        0.39,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-8",
      "p": [
        0.39,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 15835524
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-9",
      "p": [
        0.5499999999999999,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-9",
      "p": [
        0.5499999999999999,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 14726765
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-10",
      "p": [
        0.7100000000000001,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-10",
      "p": [
        0.7100000000000001,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 15835524
    },
    {
      "t": "cylinder",
      "n": "modular-sushi-display-conveyor-kaiten-sushi-serving-plate-11",
      "p": [
        0.87,
        1.24,
        0
      ],
      "s": [
        0.14,
        0.04,
        0.14
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "modular-sushi-display-conveyor-salmon-egg-sushi-piece-11",
      "p": [
        0.87,
        1.28,
        0
      ],
      "s": [
        0.11,
        0.07,
        0.1
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-conveyor-hygiene-guard--1",
      "p": [
        -0.98,
        1.36,
        0
      ],
      "s": [
        0.047,
        0.48,
        0.61
      ],
      "c": 14726765
    },
    {
      "t": "rod",
      "n": "modular-sushi-display-conveyor-belt-roller-return--1",
      "from": [
        -0.91,
        1.05,
        -0.29
      ],
      "to": [
        -0.91,
        1.05,
        0.31
      ],
      "r": 0.029,
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-conveyor-hygiene-guard-1",
      "p": [
        0.98,
        1.36,
        0
      ],
      "s": [
        0.047,
        0.48,
        0.61
      ],
      "c": 14726765
    },
    {
      "t": "rod",
      "n": "modular-sushi-display-conveyor-belt-roller-return-1",
      "from": [
        0.91,
        1.05,
        -0.29
      ],
      "to": [
        0.91,
        1.05,
        0.31
      ],
      "r": 0.029,
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-controller-0",
      "p": [
        -0.79,
        0.78,
        0.42
      ],
      "s": [
        0.23,
        0.12,
        0.03
      ],
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-controller-1",
      "p": [
        -0.48000000000000004,
        0.78,
        0.42
      ],
      "s": [
        0.23,
        0.12,
        0.03
      ],
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-controller-2",
      "p": [
        -0.17000000000000004,
        0.78,
        0.42
      ],
      "s": [
        0.23,
        0.12,
        0.03
      ],
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-controller-3",
      "p": [
        0.1399999999999999,
        0.78,
        0.42
      ],
      "s": [
        0.23,
        0.12,
        0.03
      ],
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-controller-4",
      "p": [
        0.44999999999999996,
        0.78,
        0.42
      ],
      "s": [
        0.23,
        0.12,
        0.03
      ],
      "c": 3558230
    },
    {
      "t": "box",
      "n": "modular-sushi-display-conveyor-sushi-controller-5",
      "p": [
        0.76,
        0.78,
        0.42
      ],
      "s": [
        0.23,
        0.12,
        0.03
      ],
      "c": 3558230
    }
  ]
}); }
