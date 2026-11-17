import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Bio Digital Archive Vault / 生物数字档案存储舱. */
export const assetMeta = {
  "id": "scifi.bio-digital-archive-vault.001",
  "slug": "bio-digital-archive-vault",
  "title": "Bio Digital Archive Vault",
  "title_zh": "生物数字档案存储舱",
  "summary": "Science-fiction living research archive with data pillars, illuminated bio sample racks and sealed doors",
  "category": "scifi",
  "tags": [
    "bio",
    "digital",
    "archive",
    "vault",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.44,
    3.11,
    2.93
  ],
  "generator": "createBioDigitalArchiveVault",
  "source_path": "src/models/bio_digital_archive_vault.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/bio-digital-archive-vault.webp",
  "accent": "#8ccac0"
};
export function createBioDigitalArchiveVault() { return buildRecipe({
  "title": "Bio Digital Archive Vault",
  "dimensions": [
    3.44,
    3.11,
    2.93
  ],
  "parts": [
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-digital-archive-foundation",
      "p": [
        0,
        0.12,
        0
      ],
      "s": [
        3.03,
        0.23,
        2.57
      ],
      "c": 7443382
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-0",
      "p": [
        1,
        1.32,
        0
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-0-0",
      "p": [
        1,
        0.57,
        0.19
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-0-1",
      "p": [
        1,
        0.9199999999999999,
        0.19
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-0-2",
      "p": [
        1,
        1.27,
        0.19
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-0-3",
      "p": [
        1,
        1.6199999999999997,
        0.19
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-0-4",
      "p": [
        1,
        1.9699999999999998,
        0.19
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-1",
      "p": [
        0.766044443118978,
        1.32,
        0.6427876096865393
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-1-0",
      "p": [
        0.766044443118978,
        0.57,
        0.8327876096865392
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-1-1",
      "p": [
        0.766044443118978,
        0.9199999999999999,
        0.8327876096865392
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-1-2",
      "p": [
        0.766044443118978,
        1.27,
        0.8327876096865392
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-1-3",
      "p": [
        0.766044443118978,
        1.6199999999999997,
        0.8327876096865392
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-1-4",
      "p": [
        0.766044443118978,
        1.9699999999999998,
        0.8327876096865392
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-2",
      "p": [
        0.17364817766693041,
        1.32,
        0.984807753012208
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-2-0",
      "p": [
        0.17364817766693041,
        0.57,
        1.174807753012208
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-2-1",
      "p": [
        0.17364817766693041,
        0.9199999999999999,
        1.174807753012208
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-2-2",
      "p": [
        0.17364817766693041,
        1.27,
        1.174807753012208
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-2-3",
      "p": [
        0.17364817766693041,
        1.6199999999999997,
        1.174807753012208
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-2-4",
      "p": [
        0.17364817766693041,
        1.9699999999999998,
        1.174807753012208
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-3",
      "p": [
        -0.4999999999999998,
        1.32,
        0.8660254037844387
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-3-0",
      "p": [
        -0.4999999999999998,
        0.57,
        1.0560254037844388
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-3-1",
      "p": [
        -0.4999999999999998,
        0.9199999999999999,
        1.0560254037844388
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-3-2",
      "p": [
        -0.4999999999999998,
        1.27,
        1.0560254037844388
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-3-3",
      "p": [
        -0.4999999999999998,
        1.6199999999999997,
        1.0560254037844388
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-3-4",
      "p": [
        -0.4999999999999998,
        1.9699999999999998,
        1.0560254037844388
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-4",
      "p": [
        -0.9396926207859083,
        1.32,
        0.3420201433256689
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-4-0",
      "p": [
        -0.9396926207859083,
        0.57,
        0.5320201433256688
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-4-1",
      "p": [
        -0.9396926207859083,
        0.9199999999999999,
        0.5320201433256688
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-4-2",
      "p": [
        -0.9396926207859083,
        1.27,
        0.5320201433256688
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-4-3",
      "p": [
        -0.9396926207859083,
        1.6199999999999997,
        0.5320201433256688
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-4-4",
      "p": [
        -0.9396926207859083,
        1.9699999999999998,
        0.5320201433256688
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-5",
      "p": [
        -0.9396926207859084,
        1.32,
        -0.34202014332566866
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-5-0",
      "p": [
        -0.9396926207859084,
        0.57,
        -0.15202014332566866
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-5-1",
      "p": [
        -0.9396926207859084,
        0.9199999999999999,
        -0.15202014332566866
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-5-2",
      "p": [
        -0.9396926207859084,
        1.27,
        -0.15202014332566866
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-5-3",
      "p": [
        -0.9396926207859084,
        1.6199999999999997,
        -0.15202014332566866
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-5-4",
      "p": [
        -0.9396926207859084,
        1.9699999999999998,
        -0.15202014332566866
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-6",
      "p": [
        -0.5000000000000004,
        1.32,
        -0.8660254037844384
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-6-0",
      "p": [
        -0.5000000000000004,
        0.57,
        -0.6760254037844384
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-6-1",
      "p": [
        -0.5000000000000004,
        0.9199999999999999,
        -0.6760254037844384
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-6-2",
      "p": [
        -0.5000000000000004,
        1.27,
        -0.6760254037844384
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-6-3",
      "p": [
        -0.5000000000000004,
        1.6199999999999997,
        -0.6760254037844384
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-6-4",
      "p": [
        -0.5000000000000004,
        1.9699999999999998,
        -0.6760254037844384
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-7",
      "p": [
        0.17364817766692997,
        1.32,
        -0.9848077530122081
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-7-0",
      "p": [
        0.17364817766692997,
        0.57,
        -0.7948077530122082
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-7-1",
      "p": [
        0.17364817766692997,
        0.9199999999999999,
        -0.7948077530122082
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-7-2",
      "p": [
        0.17364817766692997,
        1.27,
        -0.7948077530122082
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-7-3",
      "p": [
        0.17364817766692997,
        1.6199999999999997,
        -0.7948077530122082
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-7-4",
      "p": [
        0.17364817766692997,
        1.9699999999999998,
        -0.7948077530122082
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-living-archival-biosample-column-8",
      "p": [
        0.7660444431189778,
        1.32,
        -0.6427876096865396
      ],
      "s": [
        0.3,
        1.86,
        0.3
      ],
      "c": 9226944
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-8-0",
      "p": [
        0.7660444431189778,
        0.57,
        -0.4527876096865396
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-8-1",
      "p": [
        0.7660444431189778,
        0.9199999999999999,
        -0.4527876096865396
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-8-2",
      "p": [
        0.7660444431189778,
        1.27,
        -0.4527876096865396
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-8-3",
      "p": [
        0.7660444431189778,
        1.6199999999999997,
        -0.4527876096865396
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-bio-data-illuminated-sample-8-4",
      "p": [
        0.7660444431189778,
        1.9699999999999998,
        -0.4527876096865396
      ],
      "s": [
        0.16,
        0.11,
        0.044
      ],
      "c": 14007776
    },
    {
      "t": "cylinder",
      "n": "bio-digital-archive-vault-central-archive-computational-core",
      "p": [
        0,
        1.32,
        0
      ],
      "s": [
        0.78,
        2.07,
        0.78
      ],
      "c": 14007776
    },
    {
      "t": "torus",
      "n": "bio-digital-archive-vault-holographic-genetic-ring",
      "p": [
        0,
        2.34,
        0
      ],
      "s": [
        1.79,
        0.13,
        1.79
      ],
      "c": 3424606,
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-0",
      "from": [
        0.67,
        0.73,
        0
      ],
      "to": [
        0.67,
        2.3,
        0
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-1",
      "from": [
        0.4737615433949869,
        0.73,
        0.47376154339498683
      ],
      "to": [
        0.4737615433949869,
        2.3,
        0.47376154339498683
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-2",
      "from": [
        4.1025667771436334e-17,
        0.73,
        0.67
      ],
      "to": [
        4.1025667771436334e-17,
        2.3,
        0.67
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-3",
      "from": [
        -0.47376154339498683,
        0.73,
        0.4737615433949869
      ],
      "to": [
        -0.47376154339498683,
        2.3,
        0.4737615433949869
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-4",
      "from": [
        -0.67,
        0.73,
        8.205133554287267e-17
      ],
      "to": [
        -0.67,
        2.3,
        8.205133554287267e-17
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-5",
      "from": [
        -0.473761543394987,
        0.73,
        -0.47376154339498683
      ],
      "to": [
        -0.473761543394987,
        2.3,
        -0.47376154339498683
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-6",
      "from": [
        -1.23077003314309e-16,
        0.73,
        -0.67
      ],
      "to": [
        -1.23077003314309e-16,
        2.3,
        -0.67
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "bio-digital-archive-vault-archival-biocircuit-cable-7",
      "from": [
        0.4737615433949868,
        0.73,
        -0.473761543394987
      ],
      "to": [
        0.4737615433949868,
        2.3,
        -0.473761543394987
      ],
      "r": 0.02,
      "c": 3424606
    },
    {
      "t": "box",
      "n": "bio-digital-archive-vault-sealed-research-entry-door",
      "p": [
        0,
        1.04,
        1.26
      ],
      "s": [
        0.83,
        1.68,
        0.09
      ],
      "c": 9226944
    }
  ]
}); }
