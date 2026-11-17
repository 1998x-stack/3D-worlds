import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Deep Ocean Luminescence Lab / 深海生物荧光研究站. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "scifi.deep-ocean-luminescence-lab.001",
  "slug": "deep-ocean-luminescence-lab",
  "title": "Deep Ocean Luminescence Lab",
  "title_zh": "深海生物荧光研究站",
  "summary": "Peaceful ocean-science station with dome lab, bioluminescent sample pods and observation arms",
  "category": "scifi",
  "tags": [
    "deep",
    "ocean",
    "luminescence",
    "lab",
    "scifi",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.42,
    0.38,
    0.38
  ],
  "generator": "createDeepOceanLuminescenceLab",
  "source_path": "src/models/deep_ocean_luminescence_lab.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/deep-ocean-luminescence-lab.webp",
  "accent": "#82b9c5",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createDeepOceanLuminescenceLab() { return buildRecipe({
  "title": "Deep Ocean Luminescence Lab",
  "dimensions": [
    0.42,
    0.38,
    0.38
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "seabed-raft",
      "p": [
        0,
        0.08,
        0
      ],
      "s": [
        2.38,
        0.16,
        2.1
      ],
      "c": 4084325
    },
    {
      "t": "sphere",
      "n": "observation-dome",
      "p": [
        0,
        1.26,
        0
      ],
      "s": [
        1.53,
        1.72,
        1.36
      ],
      "c": 10143185,
      "finish": "glass"
    },
    {
      "t": "cylinder",
      "n": "dome-collar",
      "p": [
        0,
        0.52,
        0
      ],
      "s": [
        1.56,
        0.19,
        1.44
      ],
      "c": 7177108,
      "finish": "glass"
    },
    {
      "t": "torus",
      "n": "dome-ring",
      "p": [
        0,
        1.31,
        0
      ],
      "s": [
        1.88,
        0.23,
        1.88
      ],
      "c": 13938523,
      "rot": [
        1.5707963267948966,
        0,
        0
      ],
      "finish": "glass"
    },
    {
      "t": "rod",
      "n": "observation-arm-0",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        1.12,
        0.73,
        0
      ],
      "r": 0.08,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "biolume-vial-0",
      "p": [
        1.12,
        0.94,
        0
      ],
      "s": [
        0.3,
        0.44,
        0.3
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "sample-vial-cap-0",
      "p": [
        1.12,
        1.21,
        0
      ],
      "s": [
        0.29,
        0.08,
        0.29
      ],
      "c": 13938523,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "observation-arm-1",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        0.5600000000000002,
        0.73,
        0.8487048957087499
      ],
      "r": 0.08,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "biolume-vial-1",
      "p": [
        0.5600000000000002,
        0.94,
        0.8487048957087499
      ],
      "s": [
        0.3,
        0.44,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "sample-vial-cap-1",
      "p": [
        0.5600000000000002,
        1.21,
        0.8487048957087499
      ],
      "s": [
        0.29,
        0.08,
        0.29
      ],
      "c": 13938523,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "observation-arm-2",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        -0.5599999999999998,
        0.73,
        0.84870489570875
      ],
      "r": 0.08,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "biolume-vial-2",
      "p": [
        -0.5599999999999998,
        0.94,
        0.84870489570875
      ],
      "s": [
        0.3,
        0.44,
        0.3
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "sample-vial-cap-2",
      "p": [
        -0.5599999999999998,
        1.21,
        0.84870489570875
      ],
      "s": [
        0.29,
        0.08,
        0.29
      ],
      "c": 13938523,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "observation-arm-3",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        -1.12,
        0.73,
        1.2001538631644062e-16
      ],
      "r": 0.08,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "biolume-vial-3",
      "p": [
        -1.12,
        0.94,
        1.2001538631644062e-16
      ],
      "s": [
        0.3,
        0.44,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "sample-vial-cap-3",
      "p": [
        -1.12,
        1.21,
        1.2001538631644062e-16
      ],
      "s": [
        0.29,
        0.08,
        0.29
      ],
      "c": 13938523,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "observation-arm-4",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        -0.5600000000000005,
        0.73,
        -0.8487048957087496
      ],
      "r": 0.08,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "biolume-vial-4",
      "p": [
        -0.5600000000000005,
        0.94,
        -0.8487048957087496
      ],
      "s": [
        0.3,
        0.44,
        0.3
      ],
      "c": 10143185
    },
    {
      "t": "cylinder",
      "n": "sample-vial-cap-4",
      "p": [
        -0.5600000000000005,
        1.21,
        -0.8487048957087496
      ],
      "s": [
        0.29,
        0.08,
        0.29
      ],
      "c": 13938523,
      "finish": "ceramic"
    },
    {
      "t": "rod",
      "n": "observation-arm-5",
      "from": [
        0,
        0.8,
        0
      ],
      "to": [
        0.5600000000000002,
        0.73,
        -0.8487048957087499
      ],
      "r": 0.08,
      "c": 7177108,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "biolume-vial-5",
      "p": [
        0.5600000000000002,
        0.94,
        -0.8487048957087499
      ],
      "s": [
        0.3,
        0.44,
        0.3
      ],
      "c": 7915949
    },
    {
      "t": "cylinder",
      "n": "sample-vial-cap-5",
      "p": [
        0.5600000000000002,
        1.21,
        -0.8487048957087499
      ],
      "s": [
        0.29,
        0.08,
        0.29
      ],
      "c": 13938523,
      "finish": "ceramic"
    },
    {
      "t": "sphere",
      "n": "plankton-light-0",
      "p": [
        0.58,
        1.4,
        0
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 7915949,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-1",
      "p": [
        0.41012193308819755,
        1.5343502884254439,
        0.42426406871192845
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 15776881,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-2",
      "p": [
        3.551475717527324e-17,
        1.5899999999999999,
        0.6
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 7915949,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-3",
      "p": [
        -0.4101219330881975,
        1.5343502884254439,
        0.4242640687119285
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 15776881,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-4",
      "p": [
        -0.58,
        1.4,
        7.347880794884119e-17
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 7915949,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-5",
      "p": [
        -0.4101219330881976,
        1.265649711574556,
        -0.42426406871192845
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 15776881,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-6",
      "p": [
        -1.0654427152581971e-16,
        1.21,
        -0.6
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 7915949,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "plankton-light-7",
      "p": [
        0.41012193308819744,
        1.265649711574556,
        -0.4242640687119286
      ],
      "s": [
        0.12,
        0.14,
        0.11
      ],
      "c": 15776881,
      "finish": "glow"
    },
    {
      "t": "rod",
      "n": "dive-antenna",
      "from": [
        0,
        2.09,
        0
      ],
      "to": [
        0,
        2.5,
        0
      ],
      "r": 0.04,
      "c": 15776881
    },
    {
      "t": "cylinder",
      "n": "biocell-hatch-seal-0",
      "p": [
        1.12,
        1.16,
        0
      ],
      "s": [
        0.29,
        0.055,
        0.29
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "microbial-fluorophore-0",
      "p": [
        1.12,
        0.9,
        0
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-0-0",
      "p": [
        1.12,
        1.06,
        0
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-0-1",
      "p": [
        1.12,
        1.1400000000000001,
        0
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "biocell-hatch-seal-1",
      "p": [
        0.5600000000000002,
        1.16,
        0.8487048957087499
      ],
      "s": [
        0.29,
        0.055,
        0.29
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "microbial-fluorophore-1",
      "p": [
        0.5600000000000002,
        0.9,
        0.8487048957087499
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-1-0",
      "p": [
        0.5600000000000002,
        1.06,
        0.8487048957087499
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-1-1",
      "p": [
        0.5600000000000002,
        1.1400000000000001,
        0.8487048957087499
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "biocell-hatch-seal-2",
      "p": [
        -0.5599999999999998,
        1.16,
        0.84870489570875
      ],
      "s": [
        0.29,
        0.055,
        0.29
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "microbial-fluorophore-2",
      "p": [
        -0.5599999999999998,
        0.9,
        0.84870489570875
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-2-0",
      "p": [
        -0.5599999999999998,
        1.06,
        0.84870489570875
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-2-1",
      "p": [
        -0.5599999999999998,
        1.1400000000000001,
        0.84870489570875
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "biocell-hatch-seal-3",
      "p": [
        -1.12,
        1.16,
        1.2001538631644062e-16
      ],
      "s": [
        0.29,
        0.055,
        0.29
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "microbial-fluorophore-3",
      "p": [
        -1.12,
        0.9,
        1.2001538631644062e-16
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-3-0",
      "p": [
        -1.12,
        1.06,
        1.2001538631644062e-16
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-3-1",
      "p": [
        -1.12,
        1.1400000000000001,
        1.2001538631644062e-16
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "biocell-hatch-seal-4",
      "p": [
        -0.5600000000000005,
        1.16,
        -0.8487048957087496
      ],
      "s": [
        0.29,
        0.055,
        0.29
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "microbial-fluorophore-4",
      "p": [
        -0.5600000000000005,
        0.9,
        -0.8487048957087496
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-4-0",
      "p": [
        -0.5600000000000005,
        1.06,
        -0.8487048957087496
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-4-1",
      "p": [
        -0.5600000000000005,
        1.1400000000000001,
        -0.8487048957087496
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "biocell-hatch-seal-5",
      "p": [
        0.5600000000000002,
        1.16,
        -0.8487048957087499
      ],
      "s": [
        0.29,
        0.055,
        0.29
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "sphere",
      "n": "microbial-fluorophore-5",
      "p": [
        0.5600000000000002,
        0.9,
        -0.8487048957087499
      ],
      "s": [
        0.12,
        0.12,
        0.12
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-5-0",
      "p": [
        0.5600000000000002,
        1.06,
        -0.8487048957087499
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "sample-tube-rim-5-1",
      "p": [
        0.5600000000000002,
        1.1400000000000001,
        -0.8487048957087499
      ],
      "s": [
        0.24,
        0.025,
        0.24
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-0",
      "p": [
        0.6,
        1.73,
        0
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-1",
      "p": [
        0.4242640687119285,
        1.81,
        0.417193000900063
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-2",
      "p": [
        3.6739403974420595e-17,
        1.89,
        0.59
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-3",
      "p": [
        -0.42426406871192845,
        1.73,
        0.41719300090006306
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-4",
      "p": [
        -0.6,
        1.81,
        7.225416114969384e-17
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-5",
      "p": [
        -0.4242640687119286,
        1.89,
        -0.417193000900063
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-6",
      "p": [
        -1.1021821192326178e-16,
        1.73,
        -0.59
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 7981487,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "drifting-plankton-particle-7",
      "p": [
        0.4242640687119284,
        1.81,
        -0.4171930009000631
      ],
      "s": [
        0.075,
        0.08,
        0.08
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "cylinder",
      "n": "pressure-hull-bolt-0",
      "p": [
        0.8,
        0.53,
        0
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "pressure-hull-bolt-1",
      "p": [
        0.40000000000000013,
        0.53,
        0.6235382907247957
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "pressure-hull-bolt-2",
      "p": [
        -0.39999999999999986,
        0.53,
        0.6235382907247958
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "pressure-hull-bolt-3",
      "p": [
        -0.8,
        0.53,
        8.817456953860943e-17
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "pressure-hull-bolt-4",
      "p": [
        -0.40000000000000036,
        0.53,
        -0.6235382907247956
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "pressure-hull-bolt-5",
      "p": [
        0.40000000000000013,
        0.53,
        -0.6235382907247957
      ],
      "s": [
        0.11,
        0.08,
        0.11
      ],
      "c": 11648457,
      "finish": "metal"
    },
    {
      "t": "arc",
      "n": "observation-viewport-gasket",
      "p": [
        0,
        1.28,
        0.68
      ],
      "s": [
        1.1,
        1.02,
        0.2
      ],
      "c": 14989405,
      "finish": "metal",
      "start": 0.7853981633974483,
      "sweep": 4.39822971502571,
      "rot": [
        0,
        0,
        0
      ]
    },
    {
      "t": "rounded-box",
      "n": "deep-sea-research-plate",
      "p": [
        0,
        0.34,
        0.85
      ],
      "s": [
        0.62,
        0.13,
        0.033
      ],
      "c": 15918798,
      "finish": "ceramic"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
