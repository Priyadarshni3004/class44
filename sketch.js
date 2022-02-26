var canvas;
var backgroundImage, underwaterImage;
var submarineImg,sharkImg,turtleImg,jellyfishImg,fish1Img,fish2Img,crabImg,seahorseImg,watergrassImg;
var submarine1,shark,submarine2,bg;
var turtle,jellyfish,fish1,fish2,crab,seahorse,watergrass;
var life;
var submarine1life = 200;score = 0;
var gameOver,gameOverImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  backgroundImage = loadImage("images/underwater.png");
  submarineImg = loadImage("images/submarine.png");
  sharkImg = loadImage("images/shark.png");
  turtleImg = loadImage("images/turtle.png");
  jellyfishImg = loadImage("images/jellyfish.png");
  fish1Img = loadImage("images/fish1.png");
  fish2Img = loadImage("images/fish2.png");
  crabImg = loadImage("images/crab.png");
  seahorseImg = loadImage("images/seahorse.png");
  watergrassImg = loadImage("images/watergrass.png");
  lifeImg = loadImage("images/life.png");
  bg1Image = loadImage("images/bg1.jpg");
  gameOver = loadImage("images/gameover.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 // database = firebase.database();
bg = createSprite(width/2,height/2);
bg.x = bg.width ;
bg.velocityX= -3;
bg.addImage(bg1Image);
bg.scale=2;


 submarine1 = createSprite(100,500);
 submarine1.addImage(submarineImg);
 submarine1.scale=0.5;
 //submarine1.rotation+=90;
 submarine2 = createSprite(100,100);
 submarine2.scale=0.5;
 //submarine2.rotation+=90;
 submarine2.addImage(submarineImg);
//  shark = createSprite(width+50,30);
//  shark.addImage('shark',sharkImg);
// submarine2.velocityX= 5;

 //turtle = createSprite(200,200);
//  turtle.addImage('turtle',turtleImg)
//  turtle.scale=0.5;

//  jellyfish = createSprite(600,600);
//  jellyfish.addImage('jellyfish',jellyfishImg)
//  jellyfish.scale=0.5;

 //fish1 = createSprite(400,400);
//  fish1.addImage('fish1',fish1Img)
//  fish1.scale=0.5;

 //fish2 = createSprite(400,200);
//  fish2.addImage('fish2',fish2Img)
//  fish2.scale=0.5;

// crab = createSprite(500,500);
//  crab.addImage(' crab',crabImg)
//  crab.scale=0.5;

//  seahorse = createSprite(200,500);
//  seahorse.addImage('seahorse',seahorseImg)
//  seahorse.scale=0.4;

 watergrass= createSprite(700,550);
 watergrass.addImage( watergrassImg)
 watergrass.scale=0.4;

 watergrass1= createSprite(1200,550);
 watergrass1.addImage( watergrassImg)
 watergrass1.scale=0.4;

 watergrass2= createSprite(1150,550);
 watergrass2.addImage( watergrassImg)
 watergrass2.scale=0.3;

 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverImg);
 gameOver.scale=0.5;

 fish1Group = new Group();
fish2Group = new Group();
turtleGroup = new Group();
seahorseGroup = new Group();
crabGroup = new Group();
jellyfishGroup = new Group();
sharkGroup = new Group();
}

function draw() {
  background(0);
  
 if(bg.x < -1000){
   bg.x = bg.width;

 }
 if (gameState===PLAY){
  if(shark.isTouching(submarine1)){
    gameState = END;
 }
 
  

//submarine2.x += 5

//if (keyDown(UP_ARROW)){
  //submarine2.y -=1;

//}
  
if (keyDown (UP_ARROW)){
	submarine1.y=submarine1.y-4;
}

if(keyDown(DOWN_ARROW)){
	submarine1.y=submarine1.y+4;
}


if (keyDown ('W')){
	submarine2.y=submarine2.y-4;
}

if(keyDown('S')){
	submarine2.y=submarine2.y+4;
}
 }

 else if (gameState === END) {
  gameOver.visible = true;
}

spawnfish1();
spawnfish2();
spawnturtle();
spawnseahorse();
spawncrab();
spawnjellyfish();
spawnshark();
showLife_sub1();
 
text("score:"+score,200,200);

  drawSprites();

}


function spawnfish1() {
  
  if (frameCount % 200 === 0) {
    var fish1 = createSprite(2000,500,40,10);
    fish1.y = Math.round(random(80,620));
    fish1.addImage(fish1Img);
    fish1.scale = 0.3;
    fish1.velocityX = -3;
    
     //assign lifetime to the variable
    fish1.lifetime = 700;
    
         fish1Group.add(fish1);
  }}

  function spawnfish2() {
  
   if (frameCount % 300 === 0) {
      var fish2 = createSprite(1800,500,40,10);
      fish2.y = Math.round(random(30,600));
     fish2.addImage(fish2Img);
      fish2.scale = 0.3;
     fish2.velocityX = -3;
      
       //assign lifetime to the variable
     fish2.lifetime = 700;
      
          fish2Group.add(fish2);
   }
}
function spawnturtle() {
  
  if (frameCount % 350 === 0) {
     var turtle = createSprite(1900,500,40,10);
     turtle.y = Math.round(random(550,600));
    turtle.addImage(turtleImg);
     turtle.scale = 0.3;
    turtle.velocityX = -3;
     
      //assign lifetime to the variable
    turtle.lifetime = 700;
     
         turtleGroup.add(turtle);
  }
}
function spawnseahorse() {
  
  if (frameCount % 550 === 0) {
     var seahorse = createSprite(2100,500,40,10);
     seahorse.y = Math.round(random(50,400));
    seahorse.addImage(seahorseImg);
     seahorse.scale = 0.2;
    seahorse.velocityX = -3;
     
      //assign lifetime to the variable
    seahorse.lifetime = 700;
     
         seahorseGroup.add(seahorse);
  }
}

function spawncrab() {
  
  if (frameCount % 580 === 0) {
     var crab = createSprite(1700,500,40,10);
     crab.y = Math.round(random(300,500));
    crab.addImage(crabImg);
     crab.scale = 0.3;
    crab.velocityX = -3;
     
      //assign lifetime to the variable
    crab.lifetime = 700;
     
         seahorseGroup.add(crab);
  }
}

function spawnjellyfish() {
  
  if (frameCount % 410 === 0) {
     var jellyfish = createSprite(1800,500,40,10);
     jellyfish.y = Math.round(random(200,600));
    jellyfish.addImage(jellyfishImg);
     jellyfish.scale = 0.4;
    jellyfish.velocityX = -3;
     
      //assign lifetime to the variable
    jellyfish.lifetime = 700;
     
         seahorseGroup.add(jellyfish);
  }
}

function spawnshark() {
  
  if (frameCount % 490 === 0) {
     var shark = createSprite(1800,500,40,10);
     shark.y = Math.round(random(10,570));
    shark.addImage(sharkImg);
     shark.scale = 0.4;
    shark.velocityX = -3;
     
      //assign lifetime to the variable
    shark.lifetime = 700;
     
         seahorseGroup.add(shark);
  }


}

function showLife_sub1() {
  push();
  image(lifeImg, width / 2 - 130,200 , 20, 20);
  fill("white");
  rect(width / 2 - 100, 200, 185, 20);
  fill("#f50057");
  rect(width / 2 - 100, 200, submarine1life, 20);
  noStroke();
  pop();
}

