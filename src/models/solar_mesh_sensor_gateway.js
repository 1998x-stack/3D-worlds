import { buildRecipe } from './recipe_engine.js';
/** Original V1.4 maker-market inspired design: Solar Mesh Sensor Gateway / 太阳能网状传感网关. Visual model only; not print-certified or a functional product. */
export const assetMeta = {
  "id": "electronics.solar-mesh-sensor-gateway.001",
  "slug": "solar-mesh-sensor-gateway",
  "title": "Solar Mesh Sensor Gateway",
  "title_zh": "太阳能网状传感网关",
  "summary": "Fictional nonfunctional field IoT node with sloped solar array, weather shield and mesh radio fins",
  "category": "electronics",
  "tags": [
    "solar",
    "mesh",
    "sensor",
    "gateway",
    "electronics",
    "original",
    "maker",
    "low-poly"
  ],
  "dimensions_m": [
    0.25,
    0.28,
    0.22
  ],
  "generator": "createSolarMeshSensorGateway",
  "source_path": "src/models/solar_mesh_sensor_gateway.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Creative Parametric",
  "collection": "v1.4",
  "preview_path": "public/thumbs/solar-mesh-sensor-gateway.webp",
  "accent": "#9ac5d1",
  "geometry_revision": "1.4.1",
  "refinement": "geometry+materials"
};
export function createSolarMeshSensorGateway() { return buildRecipe({
  "title": "Solar Mesh Sensor Gateway",
  "dimensions": [
    0.25,
    0.28,
    0.22
  ],
  "parts": [
    {
      "t": "cylinder",
      "n": "pole-base",
      "p": [
        0,
        0.11,
        0
      ],
      "s": [
        1.15,
        0.22,
        1.1
      ],
      "c": 3229017
    },
    {
      "t": "cylinder",
      "n": "pole",
      "p": [
        0,
        1.06,
        0
      ],
      "s": [
        0.18,
        1.9,
        0.18
      ],
      "c": 7177108
    },
    {
      "t": "rounded-box",
      "n": "weather-box",
      "p": [
        0,
        1.25,
        0
      ],
      "s": [
        0.9,
        0.59,
        0.62
      ],
      "c": 15853002
    },
    {
      "t": "box",
      "n": "solar-panel",
      "p": [
        0,
        2.22,
        -0.12
      ],
      "s": [
        1.84,
        0.06,
        1.21
      ],
      "c": 2570315,
      "rot": [
        -0.28,
        0,
        0
      ],
      "finish": "glass"
    },
    {
      "t": "box",
      "n": "pv-cell-0",
      "p": [
        -0.62,
        2.25,
        -0.11
      ],
      "s": [
        0.18,
        0.02,
        1.03
      ],
      "c": 10143185,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-cell-1",
      "p": [
        -0.372,
        2.25,
        -0.11
      ],
      "s": [
        0.18,
        0.02,
        1.03
      ],
      "c": 10143185,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-cell-2",
      "p": [
        -0.124,
        2.25,
        -0.11
      ],
      "s": [
        0.18,
        0.02,
        1.03
      ],
      "c": 10143185,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-cell-3",
      "p": [
        0.124,
        2.25,
        -0.11
      ],
      "s": [
        0.18,
        0.02,
        1.03
      ],
      "c": 10143185,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-cell-4",
      "p": [
        0.372,
        2.25,
        -0.11
      ],
      "s": [
        0.18,
        0.02,
        1.03
      ],
      "c": 10143185,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-cell-5",
      "p": [
        0.62,
        2.25,
        -0.11
      ],
      "s": [
        0.18,
        0.02,
        1.03
      ],
      "c": 10143185,
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "weather-louvre-0",
      "p": [
        0,
        0.99,
        0.34
      ],
      "s": [
        0.66,
        0.035,
        0.05
      ],
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "weather-louvre-1",
      "p": [
        0,
        1.09,
        0.34
      ],
      "s": [
        0.66,
        0.035,
        0.05
      ],
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "weather-louvre-2",
      "p": [
        0,
        1.19,
        0.34
      ],
      "s": [
        0.66,
        0.035,
        0.05
      ],
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "weather-louvre-3",
      "p": [
        0,
        1.29,
        0.34
      ],
      "s": [
        0.66,
        0.035,
        0.05
      ],
      "c": 7915949,
      "finish": "metal"
    },
    {
      "t": "rod",
      "n": "mesh-aerial-0",
      "from": [
        0.31,
        1.54,
        -0.24
      ],
      "to": [
        0.57,
        2.1,
        -0.26
      ],
      "r": 0.028,
      "c": 15776881
    },
    {
      "t": "rod",
      "n": "mesh-aerial-1",
      "from": [
        0.31,
        1.54,
        -0.24
      ],
      "to": [
        0.6699999999999999,
        2.25,
        -0.26
      ],
      "r": 0.028,
      "c": 15776881
    },
    {
      "t": "rod",
      "n": "mesh-aerial-2",
      "from": [
        0.31,
        1.54,
        -0.24
      ],
      "to": [
        0.77,
        2.4,
        -0.26
      ],
      "r": 0.028,
      "c": 15776881
    },
    {
      "t": "sphere",
      "n": "status-light",
      "p": [
        0,
        1.38,
        0.36
      ],
      "s": [
        0.14,
        0.11,
        0.1
      ],
      "c": 14648424,
      "finish": "glow"
    },
    {
      "t": "box",
      "n": "pv-busbar-0",
      "p": [
        -0.72,
        2.262,
        -0.1
      ],
      "s": [
        0.022,
        0.018,
        1.1
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-busbar-1",
      "p": [
        -0.36,
        2.262,
        -0.1
      ],
      "s": [
        0.022,
        0.018,
        1.1
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-busbar-2",
      "p": [
        0,
        2.262,
        -0.1
      ],
      "s": [
        0.022,
        0.018,
        1.1
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-busbar-3",
      "p": [
        0.3600000000000001,
        2.262,
        -0.1
      ],
      "s": [
        0.022,
        0.018,
        1.1
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "pv-busbar-4",
      "p": [
        0.72,
        2.262,
        -0.1
      ],
      "s": [
        0.022,
        0.018,
        1.1
      ],
      "c": 11648457,
      "finish": "metal",
      "rot": [
        -0.28,
        0,
        0
      ]
    },
    {
      "t": "box",
      "n": "panel-edge-clip-0",
      "p": [
        -0.83,
        2.24,
        -0.44
      ],
      "s": [
        0.12,
        0.12,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-0",
      "p": [
        -0.34,
        0.24,
        -0.33
      ],
      "s": [
        0.12,
        0.14,
        0.12
      ],
      "c": 3162970,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "panel-edge-clip-1",
      "p": [
        0.83,
        2.24,
        -0.44
      ],
      "s": [
        0.12,
        0.12,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-1",
      "p": [
        0.34,
        0.24,
        -0.33
      ],
      "s": [
        0.12,
        0.14,
        0.12
      ],
      "c": 3162970,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "panel-edge-clip-2",
      "p": [
        -0.83,
        2.24,
        0.44
      ],
      "s": [
        0.12,
        0.12,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-2",
      "p": [
        -0.34,
        0.24,
        0.33
      ],
      "s": [
        0.12,
        0.14,
        0.12
      ],
      "c": 3162970,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "panel-edge-clip-3",
      "p": [
        0.83,
        2.24,
        0.44
      ],
      "s": [
        0.12,
        0.12,
        0.11
      ],
      "c": 14989405,
      "finish": "metal"
    },
    {
      "t": "cylinder",
      "n": "anchor-bolt-3",
      "p": [
        0.34,
        0.24,
        0.33
      ],
      "s": [
        0.12,
        0.14,
        0.12
      ],
      "c": 3162970,
      "finish": "metal"
    },
    {
      "t": "box",
      "n": "fins-vent-0",
      "p": [
        -0.32,
        1.47,
        0.34
      ],
      "s": [
        0.075,
        0.018,
        0.026
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "fins-vent-1",
      "p": [
        -0.16,
        1.47,
        0.34
      ],
      "s": [
        0.075,
        0.018,
        0.026
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "fins-vent-2",
      "p": [
        0,
        1.47,
        0.34
      ],
      "s": [
        0.075,
        0.018,
        0.026
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "fins-vent-3",
      "p": [
        0.15999999999999998,
        1.47,
        0.34
      ],
      "s": [
        0.075,
        0.018,
        0.026
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "box",
      "n": "fins-vent-4",
      "p": [
        0.32,
        1.47,
        0.34
      ],
      "s": [
        0.075,
        0.018,
        0.026
      ],
      "c": 2570573,
      "finish": "rubber"
    },
    {
      "t": "rounded-box",
      "n": "gateway-screen",
      "p": [
        0,
        1.32,
        0.35
      ],
      "s": [
        0.36,
        0.17,
        0.03
      ],
      "c": 9487573,
      "finish": "glow"
    },
    {
      "t": "sphere",
      "n": "antenna-node-led",
      "p": [
        0.67,
        2.41,
        -0.26
      ],
      "s": [
        0.13,
        0.13,
        0.13
      ],
      "c": 7981487,
      "finish": "glow"
    }
  ],
  "geometry_revision": "1.4.1"
}); }
