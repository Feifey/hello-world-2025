function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  noFill();

  for (let i = 0; i < 20; i++) {
    let x1 = random(50, 350);
    let x2 = random(50, 350);
    line(x1, i * 20, x2, i * 20);
  }
}
