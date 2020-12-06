class Chain {
    constructor(a,b){
        var options = {
            bodyA : a,
            bodyB : b,
            stiffness : 0.04,
            length : 10
        }
         this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}