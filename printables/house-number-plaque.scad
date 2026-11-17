// House Number Plaque | 房屋门牌号牌 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([145,71,11],auto=false)
    commercial_form(family="gift",variant=3,label="CUSTOM");
