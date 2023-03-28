let frogger
let Lane
let Lanes = []
let score
let car
let Cars = []


function setup() {
  width=700 // HAS to be a mulitiple of 7 otherwise will round up or down, and won't allign playerposition with lanes
  height=width/14*15
  createCanvas(width,height);
  car = new cars(10,width/14*12)
  Cars.push(car)
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
  frogger=new frog(width/14*7,width/14*13)
  score=0


  
}
 
function draw() {
  background(0);
  fill(0,180,0)
  rect(0,width/14,width,width/14)
  fill(200,0,200)
  rect(0,width/14*7,width,width/14)
  rect(0,width/14*13,width,width/14)
  fill(0,0,180)
  rect(0,width/14*2,width,width/14*5)
  
  
  
  fill(0,255,0)
  frogger.show()
  

  for(i = 0; i < Lanes.length; i++){
    if(frogger.pos.y==Lanes[i].y && Lanes[i].been==false){
      score+=10
      Lanes[i].been=true
    }
  }

  print(Lanes)
  print(frogger.pos.y)


  fill(255)
  textSize(20)
  text(score,20,20)
  Cars[0].show()
  car.move()
  //if(Cars[0].x==300) {
    //Cars.splice(0,1)
  //}
}
