
function preload(){
seaImg = loadAImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}



function setup(){
  createCanvas(400,400);
  background("blue");

  ship = createSprite(100,49,600,200);
  ship = addImage("ship",shipImg);
  ship.scale =0.25;

  sea = createSprite(70,90,20,20);
  sea.x = sea.width/2;
  sea.velocityX = -10;
  sea.scale=0.5;

}


function draw() {
  background(0);
  sea.velocityX =-3;
  
  if (sea.x<0){
  sea.x = sea.width/2;
}

drawSprite;
}


