class Bob {
    constructor (x,y){
        this.body = Bodies.circle(x, y, 20);
        this.radius = 20
        World.add(world, this.body);
    }

    display (){
        var pos = this.body.position;
        circle (pos.x, pos.y, 2 * this.radius);
    }
}