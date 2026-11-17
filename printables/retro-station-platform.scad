// Retro Station Platform | 复古站台微缩场景 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([142,99,87],auto=false)
    commercial_form(family="scenery",variant=5);
