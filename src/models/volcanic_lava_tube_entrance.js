import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Volcanic Lava Tube Entrance / 火山熔岩洞入口. */
export const assetMeta = {
  "id": "nature.volcanic-lava-tube-entrance.001",
  "slug": "volcanic-lava-tube-entrance",
  "title": "Volcanic Lava Tube Entrance",
  "title_zh": "火山熔岩洞入口",
  "summary": "Hardened basalt cave mouth with lava folds, obsidian rocks and ember cracks",
  "category": "nature",
  "tags": [
    "volcanic",
    "lava",
    "tube",
    "entrance",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.45,
    2.46,
    3.22
  ],
  "generator": "createVolcanicLavaTubeEntrance",
  "source_path": "src/models/volcanic_lava_tube_entrance.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/volcanic-lava-tube-entrance.webp",
  "accent": "#987961"
};
export function createVolcanicLavaTubeEntrance() { return buildRecipe({
  "title": "Volcanic Lava Tube Entrance",
  "dimensions": [
    3.45,
    2.46,
    3.22
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-volcanic-massive-igneous-base",
      "p": [
        0,
        0.25,
        0
      ],
      "s": [
        3.1,
        0.42,
        2.84
      ],
      "c": 9992545
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-0",
      "p": [
        1.14,
        0.54,
        0
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-1",
      "p": [
        1.0094198692446592,
        0.5871016679927773,
        0.42382753290391684
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-2",
      "p": [
        0.6475938112735177,
        0.7752512181377709,
        0.7505612856950146
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-3",
      "p": [
        0.1374118154910682,
        1.0405458559446448,
        0.9053504931774251
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-4",
      "p": [
        -0.40424957122849037,
        0.9017902229611852,
        0.8527348133290982
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-5",
      "p": [
        -0.8533022529150552,
        0.6682828284841713,
        0.6047678643156051
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-6",
      "p": [
        -1.1068736718656993,
        0.54,
        0.21825588583025257
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-7",
      "p": [
        -1.1068736718656993,
        0.54,
        -0.21825588583025235
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-8",
      "p": [
        -0.8533022529150555,
        0.6682828284841713,
        -0.604767864315605
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-9",
      "p": [
        -0.40424957122849087,
        0.9017902229611849,
        -0.8527348133290982
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-10",
      "p": [
        0.13741181549106843,
        1.0405458559446445,
        -0.9053504931774251
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-11",
      "p": [
        0.6475938112735165,
        0.7752512181377715,
        -0.7505612856950151
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 13286817
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-lava-arched-boulder-12",
      "p": [
        1.0094198692446594,
        0.5871016679927772,
        -0.4238275329039167
      ],
      "s": [
        0.51,
        0.4,
        0.48
      ],
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-dark-lava-tube-mouth",
      "p": [
        0,
        0.48,
        1.06
      ],
      "s": [
        1.28,
        0.54,
        0.23
      ],
      "c": 7712955
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-0",
      "p": [
        -1.22,
        0.22,
        -0.98
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-1",
      "p": [
        -0.96,
        0.22,
        0.85
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-2",
      "p": [
        -0.7,
        0.22,
        -0.98
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-3",
      "p": [
        -0.43999999999999995,
        0.22,
        0.85
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-4",
      "p": [
        -0.17999999999999994,
        0.22,
        -0.98
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-5",
      "p": [
        0.08000000000000007,
        0.22,
        0.85
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-6",
      "p": [
        0.3400000000000001,
        0.22,
        -0.98
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-7",
      "p": [
        0.6000000000000001,
        0.22,
        0.85
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-8",
      "p": [
        0.8600000000000001,
        0.22,
        -0.98
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "sphere",
      "n": "volcanic-lava-tube-entrance-obsidian-slag-rock-9",
      "p": [
        1.1199999999999999,
        0.22,
        0.85
      ],
      "s": [
        0.24,
        0.16,
        0.21
      ],
      "c": 3488838
    },
    {
      "t": "rod",
      "n": "volcanic-lava-tube-entrance-glowing-lava-fissure-0",
      "from": [
        0.75,
        0.34,
        0.66
      ],
      "to": [
        0.68,
        0.3,
        1.09
      ],
      "r": 0.015,
      "c": 15180637
    },
    {
      "t": "rod",
      "n": "volcanic-lava-tube-entrance-glowing-lava-fissure-1",
      "from": [
        0.47,
        0.34,
        0.66
      ],
      "to": [
        0.4,
        0.3,
        1.09
      ],
      "r": 0.015,
      "c": 15180637
    },
    {
      "t": "rod",
      "n": "volcanic-lava-tube-entrance-glowing-lava-fissure-2",
      "from": [
        0.18999999999999995,
        0.34,
        0.66
      ],
      "to": [
        0.12,
        0.3,
        1.09
      ],
      "r": 0.015,
      "c": 15180637
    },
    {
      "t": "rod",
      "n": "volcanic-lava-tube-entrance-glowing-lava-fissure-3",
      "from": [
        -0.09000000000000008,
        0.34,
        0.66
      ],
      "to": [
        -0.16000000000000003,
        0.3,
        1.09
      ],
      "r": 0.015,
      "c": 15180637
    },
    {
      "t": "rod",
      "n": "volcanic-lava-tube-entrance-glowing-lava-fissure-4",
      "from": [
        -0.3700000000000001,
        0.34,
        0.66
      ],
      "to": [
        -0.44000000000000006,
        0.3,
        1.09
      ],
      "r": 0.015,
      "c": 15180637
    },
    {
      "t": "rod",
      "n": "volcanic-lava-tube-entrance-glowing-lava-fissure-5",
      "from": [
        -0.6500000000000001,
        0.34,
        0.66
      ],
      "to": [
        -0.7200000000000001,
        0.3,
        1.09
      ],
      "r": 0.015,
      "c": 15180637
    }
  ]
}); }
