import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Commercial Ice Flake Dispenser / 商用片冰出冰机. */
export const assetMeta = {
  "id": "kitchen.commercial-ice-flake-dispenser.001",
  "slug": "commercial-ice-flake-dispenser",
  "title": "Commercial Ice Flake Dispenser",
  "title_zh": "商用片冰出冰机",
  "summary": "Foodservice nugget ice dispenser with hopper, chute and drainage grate",
  "category": "kitchen",
  "tags": [
    "commercial",
    "ice",
    "flake",
    "dispenser",
    "kitchen",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.02,
    1.5,
    1
  ],
  "generator": "createCommercialIceFlakeDispenser",
  "source_path": "src/models/commercial_ice_flake_dispenser.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/commercial-ice-flake-dispenser.webp",
  "accent": "#e0b66d"
};
export function createCommercialIceFlakeDispenser() { return buildRecipe({
  "title": "Commercial Ice Flake Dispenser",
  "dimensions": [
    1.02,
    1.5,
    1
  ],
  "parts": [
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-flake-ice-refrigeration-housing",
      "p": [
        0,
        0.75,
        0
      ],
      "s": [
        0.87,
        1.37,
        0.71
      ],
      "c": 13024688
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-foodgrade-ice-storage-hopper",
      "p": [
        0,
        1.44,
        -0.04
      ],
      "s": [
        0.83,
        0.13,
        0.63
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-automated-ice-chute",
      "p": [
        0,
        0.94,
        0.38
      ],
      "s": [
        0.42,
        0.24,
        0.13
      ],
      "c": 3558230
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-ice-service-collection-basin",
      "p": [
        0,
        0.52,
        0.41
      ],
      "s": [
        0.62,
        0.14,
        0.37
      ],
      "c": 14726765
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-0",
      "p": [
        -0.27,
        0.61,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-1",
      "p": [
        -0.14,
        0.61,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-2",
      "p": [
        -0.010000000000000009,
        0.61,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-3",
      "p": [
        0.12,
        0.61,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-4",
      "p": [
        0.25,
        0.61,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-5",
      "p": [
        -0.27,
        0.7,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-6",
      "p": [
        -0.14,
        0.7,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-7",
      "p": [
        -0.010000000000000009,
        0.7,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-8",
      "p": [
        0.12,
        0.7,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-9",
      "p": [
        0.25,
        0.7,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-10",
      "p": [
        -0.27,
        0.79,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-11",
      "p": [
        -0.14,
        0.79,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-12",
      "p": [
        -0.010000000000000009,
        0.79,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-13",
      "p": [
        0.12,
        0.79,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "sphere",
      "n": "commercial-ice-flake-dispenser-clear-flaked-ice-14",
      "p": [
        0.25,
        0.79,
        0.43
      ],
      "s": [
        0.076,
        0.059,
        0.068
      ],
      "c": 14609906
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-flake-ice-machine-display",
      "p": [
        0,
        1.23,
        0.37
      ],
      "s": [
        0.5,
        0.14,
        0.03
      ],
      "c": 14726765
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-0",
      "p": [
        -0.33,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-1",
      "p": [
        -0.22000000000000003,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-2",
      "p": [
        -0.11000000000000001,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-3",
      "p": [
        0,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-4",
      "p": [
        0.10999999999999999,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-5",
      "p": [
        0.22000000000000003,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    },
    {
      "t": "box",
      "n": "commercial-ice-flake-dispenser-drain-strainer-slot-6",
      "p": [
        0.33,
        0.5,
        0.63
      ],
      "s": [
        0.062,
        0.016,
        0.13
      ],
      "c": 7178896
    }
  ]
}); }
