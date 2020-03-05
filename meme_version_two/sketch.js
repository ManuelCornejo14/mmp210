/* meme  version two
02/25/2020
*/


//global scope
var catImage;
var DogImage;
var ChihuahuaImage;
var bearImage;

var counter = 0;
var instructions = "click here";
var x;
var y;


function preload(){
	cat= loadImage("cat.jpg");
	 dog= loadImage("dog.jpg");
	 chihuahua= loadImage("chihuahua.jpg");
	 bear= loadImage("bear.jpg")
}

function setup () {
var canvas= createCanvas(700, 700);
canvas.drawingContext.miterLimit = 4;

    x = width - 50;
    y = 20;

}

function mousePressed() {
	counter++;
	if (counter == 3) {
		counter = 0;
	}

	if (mouseX > width/2 && mouseY > height/2) {
		// bottom right
		instructions = 'now click here';
		y = 50;
	} else if (mouseX > width/2 && mouseY < height/2) {
		instructions = 'now im over here';
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		instructions = 'now im down here';
		y = height - 100;
	}
}

function draw() {
	background('gray');

	// draw the image
	if (counter == 0) {
		image(catImage, 0, 0, width, height);
	} else if (counter == 1) {
		image(dogImage, 0, 0, width, height);
	} else if (counter == 1) {
		image(chihuahuaImage, 0, 0, width, height);
	} else {
	    image(bearImage, 0, 0, width, height); 
	
	}
	


    textAlign(CENTER, CENTER);
    textSize(40);
    textFont("Orbitron");
    fill("green");
    stroke("white");
    strokeWeight(8);
    
    text(instructions, x, y, 150);

}
    
   