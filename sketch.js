const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
const Render = Matter.Render;

var rope1
function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
roof = Bodies.rectangle(400,200,200,20,{isStatic:true})
  
pen1=new Pendulum(300,600,40)
pen2=new Pendulum(360,600,40)
pen3=new Pendulum(400,600,40)
pen4=new Pendulum(460,600,40)
pen5=new Pendulum(500,600,40)
World.add(world,roof)

rope1=new Rope(pen1.body,roof,-80)
rope2=new Rope(pen2.body,roof,-40)
rope3=new Rope(pen3.body,roof,0)
rope4=new Rope(pen4.body,roof,40)
rope5=new Rope(pen5.body,roof,80)

console.log(roof.position)
var render = Render.create({ 
  element: document.body,
   engine: engine, 
   options: { width: 1300, height: 600, wireframes: true } });
Render.run(render);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  pen1.display();
  pen2.display();
  pen3.display();
  pen4.display();
  pen5.display();
  rect(roof.position.x,roof.position.y,200,10)
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(pen1.body,pen1.body.position,
    {x:-20,y:-25}); } }

