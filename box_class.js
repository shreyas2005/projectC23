class bx{
constructor(x,y,width,height,isStatic){
 var op={

    isStatic : true
 }
    this.body=Bodies.rectangle(x,y,width,height,isStatic);
    this.width=width;
    this.height=height;
    this.isStatic=isStatic;
    World.add(world,this.body);
}
display(){
var pos=this.body.position;
rectMode(CENTER);
fill("red");
rect(pos.x,pos.y,this.width,this.height);
}


}