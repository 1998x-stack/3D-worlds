import { buildRecipe } from './recipe_engine.js';
/** Autumn Maple Tree: original detailed low-poly scene model. */
export const assetMeta = {
  "id": "nature.autumn-maple-tree.001",
  "slug": "autumn-maple-tree",
  "title": "Autumn Maple Tree",
  "title_zh": "秋季红枫树",
  "summary": "Branching maple with red-orange layered canopy and exposed trunk roots.",
  "category": "nature",
  "tags": [
    "maple",
    "autumn",
    "tree",
    "forest"
  ],
  "dimensions_m": [
    3.1,
    3.42,
    2.7
  ],
  "generator": "createAutumnMapleTree",
  "source_path": "src/models/autumn_maple_tree.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v0.5",
  "preview_path": "public/thumbs/autumn-maple-tree.webp"
};
export function createAutumnMapleTree() {
  return buildRecipe({
  "title": "Autumn Maple Tree",
  "dimensions": [
    3.1,
    3.42,
    2.7
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "maple-trunk",
      "p": [
        0,
        1.13,
        0
      ],
      "s": [
        0.31,
        2.26,
        0.3
      ],
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "scaffold-branch-0",
      "from": [
        0,
        1.7,
        0
      ],
      "to": [
        0.8,
        2.42,
        0
      ],
      "r": 0.09,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "scaffold-branch-1",
      "from": [
        0,
        1.7,
        0
      ],
      "to": [
        0.40000000000000013,
        2.42,
        0.6321985447626401
      ],
      "r": 0.09,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "scaffold-branch-2",
      "from": [
        0,
        1.7,
        0
      ],
      "to": [
        -0.39999999999999986,
        2.42,
        0.6321985447626403
      ],
      "r": 0.09,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "scaffold-branch-3",
      "from": [
        0,
        1.7,
        0
      ],
      "to": [
        -0.8,
        2.42,
        8.939921633775678e-17
      ],
      "r": 0.09,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "scaffold-branch-4",
      "from": [
        0,
        1.7,
        0
      ],
      "to": [
        -0.40000000000000036,
        2.42,
        -0.63219854476264
      ],
      "r": 0.09,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "scaffold-branch-5",
      "from": [
        0,
        1.7,
        0
      ],
      "to": [
        0.40000000000000013,
        2.42,
        -0.6321985447626401
      ],
      "r": 0.09,
      "c": 9531474
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-0",
      "p": [
        0.64,
        2.65,
        0
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 12274746
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-1",
      "p": [
        -0.5677723562465692,
        2.81,
        0.5201293603347334
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 14711361
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-2",
      "p": [
        0.07867736099174534,
        2.9699999999999998,
        -0.8965544450101035
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 11619640
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-3",
      "p": [
        0.6266999468044251,
        3.13,
        0.8174027016564912
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 15180630
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-4",
      "p": [
        -0.6302180707039994,
        2.65,
        -0.11146830651861933
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 12274746
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-5",
      "p": [
        0.649684902999847,
        2.81,
        -0.41329109210589016
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 14711361
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-6",
      "p": [
        -0.23362703178018235,
        2.9699999999999998,
        0.8691480944129036
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 11619640
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-7",
      "p": [
        -0.4747549007624851,
        3.13,
        -0.91406114904967
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 15180630
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-8",
      "p": [
        0.6011713020058472,
        2.65,
        0.21952919087126974
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 12274746
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-9",
      "p": [
        -0.7117375379224263,
        2.81,
        0.2938191231219009
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 14711361
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-10",
      "p": [
        0.38143506786078113,
        2.9699999999999998,
        -0.8151731650428891
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 11619640
    },
    {
      "t": "sphere",
      "n": "maple-leaf-cloud-11",
      "p": [
        0.3082972957449563,
        3.13,
        0.9827780916546456
      ],
      "s": [
        0.55,
        0.39,
        0.51
      ],
      "c": 15180630
    },
    {
      "t": "rod",
      "n": "visible-root-0",
      "from": [
        0,
        0.22,
        0
      ],
      "to": [
        0.4,
        0.03,
        0
      ],
      "r": 0.053,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "visible-root-1",
      "from": [
        0,
        0.22,
        0
      ],
      "to": [
        0.12360679774997899,
        0.03,
        0.34238034586625526
      ],
      "r": 0.053,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "visible-root-2",
      "from": [
        0,
        0.22,
        0
      ],
      "to": [
        -0.32360679774997897,
        0.03,
        0.21160269082529037
      ],
      "r": 0.053,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "visible-root-3",
      "from": [
        0,
        0.22,
        0
      ],
      "to": [
        -0.323606797749979,
        0.03,
        -0.2116026908252903
      ],
      "r": 0.053,
      "c": 9531474
    },
    {
      "t": "rod",
      "n": "visible-root-4",
      "from": [
        0,
        0.22,
        0
      ],
      "to": [
        0.1236067977499789,
        0.03,
        -0.3423803458662553
      ],
      "r": 0.053,
      "c": 9531474
    },
    {
      "t": "sphere",
      "n": "high-crown",
      "p": [
        0,
        3.19,
        0
      ],
      "s": [
        0.51,
        0.27,
        0.46
      ],
      "c": 12739389
    }
  ]
});
}
