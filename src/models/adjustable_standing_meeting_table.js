import { buildRecipe } from './recipe_engine.js';
/** Original V1.0 3D geometry for Adjustable Standing Meeting Table / 升降协作会议桌. */
export const assetMeta = {
  "id": "furniture.adjustable-standing-meeting-table.001",
  "slug": "adjustable-standing-meeting-table",
  "title": "Adjustable Standing Meeting Table",
  "title_zh": "升降协作会议桌",
  "summary": "Motorized collaborative table with twin telescopic columns and cable management",
  "category": "furniture",
  "tags": [
    "adjustable",
    "standing",
    "meeting",
    "table",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.2,
    1.48,
    1.15
  ],
  "generator": "createAdjustableStandingMeetingTable",
  "source_path": "src/models/adjustable_standing_meeting_table.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.0",
  "preview_path": "public/thumbs/adjustable-standing-meeting-table.webp",
  "accent": "#454b58"
};
export function createAdjustableStandingMeetingTable() { return buildRecipe({
  "title": "Adjustable Standing Meeting Table",
  "dimensions": [
    2.2,
    1.48,
    1.15
  ],
  "parts": [
    {
      "t": "box",
      "n": "electric-meeting-desk-top",
      "p": [
        0,
        1.2,
        0
      ],
      "s": [
        2,
        0.15,
        1.01
      ],
      "c": 12426359
    },
    {
      "t": "box",
      "n": "desk-upper-telescopic-column--1",
      "p": [
        -0.68,
        0.78,
        0
      ],
      "s": [
        0.18,
        0.85,
        0.18
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "desk-lower-telescopic-column--1",
      "p": [
        -0.68,
        0.36,
        0
      ],
      "s": [
        0.24,
        0.67,
        0.23
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "meeting-desk-foot--1",
      "p": [
        -0.68,
        0.07,
        0
      ],
      "s": [
        0.42,
        0.13,
        0.85
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "desk-upper-telescopic-column-1",
      "p": [
        0.68,
        0.78,
        0
      ],
      "s": [
        0.18,
        0.85,
        0.18
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "desk-lower-telescopic-column-1",
      "p": [
        0.68,
        0.36,
        0
      ],
      "s": [
        0.24,
        0.67,
        0.23
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "meeting-desk-foot-1",
      "p": [
        0.68,
        0.07,
        0
      ],
      "s": [
        0.42,
        0.13,
        0.85
      ],
      "c": 5928329
    },
    {
      "t": "box",
      "n": "desk-grommet-0",
      "p": [
        -0.7,
        1.29,
        -0.36
      ],
      "s": [
        0.12,
        0.022,
        0.1
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "desk-grommet-1",
      "p": [
        -0.23999999999999994,
        1.29,
        -0.36
      ],
      "s": [
        0.12,
        0.022,
        0.1
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "desk-grommet-2",
      "p": [
        0.22000000000000008,
        1.29,
        -0.36
      ],
      "s": [
        0.12,
        0.022,
        0.1
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "desk-grommet-3",
      "p": [
        0.6800000000000002,
        1.29,
        -0.36
      ],
      "s": [
        0.12,
        0.022,
        0.1
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "motor-control-panel",
      "p": [
        0.75,
        1.12,
        0.36
      ],
      "s": [
        0.24,
        0.08,
        0.13
      ],
      "c": 4541272
    },
    {
      "t": "box",
      "n": "sit-stand-key-0",
      "p": [
        0.67,
        1.18,
        0.37
      ],
      "s": [
        0.03,
        0.015,
        0.035
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "sit-stand-key-1",
      "p": [
        0.7200000000000001,
        1.18,
        0.37
      ],
      "s": [
        0.03,
        0.015,
        0.035
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "sit-stand-key-2",
      "p": [
        0.77,
        1.18,
        0.37
      ],
      "s": [
        0.03,
        0.015,
        0.035
      ],
      "c": 14797468
    },
    {
      "t": "box",
      "n": "sit-stand-key-3",
      "p": [
        0.8200000000000001,
        1.18,
        0.37
      ],
      "s": [
        0.03,
        0.015,
        0.035
      ],
      "c": 14797468
    }
  ]
}); }
