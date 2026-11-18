import { buildRecipe } from './recipe_engine.js';
/** Original v1.5: Cycle Chain Service Valet; stylized visual prototype only. */
export const assetMeta = {
  "id": "sports.cycle-chain-service-valet.001",
  "slug": "cycle-chain-service-valet",
  "title": "Cycle Chain Service Valet",
  "title_zh": "自行车链条保养台",
  "summary": "Original cycle chain service valet study with chain and tool assemblies and individually named functional details",
  "category": "sports",
  "tags": [
    "cycle",
    "chain",
    "service",
    "valet",
    "sports",
    "original",
    "maker",
    "v15"
  ],
  "dimensions_m": [
    0.28,
    0.19,
    0.19
  ],
  "generator": "createCycleChainServiceValet",
  "source_path": "src/models/cycle_chain_service_valet.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Market-Inspired Parametric",
  "collection": "v1.5",
  "preview_path": "public/thumbs/cycle-chain-service-valet.webp",
  "accent": "#ebbc70",
  "provenance_note": "Original procedural visual design; hacker-news is a product-problem research signal, not copied geometry or evidence of sales. Manufacturing not verified."
};
export function createCycleChainServiceValet() { return buildRecipe({
  "title": "Cycle Chain Service Valet",
  "dimensions": [
    0.28,
    0.19,
    0.19
  ],
  "parts": [
    {
      "t": "rounded-box",
      "n": "foundation",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        2,
        0.18,
        1.54
      ],
      "c": 7576493,
      "finish": "matte"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86--0.66",
      "p": [
        -0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot--0.86-0.66",
      "p": [
        -0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86--0.66",
      "p": [
        0.86,
        0.045,
        -0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "non-slip-foot-0.86-0.66",
      "p": [
        0.86,
        0.045,
        0.66
      ],
      "s": [
        0.18,
        0.08,
        0.14
      ],
      "c": 2437178,
      "finish": "rubber"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-0",
      "p": [
        -0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-1",
      "p": [
        -0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-2",
      "p": [
        -0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-3",
      "p": [
        -0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-4",
      "p": [
        0.12,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-5",
      "p": [
        0.36,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-6",
      "p": [
        0.6,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "foundation-rivet-7",
      "p": [
        0.84,
        0.22,
        0.69
      ],
      "s": [
        0.052,
        0.03,
        0.052
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "front-nameplate",
      "p": [
        0,
        0.25,
        0.76
      ],
      "s": [
        0.66,
        0.07,
        0.025
      ],
      "c": 15449200,
      "finish": "anodized"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-0",
      "p": [
        0.75,
        0.99,
        0
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-1",
      "p": [
        0.719619730210873,
        0.99,
        0.10987569716815758
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-2",
      "p": [
        0.630940149623386,
        0.99,
        0.21084991880768306
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-3",
      "p": [
        0.4911455504589638,
        0.99,
        0.29474233399816074
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-4",
      "p": [
        0.3115612597514148,
        0.99,
        0.35475647818826217
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-5",
      "p": [
        0.10673612870496384,
        0.99,
        0.38603036233356375
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-6",
      "p": [
        -0.10673612870496375,
        0.99,
        0.3860303623335638
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-7",
      "p": [
        -0.31156125975141474,
        0.99,
        0.3547564781882622
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-8",
      "p": [
        -0.49114555045896374,
        0.99,
        0.29474233399816074
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-9",
      "p": [
        -0.6309401496233858,
        0.99,
        0.21084991880768314
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-10",
      "p": [
        -0.719619730210873,
        0.99,
        0.10987569716815758
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-11",
      "p": [
        -0.75,
        0.99,
        2.2095601700827122e-16
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-12",
      "p": [
        -0.7196197302108731,
        0.99,
        -0.10987569716815747
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-13",
      "p": [
        -0.630940149623386,
        0.99,
        -0.21084991880768306
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-14",
      "p": [
        -0.4911455504589639,
        0.99,
        -0.2947423339981607
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-15",
      "p": [
        -0.31156125975141535,
        0.99,
        -0.354756478188262
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-16",
      "p": [
        -0.10673612870496392,
        0.99,
        -0.38603036233356375
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-17",
      "p": [
        0.10673612870496366,
        0.99,
        -0.3860303623335638
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-18",
      "p": [
        0.3115612597514145,
        0.99,
        -0.3547564781882622
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-19",
      "p": [
        0.4911455504589634,
        0.99,
        -0.2947423339981609
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-20",
      "p": [
        0.630940149623386,
        0.99,
        -0.210849918807683
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "chain-0-chain-link-21",
      "p": [
        0.719619730210873,
        0.99,
        -0.10987569716815762
      ],
      "s": [
        0.125,
        0.075,
        0.12
      ],
      "c": 2569280,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "chain-0-sprocket--1",
      "p": [
        -0.48,
        0.95,
        0
      ],
      "s": [
        0.55,
        0.16,
        0.55
      ],
      "c": 15449200,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "cylinder",
      "n": "chain-0-sprocket-1",
      "p": [
        0.48,
        0.95,
        0
      ],
      "s": [
        0.55,
        0.16,
        0.55
      ],
      "c": 15449200,
      "finish": "metal",
      "rot": [
        1.5707963267948966,
        0,
        0
      ]
    },
    {
      "t": "rod",
      "n": "tool-1-guide-0",
      "from": [
        -0.68,
        0.38,
        -0.4
      ],
      "to": [
        -0.68,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-0",
      "p": [
        -0.68,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15449200,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-1",
      "from": [
        -0.49000000000000005,
        0.38,
        -0.4
      ],
      "to": [
        -0.49000000000000005,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-1",
      "p": [
        -0.49000000000000005,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 7576493,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-2",
      "from": [
        -0.30000000000000004,
        0.38,
        -0.4
      ],
      "to": [
        -0.30000000000000004,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-2",
      "p": [
        -0.30000000000000004,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15449200,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-3",
      "from": [
        -0.10999999999999999,
        0.38,
        -0.4
      ],
      "to": [
        -0.10999999999999999,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-3",
      "p": [
        -0.10999999999999999,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 7576493,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-4",
      "from": [
        0.07999999999999996,
        0.38,
        -0.4
      ],
      "to": [
        0.07999999999999996,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-4",
      "p": [
        0.07999999999999996,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15449200,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-5",
      "from": [
        0.2699999999999999,
        0.38,
        -0.4
      ],
      "to": [
        0.2699999999999999,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-5",
      "p": [
        0.2699999999999999,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 7576493,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-6",
      "from": [
        0.4600000000000001,
        0.38,
        -0.4
      ],
      "to": [
        0.4600000000000001,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-6",
      "p": [
        0.4600000000000001,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 15449200,
      "finish": "matte"
    },
    {
      "t": "rod",
      "n": "tool-1-guide-7",
      "from": [
        0.65,
        0.38,
        -0.4
      ],
      "to": [
        0.65,
        1.19,
        0.28
      ],
      "r": 0.025,
      "c": 11847118,
      "finish": "metal"
    },
    {
      "t": "rounded-box",
      "n": "tool-1-jaw-7",
      "p": [
        0.65,
        0.61,
        0.29
      ],
      "s": [
        0.12,
        0.16,
        0.32
      ],
      "c": 7576493,
      "finish": "matte"
    }
  ]
}); }
