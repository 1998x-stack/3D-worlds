// Moon Phase Light Sleeve | 月相镂空灯罩 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([84,84,108],auto=false)
    commercial_form(family="lantern",variant=1);
