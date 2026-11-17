import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Folding Cargo Bicycle Miniature / 折叠式货运自行车模型. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "vehicles.folding-cargo-bicycle-miniature.001",
  "slug": "folding-cargo-bicycle-miniature",
  "title": "Folding Cargo Bicycle Miniature",
  "title_zh": "折叠式货运自行车模型",
  "summary": "Nonfunctional folding bicycle scale miniature with front cargo basket and spoked wheels",
  "category": "vehicles",
  "tags": [
    "folding",
    "cargo",
    "bicycle",
    "miniature",
    "vehicles",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.46,
    0.27,
    0.16
  ],
  "generator": "createFoldingCargoBicycleMiniature",
  "source_path": "src/models/folding_cargo_bicycle_miniature.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/folding-cargo-bicycle-miniature.webp",
  "accent": "#df8468",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createFoldingCargoBicycleMiniature() { return buildRecipe({
  "title": "Folding Cargo Bicycle Miniature",
  "dimensions": [
    0.46,
    0.27,
    0.16
  ],
  "parts": [
    {
      "t": "torus",
      "n": "wheel-rim-0",
      "p": [
        0,
        0.58,
        -1.22
      ],
      "s": [
        1.24,
        1.24,
        0.33
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ],
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-0",
      "p": [
        0,
        0.58,
        -1.22
      ],
      "s": [
        0.2,
        0.2,
        0.2
      ],
      "c": 7177108,
      "rot": [
        1.5707963267948966,
        0,
        0
      ],
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-0-0",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.58,
        -0.7
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-0-1",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        -0.96
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-0-2",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        -1.48
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-0-3",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.5800000000000001,
        -1.74
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-0-4",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.12966679003209197,
        -1.4800000000000002
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-0-5",
      "from": [
        0,
        0.58,
        -1.22
      ],
      "to": [
        0,
        0.12966679003209186,
        -0.96
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "torus",
      "n": "wheel-rim-1",
      "p": [
        0,
        0.58,
        1.22
      ],
      "s": [
        1.24,
        1.24,
        0.33
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ],
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "wheel-hub-1",
      "p": [
        0,
        0.58,
        1.22
      ],
      "s": [
        0.2,
        0.2,
        0.2
      ],
      "c": 7177108,
      "rot": [
        1.5707963267948966,
        0,
        0
      ],
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-1-0",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.58,
        1.74
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-1-1",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        1.48
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-1-2",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        1.0303332099679081,
        0.9600000000000001
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-1-3",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.5800000000000001,
        0.7
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-1-4",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.12966679003209197,
        0.9599999999999997
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spoke-1-5",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        0.12966679003209186,
        1.48
      ],
      "r": 0.023,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "frame-low",
      "from": [
        0,
        0.6,
        -1.22
      ],
      "to": [
        0,
        0.76,
        0
      ],
      "r": 0.08,
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "frame-high",
      "from": [
        0,
        0.76,
        0
      ],
      "to": [
        0,
        1.31,
        -0.38
      ],
      "r": 0.08,
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "seat-tube",
      "from": [
        0,
        1.31,
        -0.38
      ],
      "to": [
        0,
        0.6,
        -1.22
      ],
      "r": 0.06,
      "c": 7915949
    },
    {
      "t": "rod",
      "n": "front-fork",
      "from": [
        0,
        0.58,
        1.22
      ],
      "to": [
        0,
        1.57,
        0.94
      ],
      "r": 0.065,
      "c": 4084325
    },
    {
      "t": "box",
      "n": "seat",
      "p": [
        0,
        1.53,
        -0.44
      ],
      "s": [
        0.42,
        0.1,
        0.56
      ],
      "c": 3229017
    },
    {
      "t": "rod",
      "n": "handlebar",
      "from": [
        -0.41,
        1.7,
        0.95
      ],
      "to": [
        0.41,
        1.7,
        0.95
      ],
      "r": 0.065,
      "c": 3229017,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "cargo-basket",
      "p": [
        0,
        1.03,
        0.46
      ],
      "s": [
        0.88,
        0.47,
        0.65
      ],
      "c": 15776881,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "basket-slat-0",
      "p": [
        -0.35,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "basket-slat-1",
      "p": [
        -0.11999999999999997,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "basket-slat-2",
      "p": [
        0.11000000000000004,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "basket-slat-3",
      "p": [
        0.3400000000000001,
        1.05,
        0.8
      ],
      "s": [
        0.04,
        0.41,
        0.06
      ],
      "c": 4084325,
      "finish": "wood"
    },
    {
      "t": "cylinder",
      "n": "hub-disc-0",
      "p": [
        0,
        0.58,
        -1.22
      ],
      "s": [
        0.24,
        0.22,
        0.24
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "arc",
      "n": "brake-rotor-0",
      "p": [
        0,
        0.58,
        -1.22
      ],
      "s": [
        0.76,
        0.76,
        0.6
      ],
      "c": 14989405,
      "finish": "metal",
      "start": 0,
      "sweep": 5.811946409141117,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "box",
      "n": "rim-reflector-0-0",
      "p": [
        0,
        1.12,
        -1.22
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-0-1",
      "p": [
        0,
        0.7468691769624716,
        -0.706429481200617
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-0-2",
      "p": [
        0,
        0.1431308230375284,
        -0.9025959637620644
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-0-3",
      "p": [
        0,
        0.14313082303752822,
        -1.5374040362379353
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-0-4",
      "p": [
        0,
        0.7468691769624715,
        -1.7335705187993828
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "hub-disc-1",
      "p": [
        0,
        0.58,
        1.22
      ],
      "s": [
        0.24,
        0.22,
        0.24
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "arc",
      "n": "brake-rotor-1",
      "p": [
        0,
        0.58,
        1.22
      ],
      "s": [
        0.76,
        0.76,
        0.6
      ],
      "c": 14989405,
      "finish": "metal",
      "start": 0,
      "sweep": 5.811946409141117,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "box",
      "n": "rim-reflector-1-0",
      "p": [
        0,
        1.12,
        1.22
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-1-1",
      "p": [
        0,
        0.7468691769624716,
        1.7335705187993828
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-1-2",
      "p": [
        0,
        0.1431308230375284,
        1.5374040362379355
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-1-3",
      "p": [
        0,
        0.14313082303752822,
        0.9025959637620645
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "rim-reflector-1-4",
      "p": [
        0,
        0.7468691769624715,
        0.706429481200617
      ],
      "s": [
        0.035,
        0.095,
        0.11
      ],
      "c": 15383673,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "drive-crank-assembly",
      "p": [
        0,
        0.72,
        -0.26
      ],
      "s": [
        0.31,
        0.15,
        0.3
      ],
      "c": 3162970,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "rear-luggage-rack",
      "from": [
        0,
        1,
        -1.11
      ],
      "to": [
        0,
        1,
        -0.51
      ],
      "r": 0.055,
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "folding-hinge-body",
      "p": [
        0,
        0.79,
        0
      ],
      "s": [
        0.34,
        0.25,
        0.29
      ],
      "c": 14989405,
      "finish": "anodized"
    },
    {
      "t": "box",
      "n": "cargo-basket-weave-0",
      "p": [
        -0.37,
        1.1,
        0.47
      ],
      "s": [
        0.055,
        0.26,
        0.56
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "cargo-basket-weave-1",
      "p": [
        -0.22999999999999998,
        1.1,
        0.47
      ],
      "s": [
        0.055,
        0.26,
        0.56
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "cargo-basket-weave-2",
      "p": [
        -0.08999999999999997,
        1.1,
        0.47
      ],
      "s": [
        0.055,
        0.26,
        0.56
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "cargo-basket-weave-3",
      "p": [
        0.050000000000000044,
        1.1,
        0.47
      ],
      "s": [
        0.055,
        0.26,
        0.56
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "cargo-basket-weave-4",
      "p": [
        0.19000000000000006,
        1.1,
        0.47
      ],
      "s": [
        0.055,
        0.26,
        0.56
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "box",
      "n": "cargo-basket-weave-5",
      "p": [
        0.33000000000000007,
        1.1,
        0.47
      ],
      "s": [
        0.055,
        0.26,
        0.56
      ],
      "c": 9332813,
      "finish": "wood"
    },
    {
      "t": "sphere",
      "n": "front-headlamp",
      "p": [
        0,
        1.53,
        1
      ],
      "s": [
        0.18,
        0.18,
        0.21
      ],
      "c": 16381934,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "saddle-stitch-0",
      "p": [
        -0.13,
        1.59,
        -0.44
      ],
      "s": [
        0.03,
        0.01,
        0.28
      ],
      "c": 15918798,
      "finish": "fabric"
    },
    {
      "t": "box",
      "n": "saddle-stitch-1",
      "p": [
        0,
        1.59,
        -0.44
      ],
      "s": [
        0.03,
        0.01,
        0.28
      ],
      "c": 15918798,
      "finish": "fabric"
    },
    {
      "t": "box",
      "n": "saddle-stitch-2",
      "p": [
        0.13,
        1.59,
        -0.44
      ],
      "s": [
        0.03,
        0.01,
        0.28
      ],
      "c": 15918798,
      "finish": "fabric"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
