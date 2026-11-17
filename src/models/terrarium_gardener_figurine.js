import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Terrarium Gardener Figurine / 生态瓶园艺师摆件. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "characters.terrarium-gardener-figurine.001",
  "slug": "terrarium-gardener-figurine",
  "title": "Terrarium Gardener Figurine",
  "title_zh": "生态瓶园艺师摆件",
  "summary": "Stylized original gardener figurine with watering can, plant sprig and apron",
  "category": "characters",
  "tags": [
    "terrarium",
    "gardener",
    "figurine",
    "characters",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.18,
    0.25,
    0.16
  ],
  "generator": "createTerrariumGardenerFigurine",
  "source_path": "src/models/terrarium_gardener_figurine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/terrarium-gardener-figurine.webp",
  "accent": "#f0bc71",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createTerrariumGardenerFigurine() { return buildRecipe({
  "title": "Terrarium Gardener Figurine",
  "dimensions": [
    0.18,
    0.25,
    0.16
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "display-plinth",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        1.7,
        0.16,
        1.3
      ],
      "c": 8215879
    },
    {
      "t": "cylinder",
      "n": "boots",
      "p": [
        0,
        0.38,
        0
      ],
      "s": [
        0.46,
        0.38,
        0.33
      ],
      "c": 3229017,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "apron",
      "p": [
        0,
        1.17,
        0.13
      ],
      "s": [
        0.77,
        1,
        0.4
      ],
      "c": 7915949,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "head",
      "p": [
        0,
        1.96,
        0
      ],
      "s": [
        0.55,
        0.6,
        0.55
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "hat",
      "p": [
        0,
        2.35,
        0
      ],
      "s": [
        0.95,
        0.35,
        0.95
      ],
      "c": 15776881
    },
    {
      "t": "rod",
      "n": "leg-0",
      "from": [
        -0.23,
        0.3,
        0
      ],
      "to": [
        -0.21,
        0.85,
        0
      ],
      "r": 0.1,
      "c": 4084325
    },
    {
      "t": "rod",
      "n": "arm-0",
      "from": [
        -0.43,
        1.51,
        0
      ],
      "to": [
        -0.7,
        1.08,
        0.26
      ],
      "r": 0.075,
      "c": 15853002
    },
    {
      "t": "sphere",
      "n": "eye-0",
      "p": [
        -0.12,
        2.02,
        0.28
      ],
      "s": [
        0.075,
        0.07,
        0.06
      ],
      "c": 3229017,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "leg-1",
      "from": [
        0.23,
        0.3,
        0
      ],
      "to": [
        0.21,
        0.85,
        0
      ],
      "r": 0.1,
      "c": 4084325
    },
    {
      "t": "rod",
      "n": "arm-1",
      "from": [
        0.43,
        1.51,
        0
      ],
      "to": [
        0.7,
        1.08,
        0.26
      ],
      "r": 0.075,
      "c": 15853002
    },
    {
      "t": "sphere",
      "n": "eye-1",
      "p": [
        0.12,
        2.02,
        0.28
      ],
      "s": [
        0.075,
        0.07,
        0.06
      ],
      "c": 3229017,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "watering-can",
      "p": [
        0.72,
        0.76,
        0.42
      ],
      "s": [
        0.5,
        0.42,
        0.48
      ],
      "c": 10143185,
      "finish": "glass"
    },
    {
      "t": "torus",
      "n": "can-handle",
      "p": [
        0.92,
        0.98,
        0.42
      ],
      "s": [
        0.62,
        0.62,
        0.3
      ],
      "c": 10143185,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "spout",
      "from": [
        0.9,
        0.85,
        0.42
      ],
      "to": [
        1.27,
        0.91,
        0.6
      ],
      "r": 0.065,
      "c": 10143185,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "leaf-0",
      "p": [
        -0.58,
        0.52,
        0.35
      ],
      "s": [
        0.25,
        0.13,
        0.08
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "leaf-1",
      "p": [
        -0.6599999999999999,
        0.6672243186433546,
        0.35
      ],
      "s": [
        0.25,
        0.13,
        0.08
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "leaf-2",
      "p": [
        -0.82,
        0.6672243186433546,
        0.35
      ],
      "s": [
        0.25,
        0.13,
        0.08
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "leaf-3",
      "p": [
        -0.9,
        0.52,
        0.35
      ],
      "s": [
        0.25,
        0.13,
        0.08
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "leaf-4",
      "p": [
        -0.8200000000000001,
        0.3727756813566455,
        0.35
      ],
      "s": [
        0.25,
        0.13,
        0.08
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "leaf-5",
      "p": [
        -0.6599999999999999,
        0.3727756813566454,
        0.35
      ],
      "s": [
        0.25,
        0.13,
        0.08
      ],
      "c": 5086834
    },
    {
      "t": "cylinder",
      "n": "hat-sun-brim",
      "p": [
        0,
        2.22,
        0
      ],
      "s": [
        1.03,
        0.11,
        1.03
      ],
      "c": 15383673,
      "finish": "fabric"
    },
    {
      "t": "rounded-box",
      "n": "apron-stitched-pocket",
      "p": [
        0,
        1.08,
        0.39
      ],
      "s": [
        0.42,
        0.3,
        0.06
      ],
      "c": 15918798,
      "finish": "fabric"
    },
    {
      "t": "sphere",
      "n": "garden-glove-0",
      "p": [
        -0.71,
        1.03,
        0.28
      ],
      "s": [
        0.22,
        0.18,
        0.18
      ],
      "c": 16381934,
      "finish": "fabric"
    },
    {
      "t": "box",
      "n": "boot-trim-0",
      "p": [
        -0.23,
        0.22,
        0.07
      ],
      "s": [
        0.4,
        0.07,
        0.39
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "garden-glove-1",
      "p": [
        0.71,
        1.03,
        0.28
      ],
      "s": [
        0.22,
        0.18,
        0.18
      ],
      "c": 16381934,
      "finish": "fabric"
    },
    {
      "t": "box",
      "n": "boot-trim-1",
      "p": [
        0.23,
        0.22,
        0.07
      ],
      "s": [
        0.4,
        0.07,
        0.39
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "flower-petal-0",
      "p": [
        -0.64,
        0.75,
        0.34
      ],
      "s": [
        0.16,
        0.08,
        0.08
      ],
      "c": 15918798,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "flower-petal-1",
      "p": [
        -0.7150000000000001,
        0.8712435565298214,
        0.34
      ],
      "s": [
        0.16,
        0.08,
        0.08
      ],
      "c": 14781814,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "flower-petal-2",
      "p": [
        -0.865,
        0.8712435565298214,
        0.34
      ],
      "s": [
        0.16,
        0.08,
        0.08
      ],
      "c": 15918798,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "flower-petal-3",
      "p": [
        -0.9400000000000001,
        0.75,
        0.34
      ],
      "s": [
        0.16,
        0.08,
        0.08
      ],
      "c": 14781814,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "flower-petal-4",
      "p": [
        -0.8650000000000001,
        0.6287564434701787,
        0.34
      ],
      "s": [
        0.16,
        0.08,
        0.08
      ],
      "c": 15918798,
      "finish": "matte"
    },
    {
      "t": "sphere",
      "n": "flower-petal-5",
      "p": [
        -0.7150000000000001,
        0.6287564434701786,
        0.34
      ],
      "s": [
        0.16,
        0.08,
        0.08
      ],
      "c": 14781814,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "watering-can-lip",
      "p": [
        0.72,
        1.03,
        0.42
      ],
      "s": [
        0.51,
        0.06,
        0.51
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "hex",
      "n": "watering-rose-nozzle",
      "p": [
        1.28,
        0.92,
        0.6
      ],
      "s": [
        0.24,
        0.08,
        0.24
      ],
      "c": 11648457,
      "finish": "matte"
    },
    {
      "t": "box",
      "n": "shower-head-drill-0",
      "p": [
        1.196,
        0.975,
        0.63
      ],
      "s": [
        0.021,
        0.012,
        0.022
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "shower-head-drill-1",
      "p": [
        1.233,
        0.975,
        0.63
      ],
      "s": [
        0.021,
        0.012,
        0.022
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "shower-head-drill-2",
      "p": [
        1.27,
        0.975,
        0.63
      ],
      "s": [
        0.021,
        0.012,
        0.022
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "shower-head-drill-3",
      "p": [
        1.307,
        0.975,
        0.63
      ],
      "s": [
        0.021,
        0.012,
        0.022
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "shower-head-drill-4",
      "p": [
        1.344,
        0.975,
        0.63
      ],
      "s": [
        0.021,
        0.012,
        0.022
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "apron-neckband",
      "from": [
        -0.28,
        1.52,
        0.13
      ],
      "to": [
        0.28,
        1.52,
        0.13
      ],
      "r": 0.029,
      "c": 15918798,
      "finish": "fabric"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
