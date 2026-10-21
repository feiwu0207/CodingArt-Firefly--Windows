// Firefly Windows
// Uses variables, arrays, loops, a class, and nested loops for the MFA requirement.
let fireflies = [];
let rows = 3;
let columns = 4;
let paneWidth = 108;
let paneHeight = 136;
let gap = 16;
let startX = 60;
let startY = 80;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  // Nested loops: the outer loop controls rows; the inner loop controls columns.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      let left = startX + col * (paneWidth + gap);
      let top = startY + row * (paneHeight + gap);
      // Create three fireflies per pane and store them in the array.
      for (let i = 0; i < 3; i++) {
        fireflies.push(new Firefly(left, top));
      }
    }
  }
}

function draw() {
  background(8, 15, 35);

  // Draw the dark panes and their thin borders.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      let left = startX + col * (paneWidth + gap);
      let top = startY + row * (paneHeight + gap);
      fill(12, 25, 46);
      stroke(57, 78, 99);
      strokeWeight(1);
      rect(left, top, paneWidth, paneHeight);
    }
  }

  // Update and display every firefly in the array.
  for (let i = 0; i < fireflies.length; i++) {
    fireflies[i].update();
    fireflies[i].display();
  }
}

class Firefly {
  constructor(left, top) {
    // Store the pane boundaries, leaving 14 pixels of space for the glow.
    this.left = left + 14;
    this.right = left + paneWidth - 14;
    this.top = top + 14;
    this.bottom = top + paneHeight - 14;
    this.x = random(this.left, this.right);
    this.y = random(this.top, this.bottom);
    this.speedX = random(-0.8, 0.8);
    this.speedY = random(-0.8, 0.8);
    this.angle = random(360);
    this.blinkSpeed = random(0.7, 1.4);
    this.size = random(3, 5);
  }

  update() {
    // Adjust the existing velocity slightly for more continuous movement.
    this.speedX += random(-0.035, 0.035);
    this.speedY += random(-0.035, 0.035);
    if (this.speedX > 0.9) this.speedX = 0.9;
    if (this.speedX < -0.9) this.speedX = -0.9;
    if (this.speedY > 0.9) this.speedY = 0.9;
    if (this.speedY < -0.9) this.speedY = -0.9;
    this.x += this.speedX;
    this.y += this.speedY;

    // At each edge, reset the position to the boundary and reverse velocity.
    if (this.x < this.left) {
      this.x = this.left;
      this.speedX *= -1;
    }
    if (this.x > this.right) {
      this.x = this.right;
      this.speedX *= -1;
    }
    if (this.y < this.top) {
      this.y = this.top;
      this.speedY *= -1;
    }
    if (this.y > this.bottom) {
      this.y = this.bottom;
      this.speedY *= -1;
    }
    this.angle += this.blinkSpeed;
  }

  display() {
    let glow = map(sin(this.angle), -1, 1, 5, 36);
    let light = map(sin(this.angle), -1, 1, 30, 255);
    noStroke();
    // Layer three translucent circles to create a soft glow.
    fill(220, 236, 120, glow * 0.4);
    circle(this.x, this.y, 28);
    fill(234, 241, 140, glow);
    circle(this.x, this.y, 17);
    fill(255, 239, 151, glow * 2);
    circle(this.x, this.y, 9);
    fill(255, 248, 189, light);
    circle(this.x, this.y, this.size);
  }
}
