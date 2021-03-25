class Paper {
    constructor(x,y,r){
        var option = {density:1,restitution:0.3};
        this.body = Bodies.circle(x,y,r,option);
        this.image=loadImage("PaperBall.png");
        World.add(world,this.body)
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}