// Paintbrush Workshop Rack | 手工画笔整理架 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([136,93,80],auto=false)
    commercial_form(family="organizer",variant=3);
