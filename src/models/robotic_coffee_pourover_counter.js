import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Robotic Coffee Pourover Counter / 机器人手冲咖啡台. */
export const assetMeta = {
  "id": "kitchen.robotic-coffee-pourover-counter.001",
  "slug": "robotic-coffee-pourover-counter",
  "title": "Robotic Coffee Pourover Counter",
  "title_zh": "机器人手冲咖啡台",
  "summary": "Automated coffee brewing counter with robotic arm, dripper, scale and kettle",
  "category": "kitchen",
  "tags": [
    "robotic",
    "coffee",
    "pourover",
    "counter",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.7,
    1.58,
    1.05
  ],
  "generator": "createRoboticCoffeePouroverCounter",
  "source_path": "src/models/robotic_coffee_pourover_counter.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/robotic-coffee-pourover-counter.webp",
  "accent": "#c6bdb0"
};
export function createRoboticCoffeePouroverCounter() { return buildRecipe({
  "title": "Robotic Coffee Pourover Counter",
  "dimensions": [
    1.7,
    1.58,
    1.05
  ],
  "parts": [
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-robot-pourover-countertop",
      "p": [
        0,
        0.69,
        0
      ],
      "s": [
        1.46,
        0.12,
        0.82
      ],
      "c": 13024688
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-coffee-booth-leg--0.6--0.31",
      "p": [
        -0.6,
        0.34,
        -0.31
      ],
      "s": [
        0.084,
        0.68,
        0.084
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-coffee-booth-leg--0.6-0.31",
      "p": [
        -0.6,
        0.34,
        0.31
      ],
      "s": [
        0.084,
        0.68,
        0.084
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-coffee-booth-leg-0.6--0.31",
      "p": [
        0.6,
        0.34,
        -0.31
      ],
      "s": [
        0.084,
        0.68,
        0.084
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-coffee-booth-leg-0.6-0.31",
      "p": [
        0.6,
        0.34,
        0.31
      ],
      "s": [
        0.084,
        0.68,
        0.084
      ],
      "c": 7178896
    },
    {
      "t": "cylinder",
      "n": "robotic-coffee-pourover-counter-digital-pourover-scale",
      "p": [
        0.27,
        0.85,
        0.07
      ],
      "s": [
        0.27,
        0.048,
        0.27
      ],
      "c": 3558230
    },
    {
      "t": "cone",
      "n": "robotic-coffee-pourover-counter-ceramic-conical-coffee-dripper",
      "p": [
        0.27,
        1.13,
        0.07
      ],
      "s": [
        0.26,
        0.28,
        0.26
      ],
      "c": 14726765
    },
    {
      "t": "cylinder",
      "n": "robotic-coffee-pourover-counter-coffee-extraction-server",
      "p": [
        0.27,
        0.96,
        0.07
      ],
      "s": [
        0.24,
        0.25,
        0.24
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-cafe-robotic-kettle",
      "p": [
        -0.48,
        0.98,
        0.22
      ],
      "s": [
        0.32,
        0.33,
        0.27
      ],
      "c": 3558230
    },
    {
      "t": "rod",
      "n": "robotic-coffee-pourover-counter-robotic-arm-base",
      "from": [
        -0.54,
        0.76,
        -0.22
      ],
      "to": [
        -0.54,
        1.42,
        -0.22
      ],
      "r": 0.051,
      "c": 7178896
    },
    {
      "t": "rod",
      "n": "robotic-coffee-pourover-counter-robotic-pour-joint",
      "from": [
        -0.54,
        1.42,
        -0.22
      ],
      "to": [
        0.02,
        1.51,
        0.05
      ],
      "r": 0.052,
      "c": 7178896
    },
    {
      "t": "rod",
      "n": "robotic-coffee-pourover-counter-robotic-spout",
      "from": [
        0.02,
        1.51,
        0.05
      ],
      "to": [
        0.17,
        1.28,
        0.1
      ],
      "r": 0.024,
      "c": 3558230
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-brew-temperature-button-0",
      "p": [
        -0.43,
        0.76,
        0.38
      ],
      "s": [
        0.084,
        0.02,
        0.035
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-brew-temperature-button-1",
      "p": [
        -0.27,
        0.76,
        0.38
      ],
      "s": [
        0.084,
        0.02,
        0.035
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-brew-temperature-button-2",
      "p": [
        -0.10999999999999999,
        0.76,
        0.38
      ],
      "s": [
        0.084,
        0.02,
        0.035
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-brew-temperature-button-3",
      "p": [
        0.04999999999999999,
        0.76,
        0.38
      ],
      "s": [
        0.084,
        0.02,
        0.035
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-brew-temperature-button-4",
      "p": [
        0.21000000000000002,
        0.76,
        0.38
      ],
      "s": [
        0.084,
        0.02,
        0.035
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "robotic-coffee-pourover-counter-brew-temperature-button-5",
      "p": [
        0.37000000000000005,
        0.76,
        0.38
      ],
      "s": [
        0.084,
        0.02,
        0.035
      ],
      "c": 14726765
    }
  ]
}); }
