var player;
var bush1, bush2, bush3;
var stone1,stone2,stone3;
var door1,door2,door3

function preload(){

//loading bush imgs    
bush1Img= loadImage("bush/Bush1.png");
bush2Img= loadImage("bush/Bush2.png");
bush3Img= loadImage("bush/Bush3.png");
//loading stone imgs
stone1img= loadImage("stones/stone1.png");
stone2img= loadImage("stones/stone2.png");
stone3img= loadImage("stones/stone3.png")
//loading door image
door1img= loadImage("door/door1.png")
}

function setup(){
//creating edges and canvas
createCanvas(windowWidth, windowHeight);
edges=createEdgeSprites();

// main player
player= createSprite(100,100,10,10);
player.shapeColor="purple";
//creating bushes
bush1=createSprite(140,450,20,20)
bush1.shapeColor="green";
bush2=createSprite(540,370,20,20)
bush2.shapeColor="lime";
bush3=createSprite( 630,50,20,20)
bush3.shapeColor="lime";
//creating stones
stone1=createSprite(830,660,30,30);
stone1.shapeColor="black";
stone2=createSprite(990,300,30,30);
stone2.shapeColor="black";
stone3=createSprite(1473,210,30,30);
stone3.shapeColor="black";
//creating door
door1=createSprite(1520,620,50,50)
}

function draw(){
background(19,20,20);


fill("white");
text(mouseX+","+mouseY,mouseX,mouseY);

//adding images to bushes
//bush1.addImage(bush1Img,5,10);

//adding images to stones
//stone1.addImage(stone1img);

//adding images to doors
door1.addImage(door1img);

//movement of main player
if(keyDown("left")){
player.x-=5
}
if(keyDown("right")){
    player.x+=5
    }
  if(keyDown("down")){
    player.y+=5
  }
  if(keyDown("up")){
    player.y-=5
    }

//making the main player collide with the edges
player.collide(edges);



drawSprites();
}

