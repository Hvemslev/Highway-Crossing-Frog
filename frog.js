var img
class frog{
    constructor(x,y){
        this.pos=createVector(x,y) 
        img = loadImage('frogger.png')
        this.dgrs=0
    }
    show(){
        push()
        translate(this.pos.x+width/28,this.pos.y+width/28)
        angleMode(DEGREES)
        rotate(this.dgrs)
        image(img,-width/28,-width/28,width/14,width/14);
        pop()
    }
}