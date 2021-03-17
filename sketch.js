
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650, 580, 1300, 20)
	mango1 = new Mango(1000, 250, 30)
	mango2 = new Mango(1050, 300, 30)
	mango3 = new Mango(1100, 325, 30)
	mango4 = new Mango(1075, 275, 30)
	mango5 = new Mango(1032, 225, 30)
	mango6 = new Mango(1150, 280, 30)
	mango7 = new Mango(1175, 250, 30)
	mango8 = new Mango(1120, 275, 30)
	mango9 = new Mango(1180, 350, 30)
	mango10 = new Mango(1190, 330, 30)
	mango11 = new Mango(900, 275, 30)
	mango12 = new Mango(925, 315, 30)
	mango13 = new Mango(950, 290, 30)
	mango14 = new Mango(975, 280, 30)
	tree = new Tree(1050, 475)
	stone = new Stone(220, 420, 30)
	slingshot = new Slingshot(stone.body, {x: 220, y: 420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  ground.display()
  image(boy, 200, 340, 100, 300)
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  mango13.display()
  mango14.display()
  stone.display()
  slingshot.display()


  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)
  detectCollision(stone, mango9)
  detectCollision(stone, mango10)
  detectCollision(stone, mango11)
  detectCollision(stone, mango12)
  detectCollision(stone, mango13)
  detectCollision(stone, mango14)
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
	
}
function mouseReleased(){
    slingshot.fly();
}

function detectCollision(stone, mango){
	var mangoPos = mango.body.position
	var stonePos = stone.body.position
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
	if( distance<= mango.radius+stone.radius){
		Matter.Body.setStatic(mango.body, false)
	}
} 