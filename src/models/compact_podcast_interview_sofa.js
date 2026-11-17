import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Compact Podcast Interview Sofa / 播客访谈双人沙发. */
export const assetMeta = {
  "id": "furniture.compact-podcast-interview-sofa.001",
  "slug": "compact-podcast-interview-sofa",
  "title": "Compact Podcast Interview Sofa",
  "title_zh": "播客访谈双人沙发",
  "summary": "Two-seat studio sofa with divided cushions, integrated microphone booms and side trays",
  "category": "furniture",
  "tags": [
    "compact",
    "podcast",
    "interview",
    "sofa",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.3,
    1.24,
    1.3
  ],
  "generator": "createCompactPodcastInterviewSofa",
  "source_path": "src/models/compact_podcast_interview_sofa.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/compact-podcast-interview-sofa.webp",
  "accent": "#3c515b"
};
export function createCompactPodcastInterviewSofa() { return buildRecipe({
  "title": "Compact Podcast Interview Sofa",
  "dimensions": [
    2.3,
    1.24,
    1.3
  ],
  "parts": [
    {
      "t": "box",
      "n": "studio-sofa-base",
      "p": [
        0,
        0.47,
        0
      ],
      "s": [
        1.93,
        0.46,
        0.87
      ],
      "c": 13149561
    },
    {
      "t": "box",
      "n": "seat-cushion--1",
      "p": [
        -0.48,
        0.74,
        0.12
      ],
      "s": [
        0.91,
        0.16,
        0.69
      ],
      "c": 14732726
    },
    {
      "t": "box",
      "n": "separate-back-cushion--1",
      "p": [
        -0.48,
        1,
        -0.33
      ],
      "s": [
        0.89,
        0.4,
        0.19
      ],
      "c": 6715783
    },
    {
      "t": "box",
      "n": "side-audio-tray--1",
      "p": [
        -1.06,
        0.7,
        0.18
      ],
      "s": [
        0.3,
        0.1,
        0.38
      ],
      "c": 3952987
    },
    {
      "t": "rod",
      "n": "mic-boom-vertical--1",
      "from": [
        -1.12,
        0.67,
        -0.39
      ],
      "to": [
        -1.12,
        1.34,
        -0.39
      ],
      "r": 0.025,
      "c": 3952987
    },
    {
      "t": "rod",
      "n": "mic-boom-forward--1",
      "from": [
        -1.12,
        1.34,
        -0.39
      ],
      "to": [
        -0.55,
        1.19,
        0.02
      ],
      "r": 0.022,
      "c": 3952987
    },
    {
      "t": "cylinder",
      "n": "podcast-microphone--1",
      "p": [
        -0.55,
        1.17,
        0.02
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 14732726,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "seat-cushion-1",
      "p": [
        0.48,
        0.74,
        0.12
      ],
      "s": [
        0.91,
        0.16,
        0.69
      ],
      "c": 14732726
    },
    {
      "t": "box",
      "n": "separate-back-cushion-1",
      "p": [
        0.48,
        1,
        -0.33
      ],
      "s": [
        0.89,
        0.4,
        0.19
      ],
      "c": 6715783
    },
    {
      "t": "box",
      "n": "side-audio-tray-1",
      "p": [
        1.06,
        0.7,
        0.18
      ],
      "s": [
        0.3,
        0.1,
        0.38
      ],
      "c": 3952987
    },
    {
      "t": "rod",
      "n": "mic-boom-vertical-1",
      "from": [
        1.12,
        0.67,
        -0.39
      ],
      "to": [
        1.12,
        1.34,
        -0.39
      ],
      "r": 0.025,
      "c": 3952987
    },
    {
      "t": "rod",
      "n": "mic-boom-forward-1",
      "from": [
        1.12,
        1.34,
        -0.39
      ],
      "to": [
        0.55,
        1.19,
        0.02
      ],
      "r": 0.022,
      "c": 3952987
    },
    {
      "t": "cylinder",
      "n": "podcast-microphone-1",
      "p": [
        0.55,
        1.17,
        0.02
      ],
      "s": [
        0.12,
        0.22,
        0.12
      ],
      "c": 14732726,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "sofa-back-frame",
      "p": [
        0,
        1.05,
        -0.43
      ],
      "s": [
        1.95,
        0.37,
        0.13
      ],
      "c": 13149561
    },
    {
      "t": "box",
      "n": "short-wooden-foot--1",
      "p": [
        -0.82,
        0.12,
        0.27
      ],
      "s": [
        0.13,
        0.24,
        0.17
      ],
      "c": 3952987
    },
    {
      "t": "box",
      "n": "short-wooden-foot-1",
      "p": [
        0.82,
        0.12,
        0.27
      ],
      "s": [
        0.13,
        0.24,
        0.17
      ],
      "c": 3952987
    }
  ]
}); }
