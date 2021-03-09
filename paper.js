class Paper{
    constructor(x,y,RADIUS){
      var  options={
            isStatic:false,
            'restitution':0.3,
            friction:0,
            density:1.2
        
    }
    
    this.body=Bodies.circle(x,y,radius,options)
   this.x=x;
   this.y=y;
   this.radius=radius;
World.add(world,this.body)

    }



   

display(){
    ellipseMode(RADIUS)
    Push();
    Translate(paper.pos.x,paper.pos.y)
    var pos=this.body.position;
    var angle=this.body.angle;
fill("yellow")
rotate(angle);
circle(this.body.postion.x,this.body.postion.y,this.radius)

}
};