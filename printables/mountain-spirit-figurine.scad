// Mountain Spirit Figurine | 山灵原创雕像 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([104,92,141],auto=false)
    commercial_form(family="figurine",variant=5);
