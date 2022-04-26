function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(120, 120, 120);

  let color1 = [186, 0, 122, 100];

  fill(color1)
  beginShape();
vertex(30, 20);
vertex(50, 10);
vertex(85, 20);
vertex(85, 75);
vertex(30, 75);
endShape(CLOSE);

fill(0, 0, 255, 100)
rect(50, 50, 100, 100)


}