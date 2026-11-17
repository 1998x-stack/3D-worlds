import { buildRecipe } from './recipe_engine.js';
/** Underground Utility Tunnel: original authored procedural geometry. */
export const assetMeta = {
  "id": "architecture.underground-utility-tunnel.001",
  "slug": "underground-utility-tunnel",
  "title": "Underground Utility Tunnel",
  "title_zh": "地下综合管廊模块",
  "summary": "Underground concrete utility tunnel with accessible walkway, cable troughs, water lines and lamps",
  "category": "architecture",
  "tags": [
    "tunnel",
    "utility",
    "infrastructure"
  ],
  "dimensions_m": [
    2.94,
    2.63,
    3.35
  ],
  "generator": "createUndergroundUtilityTunnel",
  "source_path": "src/models/underground_utility_tunnel.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/underground-utility-tunnel.webp"
};
export function createUndergroundUtilityTunnel() { return buildRecipe({
  "title": "Underground Utility Tunnel",
  "dimensions": [
    2.94,
    2.63,
    3.35
  ],
  "parts": [
    {
      "t": "box",
      "n": "tunnel-floor",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        2.91,
        0.24,
        3.31
      ],
      "c": 9541531
    },
    {
      "t": "box",
      "n": "wall-left",
      "p": [
        -1.3,
        1.25,
        0
      ],
      "s": [
        0.24,
        2.45,
        3.28
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "wall-right",
      "p": [
        1.3,
        1.25,
        0
      ],
      "s": [
        0.24,
        2.45,
        3.28
      ],
      "c": 10069413
    },
    {
      "t": "box",
      "n": "ceiling",
      "p": [
        0,
        2.47,
        0
      ],
      "s": [
        2.89,
        0.23,
        3.31
      ],
      "c": 10069413
    },
    {
      "t": "rod",
      "n": "utility-pipe-0",
      "from": [
        -1.16,
        0.38,
        -1.6
      ],
      "to": [
        -1.16,
        0.38,
        1.6
      ],
      "r": 0.03,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "utility-pipe-1",
      "from": [
        -1.16,
        0.59,
        -1.6
      ],
      "to": [
        -1.16,
        0.59,
        1.6
      ],
      "r": 0.03,
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "utility-pipe-2",
      "from": [
        -1.16,
        0.8,
        -1.6
      ],
      "to": [
        -1.16,
        0.8,
        1.6
      ],
      "r": 0.03,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "utility-pipe-3",
      "from": [
        -1.16,
        1.01,
        -1.6
      ],
      "to": [
        -1.16,
        1.01,
        1.6
      ],
      "r": 0.03,
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "utility-pipe-4",
      "from": [
        -1.16,
        1.22,
        -1.6
      ],
      "to": [
        -1.16,
        1.22,
        1.6
      ],
      "r": 0.03,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "utility-pipe-5",
      "from": [
        -1.16,
        1.4300000000000002,
        -1.6
      ],
      "to": [
        -1.16,
        1.4300000000000002,
        1.6
      ],
      "r": 0.03,
      "c": 6461102
    },
    {
      "t": "rod",
      "n": "utility-pipe-6",
      "from": [
        -1.16,
        1.6400000000000001,
        -1.6
      ],
      "to": [
        -1.16,
        1.6400000000000001,
        1.6
      ],
      "r": 0.03,
      "c": 12348255
    },
    {
      "t": "rod",
      "n": "utility-pipe-7",
      "from": [
        -1.16,
        1.85,
        -1.6
      ],
      "to": [
        -1.16,
        1.85,
        1.6
      ],
      "r": 0.03,
      "c": 6461102
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-0",
      "p": [
        1.14,
        0.36,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-1",
      "p": [
        1.14,
        0.56,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-2",
      "p": [
        1.14,
        0.76,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-3",
      "p": [
        1.14,
        0.9600000000000001,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-4",
      "p": [
        1.14,
        1.1600000000000001,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-5",
      "p": [
        1.14,
        1.3599999999999999,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "electrical-cable-tray-6",
      "p": [
        1.14,
        1.56,
        0
      ],
      "s": [
        0.15,
        0.05,
        3.2
      ],
      "c": 3752778
    },
    {
      "t": "box",
      "n": "overhead-light-0",
      "p": [
        0,
        2.28,
        -1.37
      ],
      "s": [
        0.49,
        0.035,
        0.15
      ],
      "c": 15262938
    },
    {
      "t": "box",
      "n": "overhead-light-1",
      "p": [
        0,
        2.28,
        -0.8200000000000001
      ],
      "s": [
        0.49,
        0.035,
        0.15
      ],
      "c": 15262938
    },
    {
      "t": "box",
      "n": "overhead-light-2",
      "p": [
        0,
        2.28,
        -0.27
      ],
      "s": [
        0.49,
        0.035,
        0.15
      ],
      "c": 15262938
    },
    {
      "t": "box",
      "n": "overhead-light-3",
      "p": [
        0,
        2.28,
        0.28
      ],
      "s": [
        0.49,
        0.035,
        0.15
      ],
      "c": 15262938
    },
    {
      "t": "box",
      "n": "overhead-light-4",
      "p": [
        0,
        2.28,
        0.8300000000000001
      ],
      "s": [
        0.49,
        0.035,
        0.15
      ],
      "c": 15262938
    },
    {
      "t": "box",
      "n": "overhead-light-5",
      "p": [
        0,
        2.28,
        1.38
      ],
      "s": [
        0.49,
        0.035,
        0.15
      ],
      "c": 15262938
    }
  ]
}); }
