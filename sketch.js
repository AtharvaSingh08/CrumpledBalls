const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject	
var engine,world;

function setup() {
  createCanvas(1600,700);
  
  engine = Engine.create();
	world = engine.world;

  paperObject=new Paper(200,450,30);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,670);
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

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:210,y:-150});
  }
}
