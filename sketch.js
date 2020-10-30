var wall,thickness;

var bullet,spd,weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  spd=random(3,5);

  weight=random(30,52);

  thickness=random(22,83);

  bullet = createSprite(200,200,50,50);
  
  wall=createSprite(600,200,50,height/2);
  wall.shapeColor=color(80,80,80);
}


function draw() {
  background(0,0,0);  

bullet.velocityx=5;

  function hasCollided(bullet,wall){

    bulletRightEdge=bullet.x+bullet.width;
    wallLeftedge=wall.x;
    if(bulletRightEdge>=wallLeftedge){
      return true;
    }
    return false;
  }

 if(hasCollided(wall,bullet)){

bullet.velocityx=0

var damage= 0.5*weight*spd*spd/(thickness,thickness,thickness);


if(damage>10)
{

wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
 }

drawSprites();

}