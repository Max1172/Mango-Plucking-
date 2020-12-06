const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy_img, stone_img, mango_img, tree_img, backgroundImg;

function preload()
{
	backgroundImg = loadImage("Plucking Mangoes/background.png");
	boy_img = loadImage("Plucking Mangoes/boy.png");
	stone_img = loadImage("Plucking Mangoes/stone.png")
	tree_img = loadImage("Plucking Mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);
	
	background(backgroundImg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if(keycode === 32) {
		Matter.Body.setPosition(stone.boy, {x:235, y:420})
		launcher.attach(stone.body);
	}
}