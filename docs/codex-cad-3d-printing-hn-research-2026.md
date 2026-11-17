# Codex × 参数化 CAD × 3D 打印
## 七类 Hacker News 项目技术调查与工程化落地研究

**研究日期：2026 年 11 月 17 日｜版本：1.0｜语言：简体中文**  
**研究对象：** Truchet Tilings、Gridfinity + Replicad、旋转计算尺手镯、Print-in-Place/嵌件打印、CAD 产品外壳 + FreeCAD MCP、CAD in Codex/text-to-cad、Adam CADAM。

> **核心结论**：最值得建设的不是“生成一个好看的 STL”，而是具备 **可修改的 CAD 源代码、真实的 B-rep 几何、可审计的参数、自动化几何验证、切片人工门禁、实物反馈** 的设计生产系统。现有 3D-worlds 可承担资产展示与检索；制造级设计需要新增 CAD-native 模块，不能依赖 GLB/STL 逆推原始工程语义。

---

# 执行摘要

## 1. 七个对象的事实归类

| 编号 | 对象 | 原始证据性质 | 最可复用的能力 | 本报告判断 |
|---|---|---|---|---|
| 01 | Jeff Barr Truchet Tilings | GitHub 仓库 + HN 作者自述 | 可重复图案、分色 STL、拼接 | 独特产品方向，先做小样验证 |
| 02 | Gridfinity 电子模块 / Replicad | **两条不同 HN 评论** + Replicad 官方文档 | 标准化接口 + 浏览器 B-rep | 好的组合方向，不能当作同一既有项目 |
| 03 | 旋转计算尺手镯 | 开源 Notebook + HN 作者自述 | 数学算法驱动实体结构 | 高性价比教学与文创样本 |
| 04 | 一次成型可动/暂停嵌件 | HN 经验 + 切片器官方指南 | 机构间隙 + 分层人工操作 | 有趣但需打印机与材料实测 |
| 05 | Agent 设计产品外壳 / FreeCAD MCP | HN 经验 + 可核验 MCP 仓库 | 精确孔位、装配、GUI/CLI 反馈 | 商业价值高，建议 P0 |
| 06 | CAD in Codex / text-to-cad | HN 方法自述 + **单独可验证仓库** | “每件一个代码源”+几何反馈 | 基础设施参考，建议 P0 |
| 07 | Adam CADAM | HN 作者发布 + 官方仓库 | 文本→OpenSCAD→浏览器 WASM→参数滑块 | Web UI 参考，GPL-3.0 需要审查 |

**重要勘误 ①：** HN 中介绍 Replicad 的评论，和描述 Gridfinity 电子积木及 Micro:bit 的评论并非同一作者；未查到充分证据证明后者使用 Replicad。[R01][R05]  
**重要勘误 ②：** HN 的 “CAD in Codex” 帖子提供了设计方法；`earthtojake/text-to-cad` 是可独立核实的项目。未查到足够直接证据证明二者就是同一作者/同一发布版本，因此本报告分别归因。[R10][R11]

## 2. 研究方法与证据分级

**A：项目一手资料。** 源码仓库、原作者 README、正式技术文档、可追溯的安装和输出说明。可用于确认“项目声称提供什么”，但不等价于本报告已成功复现。  
**B：开发者经验。** Hacker News 原作者/用户评论，证明有人报告做过某事，但不能替代机器实测、完整 BOM 或测试数据。  
**C：工程推导。** 基于软件特性提出的可行集成设计、提示词、测量方法与优先级；不是原项目已有功能。  
**D：未经验证或缺证。** 版本差异、未公开源码、商业化销量、某个机型的兼容性等，明确保持未知。

本报告以**源码、README、HN 原始评论与官方规范的交叉阅读**为主；**没有**在用户打印机上复现 7 个案例，没有进行实测公差/强度/销量测试。成熟度与评分均为本报告的**定性主观判断**，不是实验统计结果。

## 3. 一句话行动建议

先建立 **P0: Build123d + Python → STEP/STL → QA → 人工切片**；并行研究 `text-to-cad` 的 Codex 技能组织方式和 CADAM 的浏览器可视化；第一个实物优先选**参数化电子外壳**，第二个选**Gridfinity 标准接口**，第三个选**数学机械教具**。Truchet 布料和嵌件打印可作为差异化实验支线。

<div class="diagram">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 242" role="img" aria-label="建议的工程流水线">
<rect x="0" y="5" width="940" height="232" rx="18" fill="#f6f9fc" stroke="#dbe4ef"/>
<g font-family="Noto Sans CJK SC" text-anchor="middle">
<rect x="24" y="46" width="152" height="74" rx="11" fill="#173d65"/><text x="100" y="75" fill="#fff" font-size="18" font-weight="700">设计意图</text><text x="100" y="97" fill="#d7e6ff" font-size="13">规格 / 尺寸 / 约束</text>
<rect x="207" y="46" width="152" height="74" rx="11" fill="#245f93"/><text x="283" y="75" fill="#fff" font-size="18" font-weight="700">Codex</text><text x="283" y="97" fill="#dfecff" font-size="13">可版本化源码</text>
<rect x="390" y="46" width="152" height="74" rx="11" fill="#2f7d8f"/><text x="466" y="75" fill="#fff" font-size="18" font-weight="700">CAD 内核</text><text x="466" y="97" fill="#e0fdff" font-size="13">B-rep / STEP</text>
<rect x="573" y="46" width="152" height="74" rx="11" fill="#277d70"/><text x="649" y="75" fill="#fff" font-size="18" font-weight="700">自动验证</text><text x="649" y="97" fill="#dffaf1" font-size="13">几何 / 单位 / 装配</text>
<rect x="756" y="46" width="160" height="74" rx="11" fill="#b77937"/><text x="836" y="75" fill="#fff" font-size="18" font-weight="700">人工门禁</text><text x="836" y="97" fill="#ffecd3" font-size="13">切片 / 机型 / 复核</text>
<g stroke="#6d879b" stroke-width="3" fill="none"><path d="M177 83 H205"/><path d="M360 83 H388"/><path d="M543 83 H571"/><path d="M726 83 H754"/></g>
<text x="470" y="169" font-size="14" fill="#36546e">打印 → 量测 → 记录误差 → 参数与测试集更新 → 重新生成</text>
<path d="M835 129 V195 H103 V130" fill="none" stroke="#94a9bd" stroke-width="3" stroke-dasharray="8 6"/>
<text x="470" y="221" font-size="13" fill="#6b7c90">自动通过几何检查 ≠ 已经完成制造验证</text>
</g>
</svg>
</div>

---

# 01｜Truchet Tilings：在布料上打印数学图案

**项目地址：** https://github.com/jeffbarr/TruchetTilings  
**讨论：** https://news.ycombinator.com/item?id=49984349  
**类型：** OpenSCAD 参数化几何 / 多色 FDM / 柔性载体实验。  
**证据：** GitHub README（A）；Jeff Barr 在 HN 的自述（B）。[R01][R02]

## 1.1 它实际做了什么

仓库围绕 Truchet 六边形拼块：单块的弧线与区域经过组合，形成具有可控随机性或固定规则的大型二维图案。`hexagons_truchet.scad` 是主要建模源码；`render_hexagons_truchet.bat` 负责批量渲染。README 明示可选择六边形尺寸、X/Y 数量、花纹模式、随机种子、旋转、边角与边框，支持在织物上打印时设置拼块间隙，并可按挤出机分别输出 STL。作者使用多色 Prusa XL 展示了打印样例。[R02]

不能把“在布料上打印几何结构”理解成“材料本身具有纺织面料的性能”：其力学、洗涤耐久、皮肤接触和附着仍取决于布料、材料与工艺。此仓库首先证明的是 **参数化花纹 → 多色 STL** 的设计工作流，不是可穿戴成品的行业质量认证。

## 1.2 代码层抽象

| 层 | 概念参数 | 工程作用 |
|---|---|---|
| 单元 | HexRadius、HexHeight | 决定花纹单元尺度与基底厚度 |
| 图案 | TruchetMode、RandomSeed | 决定形状分布；保留 seed 才能复现 |
| 拼布 | CountX、CountY、Gap | 决定网格规模与布面留缝 |
| 连接 | Border、Corner、Mat | 多板拼接时保持边缘连续 |
| 分色 | Tile/Arc/Fill/Edge Extruder | 分别导出相应色彩与材料 STL |

典型的数据结构可以抽象成 `PatternConfig -> Tile(x,y,seed) -> GeometryLayer[color] -> STL[color]`。真正有价值的资产不是最终 STL，而是包含 `seed + 参数 + OpenSCAD 版本 + 导出脚本 + 材料说明` 的**可重复设计配方**。README 特别提醒：大图分区和多色文件可能迅速产生大量 STL，命名与追踪必须前置。[R02]

## 1.3 推荐复现实验（本报告方案，尚未运行）

1. 固定一个 4×4 或 6×6 小网格，不从大型纺织品开始；保存初始配置及随机种子。
2. 先在普通平台上用 PLA 打印一个颜色分层样本，验证图案连续性、STL 分色原点和高度。
3. 再选择布料试样（分别记录材质、厚度、张紧方式及表面处理），以 **不同 Gap 与首层条件** 做试验矩阵。
4. 打印后测量：拼块脱落数、接触面破损、弯折前后表面变化、洗涤/摩擦影响；不把“能弯折”当“耐穿戴”。
5. 如要做灯罩或墙面装饰，则应独立检查温度、阻燃需求、安装结构与清洁维护。

**验收样本建议：** `config.json`、4 份分色 STL、切片项目、照片、耗材记录、布料批次、拉脱/弯折观察表。只用 GitHub 图片不能证明重复制造成功。

## 1.4 主要问题与改进方案

- **渲染速度与复杂度**：OpenSCAD 的 CSG 对大量布尔对象可能较慢；把图案的组合逻辑、单元缓存与高精度导出分开。
- **布料附着不确定**：与喷嘴/首层距离、织物孔隙和粘附机制有关；明确这是工艺研究，而非单纯几何问题。
- **拆分拼接与颜色配准**：按公共原点导出各色 STL，保持坐标一致；错误地单独居中会导致错位。
- **二次开发权利**：仓库公开不自动意味着可商业再发行；分发/商用前查 LICENSE 和素材来源，未核实授权时仅内部研究。

## 1.5 值得迁移到 3D-worlds 的能力

新增 `generative-pattern` 类别、配方元数据、按种子再生功能、平铺拼接边界检查和多色文件组。Web 页面提供模式选择、seed、网格尺寸、织物/非织物开关与分色预览。**技术复杂度：中；机器实验依赖：高；优先级：P2。**

---

# 02｜Gridfinity 电子积木 + Replicad：标准接口和浏览器 CAD 的组合

**HN 讨论：** https://news.ycombinator.com/item?id=49984349  
**Replicad：** https://github.com/sgenoud/replicad  
**官方文档：** https://replicad.xyz/  
**Gridfinity 规格参考：** https://gridfinity.xyz/specification/

## 2.1 事实边界：它不是“一个已确认的 Replicad 项目”

同一条 HN 讨论串里，一位用户提到自己使用 TypeScript 的 Replicad 并喜欢可版本化的代码式设计；另一位用户分享了为孩子构建 Gridfinity 风格电子电路积木、让其使用 Micro:bit，并改造 Prusa 打印机做贴片辅助机的经历。**两人是不同评论者**，Hacker News 没有展示“Gridfinity 电子积木由 Replicad 制作”的充分证据。可以做技术组合方案，但不能据此归因。[R01][R05]

此外，该开发者明确说明，打印机改贴片机的做法虽然成功，但不推荐照搬，因为打印机平台与贴片机需求有不少冲突。他特别认为通用吸嘴是较有复用价值的结果。[R01] 因此研究重点不应变成复制一个“成熟 3D 打印贴片机产品”。

## 2.2 为什么选择 Gridfinity 作为产品接口

Gridfinity 是围绕统一网格尺寸建立模块化收纳与互连生态的思路。公开规范描述常见 **42 mm 网格间距、7 mm 高度单位**；实际底脚几何、倒角和装配公差须根据所采用的标准版本核对，不能把“42 mm”误当成全部接口尺寸。[R06]

一旦外形网格统一，上盖、分隔格、电子 PCB 底座、传感器模块、充电器、标识牌就可以组合。对于 Codex 来说，最重要的不是让模型自动“猜”结构，而是提前提供**机器可读参数约束**：板尺寸、定位孔、USB 方向、导线弯曲余量、散热与拆装空间。

## 2.3 Replicad 的真正技术价值

Replicad 是 TypeScript/JavaScript 风格的代码 CAD 工具，以 OpenCascade.js/WASM 内核计算实体，官方文档明确支持 STEP/STL 导出、圆角与倒角，且能与 Three.js 集成。它适合已有 React/Three.js 前端的项目：用 Web Worker 执行重计算，在网页中实时给出 CAD 预览。[R05][R07]

**它与 Three.js 的职责不同：** Replicad 负责边界表示（B-rep）与实体特征；Three.js 负责交互预览与资产渲染。若在浏览器仅得到三角网格、再将三角形保存成 STL，不会凭空获得可编辑的 CAD 面、孔特征或精密 STEP。

## 2.4 设计一个 1×1 网格电子模块的复现路径

| 步骤 | 输出 | 必测项 |
|---|---|---|
| 选择规范版本 | `grid-standard.json` | pitch、底脚轮廓、相邻间隙 |
| 输入电子板资料 | `board-profile.json` | 板外形、孔位、USB/电池方向 |
| 编写 Replicad 模块 | `module.replicad.ts` | 板托、柱、通槽、固定件 |
| 导出 STEP/STL | `module.step`, `module.stl` | 单位、实体数、孔距 |
| 打印接口试片 | `interface-test.3mf` | 与实际底板的可拆卸配合 |
| 实装电子板 | 实拍与测量报告 | 线缆压力、误插、结构干涉 |

建议测试三个梯度：**标准底脚样片 → 空盒 → 放入真实电路板的成品**。不要第一轮就尝试自动贴片机、带电池设备或高温电子元件。电气安全、散热、电池固定与线缆应力缓解须额外评价。

## 2.5 Codex 与浏览器之间的架构选择

- **方案 A（推荐首期）**：Codex 产出 Python/Build123d，后端导出 STEP/STL，前端 Three.js 预览。服务端容易做版本锁定、批量测试。
- **方案 B（前端探索）**：Codex 产出 TypeScript/Replicad，浏览器 WASM 生成 B-rep，再导出 STEP/STL。适合“滑块即时试配”，但应测试 WASM 内存和浏览器兼容性。
- **方案 C（组合）**：标准接口特征由 Python 生成，网页 Replicad 用于交互；需定义跨语言设计语义与参数一致性。不要让两套 CAD 内核无约束地分别修改同一零件。

**优先级：P1；适合做可扩展的电子/教学模块 SKU。**

---

# 03｜Build123d 旋转计算尺手镯：把数学算法变成实体产品

**源码：** https://github.com/gcr/sliderule-bracelet  
**具体 Notebook：** https://github.com/gcr/sliderule-bracelet/blob/main/version-3.ipynb  
**HN 讨论：** https://news.ycombinator.com/item?id=47772725  
**Build123d 文档：** https://build123d.readthedocs.io/en/stable/

## 3.1 已核查的项目事实

开发者 `gcr` 在 CadQuery 主题的 HN 讨论中分享了自己用 Build123d 制作可佩戴的旋转计算尺手镯，用于乘法运算，并公开带图片的 Notebook。HN 评论者强调代码/Notebook 对重复刻度和复杂迭代有优势；也有人认为图形 CAD 配合外部矢量绘图可以完成类似图案，因此不要夸大为“GUI 不可能制作”。[R03][R04]

源码仓库确实存在，HN 链接指向 `version-3.ipynb`。本报告核查了公开入口与讨论，**未执行整份 Notebook 或独立打印**，不对其最终机械公差与运算精度作实验宣称。

## 3.2 核心数学：对数刻度为何适合代码生成

对数把乘法变成加法：`log(a×b) = log(a) + log(b)`。如果将数值 a 映射到圆周位置 `θ(a) = k·log10(a)`，则将两条圆环相对旋转可以表现乘法关系。**如何读取三位数、刻度分段和进位**取决于具体刻度布局；不能只凭公式推断作品全部交互细节。

关键的代码 CAD 优势在于：数百个不等间距刻度可由一个公式生成；字体、深度、内外环半径、手腕直径和刻度密度均可统一由参数驱动。每当尺寸变化时，程序自动重建整圈刻度，不必重排每个数字。

## 3.3 应用层建模管线

`numeric scale -> tick sampling -> angle mapping -> path/emboss -> rigid ring -> STL/STEP -> fit test`。

| 子系统 | 设计变量 | 失效风险 |
|---|---|---|
| 数值映射 | 刻度范围、函数、角度零点 | 刻度拥挤、读数误差 |
| 外观刻字 | 字高、雕刻深度、字体 | 喷嘴无法分辨、字粘连 |
| 双环机构 | 环径、轴向锁定、配合间隙 | 卡死、过松、脱落 |
| 佩戴人体工学 | 内径、边缘倒圆、重量 | 磨擦、夹肤、易断 |
| 参数可追溯 | 单位、公式版本、校准点 | 改一个参数后对应关系失真 |

## 3.4 推荐复现实验

1. 不从整只手镯开始，先导出“平面刻度样片”，验证最小字高/刻度线宽；拍照与卡尺记录。
2. 制作无刻度双环试配模型，以 **若干间隙等级** 打印小样，找到适合具体耗材与机器的组合。
3. 保留全部数值映射算法与校准用例，验证 `a×b` 的读取对应；对边界数值进行单元测试。
4. 合并刻度与机械零件，做 10 次以上旋转操作观察磨损；不要把一次旋转成功当成寿命结论。
5. 输出 `parameter set + source + STEP/STL + accuracy/fit report + photo`。

## 3.5 适合衍生的产品

对数尺、齿轮比演示盘、可旋转密码盘、周期表齿圈、天文时间换算盘、函数图像教具、分数转小数圆盘。与传统静态模型不同，这些产品具有**可交互的解释价值**。结合教学场景能开发成“算法 + 参数化 CAD + 教案”三联资产。

**建议研发：** 数学实体教具生成器。优先级 P1，软件验证成本中，实体装配验证成本中。

---

# 04｜Print-in-Place 与暂停嵌件：真正有趣、也最需要风险控制

**HN 经验：** https://news.ycombinator.com/item?id=49984349  
**切片器官方说明：** https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490  
**说明：** 这是工艺类别，不是已找到的一个完整、可克隆的独立源码仓库。

## 4.1 先区分两种技术

**Print-in-Place（原位装配一次打印）**：相邻活动件在同一制造任务中分开形成，通过设计间隙、支撑消除策略实现打印后能运动，如铰链、链条、连杆。**暂停嵌件（pause-and-insert）**：打印到指定层停止，由人加入螺母、磁铁、轴承等，再继续覆盖。这是两类不同的工作流；原位打印不必然包含人工插物。[R01][R08]

HN 开发者分享了暂停打印加入金属角件再继续的经历；Prusa 官方指南明确提供按层暂停功能，也特别提醒磁铁可能被喷头吸走，必须牢固固定。[R01][R08]

## 4.2 最小工程模型：开合铰链

建议结构：固定叶片、运动叶片、同轴销轴/轴套；所有铰链部位定义清晰的径向和轴向间隙。最佳间隙没有通用常数：喷嘴口径、层高、材料、温度、XY补偿、打印方向会改变结果。研究应使用 0.20/0.30/0.40/0.50 mm 等 **候选实验级别** 做试片，而不是默认这些值均可成功。

| 质量层级 | 检查项目 | 典型失败 |
|---|---|---|
| CAD | 机构活动空间、没有几何干涉 | 轴与环相交 |
| STL | 水密、法线、零部件分离 | 局部共享面被切片融合 |
| 切片层 | 喷嘴路径、桥接、支撑、孤岛 | 小间隙被挤出线封死 |
| 打印后 | 启动扭矩、旋转角、断裂和磨损 | 卡滞或间隙过大 |

## 4.3 暂停嵌入金属件的安全检查

- 尺寸：嵌件不得高出即将打印的层面；要考虑层高与真实件公差。
- 热/碰撞：重启路径不能撞击嵌件；检查喷头、风道与金属件之间的最小空间。
- 磁性：避免磁铁移位吸附喷头；采用适配槽与固定策略。
- 操作：暂停后人员确认、清理、就位，再恢复；**不得由 Codex 无人监管地自动恢复打印**。
- 制件：此类混合材料部件的最终强度、脱落与耐热性必须实测。

## 4.4 为什么适合 Agent，但不能完全自动化

Codex 很擅长生成多种间隙版本、自动编号、导出阵列以及写实验记录模板；Slicer 可以帮助计算暂停层位置。**关键动作必须经人类门禁**。对于强负载、儿童吞咽风险、食品接触、电子高温环境中的嵌件，实验评审应更严格。

## 4.5 可复用软件模块

`clearance_coupon_generator`、`fit_test_matrix`、`assembly_collision_check`、`pause_layer_plan`、`slicer_inspection_required`、`physical_test_log`。优先做 **配合试样生成器**，而不是“自动打印所有可动机构”。

**优先级：P2；有趣程度高，但对实际打印条件依赖非常高。**

---

# 05｜Agent 设计产品外壳：CadQuery 与 FreeCAD MCP

**HN 讨论：** https://news.ycombinator.com/item?id=50067325  
**FreeCAD MCP：** https://github.com/neka-nat/freecad-mcp  
**技术性质：** HN 案例经验（B）+ 开源 MCP 实现（A）。

## 5.1 公开案例显示的真实能力与局限

HN 有开发者表示使用 LLM 编写 CadQuery 脚本、导出 STL 和预览；另一位用户报告使用 FreeCAD MCP 做出了工作台（含裁切表、装配与五金材料）及复杂的全向轮模块。尤其值得关注的是**失败描述**：复杂齿轮/电机系统中，电机朝向、滑轨安装、螺钉槽可达性和布尔联合仍然出现大量返工。工作台一类长方体组合则更容易成功。[R09]

因此“能生成外壳”应分成：**几何生成成功、接口坐标正确、配件装得进去、可以量产打印、功能测试通过**五个独立目标。再漂亮的 3D 截图，也无法证明 USB 口能插线或螺丝不顶住电池。

## 5.2 设计一套可验证电子外壳的工程规范

**必须输入的尺寸：** PCB 外形长宽厚、安装孔中心坐标与孔径、连接器三维包络、按键行程、电池/屏幕位置、螺钉规格、盖板形式、目标材料与生产工艺。没有这些信息时，应生成需求缺失清单，不允许 Agent 盲猜“准确孔位”。

**建议源文件组织：** `enclosure_spec.json` -> `pcb_mockup.py` -> `bottom_case.py` + `lid.py` -> `assembly.step` + `print_parts.stl` -> `fit_report.json`。PCB 和真实标准件应当是**不可任意改动的约束体**，外壳为待优化目标体。

| 准确性门槛 | 自动化检验 | 需要实物确认 |
|---|---|---|
| 孔位 | 与输入孔中心坐标逐项比对 | 钻孔/螺钉装入 |
| 线缆口 | 连接器包络不与壁面干涉 | 插头插拔、应力释放 |
| 螺丝柱 | 柱体体积、剩余最薄壁厚 | 攻丝、热熔螺母保持力 |
| 上下盖 | CAD 碰撞检测、间隙检查 | 卡扣耐久、拆装力 |
| 散热 | 预留通风区域/热源间距 | 通电温升、电气安全 |

## 5.3 FreeCAD MCP 的实现思路

社区项目 `neka-nat/freecad-mcp` 通过 FreeCAD 内运行的 Addon/RPC，与独立 MCP Server 连接，允许 Agent 创建/编辑模型、查看文档和执行 Python；文档也描述截图与 FEM 等能力。它不是 FreeCAD 官方自带的 MCP 服务。安装分两端：FreeCAD 安装其 Addon，再由代理启动外部 MCP 进程，常见启动方式是 `uvx freecad-mcp`。[R12]

**风险：** 代码执行权限非常高。对 Agent 生成的 FreeCAD Python、读取文件的路径、网络访问和插件信任边界都要限制；不应把有权执行任意脚本的服务直接暴露到公网。对仅需本地无界面导出的任务，FreeCAD Python CLI/Build123d 往往比增加 MCP 层更少组件。

## 5.4 推荐初始实验：三件套外壳

- `E1`：只有四个螺钉孔和盖板的盒子，目标是校正坐标系与孔距。
- `E2`：增加 USB-C 开孔和线缆绕行空间，目标是验证接口包络。
- `E3`：增加 PCB 支撑柱、热熔螺母和插拔盖板，目标是验证装配公差与可维护性。

三个实验都保留实测照片、卡尺数据和失败日志。避免从无人机、高负载机器人壳体或高压电源外壳起步。

**优先级：P0。** 这是生产需求最明确、性能可度量、相对容易建立质量门槛的类别之一。

---

# 06｜CAD in Codex 与开源 text-to-cad：从提示词到可审计工程资产

**HN 方法讨论：** https://news.ycombinator.com/item?id=47913203  
**独立开源实现：** https://github.com/earthtojake/text-to-cad  
**安装说明：** https://github.com/earthtojake/text-to-cad/blob/main/docs/install.md

## 6.1 HN 作者给出的四项方法论

HN “CAD in Codex” 的提交者 `softservo` 分享：①每个 STEP 对应可编辑的 Python 源；②通过指定面和边让 Agent 做精准修改；③为特征建立 Markdown 自然语言说明；④通过截图和几何约束共同核验。作者还提到希望解决 CAD 初学者的使用门槛，并支持 STEP/STL/GLB/DXF/URDF 输出。[R10]

这四点非常重要：与其把复杂实体转成提示词，不如给 Agent 一个**受约束、有反馈、可以重建的代码工程**。缺点是 HN 评论并未给出完整复现日志或第三方基准；单凭一段帖子不能证明任意模型都能稳定自动生成。

## 6.2 独立核查 `earthtojake/text-to-cad`

该仓库是可验证的开源项目，README 声明 MIT 许可，提供包含 Codex、Claude Code 等的技能/插件集成。项目的公开功能涵盖 Build123d/OpenCASCADE CAD、STEP/STL/GLB/3MF、DXF、PCB、制造检查、CalculiX 应力分析、工程图、渲染、OrcaSlicer 流程以及机器人描述等。[R11]

其安装文档还提供了 Codex 插件市场的显式命令（见附录），比“一行 curl 脚本直接执行”更适合需要审计安装过程的工作站。**代码审计、权限范围、实际本机兼容性仍需由使用者验证**。不要因为 README 罗列了功能，就把所有模块视为已在本报告完成端到端测试。

## 6.3 关键架构：有语义的 CAD Source of Truth

- **一零件一源码**：`motor_mount.py` 对应 `motor_mount.step` 与 `motor_mount.stl`；派生二进制可重建，不手工反向修改 STL。
- **参数契约**：`params.json` 列明单位、尺寸上下限、材料、机器配置与禁止更改的孔位。
- **面/边特征定位**：优先用特征名、位置/法线/面积等几何性质描述选取，避免仅用易变化的拓扑索引。
- **可视反馈**：固定角度六视图、剖切图、B-rep 特征清单与机器可读几何报告共同反馈给 Agent。
- **版本追溯**：源文件哈希、内核版本、导出参数、质量报告与实物反馈挂同一 `design_revision`。

## 6.4 一个可靠的 Agent 循环

1. 解析规格：缺失尺寸和不确定装配约束标记为 `UNKNOWN`。
2. 产出设计计划与参数 Schema，不允许一边推理一边随意更改关键尺寸。
3. Codex 修改 Build123d Python，运行脚本导出 STEP 和 STL。
4. 在实体层检查有效性、几何包围盒、体积、孔距、面/边识别；失败则停止导出可交付标签。
5. 网格层检查 watertight、法线、非退化三角面和尺度；注意这些**不替代最薄壁厚与切片检查**。
6. 切片器使用固定配置生成预览与用料估算，执行人工评审。
7. 打印并量测，失败标签进入新 revision，更新公差模型与回归测试。

## 6.5 常见失效模式及回退策略

| 故障 | 原因倾向 | 工程策略 |
|---|---|---|
| 圆角失败 | 边太短、非流形、自相交 | 降低半径、重排特征顺序、换选边条件 |
| 尺寸正确但装不进 | 连接器实际三维包络遗漏 | 标准件作为碰撞体；照片标注位置 |
| STEP 与 STL 不一致 | 导出基准/坐标/比例不统一 | 同一内存实体导出，哈希与 bbox 对账 |
| Agent 改错面 | 拓扑索引变化 | 稳定几何签名、特征标签与剖视图 |
| 成品打印失败 | 薄壁、悬空、翘曲或工艺偏差 | 分级关卡，不把 CAD valid 当 print verified |

**优先级：P0。** 本章的方法比单个演示模型更值得复用。需要特别指出：GitHub 仓库与 HN 提交是否存在作者/版本关系，目前的证据不足以确定，报告不会合并归属。

---

# 07｜Adam CADAM：浏览器 Text-to-CAD 和可交互参数滑块

**GitHub：** https://github.com/Adam-CAD/CADAM  
**HN 发布：** https://news.ycombinator.com/item?id=45140921  
**项目许可：** GPL-3.0（官方 README）。

## 7.1 项目的真实定位

Adam 团队于 2025-09-05 在 Hacker News 宣布将其浏览器端 Text-to-CAD 应用开源。项目的主要产品体验是：输入文字或参考图片 → AI 生成 OpenSCAD → 自动提取可调参数 → 显示滑块 → 在浏览器重新编译几何并输出模型。HN 原作者还说明，其对话代理和代码代理分开，简单参数变化尽量走确定性改写，不再次调用模型。[R13]

公开仓库 `Adam-CAD/CADAM` README 列出 React 19/TypeScript/TanStack Start/Vite、Three.js/React Three Fiber、OpenSCAD WebAssembly、Supabase 和 Anthropic API 等组件；支持 STL/SCAD/DXF，BOSL/BOSL2/MCAD 库，并提供多种展示用的 benchmark 模型。README 中展示的复杂发动机等案例代表**项目自述的演示能力**，不等于第三方检验的尺寸/功能验证。[R14]

## 7.2 核心数据流拆解

`Prompt + image` → `conversation agent` → `code-generation agent` → `OpenSCAD source` → `parameter extraction` → `Web UI controls` → `OpenSCAD WASM worker` → `mesh` → `Three.js` → `STL/SCAD/DXF export`。

这里最聪明的工程思想不是“生成代码”本身，而是把两类操作区分：**语义上的设计变化**需要大模型；**既定参数值的微调**应该是可重复、低延迟的确定性计算。这降低了调用成本，也避免同一模型在只改长度时被 LLM 随机改造。

## 7.3 独立重建时的四个技术难点

**参数提取。** README 说明存在自动参数提取和快速更新。若仅靠正则字符串替换，必须处理同名变量、作用域、表达式以及多处引用；建议从长期架构改成受 Schema 约束的声明式参数清单和受控代码生成，而不是允许用户输入任意代码后直接盲改。

**浏览器 CPU/WASM。** CSG 大模型重新编译会阻塞交互，因此 CAD 内核应置于 Web Worker，建立任务取消、内存上限与缓存策略。编辑器应展示“正在构建 / 建模错误 / 模型不符合限制”的真实状态。

**交互与制造脱钩。** Three.js 可正确展示漂亮网格，但看不到隐藏空腔的最薄壁厚、全部装配间隙，也不等于 STEP 的精确实体。OpenSCAD 并不原生提供完整 STEP 语义；精密 CAD 仍需 Build123d/CadQuery/FreeCAD 等 B-rep 路径。[R13][R14][R15]

**安全与许可。** 应对用户输入和 AI 代码施加运行时间/资源/权限上限，限制注入式滥用；若复制 CADAM 的受 GPL-3.0 约束的源码，须按实际分发/部署方式履行许可证义务。仅参照 UI 思路并独立实现，不等于自动继承或规避具体源码许可义务；重要商业方案应咨询合格法律人员。

## 7.4 HN 社区支持与批评均需重视

有人报告通过文本描述得到带圆角和孔的尺寸化零件；也有人质疑，复杂真实设计很难被完整语言描述，实际会需要大量反复沟通。另有评论提醒 OpenSCAD 与 STEP 的边界。这些观点并不矛盾：文字适合表达**功能目标和可枚举约束**；复杂曲面、装配关系和关键特征往往需要**在 3D 视图选择面/边、尺寸图以及实物照片**配合。[R13]

## 7.5 对 3D-worlds Web UI 的具体设计建议

建议引入 **双模式编辑器**：左侧自然语言简报 + 参数面板；中央 Three.js/Replicad CAD 预览；右侧制造质量报告；下方固定标签页分别展示源代码、STEP/STL/3MF 文件、切片估算与物理验证日志。以 `revision_id` 为锚点展示来源、许可证、尺寸和检测状态。基础滑块必须调用确定性参数生成，不再请求大模型。

**优先级：P0（借鉴 UI/流程），源码直接纳入项目需先完成 GPL 分析。**

---

# 08｜跨项目横向比较：选谁作为技术基础？

## 8.1 为什么 OpenSCAD、Replicad 和 Build123d 不能简单替换

| 工具/路线 | 主要几何表示 | 适合任务 | 弱点/注意 | 推荐角色 |
|---|---|---|---|---|
| OpenSCAD | 参数化 CSG → 网格 | 花纹、阵列、基本结构、快速文本生成 | 任意后期圆角/复杂曲面难；无完整 CAD 特征树 | 艺术和简易实物 |
| Replicad | JS/TS + OCCT B-rep | 浏览器参数化 CAD、Three.js 集成 | WASM 内存、复杂特征稳定性需测 | 前端交互 CAD |
| Build123d | Python + OCCT B-rep | 精密孔位、装配结构、STEP/制造自动化 | 拓扑选边和内核运算可能失败 | **主制造引擎** |
| CadQuery | Python + OCCT B-rep | 工作面链式建模、脚本 CAD | CAD 任务需有明确规格 | 备选/生态兼容 |
| FreeCAD + MCP | GUI/文档 + OCCT 内核 | GUI 辅助、复杂建模、工程审查 | 安装更复杂；MCP 可运行代码 | 专家修订台 |
| Three.js | 三角网格渲染 | 网页浏览、预览、展示 | 缺少 CAD 原始语义 | **前端展示引擎** |

## 8.2 定性评估矩阵（非实测成绩）

评分范围 1~5（越高表示越适合报告设定的目标）。维度为：可重复性、CAD 精密性、Web 集成、低门槛教学、制造闭环潜力。分数由本报告根据软件架构/公开案例评定，**不是产品排行榜或统计实验**。

| 方向 | 可重复 | 精密性 | Web | 教学 | 制造闭环 | 初期等级 |
|---|---:|---:|---:|---:|---:|---|
| Truchet + OpenSCAD | 5 | 2 | 3 | 4 | 2 | P2 |
| Gridfinity + Replicad | 4 | 4 | 5 | 4 | 3 | P1 |
| 数学计算尺 + Build123d | 5 | 4 | 3 | 5 | 3 | P1 |
| Print-in-Place/嵌件 | 3 | 3 | 2 | 4 | 2 | P2 |
| 外壳 + FreeCAD MCP | 4 | 5 | 3 | 3 | 4 | P0 |
| Codex + text-to-cad 方法 | 5 | 5 | 4 | 4 | 5 | P0 |
| CADAM Web 模式 | 4 | 2 | 5 | 5 | 3 | P0（UI） |

## 8.3 决策逻辑

- 想验证真正可出售的尺寸定制产品 → **外壳/配件 + Build123d**，先从可测量的结构件开始。
- 想让 Codex 在浏览器直接设计 → **CADAM 的产品交互 + Replicad 的 B-rep 技术**，但保留服务端一致性与质量门禁。
- 想做有辨识度的文创内容 → **Truchet、多色装饰、数学计算尺**。
- 想测试物理机构智能 → **Print-in-Place 试样和装配件**，严格区分几何验证和实体实验。

---

# 09｜落地 3D-worlds：新的 CAD-native 子系统蓝图

## 9.1 与现有仓库的接口

`1998x-stack/3D-worlds` 当前已有 Three.js 模型资源、GLB、网页预览、基础 STL/3MF 导出与几何审计。现有打印说明也明确：从以米为单位、Y-up 的 GLB 转成毫米、Z-up 的 STL，**不保证薄壁、装配或可制造性**；真正的可编辑 STEP 应从 CAD-native 建模源头生成。[R16]

应追加 `cad/` 和 `printing/`，保留 `src/models/` 的可视化场景源。历史资产 ID 不应在升级为可打印模型时被静默覆盖。每个 CAD 成果指向一个独立 `print_variant`，持有原始模型、材料配置、状态与质量证据。

```text
3D-worlds/
├── cad/
│   ├── parts/                 # part_id.py / Build123d
│   ├── assemblies/            # assembly_id.py
│   ├── profiles/              # printer/material/fit schema
│   ├── templates/             # enclosure/gridfinity/teaching
│   └── examples/              # reproducible showcases
├── printing/
│   ├── generate.py            # CAD source → STEP/STL/GLB
│   ├── validate_brep.py       # solids, volume, holes
│   ├── validate_mesh.py       # watertight, degenerate faces
│   ├── slice_orca.py          # opt-in, pin CLI version
│   └── audit.py               # provenance + JSON report
├── catalog/
│   └── printable_models.json
├── .codex/skills/
│   └── printable-cad/{SKILL.md,references/,scripts/,assets/,examples/}
└── docs/
    ├── manufacturing-contract.md
    └── verification-matrix.md
```

## 9.2 数据 Schema：可审计比“模型数量”更重要

```json
{
  "asset_id": "cad.enclosure.sensor-v1",
  "design_revision": "r001",
  "source": {"engine": "build123d", "file": "cad/parts/sensor.py"},
  "units": "mm",
  "design_parameters": {"width": 80, "height": 30, "wall": 2.4},
  "target": {"process": "FDM", "material": "PLA", "printer_profile": "PROFILE_ID"},
  "outputs": {"step": "...", "stl": "...", "glb": "..."},
  "quality": {"brep_valid": null, "mesh_watertight": null,
              "slicer_reviewed": false, "physically_verified": false},
  "evidence": {"source_sha256": "...", "report": "...", "photo": null}
}
```

上面是**建议 Schema 草案**，不是现有仓库已接受的格式。`null` 表示未执行，不能默认为 PASS。指定 `PROFILE_ID` 时必须落地为实际可复现的切片配置版本。涉及外部作品还需 `license`, `author`, `source_url`, `license_evidence` 字段。

## 9.3 质量门禁：五步必须分级

| 阶段 | 必要证据 | 自动发布策略 |
|---|---|---|
| S0 设计完成 | 源代码、参数、组件说明 | 允许内部预览 |
| S1 CAD 几何通过 | Valid B-rep、bbox、体积、约束测试 | 可以生成候选 STL |
| S2 网格通过 | STL/3MF 单位、水密、法线、尺寸 | 可标注“待切片复核” |
| S3 切片通过 | 特定机器/材料配置、逐层预览记录 | 允许生成“试打印候选” |
| S4 实物验证 | 实际照片、关键尺寸量测、工况测试 | 可标注“经过测试” |

**重要：** 网格封闭不代表几何无自相交，切片成功也不代表长期机械强度。不同生产目标采用不同的工艺约束；未经测试的模型不应被描述成“量产级”。

## 9.4 六周实施路线

**W1 / P0：** 固化 Python 环境与 Build123d 版本；新增参数 Schema、三种基础模型、STEP/STL 同源导出。  
**W2 / P0：** 写 B-rep/mesh QA，增加失败夹具（开孔错误、悬空、薄壁、错单位），生成审核 JSON。  
**W3 / P0：** 外壳模板 + PCB Mockup + 装配干涉检查；试打印与量测。  
**W4 / P1：** Gridfinity 标准脚位、可复用组件库、数学教具试样。  
**W5 / P1：** 页面参数控件、源文件展示、打印状态徽记、下载预览；探索 Replicad Web Worker。  
**W6 / P2：** Truchet 分色试验、PIP 间隙阵列、验证日志回流与成本面板。

每周都应有 **可恢复的真实构建产物**，而不是仅有 README 或 AI 截图。

---

# 10｜最小可行实验方案与验收指标

## 10.1 测试矩阵（设计建议）

| 测试集 | 建议数量 | 自动验收 | 必要实物检验 |
|---|---:|---|---|
| 单零件基础件 | 10 | 尺寸、体积、孔位、STEP/STL 一致性 | 卡尺尺寸 |
| 标准接口/Gridfinity | 6 | 接口版本、bbox、装配间隙 | 与底板真实配合 |
| 电子外壳 | 6 | 连接器不碰撞、螺丝柱孔距 | 上下盖与 PCB 实装 |
| 数学教具 | 4 | 刻度函数测试、文字尺寸 | 读数与转动 |
| 多色花纹/布料 | 4 | 分色坐标一致、种子可复现 | 层间/织物附着 |
| 可动关节 | 6 | 部件不相交、切片间距 | 启动扭矩、磨损 |

上述数量是适合第一轮测试的**规划建议**，不是对现有项目成果的统计。建议每类至少保留一组故意失败的反例数据，以验证 Agent 能否正确拒绝错误模型。

## 10.2 记录哪些客观指标

- **几何**：尺寸误差（mm）、孔中心误差（mm）、有效实体数量、体积、模型是否封闭、导出文件哈希。
- **制造**：切片耗材估算（g）、估算时间、支撑体积、悬空岛数量/类型（切片器支持时）、失败批次原因。
- **实物**：实测长宽高、配合力/操作感、可动角度、成品数量、照片；关键负载件需另做工程测量。
- **Agent**：首次几何通过率、平均修复轮数、人工修改数、回归失败率、可重现构建率、单模型工具调用成本。

需要同时记录分母。例如“3/5 个样本首次几何检查通过”有意义；“成功率很高”则不可审计。

## 10.3 安装与集成注意事项

**CADAM 本地开发示例**（项目 README 给出的方向）：

```bash
git clone https://github.com/Adam-CAD/CADAM.git
cd CADAM
npm install
npx supabase start
npm run dev
```

需根据仓库配置准备环境变量、AI API 与 Supabase 服务；本报告没有实际运行上述命令。仓库采用 GPL-3.0，产品集成前核查许可证义务。[R14]

**text-to-cad 的 Codex 插件安装方式**（来自其公开安装文档，请先审查来源与权限）：

```bash
codex plugin marketplace add earthtojake/text-to-cad --ref latest
codex plugin add text-to-cad@earthtojake
```

这是该项目的可选插件流程，不等于本研究在当前 Codex 版本已执行成功。官方文档也指出不同安装路径可能出现重复插件，首次尝试建议隔离环境。[R17]

**Build123d 程序化出口（概念代码）**：

```python
from build123d import Box, export_step, export_stl
part = Box(40, 30, 10)
assert part.volume > 0
export_step(part, "part.step")
export_stl(part, "part.stl")
```

此例展示两种格式来源于同一 CAD 实体，不含壁厚、装配或物理打印认证。要做制造审计还须增加特征、碰撞、网格、切片检查。[R15]

---

# 11｜综合结论与采购/技术决策

**先做系统，再扩充模型数量。** 在 7 个方向中，真正共用的底座是 CAD-as-code、明确规格与坐标系、可确定重建、分阶段验证。把每个 demo 直接转换成海量 STL 并不会形成长期壁垒。未来的可销售商品最好配有参数源、机器可读规格、材质假设、说明书、版本与实测证据。

**路线优先级：**

- **P0 / 主线**：Build123d + Codex + 制造质量关卡；以电子外壳为第一个真实使用场景；研究 text-to-cad 技能组织与 CADAM Web UI。
- **P1 / 标准产品库**：Gridfinity 模块、电路板支架、数学机械教具；提供模型源、测量与版本对账。
- **P2 / 差异化探索**：Truchet 多色布料、打印中嵌件、原位装配机构；投入必须建立在固定机型的实验记录之上。

**不建议的捷径：** 将 Three.js/GLB 当工程 CAD 源、直接信任 LLM 所谓“可打印”、把一次切片成功说成真实机械强度合格、混淆不同 HN 评论者的独立工作，或在没有核验授权的情况下打包再分发第三方源代码。

这份报告是面向工程决策的**公开资料研究**，不是实验室验证或法规合规认证。

---

# 附录 A｜可直接交给 Codex 的工程研究任务书

```text
角色：资深 CAD 自动化工程师、FDM 制造与可复现实验负责人。
目标：为现有 3D-worlds 新增独立 CAD-native 生产链。
原则：原有 Three.js/GLB 流水线保持兼容，不得覆盖历史资产 ID。

第一阶段：读取仓库和当前 docs/print-pipeline.md，盘点已有能力；
建立 requirements and gaps 表，不凭空宣称已测试。
第二阶段：创建 Build123d 参数源、最小单位与几何契约，
统一 mm/Z-up；建立 STEP/STL/GLB 派生输出。
第三阶段：新增三套示例：电子外壳、Gridfinity 适配模块、数学刻度盘。
每套都提供 source.py、params.json、输出报告、失败反例和测试。
第四阶段：独立 QA，至少包含 CAD 实体有效性、bbox、孔位、
网格有效性、SHA-256、输出版本和依赖版本。
第五阶段：制作可人工审核的切片准备包，但不自动发起实体打印。
第六阶段：提供网页参数编辑与三视图、源代码、审核报告对照。
第七阶段：执行测试、生成提交记录和 docs/verification.md，
任何没执行的测试必须标记 NOT_RUN，不得写成 PASS。

产出：结构化源码 + 示例模型 + 文档 + CI + 质量证据 + PR。
禁止：下载运行不可信第三方脚本；虚构实物验证；取消人类门禁；
把导出 STL 视为全面可制造证明；无依据改动既有资产许可。
```

# 附录 B｜来源与核查范围

下表 URL 均指向**原始 HN 评论、项目源仓库或正式技术文档**。研究时间为 2026-11-17。页面后来可能更新，因此需要在实际复现时固定 commit、依赖版本与下载哈希。

| 编号 | 来源 | 类型 / 用途 |
|---|---|---|
| R01 | https://news.ycombinator.com/item?id=49984349 | HN 经验，OpenSCAD、Replicad、Gridfinity、嵌件等 |
| R02 | https://github.com/jeffbarr/TruchetTilings | Truchet 原项目及功能说明 |
| R03 | https://news.ycombinator.com/item?id=47772725 | CadQuery / Build123d 旋转计算尺讨论 |
| R04 | https://github.com/gcr/sliderule-bracelet/blob/main/version-3.ipynb | 数学手镯 Notebook |
| R05 | https://replicad.xyz/ | Replicad 产品/技术说明 |
| R06 | https://gridfinity.xyz/specification/ | Gridfinity 规范来源 |
| R07 | https://github.com/sgenoud/replicad/blob/main/packages/replicad-docs/docs/use-as-a-library.md | Replicad JS/WASM/STEP 集成说明 |
| R08 | https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490 | Prusa 暂停嵌件安全操作 |
| R09 | https://news.ycombinator.com/item?id=50067325 | LLM CAD / FreeCAD MCP 经验与难点 |
| R10 | https://news.ycombinator.com/item?id=47913203 | CAD in Codex 方法论 |
| R11 | https://github.com/earthtojake/text-to-cad | 独立 text-to-cad 源码与 README |
| R12 | https://github.com/neka-nat/freecad-mcp | FreeCAD MCP 开源实现 |
| R13 | https://news.ycombinator.com/item?id=45140921 | Adam 项目 HN 开源声明与社区争议 |
| R14 | https://github.com/Adam-CAD/CADAM | CADAM 技术栈、安装、GPL、示例 |
| R15 | https://build123d.readthedocs.io/en/stable/ | Build123d 几何 API 与 STEP/STL |
| R16 | https://github.com/1998x-stack/3D-worlds/blob/main/docs/print-pipeline.md | 现有模型库打印流程边界 |
| R17 | https://github.com/earthtojake/text-to-cad/blob/main/docs/install.md | Codex 插件安装方式 |
| R18 | https://github.com/OrcaSlicer/OrcaSlicer/wiki/cli_mode | OrcaSlicer CLI 与自动化 |
| R19 | https://3mf.io/spec/ | 3MF 格式与国际标准 |
| R20 | https://build123d.readthedocs.io/en/stable/topology_selection.html | B-rep 面/边选择策略 |

**核查边界：** 已阅读并对照上述的公开网页与项目 README/资料；不声称已克隆、构建、测试或直接复现所有外部项目。项目许可证、部署要求、安全行为与输出质量须以实施时锁定的源码版本为准。
