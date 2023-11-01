let pos;

let velSliderX;
let velSliderY;

let circleColorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);

  velSliderX = createSlider(-10, 10, 0, 1);
  velSliderX.position(50, 50);

  velSliderY = createSlider(-10, 10, 0, 1);
  velSliderY.position(250, 50);

  circleColorPicker = createColorPicker("white");
  circleColorPicker.position(450, 50);

  pos = { x: width / 2, y: height / 2 };
}

function draw() {
  background(220, 20, 120);

  // draw circle
  fill(circleColorPicker.color());
  ellipse(pos.x, pos.y, 30, 30);

  // draw labels
  fill("gold");
  text("x velocity", 50, 30);
  text("y velocity", 250, 30);
  text("circle color", 450, 30);

  // update positions
  pos.x += velSliderX.value();
  pos.y += velSliderY.value();
}
