// Trading Card Display | 收藏卡片展示架 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([116,106,93],auto=false)
    commercial_form(family="display",variant=3);
