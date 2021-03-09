var paper,ground,line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	line1=createSprite(400,height-50,200,20);
	line1.shapeColor=color("red");
	line2=createSprite(510,610,20,100);
	line2.shapeColor=color("red");
	line3=createSprite(310,610,20,100);
	line3.shapeColor=color("red");

	ground=new Ground(400,680,800,20)
	ground.shapeColor=color("yellow");
	
	paper=new Paper(100,600,10);
	
	
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  engine.update(engine);
  paper.display();
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  
  

  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})} }
