// Eyewear Display Stand | 眼镜展示托架 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([122,112,101],auto=false)
    commercial_form(family="display",variant=5);
