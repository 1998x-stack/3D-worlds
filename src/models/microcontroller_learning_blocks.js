import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Microcontroller Learning Blocks / 模块化微控制器教学积木. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "electronics.microcontroller-learning-blocks.001",
  "slug": "microcontroller-learning-blocks",
  "title": "Microcontroller Learning Blocks",
  "title_zh": "模块化微控制器教学积木",
  "summary": "Original grid-based electronics education set with plug modules, socket nodes and component mockups",
  "category": "electronics",
  "tags": [
    "microcontroller",
    "learning",
    "blocks",
    "electronics",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.29,
    0.12,
    0.21
  ],
  "generator": "createMicrocontrollerLearningBlocks",
  "source_path": "src/models/microcontroller_learning_blocks.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/microcontroller-learning-blocks.webp",
  "accent": "#9ac5d1"
};
export function createMicrocontrollerLearningBlocks() { return buildRecipe({
  "title": "Microcontroller Learning Blocks",
  "dimensions": [
    0.29,
    0.12,
    0.21
  ],
  "parts": [
    {
      "t": "box",
      "n": "grid-base",
      "p": [
        0,
        0.07,
        0
      ],
      "s": [
        2.25,
        0.14,
        1.6
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "stud-0-0",
      "p": [
        -0.84,
        0.18,
        -0.56
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-0-1",
      "p": [
        -0.84,
        0.18,
        -0.020000000000000018
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-0-2",
      "p": [
        -0.84,
        0.18,
        0.52
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-1-0",
      "p": [
        -0.2899999999999999,
        0.18,
        -0.56
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-1-1",
      "p": [
        -0.2899999999999999,
        0.18,
        -0.020000000000000018
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-1-2",
      "p": [
        -0.2899999999999999,
        0.18,
        0.52
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-2-0",
      "p": [
        0.2600000000000001,
        0.18,
        -0.56
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-2-1",
      "p": [
        0.2600000000000001,
        0.18,
        -0.020000000000000018
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-2-2",
      "p": [
        0.2600000000000001,
        0.18,
        0.52
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-3-0",
      "p": [
        0.8100000000000002,
        0.18,
        -0.56
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-3-1",
      "p": [
        0.8100000000000002,
        0.18,
        -0.020000000000000018
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "stud-3-2",
      "p": [
        0.8100000000000002,
        0.18,
        0.52
      ],
      "s": [
        0.16,
        0.08,
        0.16
      ],
      "c": 7177108
    },
    {
      "t": "box",
      "n": "module-board-0",
      "p": [
        -0.67,
        0.38,
        0
      ],
      "s": [
        0.55,
        0.22,
        1.08
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-0-0",
      "p": [
        -0.9,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-0-1",
      "p": [
        -0.75,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-0-2",
      "p": [
        -0.6000000000000001,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-0-3",
      "p": [
        -0.45000000000000007,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "module-board-1",
      "p": [
        0,
        0.38,
        0
      ],
      "s": [
        0.55,
        0.22,
        1.08
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-1-0",
      "p": [
        -0.22999999999999998,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-1-1",
      "p": [
        -0.07999999999999999,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-1-2",
      "p": [
        0.07,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-1-3",
      "p": [
        0.21999999999999997,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "module-board-2",
      "p": [
        0.67,
        0.38,
        0
      ],
      "s": [
        0.55,
        0.22,
        1.08
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-2-0",
      "p": [
        0.44000000000000006,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-2-1",
      "p": [
        0.5900000000000001,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-2-2",
      "p": [
        0.74,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "gpio-pin-2-3",
      "p": [
        0.89,
        0.57,
        -0.35
      ],
      "s": [
        0.06,
        0.2,
        0.06
      ],
      "c": 13938523
    },
    {
      "t": "box",
      "n": "processor-chip",
      "p": [
        -0.67,
        0.6,
        0.15
      ],
      "s": [
        0.26,
        0.09,
        0.3
      ],
      "c": 2570315
    },
    {
      "t": "cylinder",
      "n": "dial-knob",
      "p": [
        0,
        0.65,
        0.2
      ],
      "s": [
        0.3,
        0.24,
        0.3
      ],
      "c": 3229017
    },
    {
      "t": "sphere",
      "n": "status-led",
      "p": [
        0.67,
        0.63,
        0.18
      ],
      "s": [
        0.22,
        0.22,
        0.22
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "port-0",
      "p": [
        0.66,
        0.42,
        -0.38
      ],
      "s": [
        0.25,
        0.12,
        0.13
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "port-1",
      "p": [
        0.66,
        0.42,
        -0.15
      ],
      "s": [
        0.25,
        0.12,
        0.13
      ],
      "c": 4084325
    },
    {
      "t": "box",
      "n": "port-2",
      "p": [
        0.66,
        0.42,
        0.08000000000000002
      ],
      "s": [
        0.25,
        0.12,
        0.13
      ],
      "c": 4084325
    }
  ]
}); }
