const Engine = Matter.Engine
const World  = Matter.World 
const Bodies = Matter.Bodies


var engine,world,object

function setup() {
  createCanvas(800,400);
  
   engine = Engine.create()

   world = engine.world;

 
   var options = {
   	isStatic :true
   }
   object = Bodies.rectangle(200,100,40,40,options)


   World.add(world,object)

   console.log(object)


   Engine.run(engine);


}

function draw() {
  background("lightblue");  

  rect(object.position.x,object.position.y,40,40)

 

  drawSprites();
}



