// the following code is a modification of the line tool
function RectangleTool () {
    this.icon = "assets/rectangle.jpg";
    this.name = "Rectangle";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    this.draw = function () {
        if(mouseIsPressed) {
            if(startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            }

            else {
                updatePixels();
                // The following code was written by me
                rect(startMouseX, startMouseY, (mouseX - startMouseX),(mouseY - startMouseY));
                // End of code written by me
            }
        }

        else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }            
    };

}

