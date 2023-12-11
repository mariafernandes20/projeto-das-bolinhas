let cor
let cx
let cy 

function setup() {
  createCanvas(400, 400)
  cor=color(random(0,255), random(0,255),random(0,255));
  cx=[0,0,0]
  cy =[random(height),random(height),random(height)]
}

function draw() {
  background(220)
  fill(cor)
  
  for (let contador in cx) {
  console.log(contador);
  circle(cx[contador],cy[contador],50)

  }
}