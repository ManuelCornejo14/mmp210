
/* 
    Interactive self portrait
    by Manuel Cornejo 
    2/18/2020
*/

var x; // 450; // origin for face
var y = 150;

//size variable
var s = 100;

function setup(){
	//setup scope
    createCanvas(900, 310);
    x= width/2;

    
}

function draw(){
	//draw scope
    background('lightblue');


//neck

fill('lightpink');
rect(x-50, 200, 100, 100);

x= mouseX;
y= mouseY;
ellipse(x, y, s);
//hair
fill('black');
ellipse(x, 75, 125, 100);



//face
fill('orange');
ellipse(x, y, s+50, 175);

//x++
//y++

//eyes

fill('white');

//right eye
ellipse(x+35, 130, 30, 35);
//s++
//w++

//lefteye
ellipse(x-35, 130, 35, 35);   

//pupils
fill('black');
//right
ellipse(x+35, 130, 20, 20);
//left
ellipse(x-35, 130, 20, 20);


//mouth
fill('red');
strokeWeight(3);
arc(x, 195, 50, 30, 190, 190);






}