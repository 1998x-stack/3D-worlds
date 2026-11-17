import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: River Flood Level Sensor Pole / 河道水位监测杆. */
export const assetMeta = {
  "id": "urban.river-flood-level-sensor-pole.001",
  "slug": "river-flood-level-sensor-pole",
  "title": "River Flood Level Sensor Pole",
  "title_zh": "河道水位监测杆",
  "summary": "Smart river-level gauge with solar panel, telemetry cabinet and calibrated ruler",
  "category": "urban",
  "tags": [
    "river",
    "flood",
    "level",
    "sensor",
    "pole",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.28,
    3.15,
    1.05
  ],
  "generator": "createRiverFloodLevelSensorPole",
  "source_path": "src/models/river_flood_level_sensor_pole.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/river-flood-level-sensor-pole.webp",
  "accent": "#667f94"
};
export function createRiverFloodLevelSensorPole() { return buildRecipe({
  "title": "River Flood Level Sensor Pole",
  "dimensions": [
    1.28,
    3.15,
    1.05
  ],
  "parts": [
    {
      "t": "rod",
      "n": "river-gauge-telemetry-pole",
      "from": [
        0,
        0.11,
        0
      ],
      "to": [
        0,
        3.02,
        0
      ],
      "r": 0.068,
      "c": 12503985
    },
    {
      "t": "box",
      "n": "solar-telemetry-panel",
      "p": [
        0.36,
        2.35,
        0
      ],
      "s": [
        0.73,
        0.11,
        0.49
      ],
      "c": 6717332,
      "rot": [
        0.23,
        0,
        0.1
      ]
    },
    {
      "t": "box",
      "n": "flood-level-numbered-ruler",
      "p": [
        0,
        1.03,
        0.12
      ],
      "s": [
        0.24,
        1.71,
        0.048
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-0",
      "p": [
        -0.08,
        0.34,
        0.15
      ],
      "s": [
        0.17,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-1",
      "p": [
        -0.08,
        0.46,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-2",
      "p": [
        -0.08,
        0.5800000000000001,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-3",
      "p": [
        -0.08,
        0.7,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-4",
      "p": [
        -0.08,
        0.8200000000000001,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-5",
      "p": [
        -0.08,
        0.94,
        0.15
      ],
      "s": [
        0.17,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-6",
      "p": [
        -0.08,
        1.06,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-7",
      "p": [
        -0.08,
        1.18,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-8",
      "p": [
        -0.08,
        1.3,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-9",
      "p": [
        -0.08,
        1.4200000000000002,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-10",
      "p": [
        -0.08,
        1.54,
        0.15
      ],
      "s": [
        0.17,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-11",
      "p": [
        -0.08,
        1.66,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "river-depth-scale-tick-12",
      "p": [
        -0.08,
        1.78,
        0.15
      ],
      "s": [
        0.08,
        0.022,
        0.01
      ],
      "c": 3690077
    },
    {
      "t": "box",
      "n": "smart-remote-cabinet",
      "p": [
        0,
        2,
        0.2
      ],
      "s": [
        0.42,
        0.48,
        0.3
      ],
      "c": 6717332
    },
    {
      "t": "sphere",
      "n": "flood-sensor-transceiver",
      "p": [
        0,
        3.07,
        0
      ],
      "s": [
        0.2,
        0.12,
        0.2
      ],
      "c": 15122282
    },
    {
      "t": "box",
      "n": "waterside-concrete-base",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        0.96,
        0.21,
        0.79
      ],
      "c": 3690077
    }
  ]
}); }
