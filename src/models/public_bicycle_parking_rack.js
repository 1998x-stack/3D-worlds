import { buildRecipe } from './recipe_engine.js';
export const assetMeta = {
  "id": "urban.public-bicycle-parking-rack.001",
  "slug": "public-bicycle-parking-rack",
  "title": "Public Bicycle Parking Rack",
  "title_zh": "公共自行车停放架",
  "summary": "Four steel bicycle parking loops anchored to a concrete curb.",
  "category": "urban",
  "tags": [
    "bike",
    "parking",
    "public"
  ],
  "dimensions_m": [
    2.09,
    0.84,
    0.72
  ],
  "generator": "createPublicBicycleParkingRack",
  "source_path": "src/models/public_bicycle_parking_rack.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/public-bicycle-parking-rack.webp"
};
export function createPublicBicycleParkingRack() {
 return buildRecipe({
  "title": "Public Bicycle Parking Rack",
  "dimensions": [
    2.09,
    0.84,
    0.72
  ],
  "parts": [
    {
      "t": "box",
      "n": "curb",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        2.09,
        0.16,
        0.68
      ],
      "c": 10922661
    },
    {
      "t": "rod",
      "n": "left-post-0",
      "from": [
        -0.88,
        0.15,
        -0.22
      ],
      "to": [
        -0.88,
        0.72,
        -0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "right-post-0",
      "from": [
        -0.62,
        0.15,
        0.22
      ],
      "to": [
        -0.62,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-left-0",
      "from": [
        -0.88,
        0.72,
        -0.22
      ],
      "to": [
        -0.75,
        0.84,
        0
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-right-0",
      "from": [
        -0.75,
        0.84,
        0
      ],
      "to": [
        -0.62,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "box",
      "n": "anchor-a-0",
      "p": [
        -0.88,
        0.16,
        -0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "anchor-b-0",
      "p": [
        -0.62,
        0.16,
        0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "left-post-1",
      "from": [
        -0.38,
        0.15,
        -0.22
      ],
      "to": [
        -0.38,
        0.72,
        -0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "right-post-1",
      "from": [
        -0.12,
        0.15,
        0.22
      ],
      "to": [
        -0.12,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-left-1",
      "from": [
        -0.38,
        0.72,
        -0.22
      ],
      "to": [
        -0.25,
        0.84,
        0
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-right-1",
      "from": [
        -0.25,
        0.84,
        0
      ],
      "to": [
        -0.12,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "box",
      "n": "anchor-a-1",
      "p": [
        -0.38,
        0.16,
        -0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "anchor-b-1",
      "p": [
        -0.12,
        0.16,
        0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "left-post-2",
      "from": [
        0.12,
        0.15,
        -0.22
      ],
      "to": [
        0.12,
        0.72,
        -0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "right-post-2",
      "from": [
        0.38,
        0.15,
        0.22
      ],
      "to": [
        0.38,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-left-2",
      "from": [
        0.12,
        0.72,
        -0.22
      ],
      "to": [
        0.25,
        0.84,
        0
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-right-2",
      "from": [
        0.25,
        0.84,
        0
      ],
      "to": [
        0.38,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "box",
      "n": "anchor-a-2",
      "p": [
        0.12,
        0.16,
        -0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "anchor-b-2",
      "p": [
        0.38,
        0.16,
        0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "rod",
      "n": "left-post-3",
      "from": [
        0.62,
        0.15,
        -0.22
      ],
      "to": [
        0.62,
        0.72,
        -0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "right-post-3",
      "from": [
        0.88,
        0.15,
        0.22
      ],
      "to": [
        0.88,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-left-3",
      "from": [
        0.62,
        0.72,
        -0.22
      ],
      "to": [
        0.75,
        0.84,
        0
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "rod",
      "n": "bridge-right-3",
      "from": [
        0.75,
        0.84,
        0
      ],
      "to": [
        0.88,
        0.72,
        0.22
      ],
      "r": 0.025,
      "c": 9018268
    },
    {
      "t": "box",
      "n": "anchor-a-3",
      "p": [
        0.62,
        0.16,
        -0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    },
    {
      "t": "box",
      "n": "anchor-b-3",
      "p": [
        0.88,
        0.16,
        0.22
      ],
      "s": [
        0.08,
        0.04,
        0.09
      ],
      "c": 3161155
    }
  ]
});
}
