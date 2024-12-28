/* This function creates straight lines on the canvas
	How does it work?
	Firstly, let's look at the methods loadPixels() and updatePixels().
	loadPixels(), in layman's words, takes a screenshot of the canvas and saves
	it in an array called pixels.
	updatePixels() removes any changes that occurred after that screenshot.

	The lineToTool object dynamically creates a straight line.
	The user presses the mouse on any place on the canvas to set in memory the initial point of the straight line. Then the draw() function takes a screenshot of the current state of the canvas.

	After that, while the user is still pressing the mouse, the draw() function will call the function updatePixels() and create the straight line, using the initial coordinates set in memory and the new position of the mouse.
	While the user keeps the mouse pressed, the draw() function will continuously update the canvas until the user releases the mouse.

	Note: do not forget that the updatePixels() function updates the canvas in relation to the previously saved screenshot. In this regard, if the user hasn't released the mouse, the function will be creating lines that disappear once they reach updatePixels() when the user moves the mouse, but they will only be part of the screenshot once the user releases the mouse and the function gets to loadPixels()
	*/




function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
