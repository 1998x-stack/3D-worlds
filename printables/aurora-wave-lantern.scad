// Aurora Wave Lantern | 极光波纹灯罩 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([87,87,112],auto=false)
    commercial_form(family="lantern",variant=2);
