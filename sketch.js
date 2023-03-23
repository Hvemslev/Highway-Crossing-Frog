let frogger
let Lane
let Lanes = []
let score
//let Cars

function setup() {
  width=400
  height=width/14*16
  createCanvas(width,height);
  //Cars = new cars(x,y)
  Lane = new lane(width/14*2) 
  Lanes.push(Lane)
  Lane = new lane(width/14*3) 
  Lanes.push(Lane)
  Lane = new lane(width/14*4) 
  Lanes.push(Lane)
  Lane = new lane(width/14*5) 
  Lanes.push(Lane)
  Lane = new lane(width/14*6) 
  Lanes.push(Lane)
  Lane = new lane(width/14*7) 
  Lanes.push(Lane)
  Lane = new lane(width/14*8) 
  Lanes.push(Lane)
  Lane = new lane(width/14*9) 
  Lanes.push(Lane)
  Lane = new lane(width/14*10) 
  Lanes.push(Lane)
  Lane = new lane(width/14*11) 
  Lanes.push(Lane)
  Lane = new lane(width/14*12) 
  Lanes.push(Lane)
  Lane = new lane(width/14*13) 
  Lanes.push(Lane)
  //Lane = new lane(height/16*14) 
  //Lanes.push(Lane)
  frogger=new frog(width/14*7,height/16*14)
  score=0
}

function draw() {
  background(0);
  fill(0,255,0)
  frogger.show()
  //cars.show()
  

  for(i = 0; i < Lanes.length; i++){
    if(frogger.pos.y==Lanes[i].y && Lanes[i].been==false){
      score+=10
      Lanes[i].been=true
    }
  }

  print(Lanes[length-2].been)



  fill(0)
  textSize(20)
  text(score,20,20)

}
