# V1.5 · 30 Original Market-Signal Models (2026-11-18)

## Scope and evidence

**30 new catalog records** (28 unique market-inspired scenes + 2 unique scene previews backed by separate original mm OpenSCAD CAD prototypes), covering **all 14 categories**. Prior V1.4 snapshot: 565; additive v1.5 target: 595. Source factories and recipes are original MIT-licensed code in this repository; no third-party listing geometry or brand art is included. Every visual scene is separate from manufacturing CAD. No real physical fit, thermal, mechanical, slicer or sales tests are claimed by this authored-source release.

### Public research signals and their limitations

- **Amazon** (seller-authored category guidance, not individual listing sales): https://sell.amazon.com/blog/printing-business-ideas — personalized tech accessories, home organization, hobbies and tabletop components.
- **eBay** publicly indexed listings: https://www.ebay.com/sch/i.html?_nkw=3d+organizer&_sop=12 and https://www.ebay.com/itm/376641465994 — modular storage, display holders, game controller organization. These show offers only; no valid sales-volume inference.
- **Hacker News** (technical user discussion): https://news.ycombinator.com/item?id=44419091 (Gridfinity and custom-size constraints), https://news.ycombinator.com/item?id=41543386 (OpenSCAD versus other parametric CAD systems), https://news.ycombinator.com/item?id=40093018 (modular tool-less PC enclosure and heat/fit caveats), https://news.ycombinator.com/item?id=43888117 (design for FDM manufacturing). Discussion is design insight, not a reuse license.
- **Skill authoring specification:** https://agentskills.io/specification and https://github.com/anthropics/skills/tree/main/skills/skill-creator — progressive disclosure, executable bundled scripts, vendor-neutral metadata.

Research observed **2026-11-18**. Signals are qualitative and non-exhaustive; Amazon direct product pages may block access. No fabricated star counts, sold counts, price histories, or endorsements. Novelty and rights are reviewed at the design concept level, not a legal patent opinion.

## Per-asset design ledger

| Category | Slug / English title | Market cue | Defining geometry | Named scene parts | CAD source |
|---|---|---|---|---:|---|
| furniture | `modular-rail-desk-shelf` / Modular Rail Desk Shelf | amazon | 双层轨道、滑动抽盒、背面理线 | 21 | visual only |
| furniture | `pivot-book-display-stand` / Pivot Book Display Stand | ebay | 倾斜书托、书页挡边、双侧轴套 | 18 | visual only |
| bathroom | `vented-razor-drying-tower` / Vented Razor Drying Tower | amazon | 纵向通风翼、滴水盆、独立刀柄槽 | 24 | visual only |
| bathroom | `stackable-cotton-pad-caddy` / Stackable Cotton Pad Caddy | ebay | 上下层开口、纸片导向柱、底部抽取槽 | 19 | visual only |
| characters | `miniature-cartographer-bot` / Miniature Cartographer Bot | hacker-news | 地图卷筒、测距头、膝轴、背部工具背包 | 28 | visual only |
| characters | `forest-seed-courier-figurine` / Forest Seed Courier Figurine | ebay | 种子背包、披风纹路、叶帽、木质路标 | 30 | visual only |
| nature | `moss-terrace-rock-garden` / Moss Terrace Rock Garden | hacker-news | 三级地形、页岩断层、苔藓簇和蘑菇 | 35 | visual only |
| nature | `tidal-barnacle-study-tile` / Tidal Barnacle Study Tile | hacker-news | 岩池、藤壶孔缘、海藻脊纹、海星 | 33 | visual only |
| vehicles | `solar-campus-delivery-trike` / Solar Campus Delivery Trike | amazon | 前独轮、后双轮、货箱格栅、车顶太阳能片 | 26 | visual only |
| vehicles | `modular-rail-maintenance-cart` / Modular Rail Maintenance Cart | hacker-news | 轨距车轮、检修平台、线卷和警示条 | 28 | visual only |
| electronics | `field-sensor-weather-node` / Field Sensor Weather Node | hacker-news | 遮光百叶、传感帽、状态窗和安装脚 | 29 | visual only |
| electronics | `slotted-mini-pc-airflow-case` / Slotted Mini PC Airflow Case | hacker-news | 散热叶片、脚垫、端口面板、拆装螺钉 | 40 | visual only |
| electronics | `cassette-wave-audio-dock` / Cassette Wave Audio Dock | ebay | 音频旋钮、磁带窗、栅格扬声口和托架 | 30 | visual only |
| decor | `spiral-shadow-planter-plinth` / Spiral Shadow Planter Plinth | ebay | 环形灯影格栅、悬浮盆托、螺旋叶瓣 | 37 | visual only |
| decor | `constellation-wall-key-rack` / Constellation Wall Key Rack | amazon | 星图点线、挂钩列、悬挂定位孔 | 25 | visual only |
| kitchen | `pour-over-brewing-display` / Pour-Over Brewing Display | amazon | 滤杯、环形支架、玻璃杯、滴液刻度 | 26 | visual only |
| kitchen | `countertop-spice-index-carousel` / Countertop Spice Index Carousel | ebay | 双环瓶位、索引刻度、中央把手 | 39 | visual only |
| architecture | `modular-green-roof-corner` / Modular Green Roof Corner | hacker-news | 梁柱、集雨槽、绿色屋顶、排水口 | 40 | visual only |
| architecture | `parametric-stair-landing-bay` / Parametric Stair Landing Bay | hacker-news | 踏步阵列、扶手、踢面和平台对接梁 | 30 | visual only |
| urban | `bike-repair-street-station` / Bike Repair Street Station | amazon | 轮托、气泵、工具挂点、维修指示牌 | 27 | visual only |
| urban | `solar-wayfinding-bollard` / Solar Wayfinding Bollard | hacker-news | 导向箭头、太阳能冠盖、反光圈和螺栓脚座 | 26 | visual only |
| tools | `precision-bit-calibration-tray` / Precision Bit Calibration Tray | amazon | 多规格夹槽、编号区、挡边、抓取凹位 | 39 | visual only |
| tools | `folding-maker-clamp-jig` / Folding Maker Clamp Jig | hacker-news | 双夹爪、丝杆螺纹、锁止轴、导轨底板 | 33 | visual only |
| tools | `modular-soldering-helping-hands` / Modular Soldering Helping Hands | hacker-news | 四支万向臂、夹持爪、放大镜圈与托盘 | 29 | visual only |
| sports | `climbing-grip-training-tile` / Climbing Grip Training Tile | ebay | 手点、脚点、路线色标、面板固定螺帽 | 36 | visual only |
| sports | `portable-disc-golf-basket-mini` / Portable Disc Golf Basket Mini | ebay | 立柱、篮圈、链条挂点、编号牌 | 41 | visual only |
| scifi | `lunar-seed-vault-pod` / Lunar Seed Vault Pod | hacker-news | 圆顶仓体、种子匣、月岩底座、舱门铰链 | 28 | visual only |
| scifi | `deep-space-observation-relay` / Deep Space Observation Relay | hacker-news | 抛物面天线、光伏翼、姿态喷口和桁架 | 45 | visual only |
| print-commerce | `micro-screw-bin-lattice` / Micro Screw Bin Lattice | ebay | 2×4分格、独立标签、壁厚参数、可测量放置面 | 29 | `printables/v15/micro-screw-bin-lattice.scad` |
| print-commerce | `paint-pipette-drying-rack` / Paint Pipette Drying Rack | ebay | 3×7孔位、前侧标识、无负重认证、清洗边界 | 57 | `printables/v15/paint-pipette-drying-rack.scad` |


## Precision/quality scope

- All designs have distinct stable IDs, explicit author/license, bilingual names, declared **meter** envelopes, scene-level named subassemblies and multiple geometric-detail systems. Counted parts are source-declared, not a measured rendering claim.
- `src/models/market_v15_builder.js` uses existing `buildRecipe`; authoring parameters are normalized and then rescaled to the metadata envelope. These are **visual/3D asset models**, not independently dimensioned manufacture CAD. A dark-colored recess is often a visual proxy, not a Boolean hole.
- The two `printables/v15/*.scad` candidates are independent mm-dimensioned Z-up CSG bodies. They require actual compile, topology/section measurements, human slicing inspection, fit coupons, real dimensions and product-safety review. Never claim approval or sell-readiness from source alone.
- Preview WebP/AVIF and GLB/LOD output must come from real Playwright/WebGL and glTF validation in CI; they are generated outputs, not pre-rendered assertions in this PR.
- Verify with `python3 scripts/verify_skill_packages_v15.py`, `python3 scripts/catalog.py validate`, `python3 -m unittest tests/test_v15_batch.py`, `node scripts/validate_models.mjs`; then the existing Pages CI generating/previews/test suite. For CAD: run `openscad -o /tmp/<slug>.stl printables/v15/<slug>.scad` on the correct source and audit independently.

## Commercial differentiation and risk framing

The selling points are hypothesis directions: configurable fit, readable indexing, approachable assembly, stylistic originality, organized workflow and source-editable geometry. Actual market value requires target-customer interviews, competing-product comparison, market permission checks and measured physical samples. The Blender/Three.js scene is not necessarily the printable geometry. Electrical/food-contact/structural products need appropriate safety/legal review; no unverified functionality is promised.

## Actual V1.5 CAD geometry baseline (2026-11-18)

The two candidate OpenSCAD designs were independently compiled locally using **OpenSCAD 2021.01** and audited with **trimesh 4.11.1**. Following correction of label flange envelope overshoot and a tangent rear-scoop surface, the final CAD sources now declare and compile the exact outer envelopes:

| Original CAD | X × Y × Z mm | Mesh faces | Components | Watertight | Mesh volume mm³ |
| --- | --- | ---: | ---: | --- | ---: |
| `micro-screw-bin-lattice.scad` | 148 × 92 × 28 | 972 | 1 | yes | ≈101,172 |
| `paint-pipette-drying-rack.scad` | 132 × 86 × 20 | 4,348 | 1 | yes | ≈197,781 |

A further reproducible CI gate `python3 scripts/audit_v15_cad.py --output .cache/print/v15-cad-geometry.json` compiles **actual source files**, rejects compiler warnings and verifies envelope, manifold status, connectivity, winding and positive volume. The CAD master is in mm XYZ with Z up, while gallery metadata is width/height/depth in meters; note this is a coordinate remapping, not a promise that visual meshes equal CAD bodies.

**Not completed:** full minimum-wall analysis, measured material shrinkage, interference/fit coupons, slicer toolpaths, real prints, practical stability/load test, chemical exposure assessment, sales research. No SKU is approved for production or sale.
