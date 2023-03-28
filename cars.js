class cars {
    constructor(x,y,spd) {
        this.x = x
        this.y = y
        this.spd = spd
    }
show() {
    rect(this.x,this.y,width/14,width/14)

}

move() {
this.x+=this.spd


}

}
