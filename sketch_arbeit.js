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