function preload(){
  img = loadImage('toouuccaannn.png');
  console.log("Image loaded");
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  
  orbitControl();
  background(220);
  texture(img);
  circle(100,100,200);
}