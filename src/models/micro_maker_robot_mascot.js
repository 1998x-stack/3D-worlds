import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Micro Maker Robot Mascot / 微型创客机器人吉祥物. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "characters.micro-maker-robot-mascot.001",
  "slug": "micro-maker-robot-mascot",
  "title": "Micro Maker Robot Mascot",
  "title_zh": "微型创客机器人吉祥物",
  "summary": "Friendly original unrigged electronics-maker bot with tool hands, goggles and a tiny breadboard",
  "category": "characters",
  "tags": [
    "micro",
    "maker",
    "robot",
    "mascot",
    "characters",
    "original",
    "low-poly"
  ],
  "dimensions_m": [
    0.16,
    0.24,
    0.16
  ],
  "generator": "createMicroMakerRobotMascot",
  "source_path": "src/models/micro_maker_robot_mascot.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/micro-maker-robot-mascot.webp",
  "accent": "#f0bc71",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createMicroMakerRobotMascot() { return buildRecipe({
  "title": "Micro Maker Robot Mascot",
  "dimensions": [
    0.16,
    0.24,
    0.16
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "body-chassis",
      "p": [
        0,
        1.05,
        0
      ],
      "s": [
        1.08,
        1.05,
        0.72
      ],
      "c": 10143185
    },
    {
      "t": "rounded-box",
      "n": "face-screen",
      "p": [
        0,
        1.77,
        0.41
      ],
      "s": [
        1.05,
        0.66,
        0.13
      ],
      "c": 3229017,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "eye-0",
      "p": [
        -0.27,
        1.84,
        0.5
      ],
      "s": [
        0.19,
        0.17,
        0.12
      ],
      "c": 7915949,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "arm-0",
      "from": [
        -0.56,
        1.18,
        0
      ],
      "to": [
        -0.93,
        0.75,
        0.13
      ],
      "r": 0.1,
      "c": 7177108
    },
    {
      "t": "sphere",
      "n": "tool-hand-0",
      "p": [
        -0.98,
        0.73,
        0.14
      ],
      "s": [
        0.23,
        0.24,
        0.23
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "foot-0",
      "p": [
        -0.31,
        0.13,
        0.16
      ],
      "s": [
        0.3,
        0.27,
        0.62
      ],
      "c": 2570315
    },
    {
      "t": "cylinder",
      "n": "head-bolt-0",
      "p": [
        -0.38,
        2.2,
        0
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 13938523,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "eye-1",
      "p": [
        0.27,
        1.84,
        0.5
      ],
      "s": [
        0.19,
        0.17,
        0.12
      ],
      "c": 7915949,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "arm-1",
      "from": [
        0.56,
        1.18,
        0
      ],
      "to": [
        0.93,
        0.75,
        0.13
      ],
      "r": 0.1,
      "c": 7177108
    },
    {
      "t": "sphere",
      "n": "tool-hand-1",
      "p": [
        0.98,
        0.73,
        0.14
      ],
      "s": [
        0.23,
        0.24,
        0.23
      ],
      "c": 15776881
    },
    {
      "t": "box",
      "n": "foot-1",
      "p": [
        0.31,
        0.13,
        0.16
      ],
      "s": [
        0.3,
        0.27,
        0.62
      ],
      "c": 2570315
    },
    {
      "t": "cylinder",
      "n": "head-bolt-1",
      "p": [
        0.38,
        2.2,
        0
      ],
      "s": [
        0.13,
        0.14,
        0.13
      ],
      "c": 13938523,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "smile-pixel",
      "p": [
        0,
        1.57,
        0.51
      ],
      "s": [
        0.35,
        0.055,
        0.06
      ],
      "c": 14648424
    },
    {
      "t": "box",
      "n": "breadboard-pad-0",
      "p": [
        -0.31,
        0.88,
        0.42
      ],
      "s": [
        0.1,
        0.08,
        0.08
      ],
      "c": 15001563,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "breadboard-pad-1",
      "p": [
        0,
        0.88,
        0.42
      ],
      "s": [
        0.1,
        0.08,
        0.08
      ],
      "c": 15001563,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "breadboard-pad-2",
      "p": [
        0.31,
        0.88,
        0.42
      ],
      "s": [
        0.1,
        0.08,
        0.08
      ],
      "c": 15001563,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "breadboard-pad-3",
      "p": [
        -0.31,
        0.88,
        0.47
      ],
      "s": [
        0.1,
        0.08,
        0.08
      ],
      "c": 15001563,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "breadboard-pad-4",
      "p": [
        0,
        0.88,
        0.47
      ],
      "s": [
        0.1,
        0.08,
        0.08
      ],
      "c": 15001563,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "breadboard-pad-5",
      "p": [
        0.31,
        0.88,
        0.47
      ],
      "s": [
        0.1,
        0.08,
        0.08
      ],
      "c": 15001563,
      "finish": "rubber"
    },
    {
      "t": "rod",
      "n": "antenna",
      "from": [
        0,
        2.18,
        0
      ],
      "to": [
        0,
        2.52,
        0
      ],
      "r": 0.045,
      "c": 15776881
    },
    {
      "t": "sphere",
      "n": "antenna-bulb",
      "p": [
        0,
        2.55,
        0
      ],
      "s": [
        0.17,
        0.17,
        0.17
      ],
      "c": 14648424,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "shoulder-axle-0",
      "p": [
        -0.55,
        1.22,
        0
      ],
      "s": [
        0.28,
        0.28,
        0.28
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "cheek-led-0",
      "p": [
        -0.38,
        1.54,
        0.51
      ],
      "s": [
        0.16,
        0.11,
        0.12
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "boot-sole-0",
      "p": [
        -0.31,
        0.06,
        0.24
      ],
      "s": [
        0.39,
        0.11,
        0.72
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "shoulder-axle-1",
      "p": [
        0.55,
        1.22,
        0
      ],
      "s": [
        0.28,
        0.28,
        0.28
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "cheek-led-1",
      "p": [
        0.38,
        1.54,
        0.51
      ],
      "s": [
        0.16,
        0.11,
        0.12
      ],
      "c": 14781814,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "boot-sole-1",
      "p": [
        0.31,
        0.06,
        0.24
      ],
      "s": [
        0.39,
        0.11,
        0.72
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "chest-thermal-vent-0",
      "p": [
        -0.37,
        1.18,
        0.39
      ],
      "s": [
        0.05,
        0.17,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "chest-thermal-vent-1",
      "p": [
        -0.22,
        1.18,
        0.39
      ],
      "s": [
        0.05,
        0.17,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "chest-thermal-vent-2",
      "p": [
        -0.07,
        1.18,
        0.39
      ],
      "s": [
        0.05,
        0.17,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "chest-thermal-vent-3",
      "p": [
        0.07999999999999996,
        1.18,
        0.39
      ],
      "s": [
        0.05,
        0.17,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "chest-thermal-vent-4",
      "p": [
        0.22999999999999998,
        1.18,
        0.39
      ],
      "s": [
        0.05,
        0.17,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "chest-thermal-vent-5",
      "p": [
        0.38,
        1.18,
        0.39
      ],
      "s": [
        0.05,
        0.17,
        0.027
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "face-panel-screw-0",
      "p": [
        -0.47,
        1.51,
        0.52
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "face-panel-screw-1",
      "p": [
        0.47,
        1.51,
        0.52
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "face-panel-screw-2",
      "p": [
        -0.47,
        2.02,
        0.52
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "face-panel-screw-3",
      "p": [
        0.47,
        2.02,
        0.52
      ],
      "s": [
        0.07,
        0.04,
        0.07
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "maker-badge",
      "p": [
        0,
        0.79,
        0.4
      ],
      "s": [
        0.41,
        0.2,
        0.05
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "circuit-trace-0",
      "from": [
        -0.35,
        0.63,
        0.38
      ],
      "to": [
        0.35,
        0.63,
        0.38
      ],
      "r": 0.018,
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "circuit-trace-1",
      "from": [
        -0.35,
        0.74,
        0.38
      ],
      "to": [
        0.35,
        0.74,
        0.38
      ],
      "r": 0.018,
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "circuit-trace-2",
      "from": [
        -0.35,
        0.85,
        0.38
      ],
      "to": [
        0.35,
        0.85,
        0.38
      ],
      "r": 0.018,
      "c": 9487573,
      "finish": "glow"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
