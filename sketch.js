let img;
function preload() {
  img = loadImage('glass.svg');
}

function setup() {
  var canvas = createCanvas(200, 200, WEBGL);
  canvas.parent("glass-box");

}

function draw() {
  background(0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  //pass image as texture
  texture(img);
  box(width / 2.5);
  strokeWeight(0);
}
