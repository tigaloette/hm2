//pt 1

background(0);
fill(250,220,30)
noStroke()
quad(10, 10, 150, 10, 150, 60, 10, 60);
fill(255)
noStroke()
quad(10, 70, 110, 70, 110, 170, 10, 170);
fill(255, 155, 0)
noStroke()
quad(10, 180, 60, 180, 60, 330, 10, 330);
fill(0, 155, 0)
noStroke()
quad(120, 70, 330, 70, 330, 280, 120, 280);
fill(255, 155, 0)
noStroke()
quad(160, 10, 210, 10, 210, 60, 160, 60);
fill(255)
noStroke()
quad(220, 10, 330, 10, 330, 60, 220, 60);
fill(250,220,30)
noStroke()
quad(70, 180, 110, 180, 110, 220, 70, 220);
fill(255)
noStroke()
quad(70, 230, 110, 230, 110, 330, 70, 330);
fill(255, 155, 0)
noStroke()
quad(120, 290, 330, 290, 330, 330, 120, 330);




//pt 2

background(0);
fill(255)
noStroke()
quad(0, 0, 70, 0, 70, 70, 0, 70);
fill(255)
noStroke()
quad(0, 80, 70, 80, 70, 270, 0, 270);
fill(250,220,30)
noStroke()
quad(0, 280, 70, 280, 70, 340, 0, 340);
fill(255,0,0)
noStroke()
quad(80, 0, 250, 0, 250, 200, 80, 200);
fill(255)
noStroke()
quad(180, 210, 250, 210, 250, 270, 180, 270);
fill(255)
noStroke()
quad(180, 280, 250, 280, 250, 340, 180, 340);
fill(250,220,30)
noStroke()
quad(260, 0, 340, 0, 340, 70, 260, 70);
fill(255)
noStroke()
quad(260, 80, 340, 80, 340, 200, 260, 200);
fill(255)
noStroke()
quad(260, 210, 340, 210, 340, 270, 260, 270);
fill(10, 10, 255)
noStroke()
quad(260, 280, 340, 280, 340, 340, 260, 340);




//pt 3

background(0);

var a = random(30,80)
var b = random(30,80)
var c = random(100,200)

fill(255)
noStroke()
quad(10, 10, 10+a, 10, 10+a, 10+b, 10, 10+b);
fill(255)
noStroke()
quad(10, 20+b, 10+a, 20+b, 10+a, 320-b, 10, 320-b);
fill(250,220,30)
noStroke()
quad(10, 330-b, 10+a, 330-b, 10+a, 330, 10, 330);
fill(255, 0 ,0)
noStroke()
quad(20+a, 10, 20+a+c, 10, 20+a+c, 10+c, 20+a, 10+c);
fill(255, 0 ,0)
noStroke()
quad(20+a, 10, 20+a+c, 10, 20+a+c, 10+c, 20+a, 10+c);
fill(255)
noStroke()
quad(70+a, 20+c, 20+a+c, 20+c, 20+a+c, 170+(0.5*c), 70+a, 170+(0.5*c));
fill(255)
noStroke()
quad(70+a, 180+(0.5*c), 20+a+c, 180+(0.5*c), 20+a+c, 330, 70+a, 330);
fill(255)
noStroke()
quad(30+a+c, 10, 330, 10, 330, 170+(0.5*c), 30+a+c, 170+(0.5*c));
fill(0,0,255)
noStroke()
quad(30+a+c, 180+(0.5*c), 330, 180+(0.5*c), 330, 330, 30+a+c, 330);
