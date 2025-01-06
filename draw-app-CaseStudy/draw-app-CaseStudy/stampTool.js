// The following is made by me adapted from different sources
function StampTool () {
    this.icon = "assets/stampIcon.png";
    this.name = "Stamp";

    var slider;
    

    this.draw = function () {
        
        if(mouseIsPressed && mouseY < height) {
            // the following code adapted from https://stackoverflow.com/questions/75879210/how-to-load-images-in-draw-function-in-p5-js

            // and https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_rangeslider

            slider = select("#sizeSlider");

            loadImage("assets/stampIcon.jpg", (img) => {
                
                image(img, mouseX - img.width * slider.value() / 100 / 2, mouseY - img.width * slider.value() / 100 / 2, img.width * slider.value() / 100, img.height * slider.value() / 100);
                
            });

            
            // end of adapted code

            
        }
    }

    this.populateOptions = function () {
        select(".options").html (
            "<input type='range' min='1' max='200' value='100' class='slider' id='sizeSlider'>Change Size</input>"
        );

        

    }
}

// This extension works, but sometimes it is necessary to press the mouse button 
// for 2 or 3 seconds due to the fact that we have to wait for the image to be 
// completely loaded. The image size needs to be linked to the slider value. However, p5.js makes it very difficult to work with images inside the draw() method, and that's why so many issues here. This work is still in progress