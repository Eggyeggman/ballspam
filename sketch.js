
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var btn

let engine;
let world;

var ground;

var top_wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);
btn = createImg('up.png')
btn.position(25,25)
btn.size(50,50)
btn.mouseClicked(horizontalforce)
var options = {

restitution: 0.8

}
ball = Bodies.circle(200,200,20,options)
World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
}


function horizontalforce(){
  Matter.Body.applyForce(ball,{
    x:0,y:0},{x:-0.05,y:-0}
  )
}