onLoad = function() {
	// document.getElementById("about-me").innerHTML = "This is pure javascript!";
	// $("#about-me").text("This was set with jQuery!");
	// $("#about-me").html("<h1>This is jQuery that overwrote the HTML</h1>");

	swipeSquiggles();
}


// Animate on load to have squiggles swipe in
function swipeSquiggles() {
	var elem = document.getElementById("animation");

	var widthPercent = 100;
  	
  	var id = setInterval(frame, 20);
	
	function frame() {
		if (widthPercent < 0) {
	  		clearInterval(id);
		} else {
			elem.style.backgroundSize = widthPercent-- + "% 100%";
		}
	}
}
