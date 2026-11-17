/**
 * Unreviewed print planning from declared catalog bounding dimensions only.
 * Never conflate a dimension fit prediction with slicer/physical verification.
 */
const EXPECTED_PRIORITIES = new Set(['P0','P1','P2']);
export function validatePrintPolicy(policy) {
  if (!policy || typeof policy !== 'object') throw Error('Missing print policy');
  for (const [name, device] of Object.entries(policy.printers ?? {})) {
    if (!/^[a-z0-9-]+$/.test(name) || !Array.isArray(device.build_volume_mm) ||
        device.build_volume_mm.length !== 3 ||
        device.build_volume_mm.some(v => !Number.isFinite(v) || v <= 0)) {
      throw Error('Invalid print profile: ' + name);
    }
  }
  if (!Object.keys(policy.printers ?? {}).length) throw Error('No printer presets');
  for (const [name, rule] of Object.entries(policy.categories ?? {})) {
    if (!EXPECTED_PRIORITIES.has(rule.priority) || !Array.isArray(rule.focus_zh) ||
        !rule.focus_zh.length) throw Error('Invalid category policy: ' + name);
  }
  return true;
}
export function buildPrintPlan(asset, {longestMm = 120, printerId = 'fdm-220'} = {}, policy) {
  validatePrintPolicy(policy);
  const printer = policy.printers[printerId];
  if (!printer) throw Error('Unknown printer preset');
  if (!Number.isFinite(longestMm) || longestMm < 5 || longestMm > 1000) {
    throw Error('Longest edge must be 5–1000 mm');
  }
  const original = asset?.dimensions_m;
  if (!Array.isArray(original) || original.length !== 3 ||
      original.some(value => !Number.isFinite(value) || value <= 0)) {
    throw Error('Asset has no valid declared bounding dimensions');
  }
  // Source is meters/Y-up, tentative slicer envelope is mm/Z-up.
  const meters = [original[0], original[2], original[1]];
  const scale = longestMm / Math.max(...meters);
  const size = meters.map(v => v * scale);
  const bed = printer.build_volume_mm;
  const xy = size[0] <= bed[0] && size[1] <= bed[1];
  const xyRotated = size[1] <= bed[0] && size[0] <= bed[1];
  const bedFit = (xy || xyRotated) && size[2] <= bed[2];
  const category = policy.categories[asset.category] || {
    priority: 'P2', goal_zh:'未归类模型', focus_zh:['人工分类与制造审核']
  };
  return {
    priority:category.priority, goal_zh:category.goal_zh, focus_zh:[...category.focus_zh],
    status:'not_audited', printed:false, manufacturing_certified:false,
    printer_id:printerId,printer_label_zh:printer.label_zh,
    process:printer.process,materials:[...printer.materials],
    size_mm:size.map(v=>Math.round(v*100)/100),
    bed_mm:[...bed],bed_fit_estimate:bedFit,
    rotate_xy_estimate:!xy && xyRotated && size[2] <= bed[2],
    scale_relative_to_catalog_meters:scale,
    caveat_zh:'仅根据目录申报的包围盒估算。未测量实际网格厚度、连通性、支撑、孔位精度或材料强度；需先完成几何审核和切片检查。'
  };
}
