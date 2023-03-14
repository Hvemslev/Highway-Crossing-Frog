let frogger
let wdth
let hght


function setup() {
  let wdth=800
  let hght=wdth/14*16 //canvas will always be a certain amount of even spaces based on width
  createCanvas(wdth,hght);
  frogger=new frog(width/14*7,hght-wdth/14*2)
}

function draw() {
  background(220);
  fill(0,255,0)
  frogger.show()
  
}
