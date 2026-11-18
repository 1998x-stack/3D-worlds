# V1.5 — 30 original, market-inspired 3D visual assets

**Source authored; eight semantic geometry refinements:** 30 distinct Three.js recipe modules, 13 existing categories, 565 → 595 catalog entries. **Not yet physically printed, manufacturing-approved or market-sales validated.**

## Research inputs (2026-11-18)

| Channel | Observed signal | Source | Evidence boundary |
| --- | --- | --- | --- |
| Amazon | Seller guidance names custom accessories, laptop and cable organizers as 3D-printing business ideas | https://sell.amazon.com/blog/printing-business-ideas | Editorial marketplace guidance, not measured demand |
| eBay | Active offer pages show desk organizers and workshop tool accessories | https://www.ebay.com/shop/3d-printed-desk-organizer and https://www.ebay.com/shop/3d-printed-tools | Listing presence / price ≠ sales or margin |
| Hacker News | Open source text-to-CAD discussions expose parametric OpenSCAD, STL and slider workflows | https://news.ycombinator.com/item?id=45140921 | Engineering interest, not consumer sales |

Ideas are **new structural compositions**, not reproductions of marketplace photographs, STLs, logos or proprietary mechanical dimensions. Third-party IP, product safety and commercialization require independent review.

## Inventoried assets

| # | Category | Slug | English / Chinese | Source parts | Research | Geometry motifs |
| ---: | --- | --- | --- | ---: | --- | --- |
| 1 | furniture | `adaptive-bookend-clamp-desk` | Adaptive Bookend Clamp Desk / 自适应书挡夹持台 | 38 | amazon | bookends + gauge |
| 2 | furniture | `vertical-controller-valet` | Vertical Controller Valet / 竖置手柄收纳站 | 36 | ebay | cradle + console |
| 3 | furniture | `slide-track-accessory-riser` | Slide Track Accessory Riser / 滑轨桌面配件台 | 36 | amazon | frame + tray |
| 4 | bathroom | `razor-airflow-cantilever` | Razor Airflow Cantilever / 剃须刀通风悬臂架 | 55 | amazon | drain + cradle |
| 5 | bathroom | `squeegee-pivot-dock` | Squeegee Pivot Dock / 刮水器旋转停靠座 | 57 | ebay | hinge + drain |
| 6 | characters | `filament-scout-figurine` | Filament Scout Figurine / 耗材巡检机器人 | 39 | hacker-news | robot + spool |
| 7 | characters | `pollinator-gardener-figurine` | Pollinator Gardener Figurine / 授粉园丁摆件 | 68 | hacker-news | robot + plant |
| 8 | nature | `pollinator-corridor-habitat` | Pollinator Corridor Habitat / 传粉昆虫栖地微景观 | 57 | ebay | hex + plant |
| 9 | nature | `root-window-terrarium` | Root Window Terrarium / 透明根系观察缸 | 69 | hacker-news | root + plant |
| 10 | vehicles | `last-mile-delivery-trike` | Last Mile Delivery Trike / 末端配送三轮车 | 32 | ebay | wheels + crate |
| 11 | vehicles | `warehouse-tug-micro-ev` | Warehouse Tug Micro EV / 仓储牵引微型车 | 33 | hacker-news | wheels + cab |
| 12 | electronics | `macro-pad-command-deck` | Macro Pad Command Deck / 宏键指令控制台 | 45 | hacker-news | console + grid |
| 13 | electronics | `vented-router-suspension-bracket` | Vented Router Suspension Bracket / 通风路由器悬挂架 | 59 | amazon | frame + drain |
| 14 | electronics | `electronics-repair-sorting-tray` | Electronics Repair Sorting Tray / 电子维修分区托盘 | 47 | ebay | tray + grid |
| 15 | decor | `kinetic-moire-desk-orbit` | Kinetic Moire Desk Orbit / 莫尔纹桌面星环 | 47 | hacker-news | ring + gauge |
| 16 | decor | `celestial-shadow-lattice` | Celestial Shadow Lattice / 星象投影格栅摆件 | 45 | amazon | ring + panel |
| 17 | decor | `stacked-ripple-vase-display` | Stacked Ripple Vase Display / 层叠涟漪花器 | 54 | ebay | vase + plant |
| 18 | kitchen | `sponge-airlift-drain-bridge` | Sponge Airlift Drain Bridge / 悬浮海绵沥水桥 | 46 | amazon | drain + tray |
| 19 | kitchen | `tea-sachet-flip-library` | Tea Sachet Flip Library / 翻页茶包收纳柜 | 44 | ebay | tray + panel |
| 20 | architecture | `kinetic-privacy-facade` | Kinetic Privacy Facade / 动态隐私立面 | 71 | hacker-news | panel + frame |
| 21 | architecture | `cross-laminate-joint-study` | Cross Laminate Joint Study / 交错层板榫接研究 | 32 | hacker-news | frame + joinery |
| 22 | urban | `micro-mobility-parking-node` | Micro Mobility Parking Node / 微出行停靠节点 | 26 | ebay | roof + wheels |
| 23 | urban | `urban-bioswale-measurement-bay` | Urban Bioswale Measurement Bay / 城市雨水花园观测单元 | 55 | hacker-news | plant + gauge |
| 24 | tools | `fastener-calibration-rack` | Fastener Calibration Rack / 紧固件规格展示架 | 48 | ebay | hex + gauge |
| 25 | tools | `clamp-jaw-fixture-library` | Clamp Jaw Fixture Library / 可换钳口夹具库 | 38 | hacker-news | cradle + tool |
| 26 | tools | `drill-depth-reference-gauge` | Drill Depth Reference Gauge / 钻孔深度基准尺 | 46 | amazon | gauge + tool |
| 27 | sports | `pickleball-paddle-care-tree` | Pickleball Paddle Care Tree / 匹克球拍保养挂架 | 36 | ebay | paddle + cradle |
| 28 | sports | `cycle-chain-service-valet` | Cycle Chain Service Valet / 自行车链条保养台 | 54 | hacker-news | chain + tool |
| 29 | scifi | `orbital-cartography-console` | Orbital Cartography Console / 轨道制图导航台 | 45 | hacker-news | ring + console |
| 30 | scifi | `bio-lumen-explorer-pod` | Bio Lumen Explorer Pod / 生物光探测舱 | 49 | hacker-news | pod + ring |

## Source and validation contract

- Model sources live under `src/models/`, exporting unique `createX()` groups through the existing `recipe_engine.js`. Geometries are named, deterministic, +Y-up, dimensioned in meters and normalized to ground contact by that engine.
- Collection data is in `catalog/collections/v15.json`, with canonical records in `catalog/models.json`. Static projection, database, preview WebP/AVIF, raw GLB and Meshopt LODs are **derived outputs** — none are claimed to be committed as part of this source batch.
- Required gates: `python3 scripts/catalog.py validate`, `python3 -m unittest discover -s tests -v`, `node scripts/validate_models.mjs`, `npm run build`, `npm run generate:assets`, `npm run verify:assets`, `npm run test:gallery`. Do not claim a gate passed until its output is inspected.
- The scenes are not mm/Z-up parametric CAD masters, watertight mesh audits or manufacturing files. Separate fit coupons, measured tolerances, minimum walls, thermal/UV/water/electrical safety and real slicer+print reviews are needed for physical products.
- For release QA follow `.codex/skills/threejs-model-builder/SKILL.md` and its synchronized `.claude/` and `.pi/` mirrors; consult `references/WORKFLOWS.md`, `MODEL-GEOMETRY.md` and `CATALOG-PROVENANCE.md`.
