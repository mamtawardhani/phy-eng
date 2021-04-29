const E = Matter.Engine
const W = Matter.World
const B = Matter.Bodies

var en, wo, box1, ground

function setup(){
 createCanvas(400,600);

 //create an engine
 en  = E.create()

 //accesing the world
 wo = en.world
 console.log(wo)

 box1 = B.rectangle(100,50, 40,30)
 W.add(wo,box1)

 var option= {isStatic: true}
 ground = B.rectangle(200,550,400,20, option)
 W.add(wo, ground)

}
function draw()
{
  background(0);
  E.update(en)
  rectMode(CENTER)
  rect(100, box1.position.y, 40,30)
  rect(200, ground.position.y, 400,20)

  
}

//rectangle  => rect
//circle => ellipse()
//pentagon => vertex()
