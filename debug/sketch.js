/*
    debug exercise
*/

var faceSize = 100 * 3;
var x = 350;
var y = 300;
function setup() {
    createCanvas(640, 480);
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(350, 320, faceSize); // face

    fill(0, 0, 0);
    ellipse(450, y + 20, 100); // right eye
    ellipse(x, y + 25, 100); // left eye
    ellipse(x, y + 125, 100, 50); // mouth


    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

fill("black");
    textSize(28);
    textFont("monospace");
    text("Nice work!", 65, 110);

    
}
