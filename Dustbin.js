class Dustbin{
    constructor(x, y, width, height) {
        var option = {
            isStatic: true,
            'restitition':0,
            'friction':1,
            'density':0.1,
        }

        this.body = Bodies.rectangle(x, y, width, height, option);
        
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){

    rectMode(CENTER);
    
    fill("white");

    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}