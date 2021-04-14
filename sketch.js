var fixedRect, movingRect;
var rect3 , rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(200,200,30,30);
  rect3.shapeColor = "green";
  rect4 = createSprite(100,100,30,30);
  rect4.shapeColor= "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  faltu(movingRect , rect4);

  drawSprites();
}

function faltu(r3,r4){
  if (r3.x - r4.x < r4.width/2 + r3.width/2
    && r4.x - r3.x < r4.width/2 + r3.width/2
    && r3.y - r4.y < r4.height/2 + r3.height/2
    && r4.y - r3.y < r4.height/2 + r3.height/2) {
  r3.shapeColor = "red";
  r4.shapeColor = "red";
}
else {
  r3.shapeColor = "green";
  r4.shapeColor = "green";
}
}