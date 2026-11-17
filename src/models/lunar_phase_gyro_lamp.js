import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Lunar Phase Gyro Lamp / 月相陀螺灯罩. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "decor.lunar-phase-gyro-lamp.001",
  "slug": "lunar-phase-gyro-lamp",
  "title": "Lunar Phase Gyro Lamp",
  "title_zh": "月相陀螺灯罩",
  "summary": "Decorative original orbital-ring lamp with central diffused moon and moon-phase ornaments",
  "category": "decor",
  "tags": [
    "lunar",
    "phase",
    "gyro",
    "lamp",
    "decor",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.27,
    0.32,
    0.27
  ],
  "generator": "createLunarPhaseGyroLamp",
  "source_path": "src/models/lunar_phase_gyro_lamp.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/lunar-phase-gyro-lamp.webp",
  "accent": "#d4af5b"
};
export function createLunarPhaseGyroLamp() { return buildRecipe({
  "title": "Lunar Phase Gyro Lamp",
  "dimensions": [
    0.27,
    0.32,
    0.27
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "lamp-foot",
      "p": [
        0,
        0.1,
        0
      ],
      "s": [
        1.45,
        0.2,
        1.4
      ],
      "c": 2570315
    },
    {
      "t": "rod",
      "n": "support-stem",
      "from": [
        0,
        0.2,
        0
      ],
      "to": [
        0,
        0.87,
        0
      ],
      "r": 0.07,
      "c": 13938523
    },
    {
      "t": "sphere",
      "n": "moon-core",
      "p": [
        0,
        1.68,
        0
      ],
      "s": [
        0.86,
        0.86,
        0.86
      ],
      "c": 15853002
    },
    {
      "t": "torus",
      "n": "outer-orbit",
      "p": [
        0,
        1.67,
        0
      ],
      "s": [
        3.3,
        0.22,
        3.3
      ],
      "c": 13938523,
      "rot": [
        0,
        0,
        0.7853981633974483
      ]
    },
    {
      "t": "torus",
      "n": "inner-orbit",
      "p": [
        0,
        1.67,
        0
      ],
      "s": [
        2.6,
        0.2,
        2.6
      ],
      "c": 7177108,
      "rot": [
        1.0471975511965976,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "phase-moon-0",
      "p": [
        1.08,
        1.67,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "phase-shade-0",
      "p": [
        1.08,
        1.67,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-1",
      "p": [
        0.7636753236814714,
        2.433675323681471,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "phase-shade-1",
      "p": [
        0.7636753236814714,
        2.433675323681471,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-2",
      "p": [
        6.613092715395707e-17,
        2.75,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "phase-shade-2",
      "p": [
        6.613092715395707e-17,
        2.75,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-3",
      "p": [
        -0.7636753236814713,
        2.4336753236814714,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "phase-shade-3",
      "p": [
        -0.7636753236814713,
        2.4336753236814714,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-4",
      "p": [
        -1.08,
        1.6700000000000002,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "phase-shade-4",
      "p": [
        -1.08,
        1.6700000000000002,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-5",
      "p": [
        -0.7636753236814715,
        0.9063246763185286,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "phase-shade-5",
      "p": [
        -0.7636753236814715,
        0.9063246763185286,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-6",
      "p": [
        -1.9839278146187122e-16,
        0.5899999999999999,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "phase-shade-6",
      "p": [
        -1.9839278146187122e-16,
        0.5899999999999999,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "phase-moon-7",
      "p": [
        0.7636753236814712,
        0.9063246763185284,
        0
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "phase-shade-7",
      "p": [
        0.7636753236814712,
        0.9063246763185284,
        0.15
      ],
      "s": [
        0.12,
        0.07,
        0.1
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "foot-control-0",
      "p": [
        -0.42,
        0.23,
        0.52
      ],
      "s": [
        0.12,
        0.09,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "foot-control-1",
      "p": [
        -0.13999999999999996,
        0.23,
        0.52
      ],
      "s": [
        0.12,
        0.09,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "foot-control-2",
      "p": [
        0.14000000000000007,
        0.23,
        0.52
      ],
      "s": [
        0.12,
        0.09,
        0.12
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "foot-control-3",
      "p": [
        0.4200000000000001,
        0.23,
        0.52
      ],
      "s": [
        0.12,
        0.09,
        0.12
      ],
      "c": 7915949
    }
  ]
}); }
