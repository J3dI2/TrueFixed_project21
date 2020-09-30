var bullet, wall;
var speed; 
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,10,5);
  wall=createSprite(1200, 200, thickness, height/2);

  wall.shapeColor=color(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  


  if (hasCollided(bullet,wall)) {

    bullet.velocityX=0;

    var Damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness)

    if (Damage > 10) {

      bullet.shapeColor=color(255,0,0);

    } else if (Damage < 10) {

      bullet.shapeColor=color(0.255,0);

    }
  }
  drawSprites();
}

function hasCollided(bullet, wall) {

  var bulletRightEdge=bullet.x + bullet.width;
  var wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}