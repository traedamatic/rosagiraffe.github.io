/////////////////////////////////////////////
//
// Definiere local Variablen
//
/////////////////////////////////////////////

var rechteck = 150;
var canvasLang = 4000;

var x = rechteck; // Frauen Arbeitszeit
var y = 0; // Frauen Gehalt
var z = 0; // Frauen Besitz
var eventCounter = 0;
let timer1 = 4;
let timer2 = 7;
let timer3 = 7;


//Nach unten verschieben
var schieben1 = 700;
var schieben2 = 1000;
var schieben3 = 1300;

var haus_graphic;
var carechain_graphic;

/////////////////////////////////////////////
//
// Ende local Variablen
//
/////////////////////////////////////////////

function preload() {
}

/////////////////////////////////////////////
//
// setup() function
//
/////////////////////////////////////////////

function setup() {

 	noCanvas();

	haus_graphic = createGraphics(600,600);
	haus_graphic.parent('haus-container');

	carechain_graphic = createGraphics(600,600);
	carechain_graphic.parent('carechain-container');

	//hier mehr grahic definiren


	frameRate(60);

}

/////////////////////////////////////////////
//
// Ende setup() function
//
/////////////////////////////////////////////

/////////////////////////////////////////////
//
// Beginne draw() function
//
/////////////////////////////////////////////

function draw() {

	// return;

	// background(255);

	// kacheln();
	haus();
	// arbeit();
	carechain();
	// vektor();
	
	//
	// Text
	//

	// fill(255,200,0);
	// noStroke();
	// rect(165, 30, 148, 30);
	//
	// textSize(26);
	// strokeWeight(0.5);
	// fill(0);
	//
	// textFont(fonty);
	//
	// textAlign(CENTER);
	// text('Anteil Frauen an:', 0, schieben1-20, width);
	// text('Care-Chain', 0, 800+schieben3, width);
	// text('Wo arbeiten Frauen?', 0, 420+schieben2, width);
	//
	// textSize(16);
	//
	// text('Arbeitszeit', -270, 220+schieben1, width);
	// text('Gehalt', -0, 220+schieben1, width);
	// text('Eigentum', 270, 220+schieben1, width);
	// text('1737', -480, 580+schieben2, width);
	// text('1911', 480, 580+schieben2, width);
	//
	//
	// text('Arbeit und Frauen', -400, 50, width);




	

	//
	// Ende Text
	//

	//print(timer);
}

/////////////////////////////////////////////
//
// Ende draw() function
//
/////////////////////////////////////////////




function arbeit() {
	noStroke();

	/////////////////////////////////////////////
	// Arbeitszeit

	fill(255,200,0); //gelb
	rect(width/4-rechteck/2, schieben1, rechteck, rechteck);

	fill(255); //white

	
	// Animation Arbeitszeit
	if (x > rechteck*(1/3)) {
		rect(width/4-rechteck/2, schieben1, rechteck, x);
		x = x - 0.3;
	}	else{
		rect(width/4-rechteck/2, schieben1, rechteck, rechteck*(1/3));
		
		if (frameCount % 60 == 0 && timer1 > 0) {
    		timer1 --;
  		}
  		if (timer1 == 0){
			x = rechteck;
			timer1 = 4;
		}
	}
	
	// Ende Arbeitszeit
	/////////////////////////////////////////////
	

	/////////////////////////////////////////////
	// Gehalt
		fill(255,200,0); // GELB
		rect(width/4*2-rechteck/2, schieben1, rechteck, rechteck);
		fill(255); // WHITE
	// Animation Arbeitszeit

	if (y < rechteck*0.9) {
		rect(width/4*2-rechteck/2, schieben1, rechteck, y);
		y = y + 0.8;
	} else {
		rect(width/4*2-rechteck/2, schieben1, rechteck, rechteck*0.9);
		
		if (frameCount % 60 == 0 && timer2 > 0) {
    		timer2 --;
  		}
  		if (timer2 == 0){
			y = 0;
			timer2 = 7;
		}
	}
	// Ende Gehalt
	/////////////////////////////////////////////
	
	/////////////////////////////////////////////
	// Eigentum
		fill(255,200,0); // GELB
		rect(width/4*3-rechteck/2, schieben1, rechteck, rechteck);
		fill(255); // WHITE
	
	// Animation Gehalt
	if (z < rechteck*0.99) {
		rect(width/4*3-rechteck/2, schieben1, rechteck, z);
		z = z + 1.2;
	} else {
		rect(width/4*3-rechteck/2, schieben1, rechteck, rechteck*0.99);
		
		if (frameCount % 60 == 0 && timer3 > 0) {
    		timer3 --;
  		}
  		if (timer3 == 0){
			z = 0;
			timer3 = 7;
		}
	}
	// Ende Eigentum
	/////////////////////////////////////////////
}


function haus() {
	//2. Im Haus und außer Haus

	var theColour = map(mouseX, width-420, 20, 0, 255);
	var theColour2 = map(mouseX, 420,  width, 0, 255);

	haus_graphic.fill(200);
	haus_graphic.noStroke();
	// rect(0, 350, width, 350);
	//2.

	stroke(0);
	haus_graphic.line(90, 10, width-90, 500+(rechteck/2)+schieben2);
	noStroke();

	//Haus
	fill(255);
	haus_graphic.rect(width/2, 10, rechteck, rechteck);
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

	for (var c = 30; c < width-20 && c > 0; c = c + 40) {
	  for (var d = 515; d < 650 && d > 0; d = d + 40) {
	fill(40, 53, 131, theColour2);
		circle(c, d, 20);
	}
	}

	// Frauen
	for (var a = 30; a < width-20 && a > 0; a = a + 40) {
	  for (var b = 515; b < 650 && b > 0; b = b + 40) {
		fill(255, 200, 0, theColour);
		circle(a, b, 20);
	}
	}


	haus_graphic.style('display','block');

}

function carechain() {
	// 3. Häuschen die nur ein mal gemalt werden
	carechain_graphic.fill(255);
	noStroke();

	carechain_graphic.rect(width/4+60, 66, rechteck, rechteck); //1.
	triangle(width/4+60, 900+schieben3, width/4+60+rechteck/2, 850+schieben3, width/4+60+rechteck, 900+schieben3);

	rect(width/4+120+rechteck, 900+schieben3, rechteck, rechteck); //2.
	triangle(width/4+120+rechteck, 900+schieben3, width/4+120+rechteck+rechteck/2, 850+schieben3, width/4+120+rechteck+rechteck, 900+schieben3);
	rect(width/4+120+rechteck, 900+schieben3, rechteck, rechteck); //2.

	rect(width/4+120+rechteck+60+rechteck, 900+schieben3, rechteck, rechteck); //3.
	triangle(width/4+120+rechteck+60+rechteck, 900+schieben3, width/4+120+rechteck+60+rechteck+rechteck/2, 850+schieben3, width/4+120+rechteck+60+rechteck+rechteck, 900+schieben3);

	// Linien
	 // stroke(0);
	 // strokeWeight(1);
	 // line(250, 975, 350, 975);
	 // line(460, 975, 560, 975);
	 // line(670, 975, 770, 975);

	// Wenn eventCounter = 0 zeichne Scene1
	if(eventCounter == 0){
		carechainScene1();
	}
	// Wenn eventCounter = 1 zeichne Scene1
	if(eventCounter == 1){
		carechainScene2();
	}
	// Wenn eventCounter = 2 zeichne Scene1
	if(eventCounter == 2){
		carechainScene3();
	}
	// Wenn eventCounter = 3 zeichne Scene1
	if(eventCounter == 3){
		carechainScene4();
	}

	carechain_graphic.style('display','block');
}


// function mousePressed() {
 	
//  	eventCounter++;

//  	if(eventCounter == 4){
//  		eventCounter = 0;
//  	}

// 	print('Clicks ' + eventCounter);

//}

function carechainScene1() {

	// 2. Kreis im 1. Häuschen
	stroke(255,200,0);
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2, 975+schieben3, rechteck/2);

	// 2. im 2. Häuschen
	stroke(255,200,0);
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2+60+rechteck, 975+schieben3, rechteck/2);

	// 2. im 3. Häuschen
	stroke(255,200,0);
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2+60+rechteck+60+rechteck, 975+schieben3, rechteck/2);
}

function carechainScene2() {

	// Kreis im 1. Häuschen
	// stroke(255,200,0);
	// noFill();
 // 	strokeWeight(2);
	// circle(width/4+60+rechteck/2, 975, rechteck/2);

	// Kreis im 2. Häuschen
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2+60+rechteck, 975+schieben3, rechteck/2);

	// 2. im 3. Häuschen
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2+60+rechteck+60+rechteck, 975+schieben3, rechteck/2);

	fill(255, 200, 0);
	circle(width/4-rechteck/2, 975+schieben3, rechteck/2);
}

function carechainScene3() {

	// 2. Kreis im 1. Häuschen
	stroke(255,200,0);
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2, 975+schieben3, rechteck/2);

	// 2. im 2. Häuschen
	// stroke(255,200,0);
	// noFill();
 // 	strokeWeight(2);
 // 	circle(width/4+60+rechteck/2+60+rechteck, 975, rechteck/2);

	// 2. im 3. Häuschen
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2+60+rechteck+60+rechteck, 975+schieben3, rechteck/2);

	fill(255, 200, 0);
	circle(width/4-rechteck/2, 975+schieben3, rechteck/2);
}

function carechainScene4() {

	// 2. Kreis im 1. Häuschen
	stroke(255,200,0);
	fill(255, 200, 0);
	circle(width/4+60+rechteck/2, 975+schieben3, rechteck/2);

	// 2. im 2. Häuschen
	fill(255, 200, 0);
 	circle(width/4+60+rechteck/2+60+rechteck, 975+schieben3, rechteck/2);

	// 2. im 3. Häuschen
	// stroke(255,200,0);
	// noFill();
 // 	strokeWeight(2);
 // 	circle(width/4+60+rechteck/2+60+rechteck+60+rechteck, 975, rechteck/2);
 textSize(34);
 fill(0);
 //text("?", width/4+60+rechteck/2+60+rechteck+60+rechteck, 985);

	fill(255, 200, 0);
	circle(width/4-rechteck/2, 975+schieben3, rechteck/2);
}


function vektor() {
	imageMode(CENTER);
	image(img1, width/2, 300);


}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }



/*

Ab bestimmer Position Rechteckanimation starten

Wenn Positin y im Browser gleich 0, reset aller Animationen

*/