// Retro Cartridge Rack | 复古游戏卡带架 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([138,103,78],auto=false)
    commercial_form(family="gaming",variant=2);
