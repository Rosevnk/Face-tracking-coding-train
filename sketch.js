let faceMesh;
let options = {maxFaces: 1, refineLandmarks: false, flipped: false};
let video;
let face = [];

function preload() {
  faceMesh= ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);

    // Create the video and hide it
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    // Start detecting faces from the webcam video
    faceMesh.detectStart(video, gotFaces);
  
}  

function gotFaces(results) { // Callback function for when faceMesh outputs data
faces = results;  // Save the output to the faces variable
}


function draw() {
  background(220);
}