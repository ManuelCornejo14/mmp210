// self portrait
function setup(){
	createCanvas(900, 500);
}

function draw(){
	background('lightblue');

    // shapes with xy coordinate + size

fill('green');
stroke('black');


    // face area
	ellipse(450, 180, 200); // face
	fill('green');
    ellipse(400, 160, 20); // right eye
    ellipse(500, 160, 20); // left eye

	rectMode(CENTER);
	rect(200, 220, 100, 20, 10);


    // right ear
	arc(545, 180, 40, 50, -HALF_PI, HALF_PI);
	

    // shapes that are only xy points

    // hair
    line(150, 70, 180, 100);
    line(160, 70, 180, 100);
    line(170, 70, 180, 100);
    line(180, 70, 180, 100);
    line(190, 70, 180, 100);
    line(200, 70, 180, 100);
    line(210, 70, 180, 100);
    line(220, 70, 180, 100);
    line(230, 70, 180, 100);
    line(240, 70, 180, 100);
    line(250, 70, 180, 100);
    line(260, 70, 180, 100);
    line(270, 70, 180, 100);
    line(280, 70, 180, 100);
    line(290, 70, 180, 100);
    line(300, 70, 180, 100);
    line(310, 70, 180, 100);
    line(320, 70, 180, 100);
    line(330, 70, 180, 100);
    line(340, 70, 180, 100);
    line(350, 70, 180, 100);
    line(360, 70, 180, 100);
    line(370, 70, 180, 100);
    line(380, 70, 180, 100);
    line(390, 70, 180, 100);
    line(400, 70, 180, 100);
    line(410, 70, 180, 100);
    line(420, 70, 180, 100);
    line(430, 70, 180, 100);

   

}