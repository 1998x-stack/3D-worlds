import { buildRecipe } from './recipe_engine.js';
/** Original V1.3 maker-market inspired design: Orbital Seed Archive Rover / 轨道种子档案巡检车. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "scifi.orbital-seed-archive-rover.001",
  "slug": "orbital-seed-archive-rover",
  "title": "Orbital Seed Archive Rover",
  "title_zh": "轨道种子档案巡检车",
  "summary": "Nonweapon sci-fi rover with sealed seed sample canisters and articulated sensor booms",
  "category": "scifi",
  "tags": [
    "orbital",
    "seed",
    "archive",
    "rover",
    "scifi",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.41,
    0.29,
    0.32
  ],
  "generator": "createOrbitalSeedArchiveRover",
  "source_path": "src/models/orbital_seed_archive_rover.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.3",
  "preview_path": "public/thumbs/orbital-seed-archive-rover.webp",
  "accent": "#82b9c5"
};
export function createOrbitalSeedArchiveRover() { return buildRecipe({
  "title": "Orbital Seed Archive Rover",
  "dimensions": [
    0.41,
    0.29,
    0.32
  ],
  "parts": [
    {
      "t": "box",
      "n": "rover-core",
      "p": [
        0,
        0.85,
        0
      ],
      "s": [
        1.45,
        0.65,
        1
      ],
      "c": 15853002
    },
    {
      "t": "torus",
      "n": "all-terrain-wheel-0",
      "p": [
        -0.79,
        0.37,
        -0.62
      ],
      "s": [
        0.65,
        0.65,
        0.24
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "rod",
      "n": "wheel-strut-0",
      "from": [
        -0.79,
        0.45,
        -0.62
      ],
      "to": [
        -0.43450000000000005,
        0.84,
        -0.2914
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "torus",
      "n": "all-terrain-wheel-1",
      "p": [
        0.79,
        0.37,
        -0.62
      ],
      "s": [
        0.65,
        0.65,
        0.24
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "rod",
      "n": "wheel-strut-1",
      "from": [
        0.79,
        0.45,
        -0.62
      ],
      "to": [
        0.43450000000000005,
        0.84,
        -0.2914
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "torus",
      "n": "all-terrain-wheel-2",
      "p": [
        -0.79,
        0.37,
        0.62
      ],
      "s": [
        0.65,
        0.65,
        0.24
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "rod",
      "n": "wheel-strut-2",
      "from": [
        -0.79,
        0.45,
        0.62
      ],
      "to": [
        -0.43450000000000005,
        0.84,
        0.2914
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "torus",
      "n": "all-terrain-wheel-3",
      "p": [
        0.79,
        0.37,
        0.62
      ],
      "s": [
        0.65,
        0.65,
        0.24
      ],
      "c": 3229017,
      "rot": [
        0,
        1.5707963267948966,
        0
      ]
    },
    {
      "t": "rod",
      "n": "wheel-strut-3",
      "from": [
        0.79,
        0.45,
        0.62
      ],
      "to": [
        0.43450000000000005,
        0.84,
        0.2914
      ],
      "r": 0.07,
      "c": 7177108
    },
    {
      "t": "cylinder",
      "n": "seed-vault-canister-0",
      "p": [
        -0.46,
        1.33,
        -0.25
      ],
      "s": [
        0.23,
        0.61,
        0.23
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "vault-cap-0",
      "p": [
        -0.46,
        1.67,
        -0.25
      ],
      "s": [
        0.29,
        0.09,
        0.29
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "seed-vault-canister-1",
      "p": [
        0,
        1.33,
        -0.25
      ],
      "s": [
        0.23,
        0.61,
        0.23
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "vault-cap-1",
      "p": [
        0,
        1.67,
        -0.25
      ],
      "s": [
        0.29,
        0.09,
        0.29
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "seed-vault-canister-2",
      "p": [
        0.46,
        1.33,
        -0.25
      ],
      "s": [
        0.23,
        0.61,
        0.23
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "vault-cap-2",
      "p": [
        0.46,
        1.67,
        -0.25
      ],
      "s": [
        0.29,
        0.09,
        0.29
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "seed-vault-canister-3",
      "p": [
        -0.46,
        1.33,
        0.25
      ],
      "s": [
        0.23,
        0.61,
        0.23
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "vault-cap-3",
      "p": [
        -0.46,
        1.67,
        0.25
      ],
      "s": [
        0.29,
        0.09,
        0.29
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "seed-vault-canister-4",
      "p": [
        0,
        1.33,
        0.25
      ],
      "s": [
        0.23,
        0.61,
        0.23
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "vault-cap-4",
      "p": [
        0,
        1.67,
        0.25
      ],
      "s": [
        0.29,
        0.09,
        0.29
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "seed-vault-canister-5",
      "p": [
        0.46,
        1.33,
        0.25
      ],
      "s": [
        0.23,
        0.61,
        0.23
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "vault-cap-5",
      "p": [
        0.46,
        1.67,
        0.25
      ],
      "s": [
        0.29,
        0.09,
        0.29
      ],
      "c": 13938523
    },
    {
      "t": "cylinder",
      "n": "sensor-mast",
      "p": [
        0,
        1.94,
        0
      ],
      "s": [
        0.15,
        0.66,
        0.15
      ],
      "c": 7177108
    },
    {
      "t": "sphere",
      "n": "sensor-antenna",
      "p": [
        0,
        2.36,
        0
      ],
      "s": [
        0.31,
        0.27,
        0.27
      ],
      "c": 10143185
    },
    {
      "t": "rod",
      "n": "solar-wing-0",
      "from": [
        0,
        1.12,
        0
      ],
      "to": [
        1.18,
        1.25,
        -0.38
      ],
      "r": 0.06,
      "c": 15776881
    },
    {
      "t": "rod",
      "n": "solar-wing-1",
      "from": [
        0,
        1.12,
        0
      ],
      "to": [
        1.18,
        1.25,
        0
      ],
      "r": 0.06,
      "c": 15776881
    },
    {
      "t": "rod",
      "n": "solar-wing-2",
      "from": [
        0,
        1.12,
        0
      ],
      "to": [
        1.18,
        1.25,
        0.38
      ],
      "r": 0.06,
      "c": 15776881
    }
  ]
}); }
