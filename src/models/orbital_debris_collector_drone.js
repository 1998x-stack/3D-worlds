import { buildRecipe } from './recipe_engine.js';
/** Original editable V1.2 procedural model: Orbital Debris Collector Drone / 轨道碎片清理无人机. */
export const assetMeta = {
  "id": "scifi.orbital-debris-collector-drone.001",
  "slug": "orbital-debris-collector-drone",
  "title": "Orbital Debris Collector Drone",
  "title_zh": "轨道碎片清理无人机",
  "summary": "Nonweapon orbital cleanup drone with capture net frame, grappling arms and sensor array",
  "category": "scifi",
  "tags": [
    "orbital",
    "debris",
    "collector",
    "drone",
    "scifi",
    "stylized",
    "low-poly"
  ],
  "dimensions_m": [
    3.53,
    2.66,
    3.3
  ],
  "generator": "createOrbitalDebrisCollectorDrone",
  "source_path": "src/models/orbital_debris_collector_drone.js",
  "kind": "procedural",
  "license": "MIT",
  "author": "3D Worlds",
  "style": "Stylized",
  "collection": "v1.2",
  "preview_path": "public/thumbs/orbital-debris-collector-drone.webp",
  "accent": "#34415e"
};
export function createOrbitalDebrisCollectorDrone() { return buildRecipe({
  "title": "Orbital Debris Collector Drone",
  "dimensions": [
    3.53,
    2.66,
    3.3
  ],
  "parts": [
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-orbital-cleanup-drone-central-hull",
      "p": [
        0,
        1.22,
        0
      ],
      "s": [
        1.53,
        1.04,
        1.45
      ],
      "c": 7443382
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-debris-gripper-salvage-boom--1--0.81",
      "from": [
        -0.66,
        1.24,
        -0.4617
      ],
      "to": [
        -1.43,
        1.49,
        -0.81
      ],
      "r": 0.062,
      "c": 9226944
    },
    {
      "t": "sphere",
      "n": "orbital-debris-collector-drone-capture-gripper-jaw--1--0.81",
      "p": [
        -1.43,
        1.49,
        -0.81
      ],
      "s": [
        0.2,
        0.21,
        0.19
      ],
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-debris-gripper-salvage-boom--1-0.81",
      "from": [
        -0.66,
        1.24,
        0.4617
      ],
      "to": [
        -1.43,
        1.49,
        0.81
      ],
      "r": 0.062,
      "c": 9226944
    },
    {
      "t": "sphere",
      "n": "orbital-debris-collector-drone-capture-gripper-jaw--1-0.81",
      "p": [
        -1.43,
        1.49,
        0.81
      ],
      "s": [
        0.2,
        0.21,
        0.19
      ],
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-debris-gripper-salvage-boom-1--0.81",
      "from": [
        0.66,
        1.24,
        -0.4617
      ],
      "to": [
        1.43,
        1.49,
        -0.81
      ],
      "r": 0.062,
      "c": 9226944
    },
    {
      "t": "sphere",
      "n": "orbital-debris-collector-drone-capture-gripper-jaw-1--0.81",
      "p": [
        1.43,
        1.49,
        -0.81
      ],
      "s": [
        0.2,
        0.21,
        0.19
      ],
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-debris-gripper-salvage-boom-1-0.81",
      "from": [
        0.66,
        1.24,
        0.4617
      ],
      "to": [
        1.43,
        1.49,
        0.81
      ],
      "r": 0.062,
      "c": 9226944
    },
    {
      "t": "sphere",
      "n": "orbital-debris-collector-drone-capture-gripper-jaw-1-0.81",
      "p": [
        1.43,
        1.49,
        0.81
      ],
      "s": [
        0.2,
        0.21,
        0.19
      ],
      "c": 3424606
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-0",
      "from": [
        1.16,
        1.12,
        0
      ],
      "to": [
        1.0555999999999999,
        0.48,
        0
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-1",
      "from": [
        1.0451238867668062,
        1.12,
        0.5033051373763674
      ],
      "to": [
        0.9510627369577938,
        0.48,
        0.45800767501249434
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-2",
      "from": [
        0.723248170156131,
        1.12,
        0.9069245196629145
      ],
      "to": [
        0.6581558348420792,
        0.48,
        0.8253013128932523
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-3",
      "from": [
        0.25812428338932475,
        1.12,
        1.1309163781309153
      ],
      "to": [
        0.23489309788428553,
        0.48,
        1.029133904099133
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-4",
      "from": [
        -0.25812428338932464,
        1.12,
        1.1309163781309153
      ],
      "to": [
        -0.23489309788428542,
        0.48,
        1.029133904099133
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-5",
      "from": [
        -0.7232481701561307,
        1.12,
        0.9069245196629147
      ],
      "to": [
        -0.658155834842079,
        0.48,
        0.8253013128932524
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-6",
      "from": [
        -1.045123886766806,
        1.12,
        0.5033051373763675
      ],
      "to": [
        -0.9510627369577935,
        0.48,
        0.45800767501249445
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-7",
      "from": [
        -1.16,
        1.12,
        1.4205902870109295e-16
      ],
      "to": [
        -1.0555999999999999,
        0.48,
        1.2927371611799458e-16
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-8",
      "from": [
        -1.0451238867668062,
        1.12,
        -0.5033051373763673
      ],
      "to": [
        -0.9510627369577938,
        0.48,
        -0.45800767501249423
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-9",
      "from": [
        -0.7232481701561311,
        1.12,
        -0.9069245196629144
      ],
      "to": [
        -0.6581558348420793,
        0.48,
        -0.8253013128932521
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-10",
      "from": [
        -0.2581242833893249,
        1.12,
        -1.1309163781309153
      ],
      "to": [
        -0.23489309788428567,
        0.48,
        -1.029133904099133
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-11",
      "from": [
        0.2581242833893235,
        1.12,
        -1.1309163781309155
      ],
      "to": [
        0.23489309788428436,
        0.48,
        -1.0291339040991332
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-12",
      "from": [
        0.7232481701561306,
        1.12,
        -0.9069245196629147
      ],
      "to": [
        0.6581558348420788,
        0.48,
        -0.8253013128932524
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "rod",
      "n": "orbital-debris-collector-drone-nonweapon-collector-net-rail-13",
      "from": [
        1.0451238867668065,
        1.12,
        -0.5033051373763667
      ],
      "to": [
        0.9510627369577939,
        0.48,
        -0.45800767501249373
      ],
      "r": 0.022,
      "c": 14007776
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-0",
      "p": [
        0.91,
        1.82,
        0
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-1",
      "p": [
        0.5673757196914476,
        1.82,
        0.7114666490459072
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-2",
      "p": [
        -0.20249404990024605,
        1.82,
        0.8871844000854595
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-3",
      "p": [
        -0.8198816697912014,
        1.82,
        0.394834202596978
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-4",
      "p": [
        -0.8198816697912015,
        1.82,
        -0.3948342025969778
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-5",
      "p": [
        -0.20249404990024628,
        1.82,
        -0.8871844000854595
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "box",
      "n": "orbital-debris-collector-drone-autonomous-proximity-sensor-6",
      "p": [
        0.5673757196914474,
        1.82,
        -0.7114666490459073
      ],
      "s": [
        0.2,
        0.16,
        0.24
      ],
      "c": 3424606
    },
    {
      "t": "cylinder",
      "n": "orbital-debris-collector-drone-orbital-reaction-control-wheel",
      "p": [
        0,
        1.99,
        0
      ],
      "s": [
        0.56,
        0.22,
        0.56
      ],
      "c": 14007776
    }
  ]
}); }
