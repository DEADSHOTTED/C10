var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadAnimation("1.png");
  shipImg1 = loadAnimation("1.png");
  shipImg1 = loadAnimation("1.png");
  shipImg1 = loadAnimation("1.png","1.png","1.png","1.png");
  
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(200,50);
  sea.addImage(seaImg);
  sea.velocityX = 5;
  sea.scale=1;

  
  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = 10;
  sea.y=250
  //uncomment code to reset the background
  
  sea.velocityX=-6
  console.log(sea.x)
  if(sea.x<300){
    sea.x=sea.width/2
  }
 
  drawSprites();
}