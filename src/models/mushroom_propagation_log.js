import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Mushroom Propagation Log / 蘑菇培育倒木微景观. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "nature.mushroom-propagation-log.001",
  "slug": "mushroom-propagation-log",
  "title": "Mushroom Propagation Log",
  "title_zh": "蘑菇培育倒木微景观",
  "summary": "Fallen hardwood log with clustered mushroom caps, textured bark and moss pads",
  "category": "nature",
  "tags": [
    "mushroom",
    "propagation",
    "log",
    "nature",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.35,
    0.22,
    0.21
  ],
  "generator": "createMushroomPropagationLog",
  "source_path": "src/models/mushroom_propagation_log.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/mushroom-propagation-log.webp",
  "accent": "#4d9e72"
};
export function createMushroomPropagationLog() { return buildRecipe({
  "title": "Mushroom Propagation Log",
  "dimensions": [
    0.35,
    0.22,
    0.21
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "fallen-log",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        2.55,
        0.82,
        1
      ],
      "c": 8215879,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "bark-scar-0",
      "p": [
        -1.02,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-1",
      "p": [
        -0.73,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-2",
      "p": [
        -0.44000000000000006,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-3",
      "p": [
        -0.15000000000000013,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-4",
      "p": [
        0.1399999999999999,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-5",
      "p": [
        0.42999999999999994,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-6",
      "p": [
        0.7199999999999998,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "box",
      "n": "bark-scar-7",
      "p": [
        1.0099999999999998,
        0.77,
        0
      ],
      "s": [
        0.08,
        0.05,
        0.85
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-0",
      "p": [
        -0.9,
        0.91,
        -0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-0",
      "p": [
        -0.9,
        1.18,
        -0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-1",
      "p": [
        -0.6000000000000001,
        0.91,
        0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-1",
      "p": [
        -0.6000000000000001,
        1.18,
        0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-2",
      "p": [
        -0.30000000000000004,
        0.91,
        -0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-2",
      "p": [
        -0.30000000000000004,
        1.18,
        -0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-3",
      "p": [
        -1.1102230246251565e-16,
        0.91,
        0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-3",
      "p": [
        -1.1102230246251565e-16,
        1.18,
        0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-4",
      "p": [
        0.29999999999999993,
        0.91,
        -0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-4",
      "p": [
        0.29999999999999993,
        1.18,
        -0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-5",
      "p": [
        0.6,
        0.91,
        0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-5",
      "p": [
        0.6,
        1.18,
        0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 14648424
    },
    {
      "t": "cylinder",
      "n": "mushroom-stem-6",
      "p": [
        0.8999999999999998,
        0.91,
        -0.24
      ],
      "s": [
        0.12,
        0.45,
        0.12
      ],
      "c": 15853002
    },
    {
      "t": "cone",
      "n": "mushroom-cap-6",
      "p": [
        0.8999999999999998,
        1.18,
        -0.24
      ],
      "s": [
        0.36,
        0.24,
        0.36
      ],
      "c": 15776881
    },
    {
      "t": "sphere",
      "n": "moss-cushion-0",
      "p": [
        -1,
        0.72,
        -0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "moss-cushion-1",
      "p": [
        -0.6599999999999999,
        0.72,
        0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "moss-cushion-2",
      "p": [
        -0.31999999999999995,
        0.72,
        -0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "moss-cushion-3",
      "p": [
        0.020000000000000018,
        0.72,
        0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "moss-cushion-4",
      "p": [
        0.3600000000000001,
        0.72,
        -0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "moss-cushion-5",
      "p": [
        0.7000000000000002,
        0.72,
        0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    },
    {
      "t": "sphere",
      "n": "moss-cushion-6",
      "p": [
        1.04,
        0.72,
        -0.37
      ],
      "s": [
        0.31,
        0.13,
        0.25
      ],
      "c": 5086834
    }
  ]
}); }
