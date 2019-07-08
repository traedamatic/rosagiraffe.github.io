function carechain() {
	// 3. Häuschen die nur ein mal gemalt werden
	fill(255);
	noStroke();

	rect(width/4+60, 900+schieben3, rechteck, rechteck); //1.
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