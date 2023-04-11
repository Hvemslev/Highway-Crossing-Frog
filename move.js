 function keyPressed(){
    if(keyCode==87&&frogger.pos.y>frogger.h){ //if [W] gets pressed, the frog will move up a 14th of the screens height
        frogger.pos.add(0,-width/14) //adds the vector to the position vector
        frogger.dgrs=0
    } else if(keyCode==65&&frogger.pos>frogger.h){
        frogger.pos.add(-width/14, 0)
        frogger.dgrs=270
    } else if(keyCode==83){ //if [S] gets pressed, the frog will move down a 14th of the screens height
        frogger.pos.add(0,width/14)
        frogger.dgrs=180
    } else if(keyCode==68){
        frogger.pos.add(width/14, 0)
        frogger.dgrs=90
    }
 }