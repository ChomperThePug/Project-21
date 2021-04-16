var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    block1 = createSprite(0, 580, 360, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(280, 580, 200, 30);
    block2.shapeColor = "orange";

    block3 = createSprite(480, 580, 200, 30);
    block3.shapeColor = "red";

    block4 = createSprite(680, 580, 200, 30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = rgb(255, 255, 255);
    ball.velocityX = 5;
    ball.velocityY = Math.ceil(random(-25, 25)) + 5;
}

function draw() {
    background(rgb(169, 169, 169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    //ball.bounceOff(block1);
    //ball.bounceOff(block2);
    //ball.bounceOff(block3);
    //ball.bounceOff(block4);
    //write code to bounce off ball from the block1 
    if (proximity(ball, block1, 0) && ball.bounceOff(block1)) {
        ball.shapeColor = "blue";
        music.play();
    }
    if (proximity(ball, block2, 0) && ball.bounceOff(block2)) {
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.play(false);
    }

    //write code to bounce off ball from the block3
    if (proximity(ball, block3, 0) && ball.bounceOff(block3)) {
        ball.shapeColor = "red";
        music.play();
    }

    //write code to bounce off ball from the block4
    if (proximity(ball, block4, 0) && ball.bounceOff(block4)) {
        ball.shapeColor = "green";
        music.play();
    }
    drawSprites();
}