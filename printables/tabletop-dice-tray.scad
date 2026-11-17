// Tabletop Dice Tray | 桌游骰子托盘 | original parametric CAD prototype
// CAD uses millimeters/Z-up; target dimensions [width,depth,height] mm.
// Product hypothesis only; full slicer/manifold and real-print checks required.
use <lib/commerce_forms.scad>
resize([141,106,82],auto=false)
    commercial_form(family="gaming",variant=3);
