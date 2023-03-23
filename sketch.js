let frogger
let wdth
let hght
let Lane
let Lanes = []
let score
let Cars

function setup() {
  let wdth=800
  let hght=wdth/14*16 //canvas will always be a certain amount of even spaces based on width
  createCanvas(wdth,hght);
  Cars = new cars(x,y)
  Lane = new lane(hght/16*2) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*3) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*4) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*5) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*6) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*7) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*8) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*9) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*10) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*11) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*12) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*13) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*14) 
  Lanes.push(Lane)
  Lane = new lane(hght/16*15) 
  Lanes.push(Lane)
  frogger=new frog(width/14*7,hght-wdth/14*2)
  score=0
}

function draw() {
  background(0);
  fill(0,255,0)
  frogger.show()
  cars.show()
  

  for(i = 0; i < Lanes.length; i++){
    if(frogger.pos.y==i.y/*&&i.been==false*/){
      point+=10
      i.been=true
    }

  }

  fill(0)
  textSize(20)
  text(score,20,20)

  print(Lanes)
}
