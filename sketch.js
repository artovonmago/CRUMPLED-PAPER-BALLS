
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density:1.2
	}

	groundObj = new Ground(width/2,670,width, 20);
	leftSide = new Ground(1100, 600, 20,120);
	rightSide = new Ground(1200,600,20,120);
ellipseMode(RADIUS)
  ball = Bodies.circle(100,50,30)
  World.add(world,ball)
  World.add(world,groundObj)
  World.add(world,leftSide)
  World.add(world,rightSide)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(ball.position.x)
  ellipse(ball.position.x,ball.position.y,30)

  drawSprites();
 
  groundObj.display()
  leftSide.display()
  rightSide.display()

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:0.16,y:-0.2})
	}
}

