let fileNames = ["./epic-hip-hop.mp3", "./funny-tango.mp3"];

let songs = [];
let currentSongIndex;
let currentSong;

function preload() {
  for (let i = 0; i < fileNames.length; i++) {
    songs.push(loadSound(fileNames[i]));
  }
}

function nextSong() {
  currentSong.stop();

  currentSongIndex = (currentSongIndex + 1) % songs.length;
  currentSong = songs[currentSongIndex];

  currentSong.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  currentSongIndex = 0;
  currentSong = songs[currentSongIndex];
}

function draw() {
  if (currentSong.isPlaying()) {
    background(20, 220, 120);
  } else if (currentSong.isPaused()) {
    background(20, 120, 220);
  } else {
    background(220, 20, 120);
  }
}

function keyReleased() {
  if (key == "s") {
    currentSong.stop();
  } else if (key == "p") {
    if (currentSong.isPlaying()) {
      currentSong.pause();
    } else {
      currentSong.play();
    }
  } else if (key == "n") {
    nextSong();
  }
}
