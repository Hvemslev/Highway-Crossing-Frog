class log{
    constructor(x,y,l,dir){
        this.pos=createVector(x,width/14*y+5)
        this.l=width/14*l
        this.dir=dir
    }
    show(){
        fill(150,75,0)
        rect(this.pos.x,this.pos.y,this.l,width/14-10)
    }
    move(){
        var moving 
        moving=createVector(this.dir,0)
        this.pos.add(moving)
    }
}