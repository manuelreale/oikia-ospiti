function preload(){
  recensie = loadImage('./recensie.png');
  // put preload code here
}

function setup() {

  // put setup code here
}

function draw() {
  createCanvas(windowWidth-20,790);
  imageMode(CENTER)
  image(recensie, windowWidth/2, windowWidth, windowWidth, windowWidth*2);
  // put drawing code here
}
