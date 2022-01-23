function setup() {
    createCanvas(500,500);
    background(175);
}

function draw () {
    fill(255,0,0);
    line(mouseX,mouseY,pmouseX,pmouseY);
}

function mouseClicked() {
    fill(0,255,0);
    noStroke();
    ellipse(mouseX,mouseY,25,25);
}