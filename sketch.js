const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone, mango, boy, boyImg, tree, treeImg, launcher;

function preload(){}

function setup(){

    var canvas = createCanvas(900, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300, height, 1200, 20);

    boy = new Boy(225, 730, 225, 225);

    stone = new Stone(150, 730, 50, 50);
        
    tree = new Tree(675, 575);

    mango1 = new Mango(675, 425);

    mango2 = new Mango(625, 550);

    mango3 = new Mango(585, 425);

    mango4 = new Mango(525, 525);

    mango5 = new Mango(725, 525);

    mango6 = new Mango(765, 425);

    mango7 = new Mango(825, 525);

    launcher = new Launcher(stone.body, {x:150, y:675})

}

function draw(){

    background("yellow")

    Engine.update(engine);

    boy.display();

    launcher.display();

    tree.display();

    mango1.display();

    mango2.display();

    mango3.display();

    mango4.display();

    mango5.display();

    mango6.display();

    mango7.display();

    stone.display();
    
    ground.display();

    //detectCollision();

    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){

if(keyCode === 32){

    launcher.attach(stone.body)

}

}

function detectCollision(lstone, lmango){

    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

    if(distance<=lmango.r+lstone.r){

        Matter.Body.setStatic(lmango.body, false);

    }

}