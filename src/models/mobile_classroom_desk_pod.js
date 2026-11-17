import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Mobile Classroom Desk Pod / 移动课堂学习桌舱. */
export const assetMeta = {
  "id": "furniture.mobile-classroom-desk-pod.001",
  "slug": "mobile-classroom-desk-pod",
  "title": "Mobile Classroom Desk Pod",
  "title_zh": "移动课堂学习桌舱",
  "summary": "A wheeled collaborative learning desk with foldable side shields, tablet shelf and cable cubby",
  "category": "furniture",
  "tags": [
    "mobile",
    "classroom",
    "desk",
    "pod",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    1.56,
    1.38,
    1.28
  ],
  "generator": "createMobileClassroomDeskPod",
  "source_path": "src/models/mobile_classroom_desk_pod.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/mobile-classroom-desk-pod.webp",
  "accent": "#c59d75"
};
export function createMobileClassroomDeskPod() { return buildRecipe({
  "title": "Mobile Classroom Desk Pod",
  "dimensions": [
    1.56,
    1.38,
    1.28
  ],
  "parts": [
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-classroom-desk",
      "p": [
        0,
        0.87,
        0
      ],
      "s": [
        1.36,
        0.13,
        0.83
      ],
      "c": 12950901
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-desk-telescopic-foot--0.58--0.32",
      "p": [
        -0.58,
        0.415,
        -0.32
      ],
      "s": [
        0.085,
        0.83,
        0.085
      ],
      "c": 6059912
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-desk-telescopic-foot--0.58-0.32",
      "p": [
        -0.58,
        0.415,
        0.32
      ],
      "s": [
        0.085,
        0.83,
        0.085
      ],
      "c": 6059912
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-desk-telescopic-foot-0.58--0.32",
      "p": [
        0.58,
        0.415,
        -0.32
      ],
      "s": [
        0.085,
        0.83,
        0.085
      ],
      "c": 6059912
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-desk-telescopic-foot-0.58-0.32",
      "p": [
        0.58,
        0.415,
        0.32
      ],
      "s": [
        0.085,
        0.83,
        0.085
      ],
      "c": 6059912
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-privacy-panel--1",
      "p": [
        -0.67,
        1.14,
        -0.07
      ],
      "s": [
        0.048,
        0.55,
        0.87
      ],
      "c": 6059912
    },
    {
      "t": "rod",
      "n": "mobile-classroom-desk-pod-fold-hinge--1",
      "from": [
        -0.64,
        0.89,
        -0.41
      ],
      "to": [
        -0.64,
        0.89,
        0.31
      ],
      "r": 0.033,
      "c": 4150112
    },
    {
      "t": "cylinder",
      "n": "mobile-classroom-desk-pod-locking-caster--1",
      "p": [
        -0.58,
        0.09,
        0.3
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 4150112,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-privacy-panel-1",
      "p": [
        0.67,
        1.14,
        -0.07
      ],
      "s": [
        0.048,
        0.55,
        0.87
      ],
      "c": 6059912
    },
    {
      "t": "rod",
      "n": "mobile-classroom-desk-pod-fold-hinge-1",
      "from": [
        0.64,
        0.89,
        -0.41
      ],
      "to": [
        0.64,
        0.89,
        0.31
      ],
      "r": 0.033,
      "c": 4150112
    },
    {
      "t": "cylinder",
      "n": "mobile-classroom-desk-pod-locking-caster-1",
      "p": [
        0.58,
        0.09,
        0.3
      ],
      "s": [
        0.13,
        0.12,
        0.13
      ],
      "c": 4150112,
      "rot": [
        0,
        0,
        1.5707963267948966
      ]
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-tablet-book-riser",
      "p": [
        0,
        1,
        -0.27
      ],
      "s": [
        0.59,
        0.06,
        0.15
      ],
      "c": 15061166
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-pencil-cable-cubby",
      "p": [
        0,
        0.73,
        0.16
      ],
      "s": [
        0.67,
        0.11,
        0.27
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-structural-fitting-0",
      "p": [
        -0.4,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-structural-fitting-1",
      "p": [
        -0.33,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-structural-fitting-2",
      "p": [
        -0.26,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-structural-fitting-3",
      "p": [
        -0.19,
        0.16,
        0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4150112
    },
    {
      "t": "box",
      "n": "mobile-classroom-desk-pod-structural-fitting-4",
      "p": [
        -0.12,
        0.16,
        -0.31
      ],
      "s": [
        0.08,
        0.08,
        0.08
      ],
      "c": 4150112
    }
  ]
}); }
