const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,par;
var ground;

var particles=[];

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options = {
        isStatic: true
    }
   ground = Bodies.rectangle(300,390,600,100,ground_options);
   World.add(world,ground);
    
}

function draw(){
    background("yellow");
    if(frameCount%5===0){
        par = new Particle(400,100,40);
        particles.push(par);
    }
    
    Engine.update(engine);
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,100);

    for(var i=0; i<particles.length;i++){
        particles[i].display();
        
    }
    

}


