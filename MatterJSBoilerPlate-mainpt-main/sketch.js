
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(0);

	engine=Engine.create();
	World=engine.World;

    var plane_options={
		isStatic:true
	}

    block1 = Bodies.circle(220,10,10,block1_options);
    World.add(world,block1);

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world,block2);

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
    World.add(world,block3);

	var block3_options = {
		restiution:0.01,
		friction:1,
		frictionAir:0.3
	}

	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ellipse(block1.position.x,block1.position.y,10);
  rect(block2.position.x,block2.position.y,10,10);
  rect(block3.position.x,block3.position.y,10,10);
  drawSprites();
}



