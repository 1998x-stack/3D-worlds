// Lunar Fox Bust | 月狐半身像 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([98,86,133],auto=false)
    commercial_form(family="figurine",variant=3);
