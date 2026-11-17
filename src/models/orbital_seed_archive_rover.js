import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Orbital Seed Archive Rover / 轨道种子档案巡检车. Visual model only; not print-certified or a functional product. */
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
  "collection": "v1.4",
  "preview_path": "public/thumbs/orbital-seed-archive-rover.webp",
  "accent": "#82b9c5",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
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
      "t": "rounded-box",
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
      ],
      "finish": "rubber"
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
      "c": 7177108,
      "finish": "rubber"
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
      ],
      "finish": "rubber"
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
      "c": 7177108,
      "finish": "rubber"
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
      ],
      "finish": "rubber"
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
      "c": 7177108,
      "finish": "rubber"
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
      ],
      "finish": "rubber"
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
      "c": 7177108,
      "finish": "rubber"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 13938523,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 13938523,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 13938523,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 13938523,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 13938523,
      "finish": "ceramic"
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
      "c": 7915949,
      "finish": "ceramic"
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
      "c": 13938523,
      "finish": "ceramic"
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
      "c": 7177108,
      "finish": "metal"
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
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-0-0",
      "p": [
        -0.79,
        0.33,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-0-1",
      "p": [
        -0.79,
        0.41500000000000004,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-0-2",
      "p": [
        -0.79,
        0.5,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-0-3",
      "p": [
        -0.79,
        0.585,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-0-4",
      "p": [
        -0.79,
        0.67,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "wheel-axle-cap-0",
      "p": [
        -0.79,
        0.37,
        -0.62
      ],
      "s": [
        0.25,
        0.21,
        0.26
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-1-0",
      "p": [
        0.79,
        0.33,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-1-1",
      "p": [
        0.79,
        0.41500000000000004,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-1-2",
      "p": [
        0.79,
        0.5,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-1-3",
      "p": [
        0.79,
        0.585,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-1-4",
      "p": [
        0.79,
        0.67,
        -0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "wheel-axle-cap-1",
      "p": [
        0.79,
        0.37,
        -0.62
      ],
      "s": [
        0.25,
        0.21,
        0.26
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-2-0",
      "p": [
        -0.79,
        0.33,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-2-1",
      "p": [
        -0.79,
        0.41500000000000004,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-2-2",
      "p": [
        -0.79,
        0.5,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-2-3",
      "p": [
        -0.79,
        0.585,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-2-4",
      "p": [
        -0.79,
        0.67,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "wheel-axle-cap-2",
      "p": [
        -0.79,
        0.37,
        0.62
      ],
      "s": [
        0.25,
        0.21,
        0.26
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-3-0",
      "p": [
        0.79,
        0.33,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-3-1",
      "p": [
        0.79,
        0.41500000000000004,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-3-2",
      "p": [
        0.79,
        0.5,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-3-3",
      "p": [
        0.79,
        0.585,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "wheel-tread-lug-3-4",
      "p": [
        0.79,
        0.67,
        0.62
      ],
      "s": [
        0.15,
        0.07,
        0.13
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "wheel-axle-cap-3",
      "p": [
        0.79,
        0.37,
        0.62
      ],
      "s": [
        0.25,
        0.21,
        0.26
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "capsule-id-plate-0",
      "p": [
        -0.46,
        1.44,
        -0.12
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "sample-seal-led-0",
      "p": [
        -0.46,
        1.68,
        -0.25
      ],
      "s": [
        0.09,
        0.09,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "capsule-id-plate-1",
      "p": [
        0,
        1.44,
        -0.12
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "sample-seal-led-1",
      "p": [
        0,
        1.68,
        -0.25
      ],
      "s": [
        0.09,
        0.09,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "capsule-id-plate-2",
      "p": [
        0.46,
        1.44,
        -0.12
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "sample-seal-led-2",
      "p": [
        0.46,
        1.68,
        -0.25
      ],
      "s": [
        0.09,
        0.09,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "capsule-id-plate-3",
      "p": [
        -0.46,
        1.44,
        0.38
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "sample-seal-led-3",
      "p": [
        -0.46,
        1.68,
        0.25
      ],
      "s": [
        0.09,
        0.09,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "capsule-id-plate-4",
      "p": [
        0,
        1.44,
        0.38
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "sample-seal-led-4",
      "p": [
        0,
        1.68,
        0.25
      ],
      "s": [
        0.09,
        0.09,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "capsule-id-plate-5",
      "p": [
        0.46,
        1.44,
        0.38
      ],
      "s": [
        0.2,
        0.12,
        0.035
      ],
      "c": 15918798,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "sample-seal-led-5",
      "p": [
        0.46,
        1.68,
        0.25
      ],
      "s": [
        0.09,
        0.09,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "rounded-box",
      "n": "folding-solar-array-0",
      "p": [
        1,
        1.23,
        -0.38
      ],
      "s": [
        0.31,
        0.07,
        0.28
      ],
      "c": 9487573,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "folding-solar-array-1",
      "p": [
        1,
        1.23,
        0
      ],
      "s": [
        0.31,
        0.07,
        0.28
      ],
      "c": 9487573,
      "finish": "glass"
    },
    {
      "t": "rounded-box",
      "n": "folding-solar-array-2",
      "p": [
        1,
        1.23,
        0.38
      ],
      "s": [
        0.31,
        0.07,
        0.28
      ],
      "c": 9487573,
      "finish": "glass"
    },
    {
      "t": "cylinder",
      "n": "recon-hatch-bolt-0",
      "p": [
        -0.5,
        1.19,
        -0.33
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "recon-hatch-bolt-1",
      "p": [
        0.5,
        1.19,
        -0.33
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "recon-hatch-bolt-2",
      "p": [
        -0.5,
        1.19,
        0.33
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "recon-hatch-bolt-3",
      "p": [
        0.5,
        1.19,
        0.33
      ],
      "s": [
        0.09,
        0.09,
        0.09
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "seed-mission-nameplate",
      "p": [
        0,
        0.86,
        0.54
      ],
      "s": [
        0.58,
        0.16,
        0.04
      ],
      "c": 14989405,
      "finish": "metal"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
