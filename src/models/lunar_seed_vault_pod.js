import { buildMarketV15 } from './market_v15_builder.js';
/** V1.5 original visual design: Lunar Seed Vault Pod. 圆顶仓体、种子匣、月岩底座、舱门铰链. Not physically print-tested. */
export const assetMeta = {
  "id": "scifi.lunar-seed-vault-pod.001",
  "slug": "lunar-seed-vault-pod",
  "title": "Lunar Seed Vault Pod",
  "title_zh": "月面种子档案舱",
  "summary": "Peaceful lunar botanical storage pod with sealed-looking capsule and sample armatures",
  "category": "scifi",
  "tags": [
    "lunar",
    "seed",
    "vault",
    "pod",
    "scifi",
    "original",
    "v15",
    "market-inspired"
  ],
  "dimensions_m": [
    0.3,
    0.26,
    0.27
  ],
  "generator": "createLunarSeedVaultPod",
  "source_path": "src/models/lunar_seed_vault_pod.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market Research Originals",
  "collection": "v1.5",
  "preview_path": "public/thumbs/lunar-seed-vault-pod.webp",
  "accent": "#91b6d2",
  "provenance_note": "Original 3D Worlds scene inspired by qualitative public market/maker signals; no reused third-party geometry, verified demand, certified printability or physical testing."
};
export function createLunarSeedVaultPod() {
  return buildMarketV15({
  "title": "Lunar Seed Vault Pod",
  "dimensions": [
    0.3,
    0.26,
    0.27
  ],
  "accent": "#91b6d2",
  "body": [
    [
      "box",
      "base",
      [
        0,
        0.1,
        0
      ],
      [
        1.93,
        0.2,
        1.53
      ],
      "stone",
      "matte",
      null
    ],
    [
      "cylinder",
      "vault-cylinder",
      [
        0,
        0.99,
        0
      ],
      [
        1.37,
        1.23,
        1.18
      ],
      "primary",
      "matte",
      null
    ],
    [
      "sphere",
      "dome",
      [
        0,
        1.69,
        0
      ],
      [
        1.42,
        0.63,
        1.25
      ],
      "light",
      "glass",
      null
    ],
    [
      "rounded-box",
      "door",
      [
        0,
        1,
        0.63
      ],
      [
        0.66,
        0.85,
        0.1
      ],
      "contrast",
      "matte",
      null
    ],
    [
      "box",
      "front-step",
      [
        0,
        0.35,
        0.66
      ],
      [
        0.89,
        0.13,
        0.34
      ],
      "metal",
      "matte",
      null
    ],
    [
      "cylinder",
      "antenna",
      [
        -0.76,
        1.87,
        -0.33
      ],
      [
        0.12,
        0.72,
        0.12
      ],
      "metal",
      "matte",
      null
    ],
    [
      "sphere",
      "sensor",
      [
        -0.76,
        2.25,
        -0.33
      ],
      [
        0.3,
        0.22,
        0.31
      ],
      "secondary",
      "matte",
      null
    ]
  ],
  "patterns": [
    {
      "k": "radial",
      "n": "support-strut",
      "t": "box",
      "count": 10,
      "o": [
        0,
        1,
        0
      ],
      "r": 0.68,
      "s": [
        0.08,
        1.16,
        0.11
      ],
      "c": "metal",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "sample-box",
      "t": "rounded-box",
      "count": 5,
      "o": [
        -0.51,
        0.6,
        0.1
      ],
      "d": [
        0.25,
        0,
        0
      ],
      "s": [
        0.19,
        0.28,
        0.25
      ],
      "c": "secondary",
      "f": "matte"
    },
    {
      "k": "line",
      "n": "door-hinge",
      "t": "cylinder",
      "count": 6,
      "o": [
        -0.31,
        0.59,
        0.72
      ],
      "d": [
        0,
        0.14,
        0
      ],
      "s": [
        0.07,
        0.05,
        0.07
      ],
      "c": "metal",
      "f": "matte"
    }
  ]
});
}
