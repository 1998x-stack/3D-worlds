import { buildRecipe } from './recipe_engine.js';
/** V1.1 original authored asset: Photogrammetry Turntable Rig / 摄影测量旋转扫描台. */
export const assetMeta = {
  "id": "tools.photogrammetry-turntable-rig.001",
  "slug": "photogrammetry-turntable-rig",
  "title": "Photogrammetry Turntable Rig",
  "title_zh": "摄影测量旋转扫描台",
  "summary": "Tabletop 3D capture station with motorized turntable, camera rail and calibration markers",
  "category": "tools",
  "tags": [
    "photogrammetry",
    "turntable",
    "rig",
    "tools",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.35,
    1.72,
    1.18
  ],
  "generator": "createPhotogrammetryTurntableRig",
  "source_path": "src/models/photogrammetry_turntable_rig.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.1",
  "preview_path": "public/thumbs/photogrammetry-turntable-rig.webp",
  "accent": "#7f949b"
};
export function createPhotogrammetryTurntableRig() { return buildRecipe({
  "title": "Photogrammetry Turntable Rig",
  "dimensions": [
    1.35,
    1.72,
    1.18
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "scanner-rotary-turntable-base",
      "p": [
        0,
        0.2,
        0
      ],
      "s": [
        0.95,
        0.28,
        0.95
      ],
      "c": 8361115
    },
    {
      "t": "cylinder",
      "n": "photogrammetry-specimen-plinth",
      "p": [
        0,
        0.39,
        0
      ],
      "s": [
        0.65,
        0.11,
        0.65
      ],
      "c": 2637648
    },
    {
      "t": "sphere",
      "n": "calibration-object",
      "p": [
        0,
        0.72,
        0
      ],
      "s": [
        0.28,
        0.24,
        0.26
      ],
      "c": 13226448
    },
    {
      "t": "rod",
      "n": "multi-camera-support-0",
      "from": [
        0.57,
        0.25,
        0
      ],
      "to": [
        0.57,
        1.42,
        0
      ],
      "r": 0.041,
      "c": 14398057
    },
    {
      "t": "box",
      "n": "scanner-camera-module-0",
      "p": [
        0.57,
        1.25,
        0
      ],
      "s": [
        0.24,
        0.2,
        0.23
      ],
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "camera-lens-0",
      "p": [
        0.49019999999999997,
        1.22,
        0
      ],
      "s": [
        0.12,
        0.16,
        0.12
      ],
      "c": 13226448,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "multi-camera-support-1",
      "from": [
        3.490243377569956e-17,
        0.25,
        0.57
      ],
      "to": [
        3.490243377569956e-17,
        1.42,
        0.57
      ],
      "r": 0.041,
      "c": 14398057
    },
    {
      "t": "box",
      "n": "scanner-camera-module-1",
      "p": [
        3.490243377569956e-17,
        1.25,
        0.57
      ],
      "s": [
        0.24,
        0.2,
        0.23
      ],
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "camera-lens-1",
      "p": [
        3.0016093047101625e-17,
        1.22,
        0.49019999999999997
      ],
      "s": [
        0.12,
        0.16,
        0.12
      ],
      "c": 13226448,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "multi-camera-support-2",
      "from": [
        -0.57,
        0.25,
        6.980486755139913e-17
      ],
      "to": [
        -0.57,
        1.42,
        6.980486755139913e-17
      ],
      "r": 0.041,
      "c": 14398057
    },
    {
      "t": "box",
      "n": "scanner-camera-module-2",
      "p": [
        -0.57,
        1.25,
        6.980486755139913e-17
      ],
      "s": [
        0.24,
        0.2,
        0.23
      ],
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "camera-lens-2",
      "p": [
        -0.49019999999999997,
        1.22,
        6.003218609420325e-17
      ],
      "s": [
        0.12,
        0.16,
        0.12
      ],
      "c": 13226448,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "multi-camera-support-3",
      "from": [
        -1.0470730132709869e-16,
        0.25,
        -0.57
      ],
      "to": [
        -1.0470730132709869e-16,
        1.42,
        -0.57
      ],
      "r": 0.041,
      "c": 14398057
    },
    {
      "t": "box",
      "n": "scanner-camera-module-3",
      "p": [
        -1.0470730132709869e-16,
        1.25,
        -0.57
      ],
      "s": [
        0.24,
        0.2,
        0.23
      ],
      "c": 2637648
    },
    {
      "t": "cylinder",
      "n": "camera-lens-3",
      "p": [
        -9.004827914130487e-17,
        1.22,
        -0.49019999999999997
      ],
      "s": [
        0.12,
        0.16,
        0.12
      ],
      "c": 13226448,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-0",
      "p": [
        0.38,
        0.45,
        0
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-1",
      "p": [
        0.2687005768508881,
        0.45,
        0.26870057685088805
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-2",
      "p": [
        2.3268289183799712e-17,
        0.45,
        0.38
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-3",
      "p": [
        -0.26870057685088805,
        0.45,
        0.2687005768508881
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-4",
      "p": [
        -0.38,
        0.45,
        4.6536578367599424e-17
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-5",
      "p": [
        -0.2687005768508881,
        0.45,
        -0.26870057685088805
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-6",
      "p": [
        -6.980486755139913e-17,
        0.45,
        -0.38
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "turntable-fiducial-marker-7",
      "p": [
        0.268700576850888,
        0.45,
        -0.2687005768508881
      ],
      "s": [
        0.09,
        0.018,
        0.09
      ],
      "c": 14398057
    },
    {
      "t": "box",
      "n": "capture-sequence-controller",
      "p": [
        0,
        0.5,
        0.62
      ],
      "s": [
        0.51,
        0.25,
        0.24
      ],
      "c": 13226448
    }
  ]
}); }
