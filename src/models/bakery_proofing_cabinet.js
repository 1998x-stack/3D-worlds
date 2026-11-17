import { buildRecipe } from './recipe_engine.js';
/** Bakery Proofing Cabinet / 面包醒发柜: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "kitchen.bakery-proofing-cabinet.001",
  "slug": "bakery-proofing-cabinet",
  "title": "Bakery Proofing Cabinet",
  "title_zh": "面包醒发柜",
  "summary": "Commercial dough fermentation cabinet with tray slots and humidity controls",
  "category": "kitchen",
  "tags": [
    "bakery",
    "proofing",
    "cabinet",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.1,
    1.95,
    0.94
  ],
  "generator": "createBakeryProofingCabinet",
  "source_path": "src/models/bakery_proofing_cabinet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/bakery-proofing-cabinet.webp",
  "accent": "#404c59"
};
export function createBakeryProofingCabinet() { return buildRecipe({
  "title": "Bakery Proofing Cabinet",
  "dimensions": [
    1.1,
    1.95,
    0.94
  ],
  "parts": [
    {
      "t": "box",
      "n": "fermentation-chamber",
      "p": [
        0,
        0.95,
        0
      ],
      "s": [
        0.9,
        1.85,
        0.72
      ],
      "c": 11716041
    },
    {
      "t": "box",
      "n": "glass-proofing-door",
      "p": [
        0,
        1.04,
        0.38
      ],
      "s": [
        0.73,
        1.51,
        0.04
      ],
      "c": 14198889
    },
    {
      "t": "box",
      "n": "proofing-tray-0",
      "p": [
        0,
        0.32,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-0-0",
      "p": [
        -0.21,
        0.38,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-0-1",
      "p": [
        0.21,
        0.38,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "proofing-tray-1",
      "p": [
        0,
        0.53,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-1-0",
      "p": [
        -0.21,
        0.59,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-1-1",
      "p": [
        0.21,
        0.59,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "proofing-tray-2",
      "p": [
        0,
        0.74,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-2-0",
      "p": [
        -0.21,
        0.8,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-2-1",
      "p": [
        0.21,
        0.8,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "proofing-tray-3",
      "p": [
        0,
        0.95,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-3-0",
      "p": [
        -0.21,
        1.01,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-3-1",
      "p": [
        0.21,
        1.01,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "proofing-tray-4",
      "p": [
        0,
        1.16,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-4-0",
      "p": [
        -0.21,
        1.22,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-4-1",
      "p": [
        0.21,
        1.22,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "proofing-tray-5",
      "p": [
        0,
        1.37,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-5-0",
      "p": [
        -0.21,
        1.4300000000000002,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-5-1",
      "p": [
        0.21,
        1.4300000000000002,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "proofing-tray-6",
      "p": [
        0,
        1.58,
        0
      ],
      "s": [
        0.76,
        0.035,
        0.59
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-6-0",
      "p": [
        -0.21,
        1.6400000000000001,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "sphere",
      "n": "proofing-loaf-6-1",
      "p": [
        0.21,
        1.6400000000000001,
        0.05
      ],
      "s": [
        0.18,
        0.07,
        0.19
      ],
      "c": 14476257
    },
    {
      "t": "box",
      "n": "thermostat-panel",
      "p": [
        0,
        1.75,
        0.395
      ],
      "s": [
        0.48,
        0.12,
        0.025
      ],
      "c": 4213849
    },
    {
      "t": "sphere",
      "n": "humidifier-light-0",
      "p": [
        -0.12,
        1.76,
        0.41
      ],
      "s": [
        0.025,
        0.02,
        0.015
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "humidifier-light-1",
      "p": [
        0,
        1.76,
        0.41
      ],
      "s": [
        0.025,
        0.02,
        0.015
      ],
      "c": 14198889
    },
    {
      "t": "sphere",
      "n": "humidifier-light-2",
      "p": [
        0.12,
        1.76,
        0.41
      ],
      "s": [
        0.025,
        0.02,
        0.015
      ],
      "c": 14198889
    }
  ]
}); }
