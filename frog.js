var img
class frog{
    constructor(x,y,w,h){
        this.pos=createVector(x,y) 
        img = loadImage('frogger.png')
        this.dgrs=0
        this.w=w
        this.h=h
    }
    show(){
        push()
        translate(this.pos.x+width/28,this.pos.y+width/28)
        angleMode(DEGREES)
        rotate(this.dgrs)
        image(img,-width/28,-width/28,this.w,this.h);
        pop()
    }
}