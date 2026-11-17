// Harbor Cargo Diorama | 港口集装箱微景观 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([130,87,71],auto=false)
    commercial_form(family="scenery",variant=1);
