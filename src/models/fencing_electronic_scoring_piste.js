import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Fencing Electronic Scoring Piste / 击剑电子计分剑道. */
export const assetMeta = {
  "id": "sports.fencing-electronic-scoring-piste.001",
  "slug": "fencing-electronic-scoring-piste",
  "title": "Fencing Electronic Scoring Piste",
  "title_zh": "击剑电子计分剑道",
  "summary": "Competition fencing piste with score displays, boundary stripes and cable reels",
  "category": "sports",
  "tags": [
    "fencing",
    "electronic",
    "scoring",
    "piste",
    "sports",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.9,
    1.43,
    1.96
  ],
  "generator": "createFencingElectronicScoringPiste",
  "source_path": "src/models/fencing_electronic_scoring_piste.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/fencing-electronic-scoring-piste.webp",
  "accent": "#3b5c71"
};
export function createFencingElectronicScoringPiste() { return buildRecipe({
  "title": "Fencing Electronic Scoring Piste",
  "dimensions": [
    3.9,
    1.43,
    1.96
  ],
  "parts": [
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-competition-fencing-floor-strip",
      "p": [
        0,
        0.15,
        0
      ],
      "s": [
        3.6,
        0.21,
        1.69
      ],
      "c": 14988395
    },
    {
      "t": "rod",
      "n": "fencing-electronic-scoring-piste-electrified-piste-boundary--1",
      "from": [
        -1.73,
        0.29,
        -0.75
      ],
      "to": [
        1.73,
        0.29,
        -0.75
      ],
      "r": 0.027,
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-score-stand--1",
      "p": [
        -1.5,
        0.67,
        0.02
      ],
      "s": [
        0.34,
        0.96,
        0.34
      ],
      "c": 6658986
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-scoring-time-display--1",
      "p": [
        -1.5,
        1.15,
        0.21
      ],
      "s": [
        0.23,
        0.16,
        0.027
      ],
      "c": 3890289
    },
    {
      "t": "torus",
      "n": "fencing-electronic-scoring-piste-foiled-cable-reel--1",
      "p": [
        -1.47,
        0.43,
        -0.45
      ],
      "s": [
        0.38,
        0.38,
        0.38
      ],
      "c": 14147292,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "fencing-electronic-scoring-piste-electrified-piste-boundary-1",
      "from": [
        -1.73,
        0.29,
        0.75
      ],
      "to": [
        1.73,
        0.29,
        0.75
      ],
      "r": 0.027,
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-score-stand-1",
      "p": [
        1.5,
        0.67,
        0.02
      ],
      "s": [
        0.34,
        0.96,
        0.34
      ],
      "c": 6658986
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-scoring-time-display-1",
      "p": [
        1.5,
        1.15,
        0.21
      ],
      "s": [
        0.23,
        0.16,
        0.027
      ],
      "c": 3890289
    },
    {
      "t": "torus",
      "n": "fencing-electronic-scoring-piste-foiled-cable-reel-1",
      "p": [
        1.47,
        0.43,
        -0.45
      ],
      "s": [
        0.38,
        0.38,
        0.38
      ],
      "c": 14147292,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-0",
      "p": [
        -1.57,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-1",
      "p": [
        -1.26,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-2",
      "p": [
        -0.9500000000000001,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-3",
      "p": [
        -0.6400000000000001,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-4",
      "p": [
        -0.33000000000000007,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-5",
      "p": [
        -0.020000000000000018,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-6",
      "p": [
        0.2899999999999998,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-7",
      "p": [
        0.5999999999999999,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-8",
      "p": [
        0.9099999999999999,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-9",
      "p": [
        1.22,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 3890289
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-fencing-contact-strip-10",
      "p": [
        1.53,
        0.27,
        0
      ],
      "s": [
        0.17,
        0.02,
        1.25
      ],
      "c": 14147292
    },
    {
      "t": "box",
      "n": "fencing-electronic-scoring-piste-piste-middle-start-symbol",
      "p": [
        0,
        0.29,
        0
      ],
      "s": [
        0.42,
        0.02,
        0.24
      ],
      "c": 3890289
    }
  ]
}); }
