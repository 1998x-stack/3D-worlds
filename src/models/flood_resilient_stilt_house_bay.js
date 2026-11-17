import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Flood Resilient Stilt House Bay / 防洪高架建筑模块. */
export const assetMeta = {
  "id": "architecture.flood-resilient-stilt-house-bay.001",
  "slug": "flood-resilient-stilt-house-bay",
  "title": "Flood Resilient Stilt House Bay",
  "title_zh": "防洪高架建筑模块",
  "summary": "Stilt-raised housing module with flood-clearance columns, deck and stair",
  "category": "architecture",
  "tags": [
    "flood",
    "resilient",
    "stilt",
    "house",
    "bay",
    "architecture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.8,
    3.65,
    3.35
  ],
  "generator": "createFloodResilientStiltHouseBay",
  "source_path": "src/models/flood_resilient_stilt_house_bay.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/flood-resilient-stilt-house-bay.webp",
  "accent": "#d8d2bc"
};
export function createFloodResilientStiltHouseBay() { return buildRecipe({
  "title": "Flood Resilient Stilt House Bay",
  "dimensions": [
    3.8,
    3.65,
    3.35
  ],
  "parts": [
    {
      "t": "rod",
      "n": "elevated-flood-column--1.49--1.24",
      "from": [
        -1.49,
        0.05,
        -1.24
      ],
      "to": [
        -1.49,
        2.12,
        -1.24
      ],
      "r": 0.135,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "elevated-flood-column--1.49-1.24",
      "from": [
        -1.49,
        0.05,
        1.24
      ],
      "to": [
        -1.49,
        2.12,
        1.24
      ],
      "r": 0.135,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "elevated-flood-column-1.49--1.24",
      "from": [
        1.49,
        0.05,
        -1.24
      ],
      "to": [
        1.49,
        2.12,
        -1.24
      ],
      "r": 0.135,
      "c": 6389383
    },
    {
      "t": "rod",
      "n": "elevated-flood-column-1.49-1.24",
      "from": [
        1.49,
        0.05,
        1.24
      ],
      "to": [
        1.49,
        2.12,
        1.24
      ],
      "r": 0.135,
      "c": 6389383
    },
    {
      "t": "box",
      "n": "stilt-house-elevated-platform",
      "p": [
        0,
        2.13,
        0
      ],
      "s": [
        3.3,
        0.24,
        2.89
      ],
      "c": 12362108
    },
    {
      "t": "box",
      "n": "flood-resilient-house-shell",
      "p": [
        0,
        2.74,
        0
      ],
      "s": [
        2.75,
        1.12,
        2.2
      ],
      "c": 14209724
    },
    {
      "t": "box",
      "n": "house-pitched-roof",
      "p": [
        0,
        3.3,
        0
      ],
      "s": [
        3.1,
        0.14,
        2.54
      ],
      "c": 6389383
    },
    {
      "t": "box",
      "n": "external-flood-stair-0",
      "p": [
        0.75,
        0.3,
        1.36
      ],
      "s": [
        0.9,
        0.16,
        0.27
      ],
      "c": 12362108
    },
    {
      "t": "box",
      "n": "external-flood-stair-1",
      "p": [
        0.75,
        0.6499999999999999,
        1.55
      ],
      "s": [
        0.9,
        0.16,
        0.27
      ],
      "c": 12362108
    },
    {
      "t": "box",
      "n": "external-flood-stair-2",
      "p": [
        0.75,
        1,
        1.7400000000000002
      ],
      "s": [
        0.9,
        0.16,
        0.27
      ],
      "c": 12362108
    },
    {
      "t": "box",
      "n": "external-flood-stair-3",
      "p": [
        0.75,
        1.3499999999999999,
        1.9300000000000002
      ],
      "s": [
        0.9,
        0.16,
        0.27
      ],
      "c": 12362108
    },
    {
      "t": "box",
      "n": "external-flood-stair-4",
      "p": [
        0.75,
        1.7,
        2.12
      ],
      "s": [
        0.9,
        0.16,
        0.27
      ],
      "c": 12362108
    },
    {
      "t": "rod",
      "n": "deck-balustrade-0",
      "from": [
        -1.47,
        2.75,
        -1.1
      ],
      "to": [
        1.47,
        2.75,
        -1.1
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "deck-balustrade-1",
      "from": [
        -1.47,
        2.75,
        -0.41000000000000014
      ],
      "to": [
        1.47,
        2.75,
        -0.41000000000000014
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "deck-balustrade-2",
      "from": [
        -1.47,
        2.75,
        0.2799999999999998
      ],
      "to": [
        1.47,
        2.75,
        0.2799999999999998
      ],
      "r": 0.028,
      "c": 6721178
    },
    {
      "t": "rod",
      "n": "deck-balustrade-3",
      "from": [
        -1.47,
        2.75,
        0.9699999999999998
      ],
      "to": [
        1.47,
        2.75,
        0.9699999999999998
      ],
      "r": 0.028,
      "c": 6721178
    }
  ]
}); }
