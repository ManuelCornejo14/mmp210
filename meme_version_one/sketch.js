/* meme  version one
02/25/2020
*/


//global scope
var angryImage;

function preload(){
	angryImage = loadImage("angry.png");
}

function setup () {
var canvas= createCanvas(500, 500);
canvas.drawingContext.miterLimit = 1;

}

function draw () {
     background('grey');

//draw image
tint(225, 0, 255);
image(angryImage, 100, 100, 300, 300);
tint(0, 255, 255, 127);
image(angryImage, 0, 0, mouseX, mouseY);

textSize(75);
fill("blue");
stroke("plum");
strokeWeight(5);
textStyle(NORMAL);
textFont('Orbitron');
textAlign(LEFT, TOP);

var hello = "Nooooooooo";
var length = noooo whyyyy.lenght;
var n = map(mouseX, 0, 100, 0, 20);

var displayString = hello.substring(0, n);
text(displayString, 15, height/2);
var s= mouseX;


textSize(20);
strokeWeight(5);
textStyle(NORMAL);
textAlign(CENTER, TOP);


var welcome = "when you're typing a code and can't figure whats wrong woth it";
var end= map(frameCount, 0, 200, 0, welcome.length);
text (welcome.substring (0, end), 250, 350);
}

