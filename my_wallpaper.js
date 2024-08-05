//your parameter variables go here!
let triangleSidesX = 20; 
let triangleSidesY = 153; // 100 or 90 best results.
let triangleColour = 1;
let EllipseBG = true
let eyeHeight = 29 //closes and opens eye.
let eyeX = 105 //moves iris around - (95 - 105) best results.
let drawIrisEye = 2
let DrawBG = 2

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 250;
  pWallpaper.grid_settings.cell_height = 108;
  pWallpaper.grid_settings.row_offset  = 125;
}

function wallpaper_background() {
background(112, 9, 9)

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//drawEye();

//drawIris();

if (DrawBG > 1){
  beginShape();
  noStroke(0);
  fill(138, 23, 23);
  vertex(0, 100,);
  vertex(100, 50,);
  vertex(90, 190);
  vertex(190, 190,)
 endShape(CLOSE);
}

if (drawIrisEye > 1){ // this draws the eye of Sauron
  fill(143, 163, 196)
  strokeWeight(6)
  stroke(193, 223, 245)
  ellipse(100,45,50,eyeHeight)
 
  fill(207, 145, 145)
  strokeWeight(2)
  stroke(207, 145, 145)
  ellipse(eyeX,45,20,eyeHeight)

}

if(eyeHeight < 30){
  DrawEyelashes = false
}
else
{DrawEyelashes();}


if(triangleSidesY < 90){
  EllipseBG = true
}
else
{EllipseBG = false}

if(EllipseBG == true){ // sun element in background
 strokeWeight(3)
 stroke(84,132,164)
  fill(148,189,221,255)
  ellipse(100, 115, 100, 100);

}

push();
translate(0, 50);

  DrawWing();  // this creates the wing on the left
scale(-1,1); // mirrors the wing
translate(-200,0); // translates it
  DrawWing(); // this creates the wing on the right

if(triangleColour == 1){
  strokeWeight(4)
  stroke(193, 223, 245)
  fill(122, 165, 204)
}
else if(triangleColour == 2){
  //fill 2
}
else{
  fill(101, 171, 105);
}

translate(100,20);
triangle(0, 50, triangleSidesX, triangleSidesY, -triangleSidesX, triangleSidesY);
scale(1,-1);

translate(0,-90);
triangle(0, 50, triangleSidesX, triangleSidesY, -triangleSidesX, triangleSidesY);
pop();

}

function DrawEyelashes(){
  strokeWeight(2)
  stroke(197, 229, 252)
  fill(197, 229, 252)
triangle(100, 5, 110, 24, 90, 24)
triangle(75, 10, 85, 24, 73, 30)
triangle(124, 10, 127, 30, 114, 24)
}

 function DrawWing(){ // this is the function for a wing
  strokeWeight(5);
  stroke(188, 212, 230);
  fill(143, 163, 196)
  
  beginShape();
  vertex(5, 20,);
  vertex(10, 45);
  vertex(68, 45);
  vertex(66, 35)

 endShape(CLOSE);

 beginShape();
 vertex(13, 62,);
 vertex(23, 88,);
 vertex(73, 65,);
 vertex(70, 55,)

endShape(CLOSE);

beginShape();
vertex(35, 105,);
vertex(65, 120,);
vertex(82, 85);
vertex(77, 77,)

endShape(CLOSE);

beginShape();
vertex(66, 35,);
vertex(80, 39,);
vertex(90, 73);
vertex(80, 90,)
endShape(CLOSE);
 }


 
//function drawIris (x,y){
  //fill(235, 102, 45)
  //strokeWeight(1)
  //ellipse(100,45,20,eyeHeight)
//}

//function drawEye (x,y){ // this is the function for the eye
  //fill(214, 84, 58)
//strokeWeight(1)
//stroke(161, 25, 22)
//ellipse(100,45,50,eyeHeight)

//}
