
var wall;
var car;
var speed;
function setup() {
  createCanvas(1600,100);

 
 wall1 = createSprite(1500, 50, 20, 60);


 car = createSprite(30, 50, 40, 20);


speed=random(55,90);



weight=random(400,1500);

car.velocityX = speed;


car.shapeColor="white";





}

function draw() {
  background("black");  
  drawSprites();
  if(wall1.x-car.x <(car.width+wall1.width)/2)
{
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
{
   car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
   car.shapeColor=color(230,230,0);
}
  
if(deformation<100)
{
   car.shapeColor=color(0,255,0);
}
}

}