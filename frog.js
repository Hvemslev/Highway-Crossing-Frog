class frog{
    constructor(x,y){
        this.pos=createVector(x,y) 
    }
    show(){
        rect(this.pos.x,this.pos.y,width/14,width/14)
    }
}