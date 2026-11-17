import { buildRecipe } from './recipe_engine.js';
/** Stormwater Rain Garden Basin / 雨水花园渗滤池: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "urban.stormwater-rain-garden-basin.001",
  "slug": "stormwater-rain-garden-basin",
  "title": "Stormwater Rain Garden Basin",
  "title_zh": "雨水花园渗滤池",
  "summary": "Street drainage planter with tiered gravel, native grass and inlet channel",
  "category": "urban",
  "tags": [
    "stormwater",
    "rain",
    "garden",
    "basin",
    "urban",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.05,
    1.28,
    2.65
  ],
  "generator": "createStormwaterRainGardenBasin",
  "source_path": "src/models/stormwater_rain_garden_basin.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/stormwater-rain-garden-basin.webp",
  "accent": "#80a47b"
};
export function createStormwaterRainGardenBasin() { return buildRecipe({
  "title": "Stormwater Rain Garden Basin",
  "dimensions": [
    3.05,
    1.28,
    2.65
  ],
  "parts": [
    {
      "t": "box",
      "n": "rain-garden-edge",
      "p": [
        0,
        0.19,
        0
      ],
      "s": [
        2.8,
        0.38,
        2.26
      ],
      "c": 8430715
    },
    {
      "t": "box",
      "n": "biofiltration-soil",
      "p": [
        0,
        0.36,
        0
      ],
      "s": [
        2.54,
        0.17,
        2.06
      ],
      "c": 6981785
    },
    {
      "t": "box",
      "n": "stormwater-inlet",
      "p": [
        1.33,
        0.38,
        0
      ],
      "s": [
        0.22,
        0.15,
        0.55
      ],
      "c": 5332324
    },
    {
      "t": "rod",
      "n": "native-grass-0",
      "from": [
        -0.78,
        0.42,
        -0.56
      ],
      "to": [
        -0.78,
        0.91,
        -0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-0",
      "p": [
        -0.78,
        0.83,
        -0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-1",
      "from": [
        -0.26,
        0.42,
        -0.56
      ],
      "to": [
        -0.20109703106344726,
        1.04,
        -0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-1",
      "p": [
        -0.26,
        0.95,
        -0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-2",
      "from": [
        0.26,
        0.42,
        -0.56
      ],
      "to": [
        0.32365081987779776,
        1.17,
        -0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-2",
      "p": [
        0.26,
        1.0699999999999998,
        -0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-3",
      "from": [
        0.78,
        0.42,
        -0.56
      ],
      "to": [
        0.7898784005641908,
        0.91,
        -0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-3",
      "p": [
        0.78,
        0.83,
        -0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-4",
      "from": [
        -0.78,
        0.42,
        0
      ],
      "to": [
        -0.832976174671555,
        1.04,
        0
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-4",
      "p": [
        -0.78,
        0.95,
        0
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-5",
      "from": [
        -0.26,
        0.42,
        0
      ],
      "to": [
        -0.32712469922641974,
        1.17,
        0
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-5",
      "p": [
        -0.26,
        1.0699999999999998,
        0
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-6",
      "from": [
        0.26,
        0.42,
        0
      ],
      "to": [
        0.24044091512607518,
        0.91,
        0
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-6",
      "p": [
        0.26,
        0.83,
        0
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-7",
      "from": [
        0.78,
        0.42,
        0
      ],
      "to": [
        0.8259890619103153,
        1.04,
        0
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-7",
      "p": [
        0.78,
        0.95,
        0
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-8",
      "from": [
        -0.78,
        0.42,
        0.56
      ],
      "to": [
        -0.7107449227363632,
        1.17,
        0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-8",
      "p": [
        -0.78,
        1.0699999999999998,
        0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-9",
      "from": [
        -0.26,
        0.42,
        0.56
      ],
      "to": [
        -0.23115170603307705,
        0.91,
        0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-9",
      "p": [
        -0.26,
        0.83,
        0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-10",
      "from": [
        0.26,
        0.42,
        0.56
      ],
      "to": [
        0.2219185222377441,
        1.04,
        0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-10",
      "p": [
        0.26,
        0.95,
        0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "rod",
      "n": "native-grass-11",
      "from": [
        0.78,
        0.42,
        0.56
      ],
      "to": [
        0.7100006855414508,
        1.17,
        0.56
      ],
      "r": 0.021,
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "leaf-cluster-11",
      "p": [
        0.78,
        1.0699999999999998,
        0.56
      ],
      "s": [
        0.16,
        0.1,
        0.18
      ],
      "c": 15189870
    },
    {
      "t": "sphere",
      "n": "river-rock-0",
      "p": [
        -1,
        0.43,
        0.72
      ],
      "s": [
        0.17,
        0.1,
        0.15
      ],
      "c": 5332324
    },
    {
      "t": "sphere",
      "n": "river-rock-1",
      "p": [
        -0.6,
        0.43,
        0.72
      ],
      "s": [
        0.17,
        0.1,
        0.15
      ],
      "c": 5332324
    },
    {
      "t": "sphere",
      "n": "river-rock-2",
      "p": [
        -0.19999999999999996,
        0.43,
        0.72
      ],
      "s": [
        0.17,
        0.1,
        0.15
      ],
      "c": 5332324
    },
    {
      "t": "sphere",
      "n": "river-rock-3",
      "p": [
        0.20000000000000018,
        0.43,
        0.72
      ],
      "s": [
        0.17,
        0.1,
        0.15
      ],
      "c": 5332324
    },
    {
      "t": "sphere",
      "n": "river-rock-4",
      "p": [
        0.6000000000000001,
        0.43,
        0.72
      ],
      "s": [
        0.17,
        0.1,
        0.15
      ],
      "c": 5332324
    }
  ]
}); }
