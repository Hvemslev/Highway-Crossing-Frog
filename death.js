function die(){
    frogger.pos.set(width/14*7,width/14*13)
    life-=1
    timer=400
    for(i = 0; i < Lanes.length; i++){
        Lanes[i].been=false
    }
}