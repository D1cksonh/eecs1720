//This uses p5.js eidtor to run this, so open p5.js and paste this code in to run this

var moveX = 600;
var moveX2 = 1000;
var moveX3 = 1500;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(175);
  walls();
  player();
}

function walls() {
  fill(255,0,0);
  noStroke();
  rect(moveX,0,50,300)
  rect(moveX,400,50,300);
  
  rect(moveX2,0,50,100);
  rect(moveX2,250,50,400);
  
  rect(moveX3,0,50,300);
  rect(moveX3,400,50,300);
  
  moveX -= 5;
  moveX2 -= 5;
  moveX3 -= 5;
  
  if(moveX <= 0){
    moveX = 1500;
  }
  
   if(moveX2 <= 0){
    moveX2 = 1500;
  }
  
   if(moveX3 <= 0){
    moveX3 = 1500;
  }
}

function player() {
  fill(0,255,0);
  strokeWeight(5);
  ellipse(50,mouseY,50,50);
}