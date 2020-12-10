const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var top;

function preload (){
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  top = new Top();
  
  bob1 = new Bob (400,200);
  rope1 = new Rope({x: 400, y:100}, bob1.body);

  bob2 = new Bob (360,200);
  rope2 = new Rope ({x:360, y:100}, bob2.body); 

  bob3 = new Bob (440,200)
  rope3 = new Rope ({x:440, y: 100}, bob3.body);

  bob4 = new Bob (480, 200);
  rope4 = new Rope ({x:480, y: 100}, bob4.body);

	Engine.run(engine);
}

function draw() {
  background("cyan");

  Engine.update(engine);

  top.display ();

  bob1.display ();
  rope1.display ();

  bob2.display ();
  rope2.display ();

  bob3.display ();
  rope3.display ();

  bob4.display ();
  rope4.display ();
}

function keyPressed (){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob2.body, bob2.body.position, {x: -0.05, y: 0});
  }
  if (keyCode === DOWN_ARROW){
    Matter.Body.applyForce(bob4.body, bob4.body.position, {x: 0.05, y: 0});
  }
}