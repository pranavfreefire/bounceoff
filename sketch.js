var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200, 100, 50, 80);
  rect1.shapeColor = "yellow";
  rect1.debug = true;
  rect2 = createSprite(200, 800,80,30);
  rect2.shapeColor = "blue";
  rect2.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect2.velocityY = -5;
  rect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,fixedRect)
bounceoff(rect1,rect2)

drawSprites();
}
