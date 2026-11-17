import { buildRecipe } from './recipe_engine.js';
/** Solar Sail Deep Space Probe — original authored procedural scene component. */
export const assetMeta = {
  "id": "scifi.solar-sail-deep-space-probe.001",
  "slug": "solar-sail-deep-space-probe",
  "title": "Solar Sail Deep Space Probe",
  "title_zh": "太阳帆深空探测器",
  "summary": "Nonweapon space science probe with large reflective triangular sail panels, central satellite and telemetry antenna",
  "category": "scifi",
  "tags": [
    "solar-sail",
    "probe",
    "space"
  ],
  "dimensions_m": [
    3.16,
    3.29,
    0.92
  ],
  "generator": "createSolarSailDeepSpaceProbe",
  "source_path": "src/models/solar_sail_deep_space_probe.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/solar-sail-deep-space-probe.webp"
};
export function createSolarSailDeepSpaceProbe() { return buildRecipe({
  "title": "Solar Sail Deep Space Probe",
  "dimensions": [
    3.16,
    3.29,
    0.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "central-bus",
      "p": [
        0,
        1.65,
        0
      ],
      "s": [
        0.48,
        0.56,
        0.49
      ],
      "c": 3621708
    },
    {
      "t": "rod",
      "n": "sail-mast-0",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        1.31,
        1.65,
        0
      ],
      "r": 0.018,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "reflective-sail-0",
      "p": [
        0.6812,
        1.65,
        0
      ],
      "s": [
        1.34,
        1.35,
        0.018
      ],
      "c": 11126220,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "sail-cable-0",
      "from": [
        0,
        1.65,
        0.12
      ],
      "to": [
        1.31,
        1.65,
        0.12
      ],
      "r": 0.008,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "sail-mast-1",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        8.021436534415164e-17,
        2.96,
        0
      ],
      "r": 0.018,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "reflective-sail-1",
      "p": [
        4.171146997895885e-17,
        2.31,
        0
      ],
      "s": [
        1.34,
        1.35,
        0.018
      ],
      "c": 13032160,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "sail-cable-1",
      "from": [
        0,
        1.65,
        0.12
      ],
      "to": [
        8.021436534415164e-17,
        2.96,
        0.12
      ],
      "r": 0.008,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "sail-mast-2",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        -1.31,
        1.6500000000000001,
        0
      ],
      "r": 0.018,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "reflective-sail-2",
      "p": [
        -0.6812,
        1.65,
        0
      ],
      "s": [
        1.34,
        1.35,
        0.018
      ],
      "c": 11126220,
      "rot": [
        0,
        0,
        3.141592653589793
      ]
    },
    {
      "t": "rod",
      "n": "sail-cable-2",
      "from": [
        0,
        1.65,
        0.12
      ],
      "to": [
        -1.31,
        1.6500000000000001,
        0.12
      ],
      "r": 0.008,
      "c": 12822380
    },
    {
      "t": "rod",
      "n": "sail-mast-3",
      "from": [
        0,
        1.65,
        0
      ],
      "to": [
        -2.406430960324549e-16,
        0.33999999999999986,
        0
      ],
      "r": 0.018,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "reflective-sail-3",
      "p": [
        -1.2513440993687655e-16,
        0.9899999999999999,
        0
      ],
      "s": [
        1.34,
        1.35,
        0.018
      ],
      "c": 13032160,
      "rot": [
        0,
        0,
        4.71238898038469
      ]
    },
    {
      "t": "rod",
      "n": "sail-cable-3",
      "from": [
        0,
        1.65,
        0.12
      ],
      "to": [
        -2.406430960324549e-16,
        0.33999999999999986,
        0.12
      ],
      "r": 0.008,
      "c": 12822380
    },
    {
      "t": "cylinder",
      "n": "telemetry-dish",
      "p": [
        0,
        1.65,
        0.39
      ],
      "s": [
        0.41,
        0.05,
        0.41
      ],
      "c": 14870239,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "dish-stalk",
      "from": [
        0,
        1.65,
        0.22
      ],
      "to": [
        0,
        1.65,
        0.6
      ],
      "r": 0.017,
      "c": 9150371
    },
    {
      "t": "box",
      "n": "science-sensor",
      "p": [
        0,
        1.39,
        0.27
      ],
      "s": [
        0.19,
        0.13,
        0.14
      ],
      "c": 6197667
    },
    {
      "t": "cylinder",
      "n": "thruster-nozzle-0",
      "p": [
        -0.16,
        1.4,
        -0.25
      ],
      "s": [
        0.09,
        0.13,
        0.09
      ],
      "c": 9150371,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "thruster-nozzle-1",
      "p": [
        0.16,
        1.4,
        -0.25
      ],
      "s": [
        0.09,
        0.13,
        0.09
      ],
      "c": 9150371,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "bus-status-light-0",
      "p": [
        0.2,
        1.65,
        0.27
      ],
      "s": [
        0.028,
        0.028,
        0.02
      ],
      "c": 7389626
    },
    {
      "t": "sphere",
      "n": "bus-status-light-1",
      "p": [
        0.00015926534214665269,
        1.8499999365863669,
        0.27
      ],
      "s": [
        0.028,
        0.028,
        0.02
      ],
      "c": 7389626
    },
    {
      "t": "sphere",
      "n": "bus-status-light-2",
      "p": [
        -0.1999997463455079,
        1.6503185305832972,
        0.27
      ],
      "s": [
        0.028,
        0.028,
        0.02
      ],
      "c": 7389626
    },
    {
      "t": "sphere",
      "n": "bus-status-light-3",
      "p": [
        -0.00047779562245630773,
        1.4500005707224564,
        0.27
      ],
      "s": [
        0.028,
        0.028,
        0.02
      ],
      "c": 7389626
    }
  ]
}); }
