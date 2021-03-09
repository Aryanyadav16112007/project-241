class Ground{
    constructor(x,y,width,height){
      var  options={
            isStatic:true
        }
    this.body=Bodies.rectangle(600,590,1200,15,options)
    this.width=1200;
    this.height=15;
   World.add(world,this.body);
    }


display(){
    var pos=this.body.position;
    rectMode(CENTER)
    fill("yellow");
    rect(this.body.postion.x,this.body.postion.y,this.width,this.height)


}
};