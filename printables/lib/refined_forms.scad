// SPDX-License-Identifier: MIT
// 3D Worlds | Print-commerce detail pass 01: dimensional CAD in mm / Z-up.
// Source geometry, not a claim of watertight, fit-tested or approved hardware.
// Avoid global resizing: dimensions, walls, ports and clearances remain explicit.
$fn = 64;
EPS = 0.03;

module rounded_block(w, d, h, corner=5) {
    hull() for (x=[-w/2+corner,w/2-corner], y=[-d/2+corner,d/2-corner])
        translate([x,y,0]) cylinder(r=corner,h=h,$fn=24);
}
module rounded_frame(w,d,h,wall=3.2,bottom=4,corner=6) {
    difference() {
        rounded_block(w,d,h,corner);
        translate([0,0,bottom]) rounded_block(w-2*wall,d-2*wall,h-bottom+EPS, max(1,corner-wall));
    }
}
module lantern_shell(w,h,wall=3.2) {
    difference() {
        cylinder(d=w,h=h,$fn=120);
        translate([0,0,-EPS]) cylinder(d=w-2*wall,h=h+2*EPS,$fn=120);
    }
}
module moon_window(radius,z,angle,phase,size=5.3) {
    rotate([0,0,angle]) translate([0,-radius,z]) rotate([90,0,0])
        linear_extrude(height=12,center=true,convexity=6)
            if (phase==0) circle(r=size,$fn=40);
            else difference() {
                circle(r=size,$fn=40);
                translate([size*(phase==1?0.42:0.72),0]) circle(r=size*0.9,$fn=40);
            }
}
module refined_moon_phase_light_sleeve(w=84,d=84,h=108,wall=3.2) {
    assert(abs(w-d)<0.01 && wall>=2.4 && w>60);
    r=w/2;
    difference() {
        union() {
            lantern_shell(w-2.4,h-1.8,wall);
            for (z=[1.8,h-3.2]) translate([0,0,z])
                difference() { cylinder(d=w,h=3.2,$fn=120);
                    translate([0,0,-EPS]) cylinder(d=w-2*wall,h=3.3+2*EPS,$fn=120); }
        }
        for (tier=[0:2],col=[0:7])
            moon_window(r-1.3,24+tier*27,col*45+tier*15,(col+tier)%3,5.2);
        // Paired pinholes preserve solid ligaments between lunar openings.
        for (angle=[22.5:45:337.5])
            moon_window(r-1.3,14,angle,0,1.6);
    }
}
module refined_aurora_wave_lantern(w=87,d=87,h=112,wall=3.2) {
    assert(abs(w-d)<0.01 && wall>=2.4);
    r=w/2-1.6;
    difference() {
        union() {
            lantern_shell(w-3.2,h-1.8,wall);
            for (angle=[0:45:315]) rotate([0,0,angle])
                linear_extrude(height=h-6,twist=145,slices=90,convexity=8)
                    translate([r-1.1,0]) circle(r=2.3,$fn=14);
            for(z=[1.2,h-3.6]) translate([0,0,z])
                difference() { cylinder(d=w,h=3.6,$fn=120);
                    translate([0,0,-EPS]) cylinder(d=w-2*wall,h=3.7+2*EPS,$fn=120); }
        }
        // Through vents are below the flow ribs, not painted-on decals.
        for(a=[22.5:45:337.5],z=[23,54,85])
            rotate([0,0,a]) translate([0,-r,z]) rotate([90,0,0])
                cylinder(r=2.4,h=15,center=true,$fn=24);
    }
}
module refined_modular_pencil_caddy(w=130,d=87,h=72,wall=3.2,bottom=4.2) {
    assert(w>=120 && d>=80 && h>=62 && bottom>=3);
    difference() {
        rounded_block(w,d,h,7);
        for (x=[-39,0,39]) translate([x,0,bottom])
            cylinder(r=17.5,h=h-bottom+1,$fn=72);
    }
}
module refined_cable_sort_desk_hub(w=133,d=90,h=76) {
    assert(w>110 && d>70 && h>60);
    difference() {
        union() {
            rounded_block(w,d,8,6);
            translate([0,d/2-12,8]) rounded_block(w-8,13,h-8,3);
            for(x=[-48,-24,0,24,48]) translate([x,-d/2+19,8])
                rounded_block(5.4,28,13,2);
        }
        // Open-top cable comb, five individually sized channels.
        for(i=[0:4]) {
            x=-48+i*24; r=3.8+i%3*0.8;
            translate([x-r,d/2-21,h-28]) cube([2*r,22,32]);
            translate([x,d/2-10,h-28]) rotate([90,0,0])
                cylinder(r=r,h=22,center=true,$fn=32);
        }
        translate([0,-d/2+23,-EPS]) rounded_block(20,9,8+2*EPS,3);
    }
}
module refined_paintbrush_workshop_rack(w=136,d=93,h=80) {
    assert(w>120 && d>80 && h>70);
    difference() {
        union() {
            rounded_block(w,d,6,7);
            translate([0,0,h-8]) rounded_block(w-8,d-8,8,6);
            for(x=[-w/2+12,w/2-12], y=[-d/2+12,d/2-12])
                translate([x,y,5.8]) cylinder(r=5.4,h=h-12.8,$fn=32);
            // Low catch channels keep drops from running off the bottom plate.
            for (x=[-36,0,36]) translate([x,0,5.6]) cube([3,d-21,2],center=true);
        }
        for(ix=[0:3],iy=[0:1]) {
            x=-39+ix*26; y=-17+iy*34;
            translate([x,y,h-9])
                cylinder(r=ix==0?3.5:(ix==1?4.6:(ix==2?5.8:6.5)),h=11,$fn=36);
        }
    }
}
module refined_studio_tool_bin(w=142,d=99,h=88,wall=3.5,bottom=4.5) {
    assert(w>130 && d>90 && wall>=3 && bottom>=4);
    union() {
        rounded_frame(w,d,h,wall,bottom,8);
        for (x=[-w/6,w/6]) translate([x-wall/2,-(d-2*wall)/2,bottom]) cube([wall,d-2*wall,h-bottom-4]);
        translate([-(w-2*wall)/2,-wall/2,bottom]) cube([w-2*wall,wall,h-bottom-4]);
        // A raised front label rail, kept outside the six cavities.
        translate([0,-d/2+0.7,h-13]) cube([w-20,1.2,7],center=true);
    }
}
module refined_trading_card_display(w=116,d=106,h=93) {
    assert(w>=104 && d>=92 && h>=84);
    rounded_block(w,d,7,7);
    // The rear plate tips backwards 14 degrees; the front lip is continuous.
    translate([0,12,7]) rotate([-14,0,0])
        translate([-(w-28)/2,0,0]) cube([w-28,5,h-4.3]);
    translate([0,-d/2+18,7]) rounded_block(w-16,8,14,2.5);
    for(x=[-(w-28)/2+6,(w-28)/2-6]) translate([x,13,7]) rotate([-14,0,0])
        cube([2.6,7,h-17]);
    for(x=[-w/2+18,w/2-18])
        translate([x,-d/2+9,7]) cylinder(r=4,h=2,$fn=30);
}
module refined_handheld_console_stand(w=147,d=112,h=90) {
    assert(w>=135 && d>=100 && h>=80);
    difference() {
        rounded_block(w,d,7.5,8);
        // Rear-center service channel / charging cable passage.
        translate([0,-d/2+30,-EPS]) rounded_block(20,12,7.5+2*EPS,3);
    }
    for(x=[-w/2+22,w/2-22]) {
        translate([x,4,7.4]) rotate([-20,0,0])
            translate([-6,-4,0]) cube([12,8,h-3.6]);
        translate([x,-d/2+19,7.3]) rounded_block(18,12,17,3);
        translate([x,-d/2+22,23]) rotate([45,0,0]) cube([16,5,5],center=true);
    }
    translate([-(w-42)/2,d/2-16,7]) cube([w-42,7,7]);
}
module refined_ribbed_succulent_pot(w=107,d=107,h=100,wall=3.5,bottom=5) {
    assert(abs(w-d)<0.01 && wall>=3 && bottom>=4);
    outer=w/2-2.7;
    difference() {
        union() {
            cylinder(r=outer,h=h-2.4,$fn=120);
            for (angle=[0:15:345]) rotate([0,0,angle])
                translate([outer-0.9,0,3]) cylinder(r=2.2,h=h-8,$fn=18);
            translate([0,0,h-5]) cylinder(r=outer+2.7,h=5,$fn=120);
            translate([0,0,0]) cylinder(r=outer-2,h=4,$fn=120);
        }
        translate([0,0,bottom]) cylinder(r=outer-wall,h=h+4,$fn=120);
        translate([0,0,-EPS]) cylinder(r=4.2,h=bottom+2*EPS,$fn=36);
        for(a=[0:90:270]) rotate([0,0,a])
            translate([16,0,-EPS]) cylinder(r=2.3,h=bottom+2*EPS,$fn=24);
    }
}
module refined_propagation_vial_holder(w=113,d=113,h=108) {
    assert(w>=100 && d>=100 && h>=98);
    difference() {
        union() {
            rounded_block(w,d,7,9);
            translate([0,0,h-9]) rounded_block(w-8,d-8,9,7);
            for(x=[-w/2+14,w/2-14],y=[-d/2+14,d/2-14])
                translate([x,y,6.8]) cylinder(r=6,h=h-15.6,$fn=40);
            for(xy=[[0,0],[-27,0],[27,0],[0,-27],[0,27]])
                translate([xy[0],xy[1],h-12]) cylinder(r=12,h=3.2,$fn=48);
        }
        for(xy=[[0,0],[-27,0],[27,0],[0,-27],[0,27]])
            translate([xy[0],xy[1],h-12.2]) cylinder(r=8.6,h=14,$fn=48);
        // Drip recesses (non-through) mark the tube landing zones.
        for(xy=[[0,0],[-27,0],[27,0],[0,-27],[0,27]])
            translate([xy[0],xy[1],6]) cylinder(r=7.2,h=1.05,$fn=48);
    }
}
module refined_form(slug="",family="",variant=0,w=100,d=100,h=100) {
    if(slug=="moon-phase-light-sleeve") refined_moon_phase_light_sleeve(w,d,h);
    else if(slug=="aurora-wave-lantern") refined_aurora_wave_lantern(w,d,h);
    else if(slug=="modular-pencil-caddy") refined_modular_pencil_caddy(w,d,h);
    else if(slug=="cable-sort-desk-hub") refined_cable_sort_desk_hub(w,d,h);
    else if(slug=="paintbrush-workshop-rack") refined_paintbrush_workshop_rack(w,d,h);
    else if(slug=="studio-tool-bin") refined_studio_tool_bin(w,d,h);
    else if(slug=="trading-card-display") refined_trading_card_display(w,d,h);
    else if(slug=="handheld-console-stand") refined_handheld_console_stand(w,d,h);
    else if(slug=="ribbed-succulent-pot") refined_ribbed_succulent_pot(w,d,h);
    else if(slug=="propagation-vial-holder") refined_propagation_vial_holder(w,d,h);
    else assert(false,str("Unknown refined SKU: ",slug));
}
