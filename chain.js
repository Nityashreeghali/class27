class Chain{

    constructor(body1,body2){
        var option ={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:50
        }
        this.chain=Constraint.create(option) 
        World.add(world,this.chain)
    }
    display(){
        var point1=this.chain.bodyA.position;
        var point2=this.chain.bodyB.position;
        line(point1.x,point1.y,point2.x,point2.y)
    }
}