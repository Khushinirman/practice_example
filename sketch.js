
//global variables

var sprite;


function setup() {
  createCanvas(600,200);
  
 sprite = createSprite(300,100,50,50);

}

function draw() 
{
  background("pink");

if(keyIsDown(RIGHT_ARROW)){
  sprite.x = sprite.x+10;

}



drawSprites();




}



