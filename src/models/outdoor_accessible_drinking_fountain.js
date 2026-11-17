import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Outdoor Accessible Drinking Fountain / 无障碍户外饮水台. */
export const assetMeta = {
  "id": "bathroom.outdoor-accessible-drinking-fountain.001",
  "slug": "outdoor-accessible-drinking-fountain",
  "title": "Outdoor Accessible Drinking Fountain",
  "title_zh": "无障碍户外饮水台",
  "summary": "Dual height public drinking fountain with bottle filler and low reachable basin",
  "category": "bathroom",
  "tags": [
    "outdoor",
    "accessible",
    "drinking",
    "fountain",
    "bathroom",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.08,
    1.38,
    0.9
  ],
  "generator": "createOutdoorAccessibleDrinkingFountain",
  "source_path": "src/models/outdoor_accessible_drinking_fountain.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/outdoor-accessible-drinking-fountain.webp",
  "accent": "#64869a"
};
export function createOutdoorAccessibleDrinkingFountain() { return buildRecipe({
  "title": "Outdoor Accessible Drinking Fountain",
  "dimensions": [
    1.08,
    1.38,
    0.9
  ],
  "parts": [
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-public-accessible-fountain-column",
      "p": [
        0,
        0.56,
        0
      ],
      "s": [
        0.68,
        1.12,
        0.57
      ],
      "c": 14739945
    },
    {
      "t": "sphere",
      "n": "outdoor-accessible-drinking-fountain-lower-reachable-basin",
      "p": [
        -0.31,
        0.82,
        0.22
      ],
      "s": [
        0.48,
        0.15,
        0.39
      ],
      "c": 10733256
    },
    {
      "t": "sphere",
      "n": "outdoor-accessible-drinking-fountain-upper-bottle-filler-basin",
      "p": [
        0.18,
        1.13,
        -0.1
      ],
      "s": [
        0.45,
        0.16,
        0.34
      ],
      "c": 6588058
    },
    {
      "t": "rod",
      "n": "outdoor-accessible-drinking-fountain-drinking-faucet-0",
      "from": [
        -0.3,
        0.82,
        -0.19
      ],
      "to": [
        -0.3,
        1.03,
        0.1
      ],
      "r": 0.027,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "outdoor-accessible-drinking-fountain-push-button-0",
      "p": [
        -0.3,
        1,
        0.14
      ],
      "s": [
        0.08,
        0.05,
        0.08
      ],
      "c": 6588058
    },
    {
      "t": "rod",
      "n": "outdoor-accessible-drinking-fountain-drinking-faucet-1",
      "from": [
        0.18,
        1.12,
        -0.19
      ],
      "to": [
        0.18,
        1.33,
        0.1
      ],
      "r": 0.027,
      "c": 4479851
    },
    {
      "t": "cylinder",
      "n": "outdoor-accessible-drinking-fountain-push-button-1",
      "p": [
        0.18,
        1.3,
        0.14
      ],
      "s": [
        0.08,
        0.05,
        0.08
      ],
      "c": 6588058
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-bottle-sensor-button",
      "p": [
        0.2,
        0.93,
        0.29
      ],
      "s": [
        0.18,
        0.09,
        0.032
      ],
      "c": 10733256
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-water-drainage-groove-0",
      "p": [
        -0.34,
        0.18,
        0.26
      ],
      "s": [
        0.08,
        0.015,
        0.13
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-water-drainage-groove-1",
      "p": [
        -0.2,
        0.18,
        0.26
      ],
      "s": [
        0.08,
        0.015,
        0.13
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-water-drainage-groove-2",
      "p": [
        -0.06,
        0.18,
        0.26
      ],
      "s": [
        0.08,
        0.015,
        0.13
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-water-drainage-groove-3",
      "p": [
        0.08000000000000002,
        0.18,
        0.26
      ],
      "s": [
        0.08,
        0.015,
        0.13
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-water-drainage-groove-4",
      "p": [
        0.22000000000000003,
        0.18,
        0.26
      ],
      "s": [
        0.08,
        0.015,
        0.13
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-water-drainage-groove-5",
      "p": [
        0.36000000000000004,
        0.18,
        0.26
      ],
      "s": [
        0.08,
        0.015,
        0.13
      ],
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-structural-fitting-0",
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
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-structural-fitting-1",
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
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-structural-fitting-2",
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
      "c": 4479851
    },
    {
      "t": "box",
      "n": "outdoor-accessible-drinking-fountain-structural-fitting-3",
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
      "c": 4479851
    }
  ]
}); }
