let sound;
let fft;
let bandWidth;
let amp;
let levels = [];
// 调色板 #1
let palette = ['#f543b7', '#db38f5', '#a369e5', ' #21a4ea', '#59d7f5'];

function preload() {
  // 从URL加载音频
  let audioURL = 'Scenes from Childhood.mp3';
  sound = loadSound(audioURL, loaded);
}

function loaded() {
  // 一旦音频加载完成，播放它
  sound.play();
}

function setup() {
  createCanvas(1112, 834);
  amp = new p5.Amplitude();
  amp.setInput(sound);
  fft = new p5.FFT();
  bandWidth = width / 256;
}

function draw() {
  angleMode(DEGREES);
  background(0);
  translate(0, -140);
  let wave = fft.waveform();
  var s = fft.analyze();
  level = amp.getLevel();
  let xScale = width / wave.length;

  for (let r = 0; r < s.length; r++) {
    let col = color(palette[r % palette.length]);
    stroke(col);
    fill(r, 100, 255);
    // 矩形波形
    let amplitude = s[r];
    let xx = map(amplitude, 0, s.length, height, 0);

    // 点波形
    strokeWeight(2);
    let a = map(r, 0, wave.length, 0, width);
    let b = wave[r] * 100 + height - 150;
    let b2 = wave[r] * 100 + height - 250;
    let b3 = wave[r] * 100 + height - 350;
    let b4 = wave[r] * 100 + height - 450;
    let b5 = wave[r] * 100 + height - 550;

    point(a, b);
    point(a, b2);
    point(a, b3);
    point(a, b4);
    point(a, b5);

    // 矩形覆盖在波形之上
    strokeWeight(1);
    rect(r * bandWidth, xx, bandWidth, xx);
  }
  translate(0, 60);
  let numPoints = 300;
  let angleStep = 360 / numPoints;
  let rad = 150;
  push()
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let col = color(palette[i % palette.length]);
    stroke(col);
    strokeWeight(3);
    let a = (wave[int(map(i, 0, numPoints, 0, wave.length))] + 0.5) * 3;
    let x = cos(i * angleStep) * (rad * a);
    let y = sin(i * angleStep) * (rad * a);
    if (i % 2 == 0) {
      x = 0.15;
      y = 0.15;
    }
    line(0, 0, x, y);
    fill(i, 50, 200);
    ellipse(x, y, 10, 10);
  }
  endShape(CLOSE);
  pop();
}

function mouseClicked() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}