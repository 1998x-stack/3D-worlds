import { buildRecipe } from './recipe_engine.js';
/** Curved Library Reading Nook / 弧形图书馆阅读舱: original editable V0.9 geometry. */
export const assetMeta = {
  "id": "furniture.curved-library-reading-nook.001",
  "slug": "curved-library-reading-nook",
  "title": "Curved Library Reading Nook",
  "title_zh": "弧形图书馆阅读舱",
  "summary": "Enclosed library reading alcove with curved timber ribs, cushions and lights",
  "category": "furniture",
  "tags": [
    "curved",
    "library",
    "reading",
    "nook",
    "furniture",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    2.15,
    2.25,
    1.55
  ],
  "generator": "createCurvedLibraryReadingNook",
  "source_path": "src/models/curved_library_reading_nook.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.9",
  "preview_path": "public/thumbs/curved-library-reading-nook.webp",
  "accent": "#4c4541"
};
export function createCurvedLibraryReadingNook() { return buildRecipe({
  "title": "Curved Library Reading Nook",
  "dimensions": [
    2.15,
    2.25,
    1.55
  ],
  "parts": [
    {
      "t": "rod",
      "n": "alcove-arched-rib-0",
      "from": [
        0.82,
        0.09,
        -0.5
      ],
      "to": [
        0.82,
        1.2,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-0",
      "from": [
        0.82,
        0.09,
        0.5
      ],
      "to": [
        0.82,
        1.2,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-1",
      "from": [
        0.756820011984368,
        0.09,
        -0.5
      ],
      "to": [
        0.756820011984368,
        1.5520687577758825,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-1",
      "from": [
        0.756820011984368,
        0.09,
        0.5
      ],
      "to": [
        0.756820011984368,
        1.5520687577758825,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-2",
      "from": [
        0.5768986283848344,
        0.09,
        -0.5
      ],
      "to": [
        0.5768986283848344,
        1.8505382386916236,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-2",
      "from": [
        0.5768986283848344,
        0.09,
        0.5
      ],
      "to": [
        0.5768986283848344,
        1.8505382386916236,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-3",
      "from": [
        0.30762724886302456,
        0.09,
        -0.5
      ],
      "to": [
        0.30762724886302456,
        2.049969169910384,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-3",
      "from": [
        0.30762724886302456,
        0.09,
        0.5
      ],
      "to": [
        0.30762724886302456,
        2.049969169910384,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-4",
      "from": [
        -0.00999999999999995,
        0.09,
        -0.5
      ],
      "to": [
        -0.00999999999999995,
        2.12,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-4",
      "from": [
        -0.00999999999999995,
        0.09,
        0.5
      ],
      "to": [
        -0.00999999999999995,
        2.12,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-5",
      "from": [
        -0.32762724886302447,
        0.09,
        -0.5
      ],
      "to": [
        -0.32762724886302447,
        2.049969169910384,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-5",
      "from": [
        -0.32762724886302447,
        0.09,
        0.5
      ],
      "to": [
        -0.32762724886302447,
        2.049969169910384,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-6",
      "from": [
        -0.5968986283848344,
        0.09,
        -0.5
      ],
      "to": [
        -0.5968986283848344,
        1.8505382386916236,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-6",
      "from": [
        -0.5968986283848344,
        0.09,
        0.5
      ],
      "to": [
        -0.5968986283848344,
        1.8505382386916236,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-7",
      "from": [
        -0.776820011984368,
        0.09,
        -0.5
      ],
      "to": [
        -0.776820011984368,
        1.5520687577758827,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-7",
      "from": [
        -0.776820011984368,
        0.09,
        0.5
      ],
      "to": [
        -0.776820011984368,
        1.5520687577758827,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-arched-rib-8",
      "from": [
        -0.84,
        0.09,
        -0.5
      ],
      "to": [
        -0.84,
        1.2000000000000002,
        -0.5
      ],
      "r": 0.055,
      "c": 12165758
    },
    {
      "t": "rod",
      "n": "alcove-outer-rib-8",
      "from": [
        -0.84,
        0.09,
        0.5
      ],
      "to": [
        -0.84,
        1.2000000000000002,
        0.5
      ],
      "r": 0.04,
      "c": 12165758
    },
    {
      "t": "box",
      "n": "reading-bench",
      "p": [
        0,
        0.42,
        0
      ],
      "s": [
        1.45,
        0.3,
        0.83
      ],
      "c": 5598068
    },
    {
      "t": "box",
      "n": "cushioned-seat",
      "p": [
        0,
        0.62,
        0
      ],
      "s": [
        1.35,
        0.14,
        0.72
      ],
      "c": 15062968
    },
    {
      "t": "box",
      "n": "wall-book-0",
      "p": [
        -0.5,
        1.25,
        -0.52
      ],
      "s": [
        0.17,
        0.46,
        0.09
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "wall-book-1",
      "p": [
        -0.030000000000000027,
        1.25,
        -0.52
      ],
      "s": [
        0.17,
        0.46,
        0.09
      ],
      "c": 4998465
    },
    {
      "t": "box",
      "n": "wall-book-2",
      "p": [
        0.43999999999999995,
        1.25,
        -0.52
      ],
      "s": [
        0.17,
        0.46,
        0.09
      ],
      "c": 4998465
    },
    {
      "t": "sphere",
      "n": "reading-pendant",
      "p": [
        0,
        1.85,
        0.02
      ],
      "s": [
        0.18,
        0.16,
        0.18
      ],
      "c": 15062968
    }
  ]
}); }
