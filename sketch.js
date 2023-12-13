const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

//var ground;

var top_wall;
var ball;
var con;
var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  // 3
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  //ground =new Ground(200,390,400,20);

// 1
  ball = Bodies.circle(100,200,20,ball_options,);
  World.add(world,ball);
  
  //4 criar var con para criar a restriçao anexar uma bola com um ponto próximo ao topo da tela
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  // 5 Adicione con (constraint) in World
  World.add(world,con);
 


  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  
// 2
  ellipse(ball.position.x,ball.position.y,20);
 // ground.show();
//  7  Defina a cor e a largura da linha. Faremos isso usando a função stroke() estrokeWeight()
push();
strokeWeight(2);
stroke(255);

// Passo 6: Adicione o código para criar uma linha usando a função line().
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
pop() ;
  Engine.update(engine);
}

// 3
function vForce()
{
  //9 forma fluida , horizontal.Altere o valor de x e y para fazer o pêndulo mover na horizontal
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
