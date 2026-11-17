import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Marine Composting Toilet Module / 船舶堆肥式卫生间模块. */
export const assetMeta = {
  "id": "bathroom.marine-composting-toilet-module.001",
  "slug": "marine-composting-toilet-module",
  "title": "Marine Composting Toilet Module",
  "title_zh": "船舶堆肥式卫生间模块",
  "summary": "Water-saving compact marine composting restroom with vent chimney and sealed tank",
  "category": "bathroom",
  "tags": [
    "marine",
    "composting",
    "toilet",
    "module",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.55,
    1.95,
    1.25
  ],
  "generator": "createMarineCompostingToiletModule",
  "source_path": "src/models/marine_composting_toilet_module.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/marine-composting-toilet-module.webp",
  "accent": "#abc6cd"
};
export function createMarineCompostingToiletModule() { return buildRecipe({
  "title": "Marine Composting Toilet Module",
  "dimensions": [
    1.55,
    1.95,
    1.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "marine-washroom-base",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        1.31,
        0.2,
        1.03
      ],
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "composting-toilet-housing",
      "p": [
        0,
        0.55,
        0.06
      ],
      "s": [
        0.63,
        0.65,
        0.63
      ],
      "c": 15068139
    },
    {
      "t": "cylinder",
      "n": "removable-seat-ring",
      "p": [
        0,
        0.91,
        0.06
      ],
      "s": [
        0.59,
        0.08,
        0.59
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "sealed-organic-collection-tank",
      "p": [
        0,
        0.3,
        -0.37
      ],
      "s": [
        0.91,
        0.42,
        0.43
      ],
      "c": 3954279
    },
    {
      "t": "rod",
      "n": "odor-extract-vent",
      "from": [
        0.42,
        0.29,
        -0.37
      ],
      "to": [
        0.42,
        1.89,
        -0.37
      ],
      "r": 0.044,
      "c": 7178391
    },
    {
      "t": "cylinder",
      "n": "vent-chimney-cap",
      "p": [
        0.42,
        1.91,
        -0.37
      ],
      "s": [
        0.25,
        0.09,
        0.25
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "service-access-lid",
      "p": [
        0,
        0.38,
        0.42
      ],
      "s": [
        0.52,
        0.38,
        0.05
      ],
      "c": 7178391
    },
    {
      "t": "box",
      "n": "power-saving-controller",
      "p": [
        -0.52,
        0.8,
        0.13
      ],
      "s": [
        0.21,
        0.29,
        0.22
      ],
      "c": 15068139
    },
    {
      "t": "box",
      "n": "airflow-grille-0",
      "p": [
        -0.35,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-1",
      "p": [
        -0.24999999999999997,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-2",
      "p": [
        -0.14999999999999997,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-3",
      "p": [
        -0.04999999999999993,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-4",
      "p": [
        0.050000000000000044,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-5",
      "p": [
        0.15000000000000002,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-6",
      "p": [
        0.2500000000000001,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "airflow-grille-7",
      "p": [
        0.3500000000000001,
        0.29,
        0.45
      ],
      "s": [
        0.055,
        0.06,
        0.03
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "non-slip-foot-pad--1",
      "p": [
        -0.44,
        0.05,
        0.31
      ],
      "s": [
        0.2,
        0.07,
        0.23
      ],
      "c": 11257549
    },
    {
      "t": "box",
      "n": "non-slip-foot-pad-1",
      "p": [
        0.44,
        0.05,
        0.31
      ],
      "s": [
        0.2,
        0.07,
        0.23
      ],
      "c": 11257549
    }
  ]
}); }
