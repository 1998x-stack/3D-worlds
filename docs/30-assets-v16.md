# V1.6 · 30 original function-first 3D asset sources

**Status:** 30 newly authored Three.js visual recipes on top of pending PR #39; 595 + 30 = **625** source-backed catalog entries. This is a stacked PR, not yet part of the `main` website. No CAD fabrication, physical print or market sales are verified.

## Market inspiration · 2026-11-18

Amazon seller's 3D-printing article describes custom electronic accessories, organization, tabletop, educational kit and garden product ideas: https://sell.amazon.com/blog/printing-business-ideas . It is editorial guidance, not sales data. eBay hosts modular office and workshop product listings at https://www.ebay.com/shop/modular-desk-organizers and https://www.ebay.com/sch/i.html?_nkw=3d+printed+tool+organizer ; asks and watchers are not sales. Hacker News maker discussions explore programmatic parametric CAD via https://news.ycombinator.com/item?id=45140921 and https://news.ycombinator.com/item?id=49301215 ; discussion is not demand proof or licensing for third-party geometry.

30 original source designs are not traced/captured third-party product geometry; no company names, vendor meshes or model STL files were imported. Commercial IP and safety review remains required.

## Complete original inventory

| # | Category | Design EN / 中文 | Authoring parts | Functional differentiator | Signal |
|---:|---|---|---:|---|---|
| 1 | furniture | Articulated Sketchbook Lectern / 可调式素描本阅读架 | 33 | Tilting drawing lectern, split hinges, page clips and angle ticks | amazon |
| 2 | furniture | Under-Desk Modular Cassette / 桌下模块化抽屉盒 | 35 | Underslung cassette with bearing rails and removable dividers | ebay |
| 3 | furniture | Crescent Book Display Plinth / 新月弧形书籍陈列台 | 36 | Open book pedestal with graduated crescent slats and leaf stays | amazon |
| 4 | bathroom | Shower Grout Detail Caddy / 浴室缝隙清洁工具挂架 | 34 | Ventilated shower organizer, brush racks and lower drainage | amazon |
| 5 | bathroom | Ventilated Towel Arc Ladder / 弧形通风毛巾梯架 | 35 | Air gap towel drying ladder with offset arced rungs | ebay |
| 6 | characters | Lunar Sample Courier Mascot / 月面样本运输机器人角色 | 27 | Original robot mascot with visor, pod carriers and boots | hacker-news |
| 7 | characters | Field Botanical Archivist / 野外植物档案员角色 | 29 | Original botanist figure with folio, lens and vial | ebay |
| 8 | nature | Intertidal Tidepool Study / 潮间带生态观察台 | 55 | Tidepool cross-section: stone basins, plants and wildlife | hacker-news |
| 9 | nature | Alpine Snowmelt Watershed Slice / 高山融雪分水岭剖面 | 51 | Mountain hydrology slice: peaks, snow and runoff readings | hacker-news |
| 10 | vehicles | Canal Litter Skimmer Boat / 运河漂浮垃圾清理船 | 50 | Twin hull trash skimmer with front rake and service deck | hacker-news |
| 11 | vehicles | Folding Warehouse Dolly / 可折叠仓储手推车 | 31 | Two-wheel foldaway hand truck with noseplate and locking braces | ebay |
| 12 | electronics | E-Paper Ambient Dashboard / 电子墨水桌面信息站 | 40 | Angled e-ink console with structured data display and selector | amazon |
| 13 | electronics | Lab Probe Connector Bay / 实验室探针接口分线台 | 41 | Benchtop connector panel with color-coded terminals and probe rests | hacker-news |
| 14 | electronics | Compact Microscope Focus Stage / 显微镜精密调焦平台 | 41 | Focus stage with vertical guide rails, twin knobs and glass slide | hacker-news |
| 15 | decor | Penrose Tile Kaleidoscope / 彭罗斯拼花几何展台 | 47 | Aperiodic rhombus field with hovering optical arcs | hacker-news |
| 16 | decor | Terraced Shadow Screen Sculpture / 阶梯式光影屏风摆件 | 80 | Five staggered light-shadow louver screens | amazon |
| 17 | decor | Ribbon Orbit Desktop Mobile / 丝带轨道桌面风动摆饰 | 44 | Sculptural orbit ribbons, guy-wires and counterweights | ebay |
| 18 | kitchen | Label-Forward Pantry Bin Rail / 前置标签食品收纳轨道 | 41 | Modular pantry compartments with protruding label faces | amazon |
| 19 | kitchen | Reusable Bag Clip Library / 可重复使用封袋夹收纳架 | 59 | Library of graduated snap clips with visible jaws and hinge stops | ebay |
| 20 | architecture | Seismic Cross-Brace Study / 抗震交叉支撑结构研究 | 53 | Educational X-braced structure with column joints and gussets | hacker-news |
| 21 | architecture | Vaulted Rain Pavilion Miniature / 拱顶雨水庭院微缩建筑 | 62 | Rain-catching masonry vault with roof gutters and barrels | amazon |
| 22 | urban | Adaptive Cycle Lane Bollard Node / 自行车道弹性隔离节点 | 62 | Separated cycle path, reflective bollards and drainage curb | amazon |
| 23 | urban | Reverse Logistics Return Kiosk / 逆向物流智能回收柜 | 48 | Self-service package-return kiosk with intake slot and access panel | ebay |
| 24 | tools | Torque Driver Calibration Bench / 扭矩起子检定工作台 | 41 | Demonstrator torque rig with shaft, dial ticks and driver nests | hacker-news |
| 25 | tools | Solder Fume Channel Demo / 焊接排烟流道结构展示 | 48 | Illustrative fume extraction geometry with hood, ducts and filter | hacker-news |
| 26 | tools | Collet Size Inspection Carousel / 夹头规格检验转盘 | 55 | Circular machine collet library and graded bore identifiers | ebay |
| 27 | sports | Arrow Fletching Alignment Jig / 箭羽定位装配治具 | 44 | Shaft alignment jig with fin clamps and index scale | ebay |
| 28 | sports | Climbing Chalk Brush Station / 攀岩镁粉刷具工作站 | 41 | Bouldering brush rack and chalk-bag cradle | amazon |
| 29 | scifi | Meteor Shield Array Satellite / 陨石防护阵列卫星 | 48 | Original orbital craft with articulated shield arrays | hacker-news |
| 30 | scifi | Alien Microbe Observation Vault / 外星微生物观测密室 | 63 | Speculative containment laboratory with separate specimen pods | hacker-news |

## Required acceptance gates

1. Preserve old identities and release-membership invariants. Catalog source of truth is `catalog/models.json`; derived `catalog/public_models.json` and SQLite must be regenerated.
2. Every `src/models/*.js` has independent `assetMeta`, immutable ID, a pure `createX()` group factory, metric `dimensions_m` and descriptive unique named parts. Exact source part numbers are geometric declarations, **not** measured printed mechanical joints.
3. Execute on the exact commit: `python3 scripts/catalog.py validate`, `python3 scripts/catalog.py build`, `python3 -m unittest discover -s tests -v`, `node scripts/validate_models.mjs`, `npm run build`, `npm run generate:assets`, `npm run verify:assets`, `npm run test:gallery`.
4. Geometry is scene-scale Y-up metres. Mechanical concepts like hinges, clamps and rollers are *visual proposals* not physical solvers. Do not turn scene mesh/LOD into manufactured-product STL/3MF without independent Z-up/mm parametric CAD, solid geometry, tolerance, strength, slicer and physical fit/print evidence.
5. Interpret Amazon/eBay/HN signals as hypotheses, not bestseller or profitability proof. Each output requires independent IP, policy and market verification.

Follow `.codex/skills/threejs-model-builder/SKILL.md`, `references/MARKET-ORIGINALITY.md` and the equivalent `.claude/` and `.pi/` mirrors.
