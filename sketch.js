var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0); 
  if(collided(bullet,wall)){
    bullet.velocityX=0;
   var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
 if(damage<10){
   bullet.shapeColor="green";
 }
 if(damage>10){
  bullet.shapeColor="red";
 }
}
 
  drawSprites();
}

function collided(o1,o2){
  bulletRightEdge=o1.x+o1.width;
  wallLeftEdge=o2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}