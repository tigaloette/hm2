function DrawTenRandomLines () {
  line(random(width), random(height), random(width), random(height))
}
var number = 0;
while (number < 10) {
  DrawTenRandomLines();
  number = number + 1;
}
