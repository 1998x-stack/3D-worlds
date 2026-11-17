import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Benchtop Pick And Place Machine / 台式电子元件贴片机. */
export const assetMeta = {
  "id": "tools.benchtop-pick-and-place-machine.001",
  "slug": "benchtop-pick-and-place-machine",
  "title": "Benchtop Pick And Place Machine",
  "title_zh": "台式电子元件贴片机",
  "summary": "Small electronics manufacturing placement robot with PCB conveyor, nozzle gantry and parts feeders",
  "category": "tools",
  "tags": [
    "benchtop",
    "pick",
    "and",
    "place",
    "machine",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.82,
    1.53,
    1.18
  ],
  "generator": "createBenchtopPickAndPlaceMachine",
  "source_path": "src/models/benchtop_pick_and_place_machine.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/benchtop-pick-and-place-machine.webp",
  "accent": "#d1d4c9"
};
export function createBenchtopPickAndPlaceMachine() { return buildRecipe({
  "title": "Benchtop Pick And Place Machine",
  "dimensions": [
    1.82,
    1.53,
    1.18
  ],
  "parts": [
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-industrial-smt-placement-platform",
      "p": [
        0,
        0.32,
        0
      ],
      "s": [
        1.58,
        0.5,
        1
      ],
      "c": 8360601
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-electronics-pcb-moving-conveyor",
      "p": [
        0,
        0.6,
        0
      ],
      "s": [
        1.45,
        0.1,
        0.58
      ],
      "c": 13543004
    },
    {
      "t": "rod",
      "n": "benchtop-pick-and-place-machine-pickplace-gantry-upright--1",
      "from": [
        -0.69,
        0.61,
        -0.34
      ],
      "to": [
        -0.69,
        1.4,
        -0.34
      ],
      "r": 0.053,
      "c": 13751497
    },
    {
      "t": "rod",
      "n": "benchtop-pick-and-place-machine-pickplace-gantry-upright-1",
      "from": [
        0.69,
        0.61,
        -0.34
      ],
      "to": [
        0.69,
        1.4,
        -0.34
      ],
      "r": 0.053,
      "c": 13751497
    },
    {
      "t": "rod",
      "n": "benchtop-pick-and-place-machine-component-placement-x-axis",
      "from": [
        -0.71,
        1.4,
        -0.34
      ],
      "to": [
        0.71,
        1.4,
        -0.34
      ],
      "r": 0.05,
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-pcb-surface-mount-head",
      "p": [
        0,
        1.24,
        -0.28
      ],
      "s": [
        0.34,
        0.23,
        0.27
      ],
      "c": 3163994
    },
    {
      "t": "rod",
      "n": "benchtop-pick-and-place-machine-vacuum-pick-and-place-nozzle",
      "from": [
        0,
        1.2,
        -0.28
      ],
      "to": [
        0,
        0.73,
        -0.02
      ],
      "r": 0.021,
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-0",
      "p": [
        -0.64,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-1",
      "p": [
        -0.5,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-2",
      "p": [
        -0.36,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-3",
      "p": [
        -0.21999999999999997,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-4",
      "p": [
        -0.07999999999999996,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-5",
      "p": [
        0.06000000000000005,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-6",
      "p": [
        0.20000000000000007,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-7",
      "p": [
        0.3400000000000001,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-8",
      "p": [
        0.4800000000000001,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-smt-component-feeder-9",
      "p": [
        0.6200000000000002,
        0.62,
        0.35
      ],
      "s": [
        0.105,
        0.16,
        0.2
      ],
      "c": 3163994
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-0",
      "p": [
        -0.4,
        0.68,
        -0.17
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-1",
      "p": [
        -0.030000000000000027,
        0.68,
        -0.17
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-2",
      "p": [
        0.33999999999999997,
        0.68,
        -0.17
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-3",
      "p": [
        -0.4,
        0.68,
        0
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-4",
      "p": [
        -0.030000000000000027,
        0.68,
        0
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-5",
      "p": [
        0.33999999999999997,
        0.68,
        0
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-6",
      "p": [
        -0.4,
        0.68,
        0.17
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-7",
      "p": [
        -0.030000000000000027,
        0.68,
        0.17
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    },
    {
      "t": "box",
      "n": "benchtop-pick-and-place-machine-solder-mask-test-pad-8",
      "p": [
        0.33999999999999997,
        0.68,
        0.17
      ],
      "s": [
        0.069,
        0.021,
        0.06
      ],
      "c": 13751497
    }
  ]
}); }
