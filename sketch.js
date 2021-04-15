var movingRect , fixedRect;


function setup() {
  createCanvas(800,400);

  movingRect = createSprite(400, 200, 100, 50);
  movingRect.debug = true;
  movingRect.shapeColor = "green";

  fixedRect = createSprite(250, 200, 100, 50);
  fixedRect.debug = true;
  fixedRect.shapeColor = "green";

}

function draw() {
  background("BLACK"); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x- fixedRect.x);
  console.log(fixedRect.width/2 + movingRect.width/2);
  
  if( movingRect.x- fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y- fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2
    ){
     movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  

  drawSprites();
}