function setup() {
  createCanvas(800,400);

  car = createSprite(400, 200, 80, 50);
  car.shapeColor = "green";
  wall = createSprite(200,200,50,50);
  wall.shapeColor = "green";
  a= createSprite(500, 250, 80, 50);
  a.shapeColor = "blue";
  a.velocityY = -5;
  b = createSprite(500,350,50,50);
  b.shapeColor = "blue";
  b.velocityY = 5;

}

function draw() {

  background("black");  

  car.x = World.mouseX;
  car.y = World.mouseY;

  

if(isTouching(car,wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";

}
else{
  car.shapeColor = "green";
  wall.shapeColor = "green";

}
bounceOff(a,b);

  drawSprites();
}
