// Urban Street Corner | 城市街角微缩场景 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([139,96,83],auto=false)
    commercial_form(family="scenery",variant=4);
