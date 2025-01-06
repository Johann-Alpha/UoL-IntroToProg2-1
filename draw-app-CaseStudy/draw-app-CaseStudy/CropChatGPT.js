let startX, startY, selectionWidth, selectionHeight;

let isDragging = false;



function preload() {

  img = loadImage('path/to/your/image.jpg'); 

}



function setup() {

  createCanvas(400, 300);

}



function draw() {

  background(220);

  image(img, 0, 0); 



  if (isDragging) {

    rect(startX, startY, selectionWidth, selectionHeight);

  }

}



function mousePressed() {

  isDragging = true;

  startX = mouseX;

  startY = mouseY;

}



function mouseDragged() {

  if (isDragging) {

    selectionWidth = mouseX - startX;

    selectionHeight = mouseY - startY;

  }

}



function mouseReleased() {

  isDragging = false;

  // Get the cropped image

  let croppedImage = img.get(startX, startY, selectionWidth, selectionHeight);

  // Display the cropped image (adjust position as needed)

  image(croppedImage, 100, 100);

}
