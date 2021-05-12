const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rubber;
var hammer;
var iron;
var stone;
var plane;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    rubber = new Rubber(600,450,15);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(610,450);
    iron = new Iron(620,450);
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber.display();
    iron.display();
    stone.display();
    
 
}