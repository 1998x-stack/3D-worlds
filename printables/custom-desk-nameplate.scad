// Custom Desk Nameplate | 定制桌面姓名牌 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([135,67,9],auto=false)
    commercial_form(family="gift",variant=1,label="CUSTOM");
