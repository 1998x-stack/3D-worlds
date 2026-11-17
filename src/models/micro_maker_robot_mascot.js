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
  "accent": "#f0bc71"
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
      "t": "box",
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
      "t": "box",
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
      "c": 3229017
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
      "c": 7915949
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
      "c": 13938523
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
      "c": 7915949
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
      "c": 13938523
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
      "c": 15001563
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
      "c": 15001563
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
      "c": 15001563
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
      "c": 15001563
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
      "c": 15001563
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
      "c": 15001563
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
      "c": 14648424
    }
  ]
}); }
