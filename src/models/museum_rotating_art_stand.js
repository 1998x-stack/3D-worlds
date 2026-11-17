import { buildRecipe } from './recipe_engine.js';
/** Museum Rotating Art Stand / 博物馆旋转艺术展台: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "decor.museum-rotating-art-stand.001",
  "slug": "museum-rotating-art-stand",
  "title": "Museum Rotating Art Stand",
  "title_zh": "博物馆旋转艺术展台",
  "summary": "Slow-turn display pedestal with protective frame, sculpture and label panel",
  "category": "decor",
  "tags": [
    "museum",
    "rotating",
    "art",
    "stand",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.26,
    1.6,
    1.12
  ],
  "generator": "createMuseumRotatingArtStand",
  "source_path": "src/models/museum_rotating_art_stand.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/museum-rotating-art-stand.webp",
  "accent": "#365c61"
};
export function createMuseumRotatingArtStand() { return buildRecipe({
  "title": "Museum Rotating Art Stand",
  "dimensions": [
    1.26,
    1.6,
    1.12
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "rotating-stand-plinth",
      "p": [
        0,
        0.32,
        0
      ],
      "s": [
        0.81,
        0.63,
        0.81
      ],
      "c": 10186585
    },
    {
      "t": "cylinder",
      "n": "carousel-turntable",
      "p": [
        0,
        0.7,
        0
      ],
      "s": [
        1,
        0.11,
        1
      ],
      "c": 11845003
    },
    {
      "t": "sphere",
      "n": "abstract-art-form",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        0.36,
        0.45,
        0.29
      ],
      "c": 13677947
    },
    {
      "t": "rod",
      "n": "glass-upright-0",
      "from": [
        0.54,
        0.68,
        0
      ],
      "to": [
        0.54,
        1.58,
        0
      ],
      "r": 0.017,
      "c": 3562593
    },
    {
      "t": "rod",
      "n": "glass-upright-1",
      "from": [
        3.306546357697854e-17,
        0.68,
        0.54
      ],
      "to": [
        3.306546357697854e-17,
        1.58,
        0.54
      ],
      "r": 0.017,
      "c": 3562593
    },
    {
      "t": "rod",
      "n": "glass-upright-2",
      "from": [
        -0.54,
        0.68,
        6.613092715395707e-17
      ],
      "to": [
        -0.54,
        1.58,
        6.613092715395707e-17
      ],
      "r": 0.017,
      "c": 3562593
    },
    {
      "t": "rod",
      "n": "glass-upright-3",
      "from": [
        -9.919639073093561e-17,
        0.68,
        -0.54
      ],
      "to": [
        -9.919639073093561e-17,
        1.58,
        -0.54
      ],
      "r": 0.017,
      "c": 3562593
    },
    {
      "t": "box",
      "n": "information-plate",
      "p": [
        0.41,
        0.36,
        0.36
      ],
      "s": [
        0.29,
        0.16,
        0.03
      ],
      "c": 13677947,
      "rot": [
        0,
        0.55,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "accent-sphere-0",
      "p": [
        0,
        1.2,
        0.19
      ],
      "s": [
        0.07,
        0.06,
        0.07
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "accent-sphere-1",
      "p": [
        0.01834560104778274,
        1.27,
        -0.07906789894395706
      ],
      "s": [
        0.07,
        0.06,
        0.07
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "accent-sphere-2",
      "p": [
        -0.03632401476586036,
        1.3399999999999999,
        -0.12419228796408627
      ],
      "s": [
        0.07,
        0.06,
        0.07
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "accent-sphere-3",
      "p": [
        0.05357540308142836,
        1.41,
        0.18243235446356953
      ],
      "s": [
        0.07,
        0.06,
        0.07
      ],
      "c": 3562593
    },
    {
      "t": "sphere",
      "n": "accent-sphere-4",
      "p": [
        -0.06975447934005655,
        1.48,
        -0.027645006423636573
      ],
      "s": [
        0.07,
        0.06,
        0.07
      ],
      "c": 3562593
    }
  ]
}); }
