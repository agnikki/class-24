class Baseclass{
  constructor(x,y,width,height,angle){
    var options={ 
        restitution:0.4,
        friction:1,
        density:1.2  
      }
      
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
      


 }
 display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
     pop();
 }








}