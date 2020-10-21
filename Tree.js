class Tree{

    constructor(x, y){

        var options = {

            isStatic:true

        }

        this.body = Bodies.rectangle(x, y, 10, 10, options);
        
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.body);

    }

    display(){

        var pos =this.body.position;
		imageMode(CENTER);
        fill("brown");
        
		image(this.image, pos.x, pos.y, 450, 450);

    }

}