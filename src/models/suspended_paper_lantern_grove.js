import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Suspended Paper Lantern Grove / 悬挂纸灯笼群组. */
export const assetMeta = {
  "id": "decor.suspended-paper-lantern-grove.001",
  "slug": "suspended-paper-lantern-grove",
  "title": "Suspended Paper Lantern Grove",
  "title_zh": "悬挂纸灯笼群组",
  "summary": "Overhead hanging lantern cluster with scalloped paper shades and braided cords",
  "category": "decor",
  "tags": [
    "suspended",
    "paper",
    "lantern",
    "grove",
    "decor",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.22,
    2.5,
    1.92
  ],
  "generator": "createSuspendedPaperLanternGrove",
  "source_path": "src/models/suspended_paper_lantern_grove.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/suspended-paper-lantern-grove.webp",
  "accent": "#ba8c74"
};
export function createSuspendedPaperLanternGrove() { return buildRecipe({
  "title": "Suspended Paper Lantern Grove",
  "dimensions": [
    2.22,
    2.5,
    1.92
  ],
  "parts": [
    {
      "t": "box",
      "n": "suspended-paper-lantern-grove-suspended-lanterns-overhead-girder",
      "p": [
        0,
        2.26,
        0
      ],
      "s": [
        2.05,
        0.13,
        1.72
      ],
      "c": 5073272
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-0",
      "from": [
        0.68,
        2.24,
        0
      ],
      "to": [
        0.68,
        1.7000000000000002,
        0
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-0",
      "p": [
        0.68,
        1.5099999999999998,
        0
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15380870
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-0",
      "p": [
        0.68,
        1.32,
        0
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-1",
      "from": [
        0.6851590932319507,
        2.24,
        0.3050524823068501
      ],
      "to": [
        0.6851590932319507,
        1.5100000000000002,
        0.3050524823068501
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-1",
      "p": [
        0.6851590932319507,
        1.3199999999999998,
        0.3050524823068501
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-1",
      "p": [
        0.6851590932319507,
        1.1300000000000001,
        0.3050524823068501
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-2",
      "from": [
        0.5486870972142638,
        2.24,
        0.6093787568914633
      ],
      "to": [
        0.5486870972142638,
        1.3200000000000003,
        0.6093787568914633
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-2",
      "p": [
        0.5486870972142638,
        1.13,
        0.6093787568914633
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-2",
      "p": [
        0.5486870972142638,
        0.9400000000000001,
        0.6093787568914633
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-3",
      "from": [
        0.2750251249937033,
        2.24,
        0.8464402995026867
      ],
      "to": [
        0.2750251249937033,
        1.1300000000000001,
        0.8464402995026867
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-3",
      "p": [
        0.2750251249937033,
        0.9399999999999997,
        0.8464402995026867
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15380870
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-3",
      "p": [
        0.2750251249937033,
        0.75,
        0.8464402995026867
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-4",
      "from": [
        -0.07107935502200427,
        2.24,
        0.676274888850426
      ],
      "to": [
        -0.07107935502200427,
        0.9400000000000002,
        0.676274888850426
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-4",
      "p": [
        -0.07107935502200427,
        0.7499999999999998,
        0.676274888850426
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-4",
      "p": [
        -0.07107935502200427,
        0.56,
        0.676274888850426
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-5",
      "from": [
        -0.37499999999999983,
        2.24,
        0.649519052838329
      ],
      "to": [
        -0.37499999999999983,
        1.7000000000000002,
        0.649519052838329
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-5",
      "p": [
        -0.37499999999999983,
        1.5099999999999998,
        0.649519052838329
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-5",
      "p": [
        -0.37499999999999983,
        1.32,
        0.649519052838329
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-6",
      "from": [
        -0.6633939353874568,
        2.24,
        0.4819839068798281
      ],
      "to": [
        -0.6633939353874568,
        1.5100000000000002,
        0.4819839068798281
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-6",
      "p": [
        -0.6633939353874568,
        1.3199999999999998,
        0.4819839068798281
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15380870
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-6",
      "p": [
        -0.6633939353874568,
        1.1300000000000001,
        0.4819839068798281
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-7",
      "from": [
        -0.8705513646530871,
        2.24,
        0.18504140482780582
      ],
      "to": [
        -0.8705513646530871,
        1.3200000000000003,
        0.18504140482780582
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-7",
      "p": [
        -0.8705513646530871,
        1.13,
        0.18504140482780582
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-7",
      "p": [
        -0.8705513646530871,
        0.9400000000000001,
        0.18504140482780582
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-8",
      "from": [
        -0.6651403684989879,
        2.24,
        -0.14137994975607618
      ],
      "to": [
        -0.6651403684989879,
        1.1300000000000001,
        -0.14137994975607618
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-8",
      "p": [
        -0.6651403684989879,
        0.9399999999999997,
        -0.14137994975607618
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-8",
      "p": [
        -0.6651403684989879,
        0.75,
        -0.14137994975607618
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-9",
      "from": [
        -0.6067627457812107,
        2.24,
        -0.4408389392193548
      ],
      "to": [
        -0.6067627457812107,
        0.9400000000000002,
        -0.4408389392193548
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-9",
      "p": [
        -0.6067627457812107,
        0.7499999999999998,
        -0.4408389392193548
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15380870
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-9",
      "p": [
        -0.6067627457812107,
        0.56,
        -0.4408389392193548
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-10",
      "from": [
        -0.4100000000000004,
        2.24,
        -0.7101408311032396
      ],
      "to": [
        -0.4100000000000004,
        1.7000000000000002,
        -0.7101408311032396
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-10",
      "p": [
        -0.4100000000000004,
        1.5099999999999998,
        -0.7101408311032396
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-10",
      "p": [
        -0.4100000000000004,
        1.32,
        -0.7101408311032396
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-11",
      "from": [
        -0.09303033230821228,
        2.24,
        -0.8851244868777634
      ],
      "to": [
        -0.09303033230821228,
        1.5100000000000002,
        -0.8851244868777634
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-11",
      "p": [
        -0.09303033230821228,
        1.3199999999999998,
        -0.8851244868777634
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-11",
      "p": [
        -0.09303033230821228,
        1.1300000000000001,
        -0.8851244868777634
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-12",
      "from": [
        0.21013155617496412,
        2.24,
        -0.6467184310807045
      ],
      "to": [
        0.21013155617496412,
        1.3200000000000003,
        -0.6467184310807045
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-12",
      "p": [
        0.21013155617496412,
        1.13,
        -0.6467184310807045
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15380870
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-12",
      "p": [
        0.21013155617496412,
        0.9400000000000001,
        -0.6467184310807045
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-13",
      "from": [
        0.5018479547691439,
        2.24,
        -0.5573586191080455
      ],
      "to": [
        0.5018479547691439,
        1.1300000000000001,
        -0.5573586191080455
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-13",
      "p": [
        0.5018479547691439,
        0.9399999999999997,
        -0.5573586191080455
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-13",
      "p": [
        0.5018479547691439,
        0.75,
        -0.5573586191080455
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    },
    {
      "t": "rod",
      "n": "suspended-paper-lantern-grove-lantern-silk-hanging-cord-14",
      "from": [
        0.7491072752669329,
        2.24,
        -0.3335240473221561
      ],
      "to": [
        0.7491072752669329,
        0.9400000000000002,
        -0.3335240473221561
      ],
      "r": 0.011,
      "c": 8955274
    },
    {
      "t": "sphere",
      "n": "suspended-paper-lantern-grove-paper-lantern-body-14",
      "p": [
        0.7491072752669329,
        0.7499999999999998,
        -0.3335240473221561
      ],
      "s": [
        0.29,
        0.3,
        0.27
      ],
      "c": 15387547
    },
    {
      "t": "cylinder",
      "n": "suspended-paper-lantern-grove-lantern-bottom-rim-14",
      "p": [
        0.7491072752669329,
        0.56,
        -0.3335240473221561
      ],
      "s": [
        0.21,
        0.05,
        0.21
      ],
      "c": 12225652
    }
  ]
}); }
