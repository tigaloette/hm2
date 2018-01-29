background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(20), 255, 255);
  ellipse(random(width), random(height), random(20, 40));
}




//extrachallenge

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(20), 255, 255);
  beginShape();
vertex(random(255), random(255));
vertex(random(255), random(255));
vertex(random(255), random(255));
endShape(CLOSE);
}
