// Forest Shadow Lantern | 森林剪影灯罩 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([93,93,120],auto=false)
    commercial_form(family="lantern",variant=4);
