import { buildRecipe } from './recipe_engine.js';
/** Compact Cedar Sauna Cabin / 小型雪松桑拿房: original authored, source-editable scene prop. */
export const assetMeta = {
  "id": "bathroom.compact-cedar-sauna-cabin.001",
  "slug": "compact-cedar-sauna-cabin",
  "title": "Compact Cedar Sauna Cabin",
  "title_zh": "小型雪松桑拿房",
  "summary": "Cedar mini-sauna enclosure with glazing, stacked benches, heater and ventilation slats",
  "category": "bathroom",
  "tags": [
    "sauna",
    "cedar",
    "wellness"
  ],
  "dimensions_m": [
    1.73,
    2.2,
    1.44
  ],
  "generator": "createCompactCedarSaunaCabin",
  "source_path": "src/models/compact_cedar_sauna_cabin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.7",
  "preview_path": "public/thumbs/compact-cedar-sauna-cabin.webp"
};
export function createCompactCedarSaunaCabin() { return buildRecipe({
  "title": "Compact Cedar Sauna Cabin",
  "dimensions": [
    1.73,
    2.2,
    1.44
  ],
  "parts": [
    {
      "t": "box",
      "n": "sauna-box",
      "p": [
        0,
        1.1,
        0
      ],
      "s": [
        1.69,
        2.18,
        1.42
      ],
      "c": 11109218
    },
    {
      "t": "box",
      "n": "glass-entrance",
      "p": [
        0,
        1.06,
        0.722
      ],
      "s": [
        0.76,
        1.86,
        0.03
      ],
      "c": 7972272
    },
    {
      "t": "rod",
      "n": "door-pull",
      "from": [
        0.28,
        0.75,
        0.76
      ],
      "to": [
        0.28,
        1.18,
        0.76
      ],
      "r": 0.018,
      "c": 9741736
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-0",
      "p": [
        -0.74,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-1",
      "p": [
        -0.575,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-2",
      "p": [
        -0.41,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-3",
      "p": [
        -0.245,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-4",
      "p": [
        -0.07999999999999996,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-5",
      "p": [
        0.08500000000000008,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-6",
      "p": [
        0.25,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-7",
      "p": [
        0.41500000000000004,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-8",
      "p": [
        0.5800000000000001,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "cedar-wall-strip-9",
      "p": [
        0.7450000000000001,
        1.02,
        0.737
      ],
      "s": [
        0.035,
        1.93,
        0.025
      ],
      "c": 7493176
    },
    {
      "t": "box",
      "n": "upper-bench",
      "p": [
        0.22,
        0.77,
        -0.31
      ],
      "s": [
        1.16,
        0.07,
        0.53
      ],
      "c": 14134393
    },
    {
      "t": "box",
      "n": "lower-bench",
      "p": [
        -0.12,
        0.43,
        0.14
      ],
      "s": [
        1.04,
        0.06,
        0.47
      ],
      "c": 13212785
    },
    {
      "t": "box",
      "n": "bench-leg-0",
      "p": [
        -0.48,
        0.24,
        -0.25
      ],
      "s": [
        0.075,
        0.46,
        0.12
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "bench-leg-1",
      "p": [
        0.49,
        0.24,
        -0.25
      ],
      "s": [
        0.075,
        0.46,
        0.12
      ],
      "c": 9924685
    },
    {
      "t": "box",
      "n": "heater-housing",
      "p": [
        -0.6,
        0.27,
        -0.37
      ],
      "s": [
        0.31,
        0.53,
        0.35
      ],
      "c": 3490120
    },
    {
      "t": "sphere",
      "n": "heater-stone-0",
      "p": [
        -0.68,
        0.58,
        -0.4
      ],
      "s": [
        0.09,
        0.065,
        0.08
      ],
      "c": 9741736
    },
    {
      "t": "sphere",
      "n": "heater-stone-1",
      "p": [
        -0.5950000000000001,
        0.58,
        -0.4
      ],
      "s": [
        0.09,
        0.065,
        0.08
      ],
      "c": 9741736
    },
    {
      "t": "sphere",
      "n": "heater-stone-2",
      "p": [
        -0.51,
        0.58,
        -0.4
      ],
      "s": [
        0.09,
        0.065,
        0.08
      ],
      "c": 9741736
    },
    {
      "t": "sphere",
      "n": "heater-stone-3",
      "p": [
        -0.68,
        0.58,
        -0.27
      ],
      "s": [
        0.09,
        0.065,
        0.08
      ],
      "c": 9741736
    },
    {
      "t": "sphere",
      "n": "heater-stone-4",
      "p": [
        -0.5950000000000001,
        0.58,
        -0.27
      ],
      "s": [
        0.09,
        0.065,
        0.08
      ],
      "c": 9741736
    },
    {
      "t": "box",
      "n": "ceiling-vent",
      "p": [
        0.48,
        2.12,
        0.38
      ],
      "s": [
        0.3,
        0.035,
        0.25
      ],
      "c": 3490120
    },
    {
      "t": "box",
      "n": "floor-tile",
      "p": [
        0,
        0.045,
        0
      ],
      "s": [
        1.65,
        0.09,
        1.4
      ],
      "c": 7892571
    }
  ]
}); }
