import { buildRecipe } from './recipe_engine.js';
/** Asteroid Refinery Module: original source-editable mesh scene. */
export const assetMeta = {
  "id": "scifi.asteroid-refinery-module.001",
  "slug": "asteroid-refinery-module",
  "title": "Asteroid Refinery Module",
  "title_zh": "小行星资源精炼模块",
  "summary": "Nonweapon sci-fi mining refinery with ore hopper, conveyor, pressure cylinders and control bay",
  "category": "scifi",
  "tags": [
    "asteroid",
    "refinery",
    "mining"
  ],
  "dimensions_m": [
    3.12,
    2.83,
    2.67
  ],
  "generator": "createAsteroidRefineryModule",
  "source_path": "src/models/asteroid_refinery_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/asteroid-refinery-module.webp"
};
export function createAsteroidRefineryModule() { return buildRecipe({
  "title": "Asteroid Refinery Module",
  "dimensions": [
    3.12,
    2.83,
    2.67
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "tech-pedestal",
      "p": [
        0,
        0.13,
        0
      ],
      "s": [
        1.18,
        0.25,
        1.05
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "industrial-platform",
      "p": [
        0,
        0.45,
        0
      ],
      "s": [
        2.98,
        0.45,
        2.49
      ],
      "c": 9872548
    },
    {
      "t": "box",
      "n": "ore-hopper",
      "p": [
        0,
        1.66,
        -0.61
      ],
      "s": [
        1.26,
        1.1,
        1.13
      ],
      "c": 8551028
    },
    {
      "t": "box",
      "n": "main-refinery-tower",
      "p": [
        0.66,
        1.4,
        0.36
      ],
      "s": [
        0.85,
        2.12,
        0.83
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "belt-conveyor",
      "p": [
        -0.57,
        0.86,
        0.55
      ],
      "s": [
        1.43,
        0.18,
        0.43
      ],
      "c": 12952430
    },
    {
      "t": "box",
      "n": "conveyor-roller-0",
      "p": [
        -1.16,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-1",
      "p": [
        -0.98,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-2",
      "p": [
        -0.7999999999999999,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-3",
      "p": [
        -0.6199999999999999,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-4",
      "p": [
        -0.43999999999999995,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-5",
      "p": [
        -0.26,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-6",
      "p": [
        -0.07999999999999985,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "box",
      "n": "conveyor-roller-7",
      "p": [
        0.10000000000000009,
        0.97,
        0.55
      ],
      "s": [
        0.065,
        0.023,
        0.45
      ],
      "c": 3753293
    },
    {
      "t": "cylinder",
      "n": "pressure-vessel-0",
      "p": [
        -0.98,
        1.26,
        -0.26
      ],
      "s": [
        0.24,
        0.8,
        0.23
      ],
      "c": 9872548
    },
    {
      "t": "cylinder",
      "n": "pressure-vessel-1",
      "p": [
        -0.6399999999999999,
        1.26,
        -0.26
      ],
      "s": [
        0.24,
        0.8,
        0.23
      ],
      "c": 6657707
    },
    {
      "t": "cylinder",
      "n": "pressure-vessel-2",
      "p": [
        -0.29999999999999993,
        1.26,
        -0.26
      ],
      "s": [
        0.24,
        0.8,
        0.23
      ],
      "c": 9872548
    },
    {
      "t": "cylinder",
      "n": "pressure-vessel-3",
      "p": [
        0.040000000000000036,
        1.26,
        -0.26
      ],
      "s": [
        0.24,
        0.8,
        0.23
      ],
      "c": 6657707
    },
    {
      "t": "cylinder",
      "n": "pressure-vessel-4",
      "p": [
        0.3800000000000001,
        1.26,
        -0.26
      ],
      "s": [
        0.24,
        0.8,
        0.23
      ],
      "c": 9872548
    },
    {
      "t": "sphere",
      "n": "ore-rock-0",
      "p": [
        -0.88,
        1.03,
        0.6
      ],
      "s": [
        0.23,
        0.19,
        0.22
      ],
      "c": 7367780
    },
    {
      "t": "sphere",
      "n": "ore-rock-1",
      "p": [
        -0.62,
        1.03,
        0.6
      ],
      "s": [
        0.23,
        0.19,
        0.22
      ],
      "c": 7367780
    },
    {
      "t": "sphere",
      "n": "ore-rock-2",
      "p": [
        -0.36,
        1.03,
        0.6
      ],
      "s": [
        0.23,
        0.19,
        0.22
      ],
      "c": 7367780
    },
    {
      "t": "sphere",
      "n": "ore-rock-3",
      "p": [
        -0.09999999999999998,
        1.03,
        0.6
      ],
      "s": [
        0.23,
        0.19,
        0.22
      ],
      "c": 7367780
    },
    {
      "t": "sphere",
      "n": "ore-rock-4",
      "p": [
        0.16000000000000003,
        1.03,
        0.6
      ],
      "s": [
        0.23,
        0.19,
        0.22
      ],
      "c": 7367780
    },
    {
      "t": "box",
      "n": "command-panel",
      "p": [
        1.13,
        1.13,
        0.83
      ],
      "s": [
        0.25,
        0.44,
        0.03
      ],
      "c": 6657707
    }
  ]
}); }
