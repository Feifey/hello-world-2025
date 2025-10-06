let n = 0;
let c = 6; // spacing between points

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(255);
  noStroke();
}

function draw() {
  let a = n * 137.5;      // golden angle
  let r = c * sqrt(n);    // distance from center
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;

  fill(a % 255, 150, 255, 180);
  ellipse(x, y, 8, 8);

  n++;
  if (n > 1000) {
    noLoop(); // stop drawing after 1000 dots
  }
}
