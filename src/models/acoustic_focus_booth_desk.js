import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Acoustic Focus Booth Desk / 隔音专注办公舱. */
export const assetMeta = {
  "id": "furniture.acoustic-focus-booth-desk.001",
  "slug": "acoustic-focus-booth-desk",
  "title": "Acoustic Focus Booth Desk",
  "title_zh": "隔音专注办公舱",
  "summary": "Enclosed focus-work booth with acoustic felt ribs, desk, lamp and privacy screen",
  "category": "furniture",
  "tags": [
    "acoustic",
    "focus",
    "booth",
    "desk",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.65,
    2.35,
    1.45
  ],
  "generator": "createAcousticFocusBoothDesk",
  "source_path": "src/models/acoustic_focus_booth_desk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/acoustic-focus-booth-desk.webp",
  "accent": "#c8a579"
};
export function createAcousticFocusBoothDesk() { return buildRecipe({
  "title": "Acoustic Focus Booth Desk",
  "dimensions": [
    1.65,
    2.35,
    1.45
  ],
  "parts": [
    {
      "t": "box",
      "n": "booth-floor",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        1.43,
        0.15,
        1.17
      ],
      "c": 13149561
    },
    {
      "t": "box",
      "n": "acoustic-side-wall--1",
      "p": [
        -0.68,
        1.14,
        -0.1
      ],
      "s": [
        0.09,
        2.13,
        1.11
      ],
      "c": 6715783
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-0",
      "p": [
        -0.625,
        0.43,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-1",
      "p": [
        -0.625,
        0.6699999999999999,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-2",
      "p": [
        -0.625,
        0.9099999999999999,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-3",
      "p": [
        -0.625,
        1.15,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-4",
      "p": [
        -0.625,
        1.39,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-5",
      "p": [
        -0.625,
        1.63,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib--1-6",
      "p": [
        -0.625,
        1.8699999999999999,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "acoustic-side-wall-1",
      "p": [
        0.68,
        1.14,
        -0.1
      ],
      "s": [
        0.09,
        2.13,
        1.11
      ],
      "c": 6715783
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-0",
      "p": [
        0.625,
        0.43,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-1",
      "p": [
        0.625,
        0.6699999999999999,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-2",
      "p": [
        0.625,
        0.9099999999999999,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-3",
      "p": [
        0.625,
        1.15,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-4",
      "p": [
        0.625,
        1.39,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-5",
      "p": [
        0.625,
        1.63,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "felt-wall-rib-1-6",
      "p": [
        0.625,
        1.8699999999999999,
        -0.23
      ],
      "s": [
        0.035,
        0.12,
        0.67
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "booth-back-wall",
      "p": [
        0,
        1.12,
        -0.59
      ],
      "s": [
        1.4,
        2.17,
        0.08
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "privacy-roof",
      "p": [
        0,
        2.2,
        0
      ],
      "s": [
        1.43,
        0.09,
        1.22
      ],
      "c": 13149561
    },
    {
      "t": "box",
      "n": "floating-compact-desk",
      "p": [
        0,
        0.86,
        -0.29
      ],
      "s": [
        1.15,
        0.09,
        0.49
      ],
      "c": 13149561
    },
    {
      "t": "box",
      "n": "desk-display",
      "p": [
        -0.21,
        1.11,
        -0.49
      ],
      "s": [
        0.48,
        0.33,
        0.04
      ],
      "c": 14732726
    },
    {
      "t": "box",
      "n": "ergonomic-stool",
      "p": [
        0.17,
        0.5,
        0.25
      ],
      "s": [
        0.49,
        0.13,
        0.4
      ],
      "c": 14732726
    },
    {
      "t": "cylinder",
      "n": "seat-pillar",
      "p": [
        0.17,
        0.26,
        0.25
      ],
      "s": [
        0.12,
        0.43,
        0.12
      ],
      "c": 6715783
    },
    {
      "t": "box",
      "n": "reading-light",
      "p": [
        0.39,
        1.88,
        -0.52
      ],
      "s": [
        0.3,
        0.09,
        0.14
      ],
      "c": 14732726
    }
  ]
}); }
