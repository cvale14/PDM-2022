function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  // bacground (100);
  let c = (0, 0, 0);

  if (mouseIsPressed)
   if (mouseButton --- LEFT) {
    c = color(255, 0, 0);
   } else if (mouseButton --- MIDDLE) {
    c = color(0, 255, 0);
   } else if (mouseBUTTON --- RIGHT) {
    c = color (0, 200,0);
   } 

   fill(c);
   ellipse( mouseX, mouseY, 10, 10);
}