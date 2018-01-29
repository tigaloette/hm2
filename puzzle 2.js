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




//c1

function setup() {
  createCanvas(340, 340);
}

function draw() {
  
  var x1 = random(255);
  line(x1, random(height), random(width), random(height))
  stroke(x1, 55, 0)
}




//c2

function setup() {
  createCanvas(340, 340);
}

function draw() {
  
  var x1 = random(255);
  var x2 = random (255);
  if (x1-x2>0) {
    a=x1-x2
  } else{
    a=x2-x1
  }
  line(x1, random(height), x2, random(height))
  stroke(a, 2*a, 3*a)
}
