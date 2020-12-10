class Rope {
    constructor (pointA, bodyB) {
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            length: 100,
            stiffness: 0.5
        }

        this.rope = Matter.Constraint.create (options);
        World.add(world, this.rope);
    }

    display (){
        var pointA = this.rope.pointA;
        var pointB = this.rope.pointB;

        line (pointA.x, pointA.y, pointB.x, pointB.y);
    }
}