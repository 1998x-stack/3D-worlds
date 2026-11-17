// Geo Cactus Planter | 几何仙人掌花盆 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([110,110,104],auto=false)
    commercial_form(family="planter",variant=2);
