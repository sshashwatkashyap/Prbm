class Mango{

    constructor(x, y){
   
     var options = {
   
      'isStatic':true,
      'restitution':0,
      'friction':1,
      
     }
   
     this.body = Bodies.circle(x, y, 25, options);
     this.image = loadImage("Plucking mangoes/mango.png");
   
     World.add(world, this.body)
   
    }
   
    display(){
   
     var pos = this.body.position
   
     push()
       
     imageMode(CENTER)
   
     translate(pos.x, pos.y)
   
     rotate(this.body.angle)
  
     image(this.image, 0, 0, 50, 50);
   
     pop()
   
   }
   }