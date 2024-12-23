let faceMesh;
let options = {maxFaces: 1, refineLandmarks: false, flipped: false};
let video;
let faces = [];

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

  image(video, 0, 0, width, height);

  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];

    // Draw every 5th keypoint
    for (let j = 0; j < face.keypoints.length; j++) {
      if (j % 5 === 0) {
        let keypoint = face.keypoints[j];
        fill(0, 255, 0);
        noStroke();
        circle(keypoint.x, keypoint.y, 5);
      }
    }

    // Define keypoint indices for features
    let leftEye = [46, 55, 117, 174]; // Indices for left eye
    let rightEye = [285, 300, 399, 346]; // Indices for right eye

    // Draw boxes around the eyes
    drawFeatureBox(face, leftEye, [255, 0, 0]); // Red box for left eye
    drawFeatureBox(face, rightEye, [0, 0, 255]); // Blue box for right eye
  }
}

// Function to draw a bounding box around a set of keypoints
function drawFeatureBox(face, indices, color) {
  let xMin = width, xMax = 0, yMin = height, yMax = 0;
  for (let i of indices) {
    let keypoint = face.keypoints[i];
    xMin = min(xMin, keypoint.x);
    xMax = max(xMax, keypoint.x);
    yMin = min(yMin, keypoint.y);
    yMax = max(yMax, keypoint.y);
  }
  noFill();
  stroke(color[0], color[1], color[2]);
  rect(xMin, yMin, xMax - xMin, yMax - yMin);
}
