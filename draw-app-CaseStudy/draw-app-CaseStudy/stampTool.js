// The following is made by me adapted from different sources
function StampTool () {
    this.icon = "assets/stampIcon.png";
    this.name = "Stamp";

    var slider;

    

    this.draw = function () {
        
        if(mouseIsPressed && mouseY < height) {
            updatePixels();
            // the following code adapted from https://stackoverflow.com/questions/75879210/how-to-load-images-in-draw-function-in-p5-js

            // and https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_rangeslider

            slider = select("#sizeSlider");
            stampImage = select("#stampImage");

            stamp = extractFilename(stampImage.value());

            if (stamp == "") {
                stamp = "stampIcon.png";
            }

            loadImage('/assets/' + stamp, (img) => {
                image(img, mouseX - img.width * slider.value() / 100 / 2, mouseY - img.width * slider.value() / 100 / 2, img.width * slider.value() / 100, img.height * slider.value() / 100);
            });

            // end of adapted code
        }

        loadPixels();


    }

    this.populateOptions = function () {
        select(".options").html (
            "<input type='range' min='1' max='200' value='100' class='slider' id='sizeSlider'>Change Size</input> <br> <input type='file' id='stampImage' name='stampImage' accept='image/png, image/jpeg' />"
        );    


    }

    // code taken from https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly

    function extractFilename(path) {
        if (path.substr(0, 12) == "C:\\fakepath\\")
            return path.substr(12); // modern browser
          var x;
          x = path.lastIndexOf('/');
          if (x >= 0) // Unix-based path
            return path.substr(x+1);
          x = path.lastIndexOf('\\');
          if (x >= 0) // Windows-based path
            return path.substr(x+1);
          return path; // just the filename
    }



    // end of code taken from https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly


}

// This extension works, but sometimes it is necessary to press the mouse button 
// for 2 or 3 seconds due to the fact that we have to wait for the image to be 
// completely loaded. The image size needs to be linked to the slider value. However, p5.js makes it very difficult to work with images inside the draw() method, and that's why so many issues here. This work is still in progress


