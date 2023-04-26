let frogger
let Lane
let Lanes = []

let car
let Cars = []
let Log
let Logs = []

//HUD elements
let score
let life
let imag
let timer


function setup() {
  width=700 // HAS to be a mulitiple of 7 otherwise will round up or down, and won't allign playerposition with lanes
  height=width/14*15
  createCanvas(width,height);
  
  life=5
  imag=loadImage('frogger.png')
  timer=400

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
  
  
  //wooden logs
  Log = new log(0,6,4,1)
  Logs.push(Log)
  Log = new log(300,5,4,-2)
  Logs.push(Log)
  Log = new log(200,4,4,2)
  Logs.push(Log)
  Log = new log(100,3,4,-1)
  Logs.push(Log)
  Log = new log(400,2,4,3)
  Logs.push(Log)
  
  //frog
  frogger=new frog(width/14*7,width/14*13,width/14,width/14)
  
  score=0

  //1st lane
  car = new cars(width/14*3,width/14*12,-2)
  Cars.push(car)
  car = new cars(width/14*8,width/14*12,-2)
  Cars.push(car)
  car = new cars(width/14*15,width/14*12,-2)
  Cars.push(car)


  

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

  
  
  //logs movement and hitbox
  for(i = 0; i < Logs.length; i++){
    Logs[i].show()
    Logs[i].move()
    
  }

  for(i = 0; i < Logs.length; i++){
  //only for one direction
    if(Logs[i].dir>0){
      if(Logs[i].pos.x>width){
        Logs[i].pos.x=0-Logs[i].l
      }
    } else if(Logs[i].dir<0){
      if(Logs[i].pos.x<-Logs[i].l){
        Logs[i].pos.x=width+Logs[i].l
      }
    }

  }
  


  


  
  fill(0,255,0)
  if(life>0){
    frogger.show()
  }
  
  

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
  
  
  for(i = 0; i < Cars.length; i++){
    Cars[i].show()
    Cars[i].move()
    if(Cars[i].x==0-width/14) {
        Cars[i].x=width/14*17
    }
  }


  


  
  if(frogger.pos.y<=width/14*6&&frogger.pos.y>=width/14*2){
    for(i = 0; i < Logs.length; i++){
      if(frogger.pos.y==Logs[i].pos.y-5){
        
        
        
        if(frogger.pos.x>Logs[i].pos.x&&frogger.pos.x<Logs[i].pos.x+Logs[i].l){
          frogger.pos.add(Logs[i].dir,0)
        } else {die()}
      }
    }
  }




  if(frogger.pos.y==width/14){
    score+=50
    frogger.pos.set(width/14*7,width/14*13)
  }


  //HUD
  for(i = 0; i < life; i++) {
    image(imag,10+i*40,height-50,50,50)
  }
  if(life>0){
    timer-=0.3
  }
  fill(0,255,0)
  rect(width-10-timer,height-40,timer,30)
  if(timer<0){
    die()
  }
  if(life==0){
    fill(255)
    textAlign(CENTER,CENTER)
    textSize(50)
    text('GAME OVER',width/2,height/2+5)
    textSize(20)
    text('Press [SPACE] to try again',width/2,height/2+50)
    text('Score: '+score,width/2,height/4*3)
  }
}
