
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(150, 500, 10);

	leftSide = new Dustbin(500, 620, 20, 100);
	bottomSide = new Dustbin(610, 660, 200, 20);
    rightSide = new Dustbin(700, 620, 20, 100);

	ground = new Ground(400, 680, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  
  leftSide.display();
  bottomSide.display();
  rightSide.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}


}



