import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Microcontroller Learning Blocks / 模块化微控制器教学积木. Visual model only; not print-certified or a functional product. */
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
  "collection": "v1.4",
  "preview_path": "public/thumbs/microcontroller-learning-blocks.webp",
  "accent": "#9ac5d1",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      "t": "rounded-box",
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
      "t": "rounded-box",
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
      "t": "rounded-box",
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
      "c": 3229017,
      "finish": "metal"
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
      "c": 14648424,
      "finish": "glow"
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
    },
    {
      "t": "box",
      "n": "pcb-trace-0-0",
      "p": [
        -0.89,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-0-1",
      "p": [
        -0.8180000000000001,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-0-2",
      "p": [
        -0.746,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-0-3",
      "p": [
        -0.674,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-0-4",
      "p": [
        -0.6020000000000001,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-0-5",
      "p": [
        -0.53,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-0-6",
      "p": [
        -0.4580000000000001,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "socket-retainer-0",
      "p": [
        -0.67,
        0.62,
        -0.35
      ],
      "s": [
        0.25,
        0.06,
        0.24
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "board-silk-label-0",
      "p": [
        -0.67,
        0.53,
        0.5
      ],
      "s": [
        0.32,
        0.04,
        0.02
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-0",
      "p": [
        -0.22,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-1",
      "p": [
        -0.14800000000000002,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-2",
      "p": [
        -0.07600000000000001,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-3",
      "p": [
        -0.004000000000000031,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-4",
      "p": [
        0.06799999999999998,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-5",
      "p": [
        0.13999999999999999,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-1-6",
      "p": [
        0.21199999999999994,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "socket-retainer-1",
      "p": [
        0,
        0.62,
        -0.35
      ],
      "s": [
        0.25,
        0.06,
        0.24
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "board-silk-label-1",
      "p": [
        0,
        0.53,
        0.5
      ],
      "s": [
        0.32,
        0.04,
        0.02
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-0",
      "p": [
        0.45000000000000007,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-1",
      "p": [
        0.522,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-2",
      "p": [
        0.5940000000000001,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-3",
      "p": [
        0.666,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-4",
      "p": [
        0.738,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-5",
      "p": [
        0.81,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "pcb-trace-2-6",
      "p": [
        0.882,
        0.53,
        0.08
      ],
      "s": [
        0.018,
        0.014,
        0.7
      ],
      "c": 7981487,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "socket-retainer-2",
      "p": [
        0.67,
        0.62,
        -0.35
      ],
      "s": [
        0.25,
        0.06,
        0.24
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "board-silk-label-2",
      "p": [
        0.67,
        0.53,
        0.5
      ],
      "s": [
        0.32,
        0.04,
        0.02
      ],
      "c": 16381934,
      "finish": "ceramic"
    },
    {
      "t": "hex",
      "n": "magnetic-interface-0",
      "p": [
        -0.86,
        0.2,
        -0.6
      ],
      "s": [
        0.22,
        0.09,
        0.22
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "hex",
      "n": "magnetic-interface-1",
      "p": [
        -0.020000000000000018,
        0.2,
        -0.6
      ],
      "s": [
        0.22,
        0.09,
        0.22
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "hex",
      "n": "magnetic-interface-2",
      "p": [
        0.82,
        0.2,
        -0.6
      ],
      "s": [
        0.22,
        0.09,
        0.22
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "hex",
      "n": "magnetic-interface-3",
      "p": [
        -0.86,
        0.2,
        0.6
      ],
      "s": [
        0.22,
        0.09,
        0.22
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "hex",
      "n": "magnetic-interface-4",
      "p": [
        -0.020000000000000018,
        0.2,
        0.6
      ],
      "s": [
        0.22,
        0.09,
        0.22
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "hex",
      "n": "magnetic-interface-5",
      "p": [
        0.82,
        0.2,
        0.6
      ],
      "s": [
        0.22,
        0.09,
        0.22
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "status-smd-led-0",
      "p": [
        -0.8,
        0.59,
        0.3
      ],
      "s": [
        0.09,
        0.05,
        0.09
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "status-smd-led-1",
      "p": [
        -0.5,
        0.59,
        0.3
      ],
      "s": [
        0.09,
        0.05,
        0.09
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "status-smd-led-2",
      "p": [
        -0.20000000000000007,
        0.59,
        0.3
      ],
      "s": [
        0.09,
        0.05,
        0.09
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "status-smd-led-3",
      "p": [
        0.09999999999999987,
        0.59,
        0.3
      ],
      "s": [
        0.09,
        0.05,
        0.09
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "status-smd-led-4",
      "p": [
        0.3999999999999999,
        0.59,
        0.3
      ],
      "s": [
        0.09,
        0.05,
        0.09
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "status-smd-led-5",
      "p": [
        0.7,
        0.59,
        0.3
      ],
      "s": [
        0.09,
        0.05,
        0.09
      ],
      "c": 14781814,
      "finish": "glow"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
