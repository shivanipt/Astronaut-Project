var backgroundImg;
var astronaut;
var bath;
var brush;
var eat;
var gym;
var move;
var sleep;

function preload() {
  backgroundImg = loadImage("./iss.png");
  bath = loadAnimation("./bath1.png", "./bath1.png", "./bath1.png", "./bath2.png", "./bath2.png", "./bath2.png");
  brush = loadAnimation("./brush.png");
  eat = loadAnimation("./eat1.png", "./eat1.png", "./eat2.png", "./eat2.png");
  gym = loadAnimation("./gym1.png", "./gym1.png", "./gym2.png", "./gym2.png");
  move = loadAnimation("./move.png", "./move.png", "./move1.png", "./move1.png");
  sleep = loadAnimation("./sleep.png");
}

function setup() {
  createCanvas(800,400);
  //background = createSprite(400, 200, 50, 50);
  //background.addImage("background", backgroundImg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(backgroundImg);  

  drawSprites();

  var edges = createEdgeSprites();

  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("M")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    //astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}