const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject	
var engine,world;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
	world = engine.world;

  paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  }
}