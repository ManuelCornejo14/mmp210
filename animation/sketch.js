/* animation
*/

var samsung, apple;
var samsungX = 0;
var textStroke = 5;
var textStrokeSpeed = 1;

var x, y; // instructions

var textRotation = 0;
var appleScale = 1;

function preload() {
    samsung = loadImage("samsung.jpg");
    apple = loadImage("apple.jpg");
}

function setup() {
    var canvas = createCanvas(640, 640);
    canvas.drawingContext.miterLimit = 2;
    
    x = width - 50;
    y = 20;
}

function draw() {
    background("red");
    
    var samsungY = 0;
    var appleY = height/2;
    
    if (mouseIsPressed) {
        samsungY = height/2;
        appleY = 0;
    }
    
    image(samsung, samsungX, samsungY, width, height/2);
    
    push(); // save original transformation
   
    translate(width/2, appleY);
    scale(appleScale);
    appleScale += 0.02;
    
    if (appleScale > 2) {
        appleScale = 1;
    }
    
    image(apple, -width/2, 0, width, height/2);
    
    pop(); // return to original tranformation
    
      var caption = "I want to go out";
    
    if (mouseX > width/5 && mouseY < height/5) {
        caption = "HELP ME:)";
    } 
    
    
    
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("times new roman");
    fill("green");
    stroke("white");
    strokeWeight(textStroke);
    
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.007;
    
    text(caption, 0, 0);
    
    
}

function mouseClicked() {
    if (mouseX > width/2 && mouseY < height/2) {
        x = 50; 
        y = height - 50;
    } else if (mouseX < width/2 && mouseY > height/2) {
        x = width - 50;
        y = height - 50;
    } else if (mouseX > width/2 && mouseY > height/2) {
        x = width - 50;
        y = 50;
    }
}
