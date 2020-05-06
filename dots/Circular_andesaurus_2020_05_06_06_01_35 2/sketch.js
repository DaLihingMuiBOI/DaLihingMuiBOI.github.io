function preload(){
  img = loadImage('Russian potato.png');
  console.log("Image loaded");
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  beginShape(TRIANGLE_STRIP);
  vertex(0,0);
  vertex(50, 100, 0);
  vertex(100, 150, 250);
  vertex(150, 200, 300);
  endShape();  
  texture(img);
  
  
  orbitControl();
}