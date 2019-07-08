function haus() {
	//2. Im Haus und außer Haus

	var theColour = map(mouseX, width-420, 20, 0, 255);
	var theColour2 = map(mouseX, 420,  width, 0, 255);

	fill(200);
	noStroke();
	// rect(0, 350, width, 350);
	//2.

	stroke(0);
	line(90, 500+(rechteck/2)+schieben2, width-90, 500+(rechteck/2)+schieben2);
	noStroke();

	//Haus
	fill(255);
	rect(width/2-(rechteck/2), 500+schieben2, rechteck, rechteck);
	triangle(width/2-(rechteck/2), 500+schieben2, width/2-(rechteck/2)+rechteck/2, 450+schieben2, width/2-(rechteck/2)+rechteck, 500+schieben2);

	//Frauen außer Haus
	fill(255, 200, 0, theColour);
	circle(200, 400+schieben2, 20);
	circle(230, 430+schieben2, 20);
	circle(300, 650+schieben2, 20);
	circle(700, 420+schieben2, 20);
	circle(720, 630+schieben2, 20);
	circle(300, 560+schieben2, 20);
	circle(840, 510+schieben2, 20);
	circle(740, 520+schieben2, 20);
	circle(890, 520+schieben2, 20);
	circle(800, 560+schieben2, 20);
	circle(720, 570+schieben2, 20);
	circle(180, 580+schieben2, 20);
	circle(270, 600+schieben2, 20);
	circle(980, 400+schieben2, 20);

	//Frauen bleiben
	fill(255, 200, 0)
	circle(width/2-20, 530+schieben2, 20);
	circle(220, 660+schieben2, 20);
	circle(870, 500+schieben2, 20);

	//Frauen im Haus
	fill(255, 200, 0, theColour2);
	circle(width/2-40, 500+schieben2, 20);
	circle(width/2-60, 560+schieben2, 20);
	circle(width/2-50, 630+schieben2, 20);
	circle(width/2-40, 580+schieben2, 20);
	circle(width/2-30, 610+schieben2, 20);
	circle(width/2-20, 560+schieben2, 20);
	circle(width/2-10, 480+schieben2, 20);
	circle(width/2, 500+schieben2, 20);
	circle(width/2+10, 630+schieben2, 20);
	circle(width/2+20, 590+schieben2, 20);
	circle(width/2+30, 610+schieben2, 20);
	circle(width/2+40, 530+schieben2, 20);
	circle(width/2+50, 620+schieben2, 20);
	circle(width/2+60, 580+schieben2, 20);

	// for (var c = 30; c < width-20 && c > 0; c = c + 40) {
	//   for (var d = 515; d < 650 && d > 0; d = d + 40) {
	// fill(40, 53, 131, theColour2);
	// 	circle(c, d, 20);
	// }
	// }

	//Frauen
	// for (var a = 30; a < width-20 && a > 0; a = a + 40) {
	//   for (var b = 515; b < 650 && b > 0; b = b + 40) {
	// 	fill(255, 200, 0, theColour);
	// 	circle(a, b, 20);
	// }
	// }

}