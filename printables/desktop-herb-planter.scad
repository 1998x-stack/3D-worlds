// Desktop Herb Planter | 桌面香草盆 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([119,119,116],auto=false)
    commercial_form(family="planter",variant=5);
