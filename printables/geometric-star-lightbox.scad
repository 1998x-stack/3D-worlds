// Geometric Star Lightbox | 几何星光灯罩 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([90,90,116],auto=false)
    commercial_form(family="lantern",variant=3);
