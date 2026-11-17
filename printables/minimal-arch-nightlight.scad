// Minimal Arch Nightlight | 拱形氛围灯罩 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([96,96,124],auto=false)
    commercial_form(family="lantern",variant=5);
