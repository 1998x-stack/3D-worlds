// Collectible Display Plinth | 收藏品展示底座 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([110,100,85],auto=false)
    commercial_form(family="display",variant=1);
