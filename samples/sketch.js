let song;
let samples;

function preload() {
  song = loadSound("./funny-tango.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  samples = song.getPeaks();
}

function draw() {
  background(220, 20, 120);

  push();
  translate(0, height / 2);
  for (let i = 1; i < width; i++) {
    let x0 = i - 1;
    let y0 = map(samples[x0], -1, 1, -height / 2, height / 2);
    let y1 = map(samples[i], -1, 1, -height / 2, height / 2);
    line(x0, y0, i, y1);
  }
  pop();
}
