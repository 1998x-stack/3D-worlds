// Modular Jewelry Plinth | 模块化珠宝陈列台 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([124,94,115],auto=false)
    commercial_form(family="jewelry",variant=5);
