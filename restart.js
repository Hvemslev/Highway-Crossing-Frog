function restart(){
    life=5
    timer=400
    score=0
    for(i = 0; i < Lanes.length; i++){
          Lanes[i].been=false
    }
}