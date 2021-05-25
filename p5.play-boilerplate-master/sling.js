class Slingshot
{
    constructor(bodyA,pointB)
    {
      var options=
      { bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.1
      }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling=Matter.Constraint.create(options);
        World.add(myworld,this.sling)
    }
    attach(bodyA)
    {
      this.sling.bodyA=bodyA;
    }
    fly()
    {
      this.sling.bodyA=null;
    }
    display()
    {
      image(this.sling1,200,20);
      image(this.sling2,170,20);
      if(this.sling.bodyA!=null && slingdrag===1)
      {
        strokeWeight(10);
        stroke(127, 65, 32);
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.sling.pointB.x-10,this.sling.pointB.y);
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.sling.pointB.x+30,this.sling.pointB.y-3);
        image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30);
        
      }
    }
}