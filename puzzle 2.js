//a

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(width/2, height/2, random(width), random(height));
}




//b

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), width, 0);
}




//c

function setup() {
  createCanvas(340, 340);
}

function draw() {
  
  var x1 = random(255);
  line(x1, random(height), random(width), random(height))
  stroke(x1, 55, 0)
}
