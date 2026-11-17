import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "scifi.lunar-habitat-module.001",
  "slug": "lunar-habitat-module",
  "title": "Lunar Habitat Module",
  "title_zh": "月面居住舱模块",
  "summary": "Modular pressurized lunar habitat with solar wing, airlock, windows and anchor feet",
  "category": "scifi",
  "tags": [
    "lunar",
    "habitat",
    "space"
  ],
  "dimensions_m": [
    3.17,
    2.32,
    3.44
  ],
  "generator": "createLunarHabitatModule",
  "source_path": "src/models/lunar_habitat_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/lunar-habitat-module.webp"
};
export function createLunarHabitatModule() { return buildRecipe({
  "title": "Lunar Habitat Module",
  "dimensions": [
    3.17,
    2.32,
    3.44
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "pressurized-hull",
      "p": [
        0,
        1.15,
        0
      ],
      "s": [
        2.64,
        2.14,
        2.72
      ],
      "c": 15133152
    },
    {
      "t": "cylinder",
      "n": "top-hatch",
      "p": [
        0,
        2.22,
        0
      ],
      "s": [
        0.73,
        0.1,
        0.73
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "airlock-protrusion",
      "p": [
        0,
        0.97,
        1.44
      ],
      "s": [
        1.1,
        1.39,
        0.63
      ],
      "c": 5540513
    },
    {
      "t": "cylinder",
      "n": "airlock-door",
      "p": [
        0,
        1,
        1.78
      ],
      "s": [
        0.73,
        0.05,
        0.73
      ],
      "c": 9741221,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "observation-window-0",
      "p": [
        -0.82,
        1.39,
        0.94
      ],
      "s": [
        0.39,
        0.05,
        0.39
      ],
      "c": 4950684,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "observation-window-1",
      "p": [
        0.82,
        1.39,
        0.94
      ],
      "s": [
        0.39,
        0.05,
        0.39
      ],
      "c": 4950684,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "solar-wing-left",
      "p": [
        -1.66,
        1.51,
        -0.18
      ],
      "s": [
        0.82,
        0.06,
        1.8
      ],
      "c": 4024453
    },
    {
      "t": "box",
      "n": "solar-wing-right",
      "p": [
        1.66,
        1.51,
        -0.18
      ],
      "s": [
        0.82,
        0.06,
        1.8
      ],
      "c": 4024453
    },
    {
      "t": "box",
      "n": "stabilizer-foot-0-0",
      "p": [
        -1.1,
        0.09,
        -1.14
      ],
      "s": [
        0.22,
        0.18,
        0.26
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "stabilizer-foot-0-1",
      "p": [
        -1.1,
        0.09,
        1.14
      ],
      "s": [
        0.22,
        0.18,
        0.26
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "stabilizer-foot-1-0",
      "p": [
        1.1,
        0.09,
        -1.14
      ],
      "s": [
        0.22,
        0.18,
        0.26
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "stabilizer-foot-1-1",
      "p": [
        1.1,
        0.09,
        1.14
      ],
      "s": [
        0.22,
        0.18,
        0.26
      ],
      "c": 3490634
    },
    {
      "t": "box",
      "n": "panel-line-0",
      "p": [
        -1.99,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-1",
      "p": [
        -1.82,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-2",
      "p": [
        -1.65,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-3",
      "p": [
        -1.48,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-4",
      "p": [
        -1.31,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-5",
      "p": [
        -1.14,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-6",
      "p": [
        -0.97,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "box",
      "n": "panel-line-7",
      "p": [
        -0.7999999999999998,
        1.555,
        -0.18
      ],
      "s": [
        0.012,
        0.006,
        1.69
      ],
      "c": 9741221
    },
    {
      "t": "rod",
      "n": "radio-antenna",
      "from": [
        0.5,
        2.18,
        -0.32
      ],
      "to": [
        0.62,
        2.74,
        -0.32
      ],
      "r": 0.025,
      "c": 3490634
    },
    {
      "t": "sphere",
      "n": "antenna-tip",
      "p": [
        0.62,
        2.74,
        -0.32
      ],
      "s": [
        0.07,
        0.07,
        0.07
      ],
      "c": 12953197
    },
    {
      "t": "box",
      "n": "label-panel",
      "p": [
        0,
        0.76,
        1.79
      ],
      "s": [
        0.47,
        0.18,
        0.02
      ],
      "c": 11059117
    }
  ]
}); }
