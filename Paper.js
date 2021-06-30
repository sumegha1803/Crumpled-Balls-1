class Paper {
    constructor(x, y, radius) {
        var option = {
            isStatic: false,
            'restitition':0.3,
            'friction':0.5,
            'density':8,
        }

        this.body = Bodies.circle(x, y, radius, option);
        
        this.radius = radius;
        

        World.add(world, this.body);
    }

    display(){

    ellipseMode(RADIUS);

    fill("red");


    circle(this.body.position.x, this.body.position.y, this.radius);
    }
}