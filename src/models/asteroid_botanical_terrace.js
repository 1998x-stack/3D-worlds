import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Asteroid Botanical Terrace / 小行星植物研究平台. */
export const assetMeta = {
  "id": "scifi.asteroid-botanical-terrace.001",
  "slug": "asteroid-botanical-terrace",
  "title": "Asteroid Botanical Terrace",
  "title_zh": "小行星植物研究平台",
  "summary": "Space-based botanical garden with pressurized plant beds and translucent environmental shield",
  "category": "scifi",
  "tags": [
    "asteroid",
    "botanical",
    "terrace",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.6,
    2.85,
    3.1
  ],
  "generator": "createAsteroidBotanicalTerrace",
  "source_path": "src/models/asteroid_botanical_terrace.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/asteroid-botanical-terrace.webp",
  "accent": "#98ddca"
};
export function createAsteroidBotanicalTerrace() { return buildRecipe({
  "title": "Asteroid Botanical Terrace",
  "dimensions": [
    3.6,
    2.85,
    3.1
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "asteroid-botany-research-platform",
      "p": [
        0,
        0.23,
        0
      ],
      "s": [
        3.02,
        0.37,
        2.53
      ],
      "c": 7509178
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-0",
      "from": [
        1.26,
        0.3,
        0
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-1",
      "from": [
        1.0911920087683928,
        0.3,
        0.5418
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-2",
      "from": [
        0.6300000000000001,
        0.3,
        0.9384251275408176
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-3",
      "from": [
        7.715274834628325e-17,
        0.3,
        1.0836
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-4",
      "from": [
        -0.6299999999999997,
        0.3,
        0.9384251275408179
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-5",
      "from": [
        -1.0911920087683928,
        0.3,
        0.5418
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-6",
      "from": [
        -1.26,
        0.3,
        1.3270272715560719e-16
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-7",
      "from": [
        -1.0911920087683928,
        0.3,
        -0.5417999999999997
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-8",
      "from": [
        -0.6300000000000006,
        0.3,
        -0.9384251275408174
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-9",
      "from": [
        -2.3145824503884976e-16,
        0.3,
        -1.0836
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-10",
      "from": [
        0.6300000000000001,
        0.3,
        -0.9384251275408176
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "rod",
      "n": "pressurized-terrace-dome-rib-11",
      "from": [
        1.0911920087683924,
        0.3,
        -0.5418000000000005
      ],
      "to": [
        0,
        2.63,
        0
      ],
      "r": 0.045,
      "c": 10018250
    },
    {
      "t": "box",
      "n": "plant-growth-tray-0",
      "p": [
        0.76,
        0.78,
        0
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-0",
      "from": [
        0.76,
        0.85,
        0
      ],
      "to": [
        0.76,
        1.29,
        0
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-0",
      "p": [
        0.76,
        1.35,
        0
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "box",
      "n": "plant-growth-tray-1",
      "p": [
        0.47385224941263754,
        0.78,
        0.5941919266757026
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-1",
      "from": [
        0.47385224941263754,
        0.85,
        0.5941919266757026
      ],
      "to": [
        0.47385224941263754,
        1.29,
        0.5941919266757026
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-1",
      "p": [
        0.47385224941263754,
        1.35,
        0.5941919266757026
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "box",
      "n": "plant-growth-tray-2",
      "p": [
        -0.1691159098067989,
        0.78,
        0.740945213258186
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-2",
      "from": [
        -0.1691159098067989,
        0.85,
        0.740945213258186
      ],
      "to": [
        -0.1691159098067989,
        1.29,
        0.740945213258186
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-2",
      "p": [
        -0.1691159098067989,
        1.35,
        0.740945213258186
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "box",
      "n": "plant-growth-tray-3",
      "p": [
        -0.6847363396058385,
        0.78,
        0.32975164172934424
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-3",
      "from": [
        -0.6847363396058385,
        0.85,
        0.32975164172934424
      ],
      "to": [
        -0.6847363396058385,
        1.29,
        0.32975164172934424
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-3",
      "p": [
        -0.6847363396058385,
        1.35,
        0.32975164172934424
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "box",
      "n": "plant-growth-tray-4",
      "p": [
        -0.6847363396058386,
        0.78,
        -0.32975164172934407
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-4",
      "from": [
        -0.6847363396058386,
        0.85,
        -0.32975164172934407
      ],
      "to": [
        -0.6847363396058386,
        1.29,
        -0.32975164172934407
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-4",
      "p": [
        -0.6847363396058386,
        1.35,
        -0.32975164172934407
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "box",
      "n": "plant-growth-tray-5",
      "p": [
        -0.16911590980679908,
        0.78,
        -0.740945213258186
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-5",
      "from": [
        -0.16911590980679908,
        0.85,
        -0.740945213258186
      ],
      "to": [
        -0.16911590980679908,
        1.29,
        -0.740945213258186
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-5",
      "p": [
        -0.16911590980679908,
        1.35,
        -0.740945213258186
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "box",
      "n": "plant-growth-tray-6",
      "p": [
        0.47385224941263737,
        0.78,
        -0.5941919266757028
      ],
      "s": [
        0.38,
        0.13,
        0.44
      ],
      "c": 13812462
    },
    {
      "t": "rod",
      "n": "vertical-hydroponic-seedling-6",
      "from": [
        0.47385224941263737,
        0.85,
        -0.5941919266757028
      ],
      "to": [
        0.47385224941263737,
        1.29,
        -0.5941919266757028
      ],
      "r": 0.021,
      "c": 3423067
    },
    {
      "t": "sphere",
      "n": "controlled-leaf-cluster-6",
      "p": [
        0.47385224941263737,
        1.35,
        -0.5941919266757028
      ],
      "s": [
        0.2,
        0.2,
        0.21
      ],
      "c": 8113818
    },
    {
      "t": "cylinder",
      "n": "biome-central-air-recycling-unit",
      "p": [
        0,
        0.58,
        0
      ],
      "s": [
        0.49,
        0.71,
        0.49
      ],
      "c": 10018250
    },
    {
      "t": "sphere",
      "n": "transparent-dome-apex",
      "p": [
        0,
        2.66,
        0
      ],
      "s": [
        0.19,
        0.15,
        0.19
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "environmental-display-0",
      "p": [
        -0.47,
        1.2,
        -1.02
      ],
      "s": [
        0.22,
        0.32,
        0.038
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "environmental-display-1",
      "p": [
        -0.16999999999999998,
        1.2,
        -1.02
      ],
      "s": [
        0.22,
        0.32,
        0.038
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "environmental-display-2",
      "p": [
        0.13,
        1.2,
        -1.02
      ],
      "s": [
        0.22,
        0.32,
        0.038
      ],
      "c": 3423067
    },
    {
      "t": "box",
      "n": "environmental-display-3",
      "p": [
        0.42999999999999994,
        1.2,
        -1.02
      ],
      "s": [
        0.22,
        0.32,
        0.038
      ],
      "c": 3423067
    }
  ]
}); }
