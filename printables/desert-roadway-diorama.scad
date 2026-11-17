// Desert Roadway Diorama | 沙漠公路微景观 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([133,90,75],auto=false)
    commercial_form(family="scenery",variant=2);
