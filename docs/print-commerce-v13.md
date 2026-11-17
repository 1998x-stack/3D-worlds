# 海外可销售3D打印模型：需求分析与首批50个原型（2026-11-17）

> **Evidence standard:** eBay transaction data are category-level secondary research; CGTrader data are digital model marketplace signals. Not a Chinese customs export ranking and **not proof these 50 specific products will sell**. All 50 are original *design hypotheses*; there are no claimed sales for these SKUs.

## Market evidence and buyer preference

1. **ZIK Analytics / eBay.com** (2026-11-05): in the 30 days to 2026-10-01, 41,120 3D-printed-item sales and USD 827,820 across 2,556 sellers; original light-up signs/lamps, statues, scale accessories, costume products, organizers and gaming stand types show category-level demand. Dataset only identifies sold active listings with relevant titles and does not cover all eBay commerce.
2. **CGTrader 3D Market Trends 2026** (Jun 2025–May 2026): digital printable model unit demand +7.5% YoY, listings +23.4% YoY. High-quality printable designs matter more than undifferentiated model quantity; gadgets, fashion and house designs showed strong relative growth. This is **not** the same market as a fully manufactured item.
3. **Etsy Creativity Standards**: a physical item made with a 3D printer must derive from a seller's original design. A generic open-source STL license does not automatically satisfy the platform's seller-original-design requirement. Buyers also expect photos/videos of the actual finished product.

Sources (checked 2026-11-17):
- https://www.zikanalytics.com/blog/best-selling-3d-printed-items/
- https://www.cgtrader.com/discover/3d-market-trends
- https://www.etsy.com/legal/creativity/
- https://help.etsy.com/hc/en-us/articles/360024112614-What-Can-I-Sell-on-Etsy
- https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1775078390626&uri=CELEX%3A52025XC06233
- https://files.openscad.org/documentation/manual/Using_OpenSCAD_in_a_command_line_environment.html

## First-batch product inventory

The new `print-commerce` category is independently discoverable in the existing gallery/API/SQLite/MCP. One JS procedural preview and one parametric OpenSCAD CAD design per SKU. All prototypes use family-specific geometry and 5 parameter variations. Format: `slug | title_zh | original design intent`.

### 灯具 / Light decor — 5

eBay light-up signs and lamps recorded the highest sales value among the eight eBay categories. Only passive lamp housings modeled; electric hardware omitted.

1. `moon-phase-light-sleeve` — 月相镂空灯罩 / Moon Phase Light Sleeve
2. `aurora-wave-lantern` — 极光波纹灯罩 / Aurora Wave Lantern
3. `geometric-star-lightbox` — 几何星光灯罩 / Geometric Star Lightbox
4. `forest-shadow-lantern` — 森林剪影灯罩 / Forest Shadow Lantern
5. `minimal-arch-nightlight` — 拱形氛围灯罩 / Minimal Arch Nightlight

### 原创摆件 / Original sculpture — 5

eBay statues, busts and painted figures strong; all characters are generic original concepts without known franchise identity.

1. `cloud-whale-totem` — 云鲸图腾摆件 / Cloud Whale Totem
2. `sleepy-owl-guardian` — 沉睡猫头鹰守护雕像 / Sleepy Owl Guardian
3. `lunar-fox-bust` — 月狐半身像 / Lunar Fox Bust
4. `garden-robot-companion` — 园艺机器人摆件 / Garden Robot Companion
5. `mountain-spirit-figurine` — 山灵原创雕像 / Mountain Spirit Figurine

### 微缩场景 / Scale scenery — 5

eBay diecast and scale-model accessories led unit volume; printable unbranded diorama tiles rather than licensed scale car parts.

1. `harbor-cargo-diorama` — 港口集装箱微景观 / Harbor Cargo Diorama
2. `desert-roadway-diorama` — 沙漠公路微景观 / Desert Roadway Diorama
3. `alpine-cabin-miniature` — 高山木屋微缩场景 / Alpine Cabin Miniature
4. `urban-street-corner` — 城市街角微缩场景 / Urban Street Corner
5. `retro-station-platform` — 复古站台微缩场景 / Retro Station Platform

### 桌面功能 / Desk organizing — 5

Home/workshop organizers showed transaction evidence, with straightforward practical value.

1. `modular-pencil-caddy` — 模块化笔筒 / Modular Pencil Caddy
2. `cable-sort-desk-hub` — 桌面线材分拣座 / Cable Sort Desk Hub
3. `paintbrush-workshop-rack` — 手工画笔整理架 / Paintbrush Workshop Rack
4. `craft-spool-organizer` — 手工线轴整理架 / Craft Spool Organizer
5. `studio-tool-bin` — 工作室多格工具盒 / Studio Tool Bin

### 展示支架 / Display stands — 5

Display of collections and personal gadgets can support niche intent, but fit needs user testing.

1. `collectible-display-plinth` — 收藏品展示底座 / Collectible Display Plinth
2. `watch-display-cradle` — 手表陈列托架 / Watch Display Cradle
3. `trading-card-display` — 收藏卡片展示架 / Trading Card Display
4. `miniature-tiered-riser` — 三层模型展示台 / Miniature Tiered Riser
5. `eyewear-display-stand` — 眼镜展示托架 / Eyewear Display Stand

### 游戏周边 / Gaming — 5

Retro gaming stands and add-ons show category evidence. Generic fit only, no trademark reproductions.

1. `universal-controller-cradle` — 通用手柄托架 / Universal Controller Cradle
2. `retro-cartridge-rack` — 复古游戏卡带架 / Retro Cartridge Rack
3. `tabletop-dice-tray` — 桌游骰子托盘 / Tabletop Dice Tray
4. `boardgame-token-sorter` — 桌游代币整理座 / Boardgame Token Sorter
5. `handheld-console-stand` — 掌机展示支架 / Handheld Console Stand

### 珠宝陈列 / Jewelry display — 5

CGTrader identifies jewelry among high-volume 3D printable model categories; physical-item demand should be tested separately.

1. `arc-earring-display` — 拱形耳饰陈列架 / Arc Earring Display
2. `ring-cone-tower` — 戒指锥形展示座 / Ring Cone Tower
3. `bracelet-display-arch` — 手镯拱形陈列架 / Bracelet Display Arch
4. `pendant-sorting-tray` — 吊坠分格托盘 / Pendant Sorting Tray
5. `modular-jewelry-plinth` — 模块化珠宝陈列台 / Modular Jewelry Plinth

### 园艺用品 / Planters — 5

Etsy-specific hypothesis; eBay sample alone showed weak planter/vase sales.

1. `ribbed-succulent-pot` — 竖纹多肉盆 / Ribbed Succulent Pot
2. `geo-cactus-planter` — 几何仙人掌花盆 / Geo Cactus Planter
3. `propagation-vial-holder` — 水培试管支架 / Propagation Vial Holder
4. `bonsai-display-pot` — 盆景展示盆 / Bonsai Display Pot
5. `desktop-herb-planter` — 桌面香草盆 / Desktop Herb Planter

### 个性化礼品 / Personalized gifts — 5

Custom name/sign products are personalized hypotheses; follow Etsy's original-design and listing-photo rules.

1. `custom-desk-nameplate` — 定制桌面姓名牌 / Custom Desk Nameplate
2. `wedding-place-card` — 婚礼席位姓名牌 / Wedding Place Card
3. `house-number-plaque` — 房屋门牌号牌 / House Number Plaque
4. `anniversary-message-plaque` — 纪念日祝福牌 / Anniversary Message Plaque
5. `monogram-desk-coaster` — 字母装饰杯垫 / Monogram Desk Coaster

### 原创Cosplay / Cosplay details — 5

Costume masks/armor sell on eBay but rights risk is high, so this release only includes brand-free original medallions/insignia.

1. `celestial-guild-medallion` — 星穹公会原创徽章 / Celestial Guild Medallion
2. `fantasy-crest-badge` — 奇幻原创纹章 / Fantasy Crest Badge
3. `space-explorer-insignia` — 太空探索徽记 / Space Explorer Insignia
4. `alchemist-costume-brooch` — 炼金师服装胸针 / Alchemist Costume Brooch
5. `mythic-rune-emblem` — 神话符文装饰徽章 / Mythic Rune Emblem

## Commercial viability research methodology

A hypothesis score is not a sales rank. Suggested study order: (1) 30-day sold price & conversion by exact use-case keyword, (2) original-design legal clearance, (3) slicer time, grams and waste, (4) packaging weight and breakage, (5) shipping and return rate, (6) landed gross margin and quality control, (7) platform category-specific policies. Require actual platform evidence per SKU before marking `market_validated=true`.

## Geometry vs manufacturability gates

| Gate | Scope | State |
|---|---|---|
| G0 | 50 stable catalog IDs, metadata, JS modules, CAD paths | source committed |
| G1 | browser 3D preview / GLB export | code provided; CI must verify |
| G2 | OpenSCAD export STL / 3MF | export tool provided; test in environment |
| G3 | manifold check, minimum thickness, tolerance, supports, slicer preview | not verified |
| G4 | real printed sample, wear/fit/strength/thermal/water test | not verified |
| G5 | commercial rights, listing policy, product labeling and market compliance | not verified |

**Important:** GLB is for rendering and is not necessarily manifold. Use the separate OpenSCAD source to generate manufacturing geometry. STL has no guaranteed physical units; these sources use mm and must be verified in the slicer. Exported 3MF may carry units but dimensions still require checking. EU GPSR distance-sale rules may require maker/contact details, EU responsible person and product/warning information where applicable.

## SKU prioritization in the next experiment

Prioritize original light shades and lamps (thermal safety testing), collectible displays and non-load-bearing desk organizers. Deprioritize crowded low-price fidget gadgets, unlicensed logos/characters and safety-critical parts. Compare keyword-level samples across Etsy, eBay and own-store rather than treating this taxonomy as evidence of net profit.
