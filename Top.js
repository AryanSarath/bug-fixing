class Top {
    constructor(){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle (400, 100, 200, 25, options);
        this.width = 200;
        this.height = 25;
        World .add (world, this.body);
    }
    display (){
        var pos = this.body.position;
        rectMode(CENTER);
        rect (pos.x, pos.y, this.width, this.height);
    }
}