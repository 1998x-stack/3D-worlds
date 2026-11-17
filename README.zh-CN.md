# 3D Worlds｜开放 3D 资产基础设施

**[English](README.md) · [在线模型库](https://1998x-stack.github.io/3D-worlds/) · [打印工作台](https://1998x-stack.github.io/3D-worlds/#print-workflow) · [CI 状态](https://github.com/1998x-stack/3D-worlds/actions/workflows/pages.yml)**

3D Worlds 将 **535 个可编辑程序化 Three.js 模型、14 个类别、GLB 游戏资产、SQLite/MCP 和 STL/3MF 制造候选文件**整合到同一开源项目。网页负责交互式预览与未审核 STL 草稿；本地 Python 负责基础网格审查、3MF 打包、分件和报告。

> **关键：** P0/P1/P2 是工程任务优先级，不是可打印性评分；通过 CLI 几何审核也不等于切片或实体打印成功。当前模型默认未经制造验证。

## 海外3D打印商品专项 · v1.3

新增 **50 个原创实体商品概念模型**，覆盖10个细分系列。每个模型同时有
Three.js 预览与 OpenSCAD 参数化 CAD（`printables/`），支持批量导出
STL/3MF。海外市场偏好与50个候选完整目录见
[专项研究](docs/print-commerce-v13.md)；具体导出命令见
[可编辑CAD说明](printables/README.md)。

**注意：** 目前为可编辑设计候选，未经实际打印及产品安全认证，
不得将平台品类销售数据当作本仓库单个模型的销量。

## 能力矩阵

| 优先级 | 类型 | 已实现 | 仍需人工审核 |
|---|---|---|---|
| P0 | 装饰、家具缩模、简单道具 | 米→毫米、Y-up→Z-up、封闭网格/法线/体积审核、平台尺寸检查 | 真实壁厚、底面接触、切片层路径 |
| P1 | 人物、自然场景、科幻道具、建筑、载具、城市设施 | 独立零件 STL、多对象 3MF、可选布尔融合、悬垂面/包围盒交叠提示 | 支撑、连接、装配公差及分件布局 |
| P2 | 电子外壳、工具、功能零件 | 打印机/材料参考预设、设计间隙登记和未检查清单 | 参数化孔位、实际壁厚、材料收缩、应力/疲劳试验 |

## 快速运行

~~~bash
git clone https://github.com/1998x-stack/3D-worlds.git
cd 3D-worlds
npm install
npm run dev
~~~

浏览器中选中模型，输入目标最长边和通用打印平台，可看到**仅根据目录申报尺寸估算**的包围盒、P0/P1/P2 类别提示，并下载**未审核 STL 草稿**。网页不执行服务端 Python、自动修复和切片。

### 生成真正经过基础拓扑审核的打印候选文件

~~~bash
python3 -m pip install -r requirements-print.txt
npx playwright install chromium
node scripts/render_assets.mjs --id furniture.chair.linen-001

# P0：生成 STL/3MF 候选和 JSON 报告
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 --longest-mm 120 --profile fdm-220

# P1：保留装配版 3MF，并拆出独立零件 STL
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 --longest-mm 120 \
  --profile fdm-220 --mode separated

# P2：登记材料与预期配合间隙供 CAD 人工核查
python3 scripts/export_print.py \
  --asset-id furniture.chair.linen-001 --longest-mm 120 \
  --profile fdm-220 --material PETG --clearance-mm 0.25
~~~

**注意：** `--clearance-mm` 不会修改模型几何，不保证实际间隙；原始 GLB 不能使用为游戏简化的 LOD1/LOD2。CLI 通过基础拓扑审核后会输出 STL、3MF、SHA-256 证据报告；不合格时阻断输出并生成 JSON 失败报告。

### 批量盘点模型

~~~bash
python3 scripts/audit_print_catalog.py --metadata-only
python3 scripts/audit_print_catalog.py --limit 10 --longest-mm 120
python3 scripts/audit_print_catalog.py --category furniture --strict
~~~

状态包括 `not_audited`、`missing_source`、`blocked`、`audit_error` 和 `geometry_pass_manual_review_required`，不会自动标注“已经实物打印成功”。

## 验证

~~~bash
npm run test:print
python3 -m unittest discover -s tests -v
python3 scripts/catalog.py validate
node scripts/validate_models.mjs
npm run generate:assets && npm run verify:assets && npm run build
npm run test:gallery
~~~

## 开发导航

- [3D 打印完整流水线](docs/print-pipeline.md)
- [P0/P1/P2 制造工程检查规范](docs/print-engineering.md)
- [类别/平台预设的机器可读 JSON](catalog/print_policy.json)
- [项目总体架构](docs/architecture.md)
- [模型创建 Agent Skill](.codex/skills/threejs-model-builder/SKILL.md)
- [MCP 接口](docs/mcp-contract.md)
- [历次模型批次归档](docs/release-history.md)
- [贡献指南](CONTRIBUTING.md)

3D Worlds 核心代码采用 [MIT 许可](LICENSE)，但外部模型素材须逐件审查权利来源。设计文档借鉴 FreeCAD、PrusaSlicer、OrcaSlicer 的开源项目表达方式，项目并非这些软件的官方附属品。
