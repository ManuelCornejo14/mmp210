/* 
    self portrait
    by Manuel Cornejo 
    2/11/2020
*/

function setup(){
    createCanvas(900, 310);
}

function draw(){
    background('lightblue');
//neck

fill('lightpink');
rect(400, 200, 100, 100);

//hair
fill('black')
ellipse(450, 75, 125, 100);

//face
fill('orange');
ellipse(450, 150, 150, 175);

//eyes

fill('white');
//right eye
ellipse(485, 130, 35, 35);
//lefteye
ellipse(415, 130, 35, 35);   

//pupils
fill('black');
//right
ellipse(485, 130, 20, 20);
//left
ellipse(415, 130, 20, 20);

//mouth
fill('red');
strokeWeight(3);
arc(450, 195, 50, 30, 190, 190);
 
}