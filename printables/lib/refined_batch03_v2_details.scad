// SPDX-License-Identifier: MIT
// Overseas batch 03 second-pass refinement: asset-specific, connected reliefs.
// Millimetres, Z-up. No global rescale or implicit manufacturing certification.
use <refined_batch03_forms.scad>
b4_eps=0.06;
module b4_line(a,b,r=1.5){hull(){translate(a)sphere(r=r,$fn=16);translate(b)sphere(r=r,$fn=16);}}
module b4_disc(r,h=1){cylinder(r=r,h=h,$fn=40);}
module b4_rim(ro,ri,h){difference(){cylinder(r=ro,h=h,$fn=72);translate([0,0,-b4_eps])cylinder(r=ri,h=h+2*b4_eps,$fn=72);}}
module b4_star(r=5){polygon([for(i=[0:9]) let(a=i*36,rr=i%2?r*.48:r)[rr*cos(a),rr*sin(a)]]);}
module b4_raised_detail(slug,w,d,h,label){
 if(slug=="lunar-fox-bust") {
   // Ear inset spines, swept cheek marks and front chest medallion.
   for(s=[-1,1]){
     b4_line([s*17,-6,104],[s*17,-5,125],1.8);
     b4_line([s*8,-17,81],[s*19,-13,79],1.9);
     translate([s*15,-21,70])sphere(r=2.5,$fn=20);
   }
   translate([0,-17,45])rotate([90,0,0])cylinder(r=7,h=4,center=true,$fn=36);
   translate([0,-20,45])rotate([90,0,0])cylinder(r=3.2,h=2,center=true,$fn=32);
 }
 else if(slug=="garden-robot-companion"){
   for(s=[-1,1]){
     translate([s*13,-25,94])rotate([90,0,0])b4_disc(6.2,2);
     translate([s*12,-22,58])cube([3,3,17],center=true);
     translate([s*29,-13,20])sphere(r=3,$fn=20);
   }
   for(i=[-2:2])translate([i*7,-22,64])cube([3,4,6],center=true);
   translate([0,0,111])b4_rim(4.2,2.2,3);
 }
 else if(slug=="mountain-spirit-figurine"){
   for(s=[-1,1]){
     b4_line([s*8,-17,92],[s*19,-13,97],2.4);
     b4_line([s*17,-14,40],[s*25,-10,48],2.9);
     translate([s*15,-21,65])sphere(r=4,$fn=18);
   }
   for(i=[-2:2])b4_line([i*6,-20,31],[i*7,-19,39],1.65);
 }
 else if(slug=="harbor-cargo-diorama"){
   for(i=[0:2]) {
     x=-42+i*42;
     for(j=[-2:2])translate([x+j*6,-33.2,18])cube([1.35,3,19],center=true);
     for(s=[-1,1])translate([x+s*12,-34.1,22])cube([1.5,3,8],center=true);
   }
   translate([0,26,25])b4_rim(5.2,2.2,3);
   for(x=[-51,51])translate([x,29,48])cube([8,8,3],center=true);
 }
 else if(slug=="desert-roadway-diorama"){
   for(i=[-4:4]){
     translate([i*13,11,9])cube([7,1.6,1.4],center=true);
     translate([i*13,-15,9])cube([7,1.6,1.4],center=true);
   }
   for(i=[0:4])translate([-40+i*19,32,6])scale([1.8,1.2,.9])sphere(r=3,$fn=16);
   for(s=[-1,1])translate([s*39,20,37])sphere(r=3.4,$fn=16);
 }
 else if(slug=="urban-street-corner"){
   for(x=[-58,-36,-14]){
     translate([x,-11.5,35])cube([13,3,2],center=true);
     translate([x,-11.5,15])cube([13,3,2],center=true);
   }
   for(i=[0:4])translate([-59+i*12,-11,51])cube([2.5,5,4],center=true);
   for(x=[-52:17:50])translate([x,-35,6])cube([1.6,8,2],center=true);
 }
 else if(slug=="collectible-display-plinth"){
   for(z=[14,46,59])translate([0,0,z])b4_rim(z==59?39:29,z==59?37:27,2.1);
   for(i=[0:11])rotate([0,0,i*30])translate([27,0,35])cube([3,5,7],center=true);
   for(i=[0:7])rotate([0,0,i*45])translate([29,0,80])cylinder(r=2,h=3,$fn=20);
 }
 else if(slug=="eyewear-display-stand"){
   for(s=[-1,1]){
     b4_line([s*31,-2,56],[s*45,14,63],2.5);
     translate([s*40,-2,13])cube([12,16,2],center=true);
     translate([s*16,-3,78])sphere(r=4,$fn=20);
   }
   translate([0,-4,91])sphere(r=5,$fn=24);
   for(i=[-2:2])translate([i*13,-25,7])cube([5,5,2],center=true);
 }
 else if(slug=="retro-cartridge-rack"){
   for(i=[0:5]){
     x=-51+i*20.4;
     translate([x-7,-42,15])cube([11,3,2],center=true);
     translate([x-7,42,h-18])cube([9,4,5],center=true);
     translate([x-7,-37,7])cube([11,7,2],center=true);
   }
   translate([0,46,h-9])cube([w-24,3,2.5],center=true);
 }
 else if(slug=="bracelet-display-arch"){
   for(i=[0:11]){
     x=-35+i*70/11;
     z=17+(h-24)*(1-pow(x/42,2));
     translate([x,0,z-3])rotate([90,0,0])cylinder(r=3.6,h=3,center=true,$fn=20);
   }
   for(s=[-1,1])translate([s*42,0,15])b4_rim(7.2,4.8,3);
 }
 else if(slug=="pendant-sorting-tray"){
   for(x=[-38,0,38],y=[-25,25]){
     translate([x,y,4.5])cylinder(r=7,h=1.9,$fn=32);
     translate([x,y,5.8])cylinder(r=2.8,h=1.5,$fn=20);
   }
   for(x=[-43:17.2:43])translate([x,36.5,90])sphere(r=3,$fn=18);
 }
 else if(slug=="modular-jewelry-plinth"){
   for(x=[-35,0,36]){
     z=x< -10?30:x>10?68:48;
     translate([x,0,z+4])b4_rim(9.5,7.6,2.4);
     translate([x,0,z+15])cylinder(r1=3.4,r2=1.8,h=5,$fn=24);
   }
   for(i=[-2:2])translate([i*19,43,10])cube([8,5,3],center=true);
 }
 else if(slug=="bonsai-display-pot"){
   for(i=[0:11])rotate([0,0,i*30])translate([w/2-6,0,h-9])cylinder(r=2.6,h=7,$fn=16);
   translate([0,0,h-2.5])b4_rim(w/2-1,w/2-5,2.3);
   for(i=[0:7])rotate([0,0,i*45])translate([w/2-11,0,8])sphere(r=3,$fn=16);
 }
 else if(slug=="desktop-herb-planter"){
   for(i=[-1:1]){
     translate([i*33,-56.5,32])cube([25,5,17],center=true);
     translate([i*33,-58,35])cube([13,2,2],center=true);
   }
   for(x=[-42,-14,14,42])translate([x,d/2-6,83])sphere(r=3.1,$fn=18);
   for(i=[-3:3])translate([i*15,-52,15])cube([2.3,8,11],center=true);
 }
 else if(slug=="wedding-place-card"){
   for(s=[-1,1]){
     translate([s*(w/2-16),-16,3.75])linear_extrude(height=1.4)b4_star(5);
     translate([s*(w/2-17),13,4])cube([6,6,2],center=true);
   }
   for(i=[-3:3])translate([i*15,d/2-16,7])cube([1.5,5,2],center=true);
 }
 else if(slug=="anniversary-message-plaque"){
   for(s=[-1,1]){
     translate([s*(w/2-23),0,8])linear_extrude(height=2.2)b4_star(5);
     for(y=[-22,22])translate([s*(w/2-14),y,8])cylinder(r=2.8,h=3,$fn=18);
   }
   for(i=[-3:3])translate([i*15,-d/2+5,8])cube([6,2.5,2],center=true);
 }
 else if(slug=="monogram-desk-coaster"){
   for(s=[-1,1]){
     for(i=[0:7])translate([s*39,0,8.7])rotate([0,0,i*45])translate([24,0,0])sphere(r=1.2,$fn=12);
     translate([s*65,0,8.5])b4_rim(4,2,2);
   }
   for(i=[-3:3])translate([i*13,-d/2+5,9])cube([5,2,2],center=true);
 }
 else if(slug=="fantasy-crest-badge"){
   for(s=[-1,1]){
     b4_line([s*19,-11,6],[s*12,-21,6],2);
     translate([s*19,1,6])linear_extrude(height=2)b4_star(3);
   }
   for(i=[-2:2])translate([i*11,26,6])cube([4,3,2.5],center=true);
 }
 else if(slug=="space-explorer-insignia"){
   for(i=[0:7])rotate([0,0,i*45]){
     translate([25,0,6])sphere(r=2.9,$fn=20);
     translate([31,0,6])cube([3,2.4,2.5],center=true);
   }
   translate([0,0,6])b4_rim(17,15,2.4);
 }
 else if(slug=="mythic-rune-emblem"){
   for(i=[0:7])rotate([0,0,i*45]){
     translate([34,0,7])linear_extrude(height=2.3)b4_star(3.2);
     translate([27,0,9])cube([4,2.2,3],center=true);
   }
   translate([0,0,7])b4_rim(15,12,2.1);
 }
}
module b4_cut_detail(slug,w,d,h){
 if(slug=="collectible-display-plinth")
   translate([0,0,h-2.5])cylinder(r=19,h=3,$fn=72); // shallow top seat
 else if(slug=="bonsai-display-pot")
   for(i=[0:3])rotate([0,0,i*90])translate([15,0,-b4_eps])cylinder(r=3.3,h=7,$fn=20);
 else if(slug=="desktop-herb-planter")
   for(x=[-25,0,25])translate([x,-56,32])rotate([90,0,0])cylinder(r=2,h=9,center=true,$fn=24);
}
module refined_batch03_v2_form(slug="",family="",variant=0,w=90,d=90,h=90,label="CUSTOM"){
 assert(w>40 && d>40 && h>8,"Invalid refinement dimensions");
 difference(){
   union(){refined_batch03_form(slug=slug,family=family,variant=variant,w=w,d=d,h=h,label=label);
     b4_raised_detail(slug,w,d,h,label);}
   b4_cut_detail(slug,w,d,h);
 }
}
