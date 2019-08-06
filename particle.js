class Particle {
  constructor(x, y,radius) {
 var options = {
   restitution: 1.3
 }
    this.body=Matter.Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
  }


display(){
  fill(255);
  stroke("red");
  var pos= this.body.position;
  push();
  translate(pos.x,pos.y);
  ellipse(0,0,this.radius);
  pop();
}
}