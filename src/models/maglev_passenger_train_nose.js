import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Maglev Passenger Train Nose / 磁悬浮列车车头. */
export const assetMeta = {
  "id": "vehicles.maglev-passenger-train-nose.001",
  "slug": "maglev-passenger-train-nose",
  "title": "Maglev Passenger Train Nose",
  "title_zh": "磁悬浮列车车头",
  "summary": "Streamlined high-speed train lead unit with panoramic windscreen and guideway skirt",
  "category": "vehicles",
  "tags": [
    "maglev",
    "passenger",
    "train",
    "nose",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.65,
    3.05,
    6.4
  ],
  "generator": "createMaglevPassengerTrainNose",
  "source_path": "src/models/maglev_passenger_train_nose.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/maglev-passenger-train-nose.webp",
  "accent": "#243444"
};
export function createMaglevPassengerTrainNose() { return buildRecipe({
  "title": "Maglev Passenger Train Nose",
  "dimensions": [
    2.65,
    3.05,
    6.4
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "maglev-aerodynamic-nose",
      "p": [
        0,
        1.16,
        2.08
      ],
      "s": [
        2.17,
        0.77,
        2.02
      ],
      "c": 7249061
    },
    {
      "t": "box",
      "n": "train-passenger-compartment",
      "p": [
        0,
        1.46,
        -1.01
      ],
      "s": [
        2.21,
        2.1,
        3.79
      ],
      "c": 7249061
    },
    {
      "t": "box",
      "n": "train-roof-fairing",
      "p": [
        0,
        2.56,
        -0.9
      ],
      "s": [
        2.03,
        0.19,
        3.55
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "panoramic-cockpit-window",
      "p": [
        0,
        1.78,
        2.42
      ],
      "s": [
        1.48,
        0.47,
        0.055
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "passenger-side-window--1-0",
      "p": [
        -1.13,
        1.91,
        -2.47
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window--1-1",
      "p": [
        -1.13,
        1.91,
        -1.7700000000000002
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window--1-2",
      "p": [
        -1.13,
        1.91,
        -1.0700000000000003
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window--1-3",
      "p": [
        -1.13,
        1.91,
        -0.37000000000000055
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window--1-4",
      "p": [
        -1.13,
        1.91,
        0.3299999999999996
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window--1-5",
      "p": [
        -1.13,
        1.91,
        1.0299999999999998
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "levitation-guideway-skirt--1",
      "p": [
        -1.08,
        0.46,
        -0.67
      ],
      "s": [
        0.2,
        0.45,
        4.48
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "train-air-intake--1-0",
      "p": [
        -1.16,
        0.96,
        -1.9
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake--1-1",
      "p": [
        -1.16,
        0.96,
        -1.2199999999999998
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake--1-2",
      "p": [
        -1.16,
        0.96,
        -0.5399999999999998
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake--1-3",
      "p": [
        -1.16,
        0.96,
        0.14000000000000012
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake--1-4",
      "p": [
        -1.16,
        0.96,
        0.8200000000000003
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "passenger-side-window-1-0",
      "p": [
        1.13,
        1.91,
        -2.47
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window-1-1",
      "p": [
        1.13,
        1.91,
        -1.7700000000000002
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window-1-2",
      "p": [
        1.13,
        1.91,
        -1.0700000000000003
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window-1-3",
      "p": [
        1.13,
        1.91,
        -0.37000000000000055
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window-1-4",
      "p": [
        1.13,
        1.91,
        0.3299999999999996
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "passenger-side-window-1-5",
      "p": [
        1.13,
        1.91,
        1.0299999999999998
      ],
      "s": [
        0.027,
        0.47,
        0.51
      ],
      "c": 13284199
    },
    {
      "t": "box",
      "n": "levitation-guideway-skirt-1",
      "p": [
        1.08,
        0.46,
        -0.67
      ],
      "s": [
        0.2,
        0.45,
        4.48
      ],
      "c": 4086126
    },
    {
      "t": "box",
      "n": "train-air-intake-1-0",
      "p": [
        1.16,
        0.96,
        -1.9
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake-1-1",
      "p": [
        1.16,
        0.96,
        -1.2199999999999998
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake-1-2",
      "p": [
        1.16,
        0.96,
        -0.5399999999999998
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake-1-3",
      "p": [
        1.16,
        0.96,
        0.14000000000000012
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "train-air-intake-1-4",
      "p": [
        1.16,
        0.96,
        0.8200000000000003
      ],
      "s": [
        0.02,
        0.14,
        0.33
      ],
      "c": 2372676
    },
    {
      "t": "box",
      "n": "streamlined-front-lower-bumper",
      "p": [
        0,
        0.54,
        2.41
      ],
      "s": [
        1.72,
        0.23,
        0.15
      ],
      "c": 4086126
    }
  ]
}); }
