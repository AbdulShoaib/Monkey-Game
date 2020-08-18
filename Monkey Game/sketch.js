var score=0;
var foodGroup
function preload(){
  
}
function setup() {
  createCanvas(400, 400);

  backIMG=createSprite(200,200,400,400);
  backIMG.velocityX=3;
  ground=createSprite(200,400,400,50);
  player=createSprite(100,400,100,100);
  player.collide(ground);
  foodGroup= new foodGroup();
}

function draw() {
  background(220);
  if(foodGroup.isTouching(player)){
    player.scale=0.2;
  }
  text("Score: "+ score , 400,30)
  if(keyDown("space")) {
    trex.velocityY = -12;
  }
  drawSprites();
}