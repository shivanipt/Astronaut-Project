var background, backgroundImg;
var astronaut;
var astroBathImg;
var astroBrushImg;
var astroDrinkImg;
var astroEatImg;
var astroGym1Img;
var astroGym12Img;
var astroMoveImg;
var astroSleepImg;

function preload() {
  backgroundImg = loadImage("iss.png");
  astroBathImg = loadAnimation("bath1.png", "bath2.png");
  astroBrushImg = loadImage("brush.png");
  astroDrinkImg = loadAnimation("drink1.png", "drink2.png");
  astroEatImg = loadAnimation("eat1.png", "eat2.png");
  astroGym1Img = loadAnimation("gym1.png", "gym2.png");
  astroGym12Img = loadAnimation("gym11.png", "gym12.png");
  astroMoveImg = loadAnimation("move.png", "move1.png");
  astroSleepImg = loadImage("sleep.png");
}

function setup() {
  createCanvas(800,400);
  background = createSprite(400, 200, 50, 50);
  background.addImage("background", backgroundImg);

  astronaut = createSprite(300,230);
  astronaut.addImage(astroSleepImg);
  astronaut.scale = 0.1;
}

function draw() {
  //background(255,255,255);  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation(astroBrushImg);
    astronaut.changeAnimation(astroBrushImg);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation(astroGym1Img);
    astronaut.changeAnimation(astroGym1Img);
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation(astroBathImg);
    astronaut.changeAnimation(astroBathImg);
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 2;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation(astroEatImg);
    astronaut.changeAnimation(astroEatImg);
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("M_KEY")) {
    astronaut.addAnimation(astroMoveImg);
    astronaut.changeAnimation(astroMoveImg);
    astronaut.y = 350;
    astronaut.velocityX = 3;
    astronaut.velocityY = 3;
  }

  createEdgeSprites();
  drawSprites();
}