# V1.5 · Thirty market-inspired original models · 2026-11-18

> Release stage: **30 editable Three.js visual source models + two independent original OpenSCAD manufacturing candidates**. Neither source meshes nor IP were taken from listings. All 30 visual GLBs remain unqualified for slicing or manufacturing. STL export, strength, clearances, materials and physical tests are not claimed.

## Selection method

- **Amazon**: seller-authored 2026 product ideation identifies customized tech accessories, organization, maker jigs, miniatures and STEM kits as categories to *investigate*, not verified demand numbers.
- **eBay**: publicly visible listings show niche Gridfinity/pegboard/tool organizers and personalized accessories; listing prices/availability are volatile and do not prove completed sales.
- **Hacker News**: Gridfinity and text-to-CAD discussions indicate value in exact measurement, parametric revisions, local production and transparent CAD assumptions.
- Differentiate by original form, clear use-case, no brand replicas, multi-size config, modularity, label zones and serviceable parts; maker prototype is not a certified end product.

## Inventory

| # | Category | Model / 中文 | Dimensions (W×H×D mm) | Authored differentiation | Signal | CAD |
|---:|---|---|---|---|---|---|
| 1 | furniture | Monitor Cantilever Bridge / 悬臂式显示器桌面桥 | 480×200×220 | monitor riser accessory | amazon | Scene only |
| 2 | furniture | Hinged Craft Workstation / 折叠式手工工具工作台 | 340×310×240 | folding maker worktop | amazon | Scene only |
| 3 | bathroom | Dual Razor Drain Dock / 双位剃须刀排水座 | 220×120×160 | drip-dry bathroom organizer | amazon | Scene only |
| 4 | bathroom | Refill Cartridge Wall Shelf / 替换芯壁挂收纳层架 | 260×310×180 | bathroom refill storage | amazon | Scene only |
| 5 | characters | Pocket Repair Automaton / 掌上维修机器人 | 120×210×120 | original desk collectible | hacker-news | Scene only |
| 6 | characters | Seed Courier Explorer / 种子快递探险者 | 110×180×120 | original STEM figurine | hacker-news | Scene only |
| 7 | nature | Terraced Pollinator Habitat / 分层传粉昆虫栖息地 | 340×160×220 | ecology education miniature | ebay | Scene only |
| 8 | nature | Moss Canyon Study Diorama / 苔藓峡谷地貌微景观 | 280×150×220 | landscape study model | ebay | Scene only |
| 9 | vehicles | Field Repair Cargo Trike / 野外维修货运三轮车 | 420×260×220 | maker vehicle miniature | hacker-news | Scene only |
| 10 | vehicles | Aerodynamic Survey Buggy / 流线型环境勘测车 | 350×180×200 | robotics concept miniature | hacker-news | Scene only |
| 11 | electronics | Split Keyboard Cable Nest / 分体键盘线材桌面坞 | 320×90×230 | ergonomic desk accessory | amazon | Scene only |
| 12 | electronics | Solder Tip Indexing Station / 烙铁头编号隔离收纳站 | 210×140×160 | workbench precision organization | ebay | Scene only |
| 13 | electronics | Cable Reel Matrix / 六位线缆卷轴矩阵 | 250×150×210 | modular cable management | hacker-news | Scene only |
| 14 | decor | Faceted Shadow Lantern / 棱面光影灯笼 | 200×280×200 | original geometric lamp decor | amazon | Scene only |
| 15 | decor | Tessellated Relief Mosaic / 密铺立体浮雕装饰墙 | 280×50×220 | parametric wall art | ebay | Scene only |
| 16 | kitchen | Tea Sachet Gravity Ladder / 茶包重力阶梯整理架 | 250×300×160 | kitchen sachet organizer | amazon | Scene only |
| 17 | kitchen | Coffee Filter Drying Mast / 手冲滤纸沥干支架 | 230×280×180 | coffee workstation utility | amazon | Scene only |
| 18 | architecture | Kinetic Facade Study Panel / 动态立面旋片教学板 | 280×320×80 | architecture geometry showcase | hacker-news | Scene only |
| 19 | architecture | Rainscreen Breeze Block / 雨幕透风格栅砌块 | 280×270×90 | facade materials study | hacker-news | Scene only |
| 20 | urban | Modular Rain Garden Curb / 模块化雨水花园路缘 | 310×120×190 | sustainable-city display | amazon | Scene only |
| 21 | urban | Micro-Mobility Parking Beacon / 微出行停放定位桩 | 320×280×190 | streetscape service prototype | amazon | Scene only |
| 22 | tools | Thread Gauge Swatch Rack / 螺纹牙距样片收纳架 | 230×140×150 | workshop reference organizer | hacker-news | Scene only |
| 23 | tools | Pegboard Fastener Cassette / 洞洞板紧固件抽屉盒 | 230×230×170 | pegboard fastening storage | ebay | Scene only |
| 24 | tools | Angled Hex Key Rail / 倾斜式内六角扳手分级架 | 250×130×150 | precision tool rack | ebay | Scene only |
| 25 | sports | Climbing Hold Route Diorama / 攀岩线路教学微景观 | 280×350×170 | tabletop sport model | ebay | Scene only |
| 26 | sports | Cycling Medal Display Track / 骑行奖牌展示轨道 | 270×260×160 | personalized sports awards | amazon | Scene only |
| 27 | scifi | Lunar Specimen Vault / 月球标本恒温档案舱 | 290×260×220 | original science fiction prop | hacker-news | Scene only |
| 28 | scifi | Bioluminescent Sonar Buoy / 生物荧光声呐浮标 | 310×280×240 | nonweapon marine sci-fi prop | hacker-news | Scene only |
| 29 | print-commerce | Camera Battery Organizer / 可调相机电池收纳盒 | 150×22×96 | custom-sized battery organizer | amazon | Unverified OpenSCAD candidate |
| 30 | print-commerce | Label Front Parts Bin / 前置标签模块化零件盒 | 124×36×84 | custom workshop drawer insert | ebay | Unverified OpenSCAD candidate |

## Geometry standards and limitations

1. Every source module is an independent ID/slug and exports its own Three.js factory. Distinct named part layouts are constructed in `src/models/v15_market_geometry.js`, with individually authored structures, finish variations, mechanical-looking details, raised reliefs and accessory groupings. The visual recipe is not inherently connected or watertight.
2. Canonical visual bounds are meters / +Y up and on ground plane; export and thumbnails use the existing P0/P1 pipeline. New catalog entries fit inside the static Gallery limit of 600 (595 current records).
3. The two practical storage SKUs have separate OpenSCAD mm/Z-up sources, parameter names, pocket recesses, bottom thickness and edge fillets. These prototypes deliberately have no branded battery-specific fit claims.
4. A passing source/geometry test does **not** establish real minimum walls, tolerances, connectedness of original scene GLBs, overhangs, filament choice, real fit, electrical/heat safety, load capacity, cleaning compatibility, food contact or manufacturing certification.
5. Do not directly sell or print the scene GLBs. Export CAD prototypes and perform independent slicing, wall/clearance measurement and printed coupon trials before product claims. This project does not grant rights to third-party trademarks or patented designs.

## Evidence, build and release checks

```bash
python3 scripts/catalog.py validate
node scripts/validate_models.mjs
node --test tests/v15_market_assets.test.mjs
python3 scripts/audit_v15_cad.py --output .cache/print/v15-cad-audit.json
npm run generate:assets && npm run verify:assets && npm run build
```

OpenSCAD and trimesh are required for the CAD audit. This pipeline produces **candidate** STLs in `.cache/print/v15-cad-stl`, not sale-ready deliverables. Actual slicer preview, dimensional sampling, print logs and user device measurements are still pending.

## Qualitative research links (not copied geometry)

- [Amazon seller research (ideas not measured demand)](https://sell.amazon.com/blog/printing-business-ideas)
- [eBay Gridfinity pliers holder](https://www.ebay.com/itm/389183025124)
- [eBay customizable pegboard hooks](https://www.ebay.com/itm/366669012124)
- [eBay modular tool organizer](https://www.ebay.com/itm/187367429576)
- [HN Gridfinity discussion](https://news.ycombinator.com/item?id=44419091)
- [HN Text-to-CAD discussion](https://news.ycombinator.com/item?id=45140921)
- [Adafruit Gridfinity cable slot survey (third-party licensing cautions)](https://blog.adafruit.com/2026/11/09/gridfinity-cable-organizer-box-5-slots-for-usb-usb-c-usb-a-chargers-3dthursday-3dprinting/)
