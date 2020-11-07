class Rope{                         
    constructor(body1,body2, offsetX) 
    { this.offsetX=offsetX 
        //this.offsetY=0
         var options={ 
            bodyA:body1, 
            bodyB:body2,
            pointB:{x:this.offsetX, y:0} } 
            console.log(options); 
            this.rope=Constraint.create(options) 
            World.add(world,this.rope) }


display() { 
 var pointA=this.rope.bodyA.position;
 var pointB=this.rope.bodyB.position; 
 push();
 pop();
 strokeWeight(5); 
 strokeColor(white)
 
 line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);

 //var Anchor1X=pointA.x 
 //var Anchor1Y=pointA.y 
// var Anchor2X=pointB.x+this.offsetX 
 //var Anchor2Y=pointB.y+this.offsetY 
// line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

} }