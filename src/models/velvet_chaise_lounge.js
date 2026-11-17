import { buildRecipe } from './recipe_engine.js';
/** Velvet Chaise Lounge — original source-editable scene model; Y-up, meters. */
export const assetMeta = {
  "id": "furniture.velvet-chaise-lounge.001",
  "slug": "velvet-chaise-lounge",
  "title": "Velvet Chaise Lounge",
  "title_zh": "丝绒贵妃躺椅",
  "summary": "Low asymmetric chaise lounge with sculpted curved pillow and brass feet",
  "category": "furniture",
  "tags": [
    "chaise",
    "living",
    "lounge"
  ],
  "dimensions_m": [
    1.7,
    0.87,
    0.76
  ],
  "generator": "createVelvetChaiseLounge",
  "source_path": "src/models/velvet_chaise_lounge.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.6",
  "preview_path": "public/thumbs/velvet-chaise-lounge.webp"
};
export function createVelvetChaiseLounge() { return buildRecipe({
  "title": "Velvet Chaise Lounge",
  "dimensions": [
    1.7,
    0.87,
    0.76
  ],
  "parts": [
    {
      "t": "box",
      "n": "ottoman-base",
      "p": [
        0,
        0.29,
        0
      ],
      "s": [
        1.6,
        0.33,
        0.67
      ],
      "c": 8159113
    },
    {
      "t": "sphere",
      "n": "velvet-seat",
      "p": [
        0,
        0.53,
        0.02
      ],
      "s": [
        1.48,
        0.17,
        0.63
      ],
      "c": 11970482
    },
    {
      "t": "sphere",
      "n": "high-back",
      "p": [
        -0.64,
        0.66,
        -0.04
      ],
      "s": [
        0.35,
        0.39,
        0.7
      ],
      "c": 10063518
    },
    {
      "t": "sphere",
      "n": "rolled-arm",
      "p": [
        0.65,
        0.61,
        -0.04
      ],
      "s": [
        0.25,
        0.26,
        0.68
      ],
      "c": 10853039
    },
    {
      "t": "cylinder",
      "n": "brass-foot-0-0",
      "p": [
        -0.57,
        0.09,
        -0.23
      ],
      "s": [
        0.065,
        0.18,
        0.065
      ],
      "c": 12755572
    },
    {
      "t": "cylinder",
      "n": "brass-foot-0-1",
      "p": [
        -0.57,
        0.09,
        0.23
      ],
      "s": [
        0.065,
        0.18,
        0.065
      ],
      "c": 12755572
    },
    {
      "t": "cylinder",
      "n": "brass-foot-1-0",
      "p": [
        0.56,
        0.09,
        -0.23
      ],
      "s": [
        0.065,
        0.18,
        0.065
      ],
      "c": 12755572
    },
    {
      "t": "cylinder",
      "n": "brass-foot-1-1",
      "p": [
        0.56,
        0.09,
        0.23
      ],
      "s": [
        0.065,
        0.18,
        0.065
      ],
      "c": 12755572
    },
    {
      "t": "sphere",
      "n": "tuft-detail-0",
      "p": [
        -0.4,
        0.61,
        0.03
      ],
      "s": [
        0.039,
        0.02,
        0.038
      ],
      "c": 7563645
    },
    {
      "t": "sphere",
      "n": "tuft-detail-1",
      "p": [
        -0.18,
        0.61,
        0.03
      ],
      "s": [
        0.039,
        0.02,
        0.038
      ],
      "c": 7563645
    },
    {
      "t": "sphere",
      "n": "tuft-detail-2",
      "p": [
        0.15,
        0.61,
        0.03
      ],
      "s": [
        0.039,
        0.02,
        0.038
      ],
      "c": 7563645
    },
    {
      "t": "sphere",
      "n": "tuft-detail-3",
      "p": [
        0.4,
        0.61,
        0.03
      ],
      "s": [
        0.039,
        0.02,
        0.038
      ],
      "c": 7563645
    },
    {
      "t": "box",
      "n": "back-sash",
      "p": [
        -0.59,
        0.78,
        0
      ],
      "s": [
        0.075,
        0.21,
        0.55
      ],
      "c": 7238275
    },
    {
      "t": "sphere",
      "n": "accent-cushion",
      "p": [
        -0.39,
        0.69,
        0.05
      ],
      "s": [
        0.24,
        0.16,
        0.27
      ],
      "c": 12694717
    }
  ]
}); }
