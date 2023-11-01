let nameStringRaw =
  '"Name 0" ;"Name 1" ;"Name 2" ;"Name 3" ;"Name 4" ;"Name 5" ;"Name 6" ;"Name 7" ;"Name 8" ;"Name 9" ;"Name 10" ;"Name 11" ;"Name 12" ;"Name 13" ;"Name 14" ;"Name 15"';
let nameString = nameStringRaw.replaceAll('"', "");
let names = nameString.split(" ;");

let nextNameIdx;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(42);

  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255);

  for (let n = 0; n < 10; n++) {
    for (let i = 0; i < names.length; i++) {
      let j = floor(random(i, names.length));
      let nj = names[j];
      names[j] = names[i];
      names[i] = nj;
    }
  }

  names.unshift("6063D Mid-Term");
  nextNameIdx = 0;
}

function draw() {
  background(220, 20, 120);
  text(names[nextNameIdx], 0, 0, width, height);
}

function mouseClicked() {
  nextNameIdx = (nextNameIdx + 1) % names.length;
}
