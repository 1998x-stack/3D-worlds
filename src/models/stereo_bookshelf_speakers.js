import { buildRecipe } from './recipe_engine.js';
/** Stereo Bookshelf Speakers: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "electronics.stereo-bookshelf-speakers.001",
  "slug": "stereo-bookshelf-speakers",
  "title": "Stereo Bookshelf Speakers",
  "title_zh": "双声道书架音箱",
  "summary": "Matched speaker pair with woven grille, tweeter, bass driver and volume dial.",
  "category": "electronics",
  "tags": [
    "speaker",
    "audio",
    "stereo",
    "music"
  ],
  "dimensions_m": [
    0.82,
    0.46,
    0.25
  ],
  "generator": "createStereoBookshelfSpeakers",
  "source_path": "src/models/stereo_bookshelf_speakers.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/stereo-bookshelf-speakers.webp"
};
export function createStereoBookshelfSpeakers() {
  return buildRecipe({
  "title": "Stereo Bookshelf Speakers",
  "dimensions": [
    0.82,
    0.46,
    0.25
  ],
  "parts": [
    {
      "t": "box",
      "n": "speaker-cabinet-0",
      "p": [
        -0.24,
        0.23,
        0
      ],
      "s": [
        0.34,
        0.45,
        0.25
      ],
      "c": 6377540
    },
    {
      "t": "box",
      "n": "front-baffle-0",
      "p": [
        -0.24,
        0.23,
        0.13
      ],
      "s": [
        0.3,
        0.41,
        0.018
      ],
      "c": 3291196
    },
    {
      "t": "cylinder",
      "n": "bass-driver-0",
      "p": [
        -0.24,
        0.2,
        0.145
      ],
      "s": [
        0.21,
        0.04,
        0.21
      ],
      "c": 8820381,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "woofer-cone-0",
      "p": [
        -0.24,
        0.2,
        0.168
      ],
      "s": [
        0.1,
        0.09,
        0.018
      ],
      "c": 6717320
    },
    {
      "t": "cylinder",
      "n": "tweeter-0",
      "p": [
        -0.24,
        0.36,
        0.146
      ],
      "s": [
        0.1,
        0.03,
        0.1
      ],
      "c": 12163940,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "badge-0",
      "p": [
        -0.24,
        0.055,
        0.144
      ],
      "s": [
        0.1,
        0.02,
        0.012
      ],
      "c": 12163940
    },
    {
      "t": "box",
      "n": "speaker-cabinet-1",
      "p": [
        0.24,
        0.23,
        0
      ],
      "s": [
        0.34,
        0.45,
        0.25
      ],
      "c": 6377540
    },
    {
      "t": "box",
      "n": "front-baffle-1",
      "p": [
        0.24,
        0.23,
        0.13
      ],
      "s": [
        0.3,
        0.41,
        0.018
      ],
      "c": 3291196
    },
    {
      "t": "cylinder",
      "n": "bass-driver-1",
      "p": [
        0.24,
        0.2,
        0.145
      ],
      "s": [
        0.21,
        0.04,
        0.21
      ],
      "c": 8820381,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "sphere",
      "n": "woofer-cone-1",
      "p": [
        0.24,
        0.2,
        0.168
      ],
      "s": [
        0.1,
        0.09,
        0.018
      ],
      "c": 6717320
    },
    {
      "t": "cylinder",
      "n": "tweeter-1",
      "p": [
        0.24,
        0.36,
        0.146
      ],
      "s": [
        0.1,
        0.03,
        0.1
      ],
      "c": 12163940,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "badge-1",
      "p": [
        0.24,
        0.055,
        0.144
      ],
      "s": [
        0.1,
        0.02,
        0.012
      ],
      "c": 12163940
    },
    {
      "t": "box",
      "n": "stereo-control",
      "p": [
        0,
        0.035,
        0.15
      ],
      "s": [
        0.12,
        0.04,
        0.03
      ],
      "c": 8820381
    }
  ]
});
}
