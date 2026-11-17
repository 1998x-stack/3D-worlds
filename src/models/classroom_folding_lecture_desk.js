import { buildRecipe } from './recipe_engine.js';
/** Classroom Folding Lecture Desk: original editable Y-up, meter-scale model. */
export const assetMeta = {
  "id": "furniture.classroom-folding-lecture-desk.001",
  "slug": "classroom-folding-lecture-desk",
  "title": "Classroom Folding Lecture Desk",
  "title_zh": "教室翻板演讲桌",
  "summary": "Mobile folding seminar desk with writing surface, modesty panel, book rack and casters",
  "category": "furniture",
  "tags": [
    "classroom",
    "lecture",
    "folding"
  ],
  "dimensions_m": [
    1.18,
    1.17,
    0.67
  ],
  "generator": "createClassroomFoldingLectureDesk",
  "source_path": "src/models/classroom_folding_lecture_desk.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.8",
  "preview_path": "public/thumbs/classroom-folding-lecture-desk.webp"
};
export function createClassroomFoldingLectureDesk() { return buildRecipe({
  "title": "Classroom Folding Lecture Desk",
  "dimensions": [
    1.18,
    1.17,
    0.67
  ],
  "parts": [
    {
      "t": "box",
      "n": "desktop",
      "p": [
        0,
        1.11,
        0
      ],
      "s": [
        1.15,
        0.09,
        0.65
      ],
      "c": 9990996
    },
    {
      "t": "box",
      "n": "folding-leaf",
      "p": [
        0.44,
        1.07,
        0.1
      ],
      "s": [
        0.25,
        0.07,
        0.45
      ],
      "c": 11968636,
      "rot": [
        0,
        0,
        0.1
      ]
    },
    {
      "t": "box",
      "n": "modesty-panel",
      "p": [
        0,
        0.66,
        0.23
      ],
      "s": [
        1.03,
        0.68,
        0.04
      ],
      "c": 8492183
    },
    {
      "t": "box",
      "n": "book-shelf",
      "p": [
        0,
        0.45,
        -0.04
      ],
      "s": [
        0.96,
        0.05,
        0.47
      ],
      "c": 3620935
    },
    {
      "t": "rod",
      "n": "metal-leg-0-0",
      "from": [
        -0.5,
        0.15,
        -0.25
      ],
      "to": [
        -0.5,
        1.04,
        -0.25
      ],
      "r": 0.032,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "wheeled-caster-0-0",
      "p": [
        -0.5,
        0.08,
        -0.25
      ],
      "s": [
        0.12,
        0.055,
        0.12
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "metal-leg-0-1",
      "from": [
        -0.5,
        0.15,
        0.25
      ],
      "to": [
        -0.5,
        1.04,
        0.25
      ],
      "r": 0.032,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "wheeled-caster-0-1",
      "p": [
        -0.5,
        0.08,
        0.25
      ],
      "s": [
        0.12,
        0.055,
        0.12
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "metal-leg-1-0",
      "from": [
        0.5,
        0.15,
        -0.25
      ],
      "to": [
        0.5,
        1.04,
        -0.25
      ],
      "r": 0.032,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "wheeled-caster-1-0",
      "p": [
        0.5,
        0.08,
        -0.25
      ],
      "s": [
        0.12,
        0.055,
        0.12
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "metal-leg-1-1",
      "from": [
        0.5,
        0.15,
        0.25
      ],
      "to": [
        0.5,
        1.04,
        0.25
      ],
      "r": 0.032,
      "c": 9609892
    },
    {
      "t": "cylinder",
      "n": "wheeled-caster-1-1",
      "p": [
        0.5,
        0.08,
        0.25
      ],
      "s": [
        0.12,
        0.055,
        0.12
      ],
      "c": 3620935,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "rod",
      "n": "hinge",
      "from": [
        -0.4,
        1.08,
        0.09
      ],
      "to": [
        0.4,
        1.08,
        0.09
      ],
      "r": 0.015,
      "c": 13149293
    },
    {
      "t": "box",
      "n": "paper-clip",
      "p": [
        0,
        1.17,
        -0.2
      ],
      "s": [
        0.2,
        0.03,
        0.09
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "notebook",
      "p": [
        0,
        1.19,
        -0.13
      ],
      "s": [
        0.31,
        0.03,
        0.21
      ],
      "c": 15263198
    },
    {
      "t": "box",
      "n": "cable-rail-0",
      "p": [
        -0.36,
        0.51,
        -0.24
      ],
      "s": [
        0.025,
        0.035,
        0.14
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "cable-rail-1",
      "p": [
        -0.12,
        0.51,
        -0.24
      ],
      "s": [
        0.025,
        0.035,
        0.14
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "cable-rail-2",
      "p": [
        0.12,
        0.51,
        -0.24
      ],
      "s": [
        0.025,
        0.035,
        0.14
      ],
      "c": 9609892
    },
    {
      "t": "box",
      "n": "cable-rail-3",
      "p": [
        0.36,
        0.51,
        -0.24
      ],
      "s": [
        0.025,
        0.035,
        0.14
      ],
      "c": 9609892
    }
  ]
}); }
