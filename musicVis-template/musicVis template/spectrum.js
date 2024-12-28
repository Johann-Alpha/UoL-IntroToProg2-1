function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		fill(0,255,0)
		// for (var i = 0; i< spectrum.length; i++){
		// 	var x = map(i, 0, spectrum.length, 0, width);
		//     var h = -height + map(spectrum[i], 0, 255, height, 0);
		// 	console.log(h);
		// 	fill(spectrum[i], map(spectrum[i], 0, 255, 255, 0), 0);
		//     rect(x, height, width / spectrum.length, h );
  		// }

		for (var i = 0; i< spectrum.length; i++){
			var h = map(i, 0, spectrum.length, 0, height);
		    var x = map(spectrum[i], 0, 255, 0, width);
			console.log(h);
			fill(spectrum[i], map(spectrum[i], 0, 255, 255, 0), 0);
		    rect(0, i * height / spectrum.length, x, height / spectrum.length);
  		}	
	
		pop();
	};
}
