import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Bamboo Wetland Walkway Biome / 竹林湿地栈道微景观. */
export const assetMeta = {
  "id": "nature.bamboo-wetland-walkway-biome.001",
  "slug": "bamboo-wetland-walkway-biome",
  "title": "Bamboo Wetland Walkway Biome",
  "title_zh": "竹林湿地栈道微景观",
  "summary": "Wetland pool with bamboo clusters, wooden boardwalk and lily pads",
  "category": "nature",
  "tags": [
    "bamboo",
    "wetland",
    "walkway",
    "biome",
    "nature",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.5,
    2.78,
    3
  ],
  "generator": "createBambooWetlandWalkwayBiome",
  "source_path": "src/models/bamboo_wetland_walkway_biome.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/bamboo-wetland-walkway-biome.webp",
  "accent": "#7e9d7a"
};
export function createBambooWetlandWalkwayBiome() { return buildRecipe({
  "title": "Bamboo Wetland Walkway Biome",
  "dimensions": [
    3.5,
    2.78,
    3
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-shallow-wetland-earth-base",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        3.02,
        0.3,
        2.49
      ],
      "c": 9992545
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-still-water-surface",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        2.59,
        0.048,
        2.15
      ],
      "c": 8042678
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-0",
      "from": [
        0.88,
        0.27,
        0
      ],
      "to": [
        0.88,
        1.75,
        0
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-0",
      "p": [
        1.02,
        0.86,
        0
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-1",
      "from": [
        0.6741191099447007,
        0.27,
        0.5656530965241545
      ],
      "to": [
        0.6741191099447007,
        2,
        0.5656530965241545
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-1",
      "p": [
        0.8141191099447007,
        1.07,
        0.5656530965241545
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-2",
      "from": [
        0.15281039634689877,
        0.27,
        0.8666308226507431
      ],
      "to": [
        0.15281039634689877,
        2.25,
        0.8666308226507431
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-2",
      "p": [
        0.29281039634689876,
        1.28,
        0.8666308226507431
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-3",
      "from": [
        -0.4399999999999998,
        0.27,
        0.762102355330306
      ],
      "to": [
        -0.4399999999999998,
        1.75,
        0.762102355330306
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-3",
      "p": [
        -0.29999999999999977,
        0.86,
        0.762102355330306
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-4",
      "from": [
        -0.8269295062915993,
        0.27,
        0.30097772612658863
      ],
      "to": [
        -0.8269295062915993,
        2,
        0.30097772612658863
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-4",
      "p": [
        -0.6869295062915993,
        1.07,
        0.30097772612658863
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-5",
      "from": [
        -0.8269295062915994,
        0.27,
        -0.3009777261265884
      ],
      "to": [
        -0.8269295062915994,
        2.25,
        -0.3009777261265884
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-5",
      "p": [
        -0.6869295062915994,
        1.28,
        -0.3009777261265884
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-6",
      "from": [
        -0.4400000000000004,
        0.27,
        -0.7621023553303058
      ],
      "to": [
        -0.4400000000000004,
        1.75,
        -0.7621023553303058
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-6",
      "p": [
        -0.3000000000000004,
        0.86,
        -0.7621023553303058
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-7",
      "from": [
        0.1528103963468984,
        0.27,
        -0.8666308226507432
      ],
      "to": [
        0.1528103963468984,
        2,
        -0.8666308226507432
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-7",
      "p": [
        0.2928103963468984,
        1.07,
        -0.8666308226507432
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "rod",
      "n": "bamboo-wetland-walkway-biome-bamboo-reed-cane-8",
      "from": [
        0.6741191099447005,
        0.27,
        -0.5656530965241549
      ],
      "to": [
        0.6741191099447005,
        2.25,
        -0.5656530965241549
      ],
      "r": 0.051,
      "c": 8297850
    },
    {
      "t": "sphere",
      "n": "bamboo-wetland-walkway-biome-bamboo-leaf-fan-8",
      "p": [
        0.8141191099447005,
        1.28,
        -0.5656530965241549
      ],
      "s": [
        0.25,
        0.08,
        0.14
      ],
      "c": 7970932
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-0",
      "p": [
        -1.21,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-1",
      "p": [
        -0.98,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-2",
      "p": [
        -0.75,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-3",
      "p": [
        -0.5199999999999999,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-4",
      "p": [
        -0.2899999999999999,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-5",
      "p": [
        -0.05999999999999983,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-6",
      "p": [
        0.17000000000000015,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-7",
      "p": [
        0.40000000000000013,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-8",
      "p": [
        0.6300000000000001,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-9",
      "p": [
        0.8600000000000003,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    },
    {
      "t": "box",
      "n": "bamboo-wetland-walkway-biome-timber-wetland-walkway-plank-10",
      "p": [
        1.0900000000000003,
        0.47,
        0.15
      ],
      "s": [
        0.21,
        0.07,
        0.84
      ],
      "c": 13286817
    }
  ]
}); }
