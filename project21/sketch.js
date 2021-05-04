  var bullet ;
  var wall;
  var speed;
  var weight;
  var thickness;
     
 
function setup() {

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  createCanvas(800,400);
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255)
  wall = createSprite(750,200,thickness,200)

}

function draw() {
  background(37,37,38); 
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0
    var damage=0.5 *weight * speed * speed/(thickness *thickness *thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }   
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  
}