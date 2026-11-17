// Space Explorer Insignia | 太空探索徽记 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([81,81,11],auto=false)
    commercial_form(family="cosplay",variant=3);
