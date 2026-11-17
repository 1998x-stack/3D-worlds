// Studio Tool Bin | 工作室多格工具盒 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([142,99,88],auto=false)
    commercial_form(family="organizer",variant=5);
