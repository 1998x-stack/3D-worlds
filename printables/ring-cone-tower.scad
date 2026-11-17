// Ring Cone Tower | 戒指锥形展示座 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([115,85,103],auto=false)
    commercial_form(family="jewelry",variant=2);
