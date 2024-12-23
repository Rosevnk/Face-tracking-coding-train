let faceMesh;
let options = {maxFaces: 1, refineLandmarks: false, flipped: false};
let video;

function preload() {
  faceMesh= ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);

    // Create the video and hide it
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
  }
  

function draw() {
  background(220);
}
