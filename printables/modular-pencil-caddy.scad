// Modular Pencil Caddy | 模块化笔筒 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([130,87,72],auto=false)
    commercial_form(family="organizer",variant=1);
