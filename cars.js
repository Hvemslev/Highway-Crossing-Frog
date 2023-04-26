class cars {
    constructor(x,y,l,spd) {
        this.x = x
        this.y = y
        this.l=l*width/14
        this.spd = spd
    }
show() {
    rect(this.x,this.y,this.l,width/14)

}

move() {
this.x+=this.spd


}

}
