import { buildRecipe } from './recipe_engine.js';
/** Original v1.6 design: Vaulted Rain Pavilion Miniature; visual-only CAD hypothesis. */
export const assetMeta = {
  "id": "architecture.vaulted-rain-pavilion-miniature.001",
  "slug": "vaulted-rain-pavilion-miniature",
  "title": "Vaulted Rain Pavilion Miniature",
  "title_zh": "拱顶雨水庭院微缩建筑",
  "summary": "Rain-catching masonry vault with roof gutters and barrels",
  "category": "architecture",
  "tags": [
    "vaulted",
    "rain",
    "pavilion",
    "miniature",
    "architecture",
    "original",
    "v16"
  ],
  "dimensions_m": [
    0.33,
    0.33,
    0.27
  ],
  "generator": "createVaultedRainPavilionMiniature",
  "source_path": "src/models/vaulted_rain_pavilion_miniature.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Function-First Parametric",
  "collection": "v1.6",
  "preview_path": "public/thumbs/vaulted-rain-pavilion-miniature.webp",
  "accent": "#638998",
  "provenance_note": "Original procedural scene based on functional design research. Channel: amazon; not evidence of product sales or permission to copy a seller's geometry. Physical manufacture unverified."
};
export function createVaultedRainPavilionMiniature() { return buildRecipe({
  "title": "Vaulted Rain Pavilion Miniature",
  "dimensions": [
    0.33,
    0.33,
    0.27
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "courtyard-base",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        1.95,
        0.16,
        1.54
      ],
      "c": 7560529,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "pillar--1--0.54",
      "p": [
        -0.74,
        0.84,
        -0.54
      ],
      "s": [
        0.14,
        1.33,
        0.17
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "pillar-foot--1--0.54",
      "p": [
        -0.74,
        0.22,
        -0.54
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 6523288,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pillar--1-0.54",
      "p": [
        -0.74,
        0.84,
        0.54
      ],
      "s": [
        0.14,
        1.33,
        0.17
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "pillar-foot--1-0.54",
      "p": [
        -0.74,
        0.22,
        0.54
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 6523288,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pillar-1--0.54",
      "p": [
        0.74,
        0.84,
        -0.54
      ],
      "s": [
        0.14,
        1.33,
        0.17
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "pillar-foot-1--0.54",
      "p": [
        0.74,
        0.22,
        -0.54
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 6523288,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "pillar-1-0.54",
      "p": [
        0.74,
        0.84,
        0.54
      ],
      "s": [
        0.14,
        1.33,
        0.17
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "cylinder",
      "n": "pillar-foot-1-0.54",
      "p": [
        0.74,
        0.22,
        0.54
      ],
      "s": [
        0.25,
        0.11,
        0.25
      ],
      "c": 6523288,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-0",
      "p": [
        0.75,
        1.43,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-0",
      "p": [
        0.75,
        1.43,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-1",
      "p": [
        0.7282,
        1.576,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-1",
      "p": [
        0.7282,
        1.576,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-2",
      "p": [
        0.6641,
        1.7135,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-2",
      "p": [
        0.6641,
        1.7135,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-3",
      "p": [
        0.5614,
        1.8345,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-3",
      "p": [
        0.5614,
        1.8345,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-4",
      "p": [
        0.426,
        1.932,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-4",
      "p": [
        0.426,
        1.932,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-5",
      "p": [
        0.266,
        2.0004,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-5",
      "p": [
        0.266,
        2.0004,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-6",
      "p": [
        0.0904,
        2.0356,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-6",
      "p": [
        0.0904,
        2.0356,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-7",
      "p": [
        -0.0904,
        2.0356,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-7",
      "p": [
        -0.0904,
        2.0356,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-8",
      "p": [
        -0.266,
        2.0004,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-8",
      "p": [
        -0.266,
        2.0004,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-9",
      "p": [
        -0.426,
        1.932,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-9",
      "p": [
        -0.426,
        1.932,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-10",
      "p": [
        -0.5614,
        1.8345,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-10",
      "p": [
        -0.5614,
        1.8345,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-11",
      "p": [
        -0.6641,
        1.7135,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-11",
      "p": [
        -0.6641,
        1.7135,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-12",
      "p": [
        -0.7282,
        1.576,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-12",
      "p": [
        -0.7282,
        1.576,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "front-vault-stone-13",
      "p": [
        -0.75,
        1.43,
        -0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "rear-vault-stone-13",
      "p": [
        -0.75,
        1.43,
        0.5
      ],
      "s": [
        0.15,
        0.16,
        0.23
      ],
      "c": 6523288,
      "finish": "ceramic"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-0",
      "p": [
        -0.7,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-1",
      "p": [
        -0.545,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-2",
      "p": [
        -0.39,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-3",
      "p": [
        -0.235,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-4",
      "p": [
        -0.08,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-5",
      "p": [
        0.075,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-6",
      "p": [
        0.23,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-7",
      "p": [
        0.385,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-8",
      "p": [
        0.54,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "roof-water-runner-9",
      "p": [
        0.695,
        2.05,
        0
      ],
      "s": [
        0.07,
        0.06,
        0.84
      ],
      "c": 13021330,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "side-gutter--1",
      "from": [
        -0.8,
        1.45,
        -0.58
      ],
      "to": [
        -0.8,
        1.45,
        0.58
      ],
      "r": 0.05,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "collection-barrel--1",
      "p": [
        -0.8,
        0.48,
        0.6
      ],
      "s": [
        0.27,
        0.54,
        0.27
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rod",
      "n": "side-gutter-1",
      "from": [
        0.8,
        1.45,
        -0.58
      ],
      "to": [
        0.8,
        1.45,
        0.58
      ],
      "r": 0.05,
      "c": 12504530,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "collection-barrel-1",
      "p": [
        0.8,
        0.48,
        0.6
      ],
      "s": [
        0.27,
        0.54,
        0.27
      ],
      "c": 4233141,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-0",
      "p": [
        -0.72,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 13021330,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-1",
      "p": [
        -0.576,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 6523288,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-2",
      "p": [
        -0.432,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 13021330,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-3",
      "p": [
        -0.288,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 6523288,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-4",
      "p": [
        -0.144,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 13021330,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-5",
      "p": [
        0,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 6523288,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-6",
      "p": [
        0.144,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 13021330,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-7",
      "p": [
        0.288,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 6523288,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-8",
      "p": [
        0.432,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 13021330,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-9",
      "p": [
        0.576,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 6523288,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "pavilion-drainage-10",
      "p": [
        0.72,
        0.25,
        0.48
      ],
      "s": [
        0.06,
        0.035,
        0.55
      ],
      "c": 13021330,
      "finish": "anodized"
    }
  ],
  "geometry_revision": "1.6.0"
}); }
