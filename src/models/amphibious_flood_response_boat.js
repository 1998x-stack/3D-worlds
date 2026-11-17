import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Amphibious Flood Response Boat / 水陆两栖防汛救援艇. */
export const assetMeta = {
  "id": "vehicles.amphibious-flood-response-boat.001",
  "slug": "amphibious-flood-response-boat",
  "title": "Amphibious Flood Response Boat",
  "title_zh": "水陆两栖防汛救援艇",
  "summary": "Civilian flood response craft with pontoons, folded wheels, life ring and rescue rail",
  "category": "vehicles",
  "tags": [
    "amphibious",
    "flood",
    "response",
    "boat",
    "vehicles",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.7,
    2.26,
    4.62
  ],
  "generator": "createAmphibiousFloodResponseBoat",
  "source_path": "src/models/amphibious_flood_response_boat.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/amphibious-flood-response-boat.webp",
  "accent": "#395668"
};
export function createAmphibiousFloodResponseBoat() { return buildRecipe({
  "title": "Amphibious Flood Response Boat",
  "dimensions": [
    2.7,
    2.26,
    4.62
  ],
  "parts": [
    {
      "t": "sphere",
      "n": "amphibious-flood-response-boat-amphibious-rescue-center-hull",
      "p": [
        0,
        0.52,
        0
      ],
      "s": [
        2.01,
        0.71,
        3.78
      ],
      "c": 7446440
    },
    {
      "t": "sphere",
      "n": "amphibious-flood-response-boat-rescue-inflatable-side-pontoon--1",
      "p": [
        -0.89,
        0.53,
        0
      ],
      "s": [
        0.56,
        0.56,
        3.88
      ],
      "c": 13874536
    },
    {
      "t": "cylinder",
      "n": "amphibious-flood-response-boat-folded-amphibious-wheel--1",
      "p": [
        -1.1,
        0.33,
        1.1
      ],
      "s": [
        0.48,
        0.17,
        0.48
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "torus",
      "n": "amphibious-flood-response-boat-marine-life-ring--1",
      "p": [
        -1.15,
        1.12,
        -0.52
      ],
      "s": [
        0.49,
        0.49,
        0.49
      ],
      "c": 15127721,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "amphibious-flood-response-boat-rescue-grabrail--1",
      "from": [
        -0.78,
        0.97,
        -1.3
      ],
      "to": [
        -0.78,
        1.07,
        1.3
      ],
      "r": 0.035,
      "c": 3757672
    },
    {
      "t": "sphere",
      "n": "amphibious-flood-response-boat-rescue-inflatable-side-pontoon-1",
      "p": [
        0.89,
        0.53,
        0
      ],
      "s": [
        0.56,
        0.56,
        3.88
      ],
      "c": 13874536
    },
    {
      "t": "cylinder",
      "n": "amphibious-flood-response-boat-folded-amphibious-wheel-1",
      "p": [
        1.1,
        0.33,
        1.1
      ],
      "s": [
        0.48,
        0.17,
        0.48
      ],
      "c": 2834000,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "torus",
      "n": "amphibious-flood-response-boat-marine-life-ring-1",
      "p": [
        1.15,
        1.12,
        -0.52
      ],
      "s": [
        0.49,
        0.49,
        0.49
      ],
      "c": 15127721,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "amphibious-flood-response-boat-rescue-grabrail-1",
      "from": [
        0.78,
        0.97,
        -1.3
      ],
      "to": [
        0.78,
        1.07,
        1.3
      ],
      "r": 0.035,
      "c": 3757672
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-flood-response-control-cabin",
      "p": [
        0,
        1.38,
        -0.64
      ],
      "s": [
        1.28,
        1.08,
        1.05
      ],
      "c": 3757672
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-transparent-forward-windscreen",
      "p": [
        0,
        1.56,
        -0.03
      ],
      "s": [
        1.03,
        0.6,
        0.055
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-maritime-beacon",
      "p": [
        0,
        2.11,
        -0.72
      ],
      "s": [
        0.18,
        0.19,
        0.21
      ],
      "c": 13874536
    },
    {
      "t": "cylinder",
      "n": "amphibious-flood-response-boat-rescue-tow-cleat",
      "p": [
        0,
        0.92,
        -1.46
      ],
      "s": [
        0.22,
        0.25,
        0.22
      ],
      "c": 3757672
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-structural-fitting-0",
      "p": [
        -0.4,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-structural-fitting-1",
      "p": [
        -0.33,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-structural-fitting-2",
      "p": [
        -0.26,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-structural-fitting-3",
      "p": [
        -0.19,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    },
    {
      "t": "box",
      "n": "amphibious-flood-response-boat-structural-fitting-4",
      "p": [
        -0.12,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 2834000
    }
  ]
}); }
