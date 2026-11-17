// Wedding Place Card | 婚礼席位姓名牌 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([140,69,10],auto=false)
    commercial_form(family="gift",variant=2,label="CUSTOM");
