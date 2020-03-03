/* meme  version two
02/25/2020
*/


//global scope
var catImage;

function preload(){
	catImage = loadImage("cat.jpg");
}

function setup () {
var canvas= createCanvas(500, 500);
canvas.drawingContext.miterLimit = 1;

}

function draw () {
     background('grey');

//draw image
tint(225, 0, 255);
image(catImage, 100, 100, 300, 300);
tint(0, 255, 255, 127);
image(catImage, 0, 0, mouseX, mouseY);

textSize(75);
fill("blue");
stroke("plum");
strokeWeight(5);
textStyle(NORMAL);
textFont('Orbitron');
textAlign(LEFT, TOP);

var hello = "DontTouchMyFoooooood";
var length = hello.lenght;
var n = map(mouseX, 0, 100, 0, 20);

var displayString = hello.substring(0, n);
text(displayString, 15, height/2);
var s= mouseX;


textSize(20);
strokeWeight(5);
textStyle(NORMAL);
textAlign(CENTER, TOP);


var welcome = "ahhhhhhhh";
text (welcome.substring (0, end), 250, 350);
}

